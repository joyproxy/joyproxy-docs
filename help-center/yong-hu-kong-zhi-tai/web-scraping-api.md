# 网页抓取控制台

**网页抓取 API**：<a href="https://www.joyproxy.com/admin-web-unblocker.html" target="_blank" rel="noopener noreferrer">admin-web-unblocker.html</a>

| 项目 | 文案 |
| --- | --- |
| 侧栏 | **网页抓取**（`sidebar.proxyWebUnblocker`） |
| Kicker | **网页抓取 API 控制台**（`consoleKicker`） |
| 标题 | **网页抓取 API**（`consoleTitle`） |
| 说明 | **AI 驱动抓取 — 购买 Credits、在 API 中心测试、通过公网 API 集成。**（`consoleDesc`） |

产品页：<a href="https://www.joyproxy.com/products/web-unblocker.html" target="_blank" rel="noopener noreferrer">网页抓取 API</a>

---

## 页签

| 页签 | 主标题 | 副标题 | `?view=` |
| --- | --- | --- | --- |
| 购买 | **购买** | **流量包** | `buy` |
| API 中心 | **API 中心** | **在线试玩 · 测试与集成** | `playground` |
| 使用明细 | **使用明细** | **余额、并发与用量查询** | `usage` |
| 文档 | **文档** | **API 概览** | `docs` |

未登录时提示：**请先登录后使用网页抓取 API。**

---

## 购买

- 套餐示例（`pack*`）：**入门微包**、**入门**、**进阶**、**成长**、**专业**、**商业**、**规模**、**旗舰** 等。
- **订单摘要**、**余额支付**（`orderPayBalance`）。
- 说明：**Credits 即时到账；API 失败请求不扣费。**（`orderNote`）
- **并发上限** / **当前并发**（`concurrencyLimitLabel` / `concurrencyActiveLabel`）。

详见 <a href="../getting-started/scraping-api/buy-credits.md" target="_blank" rel="noopener noreferrer">购买积分包与并发限制</a> · <a href="../getting-started/scraping-api/payments-and-invoices.md" target="_blank" rel="noopener noreferrer">查询支付记录</a>

---

## API 中心

试用区：

- **目标 URL**（`pgUrlLabel`）
- **JavaScript 渲染**（`pgRenderLabel`）
- **Super（住宅/移动）**（`pgSuperLabel`）
- **地理定向** / 国家代码（`pgGeoLabel`）
- **发送请求**（`pgTryIt`）、**重置**（`pgReset`）

**Scraping API Token**：**显示** / **隐藏**、**复制**、**轮换**；说明 **API 中心使用网站登录态。公网 API 仅使用 Scraping API Token。**（`pgAuthNote`）

集成示例 Tab：**cURL**、**Python**、**Node.js**

详见 <a href="../getting-started/scraping-api/first-fetch.md" target="_blank" rel="noopener noreferrer">在控制台 API 中心测试抓取</a> · <a href="../getting-started/scraping-api/parameters.md" target="_blank" rel="noopener noreferrer">抓取参数与积分</a>

---

## 使用明细

- 日期：**开始日期** / **结束日期**、**查询**；快捷 **今天** / **近 7 天** / **近 30 天**
- 统计：**请求总数**、**成功率**、**消耗 Credits**
- 请求列表：时间、目标 URL、HTTP 状态、扣费等（以表格为准）

详见 <a href="../getting-started/scraping-api/usage.md" target="_blank" rel="noopener noreferrer">查看用量与抓取日志</a> · <a href="../getting-started/scraping-api/response-codes.md" target="_blank" rel="noopener noreferrer">响应码与常见报错</a>

---

## 文档

页签 **文档** 打开 <a href="https://www.joyproxy.com/admin-unblocker-documentation.html" target="_blank" rel="noopener noreferrer">admin-unblocker-documentation.html</a> 或内嵌 API 概览。

公网接口：`/v1/fetch` 等，仅接受 **Scraping API Token**。参数 **url**、**render**、**super**、**geoCode** 等见产品文档。

---

## Token

勿与 **主用户 Token**、代理 **API Token** 混用。参阅 <a href="rotate-token.md" target="_blank" rel="noopener noreferrer">主用户与自动化 Token</a> 与控制台 **JoyProxy Token 类型说明**。
