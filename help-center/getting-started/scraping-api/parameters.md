# 参数与积分消耗

抓取接口常用查询参数如下。完整路径与列表以 <a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a> 为准。

| 参数 | 作用 |
| --- | --- |
| `url` | 目标页（必填） |
| `token` | Scraping API Token |
| `render=true` | 对动态页做 JavaScript 渲染 |
| `super=true` | 更强反爬路径 |
| `geoCode=us` | 出口国家偏好（填真实 ISO 代码） |

完整列表与插件接口：<a href="https://www.joyproxy.com/admin-unblocker-documentation.html" target="_blank" rel="noopener noreferrer">API 文档</a>。

## 只有成功才扣积分

| 请求类型 | 成功时积分 |
| --- | --- |
| 标准抓取 | 1 |
| `render=true` | 5 |
| `super=true` | 10 |
| `super` + `render` | 25 |

响应头可能有 `X-JoyProxy-Fetch-Credits-Used` 和剩余余额。建议先标准抓取，确需时再开 `render` 或 `super`，成本更好控。

部分站点插件费率不同，见产品页与完整 API 文档。

## 下一步

<a href="usage.md" target="_blank" rel="noopener noreferrer">查看用量</a>
