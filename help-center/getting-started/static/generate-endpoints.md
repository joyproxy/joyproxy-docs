# 生成静态端点

每个分配在订单到期前对应稳定的 **host** 与 **port**。

## 网页生成器

1. 打开 <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成</a>。
2. **Static Proxies → Web generator**。
3. 按订单/分配筛选 → **Generate now**。
4. 复制 host、port（用账号密码时一并复制）。

要用 HTTP 批量拉列表，复制同页的 **API URL**，参数与示例见 <a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a>。

## 该复制什么

| 要复制 | 不要误用 |
| --- | --- |
| Host（`*.edge.joyproxy.com` 或页面所示） | 订单卡片上的 Exit IP |
| Port | 控制台登录邮箱 |
| 账号密码，或依赖白名单 | 旧截图里的随机端口 |

## 下一步

<a href="first-request.md" target="_blank" rel="noopener noreferrer">首次请求</a>
