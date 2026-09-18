# Rotating proxy (Residential, Mobile, Business / ISP)

Rotating proxies issue a **new exit IP** per request or for a **sticky session** you configure. They are available on **Residential**, **Mobile**, and **Business / ISP** networks — not on Datacenter.

## Typical workflow

1. **Purchase** traffic or a package on [Purchase](https://www.joyproxy.com/admin-purchase.html) for the network you need.
2. **Whitelist & users** — Create sub-users and passwords, or allow-list server IPs in **Users & Whitelist** (credentials may be omitted for allow-listed IPs when supported).
3. **Generate endpoints** — In **Endpoints** / the extraction center, build a gateway username (and password) for `gate.joyproxy.com:9001` (HTTP/HTTPS/SOCKS5).
4. **Connect** — Use the endpoint in your code, [Browser extension](browser-extension.md), system proxy, or [third-party software](../best-practices/third-party-static-proxies.md).

## Gateway

- Host: `gate.joyproxy.com`
- Port: `9001`
- Protocols: HTTP, HTTPS, SOCKS5
- Use the **generated username** as-is; password comes from **Users & Whitelist**.

## Network-specific notes

- **Residential** — Largest pool; default choice for general web automation.
- **Mobile** — Carrier exits; use when targets expect mobile ASN or geo.
- **Business / ISP** — ISP-branded lines; often used for B2B or finance-adjacent sites.

## Console paths

After login, open the product from the left menu: **Residential**, **Mobile**, or **Business / ISP** → **Buy**, **My Proxies**, **Users & Whitelist**, **Endpoints**, **Usage**, **API Center**.

Detailed console screenshots: [User console → Proxy products](../user-console/README.md).
