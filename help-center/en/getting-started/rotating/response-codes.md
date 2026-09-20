# Response codes and common errors

If you see an unexpected status while connecting to `gate.joyproxy.com:9001`, use this guide:

---

## 1. 407 proxy authentication required

- **Cause**: the gateway could not validate your proxy credentials.
- **Quick checks**:
  1. **Password**: use the proxy Password from **<a href="authentication.md" target="_blank" rel="noopener noreferrer">Users & Whitelist</a>**, not your JoyProxy website Log In password.
  2. **Username**: use the **full long string** from **<a href="extract-ip.md" target="_blank" rel="noopener noreferrer">Endpoint generator</a>** (for example `user-zone-res-region-us-...`). Do not truncate or mistype it.
  3. **Auth method**: the Rotating Proxies gateway (`gate.joyproxy.com:9001`) currently supports Username/Password only, not passwordless IP Whitelist. Configure the long username and proxy Password in your client.

---

## 2. 403 Forbidden

- **Cause**: the target site blocked the request (anti-bot), or the destination is in a restricted category.
- **Quick checks**:
  1. Run `curl -x http://...@gate.joyproxy.com:9001 https://api.ipify.org`. If you get an exit IP, the JoyProxy gateway itself is working.
  2. If only a specific business target returns 403, the block is at the target (IP range or headers).
  3. Check whether the site is a **<a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">restricted target</a>** (banks, government systems, or sites in mainland China).

---

## 3. 502 Bad Gateway / 504 Gateway Timeout

- **Cause**: the gateway timed out talking to an upstream node, or your network cannot reach the JoyProxy gateway.
- **Quick checks**:
  1. Host must be `gate.joyproxy.com` and Port must be `9001`.
  2. Check whether a local firewall blocks outbound traffic on port 9001.
  3. Switch the proxy protocol from HTTP to SOCKS5 and retry.

---

## 4. 429 Too Many Requests

- **Cause**: concurrent connections or request rate exceeded the current limit.
- **What to try**: increase retry spacing or lower thread concurrency.
