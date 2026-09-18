# 快速开始

JoyProxy 软件放在云端线路（或自建代理）**前面**。应用本身免费；**流量与抓取积分**在控制台结算。

最快路径：装**浏览器扩展**，粘贴一行、测试、应用 — 只影响当前 Chromium 浏览器。

## 选哪个工具

| 需求                  | 工具          | 接着看                              |
| ------------------- | ----------- | -------------------------------- |
| 只代理本机 Chrome / Edge | 浏览器扩展       | 下文五步                             |
| 批量测很多 HTTP/SOCKS 线  | 代理检测工具      | [代理检测工具](proxy-tester.md)        |
| 命令行只认 localhost     | 代理服务器       | [代理服务器](proxy-server.md)         |
| 手机按应用走代理            | Android 客户端 | [Android 客户端](android-client.md) |

仍需一条可用线路：[轮换](../rotating/quick-start.md)、[静态](../static/quick-start.md) 或 [定制](../custom/quick-start.md)。

## 五分钟：浏览器扩展

1. 从 [Chrome 网上应用店](https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng) 安装并固定 **JoyProxy**。
2. 粘贴 URI，或登录后从 [我的代理](https://www.joyproxy.com/admin-my-orders.html) 加载：

```
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
http://USER:PASS@HOST:PORT
```

3. 点 **Test**，确认出口 IP 不是家里宽带 IP。
4. 点 **Apply**。系统代理不会被改掉。

详见 [浏览器扩展](browser-extension.md)。

## 工具只接受 localhost

运行 [代理服务器](proxy-server.md)，上游指向 JoyProxy，应用里填 `127.0.0.1` 与本地端口。

## 接下来

| 任务                    | 页面                                                        |
| --------------------- | --------------------------------------------------------- |
| 轮换网关字段                | [轮换快速开始](../rotating/quick-start.md)                      |
| 独享 host:port          | [静态快速开始](../static/quick-start.md)                        |
| Windows / Chrome 系统代理 | [最佳实践](../../zui-jia-shi-jian/windows-11-system-proxy.md) |
