# 移动设备配置静态代理

当需要真实移动 UI 行为且会话内保持**稳定出口**（例如在移动网页结账验证时固定同一 IP）时，可在手机上使用 JoyProxy **静态或定制** host:port。

运营商级 **移动轮换**流量请将<a href="../getting-started/rotating/README.md" target="_blank" rel="noopener noreferrer">移动购买</a>与 <a href="../getting-started/software/android-client.md" target="_blank" rel="noopener noreferrer">Android 客户端</a>配合。

## iOS（Wi‑Fi 手动代理）

1. 先在桌面生成静态/定制端点（<a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成/提取中心</a>）。
2. iPhone：**设置 → Wi‑Fi → 网络旁 (i) → 配置代理 → 手动**。
3. **服务器** = host；**端口** = port。
4. 若网络需要认证，输入 <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a> 的用户名/密码。

> **说明**
>
> iOS Wi‑Fi 代理作用于该网络上的 HTTP 流量；部分应用使用自有网络栈。Android 全应用路由请用 JoyProxy 客户端。

## Android（Wi‑Fi 手动代理）

1. **Wi‑Fi → 长按网络 → 修改 → 高级 → 代理 → 手动**。
2. 主机名与端口来自生成的线路。
3. 保存并打开浏览器验证 IP。

## Android（JoyProxy 客户端 — 推荐用于应用）

1. 安装<a href="../getting-started/software/android-client.md" target="_blank" rel="noopener noreferrer">代理 Android 客户端</a>。
2. 输入 host、port、凭据。
3. 选择 **Global**、**Whitelist** 或 **Blacklist** 应用路由。

## 认证提示

- **白名单**：无凭据连接时确保手机 Wi‑Fi 出口 IP 已列入。
- **凭据**：与桌面静态指南相同的 `USER:PASS`。

## 验证

在移动浏览器加载并确认国家/ASN 后再跑付费流程。若结果漂移，请重新生成端点或检查 <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies</a> 订单是否过期。
