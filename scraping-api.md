# API Center & Integration

After purchasing credits, use the **API Center** tab to test URLs and copy working examples.

## Get your Scraping API Token

- Open [Web Scraping API console → API Center](https://www.joyproxy.com/admin-web-unblocker.html?view=playground)
- Copy the **Scraping API Token** shown in the panel (scoped to `/v1/fetch` only)
- Rotate the token from API Center if it may have leaked

This token is **not** the proxy extraction token or Master User Token.

## First fetch (curl)

```
curl -G "https://api.joyproxy.com/v1/fetch" \
  --data-urlencode "token=YOUR_SCRAPING_API_TOKEN" \
  --data-urlencode "url=https://example.com"
```

Add `render=true` for JavaScript-heavy pages, or `super=true` for tougher anti-bot sites. Use `geoCode=us` for country-level exit.

## More reference

- [Full Web Scraping API documentation](https://www.joyproxy.com/admin-unblocker-documentation.html)
- [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html) — try **Web Scraping API** operations with your token
