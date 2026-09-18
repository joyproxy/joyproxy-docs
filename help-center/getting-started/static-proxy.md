# Static proxy (Residential, Business / ISP, Datacenter)

Static proxies give you a **stable host:port** for the lifetime of the package. Use them when you need a fixed exit, allow-listed server access, or long-lived sessions.

## Networks

- **Residential** — Static residential lines
- **Business / ISP** — ISP-branded static endpoints
- **Datacenter** — High-speed datacenter static (no rotating SKU on datacenter)

## Typical workflow

1. **Purchase** a static package for the chosen network.
2. **Users & Whitelist** — Sub-users, passwords, or IP allow list.
3. **Generate endpoints** — Copy `host`, `port`, `user`, and `pass` from the generator; reuse the same values until the order expires.
4. **Connect** — Application code, [Windows 11 system proxy](../best-practices/windows-11-system-proxy.md), [Chrome](../best-practices/chrome-static-proxy.md), [mobile](../best-practices/mobile-static-proxy.md), or third-party tools.

## Console

Each network has **Buy**, **My Proxies**, **Users & Whitelist**, **Endpoints**, **Usage**, and **API Center** in the dashboard.
