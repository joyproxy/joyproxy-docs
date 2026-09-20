# Social and ads proxy choice

For social operations, multi-account matrices, and ads, network stability and reputation matter. Use this as a working map of network type vs. job.

---

## 1. Network type by scenario

| Scenario | Recommended network | Why |
| :--- | :--- | :--- |
| **Long-lived core accounts** (company main account, official store) | **Static Residential Proxies** | Fixed country and city, dedicated IP, looks like a resident visitor. |
| **Mobile apps and short-video testing** | **Rotating Mobile Proxies** (4G/5G) | Real carrier-base exits, strong reputation. |
| **Large-scale collection and interaction** | **Rotating Residential Proxies** (session-based) | A different home-broadband node each time, so many accounts do not share one IP. |
| **Business APIs and ads verification** | **Static Business / ISP Proxies** | Enterprise broadband, stable path, commercial ASN. |

---

## 2. Operating rules

1. **Keep geo stable**:
   - Do not jump country or city every few minutes;
   - Keep a long-lived account in one location — prefer Static Proxies;
2. **Match timezone and language**:
   - Set OS or browser timezone to the proxy node’s zone;
   - Language should match that location;
3. **Isolate environments**:
   - Bind each account environment to its own Static Proxies line. Do not share one IP across accounts.
