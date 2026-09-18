# 生成端点

轮换始终使用**同一网关**。生成会创建**用户名**（并显示您已保存的密码）。套餐生效期间可随意生成。

先完成认证：<a href="authentication.md" target="_blank" rel="noopener noreferrer">认证方式</a>。

## 连接常量

| 字段 | 始终为 |
| --- | --- |
| 主机 | `gate.joyproxy.com` |
| 端口 | `9001` |
| 协议 | HTTP 与 SOCKS5。任一协议均可打开 **HTTPS 网站**。见 <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a>。 |

## 网页生成器

1. 打开<a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成/提取中心</a>或网络控制台的 **Endpoints** 页签。
2. 选择 **Rotating** 与已付款的订单/网络（住宅、移动或商业）。
3. **Output format** — Endpoint:port、HTTP 或 SOCKS5。主机与端口保持 `gate.joyproxy.com:9001`。详情：<a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a>。
4. **Location** — 国家，可选州/省与城市。见 <a href="location-targeting.md" target="_blank" rel="noopener noreferrer">地域定向</a>。
5. **Session type** — **Sticky session**（1–30 分钟）或 **Rotating session**。见 <a href="sticky-sessions.md" target="_blank" rel="noopener noreferrer">粘性会话</a>。
6. 设置生成行数 → **Generate**。
7. 复制 **Host**、**Port**、**Username**、**Password** 或完整示例字符串。

有流量时用户名持续有效。粘性时间仅控制每个会话保持出口 IP 的时长 — 不会使用户名过期。

> **重要**
>
> 请**原样**粘贴用户名。其中编码定向与会话。修改可能导致错误地域或认证失败。

### 复制列表

- 复制单行，或按字段复制 **Host / Port / Username / Password** 以适配四格表单工具。
- 客户端支持 `http://user:pass@host:port` 时复制完整 URI。
- 可为 worker 生成多行。每行是同一网关上的另一个用户名。

```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
socks5://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

Endpoints 页亦显示基于相同选择的语言片段（cURL、Python 等）。上线前粘贴一条到环境确认 IP。

若用 HTTP 而非仅网页 UI 生成行，请使用同页的 **API URL** 与 <a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> 参考。

## 下一步

- 定向国家或城市：<a href="location-targeting.md" target="_blank" rel="noopener noreferrer">地域定向</a>
- 登录流程保持同一 IP：<a href="sticky-sessions.md" target="_blank" rel="noopener noreferrer">粘性会话</a>
- 验证线路：<a href="first-request.md" target="_blank" rel="noopener noreferrer">首次请求</a>
