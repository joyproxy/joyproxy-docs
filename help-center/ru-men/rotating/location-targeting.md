# 地区定向

轮换上地域**不是**单独主机。在 [Endpoints](https://www.joyproxy.com/admin-ip-extraction-center.html) 选择国家（可选州/省与城市），JoyProxy 将选择**写入生成用户名**。

## 在网页生成器中设置地域

1. 打开 **Endpoints → Rotating**。
2. 选择 **Country**。
3. 可选 **State / Province**，再在列表提供时选 **City**（库存每日变化）。
4. 生成并原样复制用户名。

使用该用户名的每次请求遵循所选定向。要改城市请**生成新**用户名 — 勿手工拼接国家代码到旧字符串。

## 示例（生成后）

仍连接 `gate.joyproxy.com:9001`。仅用户名变化：

```bash
# 美国出口对应的生成用户名（仅示例，以端点生成页为准）
curl -x http://GENERATED_USER_US:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org

# 更细城市定向对应的生成用户名
curl -x http://GENERATED_USER_CITY:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

用可信 IP 检测 URL 或同样的 `api.ipify.org` 调用确认出口。

HTTP 与 SOCKS5 使用相同用户名。切换协议时无需换主机。任一协议均可打开 HTTPS 网站。

自动化相同国家/州/城市字段：[OpenAPI Center](../../ji-cheng/openapi-center.md)（轮换端点与 Geo reference）。

## 实用建议

* 验证连通性时先仅选**国家**；需要本地 storefront 时再加城市。
* 粘性会话（[下一页](sticky-sessions.md)）在会话时长内于该地域**保持** IP。
* 静态线路在**购买**时锁定国家。定制在 My Proxies **按端口**分配地域。若需每地域专用 host:port 见 [静态](../static/)与[定制](../custom/assign-region.md)。

## 下一步

[粘性会话](sticky-sessions.md)
