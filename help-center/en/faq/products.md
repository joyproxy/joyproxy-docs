# Products and network choice

This chapter covers JoyProxy’s role, the five networks, Rotating vs Static Proxies, compliance, trial policy, and common pre-sales questions so you can pick a plan that fits the job.

---

## Platform overview

### What does JoyProxy sell?

JoyProxy is global proxy and collection infrastructure. Two proxy products (plus AI for developers):

1. **Cloud proxy IP on five networks**: Residential, Mobile, Business, ISP, and Datacenter across 200+ countries and regions and 25,000+ cities. Products are traffic-billed **Rotating Proxies** and dedicated **Static Proxies**.
2. **Web Scraping API**: hosted collection. No proxy pool or headless browser of your own. It handles anti-bot and JS rendering. Credits are deducted only on HTTP 2xx success.
3. **Free open-source software**: Android Client with per-app routing (no root), Proxy Tester for batch connectivity checks, Proxy Server as a lightweight gateway, and Browser Extension for Chromium.
4. **AI for developers**: OpenClaw Skill, AI MCP, and 24/7 assistant chat.

### How do Residential, Mobile, Business, ISP, and Datacenter differ?

Different jobs need different IP attributes:

- **Residential**: home-broadband exits. High reputation; target sites treat them as ordinary visitors. Good for large e-commerce collection, multi-account social isolation, SERP, and locale checks.
- **Mobile**: real 4G/5G carrier exits. Many handsets already share a public IP on a cell, so platforms are more tolerant. Good for mobile-app collection, mobile ads verification, and short-video automation.
- **Business Proxies**: office and commercial broadband, billed by GB with rotation. Good when you need a commercial ASN and frequent IP changes.
- **ISP Proxies**: dedicated carrier ISP lines (Static). Good for long-lived B2B portals, supplier systems, and overseas finance/tax APIs.
- **Datacenter**: cloud-facility exits. High bandwidth, low latency, low unit cost, high concurrency. Good when the target is lenient: bulk requests, index monitoring, high-throughput sync.

### How do Rotating Proxies and Static Proxies differ?

| Product | Billing | Line | How IP changes | Typical use |
| :--- | :--- | :--- | :--- | :--- |
| **Rotating Proxies** | Per GB used; traffic does not expire | Shared pool; new IP per request or sticky session | Automatic per request, or 1–30 minute sticky session | Crawlers, high concurrency, bulk checks |
| **Static Proxies** | Per IP × plan period; no traffic/concurrency cap | Dedicated line for the plan (Entry Point stays) | Region locked; **Change IP** / **New IP** in the console for a new exit | Long-lived identity, B2B portal access, high-throughput stable links |

> **What each network sells**:
> - Residential Proxies: Rotating only;
> - Business Proxies: Rotating only;
> - Mobile Proxies: Rotating only;
> - ISP Proxies: Static only. No Rotating traffic packs;
> - Datacenter Proxies: Static only. No Rotating traffic packs.

---

## Choosing a product

### What is Business Proxies, and how is it different from Residential Proxies?

Business Proxies combine a commercial ISP line with rotation. The exit ASN looks like enterprise Commercial ISP, while you still rotate per session or per request. Billing is per GB.

If you need frequent IP changes but the target (some B2B procurement portals, tax/compliance sites) rejects residential ASN, Business Proxies is the fit.

### How is Web Scraping API different from proxy IP?

- **Proxy IP**: you get `host:port`. You own protocol, auth, headers, cookies, captcha, and retries.
- **Web Scraping API**: hosted fetch. You send a URL. The service picks an exit, handles common bot defenses, runs JavaScript, and returns HTML or structured JSON.
- **Rule of thumb**: if the job is “give me this page” and you do not want to run a proxy pool and crawler, use Web Scraping API. If you need TCP/SOCKS control, a desktop app, or to log into a site yourself, use proxy IP.

### How many countries? Can I target a city?

The network covers 200+ countries and regions and 25,000+ cities.

In **Endpoint generator** (Rotating) or on **Purchase Proxies** (Static), you can set country (ISO-2), state/province, and city. Live stock is whatever the purchase and generator pages show that day.

### Which protocols?

Cloud nodes support **HTTP**, **HTTPS**, and **SOCKS5** (TCP/UDP). Browsers and most crawlers use HTTP/HTTPS. Use SOCKS5 when you need socket-level forwarding.

### Need a long-lived IP: ISP Proxies or Datacenter Proxies?

- **ISP Proxies**: when the target requires a commercial ASN (supplier systems that reject residential broadband).
- **Datacenter Proxies**: for public collection, API forwarding, and performance tests where hosting ASN is acceptable and cost/throughput matter more.
- If you need frequent IP changes, use Rotating Proxies on Residential, Mobile, or Business — not Static.

### Can you guarantee the target will never block us?

No. A proxy changes the public exit and geo. Modern sites also look at request rate, behavior, browser fingerprint (Canvas/WebGL/Audio), header consistency, and account actions.

Keep concurrency and rate reasonable, and treat fingerprint isolation as a separate layer.

---

## Compliance and trial policy

### Can I connect from mainland China?

**No.** For compliance and international backbone rules:

1. Networks in mainland China cannot reach JoyProxy proxy servers (the connection is blocked or the region is unsupported);
2. JoyProxy exits cannot reach sites and services in mainland China.

Use a server, VPS, or office network **outside** mainland China, and only for compliant overseas work.

### Can I buy a mainland China proxy IP?

**No.** The region catalog does not include mainland China.

### Has the $5 new-user welcome credit ended? How can I test the proxies?

Yes. The previous promotional campaign offering a $5 sign-up credit has officially ended. We no longer distribute free registration credits.

To test our proxy quality and start your integration, we provide the following options:

1. **Low-barrier entry packages**: You can get started with as little as 1 GB with no long-term commitment (e.g., Residential Proxies start at $3.50 / GB, and Mobile Proxies at $4.00 / GB).
2. **Tiered recharge bonus**: We provide balance bonuses on account top-ups — +10% from $100, +20% from $1,000, and +30% from $10,000. Bonus credits are automatically applied to your account balance upon payment and have no expiration date.
3. **Enterprise & High-volume testing**: If you are a business user with large-scale proxy requirements, you can submit a test request via the **Request a free trial** button in the console or open a support ticket with your company domain and project use case. Our sales team will evaluate and provide a dedicated testing quota.

### Can I talk to someone before I buy?

Yes. **Live Chat** is in the bottom-right of every marketing page (assistant plus human). For unusual or large buys, leave a contact in chat or sign in and open **Tickets**.

### Volume contracts? White-label / OEM?

- **Volume**: custom contracts, tiered discounts, and bank transfer. Open **Tickets**, include company details and monthly volume.
- **White-label / OEM**: if you wrap JoyProxy into your own product, open a ticket or email the partnerships team.
