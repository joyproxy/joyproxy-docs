# Quick start

Send a **target URL**; JoyProxy returns HTML or JSON. You pay **credits only when a fetch succeeds**.

Already have a token? Skip to [Send a test fetch](#send-a-test-fetch).

Need `host:port` in your own scraper instead? <a href="../rotating/quick-start.md" target="_blank" rel="noopener noreferrer">Rotating</a> · <a href="../static/quick-start.md" target="_blank" rel="noopener noreferrer">Static</a>.

## How you connect

| Piece | Value |
| --- | --- |
| Endpoint | `GET https://api.joyproxy.com/v1/fetch` |
| Auth | Scraping API **token** (not the proxy password, not the website login) |
| Geo | `geoCode` query parameter |

## Send a test fetch

Replace `YOUR_SCRAPING_API_TOKEN`. A successful body is the page (or JSON). Failed attempts, timeouts, and hard blocks **do not spend credits**.

{% tabs %}
{% tab title="cURL" %}
```bash
curl -G "https://api.joyproxy.com/v1/fetch" \
  --data-urlencode "token=YOUR_SCRAPING_API_TOKEN" \
  --data-urlencode "url=https://example.com"
```
{% endtab %}

{% tab title="Python" %}
```python
import requests

r = requests.get(
    "https://api.joyproxy.com/v1/fetch",
    params={
        "token": "YOUR_SCRAPING_API_TOKEN",
        "url": "https://example.com",
    },
    timeout=120,
)
print(r.status_code)
print(r.text[:2000])
```
{% endtab %}
{% endtabs %}

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

Run the snippet above against `https://example.com`. Then point `url` at your real target.

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
