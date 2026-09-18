# Quick start

Custom ports are **dedicated `host:port` lines** you configure after purchase: assign a region, optionally set rotation, then generate endpoints like Static.

Already have ports assigned? Skip to [Send a test request](#send-a-test-request).

Locked country at checkout instead: [Static quick start](../static/quick-start.md). Shared gateway: [Rotating quick start](../rotating/quick-start.md).

## How you connect

| Field | Value |
| --- | --- |
| Host / port | From Endpoints after you assign region |
| Auth | IP whitelist **and/or** the short credential username + password |
| Geo | [Assign region](assign-region.md) per port in My Proxies |

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

More languages: copy [Static code examples](../static/code-examples.md) and swap in the Custom host:port.

## Set up in the dashboard

> **Tip**
>
> New accounts receive a **$5 sign-up credit**. Apply it on your first eligible pack at checkout.

### 1. Buy ports

1. Open [Purchase → Custom](https://www.joyproxy.com/admin-purchase.html?tab=custom-ip).
2. Select **Residential**, **Business / ISP**, or **Datacenter**.
3. Choose validity, number of ports, and pay.
4. Find units under [My Proxies → Custom](https://www.joyproxy.com/admin-my-orders.html).

Details: [Buy ports](purchase.md).

### 2. Assign region

Assign country (then state / city when offered) **before** you generate endpoints. Rotation keeps new IPs inside that geo.

Details: [Assign region](assign-region.md).

### 3. Set rotation (optional)

Leave the IP until you refresh, or set a timer so the port picks a new exit on a schedule.

Details: [Set rotation](rotation.md).

### 4. Authorize and generate

1. Create Username/Password in [Users & Whitelist](https://www.joyproxy.com/admin-authorization.html) (IP whitelist is also available for dedicated ports).
2. [Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html) → **Custom Proxies → Web generator**.
3. Select the allocation → **Generate now** → copy host and port.

Details: [Authorize and generate](authorize-and-generate.md).

### 5. Confirm the IP

Run the curl above. When you see a public IP in the assigned region, the port is ready.

## What to read next

| Task | Page |
| --- | --- |
| Auto-renew | [Auto-renew](auto-renew.md) |
| New IP | [New IP](new-ip.md) |
| First request and code | [First request and code](first-request.md) |
| Auth methods | [Authentication methods](../rotating/authentication.md) |
