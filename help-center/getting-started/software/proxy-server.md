# 代理服务器

**joyproxy-server** 是开源 **HTTP/SOCKS5 网关**（Linux / Windows）。放在 VPS 或办公室 PC 上，让只认 `127.0.0.1:端口` 的工具也能走 JoyProxy 云端线路。

<a href="https://www.joyproxy.com/products/proxy-server.html" target="_blank" rel="noopener noreferrer">产品页</a> · <a href="https://github.com/joyproxy/joyproxy-server/releases/latest" target="_blank" rel="noopener noreferrer">Releases</a>

## 典型用法

1. **云端上游** — 转发到轮换 `gate.joyproxy.com:9001`，或 <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成</a> 的静态/定制 host:port。
2. **团队入口** — 开发机统一指向你的服务器，你在一处轮换上游。
3. **鉴权网关** — 在服务器上配密码、白名单或 HTTP API（见 GitHub README）。

## 配置概要

1. 阅读 <a href="https://www.joyproxy.com/products/proxy-server.html" target="_blank" rel="noopener noreferrer">产品页</a>。
2. 从 <a href="https://github.com/joyproxy/joyproxy-server/releases/latest" target="_blank" rel="noopener noreferrer">GitHub Releases</a> 下载。
3. 按仓库文档选启动模式。
4. 上游填 JoyProxy 凭据（<a href="../rotating/README.md" target="_blank" rel="noopener noreferrer">轮换</a> 或 <a href="../static/README.md" target="_blank" rel="noopener noreferrer">静态</a>）。
5. 可选：开启鉴权与流量上报 API。

| 需求 | 工具 |
| --- | --- |
| 单个浏览器 | <a href="browser-extension.md" target="_blank" rel="noopener noreferrer">浏览器扩展</a> |
| 本机端口给多 CLI | **代理服务器** |
| 手机 App | <a href="android-client.md" target="_blank" rel="noopener noreferrer">Android 客户端</a> |

程序**免费**；JoyProxy **云端流量**仍按订单在控制台计费。
