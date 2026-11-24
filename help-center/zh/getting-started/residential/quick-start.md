# 住宅代理快速开始

4 步完成住宅代理（动态）的购买、提取与连通性测试。

## 第 1 步：购买住宅流量包

1. 登录控制台，点击左侧导航栏的 **住宅代理**（[直达页面](https://www.joyproxy.com/admin-proxy-residential.html)）。
2. 在 **购买** 页签选择需要的 GB 流量包（最低 1 GB 起购，`$3.50`，流量永久不过期）。
3. 使用账户余额、微信支付（人民币）、USDT/USDC 等多链加密货币、银行卡或 PayPal 完成结账，支付后即时生效。

详见：[购买流量](../rotating/purchase.md)。

## 第 2 步：创建代理账密

1. 切换到 **账密与白名单** 页签，点击创建代理用户名与密码（例如 `user1`）。
2. 动态代理网关统一使用账密鉴权；如需在服务器上免 Token 调用提取 API，可同时添加服务器公网 IP 至白名单。

详见：[设置代理账密与白名单](../rotating/authentication.md)。

## 第 3 步：提取住宅代理端点

1. 切换到 **提取** 页签，在 **Web 提取** 中选择目标国家/州/城市/ASN、协议（HTTP 或 SOCKS5）及会话模式（每次请求轮换或粘性会话）。
2. 点击 **立即生成**，复制完整的代理连接信息：
   - **主机**：`gate.joyproxy.com`
   - **端口**：`9001`
   - **用户名**：完整复制生成的路由字符串（切勿截断）
   - **密码**：第 2 步中设置的代理密码

详见：[提取代理 IP](../rotating/extract-ip.md) · [高级提取参数](../rotating/extraction-parameters.md)。

## 第 4 步：测试连通性

使用 `curl` 快速验证出口 IP（请将 `<GENERATED_USER>` 与 `<PASSWORD>` 替换为实际凭据）：

```bash
curl -x http://<GENERATED_USER>:<PASSWORD>@gate.joyproxy.com:9001 https://api.ipify.org?format=json
```

看到返回的家庭宽带出口 IP 即代表接入成功。更多语言代码与客户端配置请参见 [发起代理请求](../rotating/first-request.md)。
