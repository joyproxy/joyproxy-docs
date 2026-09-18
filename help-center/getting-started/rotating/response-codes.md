# Response codes

A status through a proxy can come from **JoyProxy** (the hop) or from the **website**. Fix credentials and host:port before you change product.

These notes match the live <a href="https://www.joyproxy.com/faq.html" target="_blank" rel="noopener noreferrer">FAQ</a> (Whitelist & Users and API · Troubleshooting). HTTP extract errors are documented in <a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>.

## Read the hop (cURL verbose)

```bash
curl -v -x "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001" "https://api.ipify.org"
```

A **407** in that output is the proxy asking for auth. A public IP in the body means the hop worked.

Static / Custom: use that line’s `host:port` instead of `gate.joyproxy.com:9001`.

## Proxy connection

| Code | Usually from | What to check |
| --- | --- | --- |
| **407** Proxy Authentication Required | Proxy | Rotating: full **generated** username + Username/Password from <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a>. Not your email, not the short User/Pass name. Static / Custom: user/pass or whitelist the **public** IPv4 of this machine. |
| **401** | Target | The website wants *its* login. Proxy auth already succeeded. |
| **403** | Target (or WAF) | The tunnel often succeeded. Confirm egress IP first (`api.ipify.org`). See <a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">Restricted targets</a> for policy blocks and sensitive destinations. |
| **429** | Either | Slow down. If even a tiny IP-check URL 429s, the account or hop is counting; if only the catalog URL 429s, it is the site. |
| **502** / **503** / **504** | Proxy or upstream | Retry; confirm the order is active and the protocol matches. 504 is a timeout — try HTTP before SOCKS5 if a firewall is involved. |
| Connection refused / timeout | Client ↔ proxy | Rotating: `gate.joyproxy.com:9001`. Static / Custom: latest host:port from Endpoints, order still inside its period. Remaining GB on <a href="usage-and-orders.md" target="_blank" rel="noopener noreferrer">Usage and orders</a>. |
| SOCKS5 failure | SOCKS layer | SOCKS5 uses **reply codes**, not HTTP status. Confirm `socks5h://` on the same host:port. Test with <a href="../software/proxy-tester.md" target="_blank" rel="noopener noreferrer">Proxy Tester</a>. |

Prove the hop with a tiny IP URL before you debug the real page.

Failed <a href="../scraping-api/README.md" target="_blank" rel="noopener noreferrer">Web Scraping API</a> calls usually do not spend credits. Send the full error body in <a href="../../support/live-chat.md" target="_blank" rel="noopener noreferrer">live chat</a> if the field is unclear.

## Next

<a href="authentication.md" target="_blank" rel="noopener noreferrer">Authentication methods</a> · <a href="protocols.md" target="_blank" rel="noopener noreferrer">Protocols</a> · <a href="../../support/live-chat.md" target="_blank" rel="noopener noreferrer">Live chat</a>
