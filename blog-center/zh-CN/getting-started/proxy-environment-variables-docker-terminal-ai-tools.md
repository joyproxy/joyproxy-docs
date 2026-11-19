---
title: "环境变量配置代理全解：Linux、macOS、Windows、Docker 与 AI 工具中的 HTTP_PROXY / ALL_PROXY / NO_PROXY 实战指南"
description: "系统讲解终端、Python、Node.js、Git、Docker 与 AI CLI 工具中的 HTTP_PROXY、HTTPS_PROXY、ALL_PROXY 和 NO_PROXY 配置细节，涵盖大小写优先级、socks5h:// 防 DNS 泄漏、密码转义与 JoyProxy 接入实战。"
category: getting-started
date: 2026-11-19
---

# 环境变量配置代理全解：Linux、macOS、Windows、Docker 与 AI 工具中的 HTTP_PROXY / ALL_PROXY / NO_PROXY 实战指南

当你从单条 `curl` 测试迈向真实开发环境——比如运行 AI 编程 CLI、Python 爬虫服务、Node.js 脚本、Git 拉取或 Docker 容器编排——在每条命令里手动拼接 `--proxy` 参数很快就会变得难以维护。

行业通用的**代理环境变量**（`HTTP_PROXY`、`HTTPS_PROXY`、`ALL_PROXY`、`NO_PROXY`）正是为此而生。但开发者在实际配置时，几乎都会踩进几个隐蔽的深坑：

* “明明已经 `export HTTP_PROXY`，为什么 `curl` 走了代理，Node.js 原生 `fetch` 却依然直连本地 IP？”
* “配了 `ALL_PROXY` 后外网通了，但本地 MCP 服务、Ollama（`127.0.0.1:11434`）和 Docker 容器健康检查全挂了！”
* “代理密码在浏览器里能用，放进环境变量后却频繁报错 `407 Proxy Authentication Required` 或 `Invalid URL`。”
* “Docker 构建时配置了 `ENV HTTP_PROXY`，结果把代理账号密码永久打进了镜像层里！”

本文将一次理清各语言运行时、Shell 与容器对代理环境变量的真实解析规则，并结合 **[静态 ISP 代理](https://www.joyproxy.com/products/proxy-isp.html)**、**[数据中心代理](https://www.joyproxy.com/products/proxy-datacenter.html)** 与 **[动态住宅代理](https://www.joyproxy.com/products/proxy-residential.html)** 给出开箱即用的生产模板。

---

## 一、四个核心环境变量的真实分工与优先级规则

代理环境变量并没有统一强制的 RFC 标准，不同库的实现细节各异。先记住下面四条核心规则，就能避开 90% 的故障：

| 变量名 | 接管的流量范围 | 生产环境必知注意事项 |
| :--- | :--- | :--- |
| **`HTTP_PROXY` / `http_proxy`** | 明文 HTTP 请求（`http://...`） | 部分工具（如 `curl`、`apt`）优先读取**小写** `http_proxy`，而 Go、`httpx` 等优先读取**大写** `HTTP_PROXY`。生产脚本建议**大小写成对配置**。 |
| **`HTTPS_PROXY` / `https_proxy`** | TLS/HTTPS 加密请求（`https://...` 的 `CONNECT` 隧道） | 代理 URI 协议头通常仍写 `http://user:pass@host:port`（表示通过 HTTP 代理建立 HTTPS 隧道），除非目标端口明确要求 TLS 加密连接，否则不要改成 `https://`。 |
| **`ALL_PROXY` / `all_proxy`** | HTTP/HTTPS 之外的兜底协议（特别是 SOCKS5） | 仅支持该变量的客户端有效（如 `curl`、`git`、`pip`、`httpx[socks]`）。协议务必使用 **`socks5h://`**（而非 `socks5://`），确保域名解析在远端代理节点完成，防止本地 ISP DNS 泄漏。 |
| **`NO_PROXY` / `no_proxy`** | 逗号分隔的直连白名单（域名、IP、CIDR 网段） | **极其关键。** 遗漏 `localhost,127.0.0.1,::1` 会导致本地接口、数据库、本地 MCP Server 及云主机元数据地址（`169.254.169.254`）被错误发往远端代理并超时失败。 |

> [!NOTE] 密码含特殊字符会导致 URI 解析失败
> 若你的代理密码中包含 `@`、`:`、`/`、`#`、`?` 或 `%` 等符号，环境变量解析器会在错误位置截断主机名，引发 `407` 认证失败或 URL 解析报错。请先对密码做 URL 编码（例如 `@` 替换为 `%40`、`:` 替换为 `%3A`），或在 JoyProxy 静态线路上启用 **IP 白名单免密认证**，彻底告别明文密码拼接。

---

## 二、终端环境配置：Linux、macOS 与 Windows PowerShell

### Linux / macOS（`bash` / `zsh`）

在日常终端、AI CLI 工具或本地自动化脚本中使用时，建议同时导出大小写变量，并默认锁定内网与回环地址白名单：

```bash
# 以 JoyProxy 静态 ISP 代理为例（请替换为控制台提取的实际入口与凭据）
export PROXY_URL="http://your_user:your_pass@isp.joyproxy.com:10001"

export HTTP_PROXY="$PROXY_URL"
export HTTPS_PROXY="$PROXY_URL"
export http_proxy="$PROXY_URL"
export https_proxy="$PROXY_URL"

# 可选：SOCKS5 兜底（务必用 socks5h:// 避免本地 DNS 泄漏）
export ALL_PROXY="socks5h://your_user:your_pass@isp.joyproxy.com:10001"
export all_proxy="$ALL_PROXY"

# 必须放行本地回环、局域网段与云元数据服务
export NO_PROXY="localhost,127.0.0.1,::1,.local,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,169.254.169.254"
export no_proxy="$NO_PROXY"
```

> [!TIP] 在 `~/.zshrc` 或 `~/.bashrc` 中封装快捷开关
> 如果你经常在直连与代理之间切换，建议把上述导出语句放进 `proxy_on` / `proxy_off` 两个 shell 函数中按需启停，避免误伤本地开发服务。

### Windows PowerShell 与 CMD

在 PowerShell 中，当前会话环境变量通过 `$env:` 作用域设置：

```powershell
# PowerShell（仅对当前终端窗口生效）
$env:HTTP_PROXY  = "http://your_user:your_pass@isp.joyproxy.com:10001"
$env:HTTPS_PROXY = "http://your_user:your_pass@isp.joyproxy.com:10001"
$env:ALL_PROXY   = "socks5h://your_user:your_pass@isp.joyproxy.com:10001"
$env:NO_PROXY    = "localhost,127.0.0.1,::1,.local,169.254.169.254"

# 用完随时清理
Remove-Item Env:HTTP_PROXY, Env:HTTPS_PROXY, Env:ALL_PROXY, Env:NO_PROXY
```

若使用传统 `cmd.exe`：

```cmd
set HTTP_PROXY=http://your_user:your_pass@isp.joyproxy.com:10001
set HTTPS_PROXY=http://your_user:your_pass@isp.joyproxy.com:10001
set NO_PROXY=localhost,127.0.0.1,::1
```

---

## 三、常见运行时与工具的“坑”：Python、Node.js 与 Git

即使终端里环境变量已经生效，主流编程运行时也存在各自的行为差异：

### 1. Python（`requests`、`httpx`、`aiohttp`、`pip`）
* **`requests` 与 `httpx`**：默认自动读取 `HTTP_PROXY`、`HTTPS_PROXY` 和 `ALL_PROXY`。若使用 `socks5h://`，需确保安装了 SOCKS 依赖（如 `pip install socksio` 或 `requests[socks]`）。
* **`aiohttp`**：**默认完全忽略系统代理环境变量！** 高并发异步请求必须显式传入 `trust_env=True`：

```python
import aiohttp, asyncio

async def main():
    async with aiohttp.ClientSession(trust_env=True) as session:
        async with session.get("https://api.ipify.org?format=json") as resp:
            print(await resp.text())

asyncio.run(main())
```

### 2. Node.js（原生 `fetch`、`undici`、`axios`）
* **内置 `fetch`（基于 `undici`）**：长期以来默认不读取 `HTTP_PROXY` / `HTTPS_PROXY`，这是 Node.js 开发者最常踩的坑。
  * 在 **Node.js 22.21+ / 24+** 中，可直接设置环境变量 `NODE_USE_ENV_PROXY=1` 开启原生支持。
  * 旧版本则建议在入口处显式注册 `EnvHttpProxyAgent`：

```javascript
import { EnvHttpProxyAgent, setGlobalDispatcher } from "undici";

// 自动读取 HTTP_PROXY、HTTPS_PROXY 与 NO_PROXY
setGlobalDispatcher(new EnvHttpProxyAgent());

const res = await fetch("https://api.ipify.org?format=json");
console.log(await res.text());
```

### 3. Git（按域名精准代理，避免影响内网仓库）
无需全局开启代理，可以只对特定代码托管域名（例如 `github.com`）生效：

```bash
git config --global http.https://github.com.proxy http://your_user:your_pass@isp.joyproxy.com:10001
# 需要取消时执行：
git config --global --unset http.https://github.com.proxy
```

---

## 四、Docker 规范配置：构建期 vs 运行期（严禁把账密写死进 `ENV`）

在容器化爬虫与 AI Agent 部署中，最危险的操作莫过于在 `Dockerfile` 里写 `ENV HTTP_PROXY=http://user:pass@...`——这会把代理账密永久保留在镜像历史记录中。

### 安全写法 1：构建期通过 `--build-arg` 传入
Docker 默认将 `HTTP_PROXY`、`HTTPS_PROXY` 和 `NO_PROXY` 识别为预定义构建参数，**不会持久化到最终镜像层中**：

```bash
docker build \
  --build-arg HTTP_PROXY="http://your_user:your_pass@dc.joyproxy.com:10001" \
  --build-arg HTTPS_PROXY="http://your_user:your_pass@dc.joyproxy.com:10001" \
  --build-arg NO_PROXY="localhost,127.0.0.1" \
  -t my-scraper:latest .
```

### 安全写法 2：运行期通过 `compose.yaml` + `.env` 注入
对于需要动态换 IP 的容器化爬虫、Playwright 节点或 MCP 服务，将敏感配置保留在本地 `.env`（切勿提交到 Git），并在容器启动时注入：

```yaml
services:
  crawler-worker:
    build: .
    env_file:
      - .env
    environment:
      - HTTP_PROXY=${JOYPROXY_RESI_URL}
      - HTTPS_PROXY=${JOYPROXY_RESI_URL}
      - NO_PROXY=localhost,127.0.0.1,redis,postgres
```

对应的 `.env` 文件中即可直接写入 JoyProxy 动态网关串（例如通过 `gate.joyproxy.com:9001` 绑定美国城市 30 分钟粘性会话）：

```dotenv
JOYPROXY_RESI_URL=http://your_user-zone-resi-region-us-session-worker1-sessTime-30:your_pass@gate.joyproxy.com:9001
```

---

## 五、不同环境变量工作流该如何匹配 JoyProxy 代理产品？

| 常见场景 | 推荐 JoyProxy 产品 | 选型核心原因 |
| :--- | :--- | :--- |
| **本地终端、AI 编程 CLI、长会话登录态工具** | **[ISP（独享静态住宅）代理](https://www.joyproxy.com/products/proxy-isp.html)** | 固定纯正住宅 ASN（`isp.joyproxy.com:10001`），避免中途切 IP 触发人机验证，且支持 **IP 白名单**，`.env` 里连密码都无需明文存放。 |
| **Docker 镜像构建、CI/CD 依赖拉取、不限流量并发** | **[数据中心代理](https://www.joyproxy.com/products/proxy-datacenter.html)** | 高速低延迟机房骨干网，提供不限流量套餐，拉取大体积包和开放 API 时毫无 GB 账单焦虑。 |
| **容器化爬虫 Worker 与多区并发抓取** | **[住宅代理](https://www.joyproxy.com/products/proxy-residential.html)** | 统一入口 `gate.joyproxy.com:9001`，只需改环境变量用户名中的地区与 `sessTime` 参数即可灵活轮换或保持粘性。 |
| **B2B 企业接口联调与商业环境测试** | **[商业代理](https://www.joyproxy.com/products/proxy-business.html)** | 提供干净的商业宽带 ASN 出口，更贴合企业级服务与 SaaS 后台的风控画像。 |
| **高防反爬目标页直接提取（免配置代理）** | **[网页抓取 API](https://www.joyproxy.com/products/web-unblocker.html)** | 目标站防护极严时，无需折腾代理环境变量，直接通过标准 HTTPS 调用 `api.joyproxy.com`，按成功请求计费。 |

---

## 六、30 秒快速排障与验证清单

配置完成后，启动核心业务前建议先跑完以下三步校验：

1. **验证外网出口 IP 是否真正切换**：
   ```bash
   curl -s https://api.ipify.org?format=json
   ```
   若返回的仍是本地宽带 IP，请加上 `-v` 参数运行 `curl -v https://api.ipify.org`，观察日志中是否出现 `Uses proxy env variable`。
2. **验证 `NO_PROXY` 是否成功放行本地服务**：
   ```bash
   curl -v http://127.0.0.1:8080/health
   ```
   确认连接直接指向本地端口，而没有尝试经由代理隧道转发 `127.0.0.1`。
3. **验证 SOCKS5 DNS 解析位置**：
   在使用 `ALL_PROXY` 时，确认协议前缀为 `socks5h://` 而非 `socks5://`，防止本地 DNS 暴露真实地理位置。

如需进一步排查认证失败或白名单规则，可参考 [JoyProxy 白名单与认证账密配置指南](https://www.joyproxy.com/blog/zh-CN/getting-started/whitelist-credentials-setup/) 与 [解决 407 代理认证报错实战](https://www.joyproxy.com/blog/zh-CN/guides/stop-407-rotating-proxy-extraction-guide/)。现在就去 [注册 JoyProxy 账号](https://www.joyproxy.com/register.html)，用 1 GB 入门流量包或独享静态 ISP 线路快速跑通你的开发环境吧。
