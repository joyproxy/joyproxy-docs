# 快速开始

JoyProxy 软件放在云端线路（或自建代理）**前面**。应用本身免费；**流量与抓取积分**在控制台结算。

最快路径：装**浏览器扩展**，粘贴一行、测试、应用 — 只影响当前 Chromium 浏览器。

## 选哪个工具

| 需求 | 工具 | 接着看 |
| --- | --- | --- |
| 只代理本机 Chrome / Edge | 浏览器扩展 | 下文五步 |
| 批量测很多 HTTP/SOCKS 线 | 代理检测工具 | <a href="proxy-tester.md" target="_blank" rel="noopener noreferrer">代理检测工具</a> |
| 命令行只认 localhost | 代理服务器 | <a href="proxy-server.md" target="_blank" rel="noopener noreferrer">代理服务器</a> |
| 手机按应用走代理 | Android 客户端 | <a href="android-client.md" target="_blank" rel="noopener noreferrer">Android 客户端</a> |

仍需一条可用线路：<a href="../rotating/quick-start.md" target="_blank" rel="noopener noreferrer">轮换</a>、<a href="../static/quick-start.md" target="_blank" rel="noopener noreferrer">静态</a> 或 <a href="../custom/quick-start.md" target="_blank" rel="noopener noreferrer">定制</a>。

## 五分钟：浏览器扩展

1. 从 <a href="https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng" target="_blank" rel="noopener noreferrer">Chrome 网上应用店</a> 安装并固定 **JoyProxy**。
2. 粘贴 URI，或登录后从 <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">我的代理</a> 加载：

```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
http://USER:PASS@HOST:PORT
```

3. 点 **Test**，确认出口 IP 不是家里宽带 IP。
4. 点 **Apply**。系统代理不会被改掉。

详见 <a href="browser-extension.md" target="_blank" rel="noopener noreferrer">浏览器扩展</a>。

## 工具只接受 localhost

运行 <a href="proxy-server.md" target="_blank" rel="noopener noreferrer">代理服务器</a>，上游指向 JoyProxy，应用里填 `127.0.0.1` 与本地端口。

## 接下来

| 任务 | 页面 |
| --- | --- |
| 轮换网关字段 | <a href="../rotating/quick-start.md" target="_blank" rel="noopener noreferrer">轮换快速开始</a> |
| 独享 host:port | <a href="../static/quick-start.md" target="_blank" rel="noopener noreferrer">静态快速开始</a> |
| Windows / Chrome 系统代理 | <a href="../../best-practices/windows-11-system-proxy.md" target="_blank" rel="noopener noreferrer">最佳实践</a> |
