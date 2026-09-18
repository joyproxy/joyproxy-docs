# 快速开始

提交**目标 URL**，拿到 HTML 或 JSON。**仅成功抓取才扣积分**。

要自己管 `host:port`？[轮换](../rotating/quick-start.md) · [静态](../static/quick-start.md)。

## 如何调用

在控制台复制 **Scraping API Token**，按 [OpenAPI 中心](../../zui-jia-shi-jian/openapi-center.md) 的抓取接口说明发请求。[API Center](https://www.joyproxy.com/admin-web-unblocker.html?view=playground) playground 与生产一致。

## 试一次抓取

1. 按 [获取 Token](token.md) 复制 Token。
2. 打开 [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html) → **Web Scraping API** → **Fetch URL**，或用控制台 playground。
3. 将 `url` 设为 `https://example.com` 并执行。

成功时 body 为页面（或 JSON）。失败、超时、硬拦截**不扣积分**。

## 控制台配置

> **提示**
>
> 新账户可领 **$5 注册赠金**，结账时可用于抓取积分。

### 1. 购买积分

在 [购买](https://www.joyproxy.com/admin-purchase.html)（网页抓取 API / 积分）或 [网页抓取控制台](https://www.joyproxy.com/admin-web-unblocker.html) 购买积分包。

详见 [购买积分](buy-credits.md)。

### 2. 获取 Token

在 [网页抓取控制台](https://www.joyproxy.com/admin-web-unblocker.html) 复制 Token，勿提交到公开仓库或工单。步骤见 [获取 Token](token.md)。

### 3. 验证抓取

在 API Center 或 OpenAPI Center 对 `https://example.com` 试跑，再换成真实目标 URL。

`render=true`、`super=true`、`geoCode` 等见 [参数与积分消耗](parameters.md) 与 [控制台文档](https://www.joyproxy.com/admin-unblocker-documentation.html)。

## 排错

| 现象                  | 先查                                             |
| ------------------- | ---------------------------------------------- |
| 401 / invalid token | 用的是 Scraping API Token，不是代理密码或 AI Access Token |
| 空 body / 报错         | 积分是否充足；先不加 `render` 试                          |
| 国家不对                | 按参数文档传 `geoCode`                               |

## 接下来

| 任务      | 页面                                             |
| ------- | ---------------------------------------------- |
| 抓取细节    | [首次抓取](first-fetch.md)                         |
| 参数与积分   | [参数与积分消耗](parameters.md)                       |
| 剩余积分    | [查看用量](usage.md)                               |
| HTTP 参考 | [OpenAPI 中心](../../zui-jia-shi-jian/openapi-center.md) |
