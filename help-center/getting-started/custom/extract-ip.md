# 提取代理 IP（Extract IP）

在 JoyProxy 控制台中，你可以方便地批量提取已购买的自定义独享代理端口地址与连接配置。

---

## 控制台 Web 提取流程

1. 登录控制台，进入左侧菜单 **<a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">提取（Endpoint Generator）</a>** 页面。
2. 切换到 **自定义代理（Custom Proxies）** 标签页。
3. 配置提取筛选条件：
   - **选择订单（Select Orders）**：勾选指定的自定义端口订单或选择全部。
   - **代理协议（Protocol）**：选择 `HTTP`、`HTTPS` 或 `SOCKS5`。
   - **代理鉴权凭证**：选择你在「账密与白名单」中创建的代理 Username / Password。
   - **输出格式（Output Format）**：
     - `Host:Port`（如 `us-ca.edge.joyproxy.com:20001`）
     - `Host:Port:User:Pass`
     - `http://User:Pass@Host:Port`
4. 提取与导出：
   - 点击 **复制地址列表（Copy Host List）**，将生成的端口文本复制到剪贴板。
   - 或点击 **导出文件（Export）** 导出为 `.txt` 或 `.csv` 文件。

---

## 程序化 API 提取（OpenAPI 中心）

如果你需要在自动化脚本中通过 API 动态获取端口列表、查询端口当前的分配状态或自动修改地区：

> 💡 **OpenAPI 中心引流**  
> JoyProxy 提供了完善的 RESTful API 支持。请参阅控制台 **<a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a>** 或 **<a href="../../best-practices/developer/build-proxy-list.md" target="_blank" rel="noopener noreferrer">程序化提取指南</a>**。
