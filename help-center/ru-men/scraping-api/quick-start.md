# 网页抓取 API · 快速开始（Quick Start）

本指南带你快速完成网页抓取 API 的积分包购买、API Token 获取、控制台在线测试与代码集成。

> **什么是网页抓取 API？**  
> 你只需向 JoyProxy 发送包含目标 URL 的请求，系统将在云端自动完成代理轮换、浏览器渲染与反爬绕过，并直接返回页面 HTML。**只有抓取成功才扣积分！**

---

## 第一步：购买抓取积分包

1. 登录 [JoyProxy 控制台](https://www.joyproxy.com/admin-overview.html)，进入左侧菜单 **[购买代理（Purchase Proxies）](https://www.joyproxy.com/admin-purchase.html)** 页面。
2. 选择 **网页抓取 API（Web Scraping API）** 标签页。
3. 选择预设积分套餐包（如 **$5 / 50K 积分**）或输入自定义积分数量（最少 10K 积分起）。
4. 选择支付渠道：支持 **账户余额（Balance）**、**信用卡 / 借记卡（Credit Card）**、**PayPal**、**Apple Pay**、**Google Pay**、**微信支付（WeChat Pay）**、**USDT（TRC20）** 及 **UPI（印度支付）**。
5. 完成支付后积分即时到账，**永久有效不过期**。

---

## 第二步：获取 Scraping API Token

购买积分后，系统会自动为你的账户生成专属的 **Scraping API Token**：

1. 进入左侧菜单 **[网页抓取 API（Web Scraping API）](https://www.joyproxy.com/admin-web-unblocker.html)** 控制台页面。
2. 切换到 **API 中心（API Center）** 标签页（或点击右上角 **API 文档 Documentation**）。
3. 在 **API Token** 文本框中点击 **复制（Copy）** 按钮，复制你的凭据。

> **安全提示与 Token 轮换（Rotate Token）**  
> - **专码专用**：Scraping API Token 专门用于网页抓取 API，不能用于提取代理 IP 或主用户 OpenAPI 下单。  
> - **安全轮换**：若怀疑 Token 泄漏，可随时在 API Center 页面点击 **轮换 API Token（Rotate Token）**，旧 Token 将立即失效。

---

## 第三步：在控制台 API 中心在线试跑

1. 在 **[网页抓取 API](https://www.joyproxy.com/admin-web-unblocker.html)** 页面切到 **API 中心（API Center）** 页签。
2. 在 **目标 URL（Target URL）** 输入框中输入需要抓取的网址（例如 `https://example.com`）。
3. 点击 **发送请求（Send Request）** 按钮。
4. 页面下方会即时展示抓取结果 HTML 源码、响应 HTTP 状态码以及本次消耗的积分数。

---

## 第四步：在代码中发起抓取

拿着你的 Scraping API Token，即可在代码中直接发起抓取。具体可视化参数配置与代码生成请参阅 **[在控制台 API 中心测试抓取](first-fetch.md)**；若需查阅原始 REST API HTTP 端点说明，请参阅 **[OpenAPI 中心](../../best-practices/openapi-center.md)**。

```bash
# 简单的 cURL GET 请求测试
curl "https://api.joyproxy.com/v1/fetch?token=YOUR_SCRAPING_TOKEN&url=https%3A%2F%2Fexample.com"
```

---

## 3 秒排查常见报错

- **401 Invalid Token**：检查复制的是否为 **Scraping API Token**（不要混淆为代理 Username/Password 或 Master Token）。
- **402 Insufficient Credits**：积分已耗尽，请进入 [购买积分包](buy-credits.md) 补充积分。
- **429 Too Many Requests**：发起的并发请求数超过了当前账户额度限制，详情参阅 [并发限制规则](buy-credits.md)。
