# 设置定时轮换与手动更换 IP（Rotation & Refresh）

自定义独享代理为你提供了极其灵活的 IP 变更策略。你可以根据业务防封需求，选择 **定时自动轮换（Scheduled Auto-Rotation）** 或 **手动即时更换 IP（Manual Refresh）**。

---

## 1. 设置定时自动轮换（Set Scheduled Rotation）

如果你的业务需要代理端口在运行过程中定期更换出口 IP（防止单一出口 IP 频繁请求触发风控），可以开启定时自动轮换：

1. 进入 **<a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">我的代理（My Proxies）</a>** 页面。
2. 找到对应端口，点击右侧的 **设置轮换（Set Rotation）** 按钮。
3. 在轮换设置弹窗中：
   - 勾选 **开启自动轮换（Enable Auto Rotation）**。
   - 选择轮换频率间隔：例如 **每 5 分钟（Every 5 Mins）**、**每 10 分钟（Every 10 Mins）**、**每 30 分钟（Every 30 Mins）**、**每 1 小时（Every 1 Hour）** 或输入自定义秒数。
4. 点击保存生效。

开启后，系统后台会在到达时间点时，自动为该端口分配一个新的出口 IP（国家和城市定位保持不变），而你在客户端配置的 `host:port` 依然保持不变！

---

## 2. 手动即时更换 IP（Manual Refresh / New IP）

如果你在调试程序或突发发现某个出口 IP 被目标网站拦截，无需等待定时器，可以手动立即刷新 IP：

1. 进入 **<a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">我的代理（My Proxies）</a>** 页面。
2. 点击端口右侧的 **更换 IP（Refresh IP）** 按钮。
3. 在确认提示框中点击确认。
4. 系统将在 1-2 分钟内为该端口重新拉取分配一个全新的出口 IP。

> **提示**  
> - **无缝更换**：手动更换 IP 同样不需要修改客户端的 `host:port` 和代理账密。
> - **换新间隔**：同一端口两次手动更换 IP 之间通常有 1-3 分钟的安全冷却间隔。

---

## 动态代理 vs 自定义端口轮换的区别

- **动态代理（Rotating Proxies）**：按 GB 流量计费，每次请求通过域名入口自动随机路由到池化 IP，或通过拼接用户名参数控制粘性会话。
- **自定义独享代理（Custom Proxies）**：按端口包时计费，端口专属于你，由你在控制台中显式指定端口的国家和定时轮换周期。
