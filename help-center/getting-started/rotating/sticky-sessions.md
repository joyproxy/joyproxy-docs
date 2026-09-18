# 粘性会话

**Sticky session** 会在一段时间内尽量固定同一出口 IP，登录、购物车和多步表单不容易中途换地址。时间到了，或者你生成的是 **Rotating session** 用户名，下一次请求就可能换 IP。

## 在端点生成里选模式

| 生成器里的模式 | 行为 |
| --- | --- |
| **Rotating session** | 每次连接可以用新出口 IP，适合大面积采集 |
| **Sticky session**（1–30 分钟） | 同一条生成用户名，在窗口内尽量保持同一 IP |

| 步骤 | 操作 |
| --- | --- |
| 1 | 打开 <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成（Endpoints）</a> → **Rotating** |
| 2 | 设 **Session type**；选粘性时用滑块（**1–30 分钟**） |
| 3 | 点生成。会话策略已经写在用户名里，多数客户端不用再加参数 |

## 用户名有效期 vs IP 保持多久

| 概念 | 行为 |
| --- | --- |
| 生成用户名 | 流量套餐还有 GB 就一直能用 |
| 粘性窗口 | 这条用户名**尽量固定单一出口 IP** 的时长 |

粘性窗口过了，用户名还能用，只是下一窗口网关可能换 IP。不用为了「刷新会话」再买套餐。

API 批量提取时要设粘性时长，用端点生成 **API URL** 的 `duration` 查询参数——见 <a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>。

## 什么时候用粘性、什么时候轮换

| 场景 | 建议 |
| --- | --- |
| 列表页、搜索、比价 | Rotating session |
| 登录后带 Cookie 继续爬 | Sticky session（常见 5–15 分钟） |
| 浏览器里单账号 QA | 粘性；要固定好几天就买 <a href="../static/README.md" target="_blank" rel="noopener noreferrer">静态</a> |

> **提示**
>
> 粘性是**分钟级**，不是几周。计划期内要固定 `host:port`，买 <a href="../static/purchase.md" target="_blank" rel="noopener noreferrer">静态</a> 或 <a href="../custom/purchase.md" target="_blank" rel="noopener noreferrer">定制</a>。

## 下一步

<a href="first-request.md" target="_blank" rel="noopener noreferrer">发起首次请求</a>
