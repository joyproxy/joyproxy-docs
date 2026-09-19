# 高级提取参数（Extraction Parameters）

在 **<a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">提取中心（Endpoint Generator）</a>** 页面中，你可以根据业务需求自由组合以下高级提取参数。这些参数会自动编码写入生成的长用户名中。

---

## 1. 地理位置定向（Location）

- **国家/地区（Country）**：下拉选择目标出口 IP 所在的国家（如美国 US、英国 GB、日本 JP、德国 DE 等 200+ 国家）。
- **州/省（State / Province）**：选择特定国家后，可进一步锁定省份或州（如美国加州 California）。
- **城市（City）**：精细化锁定到具体城市（如洛杉矶 Los Angeles）。*注：城市库存根据全网节点状况动态变动。*

## 2. 运营商定向（ASN）

支持指定特定的网络运营商 ASN 编号（如指定 `AS7922` Comcast 或 `AS7018` AT&T），获取指定运营商的出口 IP。

## 3. 会话控制（Session Type）

- **每次换 IP（Rotating Session）**：每次 HTTP/HTTPS 请求时，网关会自动分配一个全新的出口 IP。非常适合大规模数据采集、爬虫与防封禁任务。
- **粘性会话（Sticky Session）**：开启后可通过调节滑块设置保持时长（**1–30 分钟**）。在此窗口期内，使用该生成的长用户名发起的所有请求都将固定使用同一个出口 IP，非常适合需要保持登录状态、购物车、2FA 验证或多步表单填写的场景。

## 4. 协议与输出格式（Output Format）

- **协议类型（Protocols）**：支持 `HTTP`、`HTTPS` 与 `SOCKS5`。无论选择 HTTP 还是 SOCKS5，均可顺畅访问 HTTPS 加密网站。
- **返回展示格式（Output Format）**：
  - `Endpoint:port`：展现为 `gate.joyproxy.com:9001`。
  - `HTTP / SOCKS5 URI`：完整带协议前缀链接 `http://user:pass@gate.joyproxy.com:9001`。
  - **表格视图（Table）**：按 Host、Port、Username、Password 四列清晰拆解，方便填入需要独立四格表单的客户端软件。

---

> 💡 **通过 API 动态传参**  
> 如果需要在自动化代码中通过 HTTP URL 参数控制以上定向指标（如 `country=us&state=california&city=los_angeles&duration=10`），请直接参考控制台 **<a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a>** 或 **<a href="../../best-practices/developer/build-proxy-list.md" target="_blank" rel="noopener noreferrer">程序化提取指南</a>**。
