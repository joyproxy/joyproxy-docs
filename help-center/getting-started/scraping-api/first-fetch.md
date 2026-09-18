# First fetch

Replace the token and URL:

```bash
curl -G "https://api.joyproxy.com/v1/fetch" \
  --data-urlencode "token=YOUR_SCRAPING_API_TOKEN" \
  --data-urlencode "url=https://example.com"
```

Python:

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

A successful response body is the page (or JSON, depending on the endpoint). Failed attempts, timeouts, and hard blocks **do not spend credits**.

## Next

Tune `render`, `super`, and `geoCode`: [Parameters and credit costs](parameters.md).
