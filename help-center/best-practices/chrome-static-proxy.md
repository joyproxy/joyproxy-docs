# Chrome 浏览器配置静态代理

**专用静态或定制**线路在 Windows 上可走 **系统代理** 让 Chrome 生效，或用 **JoyProxy 扩展** 只控制浏览器、不改系统。

## 推荐：JoyProxy 扩展

适合静态线路日常验收：

1. 安装<a href="../getting-started/software/browser-extension.md" target="_blank" rel="noopener noreferrer">浏览器扩展</a>。
2. 从<a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成/提取中心</a> 粘贴 `http://USER:PASS@HOST:PORT`。
3. 测出口 IP → **Apply**。

只有 Chrome（或 Edge）走代理；Slack、系统更新等仍直连。

## 备选：Windows 系统代理（Chrome 跟随）

1. 按 <a href="windows-11-system-proxy.md" target="_blank" rel="noopener noreferrer">Windows 11 系统代理</a> 配置。
2. 打开 Chrome — Windows 上没有单独的 Chrome 代理对话框。
3. 用 IP 检测站验证。

需要**完全模拟**企业策略下的系统级 Chrome 行为时用这条路径。

## Microsoft Edge

Windows 上 Edge 与 Chrome 一样跟随系统代理。也可从 Chrome 网上应用店给 Edge 安装 JoyProxy 扩展。

## 静态线路检查清单

| 步骤 | 完成？ |
| --- | --- |
| <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies</a> 静态订单生效 | |
| <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a> 白名单或凭据就绪 | |
| 从生成器复制 host/port | |
| 出口 IP 与购买地域一致 | |

## Chrome 里用轮换

轮换填 `gate.joyproxy.com:9001` 和**生成的用户名**，扩展或系统代理均可。见<a href="../getting-started/rotating/README.md" target="_blank" rel="noopener noreferrer">轮换代理</a>。
