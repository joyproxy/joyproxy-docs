# Web Scraping API

Send a **target URL**; JoyProxy returns HTML or JSON. We run proxies, retries, optional JavaScript rendering, and anti-bot handling. You pay **credits only when a fetch succeeds**—not per GB of raw proxy traffic.

<a href="https://www.joyproxy.com/products/web-unblocker.html" target="_blank" rel="noopener noreferrer">Product page</a> · <a href="https://www.joyproxy.com/pricing.html?network_type=smart-fetch" target="_blank" rel="noopener noreferrer">Pricing</a> · <a href="https://www.joyproxy.com/admin-web-unblocker.html" target="_blank" rel="noopener noreferrer">Console</a>

## Proxy IP vs this API

| | Proxy IP | Web Scraping API |
| --- | --- | --- |
| You receive | `host:port` | Fetched page body (managed HTTP API) |
| You operate | Headers, sessions, browsers | Flags such as `render=true`, `super=true`, `geoCode` |
| Billing | GB or per-IP period | Credits on **success** (HTTP 2xx with a usable body) |

Use the API when you want production page collection without maintaining a browser farm. Keep proxy lines when you already have a framework and only need exits.

## In this chapter

1. <a href="quick-start.md" target="_blank" rel="noopener noreferrer">Quick start</a>
2. <a href="buy-credits.md" target="_blank" rel="noopener noreferrer">Buy credits</a>
3. <a href="token.md" target="_blank" rel="noopener noreferrer">Get your token</a>
4. <a href="first-fetch.md" target="_blank" rel="noopener noreferrer">First fetch</a>
5. <a href="parameters.md" target="_blank" rel="noopener noreferrer">Parameters and credit costs</a>
6. <a href="usage.md" target="_blank" rel="noopener noreferrer">Monitor usage</a>

HTTP paths, query parameters, and code samples: <a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>.

Full parameter list: <a href="https://www.joyproxy.com/admin-unblocker-documentation.html" target="_blank" rel="noopener noreferrer">in-console documentation</a>.
