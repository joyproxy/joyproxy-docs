# Errors and connection troubleshooting

When extract, API, or page fetch fails, work this list in order.

---

## HTTP status codes

### 407 Proxy Authentication Required

The gateway rejected the handshake. Check in this order:

1. **Password**: it must be the proxy password from **Users & Whitelist** for that network — not the JoyProxy site login password.
2. **Truncated username**: for Rotating Proxies, paste the full string from **Web generator** or **API generator**. Dropping one character, or editing country/session tags, causes 407.
3. **IP Whitelist**: if you intended passwordless access, confirm this public IP is on **IP Whitelist** for that network. Rotating Proxies still require Username/Password.
4. **Quota**: Rotating traffic exhausted, or Static / Custom expired without renewal.

### 401 Unauthorized / Invalid token

Typical on REST (`/v2/extract` or `/v1/fetch`):

1. **Wrong token**: extract uses the **API token**; fetch uses **Scraping API Token**. Do not send **Master User Token** on those public collection APIs.
2. **Header shape**: `Authorization: Bearer <Your_Token>` (one space after Bearer).
3. **Already rotated**: **Rotate token** invalidates the old value immediately. Update to the new one.

### 429 Too Many Requests

- **Extract / login rate limit**: a tight loop against extract or login. Back off (1–2 seconds or more between retries).
- **Scraping concurrency**: in-flight Web Scraping API jobs exceed the pack cap (Micro is 5). Lower client concurrency or buy a higher pack.

### 502 / 504 Bad Gateway / Gateway Timeout

- **Target unreachable**: the proxy handshake succeeded, but the origin blocked, refused, or is down.
- **Mainland China targets**: JoyProxy exits cannot open connections to mainland China domains.
- **One Static node**: if Static Proxies return 502, on **My Proxies** click **Change IP** for a healthy exit in the same region (no extra charge).

### 403 Forbidden and Connection Refused

- **403 Forbidden**: usually the **target** refusing the request, not a dead proxy;
- **Connection Refused**: check host/port spelling, HTTP vs SOCKS5, and whether the order is still active.

---

## Connectivity and geo mismatches

### After I generate and configure, the browser or script has no internet

1. **Where you are**: test from outside mainland China (overseas VPS or office). Direct connects from mainland China to the gateway are blocked.
2. **Port and protocol**: do not enable SOCKS5 on an HTTP proxy. For Static Proxies, the host:port must be the Entry Point (`us-ca.edge.joyproxy.com:10001` style). **Never use Dedicated Exit IP**.
3. **Raw handshake**:
   ```bash
   curl -x http://USERNAME:PASSWORD@gate.joyproxy.com:9001 https://ipinfo.io
   ```
   JSON with a public IP means the tunnel is fine. The remaining bug is the app (Browser Extension or crawler flags).

### Exit geo does not match the country/city I bought or generated?

You asked for Los Angeles, US; some IP databases show another city:

- **Database lag**: MaxMind GeoIP2, IP2Location, DB-IP, and others update days to weeks apart.
- **JoyProxy routing**: we classify with current commercial libraries (MaxMind / IPinfo). Free lookup sites can be stale. Compare several reputable checkers.

---

## Human support

If this list does not fix it:

1. **Live Chat** (bottom-right):
   - Pre-sales, a live connectivity question, missing activation mail.
   - Give registration email, network type (for example Rotating Residential), and a screenshot.
2. **Tickets**:
   - Billing, refunds, hard technical cases, enterprise contracts.
   - Attach:
     - Order ID;
     - Full error screenshot or terminal output (including curl status);
     - Target URL;
     - Client proxy summary (redact the password).
