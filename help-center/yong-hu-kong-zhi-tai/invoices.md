# 账单与交易记录

查看充值、消费、订单与可下载的 PDF 账单。入口：

- 侧栏 **我的账户** → **账单** Tab（`settingsPage.tabTransactions`）
- 或 **概览** 点击 **账户余额** 进入账本

独立账单页：[admin-transactions.html](https://www.joyproxy.com/admin-transactions.html)（标题 **账单**，`transactions.title`）

---

## 账单页 Tab

| Tab | 文案 | 说明 |
| --- | --- | --- |
| **余额变动** | `transactions.tabBalance` — **充值与账本流水** | **充值**（PayPal 等）、余额消费、续费、调整；**下载账单 PDF**（`downloadSheet`） |
| **订单** | `transactions.tabOrders` — **全部产品购买记录** | 代理套餐、Credits 等购买与续费 |
| **流量使用** | `transactions.tabTraffic` — **动态代理按小时用量** | 按动态产品筛选用量（与控制台 **用量** 互补） |

筛选：**时间范围**、**应用筛选** / **清除**；批量 **批量下载账单 (ZIP)**（`batchSheetsBtn`）。

余额区域提示：**充值及其他账本记录 — 可下载 PDF 账单用于 PayPal / 存档**（`balanceLedgerHint`）。

---

## 类别与类型（常见）

- **充值**（`catRecharge` / `typeRecharge`）
- **购买**、**续费**（`typePurchase` / `typeRenew`）
- **退款**（`typeRefund`）

动态代理流量从预付 GB 扣减；独享按订单有效期；网页抓取按成功请求扣 **Credits**。

---

## 已购库存不在本页

查看生效中的代理订单、端口与剩余流量，请进入各网络控制台的 **已购** 与 **用量** 页签，而非仅在账单页查询。

---

## 继续购买

- 代理：侧栏 **代理** → 选择网络 → **购买** 或控制台内 **购买** 页签。
- 网页抓取： [网页抓取控制台](web-scraping-api.md) → **购买**。

对单笔扣费有疑问：[提交工单](../support/tickets.md)，附上订单号与日期。
