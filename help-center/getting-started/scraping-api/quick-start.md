# Quick start

Send a **target URL**; JoyProxy returns HTML or JSON. You pay **credits only when a fetch succeeds**.

Need `host:port` in your own scraper instead? <a href="../rotating/quick-start.md" target="_blank" rel="noopener noreferrer">Rotating</a> · <a href="../static/quick-start.md" target="_blank" rel="noopener noreferrer">Static</a>.

## How you connect

Use the **Scraping API Token** from the console and the fetch operation documented in <a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>. The interactive playground in <a href="https://www.joyproxy.com/admin-web-unblocker.html?view=playground" target="_blank" rel="noopener noreferrer">API Center</a> runs the same call.

## Send a test fetch

1. Copy your token from <a href="token.md" target="_blank" rel="noopener noreferrer">Get your token</a>.
2. Open <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> → **Web Scraping API** → **Fetch URL**, or use the in-console playground.
3. Set `url` to `https://example.com` and execute.

A successful body is the page (or JSON). Failed attempts, timeouts, and hard blocks **do not spend credits**.

## Set up in the dashboard

> **Tip**
>
> New accounts receive a **$5 sign-up credit**. Apply it toward scraping credits at checkout when the offer appears.

### 1. Buy credits

Open <a href="https://www.joyproxy.com/admin-purchase.html" target="_blank" rel="noopener noreferrer">Purchase</a> (Web Scraping API / credits) or the <a href="https://www.joyproxy.com/admin-web-unblocker.html" target="_blank" rel="noopener noreferrer">Web Scraping API console</a> and buy a credit pack.

Details: <a href="buy-credits.md" target="_blank" rel="noopener noreferrer">Buy credits</a>.

### 2. Get your token

Copy the Scraping API token from the <a href="https://www.joyproxy.com/admin-web-unblocker.html" target="_blank" rel="noopener noreferrer">Web Scraping API console</a> as shown on <a href="token.md" target="_blank" rel="noopener noreferrer">Get your token</a>. Keep it out of public repos and tickets.

### 3. Confirm a fetch

Run a test against `https://example.com` in API Center or OpenAPI Center. Then point `url` at your real target.

Optional flags such as `render=true`, `super=true`, and `geoCode` are listed in <a href="parameters.md" target="_blank" rel="noopener noreferrer">Parameters and credit costs</a> and the <a href="https://www.joyproxy.com/admin-unblocker-documentation.html" target="_blank" rel="noopener noreferrer">in-console documentation</a>.

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| 401 / invalid token | Scraping API token, not the proxy password and not the AI Access Token |
| Empty or error body | Credits remaining; try without `render` first |
| Wrong country | Pass `geoCode` as documented in Parameters |

## What to read next

| Task | Page |
| --- | --- |
| First fetch details | <a href="first-fetch.md" target="_blank" rel="noopener noreferrer">First fetch</a> |
| Flags and credit costs | <a href="parameters.md" target="_blank" rel="noopener noreferrer">Parameters and credit costs</a> |
| Remaining credits | <a href="usage.md" target="_blank" rel="noopener noreferrer">Monitor usage</a> |
| HTTP reference | <a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> |
