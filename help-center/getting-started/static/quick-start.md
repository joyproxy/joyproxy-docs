# Quick start

Static gives you a **dedicated host and port** for the life of the package. Region is chosen at checkout. Connect to the generated `host:port` — not the Exit IP on the order card.

Already have an allocation? Skip to [Send a test request](#send-a-test-request).

Need new IPs every request instead? [Rotating quick start](../rotating/quick-start.md). Per-port geo after purchase: [Custom quick start](../custom/quick-start.md).

## How you connect

| Field | Value |
| --- | --- |
| Host | From [Endpoints](https://www.joyproxy.com/admin-ip-extraction-center.html), for example `us-ca.edge.joyproxy.com` |
| Port | From Endpoints, for example `10001` |
| Protocols | HTTP and SOCKS5. Either protocol can open **HTTPS websites**. |
| Auth | Username/Password **and/or** IP whitelist from [Users & Whitelist](https://www.joyproxy.com/admin-authorization.html) |

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

More languages: [Code examples](code-examples.md).

## Set up in the dashboard

New accounts: [Register](https://www.joyproxy.com/register.html) · [Pricing](https://www.joyproxy.com/pricing.html)

> **Tip**
>
> New accounts receive a **$5 sign-up credit**. Apply it on your first eligible line at checkout.

### 1. Buy a dedicated line

1. Open [Purchase → Static](https://www.joyproxy.com/admin-purchase.html?tab=long-term).
2. Select **Residential**, **Business / ISP**, or **Datacenter**.
3. Pick **country** (province / city when offered). This geo is **locked for the order**.
4. Choose duration and quantity, then pay in checkout (card, Apple Pay, Google Pay, PayPal, WeChat Pay, UPI, USDT, or account balance).
5. Wait until the allocation is active in [My Proxies](https://www.joyproxy.com/admin-my-orders.html).

Details: [Buy a dedicated line](purchase.md).

### 2. Authentication

Set **Username/Password** in [Users & Whitelist](https://www.joyproxy.com/admin-authorization.html) (recommended):

- **Username/Password** — letter first, a–z and 0–9, max 16; password 6+. On Static, this username **is** the proxy user.
- **IP whitelist** — add the public IPv4 of the machine that will connect, then use `host:port` only.

Details: [Username/password or whitelist](authorization.md) · [Authentication methods](../rotating/authentication.md).

### 3. Generate endpoints

1. Open [Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html) → **Static Proxies → Web generator**.
2. Select the order → **Generate now**.
3. Copy **host** and **port** (plus user/pass if you are not using whitelist).

Details: [Generate endpoints](generate-endpoints.md).

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
| Auto-renew | [Auto-renew](auto-renew.md) |
| New IP | [New IP](refresh-ip.md) |
| Windows, Chrome, mobile | [Clients](clients.md) |
| More code | [Code examples](code-examples.md) |
