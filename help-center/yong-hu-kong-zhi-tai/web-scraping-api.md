# 网页抓取 API（控制台）

在网页抓取 API 区域管理**抓取积分**、Token、用量日志与内嵌 API 文档。

[产品](https://www.joyproxy.com/products/web-unblocker.html) · 控制台首页：[admin-web-unblocker](https://www.joyproxy.com/admin-web-unblocker.html)

## 购买

用账户余额购买积分包。

* 从 **$5** 入门档起的预设包
* 自定义金额（**最低 10K 积分**）
* 积分**永不过期**；余额越高并发上限越高（[定价](https://www.joyproxy.com/pricing.html?network_type=smart-fetch)）

[打开购买页签](https://www.joyproxy.com/admin-web-unblocker.html?view=buy)

## API Center

* 复制 **Scraping API Token**（仅用于抓取与用量 API）
* 对示例 URL 做测试抓取
* 若泄露则轮换 Token

[API Center](https://www.joyproxy.com/admin-web-unblocker.html?view=playground)

## 用量

* 剩余积分与并发
* 用于调试的请求历史
* 响应头如 `X-JoyProxy-Fetch-Credits-Used`

[用量页签](https://www.joyproxy.com/admin-web-unblocker.html?view=usage)

## 文档

控制台内参数参考（`render`、`super`、`geoCode`、插件）。另见：

* [入门 → 网页抓取 API](../ru-men/scraping-api/)
* [完整 API 文档](https://www.joyproxy.com/admin-unblocker-documentation.html)
* [OpenAPI Center](../ji-cheng/openapi-center.md) — 网页抓取 API 操作

> **提示**
>
> 积分**仅在抓取成功时**扣费。调整 `super` 与 `render` 以平衡成本与成功率。
