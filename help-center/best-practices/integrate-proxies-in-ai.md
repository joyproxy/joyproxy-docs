# 在 AI 中集成代理

AI 助手和 IDE Agent 可以帮你**生成 JoyProxy 端点**、查余额、写集成代码，但凭据与 Token 规则与生产环境相同。下文把常见 AI 用法对应到 JoyProxy 产品。

## 选哪个入口

| 目标 | 使用 |
| --- | --- |
| OpenClaw 自然语言 | <a href="https://www.joyproxy.com/products/openclaw-skill.html" target="_blank" rel="noopener noreferrer">OpenClaw Skill</a> + AI Access Token |
| Cursor、VS Code、Claude Desktop 工具 | <a href="https://www.joyproxy.com/products/ai-mcp.html" target="_blank" rel="noopener noreferrer">AI MCP</a> |
| 24/7 账单/配置问答 | <a href="https://www.joyproxy.com/products/ai-customer-service.html" target="_blank" rel="noopener noreferrer">AI Assistant</a> |
| 生产 HTTP 调用 | 生成的端点 + <a href="../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> |

## Token 对照

| Token | 用途 |
| --- | --- |
| **AI Access Token** | OpenClaw Skill、AI MCP 工具调用 |
| 提取 **API URL** | 端点生成 — 从 Endpoints 复制 |
| **Master User Token** | 订单与余额 API |
| **Scraping API Token** | 网页抓取 API |

完整映射：<a href="../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>。

在 <a href="https://www.joyproxy.com/admin-ip-extraction-center.html?panel=ai" target="_blank" rel="noopener noreferrer">AI 端点生成器</a> 复制 AI Access Token。若出现在聊天记录里，在该页轮换。

> **重要**
>
> AI Access Token 用于**管理类工具**，不是直接连轮换网关。轮换流量仍用**生成的用户名** + **Users & Whitelist 密码**，与<a href="../getting-started/rotating/README.md" target="_blank" rel="noopener noreferrer">轮换代理</a>一致。

## 场景：IDE 里启动住宅轮换

1. 尚未购买时，先买住宅轮换流量。
2. 在 <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a> 创建用户名/密码。
3. 按 <a href="https://www.joyproxy.com/products/ai-mcp.html" target="_blank" rel="noopener noreferrer">AI MCP 产品页</a> JSON 模板安装 **AI MCP**，填入 AI Access Token。
4. 让 Agent 生成指定国家的端点（例如「美国粘性 10 分钟」）。
5. 把返回的 `gate.joyproxy.com:9001` 字符串贴进脚本或<a href="../getting-started/software/proxy-tester.md" target="_blank" rel="noopener noreferrer">代理测试器</a>。

## 场景：OpenClaw 运营

1. 按 <a href="https://www.joyproxy.com/products/openclaw-skill.html" target="_blank" rel="noopener noreferrer">OpenClaw Skill</a> 配置：Skill URL `https://api.joyproxy.com/Skill`，配好 AI Access Token。
2. 用产品页示例语句**生成线路**或**查剩余流量**。
3. 账单边缘情况转<a href="../support/live-chat.md" target="_blank" rel="noopener noreferrer">在线客服</a>人工处理。

## 场景：LLM 只要 HTML

模型只吃页面文本、不需要自建代理时，可评估<a href="../getting-started/scraping-api/README.md" target="_blank" rel="noopener noreferrer">网页抓取 API</a>——成功才扣积分，也不用配网关。

## 安全习惯

- 不要把生产密码贴进公开模型对话；Agent 写的代码里用环境变量。
- 演示优先用短期测试凭据。
- CI 与本地笔记本用不同 API Token。

更多说明：<a href="../integration/integrate-proxies-in-ai.md" target="_blank" rel="noopener noreferrer">集成 → 在 AI 中集成代理</a> · <a href="../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>。
