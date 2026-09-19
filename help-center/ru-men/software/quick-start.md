# 软件工具 · 快速开始（Quick Start）

本指南帮助你根据业务场景快速选择合适的 JoyProxy 官方软件工具，并完成极简配置。

---

## 4 步极简接入流程

### 第一步：按需选择合适工具

- **仅需在 Chrome / Edge 浏览器中使用代理** ➔ 选择 **[JoyProxy 浏览器扩展](browser-extension.md)**（推荐，最简单便捷）。
- **需要批量检测成百上千条代理 IP 的连通性与延迟** ➔ 选择 **[代理检测工具](proxy-tester.md)**。
- **本地命令行/程序只支持 `127.0.0.1` 代理，或需要在服务器搭建中转网关** ➔ 选择 **[代理服务器网关](proxy-server.md)**。
- **需要在 Android 手机或模拟器中按 App 分流走代理** ➔ 选择 **[Android 客户端](android-client.md)**。

---

### 第二步：获取 JoyProxy 代理连接凭据

在使用任何工具前，请先在 JoyProxy 控制台中获取代理连接凭据：
1. **动态代理**：前往 **[用户与白名单（Users & Whitelist）](https://www.joyproxy.com/admin-authorization.html)** 设置 Username/Password，在 **[提取（Endpoint Generator）](https://www.joyproxy.com/admin-ip-extraction-center.html)** 生成带有国家/session 拼接参数的连接 URI。
2. **静态独享 / 自定义独享代理**：在 **[我的代理（My Proxies）](https://www.joyproxy.com/admin-my-orders.html)** 中获取专属的 `Host:Port` 地址及代理 Username/Password。

---

### 第三步：快速配置与测试

以 **JoyProxy 浏览器扩展** 为例：
1. 从 [Chrome 网上应用店](https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng) 安装扩展并固定在工具栏。
2. 点击扩展图标打开弹窗，可以通过 **登录 JoyProxy 账号** 一键同步你的已购订单，也可手动粘贴代理 URI：
   ```text
   http://user123:pass123@us-ca.edge.joyproxy.com:10001
   ```
3. 点击 **测试（Test）** 按钮，确认显示的出口 IP 和国家是否符合预期。
4. 点击 **开启/应用（Apply）**，此时仅当前浏览器会通过代理上网，不会影响系统其他软件。

---

## 常见排错与相关链接

- **代理连通性测试失败**：检查代理 Username 和 Password 是否填错，或者本机公网 IPv4 是否已加入 IP 白名单。
- **系统全局代理配置**：如果不想安装扩展而想直接修改操作系统代理设置，请参阅 **[Windows 11 系统代理](../../best-practices/windows-11-system-proxy.md)**。
