# First fetch

1. Copy your **Scraping API Token** — <a href="token.md" target="_blank" rel="noopener noreferrer">Get your token</a>.
2. Open <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> → **Web Scraping API** → **Fetch URL**, or the <a href="https://www.joyproxy.com/admin-web-unblocker.html?view=playground" target="_blank" rel="noopener noreferrer">API Center playground</a>.
3. Set `url` to `https://example.com` and run the request.

A successful response body is the page (or JSON, depending on flags). Failed attempts, timeouts, and hard blocks **do not spend credits**.

Copy exported snippets from OpenAPI Center into your app. Request shape and auth: <a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>.

## Next

Tune `render`, `super`, and `geoCode`: <a href="parameters.md" target="_blank" rel="noopener noreferrer">Parameters and credit costs</a>.
