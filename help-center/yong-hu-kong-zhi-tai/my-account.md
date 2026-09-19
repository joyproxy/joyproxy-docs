# 我的账户总览（My Account）

在控制台左侧主导航点击 **我的账户**，即可进入个人账户管理中心。这里集中处理安全凭证、登录配置、语言偏好与交易账本。

<a href="https://www.joyproxy.com/admin-settings.html" target="_blank" rel="noopener noreferrer">直接打开我的账户</a>

页面顶部清晰划分为三个核心标签页，分别对应不同的管理诉求：

---

## 1. 资料页签（Profile）

处理基础账户属性与日常通用偏好设置：

- **账号信息**：查看当前绑定的主邮箱地址。由于邮箱直接关联账户所有权与账单，界面上为只读显示；如确需更换注册邮箱，需通过客服工单提交权属证明人工协助变更。
- **修改密码**：在网页端直接输入当前有效密码与两次新密码完成更改。详细规范见 <a href="change-password.md" target="_blank" rel="noopener noreferrer">修改密码</a>。
- **USDT（TRC20）补单认领**：如果你此前在充值收银台选择了 USDT 转账，但在区块链网络打包确认前不小心关闭了支付窗口，可在本卡片中点击 **认领 USDT**，系统会自动扫描链上收款记录并将对应金额补登到你的可用余额中。
- **界面语言偏好**：切换控制台前端界面的默认语言（支持简体中文、繁体中文、英文等）。详细机制见 <a href="interface-language.md" target="_blank" rel="noopener noreferrer">界面语言</a>。

---

## 2. 安全与 API 页签（Security & API）

处理安全策略与核心自动化凭据：

- **无操作退出时间（Session TTL）**：配置控制台在多长时间没有页面活动后自动安全登出，有效防止离开工位或借用设备时造成权限泄露。详细设置见 <a href="idle-sign-out.md" target="_blank" rel="noopener noreferrer">无操作退出时间</a>。
- **主用户 Token（Master User Token）**：用于通过官方 OpenAPI 下单、充值、查询余额与拉取账户级别统计的最高权限密钥。切勿用于客户端提取代理 IP。详细原理与轮换方法见 <a href="rotate-token.md" target="_blank" rel="noopener noreferrer">主用户与自动化 Token</a>。
- **注销账户**：提供符合合规要求的不可逆账号注销流程。详细流程与风险须知见 <a href="delete-account.md" target="_blank" rel="noopener noreferrer">注销账户</a>。

---

## 3. 账单页签（Invoices）

内嵌完整的财务与订单中心，与独立账单页面具备完全一致的能力：

- 查看每一笔现金/数字货币充值流水以及余额扣减账本；
- 查阅各代理产品线与抓取 API 的购买与续费订单明细；
- 支持单笔生成下载符合财务审计标准的 PDF 商业账单，或按时间段批量打包下载 ZIP 凭据。

关于对账与账单导出的完整指南，请参考 <a href="invoices.md" target="_blank" rel="noopener noreferrer">账单与交易记录</a>。
