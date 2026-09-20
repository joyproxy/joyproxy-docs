# Web Scraping API console

The Web Scraping API console is a managed fetch platform for developers. Proxy rotation, headless JavaScript rendering, captcha handling, and anti-fingerprinting are wrapped in one REST call so you do not have to build that stack.

In the left sidebar, click **Web Scraping**:

<a href="https://www.joyproxy.com/admin-web-unblocker.html" target="_blank" rel="noopener noreferrer">Open the Web Scraping API console</a> · <a href="https://www.joyproxy.com/products/web-unblocker.html" target="_blank" rel="noopener noreferrer">Web Scraping API product page</a>

---

## Credits billing

Web Scraping API bills in **Credits**. Packs do not expire:

- **Failed requests are not charged**: Credits are deducted only when the stack bypasses protection and returns a valid page. Unreachable targets or server errors cost nothing.
- **Per-feature cost**: Plain HTML uses the base rate. Headless **render (JS)** or **Super (residential & mobile)** exits add credits. Full table: <a href="../getting-started/scraping-api/parameters.md" target="_blank" rel="noopener noreferrer">Fetch parameters and credit usage</a>.

---

## Four tabs

### 1. Buy
Purchase Credit packs for the current workload (from small presets to custom volume):

- Pay with Available Balance; Credits are added immediately;
- Larger packs lower the per-1K cost and raise the concurrency cap (up to 200+ dedicated slots). Guide: <a href="../getting-started/scraping-api/buy-credits.md" target="_blank" rel="noopener noreferrer">Buy credit packs and concurrency</a>.

### 2. API Center
Interactive playground — try a fetch in the browser with no code:

- **Try it**: Paste a target URL, toggle **render (JS)**, enable **Super (residential & mobile)**, or set a country code, then click **Send request** to preview HTML and status;
- **Scraping API Token**: The only key for public `/v1/fetch`. View, **Copy**, or **Rotate**;
- **Code samples**: The page emits runnable **cURL**, **Python (requests)**, and **Node.js (axios)** from the current parameters. Tutorial: <a href="../getting-started/scraping-api/first-fetch.md" target="_blank" rel="noopener noreferrer">Test a fetch in API Center</a>.

### 3. Usage
Health of recent fetches:

- Credit balance, concurrency in use, and the cap;
- Presets **Today**, **Last 7 days**, **Last 30 days**, plus a custom range;
- **Total requests**, **Success rate**, and **Credits used** in the selected window;
- The log table lists time, target host, HTTP status, and credits per call. Guide: <a href="../getting-started/scraping-api/usage.md" target="_blank" rel="noopener noreferrer">Usage and fetch logs</a>.

### 4. Documentation
Opens the API parameter reference (<a href="https://www.joyproxy.com/admin-unblocker-documentation.html" target="_blank" rel="noopener noreferrer">Open API documentation</a>) with headers, advanced parameters, and response shape for public `/v1/fetch`.
