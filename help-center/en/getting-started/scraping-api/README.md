# Web Scraping API

Web Scraping API is JoyProxy’s managed data-collection service. You submit a **target URL**. In the cloud, JoyProxy handles real-browser emulation, proxy rotation across 150+ countries, JavaScript rendering, and common anti-bot protections, then returns clean HTML or structured JSON.

Unlike <a href="../rotating/README.md" target="_blank" rel="noopener noreferrer">Rotating Proxies</a> or <a href="../static/README.md" target="_blank" rel="noopener noreferrer">Static Proxies</a>, Web Scraping API **does not require you to run a proxy pool, User-Agent rotation, or a headless browser farm**. Billing is **success-only**: Credits are deducted only when the fetch succeeds.

---

## Proxy IPs vs Web Scraping API

| Comparison | Proxy IPs (Rotating / Static / Custom) | Web Scraping API |
| --- | --- | --- |
| **What you get** | A proxy endpoint `Host:Port` | A managed HTTP API that returns the target page HTML / JSON |
| **Ops cost** | You maintain cookies, User-Agent, and Playwright/Puppeteer browser farms | **Zero ops** — JoyProxy handles rendering, retries, and anti-bot |
| **Billing** | Per-GB traffic or dedicated IP/port time | **Credits on success only** — failed, timed-out, or hard-blocked fetches **are not charged** |
| **Best for** | Mature crawlers that only need a network exit | Getting page content or structured data without running a browser cluster |

---

## Key advantages

1. **Success-only Credits (no charge on failure)**: Credits are deducted only when the response is HTTP 2xx and the body contains valid content. If the target errors, times out, or blocks the request, **no Credits are charged**.
2. **Managed JS rendering and anti-bot bypass**: Pass `render=true` to enable cloud headless rendering. Pass `super=true` to route through real residential/mobile exits for high-risk targets.
3. **Structured data Plugins**: Dedicated plugins for Amazon, Google Search, Google Maps, YouTube, and more return formatted JSON.
4. **Sync and Async API**: Millisecond-level synchronous requests, plus an async queue for large batches.

---

## In this chapter

Read in this order if you are new:

1. <a href="quick-start.md" target="_blank" rel="noopener noreferrer">Quick start</a> — 4-step setup and Scraping API Token
2. <a href="buy-credits.md" target="_blank" rel="noopener noreferrer">Buy credit packs and concurrency</a> — credit packs and Concurrency rules
3. <a href="first-fetch.md" target="_blank" rel="noopener noreferrer">Test a fetch in API Center</a> — try requests in API Center and copy integration examples
4. <a href="parameters.md" target="_blank" rel="noopener noreferrer">Fetch parameters and credit usage</a> — render / super / geoCode and 1 / 5 / 10 / 25 credit costs
5. <a href="plugins.md" target="_blank" rel="noopener noreferrer">Structured data plugins API</a> — JSON plugins for commerce and search
6. <a href="async-api.md" target="_blank" rel="noopener noreferrer">Async queue API</a> — submit and poll large or long-running jobs
7. <a href="usage.md" target="_blank" rel="noopener noreferrer">Usage and fetch logs</a> — Usage dashboard and recent requests
8. <a href="response-codes.md" target="_blank" rel="noopener noreferrer">Response codes and errors</a> — 401 / 402 / 429 / 502 and how to confirm zero charge
9. <a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">Restricted targets and compliance</a> — destinations the API will not fetch
10. <a href="payments-and-invoices.md" target="_blank" rel="noopener noreferrer">Payments and invoices</a> — order history and PDF invoices
