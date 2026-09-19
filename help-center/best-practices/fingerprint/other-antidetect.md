# Multilogin 及主流指纹浏览器代理配置指南

除了常见的指纹浏览器外，许多团队广泛使用 **Multilogin**、**Dolphin{anty}**、**GoLogin** 或 **Kameleo** 等国际主流指纹浏览器。

虽然软件界面不同，但代理网络配置流程一致。本文以 Multilogin 为例说明配置方法。

---

## Multilogin 配置步骤

1. 打开 Multilogin，点击 **New browser profile**；
2. 在左侧菜单选择 **Proxy**；
3. 在 **Proxy type** 中选择 `HTTP proxy` 或 `SOCKS5 proxy`；
4. 填入参数：
   - **IP or host**：填入接入域名（如 `us-ca.edge.joyproxy.com`，请勿填写 Dedicated Exit IP）；
   - **Port**：填入端口号；
   - **Username / Password**：填入代理账号与密码；
5. 点击 **Check proxy**，确认显示 `Connection test passed`；
6. 确认 Timezone 与 Geolocation 设置为基于 IP 自动填充（Fill based on external IP）；
7. 点击 **Create profile** 保存并启动。

---

## Dolphin{anty} / GoLogin 快速配置

在 Dolphin{anty} 或 GoLogin 中，建立 Profile 时选择自定义代理，通常可直接粘贴标准代理格式：`接入域名:端口:代理账号:代理密码`，通过连通性测试后即可保存使用。
