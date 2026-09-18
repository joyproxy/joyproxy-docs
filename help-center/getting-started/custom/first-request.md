# 首次请求与代码（定制）

用法与静态一致：专用 host、port，白名单或 `USER:PASS`。

```bash
curl -x http://USER:PASS@HOST:PORT https://api.ipify.org
```

Python（替换占位符）：

```python
import requests

PROXY = "http://user:pass@HOST:PORT"
proxies = {"http": PROXY, "https": PROXY}
print(requests.get("https://api.ipify.org", proxies=proxies, timeout=30).text)
```

更多语言：复制 <a href="../static/code-examples.md" target="_blank" rel="noopener noreferrer">静态代码示例</a>，换成定制端点生成页的 host:port。

系统/浏览器配置：<a href="../static/clients.md" target="_blank" rel="noopener noreferrer">静态客户端</a> — 表单相同，host:port 不同。

## 本章索引

<a href="README.md" target="_blank" rel="noopener noreferrer">定制代理</a> · <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a> · <a href="response-codes.md" target="_blank" rel="noopener noreferrer">响应码</a>
