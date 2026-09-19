# 提取代理 IP

完成流量购买和凭据设置后，你可以通过 Web 控制台、API 或 AI 工具提取动态代理端点。

---

## 1. Web 提取（控制台界面操作）

这是最直观、最常用的提取方式：

1. 登录控制台，进入 **[提取](https://www.joyproxy.com/admin-ip-extraction-center.html)** 页面（Endpoint generator）。
2. 在顶部选择对应的代理网络（如 **Residential Proxies** 住宅代理），并确认切换到 **Rotating Proxies（动态代理）** 标签。
3. 确认提取模式页签为 **Web generator**。
4. 配置参数：
   - **Output format（输出格式）**：选择 `Endpoint:port`、`HTTP` 或 `SOCKS5`。
   - **Session type（会话类型）**：选择 `Rotating session`（每次换 IP）或 `Sticky session`（粘性会话 1–30 分钟）。
   - **Location（地理位置）**：选择目标 Country（国家）及可选的省市。
   - **Generate（生成条数）**：设置需要的端点条数（1–200 条）。
5. 点击 **Generate now（立即生成）** 按钮。
6. 在下方 **Results（结果列表）** 中查看生成的端点：
   ```text
   http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
   ```
   - 支持切换 `List`（列表）与 `Table`（表格）视图。
   - 点击 **Copy** 一键复制，或点击 **Export** 导出为 CSV、JSON 或 TXT 文件。

> **核心提醒**  
> `GENERATED_USER` 是包含了国家、省市、会话等参数加密后的完整长字符串。请务必完整复制，切勿手动截断或修改其中的字符。

---

## 2. API 提取（自动化程序调用）

如果你的程序需要在代码中动态拉取代理列表或自动化生成端点：

1. 在 **[提取](https://www.joyproxy.com/admin-ip-extraction-center.html)** 页面点击 **API generator** 页签。
2. 可选择 API 返回格式：`Line breaks (CRLF)`（换行文本）或 `JSON`。
3. 直接复制页面生成的 **API 地址 (API URL)**。

> 💡 **OpenAPI 中心引流**  
> 详细的 API 请求路径、Query 参数（如 `token`, `country`, `duration` 等）以及完整代码调用示例，请直接查阅 **[OpenAPI 中心](../../best-practices/openapi-center.md)** 中的 `GET /v2/extract` 接口文档。

---

## 3. AI 提取（自然语言生成）

在 Cursor、VS Code、Claude Desktop 或 OpenClaw 中，可通过 JoyProxy 官方 AI 工具用自然语言直接生成代理端点：

- 在 **[提取](https://www.joyproxy.com/admin-ip-extraction-center.html)** 页面点击 **AI generator** 了解详情。
- 详细指南请查阅 **[在 AI 中集成代理](../../best-practices/integrate-proxies-in-ai.md)**。
