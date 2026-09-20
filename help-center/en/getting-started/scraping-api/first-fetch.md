# Test a fetch in API Center

The JoyProxy console includes a visual **<a href="https://www.joyproxy.com/admin-web-unblocker.html?view=playground" target="_blank" rel="noopener noreferrer">API Center</a>**. You can try fetches in the browser, tune optional parameters, and copy ready-to-use samples in several languages — no local code required.

---

## Send a test request in API Center

1. Log in and open the **<a href="https://www.joyproxy.com/admin-web-unblocker.html" target="_blank" rel="noopener noreferrer">Web Scraping API</a>** console.
2. Switch to the **API Center** tab (Playground · Test & integrate).
3. In **Request parameters** on the right:
   - **Target URL**: the page to fetch (for example `https://example.com`).
   - **render (JS)**: enable dynamic JavaScript rendering (`render=true`).
   - **super (residential)**: route through high-trust residential/mobile exits (`super=true`).
   - **geoCode**: two-letter exit country (for example `us` or `jp`).
4. Click **Send request**.
5. Review the result:
   - **Response**: live HTML or JSON.
   - **Status**: the target status code (for example `200`).
   - **Credits used**: Credits deducted for this successful fetch.

---

## Copy integration examples

API Center generates samples from the parameters you selected. Click **Copy** and paste them into your project:

### cURL
```bash
curl -X GET "https://api.joyproxy.com/v1/fetch?token=YOUR_SCRAPING_TOKEN&url=https%3A%2F%2Fexample.com&render=true"
```

### Python (Requests)
```python
import requests

token = "YOUR_SCRAPING_TOKEN"
target_url = "https://example.com"

api_url = "https://api.joyproxy.com/v1/fetch"
params = {
    "token": token,
    "url": target_url,
    "render": "true"
}

response = requests.get(api_url, params=params, timeout=30)
print("HTTP Status:", response.status_code)
print("Response HTML:", response.text[:500])
```

### Node.js (Fetch)
```javascript
const token = 'YOUR_SCRAPING_TOKEN';
const targetUrl = encodeURIComponent('https://example.com');

const apiUrl = `https://api.joyproxy.com/v1/fetch?token=${token}&url=${targetUrl}&render=true`;

async function fetchPage() {
  const res = await fetch(apiUrl);
  const html = await res.text();
  console.log('Response length:', html.length);
}

fetchPage();
```

---

## 💡 REST API documentation and parameter reference

For REST paths, POST JSON bodies, and request-header details:

> 💡 **API documentation**  
> Open **<a href="https://www.joyproxy.com/admin-unblocker-documentation.html" target="_blank" rel="noopener noreferrer">Web Scraping API Documentation</a>** at the top of the console for the full parameter dictionary and response rules.
