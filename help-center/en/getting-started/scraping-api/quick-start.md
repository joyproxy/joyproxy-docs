# Web Scraping API · Quick start

This guide walks you through buying Credits, copying your Scraping API Token, testing in the console, and calling the API from code.

> **What is Web Scraping API?**  
> Send JoyProxy a request with the target URL. The platform rotates proxies, renders the page, and bypasses common anti-bot checks, then returns HTML. **Credits are charged only when the fetch succeeds.**

---

## Step 1: Buy credit packs

1. Log in to the <a href="https://www.joyproxy.com/admin-overview.html" target="_blank" rel="noopener noreferrer">JoyProxy console</a> and open **<a href="https://www.joyproxy.com/admin-purchase.html" target="_blank" rel="noopener noreferrer">Purchase Proxies</a>** in the left menu.
2. Open the **Web Scraping API** tab.
3. Choose a preset pack (for example **$5 / 50K credits**) or enter a custom amount (minimum 10K credits).
4. Choose a payment method: **Balance**, **Credit Card**, **PayPal**, **Apple Pay**, **Google Pay**, **WeChat Pay**, **USDT (TRC20)**, or **UPI**.
5. After payment, Credits are added immediately. **They never expire**.

---

## Step 2: Get your Scraping API Token

After you buy Credits, JoyProxy creates a **Scraping API Token** for your account:

1. Open the **<a href="https://www.joyproxy.com/admin-web-unblocker.html" target="_blank" rel="noopener noreferrer">Web Scraping API</a>** console in the left menu.
2. Switch to the **API Center** tab (or open **Documentation**).
3. In the **Scraping API Token** field, click **Copy**.

> **Token safety and rotation**  
> - **Product-scoped**: Scraping API Token is for Web Scraping API only. It cannot generate proxy endpoints or place OpenAPI Center orders.  
> - **Rotate if leaked**: If you think the token leaked, click **Rotate** in API Center. The old token stops working immediately.

---

## Step 3: Try a request in API Center

1. On **<a href="https://www.joyproxy.com/admin-web-unblocker.html" target="_blank" rel="noopener noreferrer">Web Scraping API</a>**, open the **API Center** tab.
2. In **Target URL**, enter the page to fetch (for example `https://example.com`).
3. Click **Send request**.
4. Below the form you will see the response, HTTP status, and **Credits used**.

---

## Step 4: Call the API from code

Use your Scraping API Token in your own code. For visual parameter setup and generated samples, see <a href="first-fetch.md" target="_blank" rel="noopener noreferrer">Test a fetch in API Center</a>. For the full parameter dictionary, see <a href="https://www.joyproxy.com/admin-unblocker-documentation.html" target="_blank" rel="noopener noreferrer">Web Scraping API Documentation</a>.

```bash
# Simple cURL GET test
curl "https://api.joyproxy.com/v1/fetch?token=YOUR_SCRAPING_TOKEN&url=https%3A%2F%2Fexample.com"
```

---

## 3-second troubleshooting

- **401 Invalid Token**: confirm you copied the **Scraping API Token** (not proxy Username/Password or the Master User Token).
- **402 Insufficient Credits**: Credits are used up. Buy more on <a href="buy-credits.md" target="_blank" rel="noopener noreferrer">Buy credit packs</a>.
- **429 Too Many Requests**: in-flight requests exceeded your Concurrency limit. See <a href="buy-credits.md" target="_blank" rel="noopener noreferrer">Concurrency rules</a>.
