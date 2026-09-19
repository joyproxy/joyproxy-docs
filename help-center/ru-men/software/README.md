# 软件工具（Software Tools）

为了让用户更便捷地在各种设备、浏览器及开发环境中使用代理，JoyProxy 官方团队开发并维护了一系列**免费开源/免费工具软件**。

这些客户端软件本身 **100% 免费** 使用，你可以使用它们来连接 JoyProxy 的 [动态代理](../rotating/README.md)、[静态独享代理](../static/README.md)、[自定义独享代理](../custom/README.md)，甚至使用它们来测试或转发你自建的第三方代理服务器。代理流量与抓取积分在 JoyProxy 控制台统一结算。

---

## 官方软件工具概览

| 工具名称 | 适用平台 | 核心功能与特色 | 典型适用场景 | 指南文档 |
| --- | --- | --- | --- | --- |
| **JoyProxy 浏览器扩展<br>（Browser Extension）** | Chrome / Edge / Brave 等 Chromium 浏览器 | 免改系统代理、按域名分流、一键从 JoyProxy 控制台同步已购线路、WebRTC 防泄漏 | 手工测试、海外网页浏览、多账号环境检查 | [查看指南](browser-extension.md) |
| **代理检测工具<br>（Proxy Tester）** | Windows 桌面版 | 批量检测 HTTP / SOCKS5 代理连通性、出口 IP、响应延迟与地理位置 | 上线前批量校验代理列表、排除故障节点 | [查看指南](proxy-tester.md) |
| **代理服务器网关<br>（Proxy Server）** | Windows / Linux / macOS (CLI) | 本地 HTTP/SOCKS5 代理中转网关、支持聚合上游及团队多用户鉴权 | 命令行工具中转、本地服务代理桥接、团队集中中转 | [查看指南](proxy-server.md) |
| **Android 客户端<br>（Android Client）** | Android 手机 / 模拟器 | 免 Root 运行、基于 V2Ray/sing-box 内核、支持按应用（App）精确分流 | 移动端网页测试、手机应用分流代理、配合移动代理使用 | [查看指南](android-client.md) |

---

## 本章内容导览

建议按顺序阅读以下指南：

1. [快速开始](quick-start.md) — 4 步极简选型与配置接入流程
2. [JoyProxy 浏览器扩展](browser-extension.md) — Chrome / Edge 扩展安装、登录同步与高级分流配置
3. [代理检测工具](proxy-tester.md) — Windows 桌面批量检测工具使用教程与参数说明
4. [代理服务器网关](proxy-server.md) — 开源代理网关本地部署、命令行桥接与团队中转架构
5. [Android 代理客户端](android-client.md) — 安卓免 Root 客户端安装与按 App 分流代理指南
