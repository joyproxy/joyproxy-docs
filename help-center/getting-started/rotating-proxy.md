# Rotating proxy (Residential, Mobile, Business / ISP)

Rotating proxies send traffic through JoyProxy’s shared gateway. Each request can use a **new exit IP**, or you can hold a **sticky session** (typically 1–30 minutes) before rotation. This mode is available on **Residential**, **Mobile**, and **Business / ISP** networks.

Datacenter lines use **Static** and **Custom** modes instead; see those guides when you need hosting ASN exits at scale.

## When rotating is the right fit

- Large-scale web collection where IP diversity matters
- Account workflows that still need occasional session stickiness
- Mobile carrier verification (choose **Mobile** at purchase)
- Business / ISP ASN targets (choose **Business / ISP** at purchase)

If you need the **same IP for weeks** on a dedicated host:port, [Static proxy](static-proxy.md) is usually simpler.

## End-to-end workflow

### 1. Purchase traffic

1. Sign in and open [Purchase → Rotating](https://www.joyproxy.com/admin-purchase.html?tab=short-term).
2. Select network type: **Residential**, **Mobile**, or **Business / ISP**.
3. Pick a traffic package and validity period that matches your project length.
4. Pay with **PayPal** or **account balance** ([top up](https://www.joyproxy.com/admin-purchase.html) if needed).
5. Confirm the order under [My Proxies](https://www.joyproxy.com/admin-my-orders.html).

Orders stay active while **traffic remains** and the **validity period** has not expired.

> **Tip**
>
> Compare list prices on the [pricing page](https://www.joyproxy.com/pricing.html) before checkout. Larger packs often lower your effective cost per GB.

### 2. Create credentials (Whitelist & Users)

Rotating lines authenticate with a **password you define** plus the **long generated username** from the endpoint generator.

1. Open [Whitelist & Users](https://www.joyproxy.com/admin-authorization.html) (or the **Users & Whitelist** tab on your network console).
2. Go to **Username / Password** and create a credential (username 3+ characters, password 6+ characters).
3. Keep this password ready when you connect.

**Important:** In your app, the proxy **username** is the **full string from Endpoints** (it encodes country, city, session mode). The **password** is the one from Whitelist & Users. Do not substitute the short credential name for the generated username, and do not edit the generated string.

Server **IP allow listing** is available on Static and Custom lines today; the same workflow is being extended to Rotating—until then, plan on username/password for rotating gateways.

### 3. Generate endpoints

Gateway is always:

| Field | Value |
| --- | --- |
| Host | `gate.joyproxy.com` |
| Port | `9001` |
| Protocols | HTTP, HTTPS, SOCKS5 |

**Web generator**

1. Open [Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html) or **Endpoints** on your Residential / Mobile / Business console.
2. Choose **Rotating** and your active order.
3. Optionally set **country / state / city**.
4. Pick **sticky** (1–30 minutes) or **rotate every request**.
5. Click **Generate** and copy **host, port, username, password**.

The generated username stays valid while you have traffic; sticky time only controls how long the exit IP is held.

**API extraction (optional)**

```http
GET https://api.joyproxy.com/v2/extract?network_type=residential&count=5&duration=5m&format=json
Authorization: Bearer YOUR_API_TOKEN
```

Use your **API token** from [Account settings](https://www.joyproxy.com/admin-settings.html). The response includes `gate.joyproxy.com`, port `9001`, and a wire-ready username—paste it unchanged. Test calls in [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html).

### 4. Connect in code

Replace `USER` with the **generated username** and `PASS` with your Whitelist & Users password:

```python
import requests

PROXY = "http://USER:PASS@gate.joyproxy.com:9001"
proxies = {"http": PROXY, "https": PROXY}
r = requests.get("https://api.ipify.org", proxies=proxies, timeout=30)
print(r.text)
```

```bash
curl -x http://USER:PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

More patterns: [Best practices → third-party software](../best-practices/third-party-static-proxies.md) (same gateway fields), [Browser extension](browser-extension.md), or [Integrate proxies in AI](../integration/integrate-proxies-in-ai.md).

## Console reference

For each network, the left menu exposes **Buy**, **My Proxies**, **Users & Whitelist**, **Endpoints**, **Usage**, and **API Center**. Details: [Residential proxies (console)](../user-console/residential-proxies.md), [Mobile](../user-console/mobile-proxies.md), [Business / ISP](../user-console/business-isp-proxies.md).

## Related links

- [Residential product](https://www.joyproxy.com/products/proxy-residential.html) · [Mobile](https://www.joyproxy.com/products/proxy-mobile.html) · [Business / ISP](https://www.joyproxy.com/products/proxy-business.html)
- [Static proxy](static-proxy.md) · [Custom proxy](custom-proxy.md)
- [Web Scraping API](web-scraping-api.md) when you prefer URL-based fetches over raw proxies
