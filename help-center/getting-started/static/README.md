# Static proxy

Static proxies give you a **dedicated host and port** for the life of the package. The same `host:port` is the address your client connects to until the order expires. Use **New IP** in My Proxies to replace the exit IP; **region stays as purchased**.

Available on **Residential**, **Business / ISP**, and **Datacenter**.

## How it differs from Rotating

| | Rotating | Static |
| --- | --- | --- |
| Server you connect to | `gate.joyproxy.com:9001` | Unique `host:port` per line (for example `us-ca.edge.joyproxy.com:10001`) |
| Geo | Encoded in generated username | Chosen at checkout |
| Auth | Generated username + Username/Password | Username/Password; IP whitelist also available |
| Billing | Per GB | Per IP for a duration |

> **Important**
>
> Connect to the **generated host and port**, not the **Exit IP** shown on the order. Exit IP is what websites see; host:port is the JoyProxy entry.

## In this chapter

1. <a href="quick-start.md" target="_blank" rel="noopener noreferrer">Quick start</a>
2. <a href="purchase.md" target="_blank" rel="noopener noreferrer">Buy a dedicated line</a>
3. <a href="auto-renew.md" target="_blank" rel="noopener noreferrer">Auto-renew</a>
4. <a href="authorization.md" target="_blank" rel="noopener noreferrer">Username/password or whitelist</a>
5. <a href="generate-endpoints.md" target="_blank" rel="noopener noreferrer">Generate endpoints</a>
6. <a href="first-request.md" target="_blank" rel="noopener noreferrer">Make your first request</a>
7. <a href="code-examples.md" target="_blank" rel="noopener noreferrer">Code examples</a>
8. <a href="refresh-ip.md" target="_blank" rel="noopener noreferrer">New IP</a>
9. <a href="clients.md" target="_blank" rel="noopener noreferrer">Windows, Chrome, and mobile</a>
10. <a href="protocols.md" target="_blank" rel="noopener noreferrer">Protocols</a>
11. <a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">Restricted targets</a>
12. <a href="response-codes.md" target="_blank" rel="noopener noreferrer">Response codes</a>

## First request shape

```bash
curl -x http://USER:PASS@HOST:PORT https://api.ipify.org
```

If the line is IP-whitelisted from this machine, many clients can omit `USER:PASS`.

## Product pages

<a href="https://www.joyproxy.com/products/proxy-residential.html" target="_blank" rel="noopener noreferrer">Residential</a> · <a href="https://www.joyproxy.com/products/proxy-business.html" target="_blank" rel="noopener noreferrer">Business / ISP</a> · <a href="https://www.joyproxy.com/products/proxy-datacenter.html" target="_blank" rel="noopener noreferrer">Datacenter</a> · <a href="https://www.joyproxy.com/pricing.html" target="_blank" rel="noopener noreferrer">Pricing</a>
