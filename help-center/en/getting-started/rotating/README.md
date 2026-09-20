# Rotating Proxies

Rotating Proxies are billed by traffic (GB). Every request connects to the shared JoyProxy gateway `gate.joyproxy.com:9001`. The exit IP can rotate on each request, or you can keep the same IP for 1–30 minutes with a sticky session.

Rotating Proxies cover three networks: **Rotating Residential Proxies**, **Rotating Mobile Proxies**, and **Rotating Business / ISP Proxies**. If you need a dedicated `host:port` that stays the same for a long time, see <a href="../static/README.md" target="_blank" rel="noopener noreferrer">Static Proxies</a> or <a href="../custom/README.md" target="_blank" rel="noopener noreferrer">Custom Proxies</a>.

## How it works

```text
Your app / client  →  gate.joyproxy.com:9001  →  target website
                      ▲
                      ├── Username: the full long string from Endpoint generator (geo + session)
                      └── Password: the proxy Password set on Users & Whitelist
```

- **Unified gateway**: Host is always `gate.joyproxy.com` and Port is always `9001`, no matter which country or city you target.
- **Parameter encoding**: Country, region, city, and session mode are encoded in the generated username. You do not change Host or Port.
- **Protocols**: HTTP and SOCKS5 are both supported. Either protocol can reach HTTPS sites.

## In this chapter

Read in this order if you are new:

1. <a href="quick-start.md" target="_blank" rel="noopener noreferrer">Quick start</a> — 4-step setup
2. <a href="network-types.md" target="_blank" rel="noopener noreferrer">Network types</a> — Residential, Mobile, and Business / ISP compared
3. <a href="purchase.md" target="_blank" rel="noopener noreferrer">Purchase traffic</a> — pick a network and buy a GB pack
4. <a href="view-traffic.md" target="_blank" rel="noopener noreferrer">View purchased traffic</a> — check active orders and remaining GB
5. <a href="auto-buy-traffic.md" target="_blank" rel="noopener noreferrer">Auto-buy traffic</a> — auto-charge Balance when traffic runs low
6. <a href="authentication.md" target="_blank" rel="noopener noreferrer">Users & Whitelist</a> — set Username/Password and IP Whitelist
7. <a href="extract-ip.md" target="_blank" rel="noopener noreferrer">Generate endpoints</a> — Web generator, API generator, and AI generator
8. <a href="extraction-parameters.md" target="_blank" rel="noopener noreferrer">Advanced extraction parameters</a> — country / state / city / ASN targeting, session control, and formats
9. <a href="first-request.md" target="_blank" rel="noopener noreferrer">Send a proxy request</a> — language samples and client setup
10. <a href="response-codes.md" target="_blank" rel="noopener noreferrer">Response codes</a> — 407, 403, 502, and other common errors
11. <a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">Restricted targets</a> — compliance blocks and disallowed destinations
12. <a href="usage.md" target="_blank" rel="noopener noreferrer">Check usage</a> — traffic usage details and trend charts
13. <a href="payments-and-invoices.md" target="_blank" rel="noopener noreferrer">Payments and invoices</a> — transaction history and PDF receipts
