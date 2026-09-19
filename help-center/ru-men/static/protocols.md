# 协议

静态使用端点生成页给出的专用 `host:port`。支持 **HTTP** 与 **SOCKS5**，均可访问 **HTTPS 网站**。

```bash
curl -x "http://USER:PASS@HOST:PORT" "https://api.ipify.org"
curl -x "socks5h://USER:PASS@HOST:PORT" "https://api.ipify.org"
```

`socks5h://` 表示由代理端解析域名。本机在 IP 白名单时可省略 `USER:PASS@`。

轮换在 `gate.joyproxy.com:9001` 上使用相同两种协议。输出格式、UDP、提取 API 的 `protocol` 等说明见 [动态代理 → 高级提取参数](../rotating/extraction-parameters.md)。

## 下一步

[Windows、Chrome 与手机](clients.md) · [响应码](response-codes.md)
