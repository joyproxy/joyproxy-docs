# 结构化数据插件 API

除了通用网页抓取外，JoyProxy 网页抓取 API 还提供针对主流电商、搜索引擎与 AI 平台的 **结构化数据插件 API**。

使用插件 API，你无需编写正则或 BeautifulSoup / Cheerio 解析代码，提交搜索词、商品 ID 或 prompt 即可直接获取格式化 JSON。

调用路径：`GET /v1/fetch/plugin/{platform}/{endpoint}` 或 `POST /v1/fetch/plugin/{platform}/{endpoint}`

所有插件使用同一套 **Scraping API Token**。可在 <a href="https://www.joyproxy.com/admin-web-unblocker.html?view=playground" target="_blank" rel="noopener noreferrer">API 中心</a> 切换 API 产品页签后试跑。

---

## Amazon（约 1 Credit）

| 端点 | 返回内容 | 核心参数 |
| --- | --- | --- |
| `/v1/fetch/plugin/amazon/pdp` | 商品详情（标题、价格、变体、评分、图片）。 | `asin=B08N5WRWNW&geocode=us` |
| `/v1/fetch/plugin/amazon/search` | 关键词搜索结果。 | `q=wireless+earbuds&geocode=us` |
| `/v1/fetch/plugin/amazon/offer-listing` | 卖家报价与 Buy Box。 | `asin=B08N5WRWNW&geocode=us` |

可选：`zipcode` 指定门店价格。`geocode` 选择站点（如 `us`、`de`、`jp`）。

```bash
curl "https://api.joyproxy.com/v1/fetch/plugin/amazon/pdp?token=YOUR_SCRAPING_TOKEN&asin=B08N5WRWNW&geocode=us"
```

---

## Google 套件（约 10 Credits）

| 端点 | 返回内容 | 核心参数 |
| --- | --- | --- |
| `/v1/fetch/plugin/google/search` | SERP 自然结果、广告及相关搜索。 | `q=best+laptops&gl=us&hl=en` |
| `/v1/fetch/plugin/google/search/ai-mode` | Google AI Mode / AI Overview 与引用来源。 | `q=how+to+learn+python` |
| `/v1/fetch/plugin/google/maps/search` | Maps 商家、地址、电话与评分。 | `q=pizza+in+new+york` |
| `/v1/fetch/plugin/google/maps/place` | 地点详情。 | `place_id` 或 `data_cid` |
| `/v1/fetch/plugin/google/maps/reviews` | 地点评论（可分页）。 | `data_id` 或 `place_id` |
| `/v1/fetch/plugin/google/news` | Google 新闻头条与主题流。 | `q=technology&gl=us` |
| `/v1/fetch/plugin/google/trends` | Google 趋势序列。 | `q=openai&geo=US` |
| `/v1/fetch/plugin/google/trending` | Trending Now。 | `geo=US&hours=24` |
| `/v1/fetch/plugin/google/flights` | 航班报价。 | `departure_id=JFK&arrival_id=LAX&outbound_date=2026-06-15` |
| `/v1/fetch/plugin/google/hotels` | 酒店列表。 | `q=Bali+hotels&check_in_date=2026-05-01&check_out_date=2026-05-03` |
| `/v1/fetch/plugin/google/shopping` | 购物商品结果。 | `q=wireless+headphones` |
| `/v1/fetch/plugin/google/play-store` | Play 商店搜索。 | `q=weather` |

多数 Google 端点可选 `hl`、`gl`、`google_domain`、`device`。

```bash
curl "https://api.joyproxy.com/v1/fetch/plugin/google/search?token=YOUR_SCRAPING_TOKEN&q=wireless+headphones&gl=us&hl=en&device=desktop"
```

---

## YouTube（约 10 Credits）

YouTube 视频搜索。使用搜索词 `q`（不要用 `v=` 视频 ID）。

| 端点 | 返回内容 | 核心参数 |
| --- | --- | --- |
| `/v1/fetch/plugin/google/youtube` | YouTube 视频搜索结果（标题、频道、播放量、时长、分页）。 | `q=best+laptop+2025&hl=en&gl=us` |

可选：`hl`、`gl`、`device`、`sp`（排序/筛选）。翻页时把上一页返回的 `next_page_token` 传入。

```bash
curl "https://api.joyproxy.com/v1/fetch/plugin/google/youtube?token=YOUR_SCRAPING_TOKEN&q=best+laptop+2025&hl=en&gl=us&device=desktop"
```

---

## Walmart（约 10 Credits）

按美国门店返回准确的搜索与商品 JSON。`store`（门店 ID）与 `zipcode`（5 位美国邮编）**必须且只能填一项**，都填或都不填会返回 `400`。

| 端点 | 返回内容 | 核心参数 |
| --- | --- | --- |
| `/v1/fetch/plugin/walmart/search` | 指定门店货架上的关键词搜索。 | `q=milk` + `store=3081` **或** `zipcode=10001` |
| `/v1/fetch/plugin/walmart/product` | 该店某个 item id 的商品详情。 | `item=18611919209` + `store` **或** `zipcode` |
| `/v1/fetch/plugin/walmart/store` | 通过门店会话抓取任意 `walmart.com` / `walmart.ca` 页面。 | `url=https://www.walmart.com/ip/...` |

`/store` 在 `walmart.com` 上：`zipcode` 与 `storeid` 成对填写，或两项都省略。`walmart.ca`：只填 `storeid`。

```bash
curl "https://api.joyproxy.com/v1/fetch/plugin/walmart/search?token=YOUR_SCRAPING_TOKEN&q=milk&zipcode=10001"
curl "https://api.joyproxy.com/v1/fetch/plugin/walmart/product?token=YOUR_SCRAPING_TOKEN&item=18611919209&store=3081"
```

---

## ChatGPT（约 25 Credits）

向 `chatgpt.com` 发送一次性 prompt。无需登录、Cookie 或会话状态。`q` 必填，最多 1024 个字符。

| 端点 | 返回内容 | 核心参数 |
| --- | --- | --- |
| `/v1/fetch/plugin/chatgpt/chat` | 助手回复的结构化 JSON（`output.markdown` / `output.html`、`sources`、`tool_data`）。 | `q=Explain+how+rainbows+form` |

可选：`model`（`auto`、`gpt-5`、`gpt-4o`）、`geoCode`（语言地区信号，默认 `us`）、`raw_sse=1`、`shopping_placeholders=1`。典型耗时 3–15 秒。

```bash
curl "https://api.joyproxy.com/v1/fetch/plugin/chatgpt/chat?token=YOUR_SCRAPING_TOKEN&q=Explain+how+rainbows+form&model=auto&geoCode=us"
```

---

## 插件计费

**仅在插件成功返回时扣积分**。入参错误与插件失败不扣费。

| 插件 | 成功一次消耗 |
| --- | --- |
| Amazon | 通常 1 Credit |
| Google 套件 | 通常 10 Credits |
| YouTube | 通常 10 Credits |
| Walmart | 10 Credits |
| ChatGPT | 25 Credits |

完整参数字典见 <a href="https://www.joyproxy.com/admin-unblocker-documentation.html#plugins" target="_blank" rel="noopener noreferrer">网页抓取 API 文档 → 插件</a>。
