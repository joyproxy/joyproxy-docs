---
title: "Scrapy, Crawl4AI & Crawlee Proxy Setup Guide: High-Concurrency Rotation, Retry Middleware & Bandwidth Control (2026)"
description: "Configure Rotating Residential, Business, Static ISP, Datacenter, Mobile proxies, and Web Scraping API across Python Scrapy, Crawl4AI, and Node.js Crawlee. Eliminate 407 auth failures, Keep-Alive sticky-IP bugs, and wasted headless bandwidth."
category: guides
date: 2026-11-28
---

# Scrapy, Crawl4AI & Crawlee Proxy Setup Guide: High-Concurrency Rotation, Retry Middleware & Bandwidth Control (2026)

When teams move past quick `requests` prototypes into production web harvesting or LLM/RAG dataset pipelines, three open-source crawler frameworks dominate in 2026: **Scrapy** (Python's high-throughput async spider engine), **Crawl4AI** (the LLM-ready Markdown crawler built on Playwright), and **Crawlee** (Apify's TypeScript/Node.js & Python crawler with built-in `SessionPool` state management).

Yet putting a raw proxy URL into any of these frameworks without adapting its connection lifecycle usually triggers four expensive production failures:

* **Sticky IP Lock-In (`Connection: keep-alive`)**: Scrapy's Twisted HTTP client and Node's HTTP agent reuse open TCP tunnels by default. Even if you use a per-request rotating residential gateway, subsequent requests down the same pooled socket keep the previous exit IP—leading to sudden `403` / `429` bursts.
* **Sub-Optimal `407` & `403` Retry Loops**: Out-of-the-box retry middlewares wait blindly on the same blocked session instead of rotating the JoyProxy `-session-...` parameter or escalating hard WAF targets to **[Web Scraping API](https://www.joyproxy.com/products/web-unblocker.html)**.
* **Wasted Headless Bandwidth in Crawl4AI & Crawlee**: Loading fonts, analytics scripts, CSS, and 4K hero images over metered residential traffic can consume **3 MB–8 MB per page** when the LLM only needs **40 KB of clean Markdown**.
* **Wrong Network Tier for the Job**: Using residential GBs to crawl uncompressed XML sitemaps, or pointing a datacenter IP at a Cloudflare-protected checkout flow.

This playbook shows how to architect **multi-tier proxy routing, custom retry middleware, session-pool rotation, and bandwidth pruning** across **Scrapy**, **Crawl4AI**, and **Crawlee** using JoyProxy.

---

## 1. Matching Crawler Workloads to the Right JoyProxy Line

Production crawlers rarely need a single proxy type for every URL. Splitting traffic by target difficulty cuts cost dramatically while boosting HTTP `200` yield:

| Crawler Layer / Target Type | Recommended JoyProxy Product | Entry Endpoint | Best Practice |
| :--- | :--- | :--- | :--- |
| **High-volume HTML spiders & pagination** | **[Rotating Residential Proxies](https://www.joyproxy.com/products/proxy-residential.html)** | `gate.joyproxy.com:9001` (`-zone-resi`) | Use per-request rotation for stateless pages, or `-session-<id>-sessTime-15` for multi-page pagination. |
| **Enterprise high-concurrency RAG & SERP** | **[Business Proxies](https://www.joyproxy.com/products/proxy-business.html)** | `gate.joyproxy.com:9001` (`-zone-biz`) | Dedicated high-throughput pool for sustained parallel Scrapy / Crawlee workers. |
| **Authenticated portals & long-lived sessions** | **[Static ISP Proxies](https://www.joyproxy.com/products/proxy-isp.html)** | `isp.joyproxy.com:<port>` | 1:1 consumer broadband ASN with unmetered traffic; bind one IP per Crawlee session or Scrapy cookie jar. |
| **Sitemaps, `robots.txt` & open JSON feeds** | **[Datacenter Proxies](https://www.joyproxy.com/products/proxy-datacenter.html)** | `dc.joyproxy.com:<port>` | Unmetered bandwidth and ultra-low latency for URL discovery before dispatching residential workers. |
| **Mobile-first apps & carrier-gated endpoints** | **[Mobile Proxies](https://www.joyproxy.com/products/proxy-mobile.html)** | `gate.joyproxy.com:9001` (`-zone-cellular`) | Authentic 4G/5G carrier CGNAT exits for mobile-only APIs and strict anti-bot targets. |
| **Cloudflare Turnstile / DataDome / heavy SPAs** | **[Web Scraping API](https://www.joyproxy.com/products/web-unblocker.html)** | `GET https://api.joyproxy.com/v1/fetch` | Zero browser/TLS maintenance fallback (`render=true`, `super=true`); billed strictly on HTTP `200` success. |

---

## 2. Python Scrapy: Rotating Middleware, Per-Session Sticky IPs & Retry Escalation

Scrapy's built-in `HttpProxyMiddleware` reads `request.meta["proxy"]`, **but** it does not automatically parse embedded `user:pass@host:port` credentials cleanly in every Twisted version, nor does it isolate `Keep-Alive` pools when rotating per request.

### Step A: Disable Connection Reuse for Per-Request Rotation

In `settings.py`, configure concurrent workers and force clean `CONNECT` handshakes whenever you want a fresh residential IP on every request:

```python
# settings.py
CONCURRENT_REQUESTS = 32
DOWNLOAD_TIMEOUT = 25
RETRY_ENABLED = True
RETRY_TIMES = 4
RETRY_HTTP_CODES = [403, 407, 429, 500, 502, 503, 504]

# Prevent Twisted from keeping one CONNECT tunnel pinned to an old exit IP
DEFAULT_REQUEST_HEADERS = {
    "Connection": "close",
    "Accept-Language": "en-US,en;q=0.9",
}

DOWNLOADER_MIDDLEWARES = {
    "mycrawler.middlewares.JoyProxyMiddleware": 350,
    "scrapy.downloadermiddlewares.httpproxy.HttpProxyMiddleware": 400,
    "mycrawler.middlewares.JoyProxyRetryMiddleware": 550,
    "scrapy.downloadermiddlewares.retry.RetryMiddleware": None,
}
```

### Step B: Custom `JoyProxyMiddleware` (Supports Geo, Sticky Sessions & `Proxy-Authorization`)

In `middlewares.py`, build the `Proxy-Authorization` header explicitly and let each spider choose between **per-request rotation** and **sticky session IDs** (for pagination or cart/session continuity):

```python
# middlewares.py
import base64
import os
import uuid
from scrapy.downloadermiddlewares.retry import RetryMiddleware
from scrapy.utils.response import response_status_message


class JoyProxyMiddleware:
    def __init__(self):
        self.subuser = os.environ["JOYPROXY_SUBUSER"]
        self.password = os.environ["JOYPROXY_PASSWORD"]
        self.gateway = "http://gate.joyproxy.com:9001"

    def _auth_header(self, zone="resi", region="us", session_id=None, sess_time=15):
        parts = [self.subuser, f"zone-{zone}"]
        if region:
            parts.append(f"region-{region}")
        if session_id:
            parts.append(f"session-{session_id}")
            parts.append(f"sessTime-{sess_time}")
        username = "-".join(parts)
        token = base64.b64encode(f"{username}:{self.password}".encode("utf-8")).decode("ascii")
        return f"Basic {token}"

    def process_request(self, request, spider):
        # Allow per-request overrides via request.meta
        if request.meta.get("use_datacenter"):
            # Static Datacenter / ISP IP-whitelisted or credentialed entry point
            request.meta["proxy"] = os.environ["JOYPROXY_DC_ENDPOINT"]
            return

        zone = request.meta.get("proxy_zone", "resi")
        region = request.meta.get("proxy_region", "us")
        sticky = request.meta.get("sticky_session", False)

        session_id = request.meta.get("session_id")
        if sticky and not session_id:
            session_id = uuid.uuid4().hex[:10]
            request.meta["session_id"] = session_id

        request.meta["proxy"] = self.gateway
        request.headers["Proxy-Authorization"] = self._auth_header(
            zone=zone, region=region, session_id=session_id
        )


class JoyProxyRetryMiddleware(RetryMiddleware):
    def process_response(self, request, response, spider):
        if request.meta.get("dont_retry", False):
            return response

        # Rotate session ID immediately if the current exit IP gets 403 or 429
        if response.status in (403, 429):
            if request.meta.get("sticky_session"):
                request.meta["session_id"] = uuid.uuid4().hex[:10]
            reason = response_status_message(response.status)
            return self._retry(request, reason, spider) or response

        return super().process_response(request, response, spider)
```

> [!TIP] Why `Proxy-Authorization` Beats Inline URL Credentials in Scrapy
> Encoding `-zone-resi-region-us-session-...` in Python and injecting it directly into `request.headers["Proxy-Authorization"]` prevents URL-escaping bugs, avoids leaking passwords in Scrapy debug logs, and lets you switch regions or rotate `session_id` cleanly on retry. If you still encounter `407` errors, check our [JoyProxy 407 Troubleshooting & Extraction Guide](https://www.joyproxy.com/blog/guides/stop-407-rotating-proxy-extraction-guide/).

---

## 3. Crawl4AI: LLM-Ready Markdown Crawling Without Burning Proxy GBs

**Crawl4AI** (`AsyncWebCrawler`) wraps Playwright to extract clean, token-efficient Markdown for RAG and AI agents. Because Crawl4AI launches real Chromium instances, every unblocked stylesheet, tracker, and font drains your residential traffic quota.

### Production Crawl4AI Config With JoyProxy & Bandwidth Pruning

Below is a production-ready async pattern using `BrowserConfig`, `CrawlerRunConfig`, and JoyProxy's residential gateway—plus automatic escalation to **JoyProxy Web Scraping API** when a target serves a Cloudflare challenge:

```python
import asyncio
import os
import uuid
import httpx
from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig, CacheMode

SUBUSER = os.environ["JOYPROXY_SUBUSER"]
PASSWORD = os.environ["JOYPROXY_PASSWORD"]
SCRAPING_TOKEN = os.environ.get("JOYPROXY_SCRAPING_TOKEN", "")


def build_joyproxy_config(zone: str = "resi", region: str = "us", sticky_minutes: int = 10) -> dict:
    session_id = uuid.uuid4().hex[:8]
    username = f"{SUBUSER}-zone-{zone}-region-{region}-session-{session_id}-sessTime-{sticky_minutes}"
    return {
        "server": "http://gate.joyproxy.com:9001",
        "username": username,
        "password": PASSWORD,
    }


async def block_heavy_assets(page, context, **kwargs):
    """Abort images, media, fonts, and ad trackers to cut residential proxy GB usage by 60-80%."""
    async def route_handler(route):
        rtype = route.request.resource_type
        url = route.request.url
        if rtype in ("image", "media", "font") or any(
            d in url for d in ("googletagmanager.com", "doubleclick.net", "hotjar.com", "clarity.ms")
        ):
            await route.abort()
        else:
            await route.continue_()

    await context.route("**/*", route_handler)


async def fetch_markdown_with_fallback(url: str, region: str = "us") -> str:
    browser_cfg = BrowserConfig(
        headless=True,
        proxy_config=build_joyproxy_config(zone="resi", region=region),
        extra_args=[
            "--disable-quic",  # Prevents UDP/443 QUIC bypass leaks outside the HTTP CONNECT tunnel
            "--disable-webrtc-hw-encoding",
        ],
    )
    run_cfg = CrawlerRunConfig(
        cache_mode=CacheMode.BYPASS,
        wait_until="domcontentloaded",
        page_timeout=30000,
        excluded_tags=["nav", "footer", "aside", "script", "style"],
    )

    async with AsyncWebCrawler(config=browser_cfg) as crawler:
        # Attach lightweight route filter hook if supported in your Crawl4AI build
        result = await crawler.arun(url=url, config=run_cfg)
        md = (result.markdown or "").strip() if result.success else ""
        if len(md) > 400 and "Just a moment..." not in md:
            return md

    # Escalate hard WAF / Turnstile pages to JoyProxy Web Scraping API
    if not SCRAPING_TOKEN:
        raise RuntimeError(f"Crawl4AI blocked on {url} and JOYPROXY_SCRAPING_TOKEN is unset")

    async with httpx.AsyncClient(timeout=45.0) as client:
        resp = await client.get(
            "https://api.joyproxy.com/v1/fetch",
            params={
                "token": SCRAPING_TOKEN,
                "url": url,
                "render": "true",
                "super": "true",
                "geoCode": region,
            },
        )
        resp.raise_for_status()
        return resp.text
```

> [!NOTE] Two Critical Browser Flags for Crawl4AI
> Always pass `--disable-quic` when running Chromium behind an `HTTP CONNECT` residential proxy. Otherwise Chromium may probe `UDP/443` directly after reading an `Alt-Svc: h3` header, stalling requests or leaking host UDP packets. See our [HTTP/3 (QUIC) & CONNECT Fallback Architecture](https://www.joyproxy.com/blog/technical/http3-quic-udp-proxying-connect-fallback-architecture/) deep dive and our [Playwright Bandwidth-Saving Guide](https://www.joyproxy.com/blog/guides/playwright-puppeteer-proxy-anti-detection-bandwidth-guide/).

---

## 4. Crawlee (Node.js / TypeScript): Native `ProxyConfiguration` & `SessionPool`

**Crawlee** ships with `ProxyConfiguration` and `SessionPool` out of the box. Every time Crawlee creates a new session—or retires a flagged session after a `403`, `429`, or CAPTCHA—it passes a fresh `sessionId` into `newUrlFunction`.

That maps **1-to-1** onto JoyProxy's `-session-<id>-sessTime-<minutes>` gateway syntax:

```typescript
import { PlaywrightCrawler, ProxyConfiguration } from "crawlee";

const SUBUSER = process.env.JOYPROXY_SUBUSER!;
const PASSWORD = process.env.JOYPROXY_PASSWORD!;

const proxyConfiguration = new ProxyConfiguration({
  newUrlFunction: (sessionId) => {
    // Crawlee assigns a stable sessionId per SessionPool slot and generates a new one on retire()
    const cleanId = (sessionId || Math.random().toString(36).slice(2, 10)).replace(/[^a-zA-Z0-9]/g, "");
    const username = `${SUBUSER}-zone-resi-region-us-session-${cleanId}-sessTime-20`;
    return `http://${encodeURIComponent(username)}:${encodeURIComponent(PASSWORD)}@gate.joyproxy.com:9001`;
  },
});

const crawler = new PlaywrightCrawler({
  proxyConfiguration,
  useSessionPool: true,
  persistCookiesPerSession: true,
  maxConcurrency: 12,
  sessionPoolOptions: {
    maxPoolSize: 40,
    sessionOptions: {
      maxUsageCount: 25, // Proactively rotate IP after 25 pages
      maxErrorScore: 2,  // Retire session quickly on consecutive blocks
    },
  },
  preNavigationHooks: [
    async ({ page, blockRequests }) => {
      // Built-in Crawlee helper to drop images, fonts, stylesheets, and tracking scripts
      await blockRequests({
        urlPatterns: [".png", ".jpg", ".jpeg", ".webp", ".woff2", ".mp4", "googletagmanager.com"],
      });
      await page.setExtraHTTPHeaders({ "Accept-Language": "en-US,en;q=0.9" });
    },
  ],
  async requestHandler({ request, page, session, log }) {
    const title = await page.title();
    if (title.includes("Just a moment") || title.includes("Access Denied")) {
      session?.retire(); // Immediately retires this JoyProxy -session- ID and triggers retry on a clean IP
      throw new Error(`Challenge page encountered on ${request.url}`);
    }
    log.info(`Fetched ${request.url} via session ${session?.id}: ${title}`);
  },
});

await crawler.run(["https://example.com/catalog"]);
```

### Mixing Static ISP & Rotating Residential Pools in Crawlee

If your Crawlee pipeline crawls **both** logged-in seller portals and public product pages:

1. Use **[Static ISP Proxies](https://www.joyproxy.com/products/proxy-isp.html)** (`isp.joyproxy.com:<port>`) inside `proxyUrls` for authenticated spiders so cookies stay bound to the same broadband ASN IP 24/7.
2. Use `newUrlFunction` with **[Business Proxies](https://www.joyproxy.com/products/proxy-business.html)** (`-zone-biz`) or **[Rotating Residential Proxies](https://www.joyproxy.com/products/proxy-residential.html)** (`-zone-resi`) for unauthenticated high-concurrency discovery.

---

## 5. Production Checklist: Avoiding Common Crawler Traps

Before scaling any Scrapy, Crawl4AI, or Crawlee cluster past 10 concurrent workers, verify these five controls:

1. **Isolate Static Entry Points vs. Exit IPs**: For **[Static ISP](https://www.joyproxy.com/products/proxy-isp.html)** and **[Datacenter](https://www.joyproxy.com/products/proxy-datacenter.html)** proxies, always point your crawler at `isp.joyproxy.com:<port>` or `dc.joyproxy.com:<port>`—never the raw exit IP. See [Entry Point vs. Exit IP Setup Guide](https://www.joyproxy.com/blog/guides/static-isp-datacenter-proxy-setup-guide/).
2. **Watch Keep-Alive Sockets**: In Scrapy (`HttpProxyMiddleware`) and Python `httpx`/`aiohttp`, keep `Connection: close` (or `max_keepalive_connections=0`) on **per-request rotating** endpoints; only enable Keep-Alive when using a **sticky `-session-...`** ID or a static IP. More details in [Proxy Connection Pooling & Keep-Alive Traps](https://www.joyproxy.com/blog/technical/proxy-connection-pooling-keepalive-timeouts-retries/).
3. **Align TLS Fingerprints for HTTP-Only Crawlers**: If your Scrapy spider hits Cloudflare or Akamai without a browser, swap Scrapy's default Twisted downloader for `curl_cffi` (`impersonate="chrome131"`). See [Demystifying JA4 & TLS Fingerprinting](https://www.joyproxy.com/blog/technical/ja4-tls-fingerprinting-cloudflare-bypass/).
4. **Enforce `NO_PROXY` on LLM & Vector DB Calls**: When Crawl4AI or Crawlee pushes extracted chunks to OpenAI, Anthropic, Pinecone, or Qdrant, ensure `NO_PROXY` excludes those API hosts so you never pay residential proxy bandwidth on LLM embeddings.
5. **Keep an Unblocker Fallback Queue**: Route `403` dead-letters directly to **[JoyProxy Web Scraping API](https://www.joyproxy.com/products/web-unblocker.html)** (`https://api.joyproxy.com/v1/fetch`) rather than burning 10 residential retries on a Turnstile wall.

---

## Next Steps

* **Start Crawling in Minutes**: Create sub-users and copy ready-to-paste `gate.joyproxy.com:9001` credentials from the **[JoyProxy Endpoint Extraction Center](https://www.joyproxy.com/admin-ip-extraction-center.html)**.
* **Add Zero-Maintenance Unblocking**: Pick up a **$5 / 50K credits** starter pack in the **[Web Scraping API Console](https://www.joyproxy.com/admin-web-unblocker.html)** (credits never expire, and failed requests cost zero credits).
* **Compare Plans**: Review **[JoyProxy Pricing](https://www.joyproxy.com/pricing.html)** across pay-as-you-go Residential, Business, Mobile, Static ISP, and Datacenter lines—with instant activation via Credit Card, PayPal, Apple Pay, Google Pay, WeChat Pay, UPI, and multi-chain crypto (`USDT` / `USDC` / `TRX` / `BNB` / `ETH` / `SOL` / `BTC`).
