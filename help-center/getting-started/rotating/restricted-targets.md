# Restricted targets

Use JoyProxy from a network **outside mainland China**, and send traffic to destinations the catalog and policy allow. <a href="https://www.joyproxy.com/terms.html" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a> also list uses that are not allowed.

## Mainland China

Live FAQ:

- JoyProxy does not sell mainland-China proxy IPs. Those routes are not in the purchase catalog.
- Networks **in** mainland China cannot reach the proxies.
- Proxy exits cannot reach **sites in mainland China**.

Run tests (cURL, <a href="../software/proxy-tester.md" target="_blank" rel="noopener noreferrer">Proxy Tester</a>, browsers) from outside mainland China, and aim at non-mainland destinations. Country, state, and city menus show what is in stock that day — see <a href="location-targeting.md" target="_blank" rel="noopener noreferrer">Location targeting</a> and <a href="../../support/proxy-locations.md" target="_blank" rel="noopener noreferrer">Proxy locations</a>.

## High-risk destination categories

JoyProxy restricts or blocks proxy and scraping traffic to many **sensitive** destinations, including:

| Category | Examples (not exhaustive) |
| --- | --- |
| **Banking and financial institutions** | Retail and corporate banking sites, payment processors, trading platforms, and other regulated financial services |
| **Government websites** | National and local government portals, public-sector authentication systems, and related official services |
| **Email and messaging** | Webmail, mailbox providers, and using proxies to access or automate email infrastructure (including bulk or unsolicited mail) |

These limits exist for compliance, fraud prevention, and abuse control. They apply to **Rotating**, **Static**, **Custom**, and **Datacenter** proxy lines, and to **Web Scraping API** fetches where the same policy applies.

Attempting to bypass these restrictions, or using JoyProxy to access accounts or systems without authorization, violates <a href="https://www.joyproxy.com/terms.html#acceptable" target="_blank" rel="noopener noreferrer">Acceptable Use</a> and can lead to suspension.

## Acceptable use

You agree **not** to use JoyProxy for:

- Illegal or unauthorized purposes, or violating applicable law
- Infringing intellectual property
- Spam, malware, or harmful code
- Attacking or accessing systems without authorization
- Fraud, deception, or misrepresentation
- Harassment, threats, or harmful activities
- Violating others’ privacy rights

Full text: <a href="https://www.joyproxy.com/terms.html#acceptable" target="_blank" rel="noopener noreferrer">Terms → Acceptable Use</a>.

## If a website returns 403

After a successful IP check through the same endpoint (`api.ipify.org` or similar), **403** on the real URL is usually the **website** (or its WAF), not a missing proxy password. The destination may also be in a restricted category above.

See <a href="response-codes.md" target="_blank" rel="noopener noreferrer">Response codes</a> for proxy vs target errors.

## Request access for a legitimate use case

If you have a **documented business need** to reach a specific URL that JoyProxy blocks, contact <a href="../../support/live-chat.md" target="_blank" rel="noopener noreferrer">live chat</a> or open a <a href="../../support/tickets.md" target="_blank" rel="noopener noreferrer">ticket</a>. Include:

- The full target URL (no live passwords)
- What you are trying to do and why a proxy is required
- Your company name and expected volume, if applicable

Compliance will review the request. Approval is not guaranteed.

## Next

<a href="protocols.md" target="_blank" rel="noopener noreferrer">Protocols</a> · <a href="response-codes.md" target="_blank" rel="noopener noreferrer">Response codes</a>
