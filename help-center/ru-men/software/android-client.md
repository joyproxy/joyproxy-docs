# Android 代理客户端（Android Client）

**JoyProxy Android 客户端**是基于 **sing-box `libbox`** 的 HTTP / SOCKS5 代理应用。支持 **全局（Global）**、**白名单（Whitelist）**、**黑名单（Blacklist）** 三种路由范围，**无需 Root**。

[产品页](https://www.joyproxy.com/products/android-client.html) · [GitHub Releases（APK）](https://github.com/joyproxy/joyproxy-client-android/releases) · [源码](https://github.com/joyproxy/joyproxy-client-android)

> 完整图文说明以 [官方产品页](https://www.joyproxy.com/products/android-client.html) 为准；下文为与 App 一致的操作步骤摘要。

---

## 下载与安装

1. 打开 [GitHub Releases](https://github.com/joyproxy/joyproxy-client-android/releases) 最新版本。
2. 下载签名包 **`app-release.apk`**。
3. 在 Android 设备上允许 **安装未知来源应用**（若系统提示）。
4. 安装并打开 **JoyProxy**。

---

## 配置 JoyProxy 线路

在 App 中填写与 [提取（Endpoint Generator）](https://www.joyproxy.com/admin-ip-extraction-center.html) 一致的连接信息：

| 字段 | 动态代理示例 | 静态 / 自定义独享示例 |
| --- | --- | --- |
| **协议（Protocol）** | HTTP 或 SOCKS5 | HTTP 或 SOCKS5 |
| **地址（Host）** | `gate.joyproxy.com` | `us-ca.edge.joyproxy.com` |
| **端口（Port）** | `9001` | 如 `10001` / `20001` |
| **用户名 / 密码（可选）** | `GENERATED_USER` / [用户与白名单](https://www.joyproxy.com/admin-authorization.html) 中的密码 | 控制台代理 Username / Password |

也可填写任意第三方代理服务器，不经过 JoyProxy 计费。

---

## 使用步骤（与现网 App 文案一致）

1. 打开 JoyProxy，输入代理 **服务器地址** 与 **端口**（**HTTP** 或 **SOCKS5**）。
2. 可选：输入 **用户名** 与 **密码**。
3. 在**未连接**状态下，点击 **测试（Test）** 验证代理是否可达。
4. 选择 **代理范围（Proxy scope）**：
   - **全局（Global）** — 所有受支持应用的流量走代理；
   - **白名单（Whitelist）** — **仅选中应用**走代理；
   - **黑名单（Blacklist）** — **选中应用不走代理**，其余走代理。
5. 点击 **连接代理（Connect）**，在系统弹窗中授予 **VPN / 网络连接** 权限。
6. 连接成功后，状态栏显示 **钥匙图标**；在 App 内点击 **断开（Disconnect）** 结束。

> **重要**  
> 修改代理范围或应用列表后，需先 **断开** 再 **重新连接** 方可生效。

---

## 功能摘要

- **HTTP / SOCKS5**，主机可为 IP 或域名。
- **连接测试**仅断开时可用（与产品页一致）。
- App **设置**中可切换界面语言（**English** / **中文**）。
- 开源 **GPLv3**；核心为 sing-box libbox。

---

## 与其它方式对比

| 需求 | 方案 |
| --- | --- |
| 仅浏览器走代理 | [浏览器扩展](browser-extension.md) |
| Wi‑Fi 手动填代理、不装 App | [手机静态代理](../../best-practices/mobile-static-proxy.md) |
| 配合 [移动代理](../rotating/network-types.md) 做真机环境 | 本 Android 客户端 + 动态移动线路 |

从源码构建需自行编译 `libbox.aar`，见 [GitHub README](https://github.com/joyproxy/joyproxy-client-android)。
