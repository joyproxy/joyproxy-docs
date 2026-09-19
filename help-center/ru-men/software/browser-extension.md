# JoyProxy 浏览器扩展（Browser Extension）

**JoyProxy 浏览器扩展** 是专为 Chromium 内核浏览器（Google Chrome、Microsoft Edge、Brave、Opera 等）打造的轻量级代理管理插件。

它的最大优势在于：**仅作用于当前浏览器，绝不会修改操作系统的全局代理设置**。你可以一边在浏览器中使用海外代理测试页面，一边在电脑上正常微信办公。

[Chrome 网上应用店安装](https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng) · [GitHub 开源仓库](https://github.com/joyproxy/joyproxy-extension)

---

## 主要功能与模式说明

### 1. 三种线路加载方式
- **JoyProxy 账号同步（Account Sync）**：在扩展中登录你的 JoyProxy 控制台账号，扩展将自动拉取你在 **[我的代理（My Proxies）](https://www.joyproxy.com/admin-my-orders.html)** 下的所有生效动态流量包、静态线路和自定义端口，一键点选切换。
- **快捷 URI 粘贴（Paste URI）**：支持一键粘贴任何标准代理 URI（如 `http://user:pass@host:port` 或 `socks5://user:pass@host:port`）。
- **自有/第三方代理（Custom Proxy）**：可手动填写任意第三方代理服务器的 Host、Port、Username 和 Password。

### 2. 精细化域名分流规则（Bypass Rules）
- **全站代理（All Websites）**：所有浏览器网页请求均走所选代理。
- **白名单模式（Whitelist Only）**：仅列表内的指定域名（如 `*.google.com`、`*.amazon.com`）走代理，其他网站直连。
- **黑名单模式（Direct Bypass）**：指定域名直连，其他网站走代理。

### 3. 高级安全与隐私保护设置（Advanced Settings）
- **WebRTC 防泄漏（WebRTC Leak Protection）**：勾选后可完全禁止浏览器通过 WebRTC 协议泄露你真实的局域网和公网真实 IP 地址。
- **一键清理 Cookie / 缓存**：切换代理线路时，可勾选自动清除当前域名的 Cookie 和 Cache，防止目标网站通过 Cookie 关联识别历史身份。
- **User-Agent 伪装修改**：支持自定义或随机切换浏览器的 User-Agent 字符串。

---

## 详细使用步骤

1. 在 Chrome 网上应用店中搜索 `JoyProxy` 并点击安装。
2. 在浏览器右上角扩展栏中固定 JoyProxy 图标。
3. 点击图标打开插件面板，选择 **[登录控制台账号]** 或点击 **[新增代理 Profile]**。
4. 填入代理地址或选择已同步的线路卡片。
5. 点击 **测试连通性（Test Connection）** 按钮：扩展将向 IP 检测节点发包，实时展示出口 IP 地址、国家旗帜与响应延时（ms）。
6. 点击 **应用代理（Apply Proxy）** 按钮即可开启代理。扩展图标变为绿色激活状态。
