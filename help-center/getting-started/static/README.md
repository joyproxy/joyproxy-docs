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

1. [Quick start](quick-start.md)
2. [Buy a dedicated line](purchase.md)
3. [Auto-renew](auto-renew.md)
4. [Username/password or whitelist](authorization.md)
5. [Generate endpoints](generate-endpoints.md)
6. [Make your first request](first-request.md)
7. [Code examples](code-examples.md)
8. [New IP](refresh-ip.md)
9. [Windows, Chrome, and mobile](clients.md)

## First request shape

```bash
curl -x http://USER:PASS@HOST:PORT https://api.ipify.org
```

If the line is IP-whitelisted from this machine, many clients can omit `USER:PASS`.

## Product pages

[Residential](https://www.joyproxy.com/products/proxy-residential.html) · [Business / ISP](https://www.joyproxy.com/products/proxy-business.html) · [Datacenter](https://www.joyproxy.com/products/proxy-datacenter.html) · [Pricing](https://www.joyproxy.com/pricing.html)
