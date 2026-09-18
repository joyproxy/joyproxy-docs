# 参数与积分消耗

网页抓取 API 抓取接口的常用查询参数（完整路径与列表以 [OpenAPI 中心](../../zui-jia-shi-jian/openapi-center.md) 为准）：

| 参数            | 作用                  |
| ------------- | ------------------- |
| `url`         | 目标页（必填）             |
| `token`       | Scraping API Token  |
| `render=true` | 对动态页做 JavaScript 渲染 |
| `super=true`  | 更强反爬路径              |
| `geoCode=us`  | 出口国家偏好（填真实 ISO 代码）  |

完整列表与插件接口：[API 文档](https://www.joyproxy.com/admin-unblocker-documentation.html)。

## 仅成功时扣积分

| 请求类型               | 成功时积分 |
| ------------------ | ----- |
| 标准抓取               | 1     |
| `render=true`      | 5     |
| `super=true`       | 10    |
| `super` + `render` | 25    |

响应头可含 `X-JoyProxy-Fetch-Credits-Used` 与剩余余额。建议先标准抓取，确需时再开 `render` 或 `super`，成本更可控。

部分站点插件费率不同，见产品页与完整 API 文档。

## 下一步

[查看用量](usage.md)
