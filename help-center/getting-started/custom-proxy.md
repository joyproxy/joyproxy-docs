# Custom proxy (Residential, Business / ISP, Datacenter)

Custom proxies combine **per-port geography** with an optional **rotation timer**. You buy ports, assign each port’s region (and rotation policy), then generate stable `host:port` endpoints—similar to Static, but with flexible geo control per line.

Available on **Residential**, **Business / ISP**, and **Datacenter**.

## When custom is the right fit

- Multiple regions in one order (e.g. US checkout + UK catalog on separate ports)
- Scheduled IP refresh while keeping targeting rules
- Teams that outgrow single-country static packs but do not need a rotating gateway

## 1. Purchase

1. Open [Purchase → Custom](https://www.joyproxy.com/admin-purchase.html?tab=custom-ip).
2. Select network type.
3. Choose a **validity plan** (priced per port).
4. Set **number of ports** and pay with balance or PayPal.

## 2. Assign region

Each port can target country-only, country + province, or a specific city.

1. [My Proxies](https://www.joyproxy.com/admin-my-orders.html) → **Custom Proxies** tab.
2. Select one or more active units.
3. Click **Assign region**.
4. Choose **Country** → optional **Region / Province** → optional **City** → confirm.

Ports in the same order can use **different** regions—useful for multi-market QA.

## 3. Set rotation interval

Rotation refreshes the exit IP on a timer while respecting the port’s geo rules.

1. In **My Proxies → Custom Proxies**, select port(s).
2. Click **Rotation**.
3. Pick a preset (Off, 1 min, 5 min, 15 min, 1 hour) or enter seconds in **60-second steps**.
4. **Off** keeps the IP until you change it manually.
5. Click **Apply**.

> **Important**
>
> Assign **region first**, then rotation—so refreshed IPs stay inside your chosen geography.

## 4. Authorize and generate

Authorization matches Static: [IP whitelist or username/password](static-proxy.md#authorize-whitelist--users) in [Whitelist & Users](https://www.joyproxy.com/admin-authorization.html).

Generate endpoints:

1. [Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html) → **Custom Proxies → Web generator**.
2. Pick allocation → **Generate now**.

API:

```http
GET https://api.joyproxy.com/v1/extract-custom?token=TOKEN&allocation_id=ID&format=crlf
```

## 5. Connect

Use the generated host:port in code, browsers, or third-party tools—the same patterns as [Static proxy](static-proxy.md#connect).

[Business / ISP custom](https://www.joyproxy.com/products/proxy-business.html) and [Datacenter custom](https://www.joyproxy.com/products/proxy-datacenter.html) share this flow; only the network selector changes at purchase.
