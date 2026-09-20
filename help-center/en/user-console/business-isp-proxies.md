# Business / ISP Proxies console

Business / ISP Proxies combine enterprise leased-line exits (for example AT&T Business and CenturyLink Enterprise class fiber) with datacenter-grade latency, bandwidth, and uptime. You get real ISP reputation plus stable throughput.

In the left sidebar **Proxies** group, click **Business / ISP**:

<a href="https://www.joyproxy.com/admin-proxy-business.html" target="_blank" rel="noopener noreferrer">Open the Business / ISP console</a> · <a href="https://www.joyproxy.com/products/proxy-business.html" target="_blank" rel="noopener noreferrer">Business / ISP product page</a>

---

## Why Business / ISP

Many large sites treat hosting ASN (pure datacenter) IPs harshly, while consumer home broadband can jitter at peak hours. Business ISP lines sit in between:

1. **High reputation**: Risk databases usually classify the IP as a company leased line or fixed broadband, not a proxy;
2. **Stable links**: Backbone fiber, symmetric bandwidth, without the drops common on residential last-mile;
3. **All three modes**: Rotating traffic, Static Dedicated lines, and Custom Dedicated multi-port clusters.

---

## Three product modes

The Business / ISP console uses the same six tabs (**Buy**, **My Proxies**, **Users & Whitelist**, **Endpoint generator**, **Usage**, **API Center** / OpenAPI Center). Switch mode at the top:

- **Rotating Business Proxies**: One gateway over the business ISP pool. High-trust rotation when you have many targets. Same flow as the <a href="../getting-started/rotating/README.md" target="_blank" rel="noopener noreferrer">Rotating Proxies guide</a>.
- **Static Dedicated Business Proxies** (recommended): A dedicated business ISP exit that stays on the same IP. Fits enterprise integrations and long-lived store accounts. See the <a href="../getting-started/static/README.md" target="_blank" rel="noopener noreferrer">Static Proxies guide</a>.
- **Custom Dedicated Business Proxies**: Independent port maps. Batch-set country and facility per port, then refresh the exit when needed. See <a href="../getting-started/custom/README.md" target="_blank" rel="noopener noreferrer">Custom Proxies</a>.

---

## Quick management

- **Whitelist**: In **Users & Whitelist**, add your crawler cluster or office public IP. Static and Custom Dedicated lines can then connect without a password. Rotating Business Proxies still need User/Pass.
- **Auto-renew**: Before a Static Dedicated line expires, turn on <a href="../getting-started/static/auto-renew.md" target="_blank" rel="noopener noreferrer">Auto-renew</a> on **My Proxies**. On the due date, rent is taken from Available Balance so you keep the same ISP IP.
