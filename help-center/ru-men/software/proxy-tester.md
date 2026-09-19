# 代理检测工具（Proxy Tester）

**JoyProxy 代理检测工具**（JoyProxy Tester）是轻量级桌面 **代理连通性与批量验证** 工具。支持 **HTTP / HTTPS（HTTP / TCP）**、**SOCKS5 TCP**、**SOCKS5 UDP**，内置多通道出口 IP 与地理解析，可配置供应商 **提取 API** 做**严格顺序**批量测试，并在 Windows 上可选 **同步系统浏览器代理**。

[产品页](https://www.joyproxy.com/products/tester.html) · [GitHub Releases](https://github.com/joyproxy/joyproxy-tester/releases) · [源码](https://github.com/joyproxy/joyproxy-tester)

---

## 下载与运行

### Windows 预编译版（推荐）

1. 打开 [Release v2.6.3](https://github.com/joyproxy/joyproxy-tester/releases/tag/v2.6.3) 或 [最新 Releases](https://github.com/joyproxy/joyproxy-tester/releases/latest)。
2. 下载 **`JoyProxy-Tester-2.6.3.exe`**（单文件绿色版，无需单独安装运行库）。
3. 双击运行；页脚显示引擎 **Ready** 即可使用。

产品页标注的版本以 [tester 产品页](https://www.joyproxy.com/products/tester.html) 与 Releases 为准（源码中版本号见仓库 `version.py`）。

### 从源码运行（Python 3.10+）

```bash
git clone https://github.com/joyproxy/joyproxy-tester.git
cd joyproxy-tester
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

本地打包：`python build_pc.py` → `dist/JoyProxy-Tester-2.6.3.exe`。

### 配置存储位置

设置与提取 API 列表保存在应用数据目录下的 **`joyproxy_tester.json`**（Windows 一般为 `%APPDATA%\Xiequ\joyproxy_tester.json`）。界面 **设置（Settings）** 中点击 **保存参数（Save Parameters）** 写入该文件。

---

## 界面导航（与 `web/index.html` 一致）

左侧三个页签：

| 页签 | 英文 UI | 作用 |
| --- | --- | --- |
| **单条测试** | Single Test | 单节点连通性、延迟、出口 IP |
| **批量测试** | Batch Test | 提取 API + 顺序批量 + Live Log |
| **设置** | Settings | 提取 API 管理、超时、地理通道、UDP DNS |

顶栏品牌区可打开 [joyproxy.com](https://www.joyproxy.com)。单条与批量页顶部均显示 **当前公网 IP（Current Public IP）**；若曾勾选同步系统代理，会出现 **清除浏览器代理设置（Clear Browser Proxy Settings）**。

---

## 单条测试（Single Test）

1. 协议分段：**HTTP / TCP**、**SOCKS5 / TCP**、**SOCKS5 / UDP**。
2. **代理地址（Proxy Address）** 支持智能粘贴：`host:port`、`user:pass@host:port`、`http://` / `socks5://`（域名与端口可自动拆分）。
3. 可选 **用户名 / 密码（Username / Password）**。
4. 可选勾选 **测试期间同步浏览器代理（Sync browser proxy during testing）** — 写入 **Windows 系统浏览器代理**，测试结束或手动清除时可恢复（与扩展「只改 Chromium」不同）。
5. 点击 **开始测试（Start Testing）**。

结果卡片展示：

- **响应时间（Response Time）**、**HTTP 状态（HTTP Status）**（视协议与目标通道而定）。
- 若设置中开启 **显示响应内容（Show response content）**，会展示探测接口返回正文（自定义 URL 时为原始文本）。

---

## 批量测试（Batch Test）

1. 在 **设置** 中先 **添加（Add）** 至少一条 **提取 API**（名称、API URL、可选该 API 返回代理的账密）。
2. 批量页选择 **Extract API**、**提取数量（Extract Count）**、**测试间隔（Test Interval）**（数值 + 秒/分/时/天；用于循环提取时的等待，带 **下次切换倒计时（Next Switch Countdown）**）。
3. 同样可选 **测试期间同步浏览器代理**。
4. **开始批量测试（Start Batch Test）** — 后台 **严格顺序** 拉取并测试，非并发风暴；可用 **停止（Stop）** 中断。
5. **手动单条测试（Manual Single Test）** — 按当前 API 再提取一条并测通/切换，适合抽检。

统计区：**进度（Progress）**、**成功率（Success Rate）**、**平均响应（Average Response）**、**成功数（Success Count）**。**Live Log** 表格列：`#`、**IP : Port**、**Status**、**Response**、**Notes**；可 **清空（Clear）**。

从 API 文本解析 `host:port` 时，默认使用配置中的 **`extract_regex`**（内置规则识别 IP/域名与端口）。若 API 一次返回多行，**每次运行只取第一条**；添加 API 前请确认已在供应商侧 **IP 白名单** 或已配置账密（界面提示与 README 一致）。

---

## 设置（Settings）

### 管理提取 API（Manage Extract APIs）

- 字段：**提供商（Provider）**、**API** URL、可选 **Username / Password**（作为该批代理的统一账密）。
- 列表中可删除已保存项；保存后写入 `joyproxy_tester.json`。

### 高级参数（Advanced Parameters）

| 项 | 说明 |
| --- | --- |
| **默认超时（Default timeout）** | 秒，默认 10 |
| **目标 / IP+Geo 通道（Target / IP+Geo Channel）** | `ipinfo.io`、`ipwhois.app`、`ip-api.com`、`api.myip.com`，或 **自定义 URL（Custom URL）**（原始内容，不解析 JSON） |
| **显示响应内容** | 是否在结果中展示探测正文 |
| **UDP 测试 DNS 服务器（UDP Test DNS Server）** | 端口 53，默认 `8.8.8.8` |

**SOCKS5 / UDP** 模式下，通过标准 **UDP ASSOCIATE** 经代理向该 DNS 发送 UDP 查询（查询域名取自所选地理通道），以验证 **UDP 转发** 是否可用。

---

## 测试 JoyProxy 线路

| 线路类型 | 在检测工具中填写的内容 |
| --- | --- |
| **动态代理（Rotating）** | `http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001` — 用户名来自 [提取（Endpoint Generator）](https://www.joyproxy.com/admin-ip-extraction-center.html)，密码来自 [用户与白名单（Users & Whitelist）](https://www.joyproxy.com/admin-authorization.html) |
| **静态 / 自定义独享** | `http://USER:PASS@HOST:PORT` — 从 [我的代理（My Proxies）](https://www.joyproxy.com/admin-my-orders.html) 或提取页复制 |

测通后可在 [浏览器扩展](browser-extension.md) 中做浏览器内验证，或通过 [代理服务器网关](proxy-server.md) 在本机起 HTTP/SOCKS 入口。

---

## 与浏览器扩展的对照

| 能力 | **Proxy Tester** | **浏览器扩展** |
| --- | --- | --- |
| 单条测通 | ✅ 全协议含 UDP | ✅ HTTP / SOCKS5（UDP 非重点） |
| 提取 API 批量 | ✅ Live Log + 循环间隔 | ✅ 工作台 API + 定时换代理 |
| 应用代理 | Windows **系统代理**（可选） | **仅 Chromium** |
| 指纹 / 代理范围 | ❌ | ✅ 工作台 **高级** |
| JoyProxy 已购线路 | 需自行粘贴 URI | ✅ 登录后选动态/静态 |

许可：**MIT**（© JoyProxy）。协议与字段以 [GitHub README](https://github.com/joyproxy/joyproxy-tester) 与仓库 UI 为准。
