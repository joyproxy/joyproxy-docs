# 轮换 Token

JoyProxy 有多种 Token 供自动化使用。轮换后旧值立即失效，生产环境请先改脚本再点轮换。

## Token 类型

| Token | 典型用途 | 位置 |
| --- | --- | --- |
| 提取 **API URL**（内含 `token=`） | 端点生成、白名单、凭据 | <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a> 复制 URL |
| **Master User Token** | 订单与账户管理 API | <a href="https://www.joyproxy.com/admin-settings.html" target="_blank" rel="noopener noreferrer">账户设置</a> |
| **Scraping API Token** | 网页抓取 API | 网页抓取 API → API Center |
| **AI Access Token** | OpenClaw Skill / AI MCP | <a href="https://www.joyproxy.com/admin-ip-extraction-center.html?panel=ai" target="_blank" rel="noopener noreferrer">AI 端点生成器</a> |

各接口用哪种 Token，见 <a href="../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>。

## 轮换 Master User Token

1. 打开<a href="https://www.joyproxy.com/admin-settings.html" target="_blank" rel="noopener noreferrer">账户设置</a>。
2. 找到 **Master User Token**。
3. 点击 **Rotate**，马上复制新值。
4. 更新 CI、`.env` 以及 <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> 里的授权。

## 轮换提取 API Token

在<a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成/提取中心</a>操作。轮换后复制新的 **API URL**，旧提取 URL 不再可用。

## 轮换之后

在 <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> 或网页抓取 API playground 用新 Token 做一次简单请求。

自动化若返回 `401`，在配置里搜索是否仍残留旧 URL 或 Token。
