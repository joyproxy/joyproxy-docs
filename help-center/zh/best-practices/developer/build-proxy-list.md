# 代理 IP 程序化提取与本地代理池构建

在采集程序中，通过调用提取接口批量获取代理节点并维护在本地代理池中，可避免频繁调用提取接口引发的速率限制（429 报错）。

---

## 提取接口参数说明（GET /v2/extract）

- **请求地址**：`https://api.joyproxy.com/v2/extract`
- **鉴权**：查询参数 `?token=API_Token` 或请求头 `Authorization: Bearer <API_Token>`
- **核心参数（简要说明）**：
  - `network_type`：代理网络类型，如 `residential`（住宅）、`cellular`（移动）、`business`（商业）；
  - `country_iso`：目标出口国家 ISO 代码（如 `US`、`JP`、`DE`）；
  - `count`：单次拉取数量；
  - `format`：返回格式，如 `json` 或 `crlf`。

> 💡 **完整 API 参数字典与在线调试**  
> 提取接口的完整请求参数（包括省州、城市、会话时长控制等高级字段）、限制规则及即时调试，请直接访问控制台 **<a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a>**。

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
