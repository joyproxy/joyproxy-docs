# 协议

定制使用端点生成页的专用 `host:port`。支持 **HTTP** 与 **SOCKS5**，均可访问 **HTTPS 网站**。

```bash
curl -x "http://USER:PASS@HOST:PORT" "https://api.ipify.org"
curl -x "socks5h://USER:PASS@HOST:PORT" "https://api.ipify.org"
```

`socks5h://` 由代理解析域名。白名单机器可省略 `USER:PASS@`。

轮换在 `gate.joyproxy.com:9001` 上使用相同两种协议，详见 [动态代理](../rotating/README.md)。

## 下一步

[授权与生成](authorize-and-generate.md) · [响应码](response-codes.md)
