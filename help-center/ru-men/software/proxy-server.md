# 代理服务器网关（Proxy Server）

**joyproxy-server**（可执行文件名为 `joyproxy`）是 JoyProxy 开源的 **HTTP / SOCKS5 代理网关（SPS）**，面向 **Linux** 与 **Windows**。在 VPS 或办公室 PC 上监听本地/内网端口，把只认 `127.0.0.1:端口` 的程序流量转发到 JoyProxy 云端线路，或转发到你自建的其它上级代理。

[产品页（完整参数与 API 说明）](https://www.joyproxy.com/products/proxy-server.html) · [GitHub 仓库](https://github.com/joyproxy/joyproxy-server) · [Releases 下载](https://github.com/joyproxy/joyproxy-server/releases/tag/v2.3)

> **说明**  
> 网关程序本身免费；经 JoyProxy 云端出口的流量仍按控制台订单计费。完整鉴权 API / 流量 API 字段表以 [产品页](https://www.joyproxy.com/products/proxy-server.html) 与 [GitHub README](https://github.com/joyproxy/joyproxy-server) 为准。

---

## 典型架构

```text
【本地桥接】
CLI / Python  ──►  127.0.0.1:8080（本机 joyproxy 监听）  ──►  JoyProxy 上级代理  ──►  目标网站

【团队网关】
内网多台开发机  ──►  192.168.1.100:8080（统一网关 + 鉴权）  ──►  JoyProxy 动态/静态线路
```

---

## 下载与运行方式

| 平台 | 文件 | 说明 |
| --- | --- | --- |
| **Linux** | `joyproxy-linux-amd64` | [Release v2.3](https://github.com/joyproxy/joyproxy-server/releases/tag/v2.3) 下载后 `chmod +x` 执行 |
| **Linux（可选）** | `joyproxy-centos7-linux-amd64.tar.gz` | [Release v2.2](https://github.com/joyproxy/joyproxy-server/releases/tag/v2.2)，兼容 CentOS 7.x（glibc 2.17+） |
| **Windows** | `joyproxy-gui.exe` | 图形界面（GUI）：监听端口、鉴权模式、启停、实时日志 |
| **Windows** | `joyproxy.exe` | 命令行版，与 Linux 相同的 `sps` 子命令与参数 |

Windows 也可在仓库 `dist/windows/` 获取构建；**没有**单独的 `config.yaml` 启动方式，配置均通过 **`joyproxy sps` 命令行参数** 完成。

---

## 命令行基础

查看全部参数：

```bash
./joyproxy sps -h
```

常用参数（与现网产品页一致）：

| 参数 | 必填 | 说明 |
| --- | --- | --- |
| `-S` | 否（默认 `http`） | 上级中继类型：`http` 或 `socks5` |
| `-p` | **是** | 监听端口，如 `:8080` 或端口段 `:5001-5999` |
| `-g` | 建议 | 本机**公网 IP**；调用外部鉴权 API 时作为 `local_addr` |
| `-parent` | 否 | 鉴权 API **未**返回 `upstream` 时的默认上级代理 URL |
| `--auth-url` | 否 | 外部鉴权 API（每条连接 HTTP GET） |
| `--auth-nouser` | 否 | 客户端无需账密，由 `--auth-url` 按连接判定 |
| `--traffic-url` | 否 | 外部流量上报 API（连接结束时异步 GET） |
| `--daemon` / `--forever` | 否 | 后台守护；崩溃后自动重启 |
| `--no-detach` | 否 | 配合 `--daemon`，供 **systemd** 使用（主进程不立刻退出） |
| `--max-conns-rate` | 否 | 全局每秒最大新建连接数（`0` 表示不限制） |
| `--sniff-domain` | 否 | 对 HTTP CONNECT 嗅探 TLS SNI |

日志：`--verbose`（完整日志）、`--quiet`（仅错误）。

---

## 五种启动模式（授权方式）

以下模式与 [JoyProxy 服务器端产品页](https://www.joyproxy.com/products/proxy-server.html) 的「五种授权模式」一致。二进制路径在 Linux 下多为 `./joyproxy-linux-amd64`，下文统一写作 `./joyproxy`。

### 1. 开放代理（无密码）

不配置 `--auth-url`。能访问监听端口的客户端可直接使用，**不要求**代理账密。

```bash
./joyproxy sps -S http -p ":8080" -g "你的公网IP"
```

### 2. 白名单授权（客户端无密码，外部 API 判定）

使用 `--auth-nouser` + `--auth-url`。客户端**不必**发送用户名密码；每条连接由**你的**鉴权 API 根据 `client_addr`、`target` 等决定放行（IP 白名单、目标白名单等）。

```bash
./joyproxy sps -S http -p ":8080" -g "你的公网IP" \
  --auth-nouser --auth-url "https://你的域名/auth"
```

### 3. 用户名 / 密码授权

**不要**加 `--auth-nouser`。客户端必须发送 HTTP `Proxy-Authorization` 或 SOCKS5 用户名密码，否则返回 **407**。

未配置 `--auth-url` 时，仅在本地校验账密非空；若同时配置 `--auth-url`，账密会转发给你的 API 校验（见模式 4）。

```bash
./joyproxy sps -S http -p ":8080" -g "你的公网IP"
```

### 4. 外部鉴权 API（可选，可与模式 2/3 组合）

配置 `--auth-url` 后，每条连接向你的端点发起 **HTTP GET**。API 返回 **200/204** 且响应头 `upstream: http://...` 或 `socks5://...` 则放行；返回 `upstream: ERR` 或非 2xx 则拒绝（常见 **503**，也可通过 `X-Joyproxy-Reject-Status` / `X-Joyproxy-Deny` 返回 **407** / **429**）。

鉴权 API 还可通过响应头下发按用户/IP 的并发、带宽、QPS 等限制（`userconns`、`ipconns`、`userrate` 等）。缓存：`--auth-cache`、`--auth-fail-cache`。

查询参数与响应头完整列表见 [产品页 → 外部验证 API](https://www.joyproxy.com/products/proxy-server.html)。

### 5. 外部流量 API（可选，可与任意模式叠加）

配置 `--traffic-url` 后，每条连接**结束**时异步 GET 上报流量；你的 API 应返回 **204 No Content**。仅上报、不鉴权示例：

```bash
./joyproxy sps -S http -p ":8080" -g "你的公网IP" \
  --auth-nouser --traffic-url "https://你的域名/traffic"
```

---

## 对接 JoyProxy 云端上级代理

网关本身不替代 JoyProxy 账密；需要把**上级（upstream）**指向你在控制台获取的线路。

**简单场景（固定上级、开放或本地账密模式）**：用 `-parent` 指定默认上级 URL（含 JoyProxy 用户名密码）：

```bash
# 动态代理示例（网关监听 8080，上级为轮换网关）
./joyproxy sps -S http -p ":8080" -g "你的公网IP" \
  -parent "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001"

# 静态 / 自定义独享示例
./joyproxy sps -S http -p ":8080" -g "你的公网IP" \
  -parent "http://user123:pass123@us-ca.edge.joyproxy.com:10001"
```

`GENERATED_USER` / `YOUR_PASS` / `host:port` 请从 **[提取（Endpoint Generator）](https://www.joyproxy.com/admin-ip-extraction-center.html)** 与 **[用户与白名单（Users & Whitelist）](https://www.joyproxy.com/admin-authorization.html)** 获取。客户端连接本机 `http://127.0.0.1:8080`（若启用模式 3，还需按网关要求带本地账密）。

**进阶场景**：在外部鉴权 API 的响应头里按连接返回不同的 `upstream:`（多池、按用户分流、按目标选静态端口等），见模式 4。

> **SOCKS5 / UDP**  
> 若客户端走 SOCKS5 且涉及 UDP，鉴权 API 返回的上级须为 `socks5://...`；仅 `http://` 上级无法承载 UDP 会话（见 GitHub Release v2.3 说明）。

---

## 后台运行（生产环境）

```bash
./joyproxy sps -S http -p ":5001-5999" -g "你的公网IP" \
  --auth-nouser --daemon --forever
```

使用 **systemd** 管理时请加 **`--no-detach`**，避免主进程在 `--daemon` 下立即退出。

---

## Windows 图形界面（GUI）

若不熟悉命令行，可下载 **`joyproxy-gui.exe`**（[Release v2.3](https://github.com/joyproxy/joyproxy-server/releases/download/v2.3/joyproxy-gui.exe)）：在界面中配置监听端口、鉴权模式、启停服务并查看实时日志，底层能力与 CLI 的 `sps` 模式一致。

---

## 与其它工具配合

| 需求 | 工具 |
| --- | --- |
| 单个 Chromium 浏览器 | [JoyProxy 浏览器扩展](browser-extension.md) |
| 批量检测代理列表 | [代理检测工具](proxy-tester.md) |
| 手机按 App 分流 | [Android 客户端](android-client.md) |
