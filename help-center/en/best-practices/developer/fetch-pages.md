# Web Scraping API for JS rendering and anti-bot

For pages behind anti-bot or client-side rendering (React/Vue SPA), use hosted **Web Scraping API**.

The service schedules proxies and a headless browser. Credits are deducted only on HTTP 2xx success.

---

## Request (POST /v1/fetch)

- **URL**: `https://api.joyproxy.com/v1/fetch`
- **Auth**: header `Authorization: Bearer <Scraping_API_Token>`

### Example (Python):

```python
import requests

SCRAPING_TOKEN = "YOUR_SCRAPING_API_TOKEN"
headers = {
    "Authorization": f"Bearer {SCRAPING_TOKEN}",
    "Content-Type": "application/json"
}

# Fetch a page that needs JS rendering and a residential exit
payload = {
    "url": "https://example.com",
    "render": True,                      # JavaScript rendering
    "super": True,                       # residential / mobile exit
    "geoCode": "us",                     # US exit
    "output": "raw"
}

response = requests.post("https://api.joyproxy.com/v1/fetch", headers=headers, json=payload, timeout=60)

if response.status_code == 200:
    print("Fetch succeeded, HTML length:", len(response.text))
```
