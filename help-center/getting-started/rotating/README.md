# Rotating proxy

Rotating proxies send your traffic through JoyProxy’s **shared gateway**. Host and port never change. **Country, city, and session** are encoded in a long **generated username**. Each request can take a new exit IP, or you can hold a **sticky session** (1–30 minutes) so several requests share the same IP.

Sold on **Residential**, **Mobile**, and **Business / ISP**. For a dedicated `host:port` that lasts days or months, use [Static](../static/README.md) or [Custom](../custom/README.md).

## How it works

```text
Your app  →  gate.joyproxy.com:9001  →  exit IP in the region you selected
                 ▲
                 └── username = generated string (geo + session)
                     password = from Whitelist & Users
```

| Piece | What it is |
| --- | --- |
| Gateway | Always `gate.joyproxy.com` port `9001` |
| Protocols | HTTP, HTTPS, SOCKS5 |
| Generated username | Copy from [Endpoints](https://www.joyproxy.com/admin-ip-extraction-center.html). Do not edit. |
| Password | The credential password you created under [Whitelist & Users](https://www.joyproxy.com/admin-authorization.html) |
| Billing | Per **GB** of traffic, while the pack is still valid |

## In this chapter

Follow in order the first time. Later, jump from the sidebar.

1. [Quick start](quick-start.md)
2. [Choose a network and buy traffic](purchase.md)
3. [Authentication methods](authentication.md)
4. [Generate endpoints](generate-endpoints.md)
5. [Location targeting](location-targeting.md)
6. [Sticky sessions](sticky-sessions.md)
7. [Make your first request](first-request.md)
8. [Code examples](code-examples.md)
9. [Use in apps and browsers](apps-and-browsers.md)

## First request (after you have user + password)

```bash
curl -x http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

A public IP in the response means the gateway accepted the credentials. To change country, **generate a new username** in Endpoints — do not rewrite the old one by hand.

## Networks

| Network | Typical use | Product |
| --- | --- | --- |
| Residential | Everyday collection, account-style sites, flexible geo | [Residential](https://www.joyproxy.com/products/proxy-residential.html) |
| Mobile | Carrier 4G/5G exits, app and ad checks | [Mobile](https://www.joyproxy.com/products/proxy-mobile.html) |
| Business / ISP | ISP-branded ASN, B2B portals | [Business / ISP](https://www.joyproxy.com/products/proxy-business.html) |

The **console steps are the same**. Only the network type at [Purchase](https://www.joyproxy.com/admin-purchase.html?tab=short-term) and in Endpoints changes.

## Related

- [Quick start](quick-start.md) — gateway, sample code, dashboard walkthrough
- [Pricing](https://www.joyproxy.com/pricing.html) · [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html)
- Console tabs: [Residential](../../user-console/residential-proxies.md) · [Mobile](../../user-console/mobile-proxies.md) · [Business / ISP](../../user-console/business-isp-proxies.md)
