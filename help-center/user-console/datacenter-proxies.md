# Datacenter proxies (console)

**Datacenter** proxies prioritize **throughput and cost efficiency** with hosting ASN exits. JoyProxy offers **Static** and **Custom** modes for datacenter networks.

[Product page](https://www.joyproxy.com/products/proxy-datacenter.html)

## Modes

| Mode | Best for |
| --- | --- |
| Static | Long-lived high-volume crawlers with fixed IPs |
| Custom | Multiple regions or rotation timers per port |

Rotating gateway traffic is available on Residential, Mobile, and Business / ISP—use those networks when you need the shared `gate.joyproxy.com` workflow.

## Console tabs

- **Buy** — choose **Datacenter**, then Static or Custom
- **My Proxies** — active allocations. [Auto-renew](../getting-started/static/auto-renew.md) and [New IP](../getting-started/static/refresh-ip.md) (Custom: [New IP](../getting-started/custom/new-ip.md))
- **Users & Whitelist** — server IP whitelist or credentials
- **Endpoints** — generate `host:port` lists
- **Usage** — monitor where applicable
- **API Center** — `/v1/extract-long` and `/v1/extract-custom` helpers

Walkthroughs: [Static](../getting-started/static/README.md) · [Custom](../getting-started/custom/README.md)

## Planning tips

- Match region at purchase for static lines—changes may require new orders.
- Whitelist cloud runner IPs to skip embedding passwords in config files.
- Pair with [Web Scraping API](../getting-started/scraping-api/README.md) when targets need rendering more than raw speed.
