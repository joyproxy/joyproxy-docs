# 轮换 Token

JoyProxy 提供多种 Token 用于自动化。轮换会使旧值失效——在生产环境轮换前请先更新脚本。

## Token 类型

| Token                       | 典型用途                    | 位置                                                                             |
| --------------------------- | ----------------------- | ------------------------------------------------------------------------------ |
| 提取 **API URL**（内含 `token=`） | 端点生成、白名单、凭据             | 在 [Endpoints](https://www.joyproxy.com/admin-ip-extraction-center.html) 复制 URL |
| **Master User Token**       | 订单与账户管理 API             | [账户设置](https://www.joyproxy.com/admin-settings.html)                           |
| **Scraping API Token**      | 网页抓取 API                | 网页抓取 API → API Center                                                          |
| **AI Access Token**         | OpenClaw Skill / AI MCP | [AI 端点生成器](https://www.joyproxy.com/admin-ip-extraction-center.html?panel=ai)  |

各操作使用哪种 Token：[OpenAPI Center](../ji-cheng/openapi-center.md)。

## 轮换 Master User Token

1. 打开[账户设置](https://www.joyproxy.com/admin-settings.html)。
2. 找到 **Master User Token**。
3. 点击 **Rotate** 并立即复制新值。
4. 更新 CI、`.env` 与 [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html) 中保存的授权。

## 轮换提取 API Token

在[端点生成/提取中心](https://www.joyproxy.com/admin-ip-extraction-center.html)轮换。轮换后请复制新的 **API URL**——旧提取 URL 将失效。

## 轮换之后

在 [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html) 或网页抓取 API playground 用新 Token 做冒烟测试。

若自动化返回 `401`，请在配置中搜索旧的 URL 或 Token 字符串。
