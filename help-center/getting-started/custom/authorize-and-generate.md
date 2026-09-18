# 授权并生成定制端点

## 认证

与静态相同：在 <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">用户与白名单（Users &amp; Whitelist）</a> 配置 <a href="../static/authorization.md" target="_blank" rel="noopener noreferrer">用户名密码或白名单</a>。通用流程见 <a href="../rotating/authentication.md" target="_blank" rel="noopener noreferrer">认证方式</a>。

## 网页生成器

| 步骤 | 操作 |
| --- | --- |
| 1 | <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成（Endpoints）</a> → **Custom Proxies → Web generator** |
| 2 | 选择分配/订单 → **Generate now** |
| 3 | 复制 host、port（未用白名单时连同账号密码） |

连 host:port，不要连 Exit IP。

HTTP 自动化用端点页的 **API URL**，见 <a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a>。

## 下一步

<a href="first-request.md" target="_blank" rel="noopener noreferrer">首次请求与代码</a>
