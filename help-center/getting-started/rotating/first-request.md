# Make your first request

This page assumes you already have:

1. An active Rotating pack — <a href="purchase.md" target="_blank" rel="noopener noreferrer">Purchase</a>
2. Authentication set up — <a href="authentication.md" target="_blank" rel="noopener noreferrer">Authentication methods</a>
3. A generated username — <a href="generate-endpoints.md" target="_blank" rel="noopener noreferrer">Generate endpoints</a>

Run a test **before** you point production scrapers at the gateway. When the response is a public IP that is not your own, the proxy is working.

## cURL (fastest check)

This uses the **HTTP** proxy protocol to open an **HTTPS** website:

```bash
curl -x http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

SOCKS5:

```bash
curl -x socks5h://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

A single IPv4/IPv6 in the output means the gateway authenticated you and an exit IP was assigned.

## What to fill in other tools

| Label in the tool | JoyProxy value |
| --- | --- |
| Proxy type | HTTP or SOCKS5 (both can open HTTPS websites) |
| Server / Host | `gate.joyproxy.com` |
| Port | `9001` |
| Username | Full generated username |
| Password | Users & Whitelist → Username/Password |

URI form:

```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
socks5://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

The Endpoints page can paste a ready-made snippet in cURL, Python, Node.js, PHP, or Go. That snippet already includes the username from your last generate.

## If the request fails

Work through this list in order:

1. **407 / Proxy Authentication Required** — Password must be the Username/Password secret. Username must be the **generated** string, not your dashboard email and not the short User/Pass name. Edit the password and retry. See <a href="authentication.md" target="_blank" rel="noopener noreferrer">Authentication methods</a>. Full table: <a href="response-codes.md" target="_blank" rel="noopener noreferrer">Response codes</a>.
2. **Timeout** — Confirm `gate.joyproxy.com` and port `9001`. Try the HTTP proxy type first. See <a href="protocols.md" target="_blank" rel="noopener noreferrer">Protocols</a>.
3. **Wrong country** — Generate a new username with the country selected in Endpoints. Do not edit the old username.
4. **Order inactive** — Check remaining GB in <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies</a> or the Usage tab.

Still stuck? <a href="../../support/live-chat.md" target="_blank" rel="noopener noreferrer">Live chat</a> with the **redacted** curl (never send the live password).

## Next

Copy a snippet for your language: <a href="code-examples.md" target="_blank" rel="noopener noreferrer">Code examples</a>. Protocol choice: <a href="protocols.md" target="_blank" rel="noopener noreferrer">Protocols</a>. For Chrome-only tests, use the <a href="../software/browser-extension.md" target="_blank" rel="noopener noreferrer">Browser extension</a>.
