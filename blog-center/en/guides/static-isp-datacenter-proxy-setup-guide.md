---
title: "Never Mistake Exit IP for Entry Point: Complete Setup Guide for JoyProxy Static ISP & Datacenter Proxies"
description: "Resolve connection timeouts and refused connections on static proxies. Understand the critical difference between Entry Point and Dedicated Exit IP, passwordless IP whitelisting, antidetect browser integration, and free IP replacement."
category: guides
date: 2026-11-05
---

# Never Mistake Exit IP for Entry Point: Complete Setup Guide for JoyProxy Static ISP & Datacenter Proxies

After purchasing JoyProxy **ISP (dedicated static residential) proxies** or **static datacenter proxies**, engineers and operators occasionally encounter an infuriating issue during initial client configuration:

* Every connection test returns `Connection Timed Out` or `Connection Refused`;
* The JoyProxy dashboard displays the static proxy line as active, healthy, and operational;
* Passwords and IP whitelists appear to be entered accurately.

After auditing support tickets across thousands of deployments, we discovered that over 80% of onboarding connection failures trace back to a single conceptual mix-up: **pasting the "Dedicated Exit IP" directly into the client's proxy host field instead of the "Entry Point"**.

This guide explains the two-tier routing architecture behind static proxies, walks through passwordless IP whitelisting versus credential authentication, and details best practices for antidetect browser fingerprint synchronization.

---

## 1. Core Distinction: Entry Point vs. Dedicated Exit IP

Static proxies differ significantly from standalone cloud virtual servers. To ensure DDoS mitigation, traffic acceleration, and 99.9% uptime, JoyProxy decouples the **client ingress layer** from the **public egress layer**:

```text
Your Device (Script / Antidetect Browser)
   │
   ▼ [Connects to Entry Point]
JoyProxy Access Gateway (isp.joyproxy.com:Dedicated Port)
   │
   ▼ [Internal High-Speed Relay]
Dedicated Static Exit Node (Dedicated Exit IP, e.g., 68.195.42.18)
   │
   ▼ [Presents authentic residential / datacenter IP]
Destination Service (Amazon / Stripe / Google / TikTok)
```

In the JoyProxy console under **My Proxies** or **Endpoint Generator**, you will see two distinct networking fields:

1. **Entry Point (Ingress Gateway)**:
   * Formatted as `isp.joyproxy.com:PORT` or `dc.joyproxy.com:PORT` (e.g., `isp.joyproxy.com:10001`).
   * **This is the ONLY host and port your client should connect to.** All proxy authentication and socket handshakes happen at this address.
2. **Dedicated Exit IP (Public Egress)**:
   * Formatted as a standard public IP address (e.g., `68.195.42.18`, registered under AT&T in New York).
   * **This is the public identity that target web platforms see.** This node handles outbound requests, **but it does not expose an open proxy port to the public internet**.

**The Takeaway**: If you enter `68.195.42.18` and port `10001` into your browser or code, your client attempts to initiate a proxy handshake with an external IP that has no listening proxy daemon on that port. The connection inevitably drops or times out.

---

## 2. Two Authentication Modes: IP Whitelist vs. Username/Password

Unlike rotating proxies where thousands of users share entry gateway ports, static proxies allocate a **strictly exclusive, dedicated port** to your line. This enables two flexible connection options:

### Mode 1: Passwordless IP Whitelist (Recommended & Frictionless)
If you operate from a static office IP, home broadband connection, or fixed cloud server (VPS), the IP Whitelist method is the most robust:
1. Log in to the JoyProxy console and navigate to **Users & Whitelist**;
2. In the **IP Whitelist** section, add your current local public IP address;
3. In your client configuration:
   * **Proxy Host**: Enter the Entry Point hostname (e.g., `isp.joyproxy.com`)
   * **Proxy Port**: Enter your assigned dedicated port (e.g., `10001`)
   * **Username / Password**: **Leave both completely blank!**

**Ideal Scenarios**:
* **System-wide Windows / macOS Proxies**: Native OS network panels rarely store HTTP proxy authentication credentials reliably; whitelisting solves this instantly;
* **Playwright & Puppeteer CLI Flags**: Eliminates the risk of exposing sensitive credentials in plain-text `--proxy-server` launch arguments;
* **Docker Containers & Background Services**: Dramatically simplifies configuration file management.

### Mode 2: Username & Password Authentication
If your local internet connection uses a dynamic IP that rotates frequently (such as mobile tethering or remote travel), or if multiple team members access the node from different locations, use standard credentials:
* Configure your sub-user and password under "Users & Whitelist";
* Enter the Entry Point, dedicated port, and your credentials into your client application.

---

## 3. Antidetect Browser Configuration Best Practices

Dedicated static ISP proxies are designed to provide **1:1 exclusive, persistent, and high-trust** environments for sensitive e-commerce seller stores, fintech dashboards, and social media account management.

When integrating with AdsPower, BitBrowser, Hubstudio, or Multilogin, follow these operational rules:

1. **Protocol Selection**: Choose either `HTTP` or `SOCKS5` (JoyProxy static nodes natively support both protocols on the same port);
2. **Automatic Metropolitan Fingerprint Alignment**: Always enable **"Automatically match timezone, language, and coordinates based on detected IP"**:
   * If your assigned exit IP is located in New York (AT&T), your antidetect profile should automatically sync its timezone to `America/New_York (EDT/EST)` and primary language to `en-US`;
   * Avoid running secondary VPN layers over your static ISP proxy, which can trigger WebRTC leaks and reveal dual-routing anomalies.
3. **Strict One-Account, One-IP Isolation**: Dedicate each assigned static port to a single merchant profile. Never cross-log multiple sibling or competing stores across the same static node.

---

## 4. Recovering from Unexpected Flagging: The Free IP Replacement Guarantee

In real-world operations, an accidental browser misconfiguration (such as clearing critical cookies or triggering automated rate limits during script debugging) can occasionally flag an IP on a specific website.

With legacy proxy vendors, recovering from this requires purchasing a completely new IP allocation out of pocket.

JoyProxy eliminates this risk: **Every dedicated static ISP and datacenter proxy includes one free IP replacement during its active billing cycle**:
1. Open the JoyProxy console and go to **My Proxies**;
2. Locate the static line and click **Change IP**;
3. The system provisions a **pristine, brand-new exit IP** within the same city or country zone;
4. **Zero Configuration Downtime**: Your **Entry Point hostname and assigned dedicated port remain completely unchanged**. You do not need to update your scripts, browser profiles, or automation pipelines—simply refresh your session.

---

## 5. Static Proxies vs. Rotating Proxies Configuration Cheat Sheet

| Feature | Static ISP & Datacenter Proxies | Rotating Residential, Mobile & Business |
|---|---|---|
| **Entry Point (Host:Port)** | Dedicated ingress endpoint (e.g., `isp.joyproxy.com:10001`) | Universal gateway: `gate.joyproxy.com:9001` |
| **Exit IP Stability** | **100% dedicated & immutable for the entire term** | Rotates per request or holds 1–30 min sticky sessions |
| **Authentication Options** | **Passwordless IP Whitelist** OR Username/Password | **Username & Password strictly required** (encoded tags) |
| **Billing Model** | Flat rate per IP (Monthly/Annual/Daily), **unmetered data** | Pay-as-you-go per GB, balance never expires |
| **Failover & Replacement** | **One free IP replacement included in console** | Instant automatic failover across residential pool |
| **Primary Use Cases** | E-commerce stores, fintech logins, account security | Large-scale scraping, price intelligence, API testing |

---

**Official Links & Console Resources:**

* Manage Static Nodes & IP Replacement: [JoyProxy My Proxies](https://www.joyproxy.com/admin-dashboard.html)
* Configure Whitelists & Credentials: [JoyProxy Users & Whitelist](https://www.joyproxy.com/admin-user-whitelist.html)
* Dedicated Static ISP Proxies: [JoyProxy ISP Proxies](https://www.joyproxy.com/products/proxy-isp.html) (From $3/mo, dedicated 1:1, unmetered)
* Static Datacenter Proxies: [JoyProxy Datacenter Proxies](https://www.joyproxy.com/products/proxy-datacenter.html) (From $0.40/day, unmetered bandwidth)
* Transparent Pricing Overview: [JoyProxy Pricing Page](https://www.joyproxy.com/pricing.html)
