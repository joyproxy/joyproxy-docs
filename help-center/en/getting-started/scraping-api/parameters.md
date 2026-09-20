# Fetch parameters and credit usage

On Web Scraping API you can enable JS rendering, Super mode, or a country exit with request parameters. Each combination uses a different credit cost.

---

## Common fetch parameters

`https://api.joyproxy.com/v1/fetch` accepts the following controls as GET query parameters or POST JSON fields:

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `url` | String | **Required** | Target page URL (URL-encode it on GET). |
| `token` | String | **Required** | Your **Scraping API Token**. |
| `render` | Boolean | `false` | Enable cloud headless JavaScript rendering. Use this for SPAs or pages that load data dynamically. |
| `super` | Boolean | `false` | Enable **Super** residential/mobile exits. Routes through real home broadband or mobile networks for high-risk sites. |
| `geoCode` | String | Random | Exit country as an ISO 2-letter code (for example `us`, `jp`, `de`). |
| `customHeaders`| Object/JSON | None | Custom HTTP headers forwarded to the target (Cookie, User-Agent, and similar; JSON). |
| `sessionId` | String | None | Sticky session ID. The same sessionId reuses the same exit IP for about 10 minutes. |
| `regionalGeoCode` | String | None | Continent targeting: `eu` (Europe), `na` (North America), `as` (Asia), `sa` (South America), `af` (Africa), `oc` (Oceania). |
| `waitUntil` | String | None | Render wait condition: `load`, `domcontentloaded`, `networkidle0`, `networkidle2`. |
| `waitSelector` | String | None | Wait until this CSS selector appears before returning HTML. |
| `customWait` | Integer | None | Extra wait after page load, in milliseconds (for example `2000`). |

---

## Credit costs (success only)

JoyProxy charges **only when the fetch succeeds**. Failed requests are not charged.

### 1. When Credits are deducted
Credits are deducted only when the API returns HTTP **2xx** and the body contains valid content. Target 5xx, timeouts, connection blocks, and API 400 / 401 / 429 / 502 responses are **not charged**.

### 2. Credit cost table

| Mode and parameters | Credits on success | Typical use |
| --- | --- | --- |
| **Standard (datacenter)** | **1 credit** | Ordinary HTML pages, static APIs, sites without heavy protection (datacenter exit). |
| **JavaScript rendering (`render=true`)** | **5 credits** | Vue / React / Angular SPAs that need JS execution. |
| **Residential / mobile (`super=true`)** | **10 credits** | High-trust residential/mobile exits for high-risk sites. |
| **Super + render (`super=true` and `render=true`)** | **25 credits** | Residential/mobile exit plus full cloud headless JS rendering. |

---

## Credit details in response headers

After a successful fetch, the response includes:

- `X-JoyProxy-Fetch-Credits-Used`: Credits consumed by this request (for example `5`).
- `X-JoyProxy-Fetch-Credits-Remaining`: Credits remaining after the deduction.

Start with standard mode (1 credit). Turn on `render=true` only when the page is blank or dynamic data did not load.
