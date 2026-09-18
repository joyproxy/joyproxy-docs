# 在 AI 中集成代理

JoyProxy 提供一等方 AI 入口，无需编写样板 API 代码即可生成端点并查询余额。

## 模块

| 模块 | 最适合 | 开始 |
| --- | --- | --- |
| **OpenClaw Skill** | OpenClaw 聊天工作流 | <a href="https://www.joyproxy.com/products/openclaw-skill.html" target="_blank" rel="noopener noreferrer">产品页</a> |
| **AI MCP** | Cursor、VS Code、Claude Desktop | <a href="https://www.joyproxy.com/products/ai-mcp.html" target="_blank" rel="noopener noreferrer">产品页</a> |
| **AI Assistant** | 产品与账单问答 | <a href="https://www.joyproxy.com/products/ai-customer-service.html" target="_blank" rel="noopener noreferrer">AI Assistant</a> |

在 <a href="https://www.joyproxy.com/admin-ip-extraction-center.html?panel=ai" target="_blank" rel="noopener noreferrer">AI 端点生成器</a> 获取 **AI Access Token**。

## OpenClaw Skill 配置

1. 阅读 <a href="https://www.joyproxy.com/products/openclaw-skill.html" target="_blank" rel="noopener noreferrer">OpenClaw Skill 产品页</a> 上的提示与示例。
2. 在 OpenClaw 中配置 Skill 端点 `https://api.joyproxy.com/Skill` 并填入 AI Access Token。
3. 使用产品页示例语句请求生成轮换端点或查询余额。

## AI MCP 配置

1. 从 <a href="https://www.joyproxy.com/products/ai-mcp.html" target="_blank" rel="noopener noreferrer">AI MCP 产品页</a> 复制 MCP JSON 模板。
2. 填入 AI Access Token。
3. 在 IDE 中重启 MCP 客户端，调用工具生成线路或查询账户数据。

## 生产流量

AI 工具帮助您**生成**连接字符串。运行时 HTTP 流量仍使用：

- 轮换：`gate.joyproxy.com:9001` + 生成的用户名 + Users & Whitelist 密码
- 静态/定制：<a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a> 返回的专用 host:port

场景与安全习惯见<a href="../best-practices/integrate-proxies-in-ai.md" target="_blank" rel="noopener noreferrer">最佳实践 → 在 AI 中集成代理</a>。

## AI Assistant

访问 <a href="https://www.joyproxy.com/products/ai-customer-service.html" target="_blank" rel="noopener noreferrer">AI Assistant</a> 或在营销页使用悬浮聊天获取 24/7 指导。需要时通过<a href="https://www.joyproxy.com/admin-support.html" target="_blank" rel="noopener noreferrer">支持</a>升级人工。
