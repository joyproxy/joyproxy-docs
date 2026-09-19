# 购买积分包与并发限制（Buy Credits & Concurrency）

网页抓取 API 采用预付费积分包（Credits Pack）计费，积分用于支付抓取请求中的云端算力、代理 IP 与无头浏览器渲染消耗。

---

## 购买抓取积分包

1. 登录 JoyProxy 控制台，进入左侧菜单 **<a href="https://www.joyproxy.com/admin-purchase.html" target="_blank" rel="noopener noreferrer">购买代理（Purchase Proxies）</a>** 页面。
2. 切换到 **网页抓取 API（Web Scraping API）** 标签页（或在控制台中打开 <a href="https://www.joyproxy.com/admin-web-unblocker.html?view=buy" target="_blank" rel="noopener noreferrer">套餐与支付 Buy Credits</a>）。
3. 选购套餐：
   - **预设积分套餐包（Preset Packs）**：如 $5 / $20 / $50 / $100 等多种积分包。
   - **自定义积分包（Custom Credits）**：可按需输入任意积分数量（最少 10,000 积分起）。
4. 结算支付：支持 **账户余额（Balance）**、**信用卡 / 借记卡（Credit Card）**、**PayPal**、**Apple Pay**、**Google Pay**、**微信支付（WeChat Pay）**、**USDT（TRC20）** 以及 **UPI（印度支付）**。
5. **积分有效期**：购买的所有 Credits 积分**永久有效，绝不过期**。

---

## 并发限制与规则（Concurrency Rules）

并发控制同一时间可运行的请求数；Credits 计费规则请见控制台「Credit balance → 说明」。

1. **当前 / 上限的定义**：
   在控制台中看到的「当前 / 上限」（如 `5 / 20`）表示此刻正在进行中的请求数与允许的并发槽位。
2. **并发上限决定规则**：
   并发上限由您购买过的**最高积分包档位**决定；在 Credits 未用完前保持该档位，消耗积分不会导致并发掉档。
3. **超出并发限制时的表现（HTTP 429）**：
   当并发用满时，新发起的请求会返回 HTTP `429 Too Many Requests`，需等待已有请求结束释放槽位。
4. **积分归零与重置规则**：
   - Credits 余额归零后 API 暂停，并发上限同时重置。
   - 余额归零后再次购买，新的并发上限仅由**本次购买的套餐**决定，不会沿用之前买过的大套餐档位。
