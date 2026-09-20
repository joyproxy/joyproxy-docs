# Restricted targets and compliance

To keep the network healthy and compliant, JoyProxy strictly blocks some networks and destinations.

---

## Mainland China restrictions

Under platform policy:
1. **No mainland China exit IPs** (Purchase Proxies and Endpoint generator do not offer mainland China nodes).
2. **You cannot connect to** `gate.joyproxy.com:9001` **from a mainland China network** (use an overseas server or another compliant network).
3. **Exit IPs must not access sites in mainland China** (including `.cn` domains and servers hosted in mainland China).

---

## High-risk categories

These site categories are usually restricted or blocked through the proxy:

| Restricted category | Typical examples (not exhaustive) | Why |
| --- | --- | --- |
| **Banks and financial institutions** | Online banking, payment gateways, securities platforms, crypto exchanges | Reduce fraud, money laundering, and unauthorized transfers |
| **Government and public institutions** | Government portals, public-sector SSO, tax systems | Reduce scanning and attacks on public infrastructure |
| **Mail and messaging systems** | Bulk webmail logins, SMTP/IMAP of mail providers | No spam (SPAM) or credential stuffing |

See the full acceptable-use rules in **<a href="https://www.joyproxy.com/terms.html" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>**.
