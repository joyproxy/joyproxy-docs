# 代理检测工具（Proxy Tester）

**JoyProxy 代理检测工具**（JoyProxy Tester）是 Windows 桌面上的代理连通性与**批量验证**工具。支持 **HTTP / HTTPS**、**SOCKS5 TCP**、**SOCKS5 UDP**，内置多通道出口 IP 与地理解析，并可对接供应商 **提取 API** 做顺序批量测试。

[产品页](https://www.joyproxy.com/products/tester.html) · [GitHub Releases](https://github.com/joyproxy/joyproxy-tester/releases) · [源码](https://github.com/joyproxy/joyproxy-tester)

---

## 下载与运行

### Windows 预编译版（推荐）

1. 打开 [Release v2.6.3](https://github.com/joyproxy/joyproxy-tester/releases/tag/v2.6.3)（或 [最新 Releases](https://github.com/joyproxy/joyproxy-tester/releases/latest)）。
2. 下载 **`JoyProxy-Tester-2.6.3.exe`**（单文件绿色版，无需安装运行库）。
3. 双击运行。

产品页当前标注的构建版本以 [tester 产品页](https://www.joyproxy.com/products/tester.html) 与 Releases 为准。

### 从源码运行（Python 3.10+）

```bash
git clone https://github.com/joyproxy/joyproxy-tester.git
cd joyproxy-tester
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

本地打包 EXE：`python build_pc.py` → 输出 `dist/JoyProxy-Tester-2.6.3.exe`。

---

## 核心功能

### 1. 单条连通性测试

- 协议：**HTTP / HTTPS**、**SOCKS5 TCP**、**SOCKS5 UDP**。
- **智能粘贴**：识别 `host:port`、`user:pass@host:port`、`http://` / `socks5://`。
- 支持代理 **用户名 / 密码（Username & Password）**。
- 展示延迟、状态、出口 **公网 IP** 与国家/地区（多通道：`ipinfo.io`、`ipwhois.app`、`ip-api.com`、`api.myip.com` 等，可在设置中切换）。
- 可填写**自定义探测 URL**（返回原始文本，用于专用检测接口）。
- 可选：**一键同步 Windows 系统浏览器代理**，并支持恢复。

### 2. 批量提取与顺序测试

- 配置 **提取 API URL** 与**正则提取规则**，拉取代理列表后**严格顺序**逐条测试（非并发风暴）。
- **Live Log** 表格实时显示每条结果；统计**成功率**、**平均延迟**。
- 支持按间隔（秒/分/时/天）**循环提取+测试**，带倒计时；也支持手动单次提取切换。

### 3. SOCKS5 UDP 验证

通过标准 **UDP ASSOCIATE**，向目标 DNS（如 `8.8.8.8:53`）发送 UDP 查询，验证代理是否支持 UDP 转发（设置页可配置 UDP DNS 目标）。

---

## 测试 JoyProxy 线路

| 线路类型 | 在检测工具中粘贴的内容 |
| --- | --- |
| **动态代理（Rotating）** | `http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001` — 用户名来自 [提取（Endpoint Generator）](https://www.joyproxy.com/admin-ip-extraction-center.html)，密码来自 [用户与白名单（Users & Whitelist）](https://www.joyproxy.com/admin-authorization.html) |
| **静态 / 自定义独享** | `http://USER:PASS@HOST:PORT` — 从 [我的代理（My Proxies）](https://www.joyproxy.com/admin-my-orders.html) 或提取页复制 |

测通后可在 [浏览器扩展](browser-extension.md) 中做浏览器内验证，或将系统代理指向本机 [joyproxy 网关](proxy-server.md)。

---

## 界面说明（与产品页截图一致）

- **单条测试**：选协议 → 粘贴节点 → 查看延迟与地理信息。
- **批量测试**：配置提取 API → 查看成功率与 Live Log。
- **设置（Settings）**：提取 API、超时、地理通道、UDP DNS 目标等。

许可：**MIT**（© JoyProxy）。
