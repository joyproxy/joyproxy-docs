# 数据中心代理快速开始

4 步完成数据中心代理（静态独享）的购买、授权与接入验证。

## 第 1 步：选购数据中心独享线路

1. 登录控制台，点击左侧导航栏的 **数据中心代理**（[直达页面](https://www.joyproxy.com/admin-proxy-datacenter.html)）。
2. 在 **购买** 页签选择目标国家/城市、IP 数量与使用时长（支持 1 天起购验证，以及 7/30/90/180/365 天）。
3. 支付后即时开通，有效期内不限流量与并发。

详见：[购买独享线路](../static/purchase.md)。

## 第 2 步：配置账密或 IP 白名单

1. 进入 **账密与白名单** 页签创建代理用户名与密码；
2. 或将采集服务器公网 IP 加入白名单，享受免密直连。

详见：[设置代理账密与白名单](../static/authentication.md)。

## 第 3 步：获取固定接入地址（Entry Point）

1. 在 **已购代理**（或 **提取**）页签复制 **Entry Point**（形如 `dc.joyproxy.com:10001`）。
2. 请始终使用 **Entry Point** 作为客户端代理主机与端口，而非 Dedicated Exit IP。

详见：[查看已购线路](../static/view-lines.md) · [提取代理 IP](../static/extract-ip.md)。

## 第 4 步：测试连通性

```bash
curl -x http://<USERNAME>:<PASSWORD>@dc.joyproxy.com:<PORT> https://api.ipify.org?format=json
```

如需批量拉取列表、自动续费或更换出口 IP，请参考 [静态独享通用指南](../static/)。
