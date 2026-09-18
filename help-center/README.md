# JoyProxy Documentation

JoyProxy helps teams route traffic through the right exit IP for scraping, automation, app testing, and data collection. You can buy **proxy IP lines** (Residential, Mobile, Business / ISP, Datacenter), call a **Web Scraping API** when you want managed fetches, connect **AI tools** to generate endpoints in natural language, and use **free client software** to apply proxies on desktop, browser, or Android.

This guide is written for operators and developers who want a clear path from signup to production traffic.

## Product families at a glance

### Proxy IP (self-managed endpoints)

You receive **host, port, and auth** (or allow-listed server IPs) and integrate them into your stack.

| Network | Modes on JoyProxy | Typical use |
| --- | --- | --- |
| [Residential](https://www.joyproxy.com/products/proxy-residential.html) | Rotating · Static · Custom | Consumer ISP exits, flexible geo, account-style sites |
| [Mobile](https://www.joyproxy.com/products/proxy-mobile.html) | Rotating | Carrier 4G/5G exits, mobile app and ad verification |
| [Business / ISP](https://www.joyproxy.com/products/proxy-business.html) | Rotating · Static · Custom | ISP-branded lines, B2B portals, vendor dashboards |
| [Datacenter](https://www.joyproxy.com/products/proxy-datacenter.html) | Static · Custom | High volume, speed, predictable cost per line |

**Rotating** — shared gateway `gate.joyproxy.com:9001`, geo and session encoded in the generated username.  
**Static** — dedicated host:port for the life of the package.  
**Custom** — per-port region and optional rotation timer, then stable endpoints per port.

[View proxy pricing](https://www.joyproxy.com/pricing.html) · [Purchase in console](https://www.joyproxy.com/admin-purchase.html)

### Web Scraping API (managed fetches)

Send a URL; receive HTML or JSON. JoyProxy runs proxies, retries, rendering, and many anti-bot steps for you. Billing is **credit-based** and only applies to **successful** fetches.

- [Product overview](https://www.joyproxy.com/products/web-unblocker.html)
- [Console](https://www.joyproxy.com/admin-web-unblocker.html)
- [Pricing (credits)](https://www.joyproxy.com/pricing.html?network_type=smart-fetch)

### Software (downloads)

Open-source and free tools that work with JoyProxy cloud lines or your own proxy server:

| Tool | Role |
| --- | --- |
| [Browser Extension](https://www.joyproxy.com/products/browser-extension.html) | Proxy for one Chromium browser |
| [Proxy Tester](https://www.joyproxy.com/products/tester.html) | Validate HTTP/SOCKS before production |
| [Proxy Server](https://www.joyproxy.com/products/proxy-server.html) | Local HTTP/SOCKS gateway on VPS or PC |
| [Proxy Client (Android)](https://www.joyproxy.com/products/android-client.html) | Per-app or global mobile routing |

[Software hub](https://www.joyproxy.com/products/software.html)

### AI modules

Generate rotating endpoints, query balance, and get setup help from IDE or chat integrations:

- [OpenClaw Skill](https://www.joyproxy.com/products/openclaw-skill.html)
- [AI MCP](https://www.joyproxy.com/products/ai-mcp.html)
- [AI Assistant](https://www.joyproxy.com/products/ai-customer-service.html)

See [Integration → Integrate proxies in AI](integration/integrate-proxies-in-ai.md).

## Choose your starting path

| If you need… | Start here |
| --- | --- |
| Rotating (shared gateway) | [Rotating → Quick start](getting-started/rotating/quick-start.md) |
| Fixed host:port | [Static → Quick start](getting-started/static/quick-start.md) |
| Per-port geo + rotation | [Custom → Quick start](getting-started/custom/quick-start.md) |
| URL in, page out | [Scraping API → Quick start](getting-started/scraping-api/quick-start.md) |
| Chrome / Edge / tester / Android | [Software → Quick start](getting-started/software/quick-start.md) |
| Username/password or IP whitelist | [Authentication methods](getting-started/rotating/authentication.md) |

> **Tip**
>
> New accounts receive a **$5 sign-up credit** you can apply toward your first proxy package or scraping credits. [Create an account](https://www.joyproxy.com/register.html) and open the [dashboard](https://www.joyproxy.com/admin-overview.html).

## Documentation map

- **Getting started** — Rotating / Static / Custom / Scraping API / software; each product starts with **Quick start**, then how-to pages.
- **Best practices** — AI, third-party tools, Windows / Chrome / mobile setup patterns.
- **User console** — register, account settings, each product area in the dashboard.
- **Integration** — AI and [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html).
- **Service & support** — chat, tickets, locations, pricing.
- **FAQ** — [frequently asked questions](faq/README.md).

## Quick links

- [Log in](https://www.joyproxy.com/login.html) · [Purchase](https://www.joyproxy.com/admin-purchase.html)
- [Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html)
- [Transactions & orders](https://www.joyproxy.com/admin-transactions.html) · [Support](https://www.joyproxy.com/admin-support.html)
- [Terms](https://www.joyproxy.com/terms.html) · [Privacy](https://www.joyproxy.com/privacy.html)
