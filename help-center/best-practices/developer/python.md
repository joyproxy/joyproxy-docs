# Python 发请求怎么挂代理与遇到报错自动重试

Python 是数据采集与自动化领域使用最广泛的编程语言。本文汇总了在 Python 中使用 `requests`、`httpx` 以及异步高并发 `aiohttp` 挂载 JoyProxy 代理的标准代码模板，并教你如何写出稳健的**自动退避重试**机制。

---

## 模式一：使用 requests 挂载代理

`requests` 是最经典的同步请求库：

```python
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

# 1. 组装代理连接串（以动态住宅代理为例）
# 格式: http://生成的长用户名:代理密码@gate.joyproxy.com:9001
proxy_url = "http://user1-zone-resi-region-us:secret123@gate.joyproxy.com:9001"

proxies = {
    "http": proxy_url,
    "https": proxy_url
}

# 2. 配置带自动重试的 Session
session = requests.Session()
retries = Retry(
    total=3,                          # 最大重试 3 次
    backoff_factor=1,                 # 遇到错误退避等待 1s, 2s, 4s...
    status_forcelist=[500, 502, 503, 504] # 针对服务端异常自动重试
)
session.mount('https://', HTTPAdapter(max_retries=retries))

try:
    resp = session.get("https://ipinfo.io", proxies=proxies, timeout=15)
    print("请求成功，当前出口属地:", resp.json())
except Exception as e:
    print(f"请求失败: {e}")
```

---

## 模式二：使用现代异步库 httpx 提升吞吐量

`httpx` 支持原生异步协程，并且在处理 HTTP/2 和连接池复用方面比 requests 更具优势：

```python
import asyncio
import httpx

async def fetch(url, proxy):
    # httpx 支持为不同协议单独配置挂载
    mounts = {
        "all://": httpx.AsyncHTTPTransport(proxy=proxy)
    }
    async with httpx.AsyncClient(mounts=mounts, timeout=15.0) as client:
        try:
            resp = await client.get(url)
            print("异步请求返回:", resp.status_code, resp.json().get("ip"))
        except httpx.ProxyError as e:
            print(f"代理握手失败，请核对账密或白名单: {e}")

async def main():
    proxy = "http://user1-zone-resi-region-us:secret123@gate.joyproxy.com:9001"
    tasks = [fetch("https://ipinfo.io", proxy) for _ in range(5)]
    await asyncio.gather(*tasks)

if __name__ == "__main__":
    asyncio.run(main())
```

---

## 模式三：使用 SOCKS5 协议连接

如果你的任务需要底层走 SOCKS5 协议：
1. 先安装 SOCKS 扩展支持：`pip install requests[socks]`
2. 将连接协议前缀改为 `socks5://`：
   ```python
   proxies = {
       "http": "socks5://user:pass@us-ca.edge.joyproxy.com:10001",
       "https": "socks5://user:pass@us-ca.edge.joyproxy.com:10001"
   }
   ```

---

## 常见报错处理建议

- **遇到 407 Proxy Authentication Required**：密码输错或用户名被多加了空格。特别提醒：动态长用户名切勿用 `.split()` 擅自拆解；
- **遇到 SSLError / SSL: CERTIFICATE_VERIFY_FAILED**：这是 Python 本地缺少根证书导致，在请求中加上 `verify=True`（默认开启）并更新系统的 `certifi` 包即可：`pip install --upgrade certifi`。
