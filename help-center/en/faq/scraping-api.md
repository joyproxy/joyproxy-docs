# Web Scraping API

This chapter covers how Web Scraping API works, when Credits are charged, parameters, concurrency, and common developer questions.

---

## How it works

### What is Web Scraping API vs a traditional proxy?

Web Scraping API is a **hosted REST fetch** for collection jobs.

- **Traditional proxy**: you get a tunnel. You run Puppeteer / Playwright / Selenium, defeat JS and WAF, forge headers, and retry on timeouts.
- **Web Scraping API**: send an HTTP request with the target URL. The service picks an exit, uses a real-looking fingerprint, handles common anti-bot, runs client JS, and returns HTML or JSON.

### Why “pay only on success”? How billing works

JoyProxy charges **only for successful requests**:

- A usable 2xx body deducts Credits.
- Target blocks, timeouts, failed challenges, or network blips **do not deduct Credits**.
- Purchased Credits **do not expire**.

---

## Credits and packs

### How do I buy Credits? What packs exist?

Sign in, open **Web Scraping API**, go to **Buy**, and pay with **Balance**. Seven preset packs plus custom volume (**10,000 Credits** minimum):

- **Micro**: $5.00 / 10,000 Credits (~$0.50 / 1K standard fetches, max concurrency 5)
- **Starter**: $12.00 / 28,000 Credits (~$0.43 / 1K, concurrency 10)
- **Hobby**: $39.00 / 100,000 Credits (~$0.39 / 1K, concurrency 20)
- **Growth**: $99.00 / 300,000 Credits (~$0.33 / 1K, concurrency 40)
- **Pro**: $249.00 / 1,000,000 Credits (~$0.25 / 1K, concurrency 75)
- **Business**: $599.00 / 4,000,000 Credits (~$0.15 / 1K, concurrency 120)
- **Scale**: $1,500.00 / 15,000,000 Credits (~$0.10 / 1K, concurrency 200)

### How many Credits per request?

Cost depends on options:

| Request type | Parameters | Credits | Notes |
| :--- | :--- | :--- | :--- |
| **Standard** | Default (datacenter) | **1 Credit** | Static sites and open APIs with light bot defense |
| **JS rendering** | `render=true` | **5 Credits** | Headless browser, wait for DOM |
| **Residential / mobile exit** | `super=true` | **10 Credits** | Real residential/mobile pool for strict IP reputation |
| **Residential + JS** | `super=true` and `render=true` | **25 Credits** | Tightest e-commerce, social, and travel sites |

### Official structured plugins?

First-party plugins skip your own parsers:

- **Amazon product / reviews**: about 1 Credit / request; specs, price, reviews;
- **Google SERP / YouTube**: about 10 Credits / request; structured SERP.

---

## Calling the API

### Endpoint and auth?

One hosted fetch URL:

- URL: `https://api.joyproxy.com/v1/fetch`
- Methods: `GET` and `POST` (for POST use `Content-Type: application/json`)
- Auth: `?token=YOUR_TOKEN`, or `Authorization: Bearer <YOUR_TOKEN>`, or `X-Token: <YOUR_TOKEN>`.

### What is Scraping API Token? Where do I copy it?

Scraping API Token is isolated from the site password, extract **API token**, and **AI Access Token**.

After you buy Credits, open **Web Scraping API → API Center** to copy it. Click **Rotate token** if it may have leaked.

### Common parameters? Sticky sessions?

On `/v1/fetch`:

- `url` (required): full target URL.
- `geoCode` (optional): ISO-2 country (`us`, `gb`, `jp`); 200+ countries.
- `render` (optional): `true` to render JS and wait for AJAX.
- `super` (optional): `true` for residential/mobile exits.
- `sessionId` (optional): sticky context. Reuse the same string (for example `sessionId="cart_step_1"`) for a few minutes so login + next pages or add-to-cart stay on one session.

### Async queue?

Yes, for large jobs or slow renders:

- `POST /v1/fetch/async/jobs`: submit a batch; returns `job_id` and `task_id` list;
- `GET /v1/fetch/async/jobs/{job_id}`: poll progress;
- `GET /v1/fetch/async/jobs/{job_id}/{task_id}`: one task result.

### What is in the Web Scraping API console?

Four tabs on admin-web-unblocker.html:

1. **Buy**: preset Credit packs or a custom amount;
2. **API Center**: playground, token view / rotate, code samples;
3. **Usage**: Credits, concurrency, success rate, request log;
4. **Documentation**: parameters, errors, OpenAPI.
