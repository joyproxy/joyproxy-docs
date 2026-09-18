# 首次抓取

1. 复制 **Scraping API Token** — 见 <a href="token.md" target="_blank" rel="noopener noreferrer">获取 Token</a>。
2. 打开 <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> → **Web Scraping API** → **Fetch URL**，或 <a href="https://www.joyproxy.com/admin-web-unblocker.html?view=playground" target="_blank" rel="noopener noreferrer">网页抓取试调页</a>。
3. 把 `url` 设为 `https://example.com` 并发送请求。

成功时响应 body 是页面或 JSON（取决于参数）。失败、超时、硬拦截**不扣积分**。

可从 OpenAPI Center 导出代码片段到项目。认证与请求结构见 <a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a>。

## 下一步

要调 `render`、`super`、`geoCode`：看 <a href="parameters.md" target="_blank" rel="noopener noreferrer">参数与积分消耗</a>。
