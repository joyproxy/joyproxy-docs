# Android 代理客户端（Android Client）

**JoyProxy Android 客户端**是一款面向移动端设备的轻量级代理工具，基于成熟的 sing-box `libbox` 底层核心开发。它支持在无需 Root 权限的前提下，将手机或安卓模拟器的网络流量通过 HTTP 或 SOCKS5 代理转发，并提供了灵活的应用级分流规则。

无论是在真实手机上进行海外社媒运营、跨境业务调试，还是在电脑模拟器（如雷电、MuMu、夜神等）中开展批量自动化测试，都可以借助该客户端实现稳定的代理接入。

相关地址：  
<a href="https://www.joyproxy.com/products/android-client.html" target="_blank" rel="noopener noreferrer">官方产品页面</a> · <a href="https://github.com/joyproxy/joyproxy-client-android/releases" target="_blank" rel="noopener noreferrer">GitHub Releases 下载（APK）</a> · <a href="https://github.com/joyproxy/joyproxy-client-android" target="_blank" rel="noopener noreferrer">源码仓库</a>

---

## 下载与安装

1. 打开 <a href="https://github.com/joyproxy/joyproxy-client-android/releases" target="_blank" rel="noopener noreferrer">GitHub Releases</a> 页面，下载最新版本的签名安装包 **`app-release.apk`**。
2. 将安装包传输至 Android 手机或模拟器中进行安装。首次安装时，系统可能会提示“允许安装来自未知来源的应用”，点击允许并继续安装。
3. 安装完成后打开 **JoyProxy**，即可进入主配置界面。

---

## 代理配置与使用流程

客户端支持连接任意标准的 HTTP / HTTPS 或 SOCKS5 代理。如果使用 JoyProxy 的云端线路，可以根据产品类型填入对应参数：

### 1. 填写节点信息

- **协议（Protocol）**：支持在 **HTTP** 与 **SOCKS5** 之间切换。
- **服务器地址（Host）** 与 **端口（Port）**：
  - 动态代理示例：地址填入 `gate.joyproxy.com`，端口填入 `9001`。
  - 静态独享示例：地址填入如 `us-ca.edge.joyproxy.com`，端口填入购买时分配的具体端口（如 `10001`）。
- **用户名与密码（可选）**：如果使用的是带鉴权的私有节点，填入对应的凭据；若已通过后台 IP 白名单授权，则无需填写账密。

### 2. 连通性测试

在尚未开启代理连接的**未连接状态**下，点击界面下方的 **测试（Test）** 按钮，客户端会尝试与目标服务器进行握手并返回延迟。确认节点正常后再建立连接。

### 3. 选择分流模式（Proxy scope）

为了避免移动设备上的所有流量被无差别代理，客户端提供了三种实用的分流策略：

- **全局模式（Global）**：设备上所有应用程序的流量均通过代理转发访问网络。
- **应用白名单模式（Whitelist，推荐）**：**仅被勾选的应用**通过代理转发，其余应用保持本地直连。你可以仅勾选目标浏览器或特定的业务 App，而让其他通信或本地银行应用保持直连，避免日常通讯中断或触发安全风控。
- **应用黑名单模式（Blacklist）**：选中的应用保持本地直连，其余所有未勾选的程序均通过代理转发。

*提示：如果在连接状态下修改了分流名单或模式，需要先点击 **断开** 再 **重新连接**，新的分流策略才会生效。*

### 4. 启动与断开连接

1. 确认配置无误后，点击 **连接代理（Connect）**。
2. 首次启动时，Android 系统会弹出系统的“网络连接请求”授权弹窗，点击 **确定** 允许客户端创建本地 VPN 隧道。
3. 连接成功后，系统状态栏会显示 VPN **钥匙图标**，此时目标应用的网络流量即已成功接管。
4. 使用完毕后，打开 App 点击 **断开（Disconnect）** 即可平滑恢复设备原有的网络状态。

---

## 搭配移动代理构建真实网络环境

在跨境营销、多账号防封与移动端数据验证等场景中，移动设备的设备指纹必须与网络环境匹配。

建议将本客户端与 JoyProxy 的 <a href="../rotating/network-types.md" target="_blank" rel="noopener noreferrer">动态移动代理（Mobile Proxy）</a> 配合使用：
- 真实 Android 手机安装客户端，配置分配到的移动网络基站 IP（4G / 5G 蜂窝网络出口）。
- 结合白名单分流，目标 App 即可获得与海外当地真实移动网络完全一致的 ASN、IP 与环境特征，大幅降低风控拦截率。

---

## 常见注意事项

- **权限说明**：客户端利用 Android 标准的 VpnService API 建立本地流量回环分流，**完全不需要获取 Root 权限**，也不会对系统底层文件做任何破坏性修改。
- **语言切换**：App 顶部设置中提供了中英文界面的自由切换选项。
- **源码与构建**：项目基于 GPLv3 协议开源。如需自行编译源码，请确保本地配置好了 Android NDK 环境并预先构建 `libbox.aar` 依赖库。
