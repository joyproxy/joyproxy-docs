# 我的账户总览

**我的账户**（My Account）入口：[admin-settings.html](https://www.joyproxy.com/admin-settings.html)。侧栏文案为 **我的账户**（`sidebar.myAccount` / `sidebar.settings`）。

页面顶部有两个主 Tab：

| Tab | 现网文案 | 作用 |
| --- | --- | --- |
| **资料** | `settingsPage.tabAccount` | 邮箱、密码、语言、无操作退出、主用户 Token、USDT 认领、注销账户 |
| **账单** | `settingsPage.tabTransactions` | 余额变动、订单记录、PDF 账单（与独立 **账单** 页能力一致） |

下文按 Tab 列出常见区块；细项见各子页面。

---

## 资料（Profile）

### 账户信息

- **邮箱**：只读展示；文案提示 **邮箱无法修改，如需变更请联系支持**（`settingsPage.emailNote`）。
- **修改密码**：见 [修改密码](change-password.md)。按钮 **保存更改**（`settingsPage.saveChanges`）。

### 主用户 Token（Master User Token）

- 标题：**主用户 Token**（`settingsPage.masterTokenTitle`）。
- 说明：**用于账户管理与购买（OpenAPI 下单、余额等）。不能提取代理 IP、不能使用 AI、不能调用网页抓取 API。**
- 操作：**显示 Token** / **隐藏 Token**、**复制**、**轮换**（`settingsPage.rotate`）。轮换前会弹出确认：**确定立即轮换主用户 Token？现有 Token 将失效…**

详见 [主用户与自动化 Token](rotate-token.md)。

### 语言

- 标题：**语言**（`settingsPage.languageTitle`）— **选择管理后台界面语言**。
- 见 [界面语言](interface-language.md)。

### 无操作退出时间

- 标题：**无操作退出时间**（`settingsPage.sessionTtlTitle`）。
- 说明：**超过该时长没有任何操作（浏览页面、调用后台接口等）将自动退出登录；有活动时会续期。**
- 选项包括 **1 小时**、**3 小时**、**6 小时**、**12 小时**、**24 小时（默认）**、**1 天** 至 **7 天** 等。

见 [无操作退出时间](idle-sign-out.md)。

### USDT（TRC20）

- 标题：**USDT（TRC20）**（`settingsPage.usdtTitle`）。
- 说明：**若已转出 USDT 并关闭了支付窗口，可在此认领入账。**
- 按钮：**复制地址**、**认领 USDT**。若尚未在支付流程生成地址，页面提示：**请先在 Payment Hub 选择 USDT 充值，收款地址会在那时生成。**

充值与账本流水见 [账单与交易记录](invoices.md)。

### 注销账户

- 标题：**注销账户**（`settingsPage.closeAccountTitle`）。
- 按钮：**注销我的账户**（`settingsPage.closeAccountBtn`），三步确认流程。

见 [注销账户](delete-account.md)。

---

## 账单（Transactions）

与 [账单与交易记录](invoices.md) 同一套数据，也可从概览点击 **账户余额** 进入。

账单页内常见子 Tab（`transactions.*`）：

| 子 Tab | 文案 | 内容 |
| --- | --- | --- |
| **余额变动** | `tabBalance` — 充值与账本流水 | PayPal / 余额等 **充值**、消费、续费；可 **下载账单 PDF** |
| **订单** | `tabOrders` — 全部产品购买记录 | 各产品线购买与续费订单 |
| **流量使用** | `tabTraffic` — 动态代理按小时用量 | 按网络筛选动态流量（界面以当前版本为准） |

> 已下线的独立「动态代理流量明细」全站页不再使用；用量请以各网络控制台 **用量** 页签及账单内 **流量使用** 为准。
