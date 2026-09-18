# 代理节点地域

JoyProxy 在住宅、移动、商业/ISP、数据中心产品中提供多国**国家与城市**出口。具体能否买到，取决于网络、模式与当前池库存。

## 查看实时可用性

| 步骤 | 位置 |
| --- | --- |
| 轮换用户名里的地域 | <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a> 国家/州/城市选择器 |
| 静态购买选国家 | <a href="https://www.joyproxy.com/admin-purchase.html?tab=long-term" target="_blank" rel="noopener noreferrer">购买 → 静态</a> 搜索 |
| 定制按端口绑地域 | <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies → 定制</a> → **Assign region** |
| 抓取请求地域 | 网页抓取 API 的 `geoCode` — <a href="../getting-started/scraping-api/parameters.md" target="_blank" rel="noopener noreferrer">参数</a> |

库存会随合作扩展更新。购买时某地区灰显，可试邻近国家，或通过<a href="live-chat.md" target="_blank" rel="noopener noreferrer">在线客服联系销售</a>问补货时间。

## 怎么选地区

- **住宅轮换** — 在生成的用户名里编码国家（及更细地域）。
- **静态** — 结账时锁定国家；注册类流程要慎重选。
- **移动** — 买移动流量，在支持市场获得运营商级出口。
- **数据中心** — 优先吞吐；在提供地域时仍可选址。

## 网页抓取 API

不想自己拼代理字符串、又要指定出口国家时，在 fetch 请求里加 `geoCode`。见<a href="../getting-started/scraping-api/README.md" target="_blank" rel="noopener noreferrer">网页抓取 API 指南</a>。

## 合规

仅按<a href="https://www.joyproxy.com/terms.html" target="_blank" rel="noopener noreferrer">服务条款</a>允许的用途使用 JoyProxy。地域定向在业务里的合规由你自行负责。
