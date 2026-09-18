# Integrate proxies in AI

JoyProxy ships first-party AI surfaces so you can generate endpoints and check balances without writing boilerplate API code.

## Modules

| Module | Best for | Start |
| --- | --- | --- |
| **OpenClaw Skill** | OpenClaw chat workflows | <a href="https://www.joyproxy.com/products/openclaw-skill.html" target="_blank" rel="noopener noreferrer">Product page</a> |
| **AI MCP** | Cursor, VS Code, Claude Desktop | <a href="https://www.joyproxy.com/products/ai-mcp.html" target="_blank" rel="noopener noreferrer">Product page</a> |
| **AI Assistant** | Product and billing Q&A | <a href="https://www.joyproxy.com/products/ai-customer-service.html" target="_blank" rel="noopener noreferrer">AI Assistant</a> |

Get your **AI Access Token** from <a href="https://www.joyproxy.com/admin-ip-extraction-center.html?panel=ai" target="_blank" rel="noopener noreferrer">AI endpoint generator</a>.

## OpenClaw Skill setup

1. Read prompts and examples on the <a href="https://www.joyproxy.com/products/openclaw-skill.html" target="_blank" rel="noopener noreferrer">OpenClaw Skill product page</a>.
2. In OpenClaw, teach the skill endpoint `https://api.joyproxy.com/Skill` with your AI Access Token.
3. Ask for rotating endpoint generation or balance checks using the sample phrases on the product page.

## AI MCP setup

1. Copy the MCP JSON template from <a href="https://www.joyproxy.com/products/ai-mcp.html" target="_blank" rel="noopener noreferrer">AI MCP product page</a>.
2. Insert your AI Access Token.
3. Restart the MCP client in your IDE and invoke tools to generate lines or query account data.

## Production traffic

AI tools help you **produce** connection strings. Runtime HTTP traffic still uses:

- Rotating: `gate.joyproxy.com:9001` + generated username + Users & Whitelist password
- Static/Custom: dedicated host:port from <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a>

See <a href="../best-practices/integrate-proxies-in-ai.md" target="_blank" rel="noopener noreferrer">Best practices → Integrate proxies in AI</a> for scenarios and security habits.

## AI Assistant

Visit <a href="https://www.joyproxy.com/products/ai-customer-service.html" target="_blank" rel="noopener noreferrer">AI Assistant</a> or use floating chat on marketing pages for 24/7 guidance. Escalate to humans via <a href="https://www.joyproxy.com/admin-support.html" target="_blank" rel="noopener noreferrer">Support</a> when needed.
