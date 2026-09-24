---
title: "407 vs 403: HTTP Status Codes Proxies Actually Return"
description: "407 is the proxy. 403 is usually the site. A field guide to 401, 429, 502, 503, 504, and SOCKS5 errors that are not HTTP at all."
category: technical
legacyUrl: https://www.joyproxy.com/blog/proxy-http-status-codes.html
---

# 407 vs 403: HTTP Status Codes Proxies Actually Return

JoyProxy Team. We sell proxy IP. This is a field guide for the codes people paste into support tickets — not an RFC, and not a reason to buy another SKU before you know _who_ sent the number.

A status code through a proxy is easy to misread. Your client talks to **the proxy hop** first, then (if that hop allows it) to **the website**. Both sides can return 4xx/5xx. Mixing them up is how teams spend GB debugging a wrong password, or buy a new residential pack when the site already hates the ASN.

Ask one question before you change product: **did the proxy refuse you, or did the target refuse the request that already went out?**

## Cheat sheet

Code| Usually from| What it actually means| First fix  
---|---|---|---  
**407** | Proxy | Proxy Authentication Required — missing or wrong credentials, or CONNECT without `Proxy-Authorization`. | Fix username/password or whitelist. Do _not_ buy more traffic.  
**401** | Target | The website wants _its_ login, not the proxy’s. | Cookies, API key, or session for the site. Proxy is already working.  
**403** | Target (or WAF) | Forbidden. Common: hosting ASN, geo mismatch, bot score, missing headers. The proxy tunnel often succeeded. | Confirm egress IP first, then line type (residential vs datacenter), not a new password.  
**429** | Either | Too Many Requests — proxy QPS limit _or_ the site’s rate limit. | Slow down. If every IP gets 429 instantly, it may be the proxy account. If only some URLs, it is the target.  
**502** | Proxy / tunnel | Bad Gateway — hop could not get a valid response from the next hop or origin. | Retry; check the endpoint is still live; test with a tiny URL.  
**503** | Either | Unavailable. A self-hosted gateway may reject you here; a site may be overloaded or blocking. | Read the body. JoyProxy’s open-source gateway can return 503 when auth says no.  
**504** | Proxy | Gateway Timeout — CONNECT or upstream took too long. | Increase timeout; try another IP; heavy JS pages may need a fetch API, not more GB.  
**200** \+ empty / CAPTCHA | Target | HTTP “success.” The page is still unusable. | This is not a 407. See [Scraper Debugging](https://www.joyproxy.com/solution-debug.html).  
  
## 407 — the proxy said no

**407 Proxy Authentication Required** is almost never the website. The hop in the middle wants proof you are allowed to _use the proxy_.

Typical causes we see:

  * No username/password on the client (browser, `requests`, Playwright).
  * Typo, expired credential, or mixing API token with proxy user/pass.
  * HTTPS CONNECT without sending `Proxy-Authorization` — some stacks only attach it on the first HTTP request, not on CONNECT.
  * A self-hosted [JoyProxy Server](https://www.joyproxy.com/products/proxy-server.html) in password mode: clients that skip credentials get **407** by design.



If Chrome or curl prints 407, stop rotating IPs. Re-check the pair from the dashboard (see [whitelist and credentials](https://www.joyproxy.com/blog/getting-started/whitelist-credentials-setup/)). A 407 that you “fix” by buying GB is still a 407.
    
    
    curl -x http://USER:PASS@HOST:PORT https://api.ipify.org
    # 407 → credentials / CONNECT auth, not the target site

## 403 — the site (usually) said no

**403 Forbidden** after a successful CONNECT means your request _left_ through the proxy and the origin (or its CDN/WAF) refused it. The proxy did its job. Buying a second rotating pack of the _same_ datacenter ASN often repeats the 403.

Common patterns:

  * Hosting/cloud ASN on a consumer site — see [residential vs datacenter for scraping](https://www.joyproxy.com/blog/technical/residential-vs-datacenter-scraping/).
  * Country/city of the egress IP does not match what the page expects.
  * Headers, TLS fingerprint, or cookie jar look like a bot. Status is still 403; the proxy is not “broken.”



Prove the hop first: if `api.ipify.org` through the same endpoint returns an IP, 403 on the real URL is a **target** problem. Change one variable at a time — that is the whole point of [Scraper Debugging](https://www.joyproxy.com/solution-debug.html).

## 401 is not 407

Libraries collapse both into “auth error,” which is how people paste 401 into a proxy ticket. **401** is the _website_ (or its API) asking for a session. **407** is the _proxy_. If the same URL works in a logged-in browser without a proxy, and fails with 401 through the proxy, you dropped cookies — you did not lose proxy credentials.

## 429 — slow down, then decide who is counting

Rate limits exist on both sides. A proxy account may cap new connections per second; a site may cap you per IP or per session. If _every_ endpoint on that account 429s — including a tiny IP-check URL — look at the proxy plan. If IP-check is 200 and only the catalog pagination 429s, it is the target. Either way, retries without a backoff just buy more of the same code.

## 502, 503, 504 — the hop in the middle

These are “something downstream of your client failed,” not “wrong password” (that was 407).

  * **502** — bad or empty response from the next hop. Dead port, bad upstream, or a gateway that gave up.
  * **503** — unavailable. Could be the origin, or a gateway that maps a deny to 503 (JoyProxy Server can do that when the auth API refuses a connection).
  * **504** — timeout. Heavy pages, slow ISP path, or a client timeout shorter than the proxy’s.



Retry once on a known-good URL (IP check). If that also 502/504s, the endpoint is sick — extract a new one or test the port. If IP check is 200 and only the target 504s, you are waiting on the site, not on “more residential.”

## SOCKS5 does not speak HTTP status

SOCKS5 failures are **SOCKS reply codes** (auth failed, connection not allowed, host unreachable). Your Python `ProxyError` might look like an HTTP 407 even when the protocol is SOCKS. Confirm you are actually speaking SOCKS5, not an HTTP proxy URL pointed at a SOCKS port — see [HTTP vs SOCKS5](https://www.joyproxy.com/blog/technical/http-socks5-proxy-protocols/).

A page that loads in Chrome can still fail SOCKS5 TCP or UDP. That is why we ship a desktop [Proxy Tester](https://www.joyproxy.com/products/tester.html): prove the port before you scale a crawler. Chrome success is not a SOCKS5 test.

## A short decision tree

  1. Can you fetch a tiny IP URL through the same endpoint? If **no** and you see **407** → credentials. If connection refused / timeout → dead host or wrong protocol.
  2. IP URL is **200** but the real page is **403** / empty / CAPTCHA → target or ASN. Try residential if you were on hosting; do not rotate credentials.
  3. IP URL is **200** but you get **401** on the API → site session, not proxy auth.
  4. **429** everywhere → back off, then check which layer is counting.
  5. **502 / 504** on IP URL → replace the endpoint, then retest.



Paste the status, the protocol (HTTP vs SOCKS5), and one IP-check result into [AI Assistant](https://www.joyproxy.com/products/ai-customer-service.html) if you want a JoyProxy-specific snippet. Buy traffic after the sample works — not to invent a diagnosis.

Free desktop tester for HTTP / SOCKS5 TCP / UDP — check the port before you spend GB.

[Get Proxy Tester](https://www.joyproxy.com/products/tester.html)
