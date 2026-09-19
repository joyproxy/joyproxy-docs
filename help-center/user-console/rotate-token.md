# 主用户与自动化 Token 管理

在 JoyProxy 生态中，为了确保权限最小化原则并防范资产泄露风险，针对不同业务场景设计了相互隔离的 Token 体系。

**核心原则：各类 Token 各司其职，绝对不能交叉混用。**

---

## 四类核心 Token 对照表

| Token 名称 | 适用场景与权限范围 | 绝不能用于 | 获取与轮换入口 |
| :--- | :--- | :--- | :--- |
| **主用户 Token<br>(Master User Token)** | 整个账户的最高权限 API 凭据。用于通过 OpenAPI 自动为账户下单购买套餐、查询账户实时可用余额、调整白名单等。 | **绝不能**用于提取代理 IP，**不能**用于调用抓取 API，**不能**放在前端页面暴露。 | **我的账户（My Account）** → **安全与 API（Security & API）** |
| **代理提取 API Token<br>(API Token)** | 仅用于批量获取代理 IP 列表。用于自动化脚本定期请求 `/v2/extract`、`/v2/extract-long` 或 `/v2/extract-custom` 端点拉取节点 host:port。 | 不能用于账户下单、不能用于查询余额。 | 控制台 **提取（Endpoint Generator）** 页面（复制出来的 API URL 中 `token=...` 参数） |
| **网页抓取 Token<br>(Web Unblocker Token)** | 专用于公网调用网页抓取服务（`/v1/fetch`）以及各语言 SDK 集成。 | 不能用于提取底层代理，不能用于管理账户。 | 控制台 **网页抓取 API（Web Scraping API）** → **API 中心（API Center）** 页签 |
| **AI Access Token** | 仅用于 **MCP 服务器**（`https://api.joyproxy.com/Mcp`）与 **OpenClaw Skill**（`https://api.joyproxy.com/Skill`），驱动 Cursor、VS Code、Claude 等 AI 工具调用。 | 不是代理认证账密，不能向 `gate.joyproxy.com` 发起网络连接。 | 控制台 **提取（Endpoint Generator）** → **AI generator** 标签页 |

---

## 1. 轮换主用户 Token（Master User Token）

主用户 Token 是你在服务器端调用开放接口管理资金和订单的关键。若发生开发人员交接、服务器配置意外公开或疑似泄露，必须第一时间进行轮换：

1. 进入 **我的账户（My Account）** → **安全与 API（Security & API）** 页签。
2. 找到 **主用户 Token（Master User Token）** 区域，默认处于脱敏隐藏状态，点击眼睛图标可显示完整密钥，点击 **复制** 可复制到剪贴板。
3. 点击红色的 **轮换（Rotate）** 按钮。
4. 系统会弹出二次确认窗口，明确提示「现有 Token 将立即失效」。点击确认后，系统会在后台即时生成一个全新的安全密钥。
5. 复制新密钥，并同步更新你部署在生产环境服务上的所有调用配置。

---

## 2. 轮换代理提取链接（API Token）

当你编写的爬虫或外部软件使用固定 URL 提取 IP 时，若该 URL 泄露给非授权人员，可能会造成提取配额被消耗：

1. 打开控制台 **提取（Endpoint Generator）** 页面。
2. 切换至对应的网络类型与产品模式。
3. 调整提取选项或直接重新生成提取链接，系统会为你生成包含新 Token 的 **API URL**。
4. 用新生成的链接覆盖你脚本中旧的提取请求地址，旧的提取请求将即刻被网关阻断。

---

## 3. 轮换网页抓取 Token（Web Unblocker Token）

1. 进入控制台 **网页抓取 API（Web Scraping API）**，切换到 **API 中心（API Center）** 页签。
2. 在右上角或调试区域找到 **Scraping API Token** 模块。
3. 点击 **轮换（Rotate）** 并在弹窗中确认。新密钥生成后，所有使用旧 Token 请求 `/v1/fetch` 的自动化任务均需同步更新。

---

## 4. 轮换 AI Access Token

1. 进入控制台 **提取（Endpoint Generator）** 页面。
2. 切换到顶部的 **AI generator** 标签页。
3. 在 AI Access Token 区域点击 **轮换（Rotate）** 按钮并在弹窗中确认。
4. 轮换后，旧 Token 立即失效，请同步更新本地 Cursor 或 Claude 的 MCP 配置文件（`headers.x-ai-access-token`）。

---

## 轮换后的排错检查

完成任一 Token 轮换后，建议在终端中发起一次简单的请求验证：
- 若接口返回 `401 Unauthorized` 或认证失败提示，说明生产环境某个配置项依然在引用旧的 Token，全局排查项目环境变量并重启服务即可。
- 更多 OpenAPI 请求细节可查阅最佳实践中的 <a href="../best-practices/developer/build-proxy-list.md" target="_blank" rel="noopener noreferrer">代理 IP 程序化提取与本地代理池构建</a>。
