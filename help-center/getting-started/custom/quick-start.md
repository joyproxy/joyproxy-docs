# Quick start

Custom ports are **dedicated `host:port` lines** you configure after purchase: assign a region, optionally set rotation, then generate endpoints like Static.

Already have ports assigned? Skip to [Send a test request](#send-a-test-request).

Locked country at checkout instead: <a href="../static/quick-start.md" target="_blank" rel="noopener noreferrer">Static quick start</a>. Shared gateway: <a href="../rotating/quick-start.md" target="_blank" rel="noopener noreferrer">Rotating quick start</a>.

## How you connect

| Field | Value |
| --- | --- |
| Host / port | From Endpoints after you assign region |
| Auth | IP whitelist **and/or** the short credential username + password |
| Geo | <a href="assign-region.md" target="_blank" rel="noopener noreferrer">Assign region</a> per port in My Proxies |

Connect to the generated host:port, not the Exit IP on the order card.

## Send a test request

Replace `USER`, `PASS`, `HOST`, and `PORT`. Omit `USER:PASS@` if this machine is whitelisted.

```bash
curl -x http://USER:PASS@HOST:PORT https://api.ipify.org
```

```python
import requests

PROXY = "http://USER:PASS@HOST:PORT"
proxies = {"http": PROXY, "https": PROXY}
print(requests.get("https://api.ipify.org", proxies=proxies, timeout=30).text)
```

More languages: copy <a href="../static/code-examples.md" target="_blank" rel="noopener noreferrer">Static code examples</a> and swap in the Custom host:port.

## Set up in the dashboard

> **Tip**
>
> New accounts receive a **$5 sign-up credit**. Apply it on your first eligible pack at checkout.

### 1. Buy ports

1. Open <a href="https://www.joyproxy.com/admin-purchase.html?tab=custom-ip" target="_blank" rel="noopener noreferrer">Purchase → Custom</a>.
2. Select **Residential**, **Business / ISP**, or **Datacenter**.
3. Choose validity, number of ports, and pay.
4. Find units under <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies → Custom</a>.

Details: <a href="purchase.md" target="_blank" rel="noopener noreferrer">Buy ports</a>.

### 2. Assign region

Assign country (then state / city when offered) **before** you generate endpoints. Rotation keeps new IPs inside that geo.

Details: <a href="assign-region.md" target="_blank" rel="noopener noreferrer">Assign region</a>.

### 3. Set rotation (optional)

Leave the IP until you refresh, or set a timer so the port picks a new exit on a schedule.

Details: <a href="rotation.md" target="_blank" rel="noopener noreferrer">Set rotation</a>.

### 4. Authorize and generate

1. Create Username/Password in <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a> (IP whitelist is also available for dedicated ports).
2. <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoint generator</a> → **Custom Proxies → Web generator**.
3. Select the allocation → **Generate now** → copy host and port.

Details: <a href="authorize-and-generate.md" target="_blank" rel="noopener noreferrer">Authorize and generate</a>.

### 5. Confirm the IP

Run the curl above. When you see a public IP in the assigned region, the port is ready.

## What to read next

| Task | Page |
| --- | --- |
| Auto-renew | <a href="auto-renew.md" target="_blank" rel="noopener noreferrer">Auto-renew</a> |
| New IP | <a href="new-ip.md" target="_blank" rel="noopener noreferrer">New IP</a> |
| First request and code | <a href="first-request.md" target="_blank" rel="noopener noreferrer">First request and code</a> |
| HTTP vs SOCKS5 | <a href="protocols.md" target="_blank" rel="noopener noreferrer">Protocols</a> |
| 407 / 403 | <a href="response-codes.md" target="_blank" rel="noopener noreferrer">Response codes</a> |
| Auth methods | <a href="../rotating/authentication.md" target="_blank" rel="noopener noreferrer">Authentication methods</a> |
