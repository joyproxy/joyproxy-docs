# Python 代理网络集成与失败自动重试机制

本文介绍在 Python 中使用 `requests` 与 `httpx` 集成 JoyProxy 代理的标准方法，以及实现失败自动退避重试的机制。

---

## 一、使用 requests 库

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
    print("响应内容:", response.json())
except Exception as e:
    print(f"请求异常: {e}")
```

---

## 二、使用异步 httpx 库

```python
import asyncio
import httpx

async def fetch(url, proxy):
    mounts = {"all://": httpx.AsyncHTTPTransport(proxy=proxy)}
    async with httpx.AsyncClient(mounts=mounts, timeout=15.0) as client:
        response = await client.get(url)
        print("状态码:", response.status_code)

asyncio.run(fetch("https://ipinfo.io", "http://username:password@gate.joyproxy.com:9001"))
```
