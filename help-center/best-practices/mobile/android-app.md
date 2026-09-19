# Android 客户端配置与应用分流指南

在移动设备上使用代理时，常见需求是：**仅对特定的目标应用（如测试工具、特定业务 App）启用代理网络，而其他本地日常应用保持直连网络，避免产生不必要的代理流量消耗**。

通过官方推出的 **JoyProxy Android 客户端**，利用 **按应用分流（Per-App Routing）** 功能即可轻松实现这一需求。

---

## 步骤一：下载与安装客户端

1. 在 Android 设备浏览器中访问：<a href="https://www.joyproxy.com/products/software.html" target="_blank" rel="noopener noreferrer">JoyProxy 软件下载中心</a>；
2. 下载 **Proxy Client (Android)** 的 APK 文件并安装；
3. 客户端利用 Android 系统原生的网络框架运行，**设备无需获取 Root 权限**。

---

## 步骤二：配置代理节点信息

1. 打开 JoyProxy 客户端，点击 **添加配置（Add Profile）**；
2. 填入参数：
   - **静态独享代理**：选择 `HTTP` 或 `SOCKS5` 协议，服务器填入 Entry Point 接入域名（如 `us-ca.edge.joyproxy.com`），填入端口与代理凭据；
   - **动态代理**：服务器填 `gate.joyproxy.com`，端口填 `9001`，填入长用户名与代理密码；
3. 保存配置。

---

## 步骤三：设置按应用分流规则

1. 在客户端设置中打开 **分流设置（Per-App Proxy）**；
2. 将模式切换为 **仅代理选中的应用（Proxy only selected apps）**；
3. 在应用列表中，勾选需要启用代理的目标应用；
4. 未勾选的其他应用将继续使用本地直接网络连接。

---

## 步骤四：启动连接与验证

1. 回到主界面，选择配置并点击 **启动（Connect）** 按钮；
2. 允许系统的网络连接权限请求；
3. 启动成功后，打开已勾选的目标应用测试网络，未勾选的应用网络不受任何影响。
