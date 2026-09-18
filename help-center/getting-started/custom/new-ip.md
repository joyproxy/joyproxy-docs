# 更换 IP

**New IP** 更换定制端口的**出口 IP**，<a href="assign-region.md" target="_blank" rel="noopener noreferrer">已分配</a> 的地区不变；`host:port` 不变。

## 在「我的代理」操作

1. 登录 → <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">我的代理</a> → Custom。
2. 在该端口点 **New IP**。
3. 阅读向导 → **Replace exit IP**。
4. 保持页面打开，等待约 1 分钟进度（有时需再等 1 分钟）。线路短暂中断后新出口生效，通常 **1–2 分钟**。

继续用端点生成页**同一 host:port**。

要**按时间表**自动换出口，用 <a href="rotation.md" target="_blank" rel="noopener noreferrer">设置轮换</a>。New IP 是手动即时换；Rotation 是周期换。

定制独享端口**没有**每日 New IP 次数上限，但向导仍会提示同一端口两次操作之间的等待间隔。

静态端口操作相同：<a href="../static/refresh-ip.md" target="_blank" rel="noopener noreferrer">静态 → 更换 IP</a>。

## 下一步

<a href="authorize-and-generate.md" target="_blank" rel="noopener noreferrer">授权与生成</a>
