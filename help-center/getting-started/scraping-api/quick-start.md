# 快速开始

提交**目标 URL**，拿到 HTML 或 JSON。**仅成功抓取才扣积分**。

要自己管 `host:port`？<a href="../rotating/quick-start.md" target="_blank" rel="noopener noreferrer">轮换</a> · <a href="../static/quick-start.md" target="_blank" rel="noopener noreferrer">静态</a>。

## 如何调用

在控制台复制 **Scraping API Token**，按 <a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a> 的抓取接口说明发请求。<a href="https://www.joyproxy.com/admin-web-unblocker.html?view=playground" target="_blank" rel="noopener noreferrer">API Center</a>  playground 与生产一致。

## 试一次抓取

1. 按 <a href="token.md" target="_blank" rel="noopener noreferrer">获取 Token</a> 复制 Token。
2. 打开 <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> → **Web Scraping API** → **Fetch URL**，或用控制台 playground。
3. 将 `url` 设为 `https://example.com` 并执行。

成功时 body 为页面（或 JSON）。失败、超时、硬拦截**不扣积分**。

## 控制台配置

> **提示**
>
> 新账户可领 **$5 注册赠金**，结账时可用于抓取积分。

### 1. 购买积分

在 <a href="https://www.joyproxy.com/admin-purchase.html" target="_blank" rel="noopener noreferrer">购买</a>（网页抓取 API / 积分）或 <a href="https://www.joyproxy.com/admin-web-unblocker.html" target="_blank" rel="noopener noreferrer">网页抓取控制台</a> 购买积分包。

详见 <a href="buy-credits.md" target="_blank" rel="noopener noreferrer">购买积分</a>。

### 2. 获取 Token

在 <a href="https://www.joyproxy.com/admin-web-unblocker.html" target="_blank" rel="noopener noreferrer">网页抓取控制台</a> 复制 Token，勿提交到公开仓库或工单。步骤见 <a href="token.md" target="_blank" rel="noopener noreferrer">获取 Token</a>。

### 3. 验证抓取

在 API Center 或 OpenAPI Center 对 `https://example.com` 试跑，再换成真实目标 URL。

`render=true`、`super=true`、`geoCode` 等见 <a href="parameters.md" target="_blank" rel="noopener noreferrer">参数与积分消耗</a> 与 <a href="https://www.joyproxy.com/admin-unblocker-documentation.html" target="_blank" rel="noopener noreferrer">控制台文档</a>。

## 排错

| 现象 | 先查 |
| --- | --- |
| 401 / invalid token | 用的是 Scraping API Token，不是代理密码或 AI Access Token |
| 空 body / 报错 | 积分是否充足；先不加 `render` 试 |
| 国家不对 | 按参数文档传 `geoCode` |

## 接下来

| 任务 | 页面 |
| --- | --- |
| 抓取细节 | <a href="first-fetch.md" target="_blank" rel="noopener noreferrer">首次抓取</a> |
| 参数与积分 | <a href="parameters.md" target="_blank" rel="noopener noreferrer">参数与积分消耗</a> |
| 剩余积分 | <a href="usage.md" target="_blank" rel="noopener noreferrer">查看用量</a> |
| HTTP 参考 | <a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a> |
