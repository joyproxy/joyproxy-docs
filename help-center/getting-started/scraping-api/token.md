# 获取 Scraping API Token

**Scraping API Token** 只给网页抓取 API 用。不是代理提取 Token、主用户 Token，也不是 AI Access Token。

1. 打开 <a href="https://www.joyproxy.com/admin-web-unblocker.html?view=playground" target="_blank" rel="noopener noreferrer">网页抓取试调页</a>。
2. 复制 **Scraping API Token**。
3. 放进环境变量保存。怀疑泄露时，在试调页轮换。

| Token | 典型用途 |
| --- | --- |
| Scraping API Token | 托管抓取、积分与用量接口 |
| 提取 **API URL** | 代理端点生成 — 从 <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成</a> 复制 |
| 主用户 Token | 订单与余额 API |
| AI Access Token | OpenClaw / MCP |

试调与请求形态见 <a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a>。

## 下一步

<a href="first-fetch.md" target="_blank" rel="noopener noreferrer">首次抓取</a>
