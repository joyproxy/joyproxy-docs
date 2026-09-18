# 网页抓取 API

提交**目标 URL**，JoyProxy 返回 HTML 或 JSON。代理、重试、可选 JS 渲染与反爬由平台侧处理。按**积分**计费，且**只有抓取成功才扣积分**——不按代理 GB 流量计费。

<a href="https://www.joyproxy.com/products/web-unblocker.html" target="_blank" rel="noopener noreferrer">产品页</a> · <a href="https://www.joyproxy.com/pricing.html?network_type=smart-fetch" target="_blank" rel="noopener noreferrer">定价</a> · <a href="https://www.joyproxy.com/admin-web-unblocker.html" target="_blank" rel="noopener noreferrer">控制台</a>

## 和代理 IP 的对比

| | 代理 IP | 网页抓取 API |
| --- | --- | --- |
| 你拿到什么 | `host:port` | 托管 HTTP 接口返回的页面内容 |
| 你要维护什么 | 请求头、会话、浏览器 | `render`、`super`、`geoCode` 等参数 |
| 计费 | GB 或按 IP 周期 | **成功**时扣积分（HTTP 2xx 且 body 可用） |

已有爬虫框架、只差出口时继续用代理线；想少维护浏览器集群、直接要页面内容时用本 API。

## 本章目录

1. <a href="quick-start.md" target="_blank" rel="noopener noreferrer">快速开始</a>
2. <a href="buy-credits.md" target="_blank" rel="noopener noreferrer">购买积分</a>
3. <a href="token.md" target="_blank" rel="noopener noreferrer">获取 Token</a>
4. <a href="first-fetch.md" target="_blank" rel="noopener noreferrer">首次抓取</a>
5. <a href="parameters.md" target="_blank" rel="noopener noreferrer">参数与积分消耗</a>
6. <a href="usage.md" target="_blank" rel="noopener noreferrer">查看用量</a>

HTTP 路径、查询参数与代码示例：<a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a>。

完整参数表：<a href="https://www.joyproxy.com/admin-unblocker-documentation.html" target="_blank" rel="noopener noreferrer">控制台 API 文档</a>。
