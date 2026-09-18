# Use Rotating in apps and browsers

The gateway fields are the same in every client. Only the form labels change.

## Fill-in table

| Software label | Enter |
| --- | --- |
| Type | HTTP, HTTPS, or SOCKS5 |
| Host / Server | `gate.joyproxy.com` |
| Port | `9001` |
| Username | Generated username from Endpoints |
| Password | Whitelist & Users password |

```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
socks5://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

## Browser (this Chrome / Edge only)

1. Install the [JoyProxy Browser Extension](../software/browser-extension.md).
2. Paste the HTTP URI above, run **Test**, then **Apply**.
3. System proxy stays unchanged.

## Whole computer (Windows)

Use [Windows 11 system proxy](../../best-practices/windows-11-system-proxy.md) with host `gate.joyproxy.com` and port `9001`. Turn it off when you finish—every app that respects Windows proxy will use the gateway.

## Desktop scrapers and RPA

See [Third-party software](../../best-practices/third-party-static-proxies.md) for the rotating vs static field mapping. Rotating always uses the **shared gateway**, not a `*.edge.joyproxy.com` host.

## AI agents

Generate usernames from [OpenClaw Skill](https://www.joyproxy.com/products/openclaw-skill.html) or [AI MCP](https://www.joyproxy.com/products/ai-mcp.html), then connect with the same user/password pair. The AI Access Token does **not** replace the gateway password. Details: [Integrate proxies in AI](../../integration/integrate-proxies-in-ai.md).

## Local forward proxy

If a tool only accepts `127.0.0.1`, run [Proxy Server](../software/proxy-server.md) and point its upstream at this gateway.

## Batch test lines

[Proxy Tester](../software/proxy-tester.md) can ping HTTP and SOCKS5 before you ship config to production.

## Back to chapter index

[Rotating proxy](README.md)
