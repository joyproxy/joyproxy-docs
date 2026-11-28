---
title: "Scrapy、Crawl4AI 與 Crawlee 代理配置實戰：高併發輪換、重試中介軟體與省流架構指南（2026）"
description: "詳解如何在 Python Scrapy、Crawl4AI 與 Node.js Crawlee 中接入 JoyProxy 動態住宅、商業、靜態 ISP、資料中心、行動代理及 Web Scraping API，徹底解決 407 驗證失敗、Keep-Alive 鎖死 IP 與無頭瀏覽器流量暴漲問題。"
category: guides
date: 2026-11-28
---

# Scrapy、Crawl4AI 與 Crawlee 代理配置實戰：高併發輪換、重試中介軟體與省流架構指南（2026）

當團隊從簡單的 `requests` 原型邁向生產級網頁擷取或 LLM / RAG 語料管線時，2026 年最主流的三大開源爬蟲框架分別是：**Scrapy**（Python 高吞吐非同步爬蟲引擎）、**Crawl4AI**（基於 Playwright 的大模型 Markdown 擷取框架）以及 **Crawlee**（Apify 開源的 TypeScript / Node.js 與 Python 爬蟲框架，內建 `SessionPool` 狀態管理）。

然而，如果直接把一行代理 URL 塞進這些框架而未針對連線生命週期做工程化改造，幾乎都會在生產環境踩中以下四個高成本陷阱：

* **`Connection: keep-alive` 鎖死舊 IP**：Scrapy 的 Twisted 下載器與 Node.js HTTP Agent 預設會複用 TCP 連線池。即便你接入了「每次請求換 IP」的動態住宅閘道，後續請求沿同一條長連線發出時仍會停留在上一個出口 IP，瞬間引發 `403` / `429` 雪崩。
* **`407` 與 `403` 重試邏輯低效**：預設重試中介軟體只會用同一條工作階段死等退避，而不會主動輪換 JoyProxy 的 `-session-...` 參數，也不會將強 WAF 頁面降級路由給 **[Web Scraping API](https://www.joyproxy.com/products/web-unblocker.html)**。
* **Crawl4AI 與 Crawlee 流量暴漲**：如果放任無頭瀏覽器載入圖片、字型、影片與追蹤腳本，依住宅流量計費時單頁輕鬆消耗 **3 MB–8 MB**，而大模型真正需要的往往只有 **40 KB 的純淨 Markdown**。
* **代理層級錯配**：用高價住宅流量去爬無反爬的 XML Sitemap，或用機房 IP 硬剛帶 Cloudflare Turnstile 驗證的動態頁。

本文將手把手拆解如何在 **Scrapy**、**Crawl4AI** 與 **Crawlee** 中落地**多級代理路由、自訂重試中介軟體、工作階段池隔離輪換與省流攔截規則**。

---

## 一、如何為不同爬蟲層級匹配正確的 JoyProxy 代理線？

成熟的擷取系統極少對所有 URL 使用同一種代理。按目標站風控強度分層調度，通常能直接壓降 50% 以上的網路成本並大幅抬高 `HTTP 200` 成功率：

| 爬蟲層級 / 目標場景 | 推薦 JoyProxy 產品 | 接入入口 | 工程最佳實踐 |
| :--- | :--- | :--- | :--- |
| **高併發 HTML 擷取與分頁採集** | **[動態住宅代理](https://www.joyproxy.com/products/proxy-residential.html)** | `gate.joyproxy.com:9001`（`-zone-resi`） | 無狀態頁面按請求輪換；多步分頁使用 `-session-<id>-sessTime-15` 保持短暫黏性。 |
| **企業級高併發 RAG 與 SERP 叢集** | **[商業代理](https://www.joyproxy.com/products/proxy-business.html)** | `gate.joyproxy.com:9001`（`-zone-biz`） | 適合 Scrapy / Crawlee 多 Worker 持續高併發拉取的高吞吐代理池。 |
| **需登入態或長期 Cookie 的門戶** | **[靜態 ISP 代理](https://www.joyproxy.com/products/proxy-isp.html)** | `isp.joyproxy.com:<專屬連接埠>` | 1:1 獨享真實寬頻 ASN 且不限流量，為每個 Crawlee 工作階段或 Scrapy CookieJar 綁定固定 IP。 |
| **Sitemap、`robots.txt` 與公開 JSON** | **[獨享資料中心代理](https://www.joyproxy.com/products/proxy-datacenter.html)** | `dc.joyproxy.com:<專屬連接埠>` | 極低轉發延遲與不限流量，專職負責前置 URL 發現，再把詳情頁派發給住宅池。 |
| **行動端介面與電信商 ASN 硬校驗** | **[行動代理](https://www.joyproxy.com/products/proxy-mobile.html)** | `gate.joyproxy.com:9001`（`-zone-cellular`） | 真實 4G/5G 電信商 CGNAT 出口，專治攔截寬頻與機房段的 App/H5 目標。 |
| **Cloudflare Turnstile / DataDome / 重度 SPA** | **[Web Scraping API](https://www.joyproxy.com/products/web-unblocker.html)** | `GET https://api.joyproxy.com/v1/fetch` | 零指紋與瀏覽器維護兜底方案（`render=true`、`super=true`），**僅成功返回 HTTP 200 扣費**。 |

---

## 二、Python Scrapy：自訂代理中介軟體、黏性工作階段與失敗即換 IP

Scrapy 內建的 `HttpProxyMiddleware` 雖然支援讀取 `request.meta["proxy"]`，但在部分 Twisted 版本中對內嵌 `user:pass@host:port` 的特殊字元解析並不穩定，且預設長連線複用會導致「按請求換 IP」失效。

### 步驟 A：在 `settings.py` 關閉按請求輪換時的 Keep-Alive 複用

```python
# settings.py
CONCURRENT_REQUESTS = 32
DOWNLOAD_TIMEOUT = 25
RETRY_ENABLED = True
RETRY_TIMES = 4
RETRY_HTTP_CODES = [403, 407, 429, 500, 502, 503, 504]

# 防止 Twisted 將多條請求複用到同一條舊 CONNECT 隧道，導致出口 IP 不切換
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

### 步驟 B：編寫 `JoyProxyMiddleware` 與 `JoyProxyRetryMiddleware`

在 `middlewares.py` 中直接注入標準 `Proxy-Authorization` 請求標頭，並支援依 `request.meta` 動態切換地區、黏性工作階段 ID 與失敗秒換 IP：

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
        # 低風控 Sitemap / RSS 可在 Request meta 中直切獨享資料中心代理
        if request.meta.get("use_datacenter"):
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

        # 遇到 403 或 429 時立即刷新黏性 session_id，強制分配全新出口 IP 重試
        if response.status in (403, 429):
            if request.meta.get("sticky_session"):
                request.meta["session_id"] = uuid.uuid4().hex[:10]
            reason = response_status_message(response.status)
            return self._retry(request, reason, spider) or response

        return super().process_response(request, response, spider)
```

> [!TIP] 為什麼手寫 `Proxy-Authorization` 比拼接代理 URL 更穩？
> 在程式碼中建構 `-zone-resi-region-us-session-...` 並直接寫入 `request.headers["Proxy-Authorization"]`，既能徹底避免 URL 特殊字元轉義錯誤和除錯日誌洩漏密碼，也能在重試時毫秒級改寫地區或刷新 `session_id`。若仍碰到 `407` 報錯，可對照排查：[別再被 407 擋住：JoyProxy 住宅、移動、商業代理提取指南](https://www.joyproxy.com/blog/zh-TW/guides/stop-407-rotating-proxy-extraction-guide/)。

---

## 三、Crawl4AI 實戰：LLM Markdown 擷取與強 WAF 雲端兜底

**Crawl4AI**（`AsyncWebCrawler`）基於 Playwright 將動態網頁即時清洗為適合 RAG 與 Agent 的 Markdown。由於底層拉起了真實 Chromium 核心，必須做好**資源攔截省流**、**QUIC 防洩漏**以及 **Web Scraping API 兜底**：

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
    """攔截圖片、影音、字型與廣告追蹤腳本，通常可削減 60%-80% 住宅代理流量。"""
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
            "--disable-quic",  # 嚴禁 Chromium 嘗試走 UDP/443 QUIC 直連導致穿透代理或卡頓
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
        result = await crawler.arun(url=url, config=run_cfg)
        md = (result.markdown or "").strip() if result.success else ""
        if len(md) > 400 and "Just a moment..." not in md:
            return md

    # 遇到強 WAF / Turnstile 時自動升級至 JoyProxy Web Scraping API
    if not SCRAPING_TOKEN:
        raise RuntimeError(f"Crawl4AI 擷取 {url} 被攔截，且未設定 JOYPROXY_SCRAPING_TOKEN")

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

> [!NOTE] 為什麼 Crawl4AI 一定要加 `--disable-quic`？
> 目標 CDN 回傳 `Alt-Svc: h3=":443"` 後，未限制 QUIC 的 Chromium 會嘗試繞過 `HTTP CONNECT` 隧道直接發送 `UDP/443` 交握封包，輕則首包卡頓數百毫秒，重則發生本地 UDP 真實 IP 洩漏。技術底層可參考：[HTTP/3 (QUIC)、UDP 代理與 CONNECT 協定回退機制](https://www.joyproxy.com/blog/zh-TW/technical/http3-quic-udp-proxying-connect-fallback-architecture/) 以及 [Playwright 與 Puppeteer 省流 70% 技巧](https://www.joyproxy.com/blog/zh-TW/guides/playwright-puppeteer-proxy-anti-detection-bandwidth-guide/)。

---

## 四、Crawlee（Node.js / TypeScript）：`ProxyConfiguration` 與 `SessionPool` 無縫聯動

**Crawlee** 的核心優勢是內建了 `ProxyConfiguration` 與 `SessionPool`：每當框架初始化一個新工作階段，或者某條工作階段因觸發 `403`、`429` 被 `session.retire()` 淘汰時，都會自動向 `newUrlFunction` 傳入全新的 `sessionId`。

這與 JoyProxy 閘道的 `-session-<id>-sessTime-<minutes>` 語法天然契合：

```typescript
import { PlaywrightCrawler, ProxyConfiguration } from "crawlee";

const SUBUSER = process.env.JOYPROXY_SUBUSER!;
const PASSWORD = process.env.JOYPROXY_PASSWORD!;

const proxyConfiguration = new ProxyConfiguration({
  newUrlFunction: (sessionId) => {
    // Crawlee 會為每個 SessionPool 槽位分配獨立 sessionId，並在 retire() 後自動產生新 ID
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
      maxUsageCount: 25, // 單一 IP 連續擷取 25 頁後主動換新 IP
      maxErrorScore: 2,  // 連續失敗 2 次立即淘汰該工作階段並切換出口
    },
  },
  preNavigationHooks: [
    async ({ page, blockRequests }) => {
      // 使用 Crawlee 內建輔助方法屏蔽圖片、字型、影片與第三方統計腳本
      await blockRequests({
        urlPatterns: [".png", ".jpg", ".jpeg", ".webp", ".woff2", ".mp4", "googletagmanager.com"],
      });
      await page.setExtraHTTPHeaders({ "Accept-Language": "en-US,en;q=0.9" });
    },
  ],
  async requestHandler({ request, page, session, log }) {
    const title = await page.title();
    if (title.includes("Just a moment") || title.includes("Access Denied")) {
      session?.retire(); // 立即廢棄當前 JoyProxy -session- ID，使用全新純淨 IP 重試
      throw new Error(`觸發風控質詢頁: ${request.url}`);
    }
    log.info(`擷取成功 ${request.url}（工作階段 ${session?.id}）：${title}`);
  },
});

await crawler.run(["https://example.com/catalog"]);
```

### 如何在 Crawlee 中混用靜態 ISP 與動態住宅池？

如果業務同時覆蓋**需登入的後台擷取**與**公開列表併發採集**：

1. 需要長期固定 Cookie 的任務，使用 **[靜態 ISP 代理](https://www.joyproxy.com/products/proxy-isp.html)**（`isp.joyproxy.com:<專屬連接埠>`）填入 `proxyUrls`，確保 7×24 小時保持同一真實家庭寬頻 ASN 出口且不限流量。
2. 高併發無狀態採集任務，透過 `newUrlFunction` 接入 **[商業代理](https://www.joyproxy.com/products/proxy-business.html)**（`-zone-biz`）或 **[動態住宅代理](https://www.joyproxy.com/products/proxy-residential.html)**（`-zone-resi`）。

---

## 五、爬蟲叢集上線前的 5 項必查清單

在把 Scrapy、Crawl4AI 或 Crawlee 推向 10+ 併發的生產調度前，請逐項核對以下五條工程鐵律：

1. **分清靜態代理的「入口位址」與「出口 IP」**：使用**[靜態 ISP](https://www.joyproxy.com/products/proxy-isp.html)** 或**[獨享資料中心代理](https://www.joyproxy.com/products/proxy-datacenter.html)**時，爬蟲必須連線 `isp.joyproxy.com:<連接埠>` 或 `dc.joyproxy.com:<連接埠>`，切勿直接連線面板展示的出口 IP。詳見：[別把出口 IP 當入口：JoyProxy 靜態 ISP 與資料中心代理設定全解](https://www.joyproxy.com/blog/zh-TW/guides/static-isp-datacenter-proxy-setup-guide/)。
2. **管好 Keep-Alive 連線池**：在 Scrapy 或 `httpx` / `aiohttp` 中使用**每次請求輪換**閘道時，務必傳入 `Connection: close`（或 `max_keepalive_connections=0`）；僅在使用 `-session-...` 黏性工作階段或靜態 IP 時開啟連線複用。原理詳見：[代理連線池、Keep-Alive 陷阱與逾時重試架構](https://www.joyproxy.com/blog/zh-TW/technical/proxy-connection-pooling-keepalive-timeouts-retries/)。
3. **純 HTTP 爬蟲對齊 TLS 指紋**：如果你的 Scrapy 爬蟲直連 Cloudflare 或 Akamai 卻不想上無頭瀏覽器，可將下載器替換為 `curl_cffi`（`impersonate="chrome131"`）。詳見：[解密 JA4 與 TLS 指紋：為什麼換了純淨住宅代理依然被 Cloudflare 識破？](https://www.joyproxy.com/blog/zh-TW/technical/ja4-tls-fingerprinting-cloudflare-bypass/)。
4. **給大模型與向量庫設定 `NO_PROXY`**：Crawl4AI 或 Crawlee 把擷取結果寫入 OpenAI、Anthropic、Pinecone 或 Qdrant 時，務必將模型 API 網域加入 `NO_PROXY`，避免向量化請求白白消耗住宅代理流量。
5. **保留雲端解封死信佇列**：對多次 `403` 的高難度頁面，直接落入 **[JoyProxy Web Scraping API](https://www.joyproxy.com/products/web-unblocker.html)**（`https://api.joyproxy.com/v1/fetch`）兜底，遠比用住宅代理盲目重試 10 次更省錢穩定。

---

## 下一步行動

* **立即提取代理端點**：前往 **[JoyProxy 連接埠提取中心](https://www.joyproxy.com/admin-ip-extraction-center.html)** 建立子帳號，一鍵產生適配 Scrapy、Crawl4AI 與 Crawlee 的 `gate.joyproxy.com:9001` 連線字串。
* **接入免維護解封 API**：在 **[Web Scraping API 主控台](https://www.joyproxy.com/admin-web-unblocker.html)** 購買 **$5 / 50K 積分**入門包（積分永久有效，僅成功返回 HTTP 200 扣費）。
* **對比方案與付款方式**：查看 **[JoyProxy 定價方案](https://www.joyproxy.com/pricing.html)** 選擇依流量計費的住宅、商業、行動或靜態不限流量連接埠——支援信用卡、PayPal、Apple Pay、Google Pay、微信支付、UPI 及多鏈加密貨幣（`USDT` / `USDC` / `TRX` / `BNB` / `ETH` / `SOL` / `BTC`）即時開通。
