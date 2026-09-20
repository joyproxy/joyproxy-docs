# Multi-account isolation with Static Proxies

For store operations and multi-account social work, isolation is the core of account safety.

This page covers how platforms link accounts, and why you need **an independent browser profile plus Static Proxies** to keep environments apart.

---

## 1. How platforms link accounts

Risk systems usually compare:

1. **Network (IP location and history)**:
   - Several accounts log in from the same public exit IP in a short window;
   - Shared, flagged, or heavily reused datacenter IPs;
2. **Device fingerprint (hardware)**:
   - Matching Canvas hash, WebGL, AudioContext, screen size, and font list;
3. **Cookies and storage**:
   - Cookies or LocalStorage leaking across profiles.

---

## 2. Why rotating IPs are a poor fit for long-lived accounts

Rotating Proxies (new IP per request or a short sticky window) work well for crawlers. They do not work well for a long-lived shop or main account:

- A real person or office usually stays in one city. Large IP jumps trigger security checks;
- Shared rotating pools do not guarantee a dedicated IP over time.

---

## 3. What Static Proxies do

1. **Dedicated for the plan period**: that line and exit IP are yours; nobody else shares them;
2. **ISP-grade reputation**: exits come from real broadband or commercial lines with reputable ASN;
3. **Stable Entry Point, optional refresh**: hostname and port stay the same. If you need a new exit IP, you can request one without rebuilding the client config.

---

## 4. Standard isolation layout

- **Software**: one antidetect / fingerprint browser profile per account (separate cookies and hardware fingerprint);
- **Network**: bind each profile to its own JoyProxy Static Proxies line;
- **Result**: accounts are isolated on both exit IP and device fingerprint.
