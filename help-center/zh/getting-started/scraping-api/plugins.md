# 结构化数据插件 API

除了通用网页抓取外，JoyProxy 网页抓取 API 还提供了专门针对主流电商、搜索引擎与社交平台的 **结构化数据插件 API（Plugins API）**。

使用插件 API，你无需编写复杂正则表达式或 BeautifulSoup / Cheerio 解析代码，提交目标搜索词或商品 ID 即可直接获取格式化好的 JSON 数据。

---

## 常用插件列表与端点

调用路径规则：`GET /v1/fetch/plugin/{platform}/{endpoint}` 或 `POST /v1/fetch/plugin/{platform}/{endpoint}`

| 目标平台 | 端点名称 | 插件作用描述 | 核心入参示例 |
| --- | --- | --- | --- |
| **Amazon** | `/v1/fetch/plugin/amazon/pdp` | 抓取 Amazon 商品详情页（标题、价格、变体、评分、图片列表）。 | `asin=B08N5WRWNW&geocode=us` |
| **Amazon** | `/v1/fetch/plugin/amazon/search` | 抓取 Amazon 关键词搜索结果列表。 | `keyword=wireless+earbuds&geocode=us` |
| **Amazon** | `/v1/fetch/plugin/amazon/offer-listing` | 抓取 Amazon 商品跟卖报价与卖家列表。 | `asin=B08N5WRWNW&geocode=us` |
| **Google 搜索** | `/v1/fetch/plugin/google/search` | 抓取 Google SERP 自然搜索结果、广告及相关搜索。 | `q=best+laptops&gl=us` |
| **Google 搜索** | `/v1/fetch/plugin/google/search/ai-mode` | 抓取 Google AI Overview 智能综述与引用来源。 | `q=how+to+learn+python` |
| **Google Maps** | `/v1/fetch/plugin/google/maps` | 抓取 Google Maps 商家信息、地址、电话及用户评分。 | `q=pizza+in+new+york` |
| **Google YouTube** | `/v1/fetch/plugin/google/youtube` | 抓取 YouTube 视频元数据、播放量、点赞数及评论列表。 | `v=VIDEO_ID` |
| **Google 新闻/趋势** | `/v1/fetch/plugin/google/news` | 抓取 Google News 资讯流与头条新闻。 | `q=technology&gl=us` |
| **Walmart** | `/v1/fetch/plugin/walmart/store` | 抓取 Walmart 商品与店铺基础信息。 | `item_id=12345678` |

---

## 调用方式与代码示例

插件 API 同样使用你的 **Scraping API Token** 进行认证：

```bash
# 抓取 Amazon 商品详情结构化 JSON 示例
curl "https://api.joyproxy.com/v1/fetch/plugin/amazon/pdp?token=YOUR_SCRAPING_TOKEN&asin=B08N5WRWNW&geocode=us"
```

返回的 JSON 结构示例：
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

## 插件 API 的扣费原则

结构化数据插件在平台底层自动整合了专有代理与页面解析器。具体的积分扣除标准遵循**仅成功返回结构化 JSON 时才扣积分**的规则；解析失败或目标不存在时返回相应 HTTP 错误码且**不消耗积分**。
