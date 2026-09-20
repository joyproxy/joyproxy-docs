# Structured data plugins API

Besides generic page fetches, Web Scraping API includes **Plugins** for major commerce, search, and social platforms.

With Plugins you do not write regex or BeautifulSoup / Cheerio parsers. Submit a keyword or product ID and receive formatted JSON.

---

## Plugin list and endpoints

Call path: `GET /v1/fetch/plugin/{platform}/{endpoint}` or `POST /v1/fetch/plugin/{platform}/{endpoint}`

| Platform | Endpoint | What it returns | Core parameters |
| --- | --- | --- | --- |
| **Amazon** | `/v1/fetch/plugin/amazon/pdp` | Amazon product detail (title, price, variants, rating, images). | `asin=B08N5WRWNW&geocode=us` |
| **Amazon** | `/v1/fetch/plugin/amazon/search` | Amazon keyword search results. | `keyword=wireless+earbuds&geocode=us` |
| **Amazon** | `/v1/fetch/plugin/amazon/offer-listing` | Amazon seller offers for a product. | `asin=B08N5WRWNW&geocode=us` |
| **Google Search** | `/v1/fetch/plugin/google/search` | Google SERP organic results, ads, and related searches. | `q=best+laptops&gl=us` |
| **Google Search** | `/v1/fetch/plugin/google/search/ai-mode` | Google AI Overview and cited sources. | `q=how+to+learn+python` |
| **Google Maps** | `/v1/fetch/plugin/google/maps` | Google Maps business info, address, phone, and ratings. | `q=pizza+in+new+york` |
| **YouTube** | `/v1/fetch/plugin/google/youtube` | YouTube video metadata, views, likes, and comments. | `v=VIDEO_ID` |
| **Google News / Trends** | `/v1/fetch/plugin/google/news` | Google News headlines and topic streams. | `q=technology&gl=us` |
| **Walmart** | `/v1/fetch/plugin/walmart/store` | Walmart product and store basics. | `item_id=12345678` |

---

## How to call (example)

Plugins use the same **Scraping API Token**:

```bash
# Amazon product detail as structured JSON
curl "https://api.joyproxy.com/v1/fetch/plugin/amazon/pdp?token=YOUR_SCRAPING_TOKEN&asin=B08N5WRWNW&geocode=us"
```

Example JSON:

```json
{
  "status": "success",
  "asin": "B08N5WRWNW",
  "title": "Example Wireless Earbuds Noise Cancelling",
  "price": "$49.99",
  "currency": "USD",
  "rating": 4.5,
  "reviews_count": 1280,
  "in_stock": true,
  "images": [
    "https://m.media-amazon.com/images/I/example1.jpg"
  ]
}
```

---

## Plugin billing

Plugins combine dedicated proxies and parsers on JoyProxy’s side. Credits are deducted **only when structured JSON is returned successfully**. Parse failures or missing targets return an HTTP error and **are not charged**.
