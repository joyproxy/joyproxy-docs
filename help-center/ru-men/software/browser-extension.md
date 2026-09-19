# JoyProxy 浏览器扩展（Browser Extension）

**JoyProxy 浏览器扩展**是面向 Chromium 内核（Chrome、Edge、Brave、Opera、Vivaldi 等，**Chrome 114+**）的 Manifest V3 代理工作台。可粘贴自有代理、调用供应商 **提取 API**，或在浏览器已登录 [joyproxy.com](https://www.joyproxy.com) 后加载已购 **动态 / 静态 / 自定义** 线路。

**只路由当前浏览器流量**，不会修改 Windows / macOS **系统代理**。

[Chrome 网上应用店（Chrome Web Store）](https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng) · [产品页](https://www.joyproxy.com/products/browser-extension.html) · [GitHub](https://github.com/joyproxy/joyproxy-extension) · [隐私政策（Privacy Policy）](https://www.joyproxy.com/privacy-extension.html)

---

## 安装方式

### 方式 A：Chrome 网上应用店（推荐）

1. 打开 [Chrome 网上应用店](https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng)，点击 **添加到 Chrome（Add to Chrome）**。
2. 在浏览器工具栏 **固定（Pin）** JoyProxy 图标。

Edge 等 Chromium 浏览器也可从商店安装同一扩展。

### 方式 B：开发者模式加载 ZIP（无法访问商店时）

1. 下载 [joyproxy-extension-unpacked.zip](https://github.com/joyproxy/joyproxy-extension/releases/latest/download/joyproxy-extension-unpacked.zip) 并解压。
2. 打开 `chrome://extensions`，开启 **开发者模式（Developer mode）**。
3. 点击 **加载已解压的扩展程序（Load unpacked）**，选择包含 `manifest.json` 的文件夹。
4. 更新版本时在扩展卡片点击 **重新加载（Reload）**。

---

## 三种使用入口

与 [产品页](https://www.joyproxy.com/products/browser-extension.html) 一致：

| 模式 | 是否需要 JoyProxy 账号 | 说明 |
| --- | --- | --- |
| **自有代理（Own proxies）** | 否 | 支持 `host:port`、`user:pass@host:port`、`http://` / `socks5://` URI |
| **提取 API（Extract API）** | 否 | 填写供应商提取 URL，可选正则；逐条测试，可测通后应用并定时轮换 |
| **JoyProxy 线路（JoyProxy products）** | 是（使用已购线路时） | 本浏览器已在 joyproxy.com 登录时，工作台自动识别会话并加载动态/静态线路 |

使用自有代理或第三方 API **不消耗** JoyProxy 流量；仅经 JoyProxy 云端出口时才计费。

---

## 推荐操作流程（先测后连）

### 自有代理

1. 在 **弹窗（Popup）** 或 **工作台（Workbench）** → **代理地址（Proxy address）** 粘贴线路，例如静态独享：
   ```text
   http://user123:pass123@us-ca.edge.joyproxy.com:10001
   ```
   动态代理示例（用户名来自 [提取（Endpoint Generator）](https://www.joyproxy.com/admin-ip-extraction-center.html)，密码来自 [用户与白名单（Users & Whitelist）](https://www.joyproxy.com/admin-authorization.html)）：
   ```text
   http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
   ```
2. 点击 **测试（Test）**，查看出口 IP、国家/地区与延迟。**测试失败不会改动当前代理。**
3. 点击 **设为代理（Set as proxy）** 生效；需要恢复时 **一键恢复直连（Restore direct）** 或恢复上一代理。

### 提取 API

1. 打开 **工作台** → **API** 页签。
2. 填写提取 URL（及可选正则规则）。
3. 选择 **仅测试（Test only）** 或 **测通后设为浏览器代理（Apply after successful test）**，再开始轮询。
4. 停止已应用的会话会恢复直连/上一设置。

### JoyProxy 已购线路

1. 在 [joyproxy.com](https://www.joyproxy.com) 使用邮箱 / Google / GitHub **登录（Sign in）**。
2. 打开扩展 **工作台** → **JoyProxy** 页签；若本浏览器已登录官网，**已购产品会自动加载**（动态流量包、静态独享、自定义端口等）。
3. 选择线路 → **测试（Test）** → **设为代理（Set as proxy）**。
4. **管理（Manage）** 打开 [控制台概览（Overview）](https://www.joyproxy.com/admin-overview.html)；扩展内 **退出登录（Sign out）** 仅退出扩展会话，不会退出官网账号。

---

## 工作台功能摘要

- **弹窗**：当前状态、快速粘贴、登录后 JoyProxy 线路快捷选择；可 **打开工作台（Open workbench）** 进入完整界面。
- **保存配置（Profiles）**：多组代理档案，支持列表导入。
- **代理范围（Proxy scope）**（高级 **Advanced**）：
  - **全部走代理** 或 **仅名单站点**；
  - 绕过列表已预填 JoyProxy 官网与 API 域名，避免控制台自身走代理环路。
- **高级（Advanced）**：可选 **User-Agent**、**WebRTC 限制（WebRTC restriction）** 防真实 IP 泄漏、清理当前站点 **Cookie** / 缓存、Canvas 噪声等指纹相关项；多数项可设为 **每次应用代理时随机**。
- **系统（System）**：界面语言（简体 / 繁体 / English）、主题；测试时使用的 IP+地理通道（`ipinfo.io`、`ip-api.com` 等或自定义 URL）——**测通检查不消耗 JoyProxy 流量**。

---

## 常见问题

| 问题 | 说明 |
| --- | --- |
| 会改系统代理吗？ | **不会**，仅本 Chromium 浏览器。 |
| 必须要 JoyProxy 账号吗？ | 测自有代理不需要；用官网已购线路需登录。 |
| 和代理检测工具区别？ | [Proxy Tester](proxy-tester.md) 是 Windows 桌面批量检测；扩展在浏览器内直接应用代理。 |

源码与权限说明见 [GitHub README](https://github.com/joyproxy/joyproxy-extension)。
