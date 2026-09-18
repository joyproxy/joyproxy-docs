# Chrome 静态代理

对**专用静态或定制**线路，可通过 **系统代理** 让 Windows 上的 Chrome 走代理，或使用 **JoyProxy 扩展**在不改系统设置的情况下按浏览器控制。

## 推荐：JoyProxy 扩展

适合静态线路日常 QA：

1. 安装[浏览器扩展](../ru-men/software/browser-extension.md)。
2. 从[端点生成/提取中心](https://www.joyproxy.com/admin-ip-extraction-center.html)粘贴 `http://USER:PASS@HOST:PORT`。
3. 测试出口 IP → **Apply**。

仅 Chrome（或 Edge）走代理；Slack、更新与其他应用仍直连。

## 备选：Windows 系统代理（Chrome 跟随系统）

1. 按 [Windows 11 系统代理](windows-11-system-proxy.md) 操作。
2. 启动 Chrome——Windows 上无单独 Chrome 代理对话框。
3. 访问 IP 检测站点验证。

需在**完全模拟**企业策略下系统级 Chrome 行为时使用。

## Microsoft Edge

Windows 上 Edge 与系统代理路径相同。也可从 Chrome 网上应用店在 Edge 安装 JoyProxy 扩展。

## 静态线路检查清单

| 步骤                                                                            | 完成？ |
| ----------------------------------------------------------------------------- | --- |
| [My Proxies](https://www.joyproxy.com/admin-my-orders.html) 中静态订单生效           |     |
| [Users & Whitelist](https://www.joyproxy.com/admin-authorization.html) 白名单或凭据 |     |
| 从生成器复制 host/port                                                              |     |
| 出口 IP 与购买地域一致                                                                 |     |

## Chrome 中使用轮换

轮换使用 `gate.joyproxy.com:9001` 与**生成的用户名**——扩展或系统代理均可；见[轮换代理](../ru-men/rotating/)。
