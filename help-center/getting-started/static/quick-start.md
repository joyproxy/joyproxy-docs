# Quick start

Static gives you a **dedicated host and port** for the life of the package. Region is chosen at checkout. Connect to the generated `host:port` — not the Exit IP on the order card.

Already have an allocation? Skip to [Send a test request](#send-a-test-request).

Need new IPs every request instead? <a href="../rotating/quick-start.md" target="_blank" rel="noopener noreferrer">Rotating quick start</a>. Per-port geo after purchase: <a href="../custom/quick-start.md" target="_blank" rel="noopener noreferrer">Custom quick start</a>.

## How you connect

| Field | Value |
| --- | --- |
| Host | From <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a>, for example `us-ca.edge.joyproxy.com` |
| Port | From Endpoints, for example `10001` |
| Protocols | HTTP and SOCKS5. Either protocol can open **HTTPS websites**. See <a href="protocols.md" target="_blank" rel="noopener noreferrer">Protocols</a>. |
| Auth | Username/Password **and/or** IP whitelist from <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a> |

> **Important**
>
> Exit IP is what websites see. Your client must use the **generated host and port**.

## Send a test request

Replace `USER`, `PASS`, `HOST`, and `PORT`. If this machine is on the IP whitelist, omit `USER:PASS@`.

{% tabs %}
{% tab title="cURL" %}
```bash
curl -x http://USER:PASS@HOST:PORT https://api.ipify.org
```
{% endtab %}

{% tab title="Python" %}
```python
import requests

PROXY = "http://USER:PASS@HOST:PORT"
proxies = {"http": PROXY, "https": PROXY}
print(requests.get("https://api.ipify.org", proxies=proxies, timeout=30).text)
```
{% endtab %}

{% tab title="Node.js" %}
```javascript
const { HttpsProxyAgent } = require("https-proxy-agent");

const agent = new HttpsProxyAgent("http://USER:PASS@HOST:PORT");
const res = await fetch("https://api.ipify.org", { agent });
console.log(await res.text());
```
{% endtab %}
{% endtabs %}

More languages: <a href="code-examples.md" target="_blank" rel="noopener noreferrer">Code examples</a>.

## Set up in the dashboard

New accounts: <a href="https://www.joyproxy.com/register.html" target="_blank" rel="noopener noreferrer">Register</a> · <a href="https://www.joyproxy.com/pricing.html" target="_blank" rel="noopener noreferrer">Pricing</a>

> **Tip**
>
> New accounts receive a **$5 sign-up credit**. Apply it on your first eligible line at checkout.

### 1. Buy a dedicated line

1. Open <a href="https://www.joyproxy.com/admin-purchase.html?tab=long-term" target="_blank" rel="noopener noreferrer">Purchase → Static</a>.
2. Select **Residential**, **Business / ISP**, or **Datacenter**.
3. Pick **country** (province / city when offered). This geo is **locked for the order**.
4. Choose duration and quantity, then pay in checkout (card, Apple Pay, Google Pay, PayPal, WeChat Pay, UPI, USDT, or account balance).
5. Wait until the allocation is active in <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies</a>.

Details: <a href="purchase.md" target="_blank" rel="noopener noreferrer">Buy a dedicated line</a>.

### 2. Authentication

Set **Username/Password** in <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a> (recommended):

- **Username/Password** — letter first, a–z and 0–9, max 16; password 6+. On Static, this username **is** the proxy user.
- **IP whitelist** — add the public IPv4 of the machine that will connect, then use `host:port` only.

Details: <a href="authorization.md" target="_blank" rel="noopener noreferrer">Username/password or whitelist</a> · <a href="../rotating/authentication.md" target="_blank" rel="noopener noreferrer">Authentication methods</a>.

### 3. Generate endpoints

1. Open <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoint generator</a> → **Static Proxies → Web generator**.
2. Select the order → **Generate now**.
3. Copy **host** and **port** (plus user/pass if you are not using whitelist).

Details: <a href="generate-endpoints.md" target="_blank" rel="noopener noreferrer">Generate endpoints</a>.

### 4. Confirm the IP

Run a snippet above. The printed address should match the region you purchased.

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| **407** / auth failed | Short credential user/pass, or whitelist the **public** IPv4 of this machine |
| Timeout / connection refused | Latest host:port from Endpoints; order still active |
| Works on VPS, fails at home | Home IP is not on the whitelist — add it or switch to user/pass |
| Connected to Exit IP | Use generated host:port, not the Exit IP on the order card |

## What to read next

| Task | Page |
| --- | --- |
| Auto-renew | <a href="auto-renew.md" target="_blank" rel="noopener noreferrer">Auto-renew</a> |
| New IP | <a href="refresh-ip.md" target="_blank" rel="noopener noreferrer">New IP</a> |
| Windows, Chrome, mobile | <a href="clients.md" target="_blank" rel="noopener noreferrer">Clients</a> |
| HTTP vs SOCKS5 | <a href="protocols.md" target="_blank" rel="noopener noreferrer">Protocols</a> |
| 407 / 403 | <a href="response-codes.md" target="_blank" rel="noopener noreferrer">Response codes</a> |
| More code | <a href="code-examples.md" target="_blank" rel="noopener noreferrer">Code examples</a> |
