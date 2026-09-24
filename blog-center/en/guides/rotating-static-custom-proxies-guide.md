---
title: "Rotating, Static, and Custom Residential Proxies: Which Line Fits Your Stack?"
description: "JoyProxy offers four proxy network families—Residential, Mobile, Business/ISP, and Datacenter—each with modes matched to your workflow (rotating traffic, static lines, or custom ports)."
category: guides
legacyUrl: https://www.joyproxy.com/blog/rotating-static-custom-proxies-guide.html
---

# Rotating, Static, and Custom Residential Proxies: Which Line Fits Your Stack?

JoyProxy groups residential proxy products into three lines: **Rotating Residential Proxies** , **Static Residential Proxies** , and **Custom Residential Proxies**. The names describe behavior, not marketing tiers—rotation frequency, session stability, and how much control you need per port.

If you are new to the dashboard, the parent menu stays **Proxy IP** (covering all proxy types today). Inside it you will see **Purchase Proxies** , **My Proxies** , **Whitelist & Users**, and **Endpoint generator** —the same workflow for every line.

## Rotating Residential Proxies (pay per GB)

Use this when each request or short-lived session should look like a different household connection.

  * **Billing:** prepaid traffic packages (GB).
  * **Behavior:** generate fresh endpoints on demand; IPs rotate on the provider side.
  * **Best for:** web scraping, price monitoring, ad verification, large-scale crawls.
  * **Geo:** country / state / city via geoname IDs at generation time.



Start on the [Rotating Residential Proxies](https://www.joyproxy.com/proxy-products.html) product page or open [Purchase Proxies → Rotating](https://www.joyproxy.com/admin-purchase.html?tab=short-term) after login.

## Static Residential Proxies (dedicated ports by duration)

Use this when a platform should see the _same_ egress identity for days or weeks.

  * **Billing:** per IP / port by duration (daily, weekly, monthly, annual).
  * **Behavior:** stable host:port for the rental period; city locked at purchase.
  * **Best for:** marketplace seller accounts, logged-in dashboards, partner portals that whitelist IPs.
  * **Geo:** pick country (and optionally province / city) before checkout.



See [Static Residential Proxies](https://www.joyproxy.com/proxy-products.html) or [Purchase Proxies → Static](https://www.joyproxy.com/admin-purchase.html?tab=long-term).

## Custom Residential Proxies (multi-port + optional rotation)

This line sits between pure rotation and pure fixation: multiple ports in one order, flexible geo per allocation, and **optional timed rotation** (e.g. every N minutes) while staying in the same region.

  * **Billing:** priced per port × duration plan (similar unit economics to static).
  * **Behavior:** run several isolated slots (stores, channels, QA environments) under one account.
  * **Best for:** multi-store ops, regional QA, automation that needs predictable geo with controlled refresh.



Details: [Custom Residential Proxies](https://www.joyproxy.com/proxy-products.html) and [Purchase Proxies → Custom](https://www.joyproxy.com/admin-purchase.html?tab=custom-ip).

## Quick comparison

Line| Primary cost driver| Session identity| Typical operator  
---|---|---|---  
Rotating| GB transferred| Changes frequently| Data / growth engineering  
Static| Rental duration| Fixed for the plan| E-commerce / account ops  
Custom| Ports × duration| Fixed or timed rotation| Multi-region product teams  
  
## Whitelist & Users and endpoint generation are shared

All three lines use the same [Whitelist & Users](https://www.joyproxy.com/admin-authorization.html) step first—IP whitelist and/or username/password. Then open [Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html) (or the API in [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html)) for the product tab you purchased.

**API note**

Integration endpoints still use `short-term`, `long-term`, and `custom-ip` product types in JSON—the public names above map to those values. No breaking change for existing scripts.

## Common mistakes

  * Logging into a high-value seller account through a **rotating** pool that changes every few minutes.
  * Buying **static** ports for a crawler that only needs anonymous page fetches (you will overpay for stability you do not use).
  * Expecting **custom** ports to bill like GB traffic—they follow port-based plans, not pay-per-GB.



Most mature teams run **rotating pools for collectors** and **static or custom ports for operators** who sign in to accounts. If you are still on the $5 new-user credit, validate one rotating generation and one static or custom trial port before scaling—see our [$5 credit onboarding guide](https://www.joyproxy.com/blog/getting-started/five-dollar-credit-onboarding/).

**Ready to get started?** [Explore JoyProxy Residential Proxies](https://www.joyproxy.com/products/proxy-residential.html) · [View live pricing](https://www.joyproxy.com/pricing.html) · [Claim your $5 new-user credit](https://www.joyproxy.com/register.html)
