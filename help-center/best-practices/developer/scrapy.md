# Scrapy 爬虫项目里怎么实现每次请求自动换 IP

Scrapy 是 Python 领域最强大的工业级爬虫框架。在大规模爬取电商或新闻站点时，如果同一个 IP 发起过多请求，很容易被对方封禁。

通过编写一个极简的 Scrapy 下载器中间件（Downloader Middleware），我们可以让爬虫在抓取过程中，**每一个独立的请求都自动走 JoyProxy 的动态住宅代理，实现真正的随请求自动换 IP**。

---

## 第一步：编写下载器中间件（middlewares.py）

在你的 Scrapy 项目的 `middlewares.py` 文件中，新增一个名为 `JoyProxyRotatingMiddleware` 的类：

```python
import base64

class JoyProxyRotatingMiddleware:
    def __init__(self):
        # 填写你在 JoyProxy 控制台设置的参数
        # 动态网关固定地址
        self.proxy_host = "gate.joyproxy.com"
        self.proxy_port = "9001"
        
        # 提取中心生成的长用户名（每次换 IP 模式）与密码
        self.username = "user1-zone-resi-region-us"
        self.password = "your_proxy_password"

    def process_request(self, request, spider):
        # 1. 组装代理服务器地址
        request.meta['proxy'] = f"http://{self.proxy_host}:{self.proxy_port}"

        # 2. 组装 Proxy-Authorization 认证请求头
        auth_str = f"{self.username}:{self.password}"
        encoded_auth = base64.b64encode(auth_str.encode('utf-8')).decode('utf-8')
        request.headers['Proxy-Authorization'] = f"Basic {encoded_auth}"
        
        # 确保代理头优先发送
        return None

    def process_response(self, request, response, spider):
        # 遇到 407 鉴权失败或 429 频控时的容错
        if response.status in [407, 429]:
            spider.logger.warning(f"触发代理风控 HTTP {response.status}，正在重试当前 URL: {request.url}")
            return request.copy() # 重新把请求放回调度队列
        return response
```

---

## 第二步：在 settings.py 中启用中间件

打开项目的 `settings.py`，找到 `DOWNLOADER_MIDDLEWARES` 配置项，将我们的自定义中间件注册进去并设置合适的优先级（数字一般设为 750 左右）：

```python
DOWNLOADER_MIDDLEWARES = {
    'myproject.middlewares.JoyProxyRotatingMiddleware': 750,
}

# 优化连接池设置，提升代理吞吐
CONCURRENT_REQUESTS = 16
DOWNLOAD_TIMEOUT = 20
RETRY_TIMES = 3
```

---

## 第三步：运行爬虫并验证

编写一个简单的 Spider 抓取 `https://api.ipify.org`：
```python
import scrapy

class TestSpider(scrapy.Spider):
    name = "ip_test"
    start_urls = ["https://api.ipify.org"] * 5

    def parse(self, response):
        self.logger.info(f"本次抓取返回的公网出口 IP: {response.text.strip()}")
```

运行命令 `scrapy crawl ip_test`，你会在控制台日志中看到，5 次请求打印出来的出口 IP 均不相同，说明每次请求自动换 IP 已完美生效！
