---
title: "How to Estimate Short-Term Proxy Traffic (and Pick a GB Package)"
description: "Pay-per-GB sounds simple until HTML page weight, retries, and images inflate usage. Here is a worksheet grounded in JoyProxy’s published tiers."
category: guides
legacyUrl: https://www.joyproxy.com/blog/estimate-proxy-traffic-costs.html
---

# How to Estimate Short-Term Proxy Traffic (and Pick a GB Package)

Short-term JoyProxy residential proxies bill by **bytes transferred through the proxy** , not by number of requests. Underestimating page weight is how teams buy a 10 GB pack and exhaust it in a weekend.

## Start with one honest page fetch

Measure a representative URL through the proxy (not curl alone on a stripped API). Include HTML, scripts, images, and JSON calls the browser would trigger. Multiply by daily page volume, then by retention (traffic packages are valid one year from purchase on JoyProxy).

## Published short-term tiers (USD)

Authoritative numbers live on [pricing.html](https://www.joyproxy.com/pricing.html). As of this article:

Package size| Effective $/GB (indicative)  
---|---  
1 GB (base)| $5.00  
10 GB| $4.50  
50 GB| $3.00  
100 GB| $2.50  
1,000 GB| $1.50  
10,000 GB| $1.00  
  
Volume discounts are built into larger packs—you pay the pack price upfront, not a separate “discount coupon.”

## Example calculation

Suppose each product page averages **1.2 MB** through the proxy (with assets), you scrape **50,000 pages/month** , and retries add **10%** overhead:

  * Raw: 50,000 × 1.2 MB ≈ 60 GB/month
  * With retries: ≈ 66 GB/month



A 100 GB pack covers roughly one month at that rate and lands near the $2.50/GB tier—cheaper per GB than stacking multiple 10 GB purchases.

## What does not count the way people expect

  * Failed connections that never transfer body data may still consume small amounts—monitor the dashboard.
  * Downloading large media through the proxy counts fully; consider blocking images in your scraper if you only need text.
  * Long-term dedicated IPs use **duration billing** , not GB—do not mix formulas.
