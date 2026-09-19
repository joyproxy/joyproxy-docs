# 提取代理 IP（Extract IP）

完成流量购买和凭据设置后，你可以通过 Web 控制台、API 或 AI 工具提取动态代理端点。

---

## 1. Web 提取（控制台界面操作）

这是最直观、最常用的提取方式：

1. 登录控制台，进入 **<a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">提取（Endpoint Generator）</a>** 页面。
2. 在顶部选择对应的代理网络（如 **住宅代理（Residential Proxies）**），并确认切换到 **动态代理（Rotating Proxies）** 标签。
3. 确认提取模式页签为 **Web 提取（Web Generator）**。
4. 配置参数：
   - **输出格式**：选择 `Endpoint:port`、`HTTP` 或 `SOCKS5`。
   - **会话类型**：选择 `每次换 IP` 或 `粘性会话`（1–30 分钟）。
   - **地理位置**：选择目标国家/地区及可选的省市。
   - **生成条数**：设置需要的端点条数（1–200 条）。
5. 点击 **立即生成** 按钮。
6. 在下方结果列表中查看生成的端点：
   ```text
   http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
   ```
   - 支持切换列表与表格视图。
   - 点击 **复制** 一键复制，或点击 **导出** 导出为 CSV、JSON 或 TXT 文件。

> **核心提醒**  
> `GENERATED_USER` 是包含了国家、省市、会话等参数加密后的完整长字符串。请务必完整复制，切勿手动截断或修改其中的字符。

---

## 2. API 提取（自动化程序调用）

如果你的程序需要在代码中动态拉取代理列表或自动化生成端点：

1. 在 **<a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">提取（Endpoint Generator）</a>** 页面点击 **API generator** 页签。
2. 可选择 API 返回格式：**换行文本（Line Breaks CRLF）** 或 **JSON**。
3. 直接复制页面生成的 **API 地址（API URL）**。

> 💡 **OpenAPI 规范与代码集成**  
> 详细的 API 请求路径与参数规范，请直接查阅控制台 **<a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a>**，或参考 **<a href="../../best-practices/developer/build-proxy-list.md" target="_blank" rel="noopener noreferrer">程序化提取与代理池构建指南</a>**。

---

## 3. AI 提取（自然语言生成）

在 Cursor、VS Code、Claude Desktop 或 OpenClaw 中，可通过 JoyProxy 官方 AI 工具用自然语言直接生成代理端点：

- 在 **<a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">提取（Endpoint Generator）</a>** 页面点击 **AI generator** 了解详情。
- 详细指南请查阅 **<a href="../../best-practices/developer/ai.md" target="_blank" rel="noopener noreferrer">在 AI 中集成代理</a>**。
