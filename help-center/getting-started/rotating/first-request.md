# Make your first request

This page assumes you already have:

1. An active Rotating pack — [Purchase](purchase.md)
2. A password in Whitelist & Users — [Credentials](credentials.md)
3. A generated username — [Generate endpoints](generate-endpoints.md)

## cURL (fastest check)

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
| Proxy type | HTTP, HTTPS, or SOCKS5 |
| Server / Host | `gate.joyproxy.com` |
| Port | `9001` |
| Username | Full generated username |
| Password | Whitelist & Users password |

URI form:

```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
socks5://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

## If the request fails

Work through this list in order:

1. **401 / auth failed** — Password must be the Whitelist & Users secret. Username must be the **generated** string, not your dashboard email and not the short credential name.
2. **Timeout** — Confirm `gate.joyproxy.com` and port `9001`. Corporate firewalls sometimes allow HTTPS but block SOCKS; try HTTP first.
3. **Wrong country** — Generate a new username with the country selected in Endpoints. Do not edit the old username.
4. **Order inactive** — Check remaining GB in [My Proxies](https://www.joyproxy.com/admin-my-orders.html) or the Usage tab.

Still stuck? [Live chat](../../support/live-chat.md) with the **redacted** curl (never send the live password).

## Next

Copy a snippet for your language: [Code examples](code-examples.md). For Chrome-only tests, use the [Browser extension](../software/browser-extension.md).
