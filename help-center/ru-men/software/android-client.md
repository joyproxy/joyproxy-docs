# Android 代理客户端（Android Client）

**JoyProxy Android 客户端** 是专为 Android 智能手机、平板电脑以及安卓模拟器（如雷电模拟器、夜神模拟器等）开发的代理管理应用。

基于成熟的 V2Ray / sing-box 内核打造，**无需手机 Root 权限**，即可实现在移动端建立安全高效的代理连接。

[GitHub Releases APK 下载](https://github.com/joyproxy/joyproxy-client-android/releases/latest)

---

## 核心功能与特性

1. **无需 Root 权限**：通过 Android 系统标准的 VpnService API 建立本地虚拟网络，全机安全兼容。
2. **精细化 App 分流（Application Bypass）**：
   - **全局模式（Global Mode）**：手机上所有 App 的网络流量均通过代理出海。
   - **白名单分流（Include Apps）**：仅允许选中的 App（如 Chrome 浏览器、海外社交软件）走代理，其他国内 App 直连。
   - **黑名单排除（Exclude Apps）**：指定的 App 直连，其他应用走代理。
3. **多代理协议支持**：完美支持 HTTP、HTTPS 以及 SOCKS5 代理协议。
4. **配合移动/住宅代理**：特别适合配合 JoyProxy **[移动代理 / 住宅代理](../rotating/network-types.md)** 使用，真实模拟海外真实手机移动终端的网络环境。

---

## 安装与配置步骤

1. 在 Android 手机上打开浏览器，前往 GitHub Releases 下载最新的 `joyproxy-client-android.apk` 安装包。
2. 安装并打开 **JoyProxy** 应用。
3. 点击 **新增配置（Add Profile）**：
   - **配置名称**：如 `美国移动代理`。
   - **协议类型（Protocol）**：选择 `HTTP` 或 `SOCKS5`。
   - **代理主机（Host）**：填入 JoyProxy 网关或专属主机地址（如 `us-ca.edge.joyproxy.com` 或 `gate.joyproxy.com`）。
   - **代理端口（Port）**：填入对应端口（如 `10001` 或 `9001`）。
   - **认证账密**：填入在 [用户与白名单] 中设置的 Username 和 Password。
4. 在 **应用分流（App Routing）** 选项中勾选需要走代理的目标 App。
5. 点击页面中央的 **连接（Connect）** 按钮，并在系统弹窗中允许创建 VPN 连接。
6. 连接成功后，打开目标 App 即可体验高速海外代理！
