---
title: "Automating Endpoint Generation with OpenClaw Skill and AI MCP"
description: "JoyProxy’s AI integrations are read-only by design: generate endpoints, check balance, query usage—without handing an agent full account control."
category: guides
legacyUrl: https://www.joyproxy.com/blog/openclaw-mcp-proxy-automation.html
---

# Automating Endpoint Generation with OpenClaw Skill and AI MCP

Developers increasingly run coding agents that need live infrastructure—spin up a US residential endpoint, verify quota, paste credentials into an integration test. JoyProxy exposes two AI-facing surfaces: **OpenClaw Skill** (natural language) and **AI MCP** (structured tools for IDEs).

## What both integrations share

  * Authentication via an **AI Access Token** from the dashboard AI endpoint generator.
  * **Read-only operations** — generate proxy endpoints, read balances/usage; no arbitrary account mutations.
  * Same upstream API as manual generation—agents automate what you could click, not a hidden tier.



## OpenClaw Skill

Skill endpoint: `https://api.joyproxy.com/Skill`. After connecting your token, you can prompt for region-based short-term generation or ask usage questions in plain English. Best for operators who already use OpenClaw for task automation.

Product page: [OpenClaw Skill](https://www.joyproxy.com/products/openclaw-skill.html).

## AI MCP

MCP endpoint: `https://api.joyproxy.com/Mcp`. Paste the JSON config into Cursor, VS Code, or Claude Desktop so tools appear in the agent sidebar. Best when you want deterministic tool calls in a repo workflow.

Product page: [AI MCP](https://www.joyproxy.com/products/ai-mcp.html).

## Safety practices

  * Issue a dedicated AI token; revoke it when the experiment ends.
  * Do not commit tokens to git—use local env or secret stores.
  * Validate agent-generated proxy hosts before pointing production scrapers at them.



AI Assistant ([24/7 chat](https://www.joyproxy.com/products/ai-customer-service.html)) remains free for onboarding questions if you prefer human escalation.
