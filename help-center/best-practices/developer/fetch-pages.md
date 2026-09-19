# 遇到反爬和动态网页怎么用抓取接口直接拿内容

在现代网页数据采集过程中，爬虫工程师常常会遇到两类最棘手的难题：
1. **严格的反爬防护盾（Cloudflare 5 秒盾、Akamai、Datadome 等）**：即使挂了代理，一发请求直接返回 403 Forbidden 或要求人机滑块验证；
2. **纯前端动态渲染网页（SPA / Vue / React）**：直接用 requests 下载回来的 HTML 只有空白的 `<div id="app"></div>`，必须跑无头浏览器等待页面 JavaScript 脚本执行完毕。

为了彻底解决维护无头浏览器集群和反爬对抗的高昂成本，JoyProxy 推出了 **全托管网页抓取 API（Web Scraping API）**。你只需提交目标 URL，服务端通过 AI 算法全自动调度住宅出口、绕过反爬、执行动态渲染，并直接把干净的页面内容返回给你。更重要的是：**只对成功请求扣费，失败重试绝不扣积分**！

---

## 第一步：准备好 Scraping API Token

- **获取位置**：登录控制台，进入「网页抓取 API」页面的 **API 中心**；
- **接口地址**：推荐使用最新规范的 **POST /v2/fetch** 接口；
- **鉴权方式**：在请求头中携带 `Authorization: Bearer <你的_Scraping_Token>`。

---

## 第二步：基础调用（抓取常规网页）

只需一个目标 URL，服务端全自动绕过基础反爬：

```python
import requests

SCRAPING_TOKEN = "你的_Scraping_API_Token"
headers = {
    "Authorization": f"Bearer {SCRAPING_TOKEN}",
    "Content-Type": "application/json"
}

payload = {
    "url": "https://www.example.com",
    "output": "raw"                     # 返回原始 HTML 内容
}

resp = requests.post("https://api.joyproxy.com/v2/fetch", headers=headers, json=payload, timeout=30)

if resp.status_code == 200:
    print("抓取成功！页面 HTML 长度:", len(resp.text))
else:
    print(f"抓取失败，HTTP {resp.status_code}，失败不扣任何 Credits！")
```

---

## 第三步：抓取 JS 动态渲染网页（开启无头浏览器渲染）

如果目标网站的内容是异步由前端 JavaScript 动态加载的，只需在请求体中加入 `"render": True`：

```python
payload = {
    "url": "https://spa-rendered-website.com",
    "render": True,                      # 启用服务端无头浏览器渲染
    "waitUntil": "domcontentloaded",     # 等待页面 DOM 加载完毕
    "device": "desktop"                  # 模拟桌面端浏览器硬件指纹
}

resp = requests.post("https://api.joyproxy.com/v2/fetch", headers=headers, json=payload, timeout=60)
print(resp.text)
```
> **扣费说明**：开启 JS 渲染后单次成功请求扣除 5 Credits。

---

## 第四步：突破极度严格的风控（启用 Super 住宅出口池）

如果目标是全球防护最严密的大型跨境电商或社交平台，普通数据中心 IP 容易被拦截。加入 `"super": True`，出口会瞬间切换为真实家庭宽带住宅出口：

```python
payload = {
    "url": "https://strict-security-target.com",
    "render": True,                      # 开启动态渲染
    "super": True,                       # 开启顶级家庭住宅出口池
    "geoCode": "us"                      # 强制要求从美国出口访问
}

resp = requests.post("https://api.joyproxy.com/v2/fetch", headers=headers, json=payload, timeout=60)
```

---

## 第五步：利用 sessionId 保持多步骤会话

如果你需要先在页面 A 登录或加购，再跳转到页面 B 抓取订单详情：
- 在连续的多次请求中传入相同的 `"sessionId": "my_shopping_cart_1"`；
- 服务端会在数分钟内优先保持在同一个真实的浏览器上下文和 IP 下执行，完美承接多步骤任务。
