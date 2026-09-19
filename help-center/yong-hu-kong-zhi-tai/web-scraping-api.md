# 网页抓取控制台

侧栏 **网页抓取** → <a href="https://www.joyproxy.com/admin-web-unblocker.html" target="_blank" rel="noopener noreferrer">admin-web-unblocker.html</a>

页头为 **网页抓取 API 控制台**，说明：**AI 驱动抓取 — 购买 Credits、在 API 中心测试、通过公网 API 集成。**

产品页：<a href="https://www.joyproxy.com/products/web-unblocker.html" target="_blank" rel="noopener noreferrer">网页抓取 API</a>

---

## 页签

| 页签 | 副标题 |
| --- | --- |
| **购买** | 流量包 |
| **API 中心** | 在线试玩 · 测试与集成 |
| **使用明细** | 余额、并发与用量查询 |
| **文档** | API 概览 |

未登录时会提示：**请先登录后使用网页抓取 API。**

---

## 购买

- 可选套餐包括 **入门微包**、**入门**、**进阶**、**成长**、**专业**、**商业**、**规模**、**旗舰** 等。
- 确认 **订单摘要** 后可用 **余额支付**。
- **Credits 即时到账；API 失败请求不扣费。**
- 页面会显示 **并发上限** 与 **当前并发**。

详见 <a href="../getting-started/scraping-api/buy-credits.md" target="_blank" rel="noopener noreferrer">购买积分包与并发限制</a> · <a href="../getting-started/scraping-api/payments-and-invoices.md" target="_blank" rel="noopener noreferrer">查询支付记录</a>

---

## API 中心

试用区可填写 **目标 URL**，并开关：

- **JavaScript 渲染**
- **Super（住宅/移动）**
- **地理定向**（国家代码）

点击 **发送请求** 查看响应；**重置** 可清空表单。

**Scraping API Token** 支持 **显示** / **隐藏**、**复制**、**轮换**。控制台内试用走登录态；对接生产环境时公网 API **只**使用 Scraping API Token。

集成示例提供 **cURL**、**Python**、**Node.js** 三种写法。

详见 <a href="../getting-started/scraping-api/first-fetch.md" target="_blank" rel="noopener noreferrer">在控制台 API 中心测试抓取</a> · <a href="../getting-started/scraping-api/parameters.md" target="_blank" rel="noopener noreferrer">抓取参数与积分</a>

---

## 使用明细

- 按 **开始日期** / **结束日期** **查询**，或使用 **今天** / **近 7 天** / **近 30 天** 快捷筛选。
- 汇总 **请求总数**、**成功率**、**消耗 Credits**。
- 下方列表展示单次请求的时间、目标 URL、状态与扣费（以表格为准）。

详见 <a href="../getting-started/scraping-api/usage.md" target="_blank" rel="noopener noreferrer">查看用量与抓取日志</a> · <a href="../getting-started/scraping-api/response-codes.md" target="_blank" rel="noopener noreferrer">响应码与常见报错</a>

---

## 文档

**文档** 页签打开完整 API 说明（<a href="https://www.joyproxy.com/admin-unblocker-documentation.html" target="_blank" rel="noopener noreferrer">admin-unblocker-documentation.html</a>）。

公网接口为 `/v1/fetch` 等，请求头携带 **Scraping API Token**。常用参数包括目标 **url**、**render**（无头浏览器）、**super**（住宅/移动出口）、**geoCode**（国家代码）等，详见产品文档。

---

## Token 勿混用

**主用户 Token** 与代理 **API Token** 不能用于抓取 API。说明见 <a href="rotate-token.md" target="_blank" rel="noopener noreferrer">主用户与自动化 Token</a> 及控制台内的 **JoyProxy Token 类型说明**。
