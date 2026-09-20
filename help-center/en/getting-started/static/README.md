# Static Proxies

Static Proxies are billed by dedicated line (IP) and plan duration (daily / monthly / annual). For as long as the plan is active, you get an exclusive host and port (for example `us-ca.edge.joyproxy.com:10001`). That IP is 100% yours — it is never shared with another customer.

Static Proxies cover three networks: **Static Residential Proxies**, **Static Business / ISP Proxies**, and **Static Datacenter Proxies**. If you need frequent IP rotation or GB billing, see <a href="../rotating/README.md" target="_blank" rel="noopener noreferrer">Rotating Proxies</a>. If you need to switch a port’s country at any time or set a rotation interval, see <a href="../custom/README.md" target="_blank" rel="noopener noreferrer">Custom Proxies</a>.

## How it works

```text
Your app / client  →  us-ca.edge.joyproxy.com:10001  →  target site
                      ▲
                      ├── Username: the Username you set in Users & Whitelist
                      └── Password: the Password you set in Users & Whitelist (or skip credentials with IP Whitelist)
```

- **Dedicated fixed host:port**: You pick the country/region at checkout. After the order is live, that connection address is yours.
- **Direct authentication**: Use the short Username and Password from Users & Whitelist. You do not concatenate a long rotating username.
- **Change the exit IP**: If the IP is blocked or you need a fresh one during the plan period, open My Proxies and click **New IP**.

## In this chapter

Read in this order:

1. <a href="quick-start.md" target="_blank" rel="noopener noreferrer">Quick start</a> — four steps from purchase to a working connection
2. <a href="network-types.md" target="_blank" rel="noopener noreferrer">Network types</a> — Residential, Business / ISP, and Datacenter dedicated lines
3. <a href="purchase.md" target="_blank" rel="noopener noreferrer">Purchase dedicated lines</a> — order by country/region and quantity
4. <a href="view-lines.md" target="_blank" rel="noopener noreferrer">View purchased lines</a> — live lines, ports, and expiry
5. <a href="auto-renew.md" target="_blank" rel="noopener noreferrer">Auto-renew</a> — renew from Account Balance before expiry
6. <a href="authentication.md" target="_blank" rel="noopener noreferrer">Set Username/Password and IP Whitelist</a> — proxy credentials and IP Whitelist
7. <a href="extract-ip.md" target="_blank" rel="noopener noreferrer">Generate proxy endpoints</a> — export your dedicated host:port list
8. <a href="refresh-ip.md" target="_blank" rel="noopener noreferrer">Change the exit IP</a> — replace the exit IP from the console
9. <a href="first-request.md" target="_blank" rel="noopener noreferrer">Send your first proxy request</a> — code samples and client / antidetect-browser setup
10. <a href="response-codes.md" target="_blank" rel="noopener noreferrer">Response codes</a> — 407, 403, 502, and other common errors
11. <a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">Restricted targets</a> — compliance blocks and destinations you cannot reach
12. <a href="payments-and-invoices.md" target="_blank" rel="noopener noreferrer">View payments and download invoices</a> — transaction history and PDF invoices
