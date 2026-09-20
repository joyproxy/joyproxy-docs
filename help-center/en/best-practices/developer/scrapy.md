# Scrapy rotating-IP middleware

In Scrapy, a custom Downloader Middleware can attach a JoyProxy endpoint to every outbound request.

---

## 1. Middleware (middlewares.py)

```python
import base64

class JoyProxyMiddleware:
    def __init__(self):
        self.proxy_host = "gate.joyproxy.com"
        self.proxy_port = "9001"
        self.username = "your_long_username"
        self.password = "your_password"

    def process_request(self, request, spider):
        request.meta['proxy'] = f"http://{self.proxy_host}:{self.proxy_port}"
        auth = f"{self.username}:{self.password}"
        encoded_auth = base64.b64encode(auth.encode('utf-8')).decode('utf-8')
        request.headers['Proxy-Authorization'] = f"Basic {encoded_auth}"
        return None

    def process_response(self, request, response, spider):
        if response.status in [407, 429]:
            return request.copy()
        return response
```

---

## 2. Register (settings.py)

```python
DOWNLOADER_MIDDLEWARES = {
    'myproject.middlewares.JoyProxyMiddleware': 750,
}
```
