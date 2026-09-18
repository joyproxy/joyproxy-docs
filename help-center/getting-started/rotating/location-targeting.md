# 地域定向

轮换**没有**「每个国家一个主机」。在 <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成（Endpoints）</a> 选国家（可选州/省、城市），JoyProxy 会把选择**写进生成用户名**。

## 在网页生成器里设地域

| 步骤 | 操作 |
| --- | --- |
| 1 | 打开 **Endpoints → Rotating** |
| 2 | 选 **Country** |
| 3 | 需要时选 **State / Province**，列表有的话再选 **City**（库存每天会变） |
| 4 | 生成，用户名**整段复制** |

用这条用户名的请求都会按你选的地域出池。要换城市就**重新生成**用户名——不要把国家代码拼进旧串。

## 示例（生成之后）

还是连 `gate.joyproxy.com:9001`，只有用户名变：

```bash
# 美国出口对应的生成用户名（仅示例，以端点生成页为准）
curl -x http://GENERATED_USER_US:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org

# 更细城市定向对应的生成用户名
curl -x http://GENERATED_USER_CITY:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

用可信的 IP 检测页，或同样打 `api.ipify.org`，确认出口对不对。

HTTP 和 SOCKS5 用**同一条**用户名；换协议不用换主机。两种协议都能打开 HTTPS 网站。

国家 / 州 / 城市字段要自动化时，见 <a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>（轮换端点与 Geo 参考）。

## 实用建议

- 先只选**国家**测连通；要本地 storefront 再加城市。
- 开 <a href="sticky-sessions.md" target="_blank" rel="noopener noreferrer">粘性会话</a> 时，在会话时长内会尽量在同一地域保持同一 IP。
- 静态线在**购买时**就锁定国家；定制在 <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">我的代理</a> **按端口**分地域。要每个地域专用 `host:port` 看 <a href="../static/README.md" target="_blank" rel="noopener noreferrer">静态</a> 和 <a href="../custom/assign-region.md" target="_blank" rel="noopener noreferrer">定制</a>。

## 下一步

<a href="sticky-sessions.md" target="_blank" rel="noopener noreferrer">粘性会话</a>
