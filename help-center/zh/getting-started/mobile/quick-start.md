# 移动代理快速开始

4 步完成移动代理（动态 4G/5G）的购买、提取与连通性测试。

## 第 1 步：购买移动流量包

1. 登录控制台，点击左侧导航栏的 **移动代理**（[直达页面](https://www.joyproxy.com/admin-proxy-mobile.html)）。
2. 在 **购买** 页签选择需要的 GB 流量包（最低 1 GB 起购，`$4.00`，流量永久不过期）。
3. 完成结账后流量即时到账。

详见：[购买流量](../rotating/purchase.md)。

## 第 2 步：创建代理账密

1. 切换到 **账密与白名单** 页签，创建专用的代理用户名与密码。
2. 如需通过程序调用 API 批量提取，可将服务器公网 IP 加入白名单。

详见：[设置代理账密与白名单](../rotating/authentication.md)。

## 第 3 步：提取移动代理端点

1. 切换到 **提取** 页签，选择目标国家、城市或移动运营商，选择协议（HTTP 或 SOCKS5）及轮换/粘性会话模式。
2. 点击 **立即生成**，获取固定网关 `gate.joyproxy.com:9001` 与完整的路由用户名字符串。

详见：[提取代理 IP](../rotating/extract-ip.md) · [高级提取参数](../rotating/extraction-parameters.md)。

## 第 4 步：测试连通性

```bash
curl -x http://<GENERATED_USER>:<PASSWORD>@gate.joyproxy.com:9001 https://api.ipify.org?format=json
```

如需进一步排查状态码或在 Python / Scrapy / Playwright 中集成，请参考 [发起代理请求](../rotating/first-request.md) 与 [响应码](../rotating/response-codes.md)。
