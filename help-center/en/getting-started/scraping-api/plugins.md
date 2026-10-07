# Structured data plugins API

Besides generic page fetches, Web Scraping API includes **Plugins** for major commerce, search, and AI platforms.

With Plugins you do not write regex or BeautifulSoup / Cheerio parsers. Submit a keyword, product ID, or prompt and receive formatted JSON.

Call path: `GET /v1/fetch/plugin/{platform}/{endpoint}` or `POST /v1/fetch/plugin/{platform}/{endpoint}`

All plugins use the same **Scraping API Token**. Try them in <a href="https://www.joyproxy.com/admin-web-unblocker.html?view=playground" target="_blank" rel="noopener noreferrer">API Center</a> (switch the API product tab).

---

## Amazon (~1 credit)

| Endpoint | What it returns | Core parameters |
| --- | --- | --- |
| `/v1/fetch/plugin/amazon/pdp` | Product detail (title, price, variants, rating, images). | `asin=B08N5WRWNW&geocode=us` |
| `/v1/fetch/plugin/amazon/search` | Keyword search results. | `q=wireless+earbuds&geocode=us` |
| `/v1/fetch/plugin/amazon/offer-listing` | Seller offers and buy box. | `asin=B08N5WRWNW&geocode=us` |

Optional: `zipcode` for store-level pricing. `geocode` selects the marketplace (for example `us`, `de`, `jp`).

```bash
curl "https://api.joyproxy.com/v1/fetch/plugin/amazon/pdp?token=YOUR_SCRAPING_TOKEN&asin=B08N5WRWNW&geocode=us"
```

---

## Google suite (~10 credits)

| Endpoint | What it returns | Core parameters |
| --- | --- | --- |
| `/v1/fetch/plugin/google/search` | SERP organic results, ads, and related searches. | `q=best+laptops&gl=us&hl=en` |
| `/v1/fetch/plugin/google/search/ai-mode` | Google AI Mode / AI Overview and cited sources. | `q=how+to+learn+python` |
| `/v1/fetch/plugin/google/maps/search` | Maps businesses, address, phone, and ratings. | `q=pizza+in+new+york` |
| `/v1/fetch/plugin/google/maps/place` | Place details. | `place_id` or `data_cid` |
| `/v1/fetch/plugin/google/maps/reviews` | Place reviews (paginated). | `data_id` or `place_id` |
| `/v1/fetch/plugin/google/news` | Google News headlines and topic streams. | `q=technology&gl=us` |
| `/v1/fetch/plugin/google/trends` | Google Trends series. | `q=openai&geo=US` |
| `/v1/fetch/plugin/google/trending` | Trending Now. | `geo=US&hours=24` |
| `/v1/fetch/plugin/google/flights` | Flight offers. | `departure_id=JFK&arrival_id=LAX&outbound_date=2026-06-15` |
| `/v1/fetch/plugin/google/hotels` | Hotel listings. | `q=Bali+hotels&check_in_date=2026-05-01&check_out_date=2026-05-03` |
| `/v1/fetch/plugin/google/shopping` | Shopping product results. | `q=wireless+headphones` |
| `/v1/fetch/plugin/google/play-store` | Play Store search. | `q=weather` |

Optional on most Google endpoints: `hl`, `gl`, `google_domain`, `device`.

```bash
curl "https://api.joyproxy.com/v1/fetch/plugin/google/search?token=YOUR_SCRAPING_TOKEN&q=wireless+headphones&gl=us&hl=en&device=desktop"
```

---

## YouTube (~10 credits)

Video search on YouTube. Use the search query `q` (not a `v=` video id).

| Endpoint | What it returns | Core parameters |
| --- | --- | --- |
| `/v1/fetch/plugin/google/youtube` | YouTube video search results (title, channel, views, duration, pagination). | `q=best+laptop+2025&hl=en&gl=us` |

Optional: `hl`, `gl`, `device`, `sp` (sort/filter). For the next page, pass `next_page_token` from the previous response.

```bash
curl "https://api.joyproxy.com/v1/fetch/plugin/google/youtube?token=YOUR_SCRAPING_TOKEN&q=best+laptop+2025&hl=en&gl=us&device=desktop"
```

---

## Walmart (~10 credits)

Store-accurate US search and product JSON. Provide **exactly one** of `store` (Walmart store id) or `zipcode` (5-digit US ZIP). Passing both or neither returns `400`.

| Endpoint | What it returns | Core parameters |
| --- | --- | --- |
| `/v1/fetch/plugin/walmart/search` | Keyword search on one store’s shelf. | `q=milk` + `store=3081` **or** `zipcode=10001` |
| `/v1/fetch/plugin/walmart/product` | Product detail for an item id at that store. | `item=18611919209` + `store` **or** `zipcode` |
| `/v1/fetch/plugin/walmart/store` | Any `walmart.com` / `walmart.ca` URL through a store-warmed session. | `url=https://www.walmart.com/ip/...` |

For `/store` on `walmart.com`, pass `zipcode` and `storeid` together, or omit both. For `walmart.ca`, pass `storeid` only.

```bash
curl "https://api.joyproxy.com/v1/fetch/plugin/walmart/search?token=YOUR_SCRAPING_TOKEN&q=milk&zipcode=10001"
curl "https://api.joyproxy.com/v1/fetch/plugin/walmart/product?token=YOUR_SCRAPING_TOKEN&item=18611919209&store=3081"
```

---

## ChatGPT (~25 credits)

One-shot prompt to `chatgpt.com`. No login, cookies, or conversation state on your side. Prompt (`q`) is required, maximum 1024 characters.

| Endpoint | What it returns | Core parameters |
| --- | --- | --- |
| `/v1/fetch/plugin/chatgpt/chat` | Assistant reply as structured JSON (`output.markdown` / `output.html`, `sources`, `tool_data`). | `q=Explain+how+rainbows+form` |

Optional: `model` (`auto`, `gpt-5`, `gpt-4o`), `geoCode` (locale signal, default `us`), `raw_sse=1`, `shopping_placeholders=1`. Typical latency 3–15 seconds.

```bash
curl "https://api.joyproxy.com/v1/fetch/plugin/chatgpt/chat?token=YOUR_SCRAPING_TOKEN&q=Explain+how+rainbows+form&model=auto&geoCode=us"
```

---

## Plugin billing

Credits are deducted **only when the plugin returns successfully**. Input errors and plugin failures are not charged.

| Plugin | Credits per success |
| --- | --- |
| Amazon | typically 1 |
| Google suite | typically 10 |
| YouTube | typically 10 |
| Walmart | 10 |
| ChatGPT | 25 |

Full parameter dictionary: <a href="https://www.joyproxy.com/admin-unblocker-documentation.html#plugins" target="_blank" rel="noopener noreferrer">Web Scraping API Documentation → Plugins</a>.
