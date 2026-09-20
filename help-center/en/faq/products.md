# Products and network choice

This chapter covers JoyProxy’s role, the four networks, the three proxy products, compliance, new-user credit, and common pre-sales questions so you can pick a plan that fits the job.

---

## Platform overview

### What does JoyProxy sell?

JoyProxy is global proxy and collection infrastructure. Three product lines (plus AI for developers):

1. **Cloud proxy IP on four networks**: Residential, Mobile, Business / ISP, and Datacenter across 200+ countries and regions and 25,000+ cities. Products are traffic-billed **Rotating Proxies**, dedicated **Static Proxies**, and per-port **Custom Proxies** that can change region.
2. **Web Scraping API**: hosted collection. No proxy pool or headless browser of your own. It handles anti-bot and JS rendering. Credits are deducted only on HTTP 2xx success.
3. **Free open-source software**: Android Client with per-app routing (no root), Proxy Tester for batch connectivity checks, Proxy Server as a lightweight gateway, and Browser Extension for Chromium.
4. **AI for developers**: OpenClaw Skill, AI MCP, and 24/7 assistant chat.

### How do Residential, Mobile, Business / ISP, and Datacenter differ?

Different jobs need different IP attributes:

- **Residential**: home-broadband exits. High reputation; target sites treat them as ordinary visitors. Good for large e-commerce collection, multi-account social isolation, SERP, and locale checks.
- **Mobile**: real 4G/5G carrier exits. Many handsets already share a public IP on a cell, so platforms are more tolerant. Good for mobile-app collection, mobile ads verification, and short-video automation.
- **Business / ISP**: commercial broadband or dedicated ISP lines. Datacenter-like throughput with a clean ISP ASN. Good for long-lived B2B portals, supplier systems, and overseas finance/tax APIs.
- **Datacenter**: cloud-facility exits. High bandwidth, low latency, low unit cost, high concurrency. Good when the target is lenient: bulk requests, index monitoring, high-throughput sync.

### How do Rotating Proxies, Static Proxies, and Custom Proxies differ?

| Product | Billing | Line | How IP changes | Typical use |
| :--- | :--- | :--- | :--- | :--- |
| **Rotating Proxies** | Per GB used; traffic does not expire | Shared pool; new IP per request or sticky session | Automatic per request, or 1–30 minute sticky session | Crawlers, high concurrency, bulk checks |
| **Static Proxies** | Per IP × plan period; no traffic/concurrency cap | Dedicated line for the plan (Entry Point stays) | Region locked; **Change IP** / **New IP** in the console for a new exit | Social warm-up, cross-border stores, long-lived identity |
| **Custom Proxies** | Per port × plan period; no traffic/concurrency cap | Delivered as ports (assign a region after purchase) | Change country/city in the same network; timed or manual IP rotation | Automation that needs a stable port but flexible geo |

> **What each network sells**:
> - Residential: Rotating, Static, and Custom;
> - Business / ISP: Rotating, Static, and Custom;
> - Mobile: Rotating only (traffic). No Static or Custom;
> - Datacenter: Static and Custom. No traffic-billed Rotating.

---

## Choosing a product

### What is Rotating Business / ISP, and how is it different from Rotating Residential?

Rotating Business Proxies combine a commercial ISP line with rotation. The exit ASN looks like enterprise Commercial ISP, while you still rotate per session or per request. Billing is per GB.

If you need frequent IP changes but the target (some B2B procurement portals, tax/compliance sites) rejects residential ASN, Rotating Business / ISP is the fit.

### How is Web Scraping API different from proxy IP?

- **Proxy IP**: you get `host:port`. You own protocol, auth, headers, cookies, captcha, and retries.
- **Web Scraping API**: hosted fetch. You send a URL. The service picks an exit, handles common bot defenses, runs JavaScript, and returns HTML or structured JSON.
- **Rule of thumb**: if the job is “give me this page” and you do not want to run a proxy pool and crawler, use Web Scraping API. If you need TCP/SOCKS control, a desktop app, or to log into a site yourself, use proxy IP.

### How many countries? Can I target a city?

The network covers 200+ countries and regions and 25,000+ cities.

In **Endpoint generator** (Rotating) or on **Purchase Proxies** (Static / Custom), you can set country (ISO-2), state/province, and city. Live stock is whatever the purchase and generator pages show that day.

### Which protocols?

Cloud nodes support **HTTP**, **HTTPS**, and **SOCKS5** (TCP/UDP). Browsers and most crawlers use HTTP/HTTPS. Use SOCKS5 when you need socket-level forwarding.

### Static Residential vs Custom Residential? What is Static Business / ISP for?

- **Static Residential Proxies**: the country and city stay fixed (for example a Los Angeles store). Cheaper when geo never moves.
- **Custom Residential Proxies**: you keep the same port but move it between countries or cities, or rotate the exit IP on a timer. About **$1 extra per port per month** vs matching Static.
- **Static Business / ISP**: when the target requires a commercial ASN (supplier systems that reject residential broadband). Prefer Static Business / ISP.

### Can you guarantee the target will never block us?

No. A proxy changes the public exit and geo. Modern sites also look at request rate, behavior, browser fingerprint (Canvas/WebGL/Audio), header consistency, and account actions.

Keep concurrency and rate reasonable, and treat fingerprint isolation as a separate layer.

---

## Compliance and new-user credit

### Can I connect from mainland China?

**No.** For compliance and international backbone rules:

1. Networks in mainland China cannot reach JoyProxy proxy servers (the connection is blocked or the region is unsupported);
2. JoyProxy exits cannot reach sites and services in mainland China.

Use a server, VPS, or office network **outside** mainland China, and only for compliant overseas work.

### Can I buy a mainland China proxy IP?

**No.** The region catalog does not include mainland China.

### Is there a free trial? How do I claim welcome credit?

New accounts can evaluate the network:

1. **$5.00 welcome credit**: after you register and activate email, sign in and claim **$5.00** once from Overview or the prompt.
2. **No card required**: you do not bind a card or recharge first. Spend the credit on Rotating traffic or Static lines.
3. **Terms**:
   - Credit is for in-console purchases only. Not withdrawable or transferable;
   - Use it within 24 hours of claiming. Unused credit is reclaimed if there is no purchase in that window;
   - One claim per real user. Multi-account, automated signup, or fingerprint spoofing to farm credit gets the account frozen.
4. **Enterprise trial**: on **Purchase Proxies**, click **Apply for free trial**, describe the use case and volume, and a manager can open a test quota.

### Can I talk to someone before I buy?

Yes. **Live Chat** is in the bottom-right of every marketing page (assistant plus human). For unusual or large buys, leave a contact in chat or sign in and open **Tickets**.

### Volume contracts? White-label / OEM?

- **Volume**: custom contracts, tiered discounts, and bank transfer. Open **Tickets**, include company details and monthly volume.
- **White-label / OEM**: if you wrap JoyProxy into your own product, open a ticket or email the partnerships team.
