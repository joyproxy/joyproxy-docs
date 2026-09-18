# 定制代理

定制代理是付款后按**端口**配置的独享线路：为每个端口**分配地区**（国家/省/市），可选**定时轮换出口 IP**，再像静态一样生成稳定的 `host:port`。

适用于 **住宅**、**商业 / ISP**、**数据中心**。

## 适合什么场景

- 同一订单里美国站走 A 端口、英国站走 B 端口
- 要固定入口，又希望按时间表换出口 IP
- 静态单国套餐不够用，但工具仍只认 `host:port`

## 本章目录

1. <a href="quick-start.md" target="_blank" rel="noopener noreferrer">快速开始</a>
2. <a href="purchase.md" target="_blank" rel="noopener noreferrer">购买端口</a>
3. <a href="auto-renew.md" target="_blank" rel="noopener noreferrer">自动续费</a>
4. <a href="assign-region.md" target="_blank" rel="noopener noreferrer">分配地区</a>
5. <a href="rotation.md" target="_blank" rel="noopener noreferrer">设置轮换</a>
6. <a href="new-ip.md" target="_blank" rel="noopener noreferrer">更换 IP</a>
7. <a href="authorize-and-generate.md" target="_blank" rel="noopener noreferrer">授权与生成</a>
8. <a href="first-request.md" target="_blank" rel="noopener noreferrer">首次请求与代码</a>
9. <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a>
10. <a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">受限目标</a>
11. <a href="response-codes.md" target="_blank" rel="noopener noreferrer">响应码</a>

## 推荐顺序

先 **分配地区**，再设轮换，最后生成端点。轮换换出的 IP 仍受已分配地域约束。

认证与静态相同：<a href="../static/authorization.md" target="_blank" rel="noopener noreferrer">用户名密码或白名单</a>。

<a href="https://www.joyproxy.com/pricing.html" target="_blank" rel="noopener noreferrer">定价</a> · <a href="https://www.joyproxy.com/products/proxy-residential.html" target="_blank" rel="noopener noreferrer">住宅</a> · <a href="https://www.joyproxy.com/products/proxy-business.html" target="_blank" rel="noopener noreferrer">商业</a> · <a href="https://www.joyproxy.com/products/proxy-datacenter.html" target="_blank" rel="noopener noreferrer">数据中心</a>
