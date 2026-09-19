# 怎么检查代理到底有没有生效、出口 IP 是哪里

在电脑、手机或各类软件中配好代理后，最关键的一步是验证：**代理到底有没有连通？对外呈现的真实 IP 属地是哪里？会不会发生真实的本地 IP 泄漏？**

本文提供几种最简单、最权威的检查方法，帮助你 30 秒内完成确认。

---

## 方法一：打开权威 IP 侦测网站（最直观）

在配置好代理的浏览器中，直接访问以下任意一个国际公认的 IP 查询网站：

1. **<a href="https://ipinfo.io" target="_blank" rel="noopener noreferrer">ipinfo.io</a>**（推荐）：
   - 页面居中直接显示当前的公网 IP、国家（Country）、城市（City）、时区（Timezone）以及运营商网络 ASN（Org）；
   - 如果是住宅代理，ASN 通常会显示为 Comcast、AT&T、Verizon 等当地知名宽带运营商；如果是数据中心代理，会显示为机房云厂商。
2. **<a href="https://whoer.net" target="_blank" rel="noopener noreferrer">whoer.net</a>**（防关联深度检测）：
   - 除了显示出口 IP 外，还会给出一个 **伪装度评分（Disguise Score）**；
   - 检查 DNS 是否与代理国家一致、系统时区是否与代理所在时区相差过大、语言设置是否匹配。
3. **<a href="https://browserleaks.com/webrtc" target="_blank" rel="noopener noreferrer">browserleaks.com/webrtc</a>**（WebRTC 泄漏专项检测）：
   - 专门用来测试浏览器是否通过 WebRTC 协议泄漏了你电脑真实的局域网 IP 或真实外网 IP；
   - 如果在「Public IP Address」一栏看到了你未开代理时的原始 IP，说明发生了 WebRTC 泄漏，需在浏览器中关闭 WebRTC 或使用指纹浏览器环境。

---

## 方法二：通过命令行执行 cURL 测试（程序员首选）

如果你在没有图形界面的 Linux 服务器、或者习惯在终端中操作，可以使用 `curl` 命令直接测试：

### 1. 测试静态独享代理：
```bash
curl -x http://代理用户名:代理密码@us-ca.edge.joyproxy.com:10001 https://ipinfo.io
```

### 2. 测试动态代理：
```bash
curl -x http://提取的长用户名:代理密码@gate.joyproxy.com:9001 https://ipinfo.io
```

如果终端返回了一串包含 `ip`、`city`、`country` 的 JSON 数据，说明代理链路完全畅通，代理已百分之百生效。

---

## 方法三：使用官方 Proxy Tester 工具批量检测

如果你提取了一批代理，或者不想每次都去打开浏览器网页：
1. 下载并打开 Windows 版免费开源工具 **Proxy Tester**；
2. 将代理地址批量粘贴到工具输入框中；
3. 点击 **开始测试（Start Test）**；
4. 工具会自动多线程探测每个节点的 TCP/UDP 连通性、建连延迟，并高亮展示解析出来的出口公网 IP 和国家城市。

---

## 检查时常见异常排查清单

- **问题 1：打开网页依然显示我本机的真实 IP？**  
  说明代理没有真正被浏览器启用。例如：在 Windows 系统设置了代理但没有勾选保存、或者在浏览器扩展中未点击「Apply」应用；
- **问题 2：网页显示「无法连接到代理服务器 / 连接被拒绝」？**  
  检查填写的域名和端口是否正确。特别注意：**静态独享线路必须填 Entry Point（接入域名+端口），绝对不能填写 Dedicated Exit IP**；
- **问题 3：网页弹出要求输入用户名密码的弹窗（或返回 407）？**  
  说明代理账密输入有误。注意填写的密码是 JoyProxy 控制台「用户与白名单」里创建的代理密码，不是你的官网登录密码。
