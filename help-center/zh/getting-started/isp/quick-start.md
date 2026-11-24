# ISP（静态住宅）代理快速开始

4 步完成 ISP（静态住宅）代理的购买、授权与接入验证。

## 第 1 步：选购 ISP 静态独享线路

1. 登录控制台，点击左侧导航栏的 **ISP 代理**（[直达页面](https://www.joyproxy.com/admin-proxy-isp.html)）。
2. 在 **购买** 页签选择目标国家、省份/州、城市及运营商（ASN，以实时库存下拉选项为准），选择 IP 数量与时长（支持 1 天起购测试，以及 7/30/90/180/365 天）。
3. 结账后线路即时开通，有效期内不限流量，无需额外购买流量包。

详见：[购买独享线路](../static/purchase.md)。

## 第 2 步：配置账密或 IP 白名单

1. 切换到 **账密与白名单** 页签，设置一组代理用户名与密码；
2. 若在固定公网 IP 的服务器或办公网络中使用，可直接添加该公网 IP 至白名单，实现免密直连。

详见：[设置代理账密与白名单](../static/authentication.md)。

## 第 3 步：获取固定接入地址（Entry Point）

1. 切换到 **已购代理**（或 **提取**）页签，复制每条线路的 **Entry Point**（形如 `isp.joyproxy.com:10001`）。
2. **注意**：请务必将 **Entry Point** 填入客户端或指纹浏览器，不要填写用于核对属地的 Dedicated Exit IP。

详见：[查看已购线路](../static/view-lines.md) · [提取代理 IP](../static/extract-ip.md)。

## 第 4 步：测试连通性

```bash
curl -x http://<USERNAME>:<PASSWORD>@isp.joyproxy.com:<PORT> https://api.ipify.org?format=json
```

指纹浏览器配置请参见 [AdsPower 配置指南](../../best-practices/fingerprint/adspower.md) 或 [多账号防关联指南](../../best-practices/fingerprint/why-static.md)。如需刷新出口，可在控制台点击 [更换出口 IP](../static/refresh-ip.md)。
