# Web Scraping API

A managed API: send a target URL, receive page content. Billing is **credit-based**, separate from proxy traffic.

## Steps

1. **Purchase credits** in [Web Scraping API → Buy](https://www.joyproxy.com/admin-web-unblocker.html?view=buy).
2. Open **API Center** — copy your **Scraping API Token** (scoped to `/v1/fetch`; not the proxy extraction token or Master User Token).
3. Call `GET https://api.joyproxy.com/v1/fetch` with `token` and `url` parameters.
4. Monitor **Usage** and read **Documentation** in the console.

Example:

```bash
curl -G "https://api.joyproxy.com/v1/fetch" \
  --data-urlencode "token=YOUR_SCRAPING_API_TOKEN" \
  --data-urlencode "url=https://example.com"
```

Optional parameters include `render=true` for JavaScript-heavy pages, `super=true` for tougher anti-bot sites, and `geoCode` for exit country.

- [Product page](https://www.joyproxy.com/products/web-unblocker.html)
- [Pricing](https://www.joyproxy.com/pricing.html?network_type=smart-fetch)
