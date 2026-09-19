# 代理检测工具（Proxy Tester）

**JoyProxy Proxy Tester** 是一款专为 Windows 平台打造的桌面级代理批量检测软件。

在自动化脚本上线或进行大规模数据抓取前，使用检测工具对代理池进行预检，可以快速剔除失效节点、测量平均响应延迟并验证出口地理位置。

[GitHub Releases 最新版本下载](https://github.com/joyproxy/joyproxy-tester/releases/latest)

---

## 核心功能与特性

1. **多协议全覆盖**：支持检测 **HTTP**、**HTTPS**、**SOCKS5 (TCP)** 以及 **SOCKS5 (UDP)** 代理协议。
2. **批量导入导出**：
   - 支持从 `.txt` / `.csv` 文件直接导入数万条代理列表。
   - 支持直接粘贴多行 `Host:Port:User:Pass` 或 URI 格式文本。
   - 检测完成后可一键将“正常可用节点”批量导出为多种标准格式。
3. **多维度指标检测**：
   - **连通性状态（Status）**：实时标记 `Success 成功` 或 `Failed 失败`。
   - **出口公网 IP（Exit IP）**：检测代理实际吐出的公网 IPv4 / IPv6 地址。
   - **国家与地理定位（Country & Geo）**：展示代理出口 IP 所在的国家、省份与城市。
   - **响应延迟（Latency/Ping）**：精准测算从本地发起到代理节点返回的毫秒级延迟（ms）。
   - **SOCKS5 UDP 支持检测**：专门针对需要 UDP 转发的场景检测代理节点 UDP 通道是否畅通。
4. **多线程并发检测**：支持自由调节并发检测线程数（1 至 100 线程），数秒内即可完成千条节点的检测。

---

## 使用步骤

1. 前往 GitHub 下载并解压 `joyproxy-tester.exe` 绿色免安装版。
2. 双击打开软件界面。
3. 在 **输入区域（Input Proxies）** 中粘贴你的代理列表（支持 `host:port` 或 `http://user:pass@host:port` 格式）。
4. 在 **测试设置（Test Settings）** 中选择测试目标节点（默认检测 `https://api.ipify.org`，也可填入你自定义的目标网址）。
5. 设置并发线程数（例如 `20` 线程）。
6. 点击 **开始检测（Start Test）** 按钮。
7. 检测完成后，软件表格中会清晰展示各节点的测试结果。点击 **导出有效节点（Export Working）** 即可保存结果。
