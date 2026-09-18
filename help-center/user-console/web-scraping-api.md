# 网页抓取 API（控制台）

在网页抓取 API 区域管理**抓取积分**、Token、用量日志，以及内嵌 API 文档。

<a href="https://www.joyproxy.com/products/web-unblocker.html" target="_blank" rel="noopener noreferrer">产品</a> · 控制台：<a href="https://www.joyproxy.com/admin-web-unblocker.html" target="_blank" rel="noopener noreferrer">admin-web-unblocker</a>

## 购买

用账户余额购买积分包。

- 预设包从 **$5** 起
- 支持自定义金额（**最低 10K 积分**）
- 积分**不过期**；余额越高，并发上限越高（见<a href="https://www.joyproxy.com/pricing.html?network_type=smart-fetch" target="_blank" rel="noopener noreferrer">定价</a>）

<a href="https://www.joyproxy.com/admin-web-unblocker.html?view=buy" target="_blank" rel="noopener noreferrer">打开购买页签</a>

## API Center

- 复制 **Scraping API Token**（只用于抓取与用量相关 API）
- 对示例 URL 试跑抓取
- Token 泄露后在此轮换

<a href="https://www.joyproxy.com/admin-web-unblocker.html?view=playground" target="_blank" rel="noopener noreferrer">API Center</a>

## 用量

- 剩余积分与并发
- 请求历史，便于排查
- 响应头如 `X-JoyProxy-Fetch-Credits-Used`

<a href="https://www.joyproxy.com/admin-web-unblocker.html?view=usage" target="_blank" rel="noopener noreferrer">用量页签</a>

## 文档

控制台内有参数说明（`render`、`super`、`geoCode`、插件等）。还可参考：

- <a href="../getting-started/scraping-api/README.md" target="_blank" rel="noopener noreferrer">入门 → 网页抓取 API</a>
- <a href="https://www.joyproxy.com/admin-unblocker-documentation.html" target="_blank" rel="noopener noreferrer">完整 API 文档</a>
- <a href="../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> — 网页抓取 API 接口

> **提示**
>
> 积分**只在抓取成功时**扣除。按目标站情况调节 `super` 与 `render`，平衡成本与成功率。
