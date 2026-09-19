# 代理服务器网关（Proxy Server）

**joyproxy-server** 是 JoyProxy 开源的一款高性能 **HTTP / SOCKS5 代理网关服务程序**（基于 Go 语言开发，支持 Windows、Linux 及 macOS）。

它的主要作用是在本地机器或内网服务器上搭建一个中转代理网关，将本地各种只支持 `127.0.0.1` 的客户端/命令行请求转发至 JoyProxy 云端代理线路。

[GitHub 开源仓库](https://github.com/joyproxy/joyproxy-server) · [最新编译版本下载](https://github.com/joyproxy/joyproxy-server/releases/latest)

---

## 典型应用场景与架构

```text
【应用场景一：本地命令行桥接】
你的 CLI / Python 脚本  ──►  127.0.0.1:8080 (joyproxy-server)  ──►  us-ca.edge.joyproxy.com:10001  ──►  目标网站

【应用场景二：团队集中代理网关】
内网开发机 A ──┐
内网开发机 B ──┼──►  内网网关服务器 (192.168.1.100:8080)  ──►  JoyProxy 云端动态/静态线路  ──►  目标网站
内网开发机 C ──┘     (在网关处统一集中配置 Username/Password)
```

---

## 核心功能特色

1. **协议转换**：可将上游的 SOCKS5 代理转换为本地的 HTTP 代理，或将 HTTP 代理转换为 SOCKS5。
2. **多上游负载均衡与轮换**：支持配置多个 JoyProxy 上游节点，在本地网关层实现轮询（Round-Robin）或随机路由。
3. **团队鉴权与 IP 白名单**：可在 `joyproxy-server` 上配置本地 Username/Password，防止内网未经授权的使用。
4. **流量与日志上报**：提供 HTTP API 接口，方便运维人员监控网关转发的实时流量吞吐与请求日志。

---

## 快速部署指南（以 Linux / Windows 为例）

1. 从 [GitHub Releases](https://github.com/joyproxy/joyproxy-server/releases/latest) 下载对应操作系统的可执行文件。
2. 编写简易配置文件 `config.yaml`：
   ```yaml
   bind: "127.0.0.1:8080"  # 本地监听地址
   upstream:
     type: "http"
     host: "us-ca.edge.joyproxy.com"
     port: 10001
     auth:
       username: "YOUR_PROXY_USERNAME"
       password: "YOUR_PROXY_PASSWORD"
   ```
3. 启动服务：
   ```bash
   ./joyproxy-server -c config.yaml
   ```
4. 在你的本地程序或命令行中直接设置代理为 `http://127.0.0.1:8080` 即可完成桥接！
