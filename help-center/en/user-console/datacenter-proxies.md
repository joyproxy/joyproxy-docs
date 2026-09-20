# Datacenter Proxies console

Datacenter Proxies run on top-tier hosting infrastructure. The strengths are low unit cost, gigabit unmetered-class bandwidth, and millisecond latency. They fit high-throughput downloads, connectivity tests, and market monitoring when the target does not apply strict anti-bot checks.

In the left sidebar **Proxies** group, click **Datacenter**:

<a href="https://www.joyproxy.com/admin-proxy-datacenter.html" target="_blank" rel="noopener noreferrer">Open the Datacenter console</a> · <a href="https://www.joyproxy.com/products/proxy-datacenter.html" target="_blank" rel="noopener noreferrer">Datacenter product page</a>

---

## Product modes

Datacenter focuses on long-lived, high-concurrency dedicated ports. **Rotating is not sold for Datacenter.** The console covers two dedicated modes:

1. **Static Dedicated Datacenter Proxies**:  
   A dedicated hosting ASN exit with a gigabit-class path, rented monthly. You can request a new exit IP from the console at any time.  
   - Purchase: <a href="../getting-started/static/purchase.md" target="_blank" rel="noopener noreferrer">Purchase Static Proxies</a>
   - Inventory: <a href="../getting-started/static/view-lines.md" target="_blank" rel="noopener noreferrer">View purchased lines</a>
   - Change exit: <a href="../getting-started/static/refresh-ip.md" target="_blank" rel="noopener noreferrer">Change exit IP</a>
2. **Custom Dedicated Datacenter Proxies**:  
   For teams that need tens to hundreds of independent hosting ports. Each port is a dedicated path you can group by collector.  
   - Ports: <a href="../getting-started/custom/view-ports.md" target="_blank" rel="noopener noreferrer">View and manage ports</a>
   - Renew: <a href="../getting-started/custom/auto-renew.md" target="_blank" rel="noopener noreferrer">Auto-renew</a>

> **Choosing a network**: If the target is strict about hosting IPs (Google Search challenges, Instagram, Facebook, and similar), prefer the <a href="residential-proxies.md" target="_blank" rel="noopener noreferrer">Residential console</a> or the <a href="business-isp-proxies.md" target="_blank" rel="noopener noreferrer">Business / ISP console</a>. For public sites, API monitoring, and price comparison, Datacenter can cut more than 70% of proxy spend.

---

## Common tasks

- **Buy a line**: On **Buy**, pick the datacenter geo (for example US West or Frankfurt) and the rental term, then pay.
- **Whitelist**: On **Users & Whitelist**, add your crawler server IP. Static Dedicated and Custom Dedicated Datacenter lines can then connect over SOCKS5 or HTTP without a password.
- **Copy endpoints**: On **Endpoint generator**, choose Static Dedicated and copy the host:port list or export formatted text.
