# 结构化数据插件 API（Platform Plugins）

除了通用网页抓取外，JoyProxy 网页抓取 API 还提供了专门针对主流电商、搜索引擎与社交平台的 **结构化数据插件 API（Plugins API）**。

使用插件 API，你无需编写复杂正则表达式或 BeautifulSoup / Cheerio 解析代码，提交目标搜索词或商品 ID 即可直接获取格式化好的 JSON 数据。

---

## 常用插件列表与端点

调用路径规则：`GET /v1/fetch/plugin/{platform}/{endpoint}`

| 目标平台 | 端点名称 | 插件作用描述 | 示例入参 |
| --- | --- | --- | --- |
| **Amazon 亚马逊** | `/v1/fetch/plugin/amazon/product` | 抓取 Amazon 商品详情（标题、价格、变体、评价数、图片列表）。 | `asin=B08N5WRWNW&domain=com` |
| **Amazon 亚马逊** | `/v1/fetch/plugin/amazon/search` | 抓取 Amazon 关键词搜索结果列表。 | `keyword=wireless+earbuds&domain=com` |
| **Google 搜索** | `/v1/fetch/plugin/google/search` | 抓取 Google SERP 自然搜索结果、广告及相关搜索。 | `q=best+laptops&gl=us` |
| **Google 地图** | `/v1/fetch/plugin/google/maps` | 抓取 Google Maps 商家信息、地址、电话及用户评分。 | `q=pizza+in+new+york` |
| **YouTube** | `/v1/fetch/plugin/youtube/video` | 抓取 YouTube 视频元数据、播放量、点赞数及评论列表。 | `v=VIDEO_ID` |

---

## 调用方式与代码示例

插件 API 同样使用你的 **Scraping API Token** 进行认证：

```bash
# 抓取 Amazon 商品结构化 JSON 示例
curl "https://api.joyproxy.com/v1/fetch/plugin/amazon/product?token=YOUR_SCRAPING_TOKEN&asin=B08N5WRWNW&domain=com"
```

返回的 JSON 结构示例：
```json
{
  "status": "success",
  "data": {
    "title": "Example Wireless Earbuds",
    "price": "$49.99",
    "rating": 4.5,
    "reviews_count": 1250,
    "in_stock": true,
    "images": ["https://m.media-amazon.com/images/I/..."]
  },
  "credits_used": 10
}
```

---

## 插件 API 计费说明

结构化数据插件在平台底层自动整合了专有代理与页面解析器。具体的积分扣除标准会在 **[控制台 API 文档（Documentation）](https://www.joyproxy.com/admin-unblocker-documentation.html#plugins)** 中按插件类型实时更新显示。同样遵循**仅成功返回结构化 JSON 时才扣积分**的规则。
