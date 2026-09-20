# Mobile Proxies console

Mobile Proxies use real 4G / 5G carrier exits worldwide. Mobile ASN IPs have high anti-bot trust and rarely trigger captchas. They fit Instagram and TikTok operations, mobile ad verification, and localized mobile search.

In the left sidebar **Proxies** group, click **Mobile**:

<a href="https://www.joyproxy.com/admin-proxy-mobile.html" target="_blank" rel="noopener noreferrer">Open the Mobile console</a> · <a href="https://www.joyproxy.com/products/proxy-mobile.html" target="_blank" rel="noopener noreferrer">Mobile product page</a>

---

## Rotating-only product

Unlike Residential, cellular exits change with the tower. The **Mobile** console is **Rotating Mobile Proxies** billed by GB only. There is no long-lived dedicated port SKU:

- Billing: buy a prepaid traffic pack; GB is deducted from actual proxy traffic until the pack is empty;
- Access: a global mobile gateway. Target country and city. Rotate per request or keep a sticky session.

---

## Common tasks

### 1. Buy Mobile traffic
Open the **Buy** tab and pick a Rotating Mobile Proxies pack for your throughput. Network details: <a href="../getting-started/rotating/network-types.md" target="_blank" rel="noopener noreferrer">Network types</a>.

### 2. Set authorization
Open **Users & Whitelist** and complete authorization first. The rotating mobile gateway requires User/Pass. Create and manage credentials here. To call extract APIs from a fixed server without embedding a token, add the server IP to **IP Whitelist**. Full rules: <a href="../getting-started/rotating/authentication.md" target="_blank" rel="noopener noreferrer">Users & Whitelist</a>.

### 3. Generate endpoints
On **Endpoint generator**, pick the target carrier geo. The page builds a gateway address with country targeting and an **API URL**. See <a href="../getting-started/rotating/extract-ip.md" target="_blank" rel="noopener noreferrer">Generate endpoints</a>.

### 4. Watch remaining traffic
On **Usage**, check used and remaining GB on Mobile packs. For always-on crawls, enable <a href="../getting-started/rotating/auto-buy-traffic.md" target="_blank" rel="noopener noreferrer">Auto-buy traffic</a> on **My Proxies**. When remaining traffic falls to your threshold, JoyProxy buys another pack from account balance so the job does not stall.
