# 动态代理 · 快速开始

本指南用最简单直观的步骤，带你从购买流量到完成第一次动态代理连接。

> **什么是动态代理？**  
> 动态代理按流量（GB）计费，所有请求统一连接网关 `gate.joyproxy.com:9001`。出口 IP 可随每次请求自动更换，也可按需保持 1–30 分钟。

---

## 第一步：购买动态代理流量

1. 登录 [JoyProxy 控制台](https://www.joyproxy.com/admin-overview.html)，进入 **[购买代理](https://www.joyproxy.com/admin-purchase.html)**。
2. 根据业务选择网络类型：
   - **动态住宅**：适合数据采集、社媒运营、电商比价（高隐蔽、性价比高）。
   - **动态移动**：适合 App 测试、移动广告校验（真机 4G/5G IP，免封率极高）。
   - **动态商业 / ISP**：适合 B2B 门户与长效连接。
3. 选择需要的流量包（如 5 GB、10 GB 等），完成支付。

---

## 第二步：设置代理账号与密码

*注意：代理连接密码与网站登录密码是分开的。*

1. 进入 **[用户与白名单](https://www.joyproxy.com/admin-authorization.html)** 页面。
2. 在 **Username/Password** 下新建一组代理账号（如 `user123` / `pass123`）。
3. 记下设置的**代理密码**。

---

## 第三步：生成连接端点

1. 进入 **[提取](https://www.joyproxy.com/admin-ip-extraction-center.html)** 页面，切到 **动态代理（Rotating Proxies）** 页签。
2. 选择提取参数：
   - **Country（国家/地区）**：选择需要的出口 IP 目标国家（如美国 US）。
   - **Session type（会话类型）**：
     - **Rotating session（每次换 IP）**：每次请求使用全新 IP。
     - **Sticky session（粘性会话）**：固定使用同一个 IP 1–30 分钟。
3. 点击 **Generate now（立即生成）**，复制生成的连接地址。

标准连接格式：
```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

> **注意**：`GENERATED_USER` 是包含了地域与会话参数的长字符串，必须整段复制，请勿修改。

---

## 第四步：测试代理连接

把 `GENERATED_USER` 替换为生成的长用户名，`YOUR_PASS` 替换为第二步设置的代理密码，运行测试命令：

{% tabs %}
{% tab title="cURL" %}
```bash
curl -x http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```
{% endtab %}

{% tab title="Python" %}
```python
import requests

proxy = "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001"
res = requests.get("https://api.ipify.org", proxies={"http": proxy, "https": proxy}, timeout=15)
print("代理出口 IP:", res.text)
```
{% endtab %}

{% tab title="Node.js" %}
```javascript
const { HttpsProxyAgent } = require("https-proxy-agent");

const agent = new HttpsProxyAgent("http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001");
const res = await fetch("https://api.ipify.org", { agent });
console.log("代理出口 IP:", await res.text());
```
{% endtab %}
{% endtabs %}

如果返回的公网 IP 与你本地网络不同，说明动态代理已成功通畅！

---

## 3 秒排查常见问题

- **407 Proxy Authentication Required**：检查密码是否填错（必须填「用户与白名单」里设的密码，而非官网登录密码），用户名必须是生成的完整长字符串。
- **连接超时**：确认网关主机为 `gate.joyproxy.com`，端口为 `9001`。
- **更换国家**：去 [提取](https://www.joyproxy.com/admin-ip-extraction-center.html) 页面重新选择国家并生成新用户名即可。
