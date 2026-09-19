# 代理服务器网关（Proxy Server）

**joyproxy-server**（命令行程序名通常为 `joyproxy`）是一款高性能、轻量级的 HTTP / SOCKS5 代理网关服务，适用于 Linux 服务器与 Windows 环境。

在实际业务中，许多爬虫脚本、自动化工具或第三方商业软件只支持连接本地无密码的 `127.0.0.1:端口`，或者团队希望在局域网内搭建一台统一的跳板服务器，避免把核心代理账号密码散落到多台机器上。`joyproxy-server` 就是为了解决这些中继与权限管控需求而设计的。

相关地址：  
<a href="https://www.joyproxy.com/products/proxy-server.html" target="_blank" rel="noopener noreferrer">产品页面与完整参数文档</a> · <a href="https://github.com/joyproxy/joyproxy-server" target="_blank" rel="noopener noreferrer">GitHub 仓库</a> · <a href="https://github.com/joyproxy/joyproxy-server/releases/latest" target="_blank" rel="noopener noreferrer">最新 Releases 下载</a>

> **计费说明**  
> 网关程序本身开源免费，不限制部署实例数。当网关的上游配置为 JoyProxy 的动态住宅或静态云端节点时，实际消耗的网络流量仍由 JoyProxy 控制台订单统一扣除。

---

## 典型应用场景

1. **本地开发透明中继**  
   本地代码或命令行工具只配置 `http://127.0.0.1:8080`，由本机后台运行的 `joyproxy` 负责自动补充复杂的用户名、密码并转发至 JoyProxy 上级节点。
2. **企业与团队统一局域网出口**  
   在办公室或机房局域网搭建一台独立网关（如 `192.168.1.100:8080`）。所有内部机器的请求统一指向该网关，外部通过 IP 白名单或中心服务统一管控，既安全又便于审计流量。

---

## 程序获取与启动方式

网关为免安装的单一可执行文件，**无需编写复杂的 `config.yaml` 文件**，所有配置直接通过运行参数指定，在 Windows 下还提供了专属的图形化界面。

### 1. Linux 环境（主流发行版与老旧系统）

- **标准 64 位系统**：前往 GitHub Releases 下载最新的 `joyproxy-linux-amd64`。
  ```bash
  chmod +x joyproxy-linux-amd64
  mv joyproxy-linux-amd64 /usr/local/bin/joyproxy
  ```
- **老旧系统（如 CentOS 7.x）**：由于 glibc 版本较低，建议下载 <a href="https://github.com/joyproxy/joyproxy-server/releases/tag/v2.2" target="_blank" rel="noopener noreferrer">Release v2.2</a> 中的兼容包 `joyproxy-centos7-linux-amd64.tar.gz` 解压使用。

### 2. Windows 环境

- **带界面的图形版本**：下载运行 **`joyproxy-gui.exe`**。可在窗口中直观配置监听端口、上游地址、鉴权模式，并实时查看连接日志与启停状态。
- **纯命令行版本**：下载 **`joyproxy.exe`**，其子命令与 Linux 版本完全一致。

---

## 常用命令行参数速查

网关的核心功能集中在 `sps`（Simple Proxy Server）子命令中。可通过 `./joyproxy sps -h` 查看完整参数，日常最常用的参数如下：

| 参数 | 说明 | 示例 |
| --- | --- | --- |
| `-p` | **必填**，本地监听的端口或端口段 | `-p ":8080"` 或 `-p ":5001-5010"` |
| `-S` | 上级代理中继协议，支持 `http` 或 `socks5`（默认为 `http`） | `-S http` |
| `-parent` | 默认的上级代理 URL（支持包含账密） | `-parent "http://user:pass@gate.joyproxy.com:9001"` |
| `-g` | 建议配置，指定本机的公网 IP（供外部鉴权时作为依据） | `-g "1.2.3.4"` |
| `--auth-nouser` | 客户端连接本网关时免密，授权由外部 API 或白名单判定 | `--auth-nouser` |
| `--auth-url` | 配置外部 HTTP 鉴权接口，每条新连接都会向该 URL 发起校验 | `--auth-url "https://api.mycorp.com/auth"` |
| `--traffic-url` | 配置外部流量上报接口，连接断开后异步回传用量 | `--traffic-url "https://api.mycorp.com/traffic"` |
| `--daemon` / `--forever` | 启用后台常驻守护，进程异常退出后自动重启 | `--daemon --forever` |
| `--no-detach` | 配合 `--daemon` 使用，专为 systemd 守护进程设计（保持前台主进程） | `--no-detach` |

---

## 常见接入与授权模式

根据实际网络安全要求，`joyproxy-server` 支持多种灵活的授权组合方式：

### 模式一：本地无密直接中继（最常用）

适合在本机或可信的局域网内运行，下游客户端连接 `127.0.0.1:8080` 无需任何密码，网关自动将请求附带账密转发给 JoyProxy：

```bash
./joyproxy sps -S http -p ":8080" \
  -parent "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001"
```

### 模式二：网关自建用户名密码保护

如果不希望局域网内的其它人随意滥用网关，可以为网关本身启用账号密码（客户端访问时需输入账密，网关再统一转给上游）：

```bash
./joyproxy sps -S http -p ":8080" \
  -parent "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001"
```
*注：当未开启 `--auth-nouser` 且未配置外部鉴权 API 时，客户端必须提供 Proxy-Authorization 账密方可连通。*

### 模式三：对接业务系统的外部 HTTP 鉴权与分流 API

对于有多租户管理或动态选路需求的企业，网关支持通过 `--auth-url` 与你自己的业务系统打通：

```bash
./joyproxy sps -S http -p ":8080" -g "你的服务器公网IP" \
  --auth-nouser \
  --auth-url "https://api.mycorp.com/check-proxy"
```

在这个模式下：
1. 客户端发起连接时无需输入密码。
2. 网关向你的 `auth-url` 发送一个包含客户端 IP 与目标域名的 HTTP GET 请求。
3. 你的接口只需返回 HTTP 200，并在响应头中动态返回 `upstream: http://user:pass@upstream-proxy:port`，网关就会按指令将该连接转发到特定的上级代理。如果返回失败，则连接立即被拦截。

---

## 生产环境部署（Linux systemd 托管）

在 Linux 服务器上长期运行网关时，建议使用 systemd 进行托管：

1. 创建服务文件 `/etc/systemd/system/joyproxy.service`：
   ```ini
   [Unit]
   Description=JoyProxy Gateway Service
   After=network.target

   [Service]
   Type=simple
   User=root
   ExecStart=/usr/local/bin/joyproxy sps -S http -p ":8080" -parent "http://USER:PASS@gate.joyproxy.com:9001" --no-detach
   Restart=always
   RestartSec=5
   LimitNOFILE=65535

   [Install]
   WantedBy=multi-user.target
   ```
2. 重载配置并启动服务：
   ```bash
   systemctl daemon-reload
   systemctl enable joyproxy
   systemctl start joyproxy
   systemctl status joyproxy
   ```
3. 验证本地连通性：
   ```bash
   curl -x http://127.0.0.1:8080 https://ipinfo.io/json
   ```
   若返回的 IP 已变为 JoyProxy 的云端代理出口，说明网关已正常工作。
