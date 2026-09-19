# 代理 IP 程序化提取与本地代理池构建

在采集程序中，通过调用提取接口批量获取代理节点并维护在本地代理池中，可避免频繁调用提取接口引发的速率限制（429 报错）。

---

## 提取接口参数说明（GET /v2/extract）

- **请求地址**：`https://api.joyproxy.com/v2/extract`
- **鉴权**：查询参数 `?token=API_Token` 或请求头 `Authorization: Bearer <API_Token>`
- **参数**：
  - `network_type`：`residential`（住宅）、`cellular`（移动）、`business`（商业）；
  - `country_iso`：国家 ISO 代码（如 `US`）；
  - `count`：提取数量（1~200）；
  - `format`：`json` 或 `crlf`。

---

## 本地代理池示例代码（Python）

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
