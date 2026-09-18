# Use Rotating in apps and browsers

The gateway fields are the same in every client. Only the form labels change.

## Fill-in table

| Software label | Enter |
| --- | --- |
| Type | HTTP or SOCKS5 (both can open HTTPS websites). See <a href="protocols.md" target="_blank" rel="noopener noreferrer">Protocols</a>. |
| Host / Server | `gate.joyproxy.com` |
| Port | `9001` |
| Username | Generated username from Endpoints |
| Password | Users & Whitelist → Username/Password — see <a href="authentication.md" target="_blank" rel="noopener noreferrer">Authentication methods</a> |

```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
socks5://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

## Browser (this Chrome / Edge only)

1. Install the <a href="../software/browser-extension.md" target="_blank" rel="noopener noreferrer">JoyProxy Browser Extension</a>.
2. Paste the HTTP URI above, run **Test**, then **Apply**.
3. System proxy stays unchanged.

## Whole computer (Windows)

Use <a href="../../best-practices/windows-11-system-proxy.md" target="_blank" rel="noopener noreferrer">Windows 11 system proxy</a> with host `gate.joyproxy.com` and port `9001`. Turn it off when you finish—every app that respects Windows proxy will use the gateway.

## Desktop scrapers and RPA

See <a href="../../best-practices/third-party-static-proxies.md" target="_blank" rel="noopener noreferrer">Third-party software</a> for the rotating vs static field mapping. Rotating always uses the **shared gateway**, not a `*.edge.joyproxy.com` host.

## AI agents

Generate usernames from <a href="https://www.joyproxy.com/products/openclaw-skill.html" target="_blank" rel="noopener noreferrer">OpenClaw Skill</a> or <a href="https://www.joyproxy.com/products/ai-mcp.html" target="_blank" rel="noopener noreferrer">AI MCP</a>, then connect with the same user/password pair. The AI Access Token does **not** replace the gateway password. Details: <a href="../../integration/integrate-proxies-in-ai.md" target="_blank" rel="noopener noreferrer">Integrate proxies in AI</a>.

## Local forward proxy

If a tool only accepts `127.0.0.1`, run <a href="../software/proxy-server.md" target="_blank" rel="noopener noreferrer">Proxy Server</a> and point its upstream at this gateway.

## Batch test lines

<a href="../software/proxy-tester.md" target="_blank" rel="noopener noreferrer">Proxy Tester</a> can ping HTTP and SOCKS5 before you ship config to production.

## Back to chapter index

<a href="README.md" target="_blank" rel="noopener noreferrer">Rotating proxy</a>
