# 软件工具

为了方便在不同操作系统和业务环境中快速接入代理，JoyProxy 提供了一套开源的客户端工具，涵盖浏览器插件、桌面连通性检测工具、中继网关服务以及 Android 移动端。

这些客户端本身完全免费且开放源代码。如果上游对接的是 JoyProxy 的云端代理，实际产生的流量或积分仍由 [JoyProxy 控制台](https://www.joyproxy.com/admin-overview.html) 统一计费；如果使用自建或第三方代理，工具内部不会产生任何费用，也不消耗 JoyProxy 的流量。

相关安装包与在线说明可访问 [软件中心](https://www.joyproxy.com/products/software.html)。

---

## 常用场景与工具选型

在日常开发和运维中，可以根据工作环境选择最合适的工具：

- **仅在网页浏览或单浏览器中抓取数据**：推荐使用 [浏览器扩展](browser-extension.md)。它只管理当前 Chromium 浏览器的代理与指纹，不干扰操作系统的全局网络。
- **批量验证代理有效性、排查节点故障**：推荐使用 [代理检测工具](proxy-tester.md)。支持 HTTP 和 SOCKS5（含 UDP ASSOCIATE 探测），可对接服务商的提取 API 自动轮询并统计连通率与延迟。
- **本地程序只支持 127.0.0.1、或局域网需要统一代理出口**：推荐使用 [代理服务器网关](proxy-server.md)。通过轻量二进制程序监听指定端口，将局域网或本地 CLI 流量转发到上游云端线路。
- **手机真实环境或模拟器分流**：推荐使用 [Android 客户端](android-client.md)。支持基于应用白名单与黑名单的分流策略，无需 Root 即可运行。

---

## 开源工具清单

| 工具名称 | 适用平台 | 支持协议 | 开源仓库 |
| --- | --- | --- | --- |
| **浏览器扩展** | Chrome / Edge 等 Chromium 浏览器（内核 114+） | HTTP / SOCKS5 | [joyproxy-extension](https://github.com/joyproxy/joyproxy-extension) |
| **代理检测工具** | Windows 桌面（免安装单文件 EXE） | HTTP / HTTPS / SOCKS5 TCP & UDP | [joyproxy-tester](https://github.com/joyproxy/joyproxy-tester) |
| **代理服务器网关** | Linux & Windows（CLI / GUI） | HTTP / SOCKS5 网关转发（`joyproxy sps`） | [joyproxy-server](https://github.com/joyproxy/joyproxy-server) |
| **Android 客户端** | Android 7.0+（APK） | HTTP / SOCKS5 | [joyproxy-client-android](https://github.com/joyproxy/joyproxy-client-android) |

---

## 本章目录

- [JoyProxy 浏览器扩展](browser-extension.md)：扩展的安装方法、三种线路来源（自备节点、API 提取、JoyProxy 账号同步）、工作台侧栏以及指纹与分流的高级设置。
- [代理检测工具](proxy-tester.md)：单节点快速测通、API 批量提取与自动顺序测速、Windows 系统代理同步技巧。
- [代理服务器网关](proxy-server.md)：命令行与 GUI 的运行方式、五种授权与转发模式，以及对接 JoyProxy 云端代理的具体命令。
- [Android 客户端](android-client.md)：应用分流规则配置、线路测试与 VPN 隧道连接流程。

如需在操作系统层面直接配置网络代理，也可参阅最佳实践中的 [Windows 11 系统代理设置](../../best-practices/windows-11-system-proxy.md) 与 [手机移动网络代理设置](../../best-practices/mobile-static-proxy.md)。
