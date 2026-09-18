# Residential proxies (console)

The **Residential** section covers home ISP-style exits with **Rotating**, **Static**, and **Custom** modes.

Open it from the left menu after login. Product context: [Residential proxies](https://www.joyproxy.com/products/proxy-residential.html).

## Tabs and what they do

### Buy

Purchase new traffic or lines.

- **Rotating** — traffic packages; checkout at [Purchase → Rotating](https://www.joyproxy.com/admin-purchase.html?tab=short-term) with network **Residential**
- **Static** — country-locked lines; [Purchase → Static](https://www.joyproxy.com/admin-purchase.html?tab=long-term)
- **Custom** — per-port plans; [Purchase → Custom](https://www.joyproxy.com/admin-purchase.html?tab=custom-ip)

### My Proxies

View active and expired orders, remaining traffic, validity dates, and custom port assignments ([assign region](../getting-started/custom/assign-region.md), [rotation](../getting-started/custom/rotation.md)).

### Users & Whitelist

Create **username/password** pairs and **IP whitelist** entries used across modes. Rotating lines use password + generated username; static/custom can use whitelist from server IPs.

[Whitelist & Users](https://www.joyproxy.com/admin-authorization.html)

### Endpoints

Web generator and quick copy for:

- Rotating → `gate.joyproxy.com:9001`
- Static / Custom → dedicated `host:port`

Guide: [Rotating](../getting-started/rotating/README.md) · [Static](../getting-started/static/README.md) · [Custom](../getting-started/custom/README.md)

### Usage

Charts and logs for traffic consumption on rotating packages—useful before renewals.

### API Center

Shortcuts to tokenized extract APIs and examples. Full reference: [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html).

## Quick decision

| Need | Mode |
| --- | --- |
| Many IPs, shared gateway | Rotating |
| Fixed identity weeks+ | Static |
| Per-port geo + timer | Custom |
