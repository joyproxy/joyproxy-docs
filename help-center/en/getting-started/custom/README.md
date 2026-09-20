# Custom Proxies

Custom Proxies are billed by **dedicated port count** and plan duration (Daily / Weekly / Monthly / Quarterly / Annual). Each port is 100% yours for the plan period. You can **Assign region** (country, state/province, or city) at any time, set a **Rotation interval** per port, or replace the exit IP by hand.

If you need many dedicated ports and want each one to use a different geo — or to rotate the exit IP on a schedule — Custom Proxies is the right product. If you only need one country and rarely change IPs, see <a href="../static/README.md" target="_blank" rel="noopener noreferrer">Static Proxies</a>. If you need millions of pooled IPs billed by GB, see <a href="../rotating/README.md" target="_blank" rel="noopener noreferrer">Rotating Proxies</a>.

---

## How it works

```text
Your app / client  →  us-ca.edge.joyproxy.com:20001  →  target site (exit country assigned on the port)
                      ▲
                      ├── Country/region bound on the port in the console (you can switch it anytime)
                      ├── Optional per-port rotation (for example every 5, 10, or 30 minutes)
                      └── Username/Password or IP Whitelist (managed in Users & Whitelist)
```

- **Configure each port independently**: One order can include up to 200 ports. Each port can have its own country, state/province, or city.
- **Flexible IP changes**: Set a Rotation interval (for example replace the exit IP every 5 minutes), or click **New IP** in the console to refresh immediately.
- **100% dedicated**: For the plan period, the port and its exit IP are never shared with another customer.
- **Standard protocols and direct auth**: HTTP, HTTPS, and SOCKS5. Use the Username and Password from Users & Whitelist (or connect without a password via IP Whitelist).

---

## Typical use cases

1. **Multi-account / multi-region in parallel**: Social matrices or multi-store ecommerce — Assign region so each account uses a different country or city on its own dedicated port.
2. **Localized collection and monitoring**: Competitor pricing or SERP checks in several countries at once, with each port representing one target country.
3. **Scheduled anti-block rotation**: Keep `host:port` stable for your client, while the exit IP refreshes on a timer so the target is less likely to block a single address.

---

## In this chapter

Read in this order:

1. <a href="quick-start.md" target="_blank" rel="noopener noreferrer">Quick start</a> — four steps from purchase to a working connection
2. <a href="network-types.md" target="_blank" rel="noopener noreferrer">Network types and how to choose</a> — Residential, Business / ISP, and Datacenter custom port packs
3. <a href="purchase.md" target="_blank" rel="noopener noreferrer">Purchase ports</a> — network, port count, and pre-assign options
4. <a href="view-ports.md" target="_blank" rel="noopener noreferrer">View and manage ports</a> — purchased ports, status, and expiry
5. <a href="assign-region.md" target="_blank" rel="noopener noreferrer">Assign region</a> — set or switch country, state/province, and city
6. <a href="rotation-and-refresh.md" target="_blank" rel="noopener noreferrer">Rotation interval and changing the exit IP</a> — automatic rotation and New IP
7. <a href="auto-renew.md" target="_blank" rel="noopener noreferrer">Auto-renew</a> — renew port plans from Account Balance
8. <a href="authentication.md" target="_blank" rel="noopener noreferrer">Set Username/Password and IP Whitelist</a> — proxy credentials and IP Whitelist
9. <a href="extract-ip.md" target="_blank" rel="noopener noreferrer">Generate proxy endpoints</a> — generate custom port lists and API notes
10. <a href="first-request.md" target="_blank" rel="noopener noreferrer">Send your first proxy request</a> — Python, Node.js, Go, cURL samples and third-party apps
11. <a href="response-codes.md" target="_blank" rel="noopener noreferrer">Response codes and common errors</a> — 407, 403, 502, and other common errors
12. <a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">Restricted targets and compliance</a> — compliance blocks and destinations you cannot reach
13. <a href="payments-and-invoices.md" target="_blank" rel="noopener noreferrer">View payments and download invoices</a> — transaction history and PDF invoices
