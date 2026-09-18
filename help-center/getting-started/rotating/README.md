# Rotating proxy

Rotating proxies send your traffic through JoyProxy’s **shared gateway**. Host and port never change. **Country, city, and session** are encoded in a long **generated username**. Each request can take a new exit IP, or you can hold a **sticky session** (1–30 minutes) so several requests share the same IP.

Sold on **Residential**, **Mobile**, and **Business / ISP**. For a dedicated `host:port` that lasts days or months, use <a href="../static/README.md" target="_blank" rel="noopener noreferrer">Static</a> or <a href="../custom/README.md" target="_blank" rel="noopener noreferrer">Custom</a>.

## How it works

```text
Your app  →  gate.joyproxy.com:9001  →  exit IP in the region you selected
                 ▲
                 └── username = generated string (geo + session)
                     password = Username/Password on Users & Whitelist
```

| Piece | What it is |
| --- | --- |
| Gateway | Always `gate.joyproxy.com` port `9001` |
| Protocols | HTTP and SOCKS5. Either protocol can open **HTTPS websites**. Details: <a href="protocols.md" target="_blank" rel="noopener noreferrer">Protocols</a>. |
| Generated username | Copy from <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a>. Do not edit. |
| Password | The **Username/Password** you created under <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a> |
| Billing | Per **GB** of traffic, while the pack is still valid |

## In this chapter

Follow in order the first time. Later, jump from the sidebar.

1. <a href="quick-start.md" target="_blank" rel="noopener noreferrer">Quick start</a>
2. <a href="purchase.md" target="_blank" rel="noopener noreferrer">Choose a network and buy traffic</a>
3. <a href="auto-buy-traffic.md" target="_blank" rel="noopener noreferrer">Auto-buy traffic</a>
4. <a href="authentication.md" target="_blank" rel="noopener noreferrer">Authentication methods</a>
5. <a href="generate-endpoints.md" target="_blank" rel="noopener noreferrer">Generate endpoints</a>
6. <a href="location-targeting.md" target="_blank" rel="noopener noreferrer">Location targeting</a>
7. <a href="sticky-sessions.md" target="_blank" rel="noopener noreferrer">Sticky sessions</a>
8. <a href="first-request.md" target="_blank" rel="noopener noreferrer">Make your first request</a>
9. <a href="code-examples.md" target="_blank" rel="noopener noreferrer">Code examples</a>
10. <a href="apps-and-browsers.md" target="_blank" rel="noopener noreferrer">Use in apps and browsers</a>
11. <a href="protocols.md" target="_blank" rel="noopener noreferrer">Protocols</a>
12. <a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">Restricted targets</a>
13. <a href="response-codes.md" target="_blank" rel="noopener noreferrer">Response codes</a>
14. <a href="usage-and-orders.md" target="_blank" rel="noopener noreferrer">Usage and orders</a>

## First request (after you have user + password)

```bash
curl -x http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

A public IP in the response means the gateway accepted the credentials. To change country, **generate a new username** in Endpoints — do not rewrite the old one by hand.

## Networks

| Network | Typical use | Product |
| --- | --- | --- |
| Residential | Everyday collection, account-style sites, flexible geo | <a href="https://www.joyproxy.com/products/proxy-residential.html" target="_blank" rel="noopener noreferrer">Residential</a> |
| Mobile | Carrier 4G/5G exits, app and ad checks | <a href="https://www.joyproxy.com/products/proxy-mobile.html" target="_blank" rel="noopener noreferrer">Mobile</a> |
| Business / ISP | ISP-branded ASN, B2B portals | <a href="https://www.joyproxy.com/products/proxy-business.html" target="_blank" rel="noopener noreferrer">Business / ISP</a> |

The **console steps are the same**. Only the network type at <a href="https://www.joyproxy.com/admin-purchase.html?tab=short-term" target="_blank" rel="noopener noreferrer">Purchase</a> and in Endpoints changes. Each network has its own per-GB price — compare on <a href="https://www.joyproxy.com/pricing.html" target="_blank" rel="noopener noreferrer">Pricing</a>.

## Related

- <a href="quick-start.md" target="_blank" rel="noopener noreferrer">Quick start</a> — gateway, sample code, dashboard walkthrough
- <a href="auto-buy-traffic.md" target="_blank" rel="noopener noreferrer">Auto-buy traffic</a> · <a href="usage-and-orders.md" target="_blank" rel="noopener noreferrer">Usage and orders</a>
- <a href="protocols.md" target="_blank" rel="noopener noreferrer">Protocols</a> · <a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">Restricted targets</a> · <a href="response-codes.md" target="_blank" rel="noopener noreferrer">Response codes</a>
- <a href="https://www.joyproxy.com/pricing.html" target="_blank" rel="noopener noreferrer">Pricing</a> · <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>
- Console tabs: <a href="../../user-console/residential-proxies.md" target="_blank" rel="noopener noreferrer">Residential</a> · <a href="../../user-console/mobile-proxies.md" target="_blank" rel="noopener noreferrer">Mobile</a> · <a href="../../user-console/business-isp-proxies.md" target="_blank" rel="noopener noreferrer">Business / ISP</a>
