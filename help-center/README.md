# JoyProxy Documentation

JoyProxy helps teams route traffic through the right exit IP for scraping, automation, app testing, and data collection. You can buy **proxy IP lines** (Residential, Mobile, Business / ISP, Datacenter), call a **Web Scraping API** when you want managed fetches, connect **AI tools** to generate endpoints in natural language, and use **free client software** to apply proxies on desktop, browser, or Android.

This guide is written for operators and developers who want a clear path from signup to production traffic.

## Product families at a glance

### Proxy IP (self-managed endpoints)

You receive **host, port, and auth** (or allow-listed server IPs) and integrate them into your stack.

| Network | Modes on JoyProxy | Typical use |
| --- | --- | --- |
| <a href="https://www.joyproxy.com/products/proxy-residential.html" target="_blank" rel="noopener noreferrer">Residential</a> | Rotating · Static · Custom | Consumer ISP exits, flexible geo, account-style sites |
| <a href="https://www.joyproxy.com/products/proxy-mobile.html" target="_blank" rel="noopener noreferrer">Mobile</a> | Rotating | Carrier 4G/5G exits, mobile app and ad verification |
| <a href="https://www.joyproxy.com/products/proxy-business.html" target="_blank" rel="noopener noreferrer">Business / ISP</a> | Rotating · Static · Custom | ISP-branded lines, B2B portals, vendor dashboards |
| <a href="https://www.joyproxy.com/products/proxy-datacenter.html" target="_blank" rel="noopener noreferrer">Datacenter</a> | Static · Custom | High volume, speed, predictable cost per line |

**Rotating** — shared gateway `gate.joyproxy.com:9001`, geo and session encoded in the generated username.  
**Static** — dedicated host:port for the life of the package.  
**Custom** — per-port region and optional rotation timer, then stable endpoints per port.

<a href="https://www.joyproxy.com/pricing.html" target="_blank" rel="noopener noreferrer">View proxy pricing</a> · <a href="https://www.joyproxy.com/admin-purchase.html" target="_blank" rel="noopener noreferrer">Purchase in console</a>

### Web Scraping API (managed fetches)

Send a URL; receive HTML or JSON. JoyProxy runs proxies, retries, rendering, and many anti-bot steps for you. Billing is **credit-based** and only applies to **successful** fetches.

- <a href="https://www.joyproxy.com/products/web-unblocker.html" target="_blank" rel="noopener noreferrer">Product overview</a>
- <a href="https://www.joyproxy.com/admin-web-unblocker.html" target="_blank" rel="noopener noreferrer">Console</a>
- <a href="https://www.joyproxy.com/pricing.html?network_type=smart-fetch" target="_blank" rel="noopener noreferrer">Pricing (credits)</a>

### Software (downloads)

Open-source and free tools that work with JoyProxy cloud lines or your own proxy server:

| Tool | Role |
| --- | --- |
| <a href="https://www.joyproxy.com/products/browser-extension.html" target="_blank" rel="noopener noreferrer">Browser Extension</a> | Proxy for one Chromium browser |
| <a href="https://www.joyproxy.com/products/tester.html" target="_blank" rel="noopener noreferrer">Proxy Tester</a> | Validate HTTP/SOCKS before production |
| <a href="https://www.joyproxy.com/products/proxy-server.html" target="_blank" rel="noopener noreferrer">Proxy Server</a> | Local HTTP/SOCKS gateway on VPS or PC |
| <a href="https://www.joyproxy.com/products/android-client.html" target="_blank" rel="noopener noreferrer">Proxy Client (Android)</a> | Per-app or global mobile routing |

<a href="https://www.joyproxy.com/products/software.html" target="_blank" rel="noopener noreferrer">Software hub</a>

### AI modules

Generate rotating endpoints, query balance, and get setup help from IDE or chat integrations:

- <a href="https://www.joyproxy.com/products/openclaw-skill.html" target="_blank" rel="noopener noreferrer">OpenClaw Skill</a>
- <a href="https://www.joyproxy.com/products/ai-mcp.html" target="_blank" rel="noopener noreferrer">AI MCP</a>
- <a href="https://www.joyproxy.com/products/ai-customer-service.html" target="_blank" rel="noopener noreferrer">AI Assistant</a>

See <a href="integration/integrate-proxies-in-ai.md" target="_blank" rel="noopener noreferrer">Integration → Integrate proxies in AI</a>.

## Choose your starting path

| If you need… | Start here |
| --- | --- |
| Rotating (shared gateway) | <a href="getting-started/rotating/quick-start.md" target="_blank" rel="noopener noreferrer">Rotating → Quick start</a> |
| Fixed host:port | <a href="getting-started/static/quick-start.md" target="_blank" rel="noopener noreferrer">Static → Quick start</a> |
| Per-port geo + rotation | <a href="getting-started/custom/quick-start.md" target="_blank" rel="noopener noreferrer">Custom → Quick start</a> |
| URL in, page out | <a href="getting-started/scraping-api/quick-start.md" target="_blank" rel="noopener noreferrer">Scraping API → Quick start</a> |
| Chrome / Edge / tester / Android | <a href="getting-started/software/quick-start.md" target="_blank" rel="noopener noreferrer">Software → Quick start</a> |
| Username/password or IP whitelist | <a href="getting-started/rotating/authentication.md" target="_blank" rel="noopener noreferrer">Authentication methods</a> |

> **Tip**
>
> New accounts receive a **$5 sign-up credit** you can apply toward your first proxy package or scraping credits. <a href="https://www.joyproxy.com/register.html" target="_blank" rel="noopener noreferrer">Create an account</a> and open the <a href="https://www.joyproxy.com/admin-overview.html" target="_blank" rel="noopener noreferrer">dashboard</a>.

## Documentation map

- **Getting started** — Rotating / Static / Custom / Scraping API / software; each product starts with **Quick start**, then how-to pages.
- **Best practices** — AI, third-party tools, Windows / Chrome / mobile setup patterns.
- **User console** — register, account settings, each product area in the dashboard.
- **Integration** — AI and <a href="integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>.
- **Service & support** — chat, tickets, locations, pricing.
- **FAQ** — <a href="faq/README.md" target="_blank" rel="noopener noreferrer">frequently asked questions</a>.

## Quick links

- <a href="https://www.joyproxy.com/login.html" target="_blank" rel="noopener noreferrer">Log in</a> · <a href="https://www.joyproxy.com/admin-purchase.html" target="_blank" rel="noopener noreferrer">Purchase</a>
- <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoint generator</a>
- <a href="https://www.joyproxy.com/admin-transactions.html" target="_blank" rel="noopener noreferrer">Transactions &amp; orders</a> · <a href="https://www.joyproxy.com/admin-support.html" target="_blank" rel="noopener noreferrer">Support</a>
- <a href="https://www.joyproxy.com/terms.html" target="_blank" rel="noopener noreferrer">Terms</a> · <a href="https://www.joyproxy.com/privacy.html" target="_blank" rel="noopener noreferrer">Privacy</a>
