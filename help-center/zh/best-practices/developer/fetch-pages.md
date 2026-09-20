# 使用网页抓取 API 处理动态渲染与反爬保护

针对具备反爬保护或前端动态渲染（React/Vue SPA）的目标网页，可使用托管式的 **网页抓取 API（Web Scraping API）**。

服务自动处理代理调度与无头浏览器渲染，仅针对 HTTP 2xx 成功响应扣除 Credits 积分。

---

## 接口调用规范（POST /v1/fetch）

- **地址**：`https://api.joyproxy.com/v1/fetch`
- **鉴权**：请求头 `Authorization: Bearer <Scraping_API_Token>`

### 代码示例（Python）：

```python
import requests

SCRAPING_TOKEN = "你的_Scraping_API_Token"
headers = {
    "Authorization": f"Bearer {SCRAPING_TOKEN}",
    "Content-Type": "application/json"
}

# 抓取包含动态渲染与住宅出口要求的网页
payload = {
    "url": "https://example.com",
    "render": True,                      # 开启 JS 动态渲染
    "super": True,                       # 开启高级住宅出口
    "geoCode": "us",                     # 指定美国出口
    "output": "raw"
}

response = requests.post("https://api.joyproxy.com/v1/fetch", headers=headers, json=payload, timeout=60)

if response.status_code == 200:
    print("抓取成功，返回 HTML 长度:", len(response.text))
```
