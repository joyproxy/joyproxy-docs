# 网页抓取控制台

侧栏 **网页抓取** → <a href="https://www.joyproxy.com/admin-web-unblocker.html" target="_blank" rel="noopener noreferrer">打开控制台</a>

页头 **网页抓取 API 控制台**，说明：**AI 驱动抓取 — 购买 Credits、在 API 中心测试、通过公网 API 集成。**

<a href="https://www.joyproxy.com/products/web-unblocker.html" target="_blank" rel="noopener noreferrer">产品介绍</a>

---

## 页签

| 页签 | 说明 |
| --- | --- |
| **购买** | 积分流量包 |
| **API 中心** | 在线试玩与集成示例 |
| **使用明细** | 余额、并发与请求记录 |
| **文档** | API 概览 |

未登录会提示 **请先登录后使用网页抓取 API。**

---

## 购买

选择 **入门微包**、**入门**、**专业** 等套餐，在 **订单摘要** 中用 **余额支付**。**Credits 即时到账；API 失败请求不扣费。** 页面显示 **并发上限** 与 **当前并发**。

详见 <a href="../getting-started/scraping-api/buy-credits.md" target="_blank" rel="noopener noreferrer">购买积分包</a>、<a href="../getting-started/scraping-api/payments-and-invoices.md" target="_blank" rel="noopener noreferrer">支付记录</a>。

---

## API 中心

填写 **目标 URL**，可开 **JavaScript 渲染**、**Super（住宅/移动）**、**地理定向**，点 **发送请求** 查看结果。

**Scraping API Token** 可显示、复制、轮换。控制台内试用靠登录态；对接生产时公网只认 Scraping API Token。

示例代码提供 cURL、Python、Node.js。详见 <a href="../getting-started/scraping-api/first-fetch.md" target="_blank" rel="noopener noreferrer">测试抓取</a>、<a href="../getting-started/scraping-api/parameters.md" target="_blank" rel="noopener noreferrer">参数与积分</a>。

---

## 使用明细

按日期 **查询** 或选 **今天** / **近 7 天** / **近 30 天**，查看 **请求总数**、**成功率**、**消耗 Credits** 及请求列表。

详见 <a href="../getting-started/scraping-api/usage.md" target="_blank" rel="noopener noreferrer">用量与日志</a>。

---

## 文档页签

打开完整 API 说明。公网请求需携带 Scraping API Token，常用参数包括目标地址、是否渲染、是否使用住宅/移动出口、国家代码等。

Token 区别见 <a href="rotate-token.md" target="_blank" rel="noopener noreferrer">主用户与自动化 Token</a>。
