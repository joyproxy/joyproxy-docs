# 网页抓取 API

提交**目标 URL**，JoyProxy 返回 HTML 或 JSON。代理、重试、可选 JS 渲染与反爬由平台侧处理。按**积分**计费，且**只有抓取成功才扣积分**——不按代理 GB 流量计费。

[产品页](https://www.joyproxy.com/products/web-unblocker.html) · [定价](https://www.joyproxy.com/pricing.html?network_type=smart-fetch) · [控制台](https://www.joyproxy.com/admin-web-unblocker.html)

## 和代理 IP 的对比

|        | 代理 IP       | 网页抓取 API                       |
| ------ | ----------- | ------------------------------ |
| 你拿到什么  | `host:port` | 托管 HTTP 接口返回的页面内容              |
| 你要维护什么 | 请求头、会话、浏览器  | `render`、`super`、`geoCode` 等参数 |
| 计费     | GB 或按 IP 周期 | **成功**时扣积分（HTTP 2xx 且 body 可用） |

已有爬虫框架、只差出口时继续用代理线；想少维护浏览器集群、直接要页面内容时用本 API。

## 本章目录

1. [快速开始](quick-start.md)
2. [购买积分](buy-credits.md)
3. [获取 Token](token.md)
4. [首次抓取](first-fetch.md)
5. [参数与积分消耗](parameters.md)
6. [查看用量](usage.md)

HTTP 路径、查询参数与代码示例：[OpenAPI 中心](../../zui-jia-shi-jian/openapi-center.md)。

完整参数表：[控制台 API 文档](https://www.joyproxy.com/admin-unblocker-documentation.html)。
