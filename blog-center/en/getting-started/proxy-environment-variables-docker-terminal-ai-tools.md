---
title: "Proxy Environment Variables Explained: Configuring HTTP_PROXY, HTTPS_PROXY, ALL_PROXY, and NO_PROXY Across Terminal, Docker, and AI Tools"
description: "A practical developer guide to HTTP_PROXY, HTTPS_PROXY, ALL_PROXY, and NO_PROXY across Linux, macOS, Windows PowerShell, Git, Docker, Python, Node.js, and AI CLI tools—covering case sensitivity, socks5h:// DNS resolution, URL-encoding, and JoyProxy endpoint setup."
category: getting-started
date: 2026-11-19
---

# Proxy Environment Variables Explained: Configuring HTTP_PROXY, HTTPS_PROXY, ALL_PROXY, and NO_PROXY Across Terminal, Docker, and AI Tools

Once you move past single `curl` tests and start running AI coding CLIs, Python virtual environments, Node.js scripts, Git workflows, or Docker containers, hardcoding `--proxy` flags into every command quickly breaks down.

Standard **proxy environment variables**—`HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, and `NO_PROXY`—solve this cleanly. Yet developers constantly hit subtle bugs when setting them:

* *"I exported `HTTP_PROXY`, so why does `curl` use the proxy while Node.js `fetch` still hits my local IP?"*
* *"Setting `ALL_PROXY` routed my package downloads, but broke my local MCP server, Ollama (`127.0.0.1:11434`), and Docker health checks!"*
* *"My password works in the browser, but throws `407 Proxy Authentication Required` or `Invalid URL` inside shell variables."*
* *"My container build works locally, then leaks my proxy credentials in `docker history`!"*

This guide breaks down how proxy environment variables actually work across shells, runtimes, and containers—and provides copy-pasteable templates for **[Dedicated Static ISP Proxies](https://www.joyproxy.com/products/proxy-isp.html)**, **[Datacenter Proxies](https://www.joyproxy.com/products/proxy-datacenter.html)**, and **[Rotating Residential Proxies](https://www.joyproxy.com/products/proxy-residential.html)**.

---

## 1. What Each Variable Actually Controls (and the Precedence Rules)

There is no single RFC governing proxy environment variables, so HTTP clients implement slightly different conventions. Knowing these four rules prevents 90% of configuration bugs:

| Variable | What It Routes | Critical Caveats |
| :--- | :--- | :--- |
| **`HTTP_PROXY` / `http_proxy`** | Plain HTTP traffic (`http://...`) | Some tools (`curl`, `apt`, older Python libraries) prefer **lowercase** `http_proxy` first; others (`Go`, `httpx`) check **uppercase** `HTTP_PROXY` first. Set **both** in production shells. |
| **`HTTPS_PROXY` / `https_proxy`** | TLS/HTTPS traffic (`https://...`) via `CONNECT` tunnel | The proxy URI scheme is still usually `http://user:pass@host:port` (an HTTP proxy tunneling HTTPS)—do not change it to `https://` unless your gateway explicitly terminates TLS on the proxy port itself. |
| **`ALL_PROXY` / `all_proxy`** | Fallback for HTTP, HTTPS, and non-HTTP TCP/SOCKS traffic | Only honored by tools that support it (`curl`, `git`, `pip`, `uv`, `httpx[socks]`). Always use **`socks5h://`** (not `socks5://`) so DNS resolution happens on the remote proxy instead of leaking via local ISP DNS. |
| **`NO_PROXY` / `no_proxy`** | Comma-separated hosts, IPs, and CIDR ranges that bypass the proxy | **Essential.** Without `localhost,127.0.0.1,::1`, local dev servers, databases, local MCP tools, and cloud metadata IPs (`169.254.169.254`) get routed out through the remote proxy and fail. |

> [!NOTE] Password Special Characters Break Shell URIs
> If your proxy password contains `@`, `:`, `/`, `#`, `?`, or `%`, standard URI parsers will split the URL at the wrong character and return `407 Proxy Authentication Required` or `URL parse error`. URL-encode reserved characters first (`@` → `%40`, `:` → `%3A`, `#` → `%23`), or use **IP Whitelist** authentication on JoyProxy static lines so no password is needed in the URI at all.

---

## 2. Terminal Setup: Linux, macOS, and Windows PowerShell

### Linux & macOS (`bash` / `zsh`)

For persistent terminal sessions, AI CLI agents, and local scripts, export both uppercase and lowercase variables and always define a safe `NO_PROXY` baseline:

```bash
# Example using JoyProxy Dedicated Static ISP Proxy (replace with your endpoint & credentials)
export PROXY_URL="http://your_user:your_pass@isp.joyproxy.com:10001"

export HTTP_PROXY="$PROXY_URL"
export HTTPS_PROXY="$PROXY_URL"
export http_proxy="$PROXY_URL"
export https_proxy="$PROXY_URL"

# Optional SOCKS5 with remote DNS resolution (socks5h:// prevents DNS leaks)
export ALL_PROXY="socks5h://your_user:your_pass@isp.joyproxy.com:10001"
export all_proxy="$ALL_PROXY"

# Always exempt loopback, local hostnames, and cloud metadata endpoints
export NO_PROXY="localhost,127.0.0.1,::1,.local,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,169.254.169.254"
export no_proxy="$NO_PROXY"
```

> [!TIP] Helper Toggle Functions for `~/.zshrc` or `~/.bashrc`
> Keep your terminal clean by wrapping proxy exports into `proxy_on` and `proxy_off` functions instead of leaving them active globally if you switch networks frequently.

### Windows PowerShell & CMD

In PowerShell, environment variables use `$env:` (session-scoped) rather than `export`:

```powershell
# PowerShell (current terminal session)
$env:HTTP_PROXY  = "http://your_user:your_pass@isp.joyproxy.com:10001"
$env:HTTPS_PROXY = "http://your_user:your_pass@isp.joyproxy.com:10001"
$env:ALL_PROXY   = "socks5h://your_user:your_pass@isp.joyproxy.com:10001"
$env:NO_PROXY    = "localhost,127.0.0.1,::1,.local,169.254.169.254"

# Clear when done
Remove-Item Env:HTTP_PROXY, Env:HTTPS_PROXY, Env:ALL_PROXY, Env:NO_PROXY
```

In classic Windows `cmd.exe`:

```cmd
set HTTP_PROXY=http://your_user:your_pass@isp.joyproxy.com:10001
set HTTPS_PROXY=http://your_user:your_pass@isp.joyproxy.com:10001
set NO_PROXY=localhost,127.0.0.1,::1
```

---

## 3. Runtime Quirks: Python, Node.js, Git, and AI CLI Tools

Even with environment variables exported correctly, major language runtimes handle them differently:

### Python (`requests`, `httpx`, `aiohttp`, `pip`)
* **`requests` and `httpx`**: Read `HTTP_PROXY`, `HTTPS_PROXY`, and `ALL_PROXY` automatically by default. For `socks5h://`, install `requests[socks]` or `httpx[socks]` (`pip install socksio`).
* **`aiohttp`**: **Ignores** environment variables by default! You must explicitly pass `trust_env=True` when instantiating the session:

```python
import aiohttp, asyncio

async def main():
    async with aiohttp.ClientSession(trust_env=True) as session:
        async with session.get("https://api.ipify.org?format=json") as resp:
            print(await resp.text())

asyncio.run(main())
```

### Node.js (`fetch`, `undici`, `axios`)
* **Built-in `fetch` (`undici`)**: Historically ignored `HTTP_PROXY` / `HTTPS_PROXY` completely—the #1 surprise for Node.js developers.
  * On **Node.js 22.21+ / 24+**, enable native env proxy support by setting `NODE_USE_ENV_PROXY=1`.
  * On earlier versions, configure `EnvHttpProxyAgent` from `undici`:

```javascript
import { EnvHttpProxyAgent, setGlobalDispatcher } from "undici";

// Automatically honors HTTP_PROXY, HTTPS_PROXY, and NO_PROXY
setGlobalDispatcher(new EnvHttpProxyAgent());

const res = await fetch("https://api.ipify.org?format=json");
console.log(await res.text());
```

### Git (Scoped Proxy Without Breaking Internal Repos)
Instead of forcing every Git remote through a proxy, scope it strictly to specific domains (like `github.com`):

```bash
git config --global http.https://github.com.proxy http://your_user:your_pass@isp.joyproxy.com:10001
# Remove later if needed:
git config --global --unset http.https://github.com.proxy
```

---

## 4. Docker: Build-Time vs. Runtime (Never Leak Credentials in `ENV`)

The most dangerous mistake in containerized scraping and AI agent stacks is putting proxy credentials inside a `Dockerfile` `ENV` or `ARG` instruction that stays embedded in image metadata.

### Safe Pattern 1: Pass at Build Time via `--build-arg`
Docker recognizes `HTTP_PROXY`, `HTTPS_PROXY`, and `NO_PROXY` as predefined build args **that are not persisted into the final image layers**:

```bash
docker build \
  --build-arg HTTP_PROXY="http://your_user:your_pass@dc.joyproxy.com:10001" \
  --build-arg HTTPS_PROXY="http://your_user:your_pass@dc.joyproxy.com:10001" \
  --build-arg NO_PROXY="localhost,127.0.0.1" \
  -t my-scraper:latest .
```

### Safe Pattern 2: Inject at Runtime via `compose.yaml` + `.env`
For runtime containers (such as containerized Python crawlers, Playwright workers, or MCP services), keep credentials out of Git inside a local `.env` file and inject them at runtime:

```yaml
services:
  crawler-worker:
    build: .
    env_file:
      - .env
    environment:
      - HTTP_PROXY=${JOYPROXY_RESI_URL}
      - HTTPS_PROXY=${JOYPROXY_RESI_URL}
      - NO_PROXY=localhost,127.0.0.1,redis,postgres
```

Where `.env` holds your JoyProxy rotating gateway string (for example, a US city-targeted sticky session via `gate.joyproxy.com:9001`):

```dotenv
JOYPROXY_RESI_URL=http://your_user-zone-resi-region-us-session-worker1-sessTime-30:your_pass@gate.joyproxy.com:9001
```

---

## 5. Matching the Right JoyProxy Network to Your Environment

Not every environment-variable workflow belongs on the same proxy tier:

| Workflow | Recommended JoyProxy Product | Why It Fits |
| :--- | :--- | :--- |
| **Terminal, AI Coding CLIs, Logged-In Tools** | **[Dedicated Static ISP Proxies](https://www.joyproxy.com/products/proxy-isp.html)** | Permanent residential-ASN IP (`isp.joyproxy.com:10001`). Eliminates mid-session CAPTCHAs and supports **IP Whitelist** so `.env` files don't even need passwords. |
| **Docker Builds, CI/CD, Unmetered Feeds** | **[Dedicated Datacenter Proxies](https://www.joyproxy.com/products/proxy-datacenter.html)** | High-speed 10G backbone with unmetered bandwidth tiers—ideal when pulling large images, packages, or open JSON endpoints. |
| **Containerized Scrapers & Geo-Crawlers** | **[Rotating Residential Proxies](https://www.joyproxy.com/products/proxy-residential.html)** | Unified `gate.joyproxy.com:9001` gateway lets each worker pass country/city/session tags directly in its `HTTPS_PROXY` string. |
| **B2B API Testing & Commercial Workflows** | **[Rotating Business Proxies](https://www.joyproxy.com/products/proxy-business.html)** | Clean commercial-ASN rotation for enterprise endpoints that expect corporate rather than consumer IPs. |
| **Zero-Plumbing Target Page Extraction** | **[Web Scraping API](https://www.joyproxy.com/products/web-unblocker.html)** | Skip proxy env vars entirely for anti-bot targets—call `api.joyproxy.com` over standard HTTPS and pay only on successful fetches. |

---

## 6. 30-Second Verification & Troubleshooting Checklist

After exporting your environment variables, run these three quick checks before launching your application:

1. **Confirm exit IP and routing (`curl`)**:
   ```bash
   curl -s https://api.ipify.org?format=json
   ```
   If it still prints your local ISP IP, check that `HTTP_PROXY` / `HTTPS_PROXY` are exported in the current shell and inspect `curl -v https://api.ipify.org` to verify whether `Uses proxy env variable` appears.
2. **Confirm `NO_PROXY` works for local services**:
   ```bash
   curl -v http://127.0.0.1:8080/health
   ```
   Verify `curl` connects directly without attempting to tunnel `127.0.0.1` through the remote proxy.
3. **Verify DNS doesn't leak when using `ALL_PROXY`**:
   Confirm your URI uses `socks5h://` rather than `socks5://` if DNS resolution must occur at the target region.

For deeper credential debugging, read our walkthroughs on [JoyProxy Whitelist and Credentials Setup](https://www.joyproxy.com/blog/getting-started/whitelist-credentials-setup/) and [Resolving 407 Proxy Authentication Errors](https://www.joyproxy.com/blog/guides/stop-407-rotating-proxy-extraction-guide/). Ready to test in your own terminal or container stack? [Create your JoyProxy account](https://www.joyproxy.com/register.html) and grab a 1 GB starter pack or dedicated static ISP line in minutes.
