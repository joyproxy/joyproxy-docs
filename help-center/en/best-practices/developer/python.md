# Python proxies with automatic retry

This page shows `requests` and `httpx` with JoyProxy, plus backoff retries.

---

## 1. requests

```python
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

proxy_url = "http://username:password@gate.joyproxy.com:9001"
proxies = {"http": proxy_url, "https": proxy_url}

session = requests.Session()
retries = Retry(total=3, backoff_factor=1, status_forcelist=[500, 502, 503, 504])
session.mount('https://', HTTPAdapter(max_retries=retries))

try:
    response = session.get("https://ipinfo.io", proxies=proxies, timeout=15)
    print("Response:", response.json())
except Exception as e:
    print(f"Request error: {e}")
```

---

## 2. Async httpx

```python
import asyncio
import httpx

async def fetch(url, proxy):
    mounts = {"all://": httpx.AsyncHTTPTransport(proxy=proxy)}
    async with httpx.AsyncClient(mounts=mounts, timeout=15.0) as client:
        response = await client.get(url)
        print("Status code:", response.status_code)

asyncio.run(fetch("https://ipinfo.io", "http://username:password@gate.joyproxy.com:9001"))
```
