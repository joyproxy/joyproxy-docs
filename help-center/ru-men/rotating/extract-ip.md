# 提取代理 IP

完成购买和设置密码后，你可以通过 Web 控制台、API 或 AI 工具提取动态代理端点。

---

## 1. Web 提取（控制台操作）

最常用、最直观的提取方式：

1. 打开 **[提取](https://www.joyproxy.com/admin-ip-extraction-center.html)** 页面，选择 **动态代理（Rotating）**。
2. 选择目标参数（国家、会话类型、协议等）。
3. 点击 **生成（Generate）**。
4. 复制生成的代理地址：
   ```text
   http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
   ```
   > **提醒**：`GENERATED_USER` 是包含了地域和会话加密参数的完整长字符串，请原样复制，勿修改内部字符。

---

## 2. API 提取（自动化提取）

如需在代码中动态获取代理提取链接或接口自动化生成端点：

> 💡 **OpenAPI 中心引流**  
> 详细的 API 请求路径、Query 参数及完整代码示例，请直接查阅 **[OpenAPI 中心](../../best-practices/openapi-center.md)** 中的 `GET /v2/extract` 接口文档。

---

## 3. AI 提取（自然语言生成）

在 Cursor、VS Code、Claude Desktop 或 OpenClaw 中，可通过 JoyProxy 官方 AI 工具用自然语言直接生成代理端点：

- 详情请查阅 **[在 AI 中集成代理](../../best-practices/integrate-proxies-in-ai.md)**。
