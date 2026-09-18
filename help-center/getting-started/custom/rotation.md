# 设置轮换间隔

轮换按计时器刷新端口的**出口 IP**，**地区规则**不变；客户端用的 `host:port` 也不变。

## 操作步骤

| 步骤 | 操作 |
| --- | --- |
| 1 | <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">我的代理（My Proxies） → Custom Proxies</a> |
| 2 | 选择端口 |
| 3 | 点 **Rotation** |
| 4 | 选预设：**Off**、1 分钟、5 分钟、15 分钟、1 小时，或按 **60 秒步进**自定义秒数 |
| 5 | **Off** 表示保持当前 IP，直到你手动换或再改设置 |
| 6 | **Apply**。下一周期起按新间隔执行 |

> **重要**
>
> 先 <a href="assign-region.md" target="_blank" rel="noopener noreferrer">分配地区</a>，再开定时轮换，换出的 IP 才会留在所选地域内。

控制项在「我的代理」。连接时仍用已生成的 host 与 port。

需要立刻换出口、不按时间表：用 <a href="new-ip.md" target="_blank" rel="noopener noreferrer">更换 IP（New IP）</a>。

## 下一步

<a href="new-ip.md" target="_blank" rel="noopener noreferrer">更换 IP</a> · <a href="authorize-and-generate.md" target="_blank" rel="noopener noreferrer">授权与生成</a>
