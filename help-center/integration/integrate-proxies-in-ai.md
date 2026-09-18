# Integrate proxies in AI

JoyProxy ships first-party AI surfaces so you can generate endpoints and check balances without writing boilerplate API code.

## Modules

| Module | Best for | Start |
| --- | --- | --- |
| **OpenClaw Skill** | OpenClaw chat workflows | [Product page](https://www.joyproxy.com/products/openclaw-skill.html) |
| **AI MCP** | Cursor, VS Code, Claude Desktop | [Product page](https://www.joyproxy.com/products/ai-mcp.html) |
| **AI Assistant** | Product and billing Q&A | [AI Assistant](https://www.joyproxy.com/products/ai-customer-service.html) |

Get your **AI Access Token** from [AI endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html?panel=ai).

## OpenClaw Skill setup

1. Read prompts and examples on the [OpenClaw Skill product page](https://www.joyproxy.com/products/openclaw-skill.html).
2. In OpenClaw, teach the skill endpoint `https://api.joyproxy.com/Skill` with your AI Access Token.
3. Ask for rotating endpoint generation or balance checks using the sample phrases on the product page.

## AI MCP setup

1. Copy the MCP JSON template from [AI MCP product page](https://www.joyproxy.com/products/ai-mcp.html).
2. Insert your AI Access Token.
3. Restart the MCP client in your IDE and invoke tools to generate lines or query account data.

## Production traffic

AI tools help you **produce** connection strings. Runtime HTTP traffic still uses:

- Rotating: `gate.joyproxy.com:9001` + generated username + Users & Whitelist password
- Static/Custom: dedicated host:port from [Endpoints](https://www.joyproxy.com/admin-ip-extraction-center.html)

See [Best practices → Integrate proxies in AI](../best-practices/integrate-proxies-in-ai.md) for scenarios and security habits.

## AI Assistant

Visit [AI Assistant](https://www.joyproxy.com/products/ai-customer-service.html) or use floating chat on marketing pages for 24/7 guidance. Escalate to humans via [Support](https://www.joyproxy.com/admin-support.html) when needed.
