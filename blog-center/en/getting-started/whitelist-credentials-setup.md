---
title: "JoyProxy Whitelist, Credentials, and Your First Proxy Endpoint"
description: "Before traffic flows, JoyProxy needs to know which client IPs may generate proxy endpoints and how apps authenticate. This walkthrough covers both paths."
category: getting-started
legacyUrl: https://www.joyproxy.com/blog/whitelist-credentials-setup.html
---

# JoyProxy Whitelist, Credentials, and Your First Proxy Endpoint

JoyProxy separates **who may ask for an IP** (whitelist / account security) from **how applications authenticate to the proxy** (username/password or tokenized API). Skipping either step is the most common reason a first generation fails.

## Step 1 — Register and verify email

Create an account at [register.html](https://www.joyproxy.com/register.html) and complete email activation. New users receive **$5 free credit** after verification (no credit card required)—enough to run real tests on a small traffic package.

## Step 2 — Add your client IP to the whitelist

In the customer dashboard, open **Whitelist & Users** and add the **public egress IP** of the machine that will call JoyProxy endpoint APIs or use the web generator—not your LAN address if you are behind NAT. You can register up to ten whitelist entries per account (see [Terms](https://www.joyproxy.com/terms.html)).

If your scraper runs on a cloud VM, whitelist the VM’s outbound IP. If it runs on a laptop on home Wi-Fi, whitelist what `curl ifconfig.me` returns from that laptop.

## Step 3 — Choose authentication for your app

Most integrations use either:

  * **Proxy username + password** generated in the dashboard (apps connect directly to the proxy host with these credentials).
  * **API token** for programmatic `/extract` calls that return endpoint details.



Tokens and credentials are secrets—store them in environment variables, not in public repositories.

## Step 4 — Generate an endpoint

From the dashboard endpoint generator, pick product type (short-term, long-term, or custom), region if applicable, and copy the HTTP/HTTPS/SOCKS5 endpoint. Alternatively call `https://api.joyproxy.com/v1/extract` with your token (documented in the logged-in OpenAPI Center).

## Step 5 — Verify with a minimal request
    
    
    curl -x http://USER:PASS@HOST:PORT https://api.ipify.org

The response should show an IP consistent with your chosen region. If you receive authentication errors, re-check whitelist IP and credential pairs—they are evaluated together.

**Security**

Whitelist changes take effect quickly; remove old office IPs when staff leave. Rotate API tokens if a CI job leaked one into build logs.

**Ready to get started?** [Explore JoyProxy Residential Proxies](https://www.joyproxy.com/products/proxy-residential.html) · [View live pricing](https://www.joyproxy.com/pricing.html) · [Claim your $5 new-user credit](https://www.joyproxy.com/register.html)
