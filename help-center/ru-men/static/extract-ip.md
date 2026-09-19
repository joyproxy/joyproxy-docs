# 提取代理 IP（Extract IP）

在控制台中，你可以便捷地提取购买的静态独享代理端点列表。

---

## Web 提取（控制台操作）

1. 打开控制台 **[提取（Endpoint Generator）](https://www.joyproxy.com/admin-ip-extraction-center.html)** 页面。
2. 选择对应的代理网络，并切到 **静态代理（Static Proxies）** 标签。
3. 在筛选区域：
   - 可按国家/地区（Location）或搜索框筛选订单。
   - 选择 **协议（Protocol）**：`HTTP / HTTPS / SOCKS5`。
   - 选择 **输出格式（Output Format）**：展示为 `host:port` 或标准 URI。
4. 点击 **复制地址列表（Copy Host List）** 复制生成的端口列表，或点击 **导出（Export）** 导出为 CSV/JSON/TXT。

---

## API 程序化提取

> 💡 **OpenAPI 中心引流**  
> 如果需要在自动化代码中程序化拉取静态代理列表及对应 IP 绑定状态，请参阅 **[OpenAPI 中心](../../best-practices/openapi-center.md)** 中的静态代理提取接口。
