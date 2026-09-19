# 账单与交易记录

查看充值、消费、订单与 PDF 账单。

---

## 入口

| 入口 | 说明 |
| --- | --- |
| **我的账户** → **账单** Tab | 内嵌账单（`settingsPage.tabTransactions`） |
| **概览** → 点击 **账户余额** | 跳转账本 |
| 独立页 | <a href="https://www.joyproxy.com/admin-transactions.html" target="_blank" rel="noopener noreferrer">admin-transactions.html</a>（标题 **账单**） |

---

## 三个子 Tab

| Tab | 文案 | 副标题 |
| --- | --- | --- |
| **余额变动** | `transactions.tabBalance` | **充值与账本流水** |
| **订单** | `transactions.tabOrders` | **全部产品购买记录** |
| **流量使用** | `transactions.tabTraffic` | **动态代理按小时用量** |

**余额变动** 提示：**充值及其他账本记录 — 可下载 PDF 账单用于 PayPal / 存档**（`balanceLedgerHint`）。

筛选：**时间范围**、**应用筛选** / **清除**；单条 **PDF** 下载；**批量下载账单 (ZIP)**。

---

## 常见类别

账本 **类别** / 订单 **类型** 示例：

- **充值**（PayPal、银行卡 Evonet、微信支付、账户余额等 — `methodPaypal` / `methodEvonet` / `methodWechat` / `methodBalance`）
- **购买**、**续费**
- **退款**
- **管理员赠送** / **管理员扣款**

动态代理从预付 GB 扣减；独享按订单周期；网页抓取按成功请求扣 **Credits**（失败不扣费）。

---

## 与控制台的分工

| 需求 | 去哪里 |
| --- | --- |
| 生效中订单、剩余流量、端口到期 | 各网络 **已购** / **用量** |
| 充值流水、PDF、全产品订单列表 | 本页 |
| USDT 链上未到账 | **资料** Tab → **USDT 认领** |

---

## 争议与开票

单笔扣费疑问：<a href="../fu-wu-yu-zhi-chi/tickets.md" target="_blank" rel="noopener noreferrer">提交工单</a>，附订单号与日期。公司抬头发票见各产品 **查询支付记录** 章节或联系 **实时聊天**。
