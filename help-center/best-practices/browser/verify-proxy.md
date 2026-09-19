# 代理连通性与出口 IP 验证指南

配置完代理网络后，建议通过标准化测试流程验证：**代理链路是否连通、出口 IP 属地是否与目标一致、以及是否存在网络特征泄漏**。

本文提供三种常用的验证手段。

---

## 方法一：使用权威网络检测服务（浏览器环境）

在已配置代理的浏览器中访问以下检测服务：

1. **<a href="https://ipinfo.io" target="_blank" rel="noopener noreferrer">ipinfo.io</a>**：
   - 展示当前的公网 IP、国家（Country）、城市（City）、时区（Timezone）及网络运营商（Org）；
   - 可用于核对住宅代理或商业专线代理的 ASN 归属。
2. **<a href="https://whoer.net" target="_blank" rel="noopener noreferrer">whoer.net</a>**：
   - 综合检测网络伪装状态，核对 DNS 节点归属与系统本地时区是否匹配。
3. **<a href="https://browserleaks.com/webrtc" target="_blank" rel="noopener noreferrer">browserleaks.com/webrtc</a>**：
   - 检测浏览器 WebRTC 接口是否泄漏了本机的真实公网 IP 或局域网 IP。

---

## 方法二：通过命令行执行 cURL 命令（终端环境）

在终端或服务器命令行中，使用 `curl` 命令直观测试代理握手：

### 1. 测试静态独享代理：
```bash
curl -x http://代理用户名:代理密码@us-ca.edge.joyproxy.com:10001 https://ipinfo.io
```

### 2. 测试动态代理：
```bash
curl -x http://生成的长用户名:代理密码@gate.joyproxy.com:9001 https://ipinfo.io
```

若返回包含出口 IP 与国家信息的 JSON 数据，证明代理链路与身份鉴权完全正常。

---

## 方法三：使用 Proxy Tester 工具测试

若需要批量检测多条代理线路：
1. 打开 Windows 桌面端工具 **Proxy Tester**；
2. 将代理地址列表粘贴至输入框中；
3. 点击 **Start Test**，工具将多线程测试连接延迟、响应状态并展示测得的公网出口 IP。

---

## 常见连接异常排查

- **无法连接到代理服务器 / 连接超时**：
  - 请核对代理主机名与端口是否正确；
  - **重要**：静态代理必须填 Entry Point 接入域名，切勿填 Dedicated Exit IP。
- **返回 HTTP 407 Proxy Authentication Required**：
  - 代理鉴权失败。若使用动态代理，必须使用在控制台「账密与白名单」中设置的代理密码及系统生成的长用户名；若使用静态或自定义独享代理，请确认账密无误或当前公网 IP 已正确加入白名单。
