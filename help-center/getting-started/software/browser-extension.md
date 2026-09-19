# JoyProxy 浏览器扩展

**JoyProxy 浏览器扩展**是一款面向 Chromium 内核浏览器的代理管理工作台，适用于 Google Chrome、Microsoft Edge、Brave、Opera 及 Vivaldi 等现代浏览器（要求 Chrome 内核版本 114 及以上）。

扩展基于 Manifest V3 标准开发，所有的代理规则都只作用于**当前浏览器实例**，不会改动 Windows 或 macOS 的系统全局网络。无论是临时的单节点验证、第三方提取 API 的轮换调度，还是直接载入在 JoyProxy 购买的云端线路，都可以在扩展内一站式完成。

相关地址：  
<a href="https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng" target="_blank" rel="noopener noreferrer">Chrome 网上应用店</a> · <a href="https://www.joyproxy.com/products/browser-extension.html" target="_blank" rel="noopener noreferrer">产品页面</a> · <a href="https://github.com/joyproxy/joyproxy-extension" target="_blank" rel="noopener noreferrer">GitHub 仓库</a> · <a href="https://www.joyproxy.com/privacy-extension.html" target="_blank" rel="noopener noreferrer">隐私政策</a>

---

## 安装方式

### 方式一：通过 Chrome 网上应用店安装（推荐）

1. 访问 <a href="https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng" target="_blank" rel="noopener noreferrer">Chrome 网上应用店</a>。
2. 点击 **添加到 Chrome（Add to Chrome）** 完成安装。
3. 安装完成后，在浏览器右上角的拼图图标中将 JoyProxy **固定（Pin）** 到工具栏，方便日常快速切换。

*注：Microsoft Edge 用户同样可以直接打开上述 Chrome 商店链接安装该扩展。*

### 方式二：离线加载 ZIP 包（开发者模式）

在无法直接连接 Chrome 应用店的环境下，可手动加载离线版本：

1. 前往 GitHub Releases 下载最新的 <a href="https://github.com/joyproxy/joyproxy-extension/releases/latest/download/joyproxy-extension-unpacked.zip" target="_blank" rel="noopener noreferrer">joyproxy-extension-unpacked.zip</a> 并解压到本地文件夹。
2. 在浏览器地址栏输入 `chrome://extensions` 打开扩展管理页，开启右上角的 **开发者模式（Developer mode）**。
3. 点击左上角的 **加载已解压的扩展程序（Load unpacked）**，选中包含 `manifest.json` 的解压目录。
4. 后续更新版本时，只需覆盖本地文件，并在扩展页面点击该卡片上的 **重新加载（Reload）** 图标即可。

---

## 界面与主要入口

扩展根据日常操作频率设计了两种主要的交互视图：

- **工具栏弹窗（Popup）**：点击工具栏的 JoyProxy 图标即可弹出。用于最核心的高频操作，例如查看当前连接状态、快速粘贴代理节点、发起连通性测试、一键连接或恢复直连。如果已登录 JoyProxy 账号，还可以在这里快速选择已购线路。图标呈亮色并带有国家代码标识时表示代理已生效，灰色则代表当前处于直连状态。
- **工作台侧栏（Side Panel）**：点击弹窗底部的 **打开工作台（Open workbench）**，浏览器右侧会展开完整的管理面板。这里支持多代理档案保存、批量导入、第三方 API 轮换调度、详细运行日志，以及完整的代理分流与指纹伪装设置。
- **网页右键菜单**：在任意网页上点击右键，均可通过 **用当前代理测试此站（Test this site with the current proxy）** 快速验证当前代理能否正常访问目标站点。
- **扩展选项页（Options）**：在浏览器扩展详情中点击选项即可打开独立页面，主要用于批量维护绕过代理的域名列表（Bypass）、切换公共 IP 探测接口或恢复接管前的代理配置。

---

## 三种线路接入方式

扩展对各类代理来源提供平等的支持，不强制绑定账号：

1. **自备代理（Own proxy）**  
   支持粘贴 `host:port`、`user:pass@host:port` 或标准的 `http://` 与 `socks5://` 链接。可在本地保存多组档案并支持文本批量导入，**无需登录 JoyProxy 账号**，也不会产生任何云端计费。
2. **提取 API（Extract API）**  
   支持填入第三方服务商提供的代理提取链接，并可指定正则表达式与预设账密。扩展支持单次测通后自动设为代理，也支持按照预定时间间隔自动轮询更换新 IP。
3. **JoyProxy 已购线路**  
   若当前浏览器已经在 <a href="https://www.joyproxy.com" target="_blank" rel="noopener noreferrer">joyproxy.com</a> 登录过控制台，工作台会自动识别用户凭据并加载名下的动态住宅流量包、静态独享或自定义端口线路。在扩展中按需选择国家、城市与会话类型即可，无需繁琐地手动复制长链接。

---

## 基本操作流程

日常使用时，建议遵循**先测试连通性，再应用到浏览器**的原则。如果节点不可用，测试失败不会破坏当前浏览器原有的网络连接。

### 连接自备代理

1. 打开弹窗或工作台的 **代理地址（Proxy Address）** 标签页。
2. 在地址栏中粘贴代理节点（如 `http://user:pass@us-ca.edge.joyproxy.com:10001`）。
3. 点击 **测试（Test）**，等待系统返回出口公网 IP、地理位置与网络延迟。
4. 确认信息无误后，点击 **设为代理（Set as proxy）** 立即接管浏览器流量。
5. 需要停止使用时，点击顶部的 **恢复直连（Restore direct）** 即可一键恢复。

### 配置提取 API 自动轮询

1. 打开工作台切换到 **API** 标签页。
2. 填入服务商的提取 URL。如果有特殊格式要求，可在高级选项中填入提取正则表达式或统一的代理账号密码。
3. 运行模式可选择 **仅测试（Test only）**（仅拉取并输出连通率统计）或 **测通后设为代理（Apply after successful test）**（首个可用节点自动生效）。
4. 如果需要定时刷新，勾选 **定时更换浏览器代理** 并设定轮换间隔（秒）和总次数，点击 **开始测试（Start test）** 即可进入后台轮换模式。

### 调用 JoyProxy 账号中的云端线路

1. 确保在当前浏览器已登录官网控制台，随后打开工作台的 **JoyProxy** 标签页。
2. 系统会自动列出当前可用的产品。选择 **动态** 或 **静态** 模式：
   - 动态线路：可按需选择目标国家、省州、城市，并指定粘性会话时长或按次轮换。
   - 静态线路：直接在下拉列表中挑选分配好的固定 IP 节点。
3. 点击 **测试（Test）** 验证后，点击 **设为代理（Set as proxy）** 即可生效。

---

## 高级设置与环境隔离

在工作台下方的 **高级（Advanced）** 面板中，提供了丰富的网络分流与浏览器指纹保护选项，帮助减少多账号操作中的环境关联风险。

所有配置在点击 **设为代理** 时随同网络规则一起生效。

### 1. 代理分流范围（Proxy scope）

你可以精准控制哪些请求必须通过代理转发、哪些保持本地直连：

- **全部代理（All via proxy）**：默认模式。除指定的直连名单外，所有网页和请求全部经由代理转发发出。
- **仅名单代理（Allowlist only）**：只有白名单中列出的域名、IP 或 URL 前缀通过代理转发，其余流量全部本地直连。

在 **直连绕过（Bypass）** 规则中，扩展默认预置了 `localhost`、`127.0.0.1` 以及 `*.joyproxy.com`，确保即便代理节点异常，也不会阻断访问官网控制台与本地服务。名单支持通配符（如 `*.example.com`），每行一条。

### 2. 常用防护与环境伪装

- **User-Agent 替换**：内置了主流桌面端（Windows / macOS 下的 Chrome、Edge、Firefox、Safari）与移动端（Android、iPhone）的常见 UA。支持勾选 **每次设为代理时随机**，在每次应用新代理时自动换用不同的客户端标识，也可以完全自定义填写。
- **限制 WebRTC 泄露**：启用后会将浏览器的 WebRTC IP 策略设为 `disable_non_proxied_udp`，有效防止由于 STUN 请求绕过代理而泄露本机的真实局域网或公网 IP。
- **快捷清理浏览痕迹**：在切换不同地区的代理前，可以在面板中一键 **清理当前站点 Cookie**、**清理当前站点全部数据**（包括 LocalStorage 与缓存），或直接 **清理全部 Cookie** 与 **清理浏览器缓存**，避免跨会话残留识别标记。

### 3. 指纹与底层环境选项

为了满足更高要求的反指纹识别需求，扩展支持在页面载入时动态模拟底层运行环境。每一项均可固定设置，也可勾选 **每次设为代理时随机**：

- **界面语言与时区**：支持伪装 `navigator.language`、请求头 `Accept-Language` 以及 JavaScript 本地时间环境，建议与代理出口国家保持一致，避免出现“IP 在欧美但本地时间为东八区”的异常情况。
- **屏幕与设备硬件**：可伪装 `screen` 分辨率（如 1080P、2K、移动端屏幕）、设备像素比（DPR）、CPU 核心数（`hardwareConcurrency`）以及设备内存大小（`deviceMemory`）。
- **图形与字体探测**：支持伪装 WebGL 显卡渲染器信息（NVIDIA、Intel、AMD、Apple 等主流芯片），并模拟 Windows 或 macOS 的标准系统字体列表。
- **Canvas 读数轻微加噪**：对 HTML5 Canvas 画布读数注入轻微随机噪点，打破固定的绘图指纹哈希。
- **隐私请求头控制**：支持自动剔除跳转来源（去除 Referer）或向目标站点发送 `DNT: 1`（Do Not Track）标识。

---

## 本地转发服务（Local Relay）说明

在 Chromium 架构下，浏览器内核对代理认证存在部分限制：例如对带有用户名密码的 SOCKS5 代理无法原生注入认证头。

为了确保带有复杂账号密码的代理能够稳定使用，扩展内部集成了基于本地回环端口的转发机制（默认监听 `127.0.0.1:17890`）：

- 如果使用的是离线解压版扩展，首次在 Windows 下使用带账密的 HTTP 代理时，如果页面提示 **本地转发未启动**，只需前往扩展解压目录中的 `scripts` 文件夹，双击运行 **`install-relay.cmd`** 注册一次本机消息通信接口，之后在浏览器中重新加载扩展即可。
- 如果目标是**带账号密码的 SOCKS5 代理**，受限于 Chrome 官方机制，建议优先使用对应的 HTTP 协议端口，或在服务商后台将本机当前出口 IP 加入 IP 白名单免密访问。

---

## 权限与隐私保护

JoyProxy 严格遵守最小权限原则，扩展内保存的代理配置、账号 Token 及自定义参数全部存放在本机的 `chrome.storage.local` 中，不会上传至第三方服务器。

- **核心权限用途**：`proxy`（配置浏览器代理网络）、`sidePanel`（承载工作台界面）、`declarativeNetRequest` 与 `privacy`（用于安全的请求头修改与 WebRTC 防护）、`browsingData`（执行站点 Cookie 与缓存清理）。
- **外部网络请求**：除了主动调用的 JoyProxy 官方 API，扩展仅在发起连通性测试时向公共 IP 库接口（如 `ipinfo.io` 等）发送单次轻量探测，测试过程不产生多余的用户行为收集。
