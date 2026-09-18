# Quick start

Get from a new JoyProxy account to a **working request** in a few minutes. The same four pieces appear in every proxy product: **account → purchase → credentials → connect**.

Already know the basics? Jump to the product you bought:

- [Rotating proxy](rotating/README.md) — Residential, Mobile, Business / ISP
- [Static proxy](static/README.md) — Residential, Business / ISP, Datacenter
- [Custom proxy](custom/README.md) — per-port region and rotation
- [Web Scraping API](scraping-api/README.md) — send a URL, get HTML/JSON
- [Software tools](software/README.md) — browser, tester, server, Android

## Choose a product

| You want | Buy this | Then read |
| --- | --- | --- |
| New exit IPs often, or sticky sessions for a few minutes | **Rotating** traffic (Residential / Mobile / Business) | [Rotating](rotating/README.md) |
| The same `host:port` for days or months | **Static** line | [Static](static/README.md) |
| Dedicated ports you can retarget by city | **Custom** ports | [Custom](custom/README.md) |
| Page content without wiring a proxy into your scraper | **Web Scraping API** credits | [Scraping API](scraping-api/README.md) |
| Click-to-apply in Chrome / Edge only | Free [Browser extension](software/browser-extension.md) + any line above | [Software](software/README.md) |

[Create an account](https://www.joyproxy.com/register.html) · [Pricing](https://www.joyproxy.com/pricing.html) · [Purchase](https://www.joyproxy.com/admin-purchase.html)

> **Tip**
>
> New accounts receive a **$5 sign-up credit**. Apply it on your first proxy pack or scraping credits at checkout.

## Five minutes with Rotating (most common path)

Rotating is the fastest way to see an exit IP change. Static and Custom use a dedicated host and port instead of the shared gateway—see those chapters after this works.

### 1. Sign up and buy traffic

1. [Register](https://www.joyproxy.com/register.html) and confirm email if the console asks.
2. Open [Purchase → Rotating](https://www.joyproxy.com/admin-purchase.html?tab=short-term).
3. Choose **Residential** (or **Mobile** / **Business / ISP** if that is your target).
4. Pick a traffic pack and pay with **PayPal** or **account balance**.
5. Confirm the order in [My Proxies](https://www.joyproxy.com/admin-my-orders.html).

### 2. Create a proxy password

Dashboard login and proxy login are **different**.

1. Open [Whitelist & Users](https://www.joyproxy.com/admin-authorization.html).
2. Under **Username / Password**, create a credential (username 3+ characters, password 6+).
3. Remember the **password**. You will pair it with a **long generated username** in the next step—not with this short name.

### 3. Generate an endpoint

1. Open [Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html) → **Rotating**.
2. Optionally pick country / state / city, then **sticky** (1–30 minutes) or **rotate every request**.
3. Click **Generate** and copy all four fields.

You always connect to the same gateway:

| Field | Value |
| --- | --- |
| Host | `gate.joyproxy.com` |
| Port | `9001` |
| Protocols | HTTP, HTTPS, SOCKS5 |
| Username | The **full generated string** (do not edit) |
| Password | The password from Whitelist & Users |

> **Important**
>
> Country, city, and session live **inside the generated username**. Pasting a shortened username, or typing the short credential name as the proxy user, will not target the region you selected.

### 4. Send a test request

Replace `GENERATED_USER` and `YOUR_PASS`:

```bash
curl -x http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

A public IP printed in the terminal means the line is live. Next, point your scraper or browser at the same host, port, user, and password.

Python:

```python
import requests

PROXY = "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001"
proxies = {"http": PROXY, "https": PROXY}
print(requests.get("https://api.ipify.org", proxies=proxies, timeout=30).text)
```

## Connection details at a glance

| Product | How you connect | Where geo lives |
| --- | --- | --- |
| Rotating | `gate.joyproxy.com:9001` + generated user + password | Inside the generated username |
| Static | Dedicated `host:port` from Endpoints | Locked at purchase |
| Custom | Dedicated `host:port` per port | [Assign region](custom/assign-region.md) in My Proxies |
| Web Scraping API | `GET https://api.joyproxy.com/v1/fetch` | `geoCode` query parameter |

> **Important**
>
> On Static and Custom, the **Exit IP** shown in the console is the address websites see. The address **your client connects to** is the `host:port` from Endpoints. Use the generated host and port, not the exit IP, as the proxy server.

## What to read next

| Task | Page |
| --- | --- |
| Country / city targeting on rotating | [Location targeting](rotating/location-targeting.md) |
| Keep the same IP for several minutes | [Sticky sessions](rotating/sticky-sessions.md) |
| Copy-paste for Python, Java, Go, Node | [Rotating code examples](rotating/code-examples.md) |
| Dedicated line + IP whitelist | [Static authorization](static/authorization.md) |
| Fetch a URL with credits | [First fetch](scraping-api/first-fetch.md) |
| Dashboard walkthrough | [User console](../user-console/overview.md) |
