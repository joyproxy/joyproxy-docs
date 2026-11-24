# Overview

JoyProxy gives teams a stable, high-throughput exit-IP stack for automation, web collection, app testing, and data fetching. Three capabilities sit at the core: five proxy IP product lines, Web Scraping API, and free open-source clients for every major platform.

Whether you just signed up or you are wiring production, this guide is the path from first login to a working setup.

## What we offer

### Five Proxy IP Products

Each line is delivered as a standard hostname (Host), port (Port), and credentials so you can drop it into existing tools and code.

| Category | Proxy Product | Billing & Architecture | Best For | Guide |
| --- | --- | --- | --- | --- |
| **Rotating** | [Residential Proxies](https://www.joyproxy.com/products/proxy-residential.html) | Pay-per-GB (never expires), shared gateway `gate.joyproxy.com:9001` | Real home broadband IPs across 200+ countries for scraping and verification | [Residential Guide](getting-started/residential/) |
| **Rotating** | [Mobile Proxies](https://www.joyproxy.com/products/proxy-mobile.html) | Pay-per-GB (never expires), shared gateway `gate.joyproxy.com:9001` | Real 4G/5G carrier exits for mobile app scraping and ad verification | [Mobile Guide](getting-started/mobile/) |
| **Static** | [Dedicated 4G/5G Mobile Proxy](https://www.joyproxy.com/products/proxy-mobile-dedicated.html) | Per port × rental (2/7/14/30d), **unlimited traffic**, physical SIM slot | Highest carrier CGNAT anti-ban trust with on-demand IP switch for AI, social & e-commerce | [Dedicated 4G/5G Guide](getting-started/dedicated-mobile/) |
| **Static** | [ISP (Static Residential) Proxies](https://www.joyproxy.com/products/proxy-isp.html) | Per IP × period (1–365d), **unlimited traffic**, fixed `host:port` | Carrier ISP static residential lines for antidetect browsers and stable sessions | [ISP Guide](getting-started/isp/) |
| **Static** | [Datacenter Proxies](https://www.joyproxy.com/products/proxy-datacenter.html) | Per IP × period (1–365d), **unlimited traffic**, fixed `host:port` | High bandwidth, low latency, cost-efficient throughput for monitoring & APIs | [Datacenter Guide](getting-started/datacenter/) |

[Pricing](https://www.joyproxy.com/pricing.html) · [Compare all proxy products](https://www.joyproxy.com/proxy-products.html)

### Web Scraping API

Submit a target URL and receive rendered HTML or JSON. JoyProxy handles IP rotation, retries, JavaScript rendering, and common anti-bot challenges. Web Scraping API is billed in Credits: **you pay only for successful responses**; failures are not charged.

* [Product page](https://www.joyproxy.com/products/web-unblocker.html) · [Console](https://www.joyproxy.com/admin-web-unblocker.html) · [Pricing](https://www.joyproxy.com/pricing.html?network_type=smart-fetch) · [Guide](getting-started/scraping-api/)

### Companion tools

Use them with JoyProxy proxy IPs, or as standalone local clients with third-party proxies. All software is open source and free.

| Tool | What it does |
| --- | --- |
| [Browser Extension](https://www.joyproxy.com/products/browser-extension.html) | Chrome / Edge browser proxy plugin |
| [Proxy Tester](https://www.joyproxy.com/products/tester.html) | Fast HTTP/SOCKS5 connectivity and latency checks |
| [Proxy Server](https://www.joyproxy.com/products/proxy-server.html) | HTTP/SOCKS proxy gateway on a VPS or local machine |
| [Android Client](https://www.joyproxy.com/products/android-client.html) | Per-app or global proxy on Android |

[Software downloads](https://www.joyproxy.com/products/software.html)

### AI integration

Use proxy IPs from Cursor, VS Code, or OpenClaw with natural language. See: [Use JoyProxy in Cursor and AI agents](best-practices/developer/ai.md).

## Quick start

Pick the path that matches what you need:

| You need to | Start here |
| --- | --- |
| Rotate home broadband IPs per request or keep sticky sessions | [Residential Proxies · Quick start](getting-started/residential/quick-start.md) |
| Use pay-per-GB 4G/5G cellular IPs for scraping or ad checks | [Mobile Proxies · Quick start](getting-started/mobile/quick-start.md) |
| Use an exclusive real-device 4G/5G static IP (unlimited data, on-demand IP switch) | [Dedicated 4G/5G Mobile Proxy · Quick start](getting-started/dedicated-mobile/quick-start.md) |
| Keep a long-lived static residential IP (antidetect browsers / B2B portals) | [ISP (Static Residential) Proxies · Quick start](getting-started/isp/quick-start.md) |
| Run high-throughput, low-latency static datacenter lines | [Datacenter Proxies · Quick start](getting-started/datacenter/quick-start.md) |
| Pass a URL and get rendered HTML or structured JSON back | [Web Scraping API · Quick start](getting-started/scraping-api/quick-start.md) |
