# 授权与生成

## 认证

与静态相同：在 [用户与白名单](https://www.joyproxy.com/admin-authorization.html) 配置 [用户名密码或白名单](../static/authorization.md)。通用流程见 [认证方式](../rotating/authentication.md)。

## 网页生成器

1. [端点生成](https://www.joyproxy.com/admin-ip-extraction-center.html) → **Custom Proxies → Web generator**。
2. 选择分配/订单 → **Generate now**。
3. 复制 host、port（未用白名单时连同账号密码）。

连接 host:port，不要连 Exit IP。

HTTP 自动化用端点页的 **API URL**，见 [OpenAPI 中心](../../ji-cheng/openapi-center.md)。

## 下一步

[首次请求与代码](first-request.md)
