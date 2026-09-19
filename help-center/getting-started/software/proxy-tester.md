# 代理检测工具（Proxy Tester）

**JoyProxy 代理检测工具**（JoyProxy Tester）是一款轻量级的 Windows 桌面代理连通性测试与批量验证软件。它原生支持 **HTTP / HTTPS**、**SOCKS5 TCP** 以及 **SOCKS5 UDP** 协议，支持多通道出口 IP 与地理位置解析，并能对接各类代理供应商的提取 API 进行严格的顺序批量测速与 Windows 系统代理联动。

软件完全开源且免安装，单个独立 EXE 即可直接运行。

相关地址：  
<a href="https://www.joyproxy.com/products/tester.html" target="_blank" rel="noopener noreferrer">产品页面</a> · <a href="https://github.com/joyproxy/joyproxy-tester/releases" target="_blank" rel="noopener noreferrer">GitHub Releases 下载</a> · <a href="https://github.com/joyproxy/joyproxy-tester" target="_blank" rel="noopener noreferrer">源码仓库</a>

---

## 下载与启动

### 使用预编译的免安装版（推荐）

1. 前往 GitHub Releases 获取最新发布的安装包或免安装程序（访问 <a href="https://github.com/joyproxy/joyproxy-tester/releases/latest" target="_blank" rel="noopener noreferrer">最新 Release</a>）。
2. 下载单文件可执行程序 **`JoyProxy-Tester.exe`**。
3. 双击直接启动运行。程序无需安装任何额外系统运行库，底栏显示 **Ready** 状态即可开始测试。

*注：在某些 Windows 安全策略下，首次运行可能会弹出提示，选择“仍要运行”即可。*

### 从源码运行或自行打包（Python 3.10+）

如果你希望在本地调试或二次开发，可以使用 Python 源码运行：

```bash
git clone https://github.com/joyproxy/joyproxy-tester.git
cd joyproxy-tester

# 创建并激活虚拟环境
python -m venv .venv
.\.venv\Scripts\activate

# 安装依赖并启动
pip install -r requirements.txt
python app.py
```

若需在本地重新构建单文件 EXE，直接执行打包脚本：

```bash
python build_pc.py
```

编译生成的可执行文件将位于 `dist/JoyProxy-Tester.exe`。

---

## 配置文件存放位置

程序启动后会自动在当前系统的数据目录下读取或创建配置文件 **`joyproxy_tester.json`**。你在界面中保存的供应商提取 API 列表、测试超时时间以及地理探测通道等参数，均保存在该文件中，迁移时只需复制该文件即可。

---

## 界面布局与核心功能

软件界面简洁，左侧导航包含三个主要工作区：

- **单条测试（Single Test）**：快速测试单个节点的连通性、出口 IP 与响应延迟。
- **批量测试（Batch Test）**：接入提取 API，按设定规则批量拉取代理并进行自动化队列测通。
- **设置（Settings）**：集中管理所有的 API 提取接口、默认超时与底层探测参数。

页面顶部始终显示本机的 **当前公网 IP**，方便与测试出的代理出口 IP 对比确认。

---

## 单条测试

用于验证手头现有的代理节点是否健康，操作非常直观：

1. **协议选择**：在顶部切换 **HTTP / TCP**、**SOCKS5 / TCP** 或 **SOCKS5 / UDP**。
2. **输入地址**：支持智能剪贴板识别。你可以直接粘贴常见的各种格式：
   - 纯地址端口：`1.2.3.4:8080` 或 `myproxy.com:1080`
   - 带账密格式：`user:pass@1.2.3.4:8080`
   - 完整 URL 协议串：`socks5://user:pass@1.2.3.4:1080`
   输入框会自动拆分主机名、端口与可选的账密。
3. **系统代理联动（可选）**：勾选 **测试期间同步浏览器代理** 后，程序在开始测试时会将该节点临时写入 Windows 系统的 Internet 代理配置，方便你直接在原生 Edge 或 Chrome 浏览器中访问网页排查。测试完毕或需要还原时，点击顶部的 **清除浏览器代理设置** 即可一键恢复直连。
4. **发起测试**：点击 **开始测试（Start Testing）**，右侧结果卡片会立即展示该节点的 HTTP 状态码、RTT 响应耗时，以及对应的真实出口公网 IP 和归属国家。

---

## 批量测试与 API 动态提取

当需要评估一批代理的可用率，或者需要让机器周期性更换可用出口时，可以使用批量测试功能：

1. **选择提取接口**：在下拉框中选择在“设置”中预存的供应商提取 API。
2. **设置执行规则**：
   - **提取数量**：设置单次任务需要获取并测试的代理总条数。
   - **测试间隔**：设置每轮测试之间的等待周期（支持秒、分、小时或天），并可配合界面上的倒计时进度条实现自动化长周期监测。
3. **严格顺序测试**：点击 **开始批量测试（Start Batch Test）** 后，后台会采用严格的**单队列顺序请求**机制，逐个拉取并测试节点。这种机制能有效避免多线程并发请求瞬间击穿低并发限制的提取接口，测试过程平稳可控。
4. **实时日志与统计**：
   - 顶部统计面板实时汇总当前的执行进度、成功率百分比、平均响应时间与成功总数。
   - 下方的 **Live Log** 表格实时追加每一个节点的 IP、端口、测试结果与延时数据。点击 **清空（Clear）** 可随时重置日志视图。
5. **手动单次轮换**：如果只想立刻更换一个节点进行抽检，可以点击 **手动单条测试（Manual Single Test）**，程序会即刻从选中的 API 提取一个新 IP 并执行测速。

---

## SOCKS5 UDP 穿透验证原理

很多常规测试工具仅能测试 TCP 握手，无法准确得知 SOCKS5 节点的 UDP 转发功能是否真正畅通。

JoyProxy Tester 实现了真正的 **SOCKS5 UDP ASSOCIATE** 握手与转发验证流程：
1. 客户端首先通过 TCP 与代理服务器建立控制通道，协商启用 UDP ASSOCIATE 模式。
2. 随后通过代理服务器分配的中继端口，向目标 DNS 服务器（默认 `8.8.8.8:53`）发送一个标准的 DNS 查询报文。
3. 如果能够通过代理中继成功收到目标 DNS 返回的响应包，则标记为测试通过，并在日志中输出实际的 UDP 往返延时。

这对于需要使用 DNS 远端解析、音视频流媒体或游戏加速等依赖 UDP 协议的场景，提供了确切的连通性参考。

---

## 设置项与底层参数调优

在 **设置（Settings）** 页面中，你可以根据业务需要对以下参数进行调整：

- **提取 API 管理**：添加不同供应商的提取 URL。如果该服务商提取出的 IP 列表需要统一搭配账号密码使用，可以在表单中预填账密。*注：在添加 API 前，请确保已在供应商控制台将本机公网 IP 添加到白名单中。*
- **默认超时时间**：单次探测的最大等待秒数（默认为 10 秒）。
- **IP 与地理位置解析通道**：内置了包括 `ipinfo.io`、`ipwhois.app`、`ip-api.com` 与 `api.myip.com` 在内的多个成熟公开接口，测试程序会自动解析其返回的 JSON 数据；如果你有自己搭建的测试后端，也可选用 **自定义 URL** 模式，程序将直接展示服务器返回的原始内容。
- **UDP 测试 DNS 服务器**：指定验证 UDP 转发能力时查询的公网 DNS 地址，默认为 `8.8.8.8`。

---

## 与浏览器扩展的定位区别

很多用户经常询问桌面测试工具与浏览器扩展该如何取舍：

- **JoyProxy 浏览器扩展** 专注于**日常工作与浏览**：它仅在当前浏览器生效，提供方便的侧栏切换、丰富的 UA/时区/硬件指纹伪装，适合多账号防关联、跨境电商店铺管理以及页面调试。
- **JoyProxy 桌面检测工具** 专注于**网络质量诊断与自动化批量筛选**：它具备更严谨的协议支持（含 UDP 报文检测）、单文件免安装、可直接同步到 Windows 全局代理，并能无并发压力地处理提取 API 的批量测活。
