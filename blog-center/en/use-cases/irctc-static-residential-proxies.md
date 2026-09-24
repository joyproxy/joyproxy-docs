---
title: "Your IRCTC Script Died at 10:00 AM. The Proxy Was the Problem."
description: "Tatkal windows kill sessions on VPN and datacenter IPs. How Indian developers keep IRCTC logins alive with JoyProxy Static Dedicated Residential Proxies."
category: use-cases
legacyUrl: https://www.joyproxy.com/blog/irctc-static-residential-proxies.html
---

# Your IRCTC Script Died at 10:00 AM. The Proxy Was the Problem.

JoyProxy Team. We sell proxy IP. This is for developers who already have a booking script or agent tool, and need a _stable Indian home IP_ so the session does not fall over at Tatkal time. It is not a captcha-bypass kit, and it will not mint confirmed berths out of thin air. Follow [IRCTC](https://www.irctc.co.in/) terms. A proxy only changes how your traffic leaves the internet — not the rulebook.

If you have ever sat with IRCTC open at **10:00 AM** (AC Tatkal) or **11:00 AM** (non-AC), you already know the mood. Phone on the table. UPI app unlocked. Passenger list copied. The clock hits the hour, the page spins, login drops, Captcha comes back, and somewhere a family WhatsApp group is asking “ticket aaya kya?”

A lot of developers in Pune, Bengaluru, Hyderabad, and Delhi NCR then do the obvious thing: put the script behind a cheap VPN or a cloud VPS. Locally it works. At Tatkal window it dies. That is not because your Playwright code forgot a sleep. IRCTC is scoring the **exit IP**. Overseas VPN ranges and datacenter ASNs look like bots. A rotating proxy is even worse for a logged-in flow — OTP goes to one IP, checkout leaves from another, session expired.

The product that matches this job is [JoyProxy Static Dedicated Residential Proxies](https://www.joyproxy.com/products/proxy-residential.html): one Indian household broadband identity, same `host:port` for the whole rental, city locked at purchase.

![JoyProxy infographic: IRCTC Tatkal peak-hour problems versus a stable Indian residential proxy session](https://www.joyproxy.com/blog/images/irctc-tatkal-joyproxy.png) Tatkal at 10 / 11 AM is a traffic spike, not a coding contest. Keep login, OTP, and checkout on one Indian residential identity.

## Why VPNs and datacenter IPs fail on IRCTC

IRCTC Next Generation is a logged-in, OTP-backed, high-abuse portal. Festival weeks (Diwali, Chhath, Holi, summer vacations) make it worse. Three patterns show up again and again:

  * **Foreign / VPN ranges:** the site has seen these subnets for years. “Please try after some time” is often the polite version of a block.
  * **Cloud and hosting IPs:** AWS, GCP, DigitalOcean, and generic datacenter proxies are easy to fingerprint. Speed is fine. Trust is not.
  * **IP rotation mid-session:** you logged in from IP A, filled passengers, then the next request left from IP B. Cookie is still there. Identity is not. Session drops and Captcha loops follow.



Rotating residential traffic is the right tool for _public_ pages you do not log into. Tatkal is the opposite: one user, one session, a few intense minutes. You want the same Indian home IP from “login” to “payment initiated.”

## Why Static Dedicated Residential Proxies fit this flow

JoyProxy names this line **Static Dedicated Residential Proxies** (dashboard tab: Static; API product type: `long-term`). It is a real home-broadband IP, leased to you, not a shared rotating pool.

  * **Fixed identity:** one `host:port` for the plan duration. Login, availability, passenger form, and payment hop look like the same household.
  * **India targeting:** pick country **India** at checkout. Optionally lock a state or city (Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, Kolkata, Pune, and other covered metros).
  * **Dedicated, not shared:** that port is yours. You are not sitting on an IP that fifty other Tatkal scripts burned an hour ago.
  * **HTTP, HTTPS, and SOCKS5:** Python `requests`, Playwright, Selenium, Java, or a local gateway can all speak it.
  * **City locked at purchase:** the geo does not jump because someone else in a rotating pool refreshed. That is the whole point.



JoyProxy also sells Business/ISP static and datacenter static. For IRCTC-style consumer logins, start with **residential**. Use business static only if you truly need an office/ISP ASN. Skip datacenter for this target.

Line| Session identity| IRCTC logged-in flow  
---|---|---  
Rotating residential (pay per GB)| Changes often| Wrong — OTP and checkout will disagree  
**Static dedicated residential**|  Fixed for the rental| **Right default**  
Custom residential ports| Fixed, or timed rotation| Only if you run many isolated slots and keep rotation _off_  
Datacenter static| Fixed hosting ASN| Usually blocked or challenged  
  
## What you actually gain

  * **The session can survive the 10:00 crush.** Same egress through login → OTP → review → pay. You still compete for seats. You stop competing with “this IP looks like a Singapore VPN.”
  * **Fewer cheap 403s from hosting ASNs.** Home broadband is what a normal IRCTC user looks like.
  * **Clean ops.** One script or one agent login maps to one IP. When something breaks, you know which line to test.
  * **You can rent by the day.** If you only care about a long weekend or a wedding rush, you do not have to buy a year.



What you do _not_ gain: a confirmed 3A on Rajdhani because the proxy is magic. Inventory is still inventory. Captcha and OTP are still IRCTC’s. Follow their rules; we are not going to document how to dodge them.

## Pricing (USD, check the live page)

Static residential is billed **per IP × duration** , not per GB. Authoritative numbers live on [pricing.html](https://www.joyproxy.com/pricing.html) — do not screenshot this table as a forever price list.

What you buy| Residential static (typical published rate)  
---|---  
1 IP, monthly (1–99 IPs)| From **$5 / IP / month**  
100+ IPs| From **$4.50 / IP / month**  
500+ IPs| From **$4.00 / IP / month**  
Daily / weekly / 180-day / annual| Shorter plans exist; daily is a fraction of the monthly rate (about **$1 / IP / day** on the current factor)  
New-user credit| **$5** after email verification — usable on static lines, so you can trial a day or chip away at a month  
  
Protocols (HTTP / HTTPS / SOCKS5), endpoint generator, and API are included. No extra “India surcharge” on the public price list — you pick India as the geo, not a separate SKU.

## How to buy an India static line

  1. [Create an account](https://www.joyproxy.com/register.html) and verify email. Claim the $5 credit if you are new.
  2. Open [Purchase → Static](https://www.joyproxy.com/admin-purchase.html?tab=long-term).
  3. Set network type to **Residential** (this is Static Dedicated Residential Proxies, not mobile, not datacenter).
  4. Search **India**. Add a state or city if you want the IP to sit in a specific metro.
  5. Pick duration (daily is enough for a dry run; monthly if Tatkal is a weekly job) and quantity (start with **1**).
  6. Checkout → **Buy Now**. The allocation shows up under [My Proxies](https://www.joyproxy.com/admin-my-orders.html).



Product page for the family: [Residential Proxies](https://www.joyproxy.com/products/proxy-residential.html). Static mode is also linked from [Static Residential Proxies](https://www.joyproxy.com/products/proxy-long-term.html).

## How to use it in a script

Three steps, same as any other JoyProxy static line. Do this _before_ Tatkal morning, not at 9:59.

### 1\. Whitelist & Users

On [Whitelist & Users](https://www.joyproxy.com/admin-authorization.html), add at least one of:

  * **IP whitelist** — your server’s _public_ IPv4 (not `192.168.x.x`), or
  * **Username / password** — for laptops that change ISP IPs, this is less painful.



Either method is enough. See [whitelist and credentials setup](https://www.joyproxy.com/blog/getting-started/whitelist-credentials-setup/) if this is your first order.

### 2\. Generate the endpoint

Open [Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html) → **Static Proxies → Web generator** → pick the allocation → **Generate now**. You get a stable `host:port`.

API equivalent:
    
    
    GET https://api.joyproxy.com/v1/extract-long?token=YOUR_TOKEN&allocation;_id=ID&format;=crlf

### 3\. Prove the exit is Indian, then point your client at it

Do not debug IRCTC until `ipify` (or any IP lookup) shows an Indian residential address through the proxy.
    
    
    import requests
    
    PROXY = "http://USER:PASS@HOST:PORT"  # whitelist-only servers can omit USER:PASS
    proxies = {"http": PROXY, "https": PROXY}
    r = requests.get("https://api.ipify.org?format=json", proxies=proxies, timeout=30)
    print(r.text)

SOCKS5 is `socks5h://USER:PASS@HOST:PORT` (the `h` keeps DNS on the proxy side). Playwright accepts `proxy: { server, username, password }`. Reuse that _same_ endpoint for the whole booking session. Do not rotate it after login.

### Mistakes that look like “IRCTC is down”

  * **407** from the proxy: whitelist or password, not IRCTC. Fix auth. Do not buy another IP yet.
  * **403** after the tunnel works: the _site_ refused the request. Datacenter ASN and country mismatch are the usual suspects — this is why residential India exists.
  * Whitelisting a LAN address. Whitelist & Users needs the public IP your ISP gave the machine.
  * Letting the static plan expire mid-week. When the rental ends, the identity changes. Renew before the next Tatkal Monday.



## FAQ

### Can I just use rotating residential? It is cheaper per GB.

Cheaper, and wrong for this. Rotating is for scrapes where each request can be a different house. IRCTC remembers the session. Pay for one static IP.

### How many IPs do I need?

One dedicated IP per concurrent identity. Two agent logins on one IP is how you correlate accounts. Five scripts, five ports.

### Which Indian city should I pick?

If the IRCTC account, phone, or billing story sits in a city, match it. If you do not care, pick a well-covered metro and stay there. Do not hop Mumbai → Chennai every morning.

### Will JoyProxy confirm my ticket?

No. We give you a stable Indian residential exit. Confirmed / RAC / waitlist is still IRCTC.

### How do I test the proxy without touching IRCTC?

The free [Proxy Tester](https://www.joyproxy.com/products/tester.html) (HTTP / SOCKS5 TCP / UDP) or the Python snippet above. Confirm India, then wire your own tool.

## Start here

If Tatkal is part of your week, stop sending that traffic through a German VPN and hoping. Rent one **Static Dedicated Residential** line in India, authorize it, generate the endpoint once, and keep that identity through the window.

[Residential product page](https://www.joyproxy.com/products/proxy-residential.html) · [Buy static](https://www.joyproxy.com/admin-purchase.html?tab=long-term) · [Live pricing](https://www.joyproxy.com/pricing.html) · [$5 new-user credit](https://www.joyproxy.com/register.html)
