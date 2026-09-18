# 静态线路首次请求

把 `HOST`、`PORT`、`USER`、`PASS` 换成端点生成页的值（白名单机器可以省略账号密码）。

```bash
curl -x http://USER:PASS@HOST:PORT https://api.ipify.org
```

Python：

```python
import requests

PROXY = "http://USER:PASS@HOST:PORT"
proxies = {"http": PROXY, "https": PROXY}
print(requests.get("https://api.ipify.org", proxies=proxies, timeout=30).text)
```

确认打印的 IP 与购买地域一致。若不对，先看**订单国家**，不要从主机名字符串猜地区。

## 常见情况

| 现象 | 先查 |
| --- | --- |
| 认证错误 | 用户名密码；或白名单是否包含本机公网 IP |
| 连接被拒 / 超时 | 是否用了**最新一次**生成的 host:port；订单是否过期 |
| VPS 行、家里不行 | 家里 IP 未入白名单 — 加 IP 或改用账号密码 |

## 下一步

<a href="code-examples.md" target="_blank" rel="noopener noreferrer">代码示例</a> · <a href="refresh-ip.md" target="_blank" rel="noopener noreferrer">更换 IP</a> · <a href="response-codes.md" target="_blank" rel="noopener noreferrer">响应码</a>
