# 粘性会话

**粘性会话**在限定时间内保持同一出口 IP，使登录、购物车与多步表单停留在同一地址。计时结束或生成 **Rotating session** 用户名后，下次请求可使用新 IP。

## 在 Endpoints 选择模式

| 生成器中的模式                     | 行为                          |
| --------------------------- | --------------------------- |
| **Rotating session**        | 每次连接可使用新出口 IP。适合广泛采集。       |
| **Sticky session**（1–30 分钟） | 复用**同一生成用户名**的请求在该窗口内保持 IP。 |

1. 打开 [Endpoints](https://www.joyproxy.com/admin-ip-extraction-center.html) → **Rotating**。
2. 设置 **Session type**。粘性时使用滑块（**1–30 分钟**）。
3. 生成。用户名**已包含**会话策略 — 多数客户端无需额外标志。

## 用户名有效期 vs IP 保持时长

| 概念    | 行为                    |
| ----- | --------------------- |
| 生成用户名 | **流量套餐**有 GB 时有效      |
| 粘性窗口  | 仅该用户名**保持单一出口 IP**的时长 |

粘性过期后仍可使用同一用户名；下一窗口网关可能分配新 IP。刷新会话无需新购套餐。

自动化提取时设置粘性长度请用 Endpoints **API URL** 的 `duration` 查询参数 — 见 [OpenAPI Center](../../zui-jia-shi-jian/openapi-center.md)。

## 何时用粘性 vs 轮换会话

| 工作流        | 会话模式                       |
| ---------- | -------------------------- |
| 列表页、搜索、比价  | Rotating session           |
| 登录后带认证爬取   | Sticky session（常 5–15 分钟）  |
| 浏览器中单账号 QA | 粘性，或需数天时购买[静态](../static/) |

> **提示**
>
> 粘性为**分钟级**，非数周。若需计划期内固定的 host:port，请购买[静态](../static/purchase.md)或[定制](../custom/purchase.md)。

## 下一步

[发起首次请求](first-request.md)
