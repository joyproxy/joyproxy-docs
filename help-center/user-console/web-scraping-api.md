# Web Scraping API (console)

Manage **scraping credits**, tokens, usage logs, and embedded API docs from the Web Scraping API area.

[Product](https://www.joyproxy.com/products/web-unblocker.html) · Console home: [admin-web-unblocker](https://www.joyproxy.com/admin-web-unblocker.html)

## Buy

Purchase credit packs with account balance.

- Preset packs from **$5** entry tier
- Custom amounts (**minimum 10K credits**)
- Credits **never expire**; larger balances raise concurrency limits ([pricing](https://www.joyproxy.com/pricing.html?network_type=smart-fetch))

[Open Buy tab](https://www.joyproxy.com/admin-web-unblocker.html?view=buy)

## API Center

- Copy **Scraping API Token** (`/v1/fetch` only)
- Run test fetches against sample URLs
- Rotate token if leaked

[API Center](https://www.joyproxy.com/admin-web-unblocker.html?view=playground)

## Usage

- Remaining credits and concurrency
- Request history for debugging
- Response headers such as `X-JoyProxy-Fetch-Credits-Used`

[Usage tab](https://www.joyproxy.com/admin-web-unblocker.html?view=usage)

## Documentation

In-console reference for parameters (`render`, `super`, `geoCode`, plugins). Also see:

- [Getting started → Web Scraping API](../getting-started/web-scraping-api.md)
- [Full API documentation](https://www.joyproxy.com/admin-unblocker-documentation.html)
- [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html) — Web Scraping API operations

> **Tip**
>
> Credits charge **only on successful fetches**. Tune `super` and `render` flags to balance cost vs success rate.
