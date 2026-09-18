# 代理检测工具

Windows 桌面工具，上线前检测 **HTTP**、**SOCKS5 TCP**、**SOCKS5 UDP**。

<a href="https://www.joyproxy.com/products/tester.html" target="_blank" rel="noopener noreferrer">产品页</a> · <a href="https://github.com/joyproxy/joyproxy-tester/releases/latest" target="_blank" rel="noopener noreferrer">下载</a>

## 能测什么

- 代理是否接通、出口 IP 是否正确
- 国家是否与生成/购买一致
- 从端点导出或文本文件批量测（支持正则 + 顺序执行）

## 快速使用

1. 在 <a href="https://github.com/joyproxy/joyproxy-tester/releases/latest" target="_blank" rel="noopener noreferrer">GitHub Releases</a> 下载 Windows 版。
2. 粘贴代理串（`host:port` 或带账号密码的完整 URI）。
3. 运行测试，查看出口 IP / 地域。
4. 轮换线：先在 <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成</a> 生成用户名，配 Users & Whitelist 密码 — <a href="../rotating/first-request.md" target="_blank" rel="noopener noreferrer">轮换首次请求</a>。

| 线路类型 | 粘贴内容 |
| --- | --- |
| 轮换 | `gate.joyproxy.com:9001` + 生成用户名 + 密码 |
| 静态 / 定制 | 生成器里的 host 与 port |

开源（MIT），也可用 Python 3.10+ 跑源码。

测通后可用 <a href="browser-extension.md" target="_blank" rel="noopener noreferrer">浏览器扩展</a> 做点选验证。
