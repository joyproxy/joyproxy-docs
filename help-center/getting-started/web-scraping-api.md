# Web Scraping API

The Web Scraping API is a **managed fetch service**: you pass a target URL, JoyProxy returns page content. We handle proxy selection, retries, optional JavaScript rendering, and many anti-bot layers—you pay in **credits per successful fetch**, not in raw GB of proxy traffic.

## Proxy IP vs Web Scraping API

| | Proxy IP lines | Web Scraping API |
| --- | --- | --- |
| You receive | `host:port` endpoints | HTTP `GET /v1/fetch` |
| You operate | Headers, sessions, browsers | Flags such as `render=true`, `super=true` |
| Billing | Traffic GB or per-IP period | Credits on **success only** |

Choose the API when you want production page collection **without building and maintaining** a full browser and anti-bot stack. Keep proxy lines when you already have a framework and only need exits.

[Product page](https://www.joyproxy.com/products/web-unblocker.html) · [Pricing](https://www.joyproxy.com/pricing.html?network_type=smart-fetch)

## 1. Buy credits

1. Sign in → [Web Scraping API → Buy](https://www.joyproxy.com/admin-web-unblocker.html?view=buy).
2. Select a preset pack (entry tier from **$5**) or enter a custom amount (**minimum 10K credits**).
3. Pay with **account balance** (PayPal top-up if needed).
4. Credits land immediately and **do not expire**.
5. Higher balances unlock higher **concurrency**—see the [pricing table](https://www.joyproxy.com/pricing.html?network_type=smart-fetch).

> **Tip**
>
> Apply your **$5 sign-up credit** toward the first proxy or scraping pack if you are evaluating JoyProxy.

## 2. Get your Scraping API Token

1. Open [API Center](https://www.joyproxy.com/admin-web-unblocker.html?view=playground).
2. Copy the **Scraping API Token** (scoped to `/v1/fetch`).
3. Rotate the token in API Center if it may have been exposed.

This token is separate from your **proxy extraction API token** and **Master User Token** (orders API). Use the token type each endpoint documents in [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html).

## 3. First request

```bash
curl -G "https://api.joyproxy.com/v1/fetch" \
  --data-urlencode "token=YOUR_SCRAPING_API_TOKEN" \
  --data-urlencode "url=https://example.com"
```

Common parameters:

| Parameter | Purpose |
| --- | --- |
| `render=true` | JavaScript rendering for dynamic pages |
| `super=true` | Stronger anti-bot path (residential/mobile-style exits) |
| `geoCode=us` | Country-level exit preference |

Full reference: [in-console documentation](https://www.joyproxy.com/admin-unblocker-documentation.html).

## 4. Credits and monitoring

Credits deduct **only when a fetch succeeds** (HTTP 2xx with usable body). Failed attempts, timeouts, and hard blocks do not spend credits.

Typical success costs:

| Request type | Credits (success) |
| --- | --- |
| Standard fetch | 1 |
| `render=true` | 5 |
| `super=true` | 10 |
| `super` + `render` | 25 |

Monitor balance and logs on the [Usage tab](https://www.joyproxy.com/admin-web-unblocker.html?view=usage). Responses can include `X-JoyProxy-Fetch-Credits-Used` and remaining balance headers.

Console walkthrough: [Web Scraping API (user console)](../user-console/web-scraping-api.md).
