# Parameters and credit costs

Common query flags on the Web Scraping API fetch operation (see <a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> for the live path and full list):

| Parameter | Purpose |
| --- | --- |
| `url` | Target page (required) |
| `token` | Scraping API Token |
| `render=true` | JavaScript rendering for dynamic pages |
| `super=true` | Stronger anti-bot path |
| `geoCode=us` | Country-level exit preference (use a real ISO code you need) |

Full list and plugin endpoints: <a href="https://www.joyproxy.com/admin-unblocker-documentation.html" target="_blank" rel="noopener noreferrer">API documentation</a>.

## Credits charged on success only

| Request type | Credits (successful fetch) |
| --- | --- |
| Standard fetch | 1 |
| `render=true` | 5 |
| `super=true` | 10 |
| `super` + `render` | 25 |

Response headers can include `X-JoyProxy-Fetch-Credits-Used` and remaining balance. Start with a standard fetch; add `render` or `super` only when the page needs them—this keeps cost predictable.

Some site-specific plugins may use different rates; the product page and full API docs list those.

## Next

<a href="usage.md" target="_blank" rel="noopener noreferrer">Monitor usage</a>
