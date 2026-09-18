# 在 AI 中集成代理

AI 助手与 IDE Agent 可以**生成 JoyProxy 端点**、查询余额并起草集成代码——但仍需与生产环境相同的凭据与 Token。本指南将常见 AI 工作流映射到 JoyProxy 产品。

## 选择合适的 JoyProxy 入口

| 目标 | 使用 |
| --- | --- |
| OpenClaw 自然语言 | <a href="https://www.joyproxy.com/products/openclaw-skill.html" target="_blank" rel="noopener noreferrer">OpenClaw Skill</a> + AI Access Token |
| Cursor、VS Code、Claude Desktop 工具 | <a href="https://www.joyproxy.com/products/ai-mcp.html" target="_blank" rel="noopener noreferrer">AI MCP</a> |
| 24/7 账单/配置问题 | <a href="https://www.joyproxy.com/products/ai-customer-service.html" target="_blank" rel="noopener noreferrer">AI Assistant</a> |
| 生产 HTTP 调用 | 生成的端点 + <a href="../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> |

## 应了解的 Token

| Token | 用途 |
| --- | --- |
| **AI Access Token** | OpenClaw Skill 与 AI MCP 工具调用 |
| 提取 **API URL** | 端点生成器 — 从 Endpoints 复制 |
| **Master User Token** | 订单与余额 API |
| **Scraping API Token** | 网页抓取 API |

完整映射：<a href="../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>。

在 <a href="https://www.joyproxy.com/admin-ip-extraction-center.html?panel=ai" target="_blank" rel="noopener noreferrer">AI 端点生成器</a> 复制 AI Access Token。若出现在聊天记录中请在该处轮换。

> **重要**
>
> AI Access Token 驱动**管理工具**，而非轮换网关套接字本身。轮换流量请用**生成的用户名**与 **Users & Whitelist 密码**连接——与<a href="../getting-started/rotating/README.md" target="_blank" rel="noopener noreferrer">轮换代理</a>相同。

## 场景：在 IDE 中启动住宅轮换

1. 若尚未购买，请购买住宅轮换流量。
2. 在 <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a> 创建用户名/密码。
3. 使用 <a href="https://www.joyproxy.com/products/ai-mcp.html" target="_blank" rel="noopener noreferrer">产品页</a> JSON 模板安装 **AI MCP**；粘贴 AI Access Token。
4. 让 Agent 为某国家生成端点（例如「美国粘性 10 分钟」）。
5. 将返回的 `gate.joyproxy.com:9001` 字符串粘贴到脚本或<a href="../getting-started/software/proxy-tester.md" target="_blank" rel="noopener noreferrer">代理测试器</a>。

## 场景：OpenClaw 运营团队

1. 按 <a href="https://www.joyproxy.com/products/openclaw-skill.html" target="_blank" rel="noopener noreferrer">OpenClaw Skill</a> 配置：用 AI Access Token 配置 Skill URL `https://api.joyproxy.com/Skill`。
2. 使用产品页提示**生成线路**或**查询剩余流量**。
3. 账单边缘情况通过<a href="../support/live-chat.md" target="_blank" rel="noopener noreferrer">在线客服</a>升级人工。

## 场景：仅需 HTML 的 LLM 流水线

若模型消费页面文本且不需要原始代理，可评估<a href="../getting-started/scraping-api/README.md" target="_blank" rel="noopener noreferrer">网页抓取 API</a>——积分仅在成功时扣费，且无需配置网关。

## 安全习惯

- 勿将生产密码粘贴到公开模型对话；在 Agent 编写的代码中使用环境变量。
- 演示优先使用短期测试凭据。
- CI 与笔记本使用不同 API Token。

更多细节：<a href="../integration/integrate-proxies-in-ai.md" target="_blank" rel="noopener noreferrer">集成 → 在 AI 中集成代理</a> · <a href="../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>。
