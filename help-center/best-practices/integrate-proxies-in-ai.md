# Integrate proxies in AI

AI assistants and IDE agents can **generate JoyProxy endpoints**, check balance, and draft integration code—but they still need the same credentials and tokens you use in production. This guide maps common AI workflows to JoyProxy products.

## Choose the right JoyProxy surface

| Goal | Use |
| --- | --- |
| Natural language in OpenClaw | [OpenClaw Skill](https://www.joyproxy.com/products/openclaw-skill.html) + AI Access Token |
| Cursor, VS Code, Claude Desktop tools | [AI MCP](https://www.joyproxy.com/products/ai-mcp.html) |
| Billing / setup questions 24/7 | [AI Assistant](https://www.joyproxy.com/products/ai-customer-service.html) |
| Production HTTP calls | Generated endpoints + [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html) |

## Tokens you should know

| Token | Purpose |
| --- | --- |
| **AI Access Token** | OpenClaw Skill and AI MCP tool calls |
| Extract **API URL** | `/v2/extract` and related endpoint APIs — copy the URL on Endpoints |
| **Master User Token** | Order management APIs only |
| **Scraping API Token** | `/v1/fetch` only |

Copy the AI Access Token from [AI endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html?panel=ai). Rotate it there if it appears in chat logs.

> **Important**
>
> AI Access Tokens drive **management tools**, not the rotating gateway socket itself. For rotating traffic, connect with the **generated username** and your **Users & Whitelist password**—the same as in [Rotating proxy](../getting-started/rotating/README.md).

## Scenario: spin up rotating residential from an IDE

1. Purchase Residential rotating traffic if you have not already.
2. Create username/password in [Users & Whitelist](https://www.joyproxy.com/admin-authorization.html).
3. Install **AI MCP** using the JSON template on the [product page](https://www.joyproxy.com/products/ai-mcp.html); paste your AI Access Token.
4. Ask the agent to generate endpoints for a country (e.g. “US sticky 10 minutes”).
5. Paste the returned `gate.joyproxy.com:9001` string into your script or [Proxy Tester](../getting-started/software/proxy-tester.md).

## Scenario: OpenClaw operations team

1. Follow the [OpenClaw Skill](https://www.joyproxy.com/products/openclaw-skill.html) setup: teach the skill URL `https://api.joyproxy.com/Skill` with your AI Access Token.
2. Use prompts on the product page to **generate lines** or **check remaining traffic**.
3. Escalate to human support via [Live chat](../support/live-chat.md) for billing edge cases.

## Scenario: LLM pipeline that only needs HTML

If the model consumes page text and you do not need raw proxies, evaluate [Web Scraping API](../getting-started/scraping-api/README.md)—credits apply only on success and you skip gateway wiring entirely.

## Security habits

- Never paste production passwords into public model threads; use environment variables in code the agent writes.
- Prefer short-lived test credentials for demos.
- Use separate API tokens for CI vs laptops.

More detail: [Integration → Integrate proxies in AI](../integration/integrate-proxies-in-ai.md) · [OpenAPI Center](../integration/openapi-center.md).
