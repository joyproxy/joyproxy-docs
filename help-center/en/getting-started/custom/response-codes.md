# Response codes and common errors

When you connect through Custom Proxies, you may see HTTP status errors. Use this table to diagnose them:

---

## Quick lookup

| HTTP status | Meaning | Typical cause | What to do |
| --- | --- | --- | --- |
| **407 Proxy Authentication Required** | Proxy authentication failed | Wrong Username/Password, or the IP is not on IP Whitelist | Check <a href="authentication.md" target="_blank" rel="noopener noreferrer">Users & Whitelist</a> and the credentials in your code. |
| **403 Forbidden** | Target refused the request / IP blocked | The target’s risk control blocked this exit IP | On My Proxies, click **<a href="rotation-and-refresh.md" target="_blank" rel="noopener noreferrer">New IP</a>** to replace the port’s exit IP. |
| **502 Bad Gateway** | Gateway did not respond / region not assigned | The port has no country yet, or the line is reconnecting | Confirm **<a href="assign-region.md" target="_blank" rel="noopener noreferrer">Assign region</a>** is complete for this port. |
| **504 Gateway Timeout** | Proxy gateway timed out | Node network blip, or the target did not respond | Retry the request. If it keeps timing out, use New IP. |

---

## Deeper diagnosis

### 1. Is it the proxy, or did the target block you?
Run a generic IP check:
```bash
curl -x http://USER:PASS@us-ca.edge.joyproxy.com:20001 https://api.ipify.org
```
- If you get an IP back, **the proxy line and authentication are fine**. A 403 / 503 on a specific site is that site blocking the exit — click **<a href="rotation-and-refresh.md" target="_blank" rel="noopener noreferrer">New IP</a>**.
- If you get 407, the Username/Password is wrong — check authentication.
- If you get 502, check whether the port is still `Unassigned`.
