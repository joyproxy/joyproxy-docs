# Web Scraping API

Send a **target URL**; JoyProxy returns HTML or JSON. We run proxies, retries, optional JavaScript rendering, and anti-bot handling. You pay **credits only when a fetch succeeds**—not per GB of raw proxy traffic.

[Product page](https://www.joyproxy.com/products/web-unblocker.html) · [Pricing](https://www.joyproxy.com/pricing.html?network_type=smart-fetch) · [Console](https://www.joyproxy.com/admin-web-unblocker.html)

## Proxy IP vs this API

| | Proxy IP | Web Scraping API |
| --- | --- | --- |
| You receive | `host:port` | `GET /v1/fetch` |
| You operate | Headers, sessions, browsers | Flags such as `render=true`, `super=true`, `geoCode` |
| Billing | GB or per-IP period | Credits on **success** (HTTP 2xx with a usable body) |

Use the API when you want production page collection without maintaining a browser farm. Keep proxy lines when you already have a framework and only need exits.

## In this chapter

1. [Quick start](quick-start.md)
2. [Buy credits](buy-credits.md)
3. [Get your token](token.md)
4. [First fetch](first-fetch.md)
5. [Parameters and credit costs](parameters.md)
6. [Monitor usage](usage.md)

## Smallest working call

```bash
curl -G "https://api.joyproxy.com/v1/fetch" \
  --data-urlencode "token=YOUR_SCRAPING_API_TOKEN" \
  --data-urlencode "url=https://example.com"
```

Full parameter list: [in-console documentation](https://www.joyproxy.com/admin-unblocker-documentation.html).
