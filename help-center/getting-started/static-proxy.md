# Static proxy (Residential, Business / ISP, Datacenter)

Static proxies assign a **stable host and port** for the lifetime of your package. They suit allow-listed servers, long-lived logins, vendor portals, and tools that cannot handle rotating gateways.

Available on **Residential**, **Business / ISP**, and **Datacenter** networks.

## When static is the right fit

- You need a consistent egress identity for days, weeks, or months
- Your automation runs from a fixed server IP (whitelist-friendly)
- You integrate with desktop software that expects `host:port` fields
- You want datacenter throughput at a predictable per-IP price

For per-request IP diversity, use [Rotating proxy](rotating-proxy.md) on Residential, Mobile, or Business / ISP.

## Purchase

1. Open [Purchase → Static](https://www.joyproxy.com/admin-purchase.html?tab=long-term).
2. Select **Residential**, **Business / ISP**, or **Datacenter**.
3. Search or pick **country** (and province / city when offered).
4. Choose duration: daily, weekly, monthly, or yearly plans as shown.
5. Complete checkout with balance or PayPal.
6. Find allocations in [My Proxies](https://www.joyproxy.com/admin-my-orders.html).

Business and datacenter static lines follow the same console flow—only the network type changes.

## Authorize (Whitelist & Users)

Before generating endpoints, set at least one auth method in [Whitelist & Users](https://www.joyproxy.com/admin-authorization.html).

### Option A — IP whitelist (servers and VPS)

Ideal when your scraper runs on a known public IP.

1. Discover your machine’s **public IPv4** (not LAN `192.168.x.x`).
2. **Whitelist & Users → IP Whitelist** → enter IP and remark → **Add IP**.
3. Connect from that IP using only `host:port` (no username/password in the client).

API example:

```http
POST https://api.joyproxy.com/v1/whitelist/add?token=YOUR_API_TOKEN
{"ips":["203.0.113.50"],"remark":"production-crawler"}
```

### Option B — Username and password

Use when your tool supports proxy authentication but cannot pin a single egress IP.

1. **Username / Password** → create credential (username 3+, password 6+).
2. Use `http://USER:PASS@HOST:PORT` in your application.

| Client field | JoyProxy value |
| --- | --- |
| Host | From endpoint generation, e.g. `us-ca.edge.joyproxy.com` |
| Port | From generation, e.g. `10001` |
| Username | Credential you created |
| Password | Credential password |

You may keep **both** whitelist and credentials; each application picks the mode it supports.

## Generate endpoints

1. Open [Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html).
2. Select **Static Proxies → Web generator**.
3. Filter by order / allocation → **Generate now**.
4. Copy host, port, and auth details into your app or [third-party tool](../best-practices/third-party-static-proxies.md).

API:

```http
GET https://api.joyproxy.com/v1/extract-long?token=TOKEN&allocation_id=ID&format=crlf
```

Try parameters in [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html).

## Connect

Reuse the **same host:port** until the order expires. Example:

```python
import requests

PROXY = "http://user:pass@us-ca.edge.joyproxy.com:10001"
proxies = {"http": PROXY, "https": PROXY}
r = requests.get("https://api.ipify.org", proxies=proxies, timeout=30)
print(r.text)
```

**Client setup guides**

- [Windows 11 system proxy](../best-practices/windows-11-system-proxy.md)
- [Chrome browser](../best-practices/chrome-static-proxy.md)
- [Mobile Wi‑Fi proxy](../best-practices/mobile-static-proxy.md)

> **Security**
>
> System-wide proxy routes **all** applications. Turn it off when you finish testing.

## Console tabs

See [Residential proxies (console)](../user-console/residential-proxies.md), [Business / ISP](../user-console/business-isp-proxies.md), [Datacenter](../user-console/datacenter-proxies.md).
