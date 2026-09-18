# Response codes

A status through a proxy can come from **JoyProxy** (the hop) or from the **website**. Fix credentials and host:port before you change product.

These notes match the live [FAQ](https://www.joyproxy.com/faq.html) (Whitelist & Users and API · Troubleshooting). Extract-API JSON errors are a different layer — see the second table.

## Read the hop (cURL verbose)

```bash
curl -v -x "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001" "https://api.ipify.org"
```

A **407** in that output is the proxy asking for auth. A public IP in the body means the hop worked.

Static / Custom: use that line’s `host:port` instead of `gate.joyproxy.com:9001`.

## Proxy connection

| Code | Usually from | What to check |
| --- | --- | --- |
| **407** Proxy Authentication Required | Proxy | Rotating: full **generated** username + Username/Password from [Users & Whitelist](https://www.joyproxy.com/admin-authorization.html). Not your email, not the short User/Pass name. Static / Custom: user/pass or whitelist the **public** IPv4 of this machine. |
| **401** | Target | The website wants *its* login. Proxy auth already succeeded. |
| **403** | Target (or WAF) | The tunnel often succeeded. Confirm egress IP first (`api.ipify.org`). See [Restricted targets](restricted-targets.md) if the destination is in mainland China. |
| **429** | Either | Slow down. If even a tiny IP-check URL 429s, the account or hop is counting; if only the catalog URL 429s, it is the site. |
| **502** / **503** / **504** | Proxy or upstream | Retry; confirm the order is active and the protocol matches. 504 is a timeout — try HTTP before SOCKS5 if a firewall is involved. |
| Connection refused / timeout | Client ↔ proxy | Rotating: `gate.joyproxy.com:9001`. Static / Custom: latest host:port from Endpoints, order still inside its period. Remaining GB on [Usage and orders](usage-and-orders.md). |
| SOCKS5 failure | SOCKS layer | SOCKS5 uses **reply codes**, not HTTP status. Confirm `socks5h://` on the same host:port. Test with [Proxy Tester](../software/proxy-tester.md). |

Prove the hop with a tiny IP URL before you debug the real page.

## Extract API (JSON `error`)

Calls to `/v2/extract` (and Static / Custom extract) return a JSON `error` field. Copy the **API URL** from Endpoints, or try the operation in [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html).

| `error` | Meaning |
| --- | --- |
| `missing_token`, `invalid_token`, `api_token_required` | Wrong or missing extract token. Use the token already in the copied API URL — not the Master User Token. |
| HTTP **429** | Too many extract calls. Slow down. One call returns at most **200** lines. |
| `no_short_orders`, `short_traffic_exhausted` | No active Rotating pack, or that network’s traffic is used up. Buy or [auto-buy](auto-buy-traffic.md). |
| `invalid_country`, `no_ip_for_geo` | Region filter does not match stock right now. Pick another country / city in Endpoints. |
| `Invalid protocol` | Extract `protocol` must be `http`, `https`, or `socks5`. |

Failed [Web Scraping API](../scraping-api/README.md) calls usually do not spend credits. Send the full error body in [live chat](../../support/live-chat.md) if the field is unclear.

## Next

[Authentication methods](authentication.md) · [Protocols](protocols.md) · [Live chat](../../support/live-chat.md)
