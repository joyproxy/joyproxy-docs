# Products and network choice

This chapter covers JoyProxy’s role, the four networks, Rotating vs Static Proxies, compliance, trial policy, and common pre-sales questions so you can pick a plan that fits the job.

---

## Platform overview

### What does JoyProxy sell?

JoyProxy is global proxy and collection infrastructure. Two proxy products (plus AI for developers):

1. **Five cloud proxy IP product lines**: covering 200+ countries and 25,000+ cities across **Rotating Proxies** (Residential, Mobile) and **Static Proxies** (Dedicated 4G/5G Mobile Proxy, ISP Static Residential, Datacenter).
2. **Web Scraping API**: hosted collection. No proxy pool or headless browser of your own. It handles anti-bot and JS rendering. Credits are deducted only on HTTP 2xx success.
3. **Free open-source software**: Android Client with per-app routing (no root), Proxy Tester for batch connectivity checks, Proxy Server as a lightweight gateway, and Browser Extension for Chromium.
4. **AI for developers**: OpenClaw Skill, AI MCP, and 24/7 assistant chat.

### How do the five proxy products (2 Rotating + 3 Static) differ?

Different jobs need different IP attributes:

- **Residential**: home-broadband exits. High reputation; target sites treat them as ordinary visitors. Good for large e-commerce collection, multi-account social isolation, SERP, and locale checks.
- **Mobile**: real 4G/5G carrier exits. Many handsets already share a public IP on a cell, so platforms are more tolerant. Good for mobile-app collection, mobile ads verification, and short-video automation.
- **Dedicated 4G/5G Mobile Proxy (Static)**: 100% single-tenant physical 4G/5G SIM slot with unlimited traffic, static mobile stability by default, and on-demand IP switching via console or API. Built for AI accounts, TikTok/social matrices, and strict e-commerce risk controls.
- **ISP (Static Residential) Proxies (Static)**: dedicated carrier ISP static residential lines with unlimited traffic. Good for antidetect browsers, e-commerce accounts, B2B portals, and overseas finance/tax APIs.
- **Datacenter**: cloud-facility exits. High bandwidth, low latency, low unit cost, high concurrency. Good when the target is lenient: bulk requests, index monitoring, high-throughput sync.

### How do Rotating Proxies and Static Proxies differ?

| Product | Billing | Line | How IP changes | Typical use |
| :--- | :--- | :--- | :--- | :--- |
| **Rotating Proxies** | Per GB used; traffic does not expire | Shared pool; new IP per request or sticky session | Automatic per request, or 1–30 minute sticky session | Crawlers, high concurrency, bulk checks |
| **Static Proxies** | Per IP × plan period; no traffic/concurrency cap | Dedicated line for the plan (Entry Point stays) | Region locked; **Change IP** / **New IP** in the console for a new exit | Long-lived identity, B2B portal access, high-throughput stable links |
| **Dedicated 4G/5G Mobile Proxy (4G/5G Static)** | Per port × rental period (2/7/14/30d); unlimited traffic | Exclusive physical 4G/5G SIM slot for stable static mobile sessions | Static by default; switch to a fresh carrier IP on demand via console or API | AI anti-ban, social media matrices, strict e-commerce risk controls |

> **What each network sells**:
> - Residential Proxies: Rotating only;
> - Mobile Proxies: both **Rotating Mobile (per GB)** and **Dedicated 4G/5G Mobile Proxy (physical 4G/5G SIM, unlimited)**;
> - ISP Proxies: Static only. No Rotating traffic packs;
> - Datacenter Proxies: Static only. No Rotating traffic packs.

---

## Choosing a product

### How is Web Scraping API different from proxy IP?

- **Proxy IP**: you get `host:port`. You own protocol, auth, headers, cookies, captcha, and retries.
- **Web Scraping API**: hosted fetch. You send a URL. The service picks an exit, handles common bot defenses, runs JavaScript, and returns HTML or structured JSON.
- **Rule of thumb**: if the job is “give me this page” and you do not want to run a proxy pool and crawler, use Web Scraping API. If you need TCP/SOCKS control, a desktop app, or to log into a site yourself, use proxy IP.

### Rotating Mobile Proxies vs. Dedicated 4G/5G Mobile Proxy — what is the difference?

Both exit through real 4G/5G cellular carriers, but differ in **shared per-GB pool vs. exclusive physical SIM hardware**:
- **Mobile Proxies (Rotating)**: shared 4G/5G pool billed per GB (from $4.00/GB, traffic never expires) with per-request or sticky rotation — ideal for mobile scraping, ad verification, and bulk checks.
- **Dedicated 4G/5G Mobile Proxy (Static)**: 100% exclusive physical 4G/5G SIM card slot billed by rental period (2/7/14/30d) with **unlimited traffic**, static by default, and on-demand IP switch via console or API — ideal for AI accounts, social media matrices, and strict e-commerce stores.

### How many countries? Can I choose a city or carrier (ASN) before buying Static Proxies?

The network covers 200+ countries and regions and 25,000+ cities.
- **Rotating Proxies**: target country (ISO-2), state/province, city, and ASN/carrier in **Endpoint generator**.
- **Dedicated 4G/5G Mobile Proxy**: covers 17 countries and 31 major 4G/5G carriers (e.g., US AT&T, Verizon, T-Mobile, UK Vodafone); select the exact country and carrier at checkout.
- **Static Proxies (ISP / Datacenter)**: the checkout page lets you choose **country, state/province, city, and specific carrier/ASN** (such as AT&T, Verizon, Comcast) directly from the live dropdown options. Only **an exact single IP address or a specific `/24` subnet** cannot be hand-picked before checkout — submit a support ticket if you need to check a specific subnet range in advance.

### Which protocols are supported? Do you provide `.ovpn` (OpenVPN) or WireGuard files?

Cloud nodes support **HTTP**, **HTTPS**, and **SOCKS5** (TCP/UDP). Browsers and most crawlers use HTTP/HTTPS; use SOCKS5 when you need socket-level forwarding.
- **No `.ovpn` / OpenVPN / WireGuard configs**: JoyProxy provides standard proxy endpoints (`host:port` with username/password or IP whitelist), not VPN profiles.

### What is the bandwidth? Do Static Proxies include traffic or require re-extraction?

- **Reference bandwidth**: Rotating Proxies ~**10–20 Mbps** per connection; Dedicated 4G/5G Mobile Proxy run at real local 4G/5G carrier speeds with **unlimited data**; Static ISP Proxies ~**10–100 Mbps**; Static Datacenter Proxies ~**20–300 Mbps** (actual speed varies by client region and target host). For live streaming or guaranteed ultra-low latency / high dedicated bandwidth, submit a ticket to apply for **Private Proxies**.
- **Static traffic & extraction**: Static Proxies are billed by IP × duration with **unlimited traffic and concurrency (no extra GB pack required)**. After purchase, you get a fixed `host:port` directly in **My Proxies** — you do not need to re-extract endpoints like Rotating Proxies.

### Need a long-lived IP: ISP Proxies or Datacenter Proxies?

- **ISP Proxies**: when the target requires a commercial ASN (supplier systems that reject residential broadband).
- **Datacenter Proxies**: for public collection, API forwarding, and performance tests where hosting ASN is acceptable and cost/throughput matter more.
- If you need frequent IP changes, use Rotating Residential or Rotating Mobile Proxies — not Static.

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

### How can I test the proxies before buying?
You can start with the smallest plan to verify connectivity and performance with no long-term commitment:
- **Rotating Proxies (Residential, Mobile)**: Purchase a 1 GB starter pack in the console (Residential from $3.50, Mobile from $4.00; traffic never expires) to test live endpoints immediately.
- **ISP (Static Residential) / Datacenter Proxies**: Purchase a single IP on a 1-day plan to verify exit IP quality and stability before extending.
- **Dedicated 4G/5G Mobile Proxy**: Start with a **2-day** rental (from $25, unlimited data). Provisioned on physical SIM hardware within 24 hours; rental starts upon delivery.

### Has the $5 new-user welcome credit ended?
Yes, the $5 sign-up credit promotion has officially ended, and we no longer distribute registration credits. To test our proxies, please purchase a starter package as described above.

### Can I talk to someone before I buy?

Yes. **Live Chat** is in the bottom-right of every marketing page (assistant plus human). For unusual or large buys, leave a contact in chat or sign in and open **Tickets**.

### Volume contracts? White-label / OEM?

- **Volume**: custom contracts, tiered discounts, and bank transfer. Open **Tickets**, include company details and monthly volume.
- **White-label / OEM**: if you wrap JoyProxy into your own product, open a ticket or email the partnerships team.
