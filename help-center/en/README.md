# Overview

JoyProxy gives teams a stable, high-throughput exit-IP stack for automation, web collection, app testing, and data fetching. Three capabilities sit at the core: proxy IP networks (Residential, Mobile, Business / ISP, Datacenter), Web Scraping API, and free clients for every major platform.

Whether you just signed up or you are wiring production, this guide is the path from first login to a working setup.

## What we offer

### Proxy IP

Each line is delivered as a standard hostname (Host), port (Port), and credentials so you can drop it into existing tools and code.

| Network type | Proxy products | Best for |
| --- | --- | --- |
| [Residential](https://www.joyproxy.com/products/proxy-residential.html) | Rotating · Static Proxies · Custom Proxies | Home-broadband exits, wide geo coverage, multi-account isolation |
| [Mobile](https://www.joyproxy.com/products/proxy-mobile.html) | Rotating | 4G/5G carrier exits, mobile-app testing, ads compliance checks |
| [Business / ISP](https://www.joyproxy.com/products/proxy-business.html) | Rotating · Static Proxies · Custom Proxies | Clean ISP-grade lines for B2B portals and supplier systems |
| [Datacenter](https://www.joyproxy.com/products/proxy-datacenter.html) | Static Proxies · Custom Proxies | High concurrency, low latency, cost-efficient throughput |

How the four networks differ:

* **Residential**: home broadband IPs.
* **Mobile**: 4G/5G carrier IPs.
* **Business / ISP**: office and commercial IPs.
* **Datacenter**: datacenter IPs.

How the three proxy products differ:

* **Rotating Proxies**: billed by traffic. Shared gateway `gate.joyproxy.com:9001`. Target region and session lifetime are encoded in the generated username.
* **Static Proxies**: billed by time. Fixed `host:port` for the plan period. You can change the exit IP by hand.
* **Custom Proxies**: billed by time. Fixed `host:port` for the plan period. You can change region at any time and rotate the exit IP on a schedule.

[Pricing](https://www.joyproxy.com/pricing.html) · [Available regions](https://www.joyproxy.com/admin-purchase.html)

### Web Scraping API

Submit a target URL and receive rendered HTML or JSON. JoyProxy handles IP rotation, retries, JavaScript rendering, and common anti-bot challenges. Web Scraping API is billed in Credits: **you pay only for successful responses**; failures are not charged.

* [Product page](https://www.joyproxy.com/products/web-unblocker.html)
* [Console](https://www.joyproxy.com/admin-web-unblocker.html)
* [Pricing](https://www.joyproxy.com/pricing.html?network_type=smart-fetch)

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

Use proxy IPs from Cursor, VS Code, or OpenClaw with natural language.

See: [Use JoyProxy in Cursor and AI agents](best-practices/developer/ai.md).

## Quick start

Pick the path that matches what you need:

| You need to | Start here |
| --- | --- |
| Change IP on every request | [Rotating Proxies · Quick start](getting-started/rotating/quick-start.md) |
| Change IP every 1–30 minutes | [Rotating Proxies · Quick start](getting-started/rotating/quick-start.md) |
| Send 200 concurrent requests, each on a different IP | [Rotating Proxies · Quick start](getting-started/rotating/quick-start.md) |
| Keep a long-lived proxy IP in one region | [Static Proxies · Quick start](getting-started/static/quick-start.md) |
| Keep a long-lived regional IP and rotate it on your schedule | [Custom Proxies · Quick start](getting-started/custom/quick-start.md) |
| Keep a long-lived regional IP and switch regions anytime | [Custom Proxies · Quick start](getting-started/custom/quick-start.md) |
| Pass a URL and get the page back | [Web Scraping API · Quick start](getting-started/scraping-api/quick-start.md) |
