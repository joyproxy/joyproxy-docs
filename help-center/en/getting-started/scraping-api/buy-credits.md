# Buy credit packs and concurrency

Web Scraping API is billed with prepaid credit packs. Credits pay for cloud compute, proxy IPs, and headless rendering on each fetch.

---

## Buy credit packs

1. Log in to the JoyProxy console and open **<a href="https://www.joyproxy.com/admin-purchase.html" target="_blank" rel="noopener noreferrer">Purchase Proxies</a>** in the left menu.
2. Switch to the **Web Scraping API** tab (or open the <a href="https://www.joyproxy.com/admin-web-unblocker.html?view=buy" target="_blank" rel="noopener noreferrer">Web Scraping API buy page</a>).
3. Choose a pack:
   - **Preset packs**: for example $5 / $20 / $50 / $100.
   - **Custom pack**: enter any credit amount (minimum 10,000 credits).
4. Complete payment: **Balance**, **Credit Card**, **PayPal**, **Apple Pay**, **Google Pay**, **WeChat Pay**, **USDT (TRC20)**, or **UPI**.
5. **Credit validity**: purchased Credits **never expire**.

---

## Concurrency rules

Concurrency controls how many requests can run at the same time. Credit billing is separate — see **Credit balance → Details** in the console.

1. **Active / limit**:
   The console value (for example `5 / 20`) is in-flight requests versus your allowed slots.
2. **How the limit is set**:
   Your Concurrency limit is set by the **highest credit pack you purchased**. It stays at that tier while you still have Credits — consuming Credits does not lower the Concurrency tier.
3. **When you exceed the limit (HTTP 429)**:
   When active usage reaches the limit, additional requests receive HTTP `429 Too Many Requests` until a slot frees up.
4. **Zero balance reset**:
   - If Credit balance reaches zero, API access pauses and the Concurrency limit resets.
   - After balance reaches zero, your next purchase sets a new Concurrency limit based on **that pack only** — not your previous highest pack.
