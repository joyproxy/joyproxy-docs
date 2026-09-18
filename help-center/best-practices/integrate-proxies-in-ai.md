# Integrate proxies in AI

AI assistants and IDE agents can **generate JoyProxy endpoints**, check balance, and draft integration code—but they still need the same credentials and tokens you use in production. This guide maps common AI workflows to JoyProxy products.

## Choose the right JoyProxy surface

| Goal | Use |
| --- | --- |
| Natural language in OpenClaw | <a href="https://www.joyproxy.com/products/openclaw-skill.html" target="_blank" rel="noopener noreferrer">OpenClaw Skill</a> + AI Access Token |
| Cursor, VS Code, Claude Desktop tools | <a href="https://www.joyproxy.com/products/ai-mcp.html" target="_blank" rel="noopener noreferrer">AI MCP</a> |
| Billing / setup questions 24/7 | <a href="https://www.joyproxy.com/products/ai-customer-service.html" target="_blank" rel="noopener noreferrer">AI Assistant</a> |
| Production HTTP calls | Generated endpoints + <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> |

## Tokens you should know

| Token | Purpose |
| --- | --- |
| **AI Access Token** | OpenClaw Skill and AI MCP tool calls |
| Extract **API URL** | `/v2/extract` and related endpoint APIs — copy the URL on Endpoints |
| **Master User Token** | Order management APIs only |
| **Scraping API Token** | `/v1/fetch` only |

Copy the AI Access Token from <a href="https://www.joyproxy.com/admin-ip-extraction-center.html?panel=ai" target="_blank" rel="noopener noreferrer">AI endpoint generator</a>. Rotate it there if it appears in chat logs.

> **Important**
>
> AI Access Tokens drive **management tools**, not the rotating gateway socket itself. For rotating traffic, connect with the **generated username** and your **Users & Whitelist password**—the same as in <a href="../getting-started/rotating/README.md" target="_blank" rel="noopener noreferrer">Rotating proxy</a>.

## Scenario: spin up rotating residential from an IDE

1. Purchase Residential rotating traffic if you have not already.
2. Create username/password in <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a>.
3. Install **AI MCP** using the JSON template on the <a href="https://www.joyproxy.com/products/ai-mcp.html" target="_blank" rel="noopener noreferrer">product page</a>; paste your AI Access Token.
4. Ask the agent to generate endpoints for a country (e.g. “US sticky 10 minutes”).
5. Paste the returned `gate.joyproxy.com:9001` string into your script or <a href="../getting-started/software/proxy-tester.md" target="_blank" rel="noopener noreferrer">Proxy Tester</a>.

## Scenario: OpenClaw operations team

1. Follow the <a href="https://www.joyproxy.com/products/openclaw-skill.html" target="_blank" rel="noopener noreferrer">OpenClaw Skill</a> setup: teach the skill URL `https://api.joyproxy.com/Skill` with your AI Access Token.
2. Use prompts on the product page to **generate lines** or **check remaining traffic**.
3. Escalate to human support via <a href="../support/live-chat.md" target="_blank" rel="noopener noreferrer">Live chat</a> for billing edge cases.

## Scenario: LLM pipeline that only needs HTML

If the model consumes page text and you do not need raw proxies, evaluate <a href="../getting-started/scraping-api/README.md" target="_blank" rel="noopener noreferrer">Web Scraping API</a>—credits apply only on success and you skip gateway wiring entirely.

## Security habits

- Never paste production passwords into public model threads; use environment variables in code the agent writes.
- Prefer short-lived test credentials for demos.
- Use separate API tokens for CI vs laptops.

More detail: <a href="../integration/integrate-proxies-in-ai.md" target="_blank" rel="noopener noreferrer">Integration → Integrate proxies in AI</a> · <a href="../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>.
