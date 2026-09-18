# Residential proxies (console)

The **Residential** section covers home ISP-style exits with **Rotating**, **Static**, and **Custom** modes.

Open it from the left menu after login. Product context: <a href="https://www.joyproxy.com/products/proxy-residential.html" target="_blank" rel="noopener noreferrer">Residential proxies</a>.

## Tabs and what they do

### Buy

Purchase new traffic or lines.

- **Rotating** — traffic packages; checkout at <a href="https://www.joyproxy.com/admin-purchase.html?tab=short-term" target="_blank" rel="noopener noreferrer">Purchase → Rotating</a> with network **Residential**
- **Static** — country-locked lines; <a href="https://www.joyproxy.com/admin-purchase.html?tab=long-term" target="_blank" rel="noopener noreferrer">Purchase → Static</a>
- **Custom** — per-port plans; <a href="https://www.joyproxy.com/admin-purchase.html?tab=custom-ip" target="_blank" rel="noopener noreferrer">Purchase → Custom</a>

### My Proxies

View active and expired orders, remaining traffic, validity dates, and custom port assignments (<a href="../getting-started/custom/assign-region.md" target="_blank" rel="noopener noreferrer">assign region</a>, <a href="../getting-started/custom/rotation.md" target="_blank" rel="noopener noreferrer">rotation</a>).

- Rotating — <a href="../getting-started/rotating/auto-buy-traffic.md" target="_blank" rel="noopener noreferrer">Auto-buy traffic</a>
- Static — <a href="../getting-started/static/auto-renew.md" target="_blank" rel="noopener noreferrer">Auto-renew</a> and <a href="../getting-started/static/refresh-ip.md" target="_blank" rel="noopener noreferrer">New IP</a>
- Custom — <a href="../getting-started/custom/auto-renew.md" target="_blank" rel="noopener noreferrer">Auto-renew</a> and <a href="../getting-started/custom/new-ip.md" target="_blank" rel="noopener noreferrer">New IP</a>

### Users & Whitelist

Create **Username/Password** on this tab. Static and Custom can also use **IP whitelist** entries.

<a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a>

### Endpoints

Web generator and quick copy for:

- Rotating → `gate.joyproxy.com:9001`
- Static / Custom → dedicated `host:port`

Guide: <a href="../getting-started/rotating/README.md" target="_blank" rel="noopener noreferrer">Rotating</a> · <a href="../getting-started/static/README.md" target="_blank" rel="noopener noreferrer">Static</a> · <a href="../getting-started/custom/README.md" target="_blank" rel="noopener noreferrer">Custom</a>

### Usage

**Traffic** and **Orders** for the selected network. Rotating quota (used / remaining GB) and order lists: <a href="../getting-started/rotating/usage-and-orders.md" target="_blank" rel="noopener noreferrer">Usage and orders</a>.

### API Center

Shortcuts to tokenized extract APIs and examples. Full reference: <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>.

## Quick decision

| Need | Mode |
| --- | --- |
| Many IPs, shared gateway | Rotating |
| Fixed identity weeks+ | Static |
| Per-port geo + timer | Custom |
