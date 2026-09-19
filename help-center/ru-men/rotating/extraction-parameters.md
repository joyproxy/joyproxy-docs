# 高级提取参数

在 **[提取](https://www.joyproxy.com/admin-ip-extraction-center.html)** 页面中，你可以根据业务需求自由组合以下高级提取参数：

## 1. 地理位置定向（Location）

- **国家/地区（Country）**：按目标国家筛选出口 IP（如美国 US、日本 JP 等）。
- **州/省（State）与城市（City）**：进一步精准定向到具体城市（库存动态变化）。

## 2. 运营商（ASN）定向

支持指定特定的网络运营商 ASN 编号，获取特定 ISP 的出口 IP。

## 3. 会话控制（Session Type）

- **随机轮换（Rotating session）**：每次 HTTP/HTTPS 请求自动使用全新的出口 IP，适合大规模数据采集。
- **粘性会话（Sticky session）**：固定使用同一个出口 IP 保持 **1–30 分钟**，适合需要保持登录状态、购物车或多步表单的场景。

## 4. 协议与返回格式

- **协议（Protocol）**：支持 HTTP 与 SOCKS5（均可安全访问 HTTPS 目标网站）。
- **返回格式（Output format）**：支持 `host:port:user:pass` 文本列表、标准 URI 链接或四格表单格式。

---

> 💡 **API 参数提取**  
> 如果需要在自动化代码中通过 HTTP URL 参数控制以上定向指标（如 `country`, `city`, `duration` 等），请直接参考 **[OpenAPI 中心](../../best-practices/openapi-center.md)**。
