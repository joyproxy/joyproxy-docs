# Programmatic extraction and a local proxy pool

In a crawler, pull endpoints from the extract API in batches and keep them in a local pool so you do not hit rate limits (`429`).

---

## Extract API (GET /v2/extract)

- **URL**: `https://api.joyproxy.com/v2/extract`
- **Auth**: query `?token=API_Token` or header `Authorization: Bearer <API_Token>`
- **Core parameters**:
  - `network_type`: `residential` (Residential), `cellular` (Mobile), `business` (Business / ISP);
  - `country_iso`: exit country ISO code (`US`, `JP`, `DE`);
  - `count`: how many to pull per call;
  - `format`: `json` or `crlf`.

> 💡 **Full parameter list and live debug**  
> State/city, session lifetime, limits, and a live tester live in console **<a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>**.

---

## Local pool example (Python)

```python
import queue
import requests

class ProxyPoolManager:
    def __init__(self, api_token, min_size=5, fetch_count=20):
        self.api_token = api_token
        self.min_size = min_size
        self.fetch_count = fetch_count
        self.pool = queue.Queue()

    def refresh_pool(self):
        url = "https://api.joyproxy.com/v2/extract"
        params = {
            "token": self.api_token,
            "network_type": "residential",
            "country_iso": "US",
            "count": self.fetch_count,
            "format": "json"
        }
        resp = requests.get(url, params=params, timeout=10)
        data = resp.json()
        if data.get("code") == 200:
            for item in data.get("data", {}).get("list", []):
                self.pool.put(item["proxy_url"])

    def get_proxy(self):
        if self.pool.qsize() < self.min_size:
            self.refresh_pool()
        try:
            return self.pool.get(timeout=3)
        except queue.Empty:
            return None
```
