# Make your first request

This page assumes you already have:

1. An active Rotating pack — [Purchase](purchase.md)
2. Authentication set up — [Authentication methods](authentication.md)
3. A generated username — [Generate endpoints](generate-endpoints.md)

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

1. **407 / Proxy Authentication Required** — Password must be the Username/Password secret. Username must be the **generated** string, not your dashboard email and not the short User/Pass name. Edit the password and retry. See [Authentication methods](authentication.md). Full table: [Response codes](response-codes.md).
2. **Timeout** — Confirm `gate.joyproxy.com` and port `9001`. Try the HTTP proxy type first. See [Protocols](protocols.md).
3. **Wrong country** — Generate a new username with the country selected in Endpoints. Do not edit the old username.
4. **Order inactive** — Check remaining GB in [My Proxies](https://www.joyproxy.com/admin-my-orders.html) or the Usage tab.

Still stuck? [Live chat](../../support/live-chat.md) with the **redacted** curl (never send the live password).

## Next

Copy a snippet for your language: [Code examples](code-examples.md). Protocol choice: [Protocols](protocols.md). For Chrome-only tests, use the [Browser extension](../software/browser-extension.md).
