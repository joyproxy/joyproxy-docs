# Credits & Billing

Credits are deducted **only when a fetch succeeds** (HTTP 2xx with a usable body). Failed attempts, timeouts, and hard blocks cost nothing.

## Per-request credit costs

*(Table — see [JoyProxy Help Center](https://www.joyproxy.com/help.html) for full table.)*

Plugin endpoints (Amazon, Google, YouTube, etc.) may use different credit rates — see the product page and full API docs.

## Monitor usage

- [Usage tab](https://www.joyproxy.com/admin-web-unblocker.html?view=usage) — balance, concurrency, and request log
- Response headers include `X-JoyProxy-Fetch-Credits-Used` and remaining balance
- List scraping orders with `product_type: smart-fetch` in purchase history / OpenAPI

**📌 Pricing packs**[View credit pack tiers](https://www.joyproxy.com/pricing.html?network_type=smart-fetch) · [Product pricing section](https://www.joyproxy.com/products/web-unblocker.html#pricing)
