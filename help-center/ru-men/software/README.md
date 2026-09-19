# 软件工具（Software Tools）

JoyProxy 提供一组**免费开源客户端**（网关、浏览器插件、桌面检测工具、Android 应用），用于在本地或浏览器中更方便地使用代理。软件本身不收费；若上游指向 JoyProxy 云端线路，**代理流量与网页抓取积分**仍按 [控制台](https://www.joyproxy.com/admin-overview.html) 订单计费。

[软件中心（Software Hub）](https://www.joyproxy.com/products/software.html)

---

## 与云端代理产品的关系

| 场景 | 推荐工具 | JoyProxy 凭据来源 |
| --- | --- | --- |
| 只在 Chrome / Edge 里走代理 | [浏览器扩展（Browser Extension）](browser-extension.md) | [提取（Endpoint Generator）](https://www.joyproxy.com/admin-ip-extraction-center.html) 或扩展内登录加载已购线路 |
| 上线前批量测 HTTP/SOCKS/UDP | [代理检测工具（Proxy Tester）](proxy-tester.md) | 从提取页复制 URI，或配置供应商 **提取 API** |
| 命令行只认 `127.0.0.1`、或团队内网网关 | [代理服务器网关（Proxy Server）](proxy-server.md) | `-parent` 指向 JoyProxy 上级，或鉴权 API 返回 `upstream` |
| 手机 / 模拟器按 App 分流 | [Android 客户端（Android Client）](android-client.md) | 提取页获取 host、port、账密 |

自有第三方代理也可用于上述工具，**不消耗** JoyProxy 流量。

---

## 开源产品一览

| 产品 | 平台 | 协议 | 开源仓库 |
| --- | --- | --- | --- |
| **浏览器扩展** | Chromium（Chrome 114+） | HTTP / SOCKS5 | [joyproxy-extension](https://github.com/joyproxy/joyproxy-extension) |
| **代理检测工具** | Windows 桌面（EXE） | HTTP / HTTPS / SOCKS5 TCP·UDP | [joyproxy-tester](https://github.com/joyproxy/joyproxy-tester) |
| **代理服务器网关** | Linux & Windows（CLI / GUI） | HTTP / SOCKS5 网关（`joyproxy sps`） | [joyproxy-server](https://github.com/joyproxy/joyproxy-server) |
| **Android 客户端** | Android（APK） | HTTP / SOCKS5 | [joyproxy-client-android](https://github.com/joyproxy/joyproxy-client-android) |

---

## 本章导读

1. [JoyProxy 浏览器扩展](browser-extension.md) — 三种入口（自有代理 / 提取 API / JoyProxy 线路）、工作台与高级设置
2. [代理检测工具](proxy-tester.md) — 单条与批量测试、提取 API、Windows 系统代理联动
3. [代理服务器网关](proxy-server.md) — `joyproxy sps` 五种启动模式与对接 JoyProxy
4. [Android 代理客户端](android-client.md) — 全局 / 白名单 / 黑名单路由与连接流程

系统级代理（不改浏览器扩展时）可参考 [Windows 11 系统代理](../../best-practices/windows-11-system-proxy.md)、[手机静态代理](../../best-practices/mobile-static-proxy.md)。
