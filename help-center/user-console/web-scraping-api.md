# Web Scraping API (console)

Manage **scraping credits**, tokens, usage logs, and embedded API docs from the Web Scraping API area.

<a href="https://www.joyproxy.com/products/web-unblocker.html" target="_blank" rel="noopener noreferrer">Product</a> · Console home: <a href="https://www.joyproxy.com/admin-web-unblocker.html" target="_blank" rel="noopener noreferrer">admin-web-unblocker</a>

## Buy

Purchase credit packs with account balance.

- Preset packs from **$5** entry tier
- Custom amounts (**minimum 10K credits**)
- Credits **never expire**; larger balances raise concurrency limits (<a href="https://www.joyproxy.com/pricing.html?network_type=smart-fetch" target="_blank" rel="noopener noreferrer">pricing</a>)

<a href="https://www.joyproxy.com/admin-web-unblocker.html?view=buy" target="_blank" rel="noopener noreferrer">Open Buy tab</a>

## API Center

- Copy **Scraping API Token** (`/v1/fetch` only)
- Run test fetches against sample URLs
- Rotate token if leaked

<a href="https://www.joyproxy.com/admin-web-unblocker.html?view=playground" target="_blank" rel="noopener noreferrer">API Center</a>

## Usage

- Remaining credits and concurrency
- Request history for debugging
- Response headers such as `X-JoyProxy-Fetch-Credits-Used`

<a href="https://www.joyproxy.com/admin-web-unblocker.html?view=usage" target="_blank" rel="noopener noreferrer">Usage tab</a>

## Documentation

In-console reference for parameters (`render`, `super`, `geoCode`, plugins). Also see:

- <a href="../getting-started/scraping-api/README.md" target="_blank" rel="noopener noreferrer">Getting started → Web Scraping API</a>
- <a href="https://www.joyproxy.com/admin-unblocker-documentation.html" target="_blank" rel="noopener noreferrer">Full API documentation</a>
- <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> — Web Scraping API operations

> **Tip**
>
> Credits charge **only on successful fetches**. Tune `super` and `render` flags to balance cost vs success rate.
