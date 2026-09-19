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

- **运行状态（Run log）**：测试、连接、右键测站等流水写入此处，可 **清空（Clear）**。
- **高级（Advanced）**：指纹、代理范围、站点清理——见下文 **[高级设置详解](#高级设置详解)**。
- **系统（System）**：扩展界面语言/主题/打开方式、测通用的 **IP+Geo 通道**——见 **[系统与选项页](#系统与选项页)**。

弹窗里 **高级选项（Advanced options）** 折叠区仅含代理 **用户名 / 密码**；完整指纹与代理范围请在工作台 **高级** 中配置。

---

## 高级设置详解

打开 **工作台（Workbench）** → 下部页签 **高级（Advanced）**。下列能力用于降低指纹不一致、控制哪些请求走代理，以及在换线时清理站点数据。**扩展不做网页采集工作台**，也不替代官网的 OpenAPI / MCP 入口。

### 何时生效、如何保存

| 行为 | 说明 |
| --- | --- |
| **设为代理（Set as proxy）** | 应用当前代理，并套用你在 **高级** 里选的指纹/请求头相关项（通过请求头规则 + 页面注入实现）。 |
| **每次设为代理时随机（Randomize on apply）** | 该项右侧勾选后，**每次成功设为代理** 时从对应预设列表里随机一项（跳过「浏览器默认」与「自定义」）。Canvas 噪声、去除 Referer、发送 DNT、限制 WebRTC 在勾选随机时约为 **50% 开 / 50% 关**。 |
| **代理范围** | 修改后 **自动保存** 到本机扩展存储。 |
| **断开 / 恢复直连** | 清除扩展写入的 `chrome.proxy`；若扩展曾备份系统代理设置，恢复直连会回到接管前状态（选项页可 **清除扩展代理并恢复接管前设置**）。 |

测通（**测试（Test）**）只验证连通性与出口 IP，**不会**因为测试失败而改动当前代理。

### 常用（Common）

#### User-Agent（User-Agent）

网页与部分风控读到的浏览器标识。预设（与实现一致）：

| 预设 | 说明 |
| --- | --- |
| 浏览器默认 | 不改动 UA |
| Chrome · Windows / Chrome · macOS | 桌面 Chrome |
| Edge · Windows | Edge |
| Firefox · Windows | Firefox 风格 UA |
| Safari · macOS / Safari · iPhone | Safari 桌面 / 移动 |
| Chrome · Android | 移动 Chrome |
| **自定义（Custom）** | 在 **自定义 User-Agent** 中填写完整 UA 字符串，**覆盖**上方预设 |

可勾选 **每次设为代理时随机**，在除「浏览器默认」「自定义」外的预设中随机。UA 与真实系统差太多时，少数站点可能加强风控——建议与所选代理地区、语言、时区搭配使用。

#### 限制 WebRTC（Restrict WebRTC）

通过 Chrome `webRTCIPHandlingPolicy` 设为 `disable_non_proxied_udp`，**降低** WebRTC 泄漏真实 IP 的概率，**不能**保证所有通道都被挡住。可能影响依赖 WebRTC 的会议/通话类网站。

- 工作台 **高级** 中可固定开启，并支持「每次设为代理时随机」。
- **选项页** 另有 **连接成功后限制 WebRTC**（默认关），与全局连接卫生相关。

#### 清理浏览数据（需先切到目标标签页）

| 按钮 | 作用 |
| --- | --- |
| **清理当前站点 Cookie（Clean site cookies）** | 仅当前站 Cookie |
| **清理当前站点数据（Clean site data）** | 当前站 Cookie、本地存储与该站缓存 |
| **清理全部 Cookie（Clean all cookies）** | 全浏览器 Cookie（所有登录态会掉） |
| **清理缓存（Clear cache）** | 浏览器缓存，**不删** Cookie |

---

### 代理范围（Proxy scope）

决定 **哪些 URL 走当前浏览器代理**。两种模式：

| 模式 | 英文 UI | 行为 |
| --- | --- | --- |
| **全部走代理** | All via proxy | 除 **不走代理** 名单外，所有请求经代理 |
| **仅名单走代理** | Allowlist only | 只有 **走代理** 名单中的域名 / IP / URL 走代理，其余 **直连** |

**名单格式**（一行一条）：域名、`*.example.com` 通配、IP、或完整网址。

**默认不走代理（Bypass）** 已预填，避免 JoyProxy 控制台自身走代理形成环路：

- `localhost`、`127.0.0.1`、`<local>`
- `*.joyproxy.com`、`www.joyproxy.com`、`api.joyproxy.com`

可在 **走代理** / **不走代理** 文本框中增删。**选项页（Options）** 的 **Bypass 域名** 与上述绕过逻辑同一套数据，适合在独立标签页批量编辑。

---

### 更多选项（More options）

用于让 **页面 JavaScript 读到的环境**（语言、时区、屏幕、硬件、WebGL、字体、Canvas 等）更接近目标画像。建议 **时区 / 语言与出口 IP 地区一致**，减少「IP 在美国、时区在上海」类不一致。

每项均可单独勾选 **每次设为代理时随机**（从该下拉预设中随机，规则见上表）。

| 设置 | 英文 UI | 作用摘要 | 可选预设示例 |
| --- | --- | --- | --- |
| **语言** | Language | 影响 `navigator.language` 与请求 **Accept-Language** | 浏览器默认；中文（简体/繁体）；English (US/UK)；日本語；한국어；Deutsch；Français；Español |
| **时区** | Timezone | 影响页面读到的时区 | 浏览器默认；UTC；美国东/西/中部；伦敦；柏林；上海；东京；新加坡；香港 |
| **屏幕分辨率** | Screen resolution | `screen` 宽高指纹 | 浏览器默认；1920×1080；1366×768；1440×900；2560×1440；390×844（手机） |
| **设备像素比** | Device pixel ratio | `window.devicePixelRatio` | 浏览器默认；1×、1.25×、1.5×、2× |
| **CPU 核心数** | CPU cores | `navigator.hardwareConcurrency` | 浏览器默认；4 / 8 / 12 / 16 核 |
| **设备内存** | Device memory | `navigator.deviceMemory`（GB） | 浏览器默认；4 / 8 / 16 GB |
| **触控点数** | Touch points | `navigator.maxTouchPoints` | 浏览器默认；无触控；1 点；5 点 |
| **WebGL 显卡** | WebGL GPU | 伪装 WebGL vendor/renderer（**不能**改真实显卡驱动） | 浏览器默认；NVIDIA；Intel；AMD；Apple |
| **字体列表** | Font list | 伪装可探测字体集合 | 浏览器默认；Windows 常见字体；macOS 常见字体 |
| **Canvas 轻微噪声** | Canvas noise | 给 Canvas 读数加少量噪声，减轻固定指纹；极少数画布校验可能受影响 | 开/关，可随机 |
| **去除 Referer** | Strip Referer | 去掉跳转来源头；部分登录或防盗链站可能异常 | 开/关，可随机 |
| **发送 Do Not Track** | Send DNT | 请求带 `DNT: 1`；站点可忽略 | 开/关，可随机 |

实现上：UA / Referer / DNT / Accept-Language 等走 **declarativeNetRequest** 改请求头；时区、屏幕、硬件、WebGL、字体、Canvas 等通过 **内容脚本注入** 覆盖页面可见环境。未配置项保持浏览器真实值。

---

### 提取 API / JoyProxy 页内高级（与「高级」页签不同）

在 **API** 或 **JoyProxy** 来源下，**高级选项** 折叠区提供：

| 项 | 说明 |
| --- | --- |
| **名称（Name）** | 保存多条提取 API 时的显示名，默认可用主机名 |
| **正则（Regex）** | 从 API 返回文本中提取 `host:port`；**可空**，内置默认识别规则 |
| **用户名 / 密码** | 提取出的线路若需统一账密，在此填写 |

**模式**：

- **仅测试（Test only）**：拉取并逐条测通，**不改**浏览器代理；成功行可手动 **设为代理**。
- **测通后设为代理（Apply after successful test）**：第一条成功者 **自动设为代理**，其余成功行仍可手动切换；失败 **不改**当前代理。

**定时更换浏览器代理（Timed rotation）**：

- 开启后填写 **间隔（秒，可空）**（空则不等）、**次数（可空，最大 200）**（空则直到手动 **停止**）。
- 适用于 API 轮询与 JoyProxy 动态/静态提取循环换线。

JoyProxy **动态** 还可选：网络、国家、省/州、城市、**粘性 / 轮换** 会话、**粘性时长**。**静态** 含自定义端口线路，插件内 **不** 做端口轮换，以网站端配置为准。

---

### 右键：用当前代理测试此站

在任意网页右键 **用当前代理测试此站（Test this site with the current proxy）**（无需登录）。对 **当前标签页 URL** 发起经代理的请求，结果写入 **运行状态**；若尚未 **设为代理**，会提示需先连接。适合验证「这条线能不能打开这个站」，而不是只 ping 出口 IP。

---

## 系统与选项页

### 工作台 → 系统（System）

| 设置 | 选项 |
| --- | --- |
| **界面语言（UI language）** | 跟随浏览器 / English / 简体中文 / 繁體中文 |
| **外观（Theme）** | 跟随浏览器 / 浅色 / 深色 |
| **打开方式（Open with）** | **右侧侧栏（Side panel）**（Chrome 贴在窗口右侧；不支持侧栏的浏览器会改用独立窗口）/ **工具栏小窗口（Toolbar popup）** |
| **Target / IP+Geo Channel** | `ipinfo.io`、`ipwhois.app`、`ip-api.com`、`api.myip.com` 或 **自定义 URL（原文，不解析 JSON）** — 用于 **测试**、状态栏真实 IP、出口展示；**不走 JoyProxy 计费流量** |

### 扩展选项页（`chrome://extensions` → JoyProxy → 扩展程序选项）

| 区块 | 说明 |
| --- | --- |
| **Bypass 域名** | 与 **代理范围** 绕过名单相同，一行一条 |
| **IP + Geo 检测通道** | 与工作台 **系统** 中检测通道一致 |
| **连接卫生** | **连接成功后限制 WebRTC**；SOCKS5 账密限制说明文案 |
| **清除扩展代理并恢复接管前设置** | 紧急恢复浏览器代理到扩展接管之前 |

页脚说明：日常 **测通、连接请用工具栏弹窗**，选项页很少需要打开。

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
