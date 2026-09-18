# 生成端点

轮换永远连**同一个网关**。点 **Generate** 只是再出一条用户名；密码还是你在用户与白名单里设的那份。套餐在有效期内，想生成多少条都行。

先配好认证：<a href="authentication.md" target="_blank" rel="noopener noreferrer">认证方式</a>。

## 固定不变的连接信息

| 字段 | 始终为 |
| --- | --- |
| 主机 | `gate.joyproxy.com` |
| 端口 | `9001` |
| 协议 | HTTP 与 SOCKS5；任选一种都能打开 **HTTPS 网站**。见 <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a>。 |

## 网页生成器

| 步骤 | 操作 |
| --- | --- |
| 1 | 打开 <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成（Endpoints）</a>，或网络控制台里的 **Endpoints** 页 |
| 2 | 选 **Rotating** 和已付款的网络（住宅、移动或商业） |
| 3 | **Output format** — Endpoint:port、HTTP 或 SOCKS5；主机端口仍是 `gate.joyproxy.com:9001`。见 <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a> |
| 4 | **Location** — 国家，可选州/省、城市。见 <a href="location-targeting.md" target="_blank" rel="noopener noreferrer">地域定向</a> |
| 5 | **Session type** — **Sticky session**（1–30 分钟）或 **Rotating session**。见 <a href="sticky-sessions.md" target="_blank" rel="noopener noreferrer">粘性会话</a> |
| 6 | 设生成行数 → **Generate** |
| 7 | 复制 **Host**、**Port**、**Username**、**Password**，或整段示例 URI |

有流量时用户名一直有效。粘性时长只决定「这条用户名多久内尽量用同一出口 IP」，**不会**让用户名过期。

> **重要**
>
> 用户名请**原样粘贴**。里面编码了地域和会话；手改容易国家不对或认证失败。

### 复制结果

- 可以只复制一行，或按 **Host / Port / Username / Password** 四格填进工具表单。
- 客户端支持 `http://user:pass@host:port` 时，直接复制完整 URI。
- 可以给多个 worker 各生成一行；都是同一网关，只是用户名不同。

```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
socks5://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

端点生成页还会按当前选项给出 cURL、Python 等片段。上线前建议先贴一条到环境里，确认出口 IP。

要用 HTTP 批量拉用户名（不走网页），看同页的 **API URL**，参数在 <a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a>。

## 下一步

- 定向国家或城市：<a href="location-targeting.md" target="_blank" rel="noopener noreferrer">地域定向</a>
- 登录流程要同一 IP：<a href="sticky-sessions.md" target="_blank" rel="noopener noreferrer">粘性会话</a>
- 测线路：<a href="first-request.md" target="_blank" rel="noopener noreferrer">首次请求</a>
