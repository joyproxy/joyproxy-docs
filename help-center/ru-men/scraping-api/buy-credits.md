# 购买积分包与并发限制（Buy Credits & Concurrency）

网页抓取 API 采用预付费积分包计费，积分用于支付抓取请求中的云端算力、代理 IP 与无头浏览器渲染消耗。

---

## 购买抓取积分包

1. 登录 JoyProxy 控制台，进入 **[购买代理（Purchase Proxies）](https://www.joyproxy.com/admin-purchase.html)** 或直接打开 **[网页抓取 API（Web Scraping API）](https://www.joyproxy.com/admin-web-unblocker.html?view=buy)**。
2. 选购套餐：
   - **预设包（Preset Packs）**：支持 $5 / $20 / $50 / $100 等多种体验与优惠套餐。
   - **自定义积分包（Custom Credits）**：可按需输入任意积分数量（最少 10,000 积分起）。
3. 结算支付：支持 **账户余额（Balance）**、**信用卡/借记卡（Credit Card）**、**PayPal**、**Apple Pay / Google Pay**、**微信支付（WeChat Pay）** 以及 **USDT（TRC20）**。
4. 结账提示：新账户在充值结算时若有 **$5 注册赠金（Bonus Credit）** 可直接抵扣。
5. **积分有效期**：购买的所有抓取积分**永久有效，绝不过期**。

---

## 并发限制规则（Concurrency Limits）

**并发（Concurrency）** 是指你的程序同时处于“处理中/等待响应”状态的抓取请求最大数量。

### 1. 为什么需要限制并发？
为了防止单个账户无节制突发请求导致云端 Headless 渲染集群拥堵，系统会对每个账户设置并发限制。

### 2. 积分包与并发上限对应关系

| 账户等级 / 积分包档位 | 初始默认并发数（Concurrent Threads） |
| --- | --- |
| **基础体验包（$5 - $20）** | 5 - 10 并发 |
| **标准专业包（$50 - $100）** | 20 - 50 并发 |
| **企业高阶包（$200+）** | 100+ 并发（支持联系客服定制更高并发） |

### 3. 超出并发限制的处理（HTTP 429）
- 当发起的并发请求超过当前账户上限时，系统会返回 `429 Too Many Requests (Concurrency limit reached)`。
- **排查与应对策略**：
  1. 在代码中使用信号量（Semaphore）或线程池控制同时并发数。
  2. 对于大批量、高吞吐的抓取任务，建议改用 **[异步队列任务 API（Async API）](async-api.md)**。
  3. 如需提升并发上限，可通过购买更大规格积分包或联系 **[在线客服（Live Chat）](../../support/live-chat.md)** 提交并发扩容申请。
