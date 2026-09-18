# 首次抓取

1. 复制 **Scraping API Token** — 见 [获取 Token](token.md)。
2. 打开 [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html) → **Web Scraping API** → **Fetch URL**，或 [API Center playground](https://www.joyproxy.com/admin-web-unblocker.html?view=playground)。
3. 将 `url` 设为 `https://example.com` 并发送请求。

成功时响应 body 为页面（或 JSON，取决于参数）。失败、超时、硬拦截**不扣积分**。

可从 OpenAPI Center 导出代码片段到项目。认证与请求结构见 [OpenAPI 中心](../../zui-jia-shi-jian/openapi-center.md)。

## 下一步

调整 `render`、`super`、`geoCode`：[参数与积分消耗](parameters.md)。
