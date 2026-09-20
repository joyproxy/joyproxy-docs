# Network types and how to choose

JoyProxy offers several proxy network types. IP source, trust, and cost differ, so pick a network before you buy Rotating Proxies.

---

## How the four networks differ

| Network type | IP source and architecture | Trust and anti-block | Typical use cases |
| --- | --- | --- | --- |
| **Residential Proxies** | Real home broadband (for example Comcast, AT&T, Verizon). The ISP assigns the IP to a household. | **Very high trust**. Targets treat the visitor as a normal home user, so CAPTCHA and IP blocks are much less common. | Web data collection, e-commerce price and competitor checks, social account ops, ticket or limited-drop shopping. |
| **Mobile Proxies** | 4G/5G cellular IPs assigned to phones by carriers such as Verizon and Vodafone. | **Highest anti-block rate**. CGNAT means thousands of real phones share one IP, so sites rarely ban it. | Mobile app testing and scraping, mobile ad verification and anti-fraud checks, high-risk retries. |
| **Business / ISP Proxies** | Hosted on enterprise / data-center lines, but connected with commercial broadband / ISP credentials from a real carrier. | **High trust + low latency**. Residential-like trust (not flagged as a hosting ASN) with dedicated-line speed and stability. | B2B portals and enterprise systems, high-value long-lived business accounts, large-file transfer and continuous sync. |
| **Datacenter Proxies** | IPs from hosting providers such as AWS and Google Cloud. | **High throughput and low cost**, but easier to fingerprint (hosting ASN). | Large-scale public data collection with little anti-bot, search-engine monitoring, performance and load tests. |

---

## Networks available for Rotating Proxies

Rotating Proxies (billed per GB, gateway `gate.joyproxy.com:9001`) cover these three networks:

1. **Rotating Residential Proxies**
   - **What you get**: a large home-IP pool in 200+ countries, billed by traffic, strong value.
   - **Best for**: most general web crawlers, data collection, and day-to-day automation.

2. **Rotating Mobile Proxies**
   - **What you get**: real 4G/5G cellular IPs that stay highly successful under concurrency.
   - **Best for**: strict anti-bot sites, mobile app APIs, or ad-impression checks.

3. **Rotating Business / ISP Proxies**
   - **What you get**: commercial ISP lines with data-center speed and residential-like IP trust.
   - **Best for**: enterprise system integration, B2B collection, and work that needs both speed and stealth.

> **Note**: Datacenter Proxies are currently sold mainly as <a href="../static/README.md" target="_blank" rel="noopener noreferrer">Static Proxies</a> and <a href="../custom/README.md" target="_blank" rel="noopener noreferrer">Custom Proxies</a>.

---

## Decision flow

1. **Strict anti-bot / mobile-only** ➔ start with **Rotating Mobile Proxies**.
2. **General crawling / price checks / high concurrency** ➔ start with **Rotating Residential Proxies** (best value).
3. **Enterprise integration / speed plus trust** ➔ start with **Rotating Business / ISP Proxies**.

Next: go to **<a href="purchase.md" target="_blank" rel="noopener noreferrer">Purchase traffic</a>** and pick a matching traffic pack.
