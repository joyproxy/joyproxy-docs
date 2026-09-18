# Datacenter proxies (console)

**Datacenter** proxies prioritize **throughput and cost efficiency** with hosting ASN exits. JoyProxy offers **Static** and **Custom** modes for datacenter networks.

<a href="https://www.joyproxy.com/products/proxy-datacenter.html" target="_blank" rel="noopener noreferrer">Product page</a>

## Modes

| Mode | Best for |
| --- | --- |
| Static | Long-lived high-volume crawlers with fixed IPs |
| Custom | Multiple regions or rotation timers per port |

Rotating gateway traffic is available on Residential, Mobile, and Business / ISP—use those networks when you need the shared `gate.joyproxy.com` workflow.

## Console tabs

- **Buy** — choose **Datacenter**, then Static or Custom
- **My Proxies** — active allocations. <a href="../getting-started/static/auto-renew.md" target="_blank" rel="noopener noreferrer">Auto-renew</a> and <a href="../getting-started/static/refresh-ip.md" target="_blank" rel="noopener noreferrer">New IP</a> (Custom: <a href="../getting-started/custom/new-ip.md" target="_blank" rel="noopener noreferrer">New IP</a>)
- **Users & Whitelist** — server IP whitelist or credentials
- **Endpoints** — generate `host:port` lists
- **Usage** — monitor where applicable
- **API Center** — copy extract **API URL** for Static / Custom lines; see <a href="../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>

Walkthroughs: <a href="../getting-started/static/README.md" target="_blank" rel="noopener noreferrer">Static</a> · <a href="../getting-started/custom/README.md" target="_blank" rel="noopener noreferrer">Custom</a>

## Planning tips

- Match region at purchase for static lines—changes may require new orders.
- Whitelist cloud runner IPs to skip embedding passwords in config files.
- Pair with <a href="../getting-started/scraping-api/README.md" target="_blank" rel="noopener noreferrer">Web Scraping API</a> when targets need rendering more than raw speed.
