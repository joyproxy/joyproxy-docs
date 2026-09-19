# Multilogin 等海外指纹浏览器怎么填代理

除了国内常见的指纹浏览器外，许多跨国企业与海外团队广泛使用 **Multilogin**、**Dolphin{anty}**、**GoLogin** 以及 **Kameleo** 等海外知名的防关联指纹工具。

虽然软件界面全是英文，但核心的代理网络配置表单与填法完全一致。本文以行业标杆 Multilogin 为例，指导你如何快速完成填报。

---

## Multilogin 配置步骤（英文界面对照）

1. 打开 Multilogin 客户端，点击 **New browser profile（新建浏览器配置文件）**；
2. 在左侧菜单栏切换到 **Proxy（代理设置）**；
3. 在 **Proxy type（代理类型）** 下拉菜单中选择：
   - 推荐选择 `HTTP proxy` 或 `SOCKS5 proxy`；
4. 填写连接参数（对应控制台信息）：
   - **IP or host**：填写你在 JoyProxy 控制台看到的接入域名（例如 `us-ca.edge.joyproxy.com`，切勿填写 Exit IP）；
   - **Port**：填写对应的端口；
   - **Username**：填写你的代理账号；
   - **Password**：填写你的代理密码；
5. 点击下方的 **Check proxy（检查代理）** 按钮；
6. 检查通过后，页面会显示绿色的 `Connection test passed`，并自动拉取到 IP 所在的 Country（国家）、City（城市）和 Timezone（时区）；
7. 在左侧的 **Timezone** 与 **Geolocation** 面板中，确保选中 `Fill based on external IP`（基于外部 IP 自动填充）；
8. 点击 **Create profile** 保存，随后在列表中点击 **Start** 启动浏览器。

---

## Dolphin{anty} 与 GoLogin 快速填报

在 **Dolphin{anty}** 或 **GoLogin** 中，操作逻辑完全相同：
- 新建 Profile 时，在 Proxy 栏中选择自定义代理；
- 格式通常支持一行快速粘贴：`us-ca.edge.joyproxy.com:端口:代理账号:代理密码`；
- 粘贴后点击旁边的测速测试图标（Test proxy），通过后保存即可。

---

## 核心通识避坑法则

无论使用全球哪一款指纹浏览器，请务必牢记以下两条铁律：
1. **主机栏永远填 Entry Point 域名**：不要直接填写控制台上看到的专属出口 IP（Dedicated Exit IP）；
2. **检查 WebRTC 是否被替换**：确保指纹软件中的 WebRTC 处于「Replace（替换）」或「Alter（模拟）」状态，绝对不能选择「Disabled（完全禁用）」，因为完全禁用 WebRTC 本身就是一种异常的浏览器特征，极易被平台识别。
