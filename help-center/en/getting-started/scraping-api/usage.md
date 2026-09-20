# Usage and fetch logs

In the console you can watch remaining Credits, current Concurrency, and recent Web Scraping API requests.

---

## Usage dashboard

1. Log in to the JoyProxy console and open **<a href="https://www.joyproxy.com/admin-web-unblocker.html" target="_blank" rel="noopener noreferrer">Web Scraping API</a>**.
2. Switch to the **Usage** tab.
3. The top bar shows:
   - **Credit balance** — open **Details** for per-request costs.
   - **Active concurrency** — **active / limit** (for example `5 / 20`); open **Details** for how slots work.
4. Under **Usage**, the three summary cards are:
   - **Total requests**
   - **Success rate** (for the selected **Time range**: **Today**, **Last 7 days**, or **Last 30 days**)
   - **Credits used**

---

## Recent requests

The table below the dashboard lists recent fetches:

| Column | Description |
| --- | --- |
| **Time** | When the fetch started. |
| **URL** | Full target URL. |
| **Status** | Target HTTP status (for example `200`, `404`). |
| **Result** | **Success** or **Failed**. |
| **Credits** | Credits deducted for this request (`0` on failure). |

Set **Time range**, then click **Query**. Presets: **Today**, **Last 7 days**, **Last 30 days**.
