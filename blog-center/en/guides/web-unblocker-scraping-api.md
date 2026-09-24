---
title: "Web Scraping API: AI-Powered Page Fetching Without Proxy Plumbing"
description: "Send a URL, get HTML or JSON back. JoyProxy handles anti-bot bypass, proxy rotation, and optional JS rendering — you pay only when the fetch succeeds."
category: guides
legacyUrl: https://www.joyproxy.com/blog/web-unblocker-scraping-api.html
---

# Web Scraping API: AI-Powered Page Fetching Without Proxy Plumbing

Most teams that scrape the open web go through the same loop: buy proxies, tune headers, rotate sessions, spin up headless Chrome, hit a CAPTCHA, rewrite the retry logic, repeat. It works — until the target changes a rule on a Tuesday night and your pipeline is down again.

**JoyProxy Web Scraping API** is our AI-powered answer to that loop. You send a URL; we return the page (HTML, markdown, or JSON). Blocks, fingerprints, proxy selection, and optional JavaScript rendering happen on our side. You do not wire a proxy list into Scrapy or Playwright — you get the result, ready for LLM and ETL pipelines.

## Not a proxy product (but it uses proxies)

JoyProxy still sells residential, mobile, business, and datacenter lines for teams that want full control. The Web Scraping API sits one level above that.

  * **Rotating proxies:** you manage the client, retries, and anti-bot stack.
  * **Web Scraping API:** you manage one HTTP call to `GET /v1/fetch`.



If your job is “give me this product page in Germany” or “pull this SERP without building a browser farm,” the API path is usually faster to ship and cheaper to maintain.

## Pay when it works

Credits are deducted **only on a successful fetch**. Timeouts, hard blocks, and empty failures do not burn balance. That matters when you are probing a new site and half your first batch is expected to fail while you tune parameters.

Packs start at **$5**. Credits do not expire. Each pack tier sets your concurrency limit while you still have credits — it does not drop as you consume balance.

## What costs more than a plain GET

A simple datacenter fetch is **1 credit**. Optional flags add cost because they use more infrastructure:

Request type| Credits (success only)  
---|---  
Standard fetch| 1  
`render=true` (JavaScript rendering)| 5  
`super=true` (residential / mobile exit)| 10  
Both render + super (tough sites)| 25  
  
Full tables and pack sizes live on the [Web Scraping API product page](https://www.joyproxy.com/products/web-unblocker.html#pricing).

## Parameters worth knowing early

You do not need every knob on day one. These four cover most first integrations:

  * **`url`** — the page you want (required).
  * **`render=true`** — when the content loads via JavaScript, not in the initial HTML.
  * **`super=true`** — when the site treats datacenter traffic harshly and you need a residential or mobile signal.
  * **`geoCode=us`** — country-level exit (150+ codes) for localized pricing, SERPs, or compliance checks.



Multi-step flows (login → cart → checkout) can use `sessionId` to keep the same exit path across calls. Custom headers and cookies are supported for logged-in pages — see the parameter table on the product page.

## Separate token, on purpose

The Web Scraping API uses its own **Scraping API Token** , scoped to `/v1/fetch`. It is not the same token you use to extract proxy endpoints or call account APIs. That separation keeps production fetch jobs away from billing and purchase credentials.

After you buy credits, open the console → **API Center** , paste a test URL, and copy the sample curl. The token shown there is what your scripts should use.

## When to stick with proxies instead

The Web Scraping API is a bad fit if you need:

  * Raw TCP/SOCKS routing into your own browser or app (use proxy lines).
  * A fixed IP whitelisted by a partner for weeks (look at static or custom ports).
  * Full control over every request byte for compliance review (you may still prefer self-managed proxies).



Many teams run **both** : Web Scraping API for high-churn public page collection, and dedicated proxy ports for account operators who log into dashboards.

## Getting started in ten minutes

  1. Sign in at [login.html](https://www.joyproxy.com/login.html) (or register — new accounts still get the [$5 credit](https://www.joyproxy.com/blog/getting-started/five-dollar-credit-onboarding/) after email verification).
  2. Open [Web Scraping API console](https://www.joyproxy.com/admin-web-unblocker.html) → buy the smallest credit pack (or apply account balance).
  3. Run one URL in **API Center** — try a simple HTML page first, then retry with `render=true` if the body is empty.
  4. Copy the curl example into your scheduler, LLM pipeline, or ETL job.



Product overview, pricing grid, and API notes: [products/web-unblocker.html](https://www.joyproxy.com/products/web-unblocker.html). For proxy-only workflows, our [rotating vs static vs custom guide](https://www.joyproxy.com/blog/guides/rotating-static-custom-proxies-guide/) still applies.
