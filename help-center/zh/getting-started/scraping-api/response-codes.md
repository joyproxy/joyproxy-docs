# 响应码与常见报错

在使用网页抓取 API 时，常见报错状态码及其排查解决办法如下：

---

## 常见报错速查表

| HTTP 状态码 | 错误信息 / 现象 | 主要原因 | 积分扣除 | 排查与解决方案 |
| --- | --- | --- | --- | --- |
| **401** | `Invalid Token` | Scraping API Token 错误或未传 | **0 扣费** | 确认使用的是 <a href="quick-start.md" target="_blank" rel="noopener noreferrer">API 中心</a> 中复制的 **Scraping API Token**，非代理账密。 |
| **402** | `Insufficient Credits` | 账户可用积分不足 | **0 扣费** | 前往 <a href="buy-credits.md" target="_blank" rel="noopener noreferrer">购买积分包</a> 补充积分。积分不过期。 |
| **429** | `Concurrency Limit Reached` | 并发请求数达到上限槽位 | **0 扣费** | 需等待已有请求结束释放槽位，或改用 <a href="async-api.md" target="_blank" rel="noopener noreferrer">异步 API</a>，或购买更高套餐提升上限。 |
| **400** | `Missing URL Parameter` | 未传入必填的 `url` 参数 | **0 扣费** | 检查请求参数，确保 `url` 存在且已进行正确的 URL-Encode 编码。 |
| **502** | `Target Fetch Failed` | 目标网站无法连接/硬拦截 | **0 扣费** | 建议尝试在参数中开启 `super=true` 高级模式或更换 `geoCode` 国家出口。 |

---

## 如何验证“0 扣款”保障？

当你收到 `401`、`402`、`429` 或 `502` 报错响应时：
1. 检查 HTTP 响应头中的 `X-JoyProxy-Fetch-Credits-Used`，其值为 `0`。
2. 打开控制台 **<a href="usage.md" target="_blank" rel="noopener noreferrer">抓取日志</a>** 页面，确认该笔失败记录的积分扣除显示为 `0`。
