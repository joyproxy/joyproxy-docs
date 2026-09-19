# JoyProxy 浏览器扩展（Browser Extension）

**JoyProxy 浏览器扩展**是面向 Chromium 内核（Chrome、Edge、Brave、Opera、Vivaldi 等，**Chrome 114+**）的 Manifest V3 **代理工作台**。可粘贴自有代理、配置供应商 **提取 API**，或在本浏览器已登录 [joyproxy.com](https://www.joyproxy.com) 后使用已购 **动态 / 静态 / 自定义** 线路。

扩展只通过 `chrome.proxy` 路由**当前浏览器**流量，**不会**修改 Windows / macOS **系统代理**（系统级联动请用 [代理检测工具（Proxy Tester）](proxy-tester.md)）。

[Chrome 网上应用店（Chrome Web Store）](https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng) · [产品页](https://www.joyproxy.com/products/browser-extension.html) · [GitHub](https://github.com/joyproxy/joyproxy-extension) · [隐私政策（Privacy Policy）](https://www.joyproxy.com/privacy-extension.html)

---

## 安装方式

### 方式 A：Chrome 网上应用店（推荐）

1. 打开 [Chrome 网上应用店](https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng)，点击 **添加到 Chrome（Add to Chrome）**。
2. 在工具栏 **固定（Pin）** JoyProxy 图标。

### 方式 B：开发者模式加载 ZIP（无法访问商店时）

1. 下载 [joyproxy-extension-unpacked.zip](https://github.com/joyproxy/joyproxy-extension/releases/latest/download/joyproxy-extension-unpacked.zip) 并解压。
2. 打开 `chrome://extensions`，开启 **开发者模式（Developer mode）**。
3. 点击 **加载已解压的扩展程序（Load unpacked）**，选择包含 `manifest.json` 的文件夹。
4. 更新版本后在扩展卡片点击 **重新加载（Reload）**。

也可克隆仓库后加载根目录：`git clone https://github.com/joyproxy/joyproxy-extension.git`，`git pull` 后同样 **重新加载**。

---

## 界面入口（与开源实现一致）

| 入口 | 用途 |
| --- | --- |
| **工具栏图标** | 打开 **弹窗（Popup）**：看直连/已连接状态、粘贴代理、**测试（Test）** / **设为代理（Set as proxy）** / **恢复直连（Restore direct）**；登录后可快速选 JoyProxy 线路。图标灰 = 直连，亮 = 已连接（可显示国码等角标）。 |
| **打开工作台（Open workbench）** | **侧栏（Side Panel）** 或独立窗口（可在 **系统（System）** 里选 **右侧侧栏（Side panel）** / **工具栏小窗口（Popup）**）。 |
| **选项页（Options）** | 在 `chrome://extensions` 中点 JoyProxy 的 **详细信息 → 扩展程序选项**。日常测通不必打开；用于 **Bypass 域名**、检测通道、WebRTC、一键清除扩展代理。 |
| **右键菜单** | 网页上 **用当前代理测试此站**（未登录也可用）。 |

设计原则：**弹窗三秒能连**；档案、批量 API、日志、指纹与代理范围在 **工作台** 完成。

---

## 三种使用入口

| 模式 | 是否需要 JoyProxy 账号 | 说明 |
| --- | --- | --- |
| **代理地址（Own proxy）** | 否 | 支持 `host:port`、`user:pass@host:port`、`http://` / `socks5://`；可 **保存（Save）**、**导入（Import）** 多组档案。 |
| **API（Extract API）** | 否 | 填写提取 URL、可选 **正则（Regex）**、可选账密；**仅测试（Test only）** 或 **测通后设为代理（Apply after successful test）**；可 **定时更换浏览器代理**（间隔秒数、次数上限）。 |
| **JoyProxy** | 使用已购线路时需登录 | 读取本浏览器在官网的会话；**动态**（网络/国家/州/城市、粘性/轮换、粘性时长）与 **静态**（静态与自定义端口合为一类）分栏操作。 |

使用自有代理或第三方 API **不消耗** JoyProxy 流量；仅经 JoyProxy 云端出口时才计费。扩展内 **不** 提供购买套餐、工单、OpenAPI / MCP、网页采集等控制台能力。

---

## 推荐操作流程（先测后连）

**测试失败不会改动当前浏览器代理。**

### 自有代理

1. 在弹窗或工作台 **代理地址** 粘贴线路，例如：
   ```text
   http://user123:pass123@us-ca.edge.joyproxy.com:10001
   ```
   动态示例（用户名来自 [提取（Endpoint Generator）](https://www.joyproxy.com/admin-ip-extraction-center.html)，密码来自 [用户与白名单（Users & Whitelist）](https://www.joyproxy.com/admin-authorization.html)）：
   ```text
   http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
   ```
2. 点击 **测试（Test）**，查看出口 IP、国家/地区与延迟。
3. 点击 **设为代理（Set as proxy）**；顶栏 **恢复直连（Restore direct）** 清除扩展代理。

### 提取 API

1. 工作台 → **API**。
2. 填写 API 地址；高级选项里可填 **名称**、**正则**（默认可识别 `host:port`）、代理 **用户名 / 密码**。
3. 选择 **仅测试** 或 **测通后设为代理**，可选 **定时更换浏览器代理** 与间隔/次数，点击 **开始测试（Start test）**。
4. 结果表可逐条 **设为代理**；停止定时任务会恢复直连或接管前的设置。

### JoyProxy 已购线路

1. 在 [joyproxy.com](https://www.joyproxy.com) 用邮箱 / Google / GitHub **登录（Sign in）**（扩展内 **登录** 会打开官网登录页）。
2. 工作台 → **JoyProxy**；已登录则自动加载产品。
3. 选动态或静态参数 → **仅测试** 或 **测通后设为代理**（同样支持定时更换）→ **开始测试**。
4. **管理（Manage）** 打开 [控制台概览（Overview）](https://www.joyproxy.com/admin-overview.html)；**退出（Sign out）** 仅退出扩展侧会话，不会退出官网账号。

---

## 工作台结构

### 上部：线路来源

- **代理地址**：地址/端口、账密、测试、设为代理、保存与批量导入（每行一条 `host:port` 或完整 URI）。
- **API**：与桌面 [Proxy Tester](proxy-tester.md) 类似的提取 + 逐条测试逻辑，并可直接写入浏览器代理。
- **JoyProxy**：账户栏（管理 / 刷新 / 退出）、动态地理与会话、静态线路下拉。

### 下部：运行状态 / 高级 / 系统

- **运行状态（Run log）**：本次测试与连接流水，可 **清空（Clear）**。
- **高级（Advanced）**：
  - **常用**：**User-Agent**（预设或自定义）、**限制 WebRTC（Restrict WebRTC）**、**清理当前站点 Cookie / 数据**；多数项可勾 **每次设为代理时随机（Randomize on apply）**。
  - **代理范围（Proxy scope）**：**全部走代理（All via proxy）**（除名单外）或 **仅名单走代理（Allowlist only）**；**不走代理（Bypass）** 名单已预填 JoyProxy 官网与 API；**走代理（Include）** 支持域名、`*.` 通配、IP、完整 URL。
  - **更多选项**：语言、时区、屏幕分辨率、设备像素比、CPU 核心数、设备内存、触控点数、WebGL 显卡、字体列表、Canvas 轻微噪声、去除 Referer、发送 Do Not Track；并可 **清理全部 Cookie**、**清理缓存**。
- **系统（System）**：界面语言（跟随浏览器 / English / 简体中文 / 繁體中文）、外观（浅色/深色）、打开方式（侧栏/弹窗）；**Target / IP+Geo Channel**（`ipinfo.io`、`ipwhois.app`、`ip-api.com`、`api.myip.com` 或自定义 URL）——**不消耗 JoyProxy 流量**。

选项页中的 **Bypass 域名** 与 **IP + Geo 检测通道** 与工作台 **系统** 检测逻辑一致；还可设置 **连接成功后限制 WebRTC** 与 **清除扩展代理并恢复接管前设置**。

---

## HTTP 账密与本地转发（Local relay）

带 **用户名 / 密码** 的 **HTTP** 代理在连接前会经本机 **本地转发**（默认 `127.0.0.1:17890`，由 `native\joyproxy-relay` 自动拉起，无需安装 Python）。若提示 **本地转发未启动**：

1. 在扩展目录双击运行 **`scripts\install-relay.cmd`** 注册 Native Messaging 主机（开发者加载解压版时尤其需要）。
2. 在 `chrome://extensions` **重新加载** JoyProxy 后再 **测试**。

若扩展 ID 与注册不一致，需先移除扩展再重新 **加载已解压的扩展程序**。

---

## 限制与说明

| 项目 | 说明 |
| --- | --- |
| 浏览器支持 | 仅 **Chromium**，**不支持 Firefox**。 |
| SOCKS5 账密 | Chrome **无法** 为 SOCKS5 完整携带用户名密码；请改用 **HTTP**，或对端 **IP 白名单**。连接前会给出非阻断说明，不会静默失败。 |
| 系统代理 | 只改本浏览器；改 Windows 系统代理请用 [Proxy Tester](proxy-tester.md)。 |
| 隐私 | 登录信息与代理账密仅存本机；测通时访问所选 IP 查询接口；登录仅访问 `www.joyproxy.com` / `api.joyproxy.com`。详见 [扩展隐私政策](https://www.joyproxy.com/privacy-extension.html)。 |

### 权限摘要

| 权限 | 用途 |
| --- | --- |
| `proxy` | 设置或恢复浏览器代理 |
| `storage` | 本地保存代理与设置 |
| `sidePanel` | 工作台侧栏 |
| `contextMenus` | 右键测试当前站 |
| `webRequest` / `webRequestAuthProvider` | HTTP 代理账密 |
| `tabs` / `scripting` | 登录页与官网会话 |
| `privacy` | 可选限制 WebRTC |
| `webNavigation` / `declarativeNetRequest` | 请求头与 UA |
| `browsingData` | 清理 Cookie / 缓存 |
| `<all_urls>` | 浏览走代理及隐私相关能力 |

---

## 与 Proxy Tester 的分工

| | **浏览器扩展** | **代理检测工具** |
| --- | --- | --- |
| 平台 | Chromium | Windows 桌面（亦支持源码 / Android 等构建） |
| 代理作用范围 | 仅当前浏览器 | 可选 **同步 Windows 系统浏览器代理** |
| 批量提取 API | 工作台 API + 定时轮换 | **批量测试（Batch Test）**、Live Log、循环间隔 |
| UDP | 浏览器侧不主打 UDP 验证 | **SOCKS5 / UDP** + DNS 探测 |

许可：**MIT**（© JoyProxy）。实现细节以 [GitHub README](https://github.com/joyproxy/joyproxy-extension) 为准。
