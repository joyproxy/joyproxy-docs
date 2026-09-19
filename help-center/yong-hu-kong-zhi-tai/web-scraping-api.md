# 网页抓取控制台

**网页抓取 API** 控制台：[admin-web-unblocker.html](https://www.joyproxy.com/admin-web-unblocker.html)

侧栏 **代理** 分组下名称为 **网页抓取**（`sidebar.proxyWebUnblocker`）。页头常见：

- **网页抓取 API 控制台**（`consoleKicker`）
- **网页抓取 API**（`consoleTitle`）
- 说明：**AI 驱动抓取 — 购买 Credits、在 API 中心测试、通过公网 API 集成。**（`consoleDesc`）

产品页：[网页抓取 API](https://www.joyproxy.com/products/web-unblocker.html)

---

## 页签

| 页签 | 文案 | 副标题 |
| --- | --- | --- |
| 购买 | **购买** | **流量包**（`tabBuyHint`） |
| API 中心 | **API 中心** | **在线试玩 · 测试与集成**（`tabApiCenterHint`） |
| 使用明细 | **使用明细** | **余额、并发与用量查询**（`tabUsageHint`） |
| 文档 | **文档** | **API 概览**（`tabDocsHint`） |

URL 参数示例：`?view=buy`、`?view=playground`、`?view=usage`。

---

## 购买（Buy）

- 选择 Credits 套餐（如 **入门**、**专业** 等，`pack*` 文案）。
- 订单区：**订单摘要**、**余额支付**（`orderPayBalance`）；说明 **Credits 即时到账；API 失败请求不扣费。**（`orderNote`）
- 并发展示：**并发上限** / **当前并发**（`concurrencyLimitLabel` / `concurrencyActiveLabel`）

购买与并发规则详见 [购买积分包与并发限制](../getting-started/scraping-api/buy-credits.md)。

---

## API 中心

- 试用区：**目标 URL**、**发送请求**（`pgTryIt`）、**JavaScript 渲染** / **Super（住宅/移动）** 等开关。
- **Scraping API Token**：**复制**、**轮换**（`pgTokenRotate`）；未购买时 **请先购买 Credits**（`pgTokenNoProduct`）。
- 说明：**API 中心使用网站登录态。公网 API 仅使用 Scraping API Token。**（`pgAuthNote`）
- 集成示例 Tab：**cURL**、**Python**、**Node.js**（`pgTabCurl` 等）

试跑与代码生成：[在控制台 API 中心测试抓取](../getting-started/scraping-api/first-fetch.md)

---

## 使用明细（Usage）

- 日期筛选：**开始日期** / **结束日期**、**查询**；快捷 **今天** / **近 7 天** / **近 30 天**
- 统计：**请求总数**、**成功率**、**消耗 Credits**
- 请求列表列：**时间**、目标 URL、状态、消耗等（以表格为准）

详见 [查看用量与抓取日志](../getting-started/scraping-api/usage.md)

---

## 文档（Documentation）

内嵌或跳转完整参数说明：[admin-unblocker-documentation.html](https://www.joyproxy.com/admin-unblocker-documentation.html)

参数与积分：[抓取参数与积分消耗标准](../getting-started/scraping-api/parameters.md)

---

## Token 勿混用

参阅 [主用户与自动化 Token](rotate-token.md) 与控制台 **JoyProxy Token 类型说明**。
