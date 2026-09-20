# Scrapy 爬虫框架自动轮换 IP 中间件开发

在 Scrapy 项目中，可通过编写自定义下载器中间件（Downloader Middleware），为每个出站请求自动挂载 JoyProxy 代理。

---

## 一、编写中间件（middlewares.py）

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

## 二、注册中间件（settings.py）

```python
DOWNLOADER_MIDDLEWARES = {
    'myproject.middlewares.JoyProxyMiddleware': 750,
}
```
