# 自定义独享代理 · 快速开始（Quick Start）

本指南带你快速完成自定义独享代理的端口购买、地区分配、代理认证与连接测试。

> **什么是自定义独享代理？**  
> 按专属端口数量计费，每个端口 100% 由你独享。购买后，你可以随时在控制台中为每一个端口独立指定目标国家/城市，并支持设置定时自动更换出口 IP。

---

## 第一步：购买自定义端口

1. 登录 <a href="https://www.joyproxy.com/admin-overview.html" target="_blank" rel="noopener noreferrer">JoyProxy 控制台</a>，点击左侧菜单 **<a href="https://www.joyproxy.com/admin-purchase.html" target="_blank" rel="noopener noreferrer">购买代理（Purchase Proxies）</a>**。
2. 选择需要的 IP 来源网络：
   - **住宅代理（Residential Proxies）**：真实家庭宽带 IP，信任度极高。
   - **商业 / ISP 代理（Business / ISP Proxies）**：运营商商业专线，兼具高速率与高信任度。
   - **数据中心代理（Datacenter Proxies）**：托管机房 IP，超高性价比与低延迟。
3. 切换到 **自定义独享代理（Custom Dedicated Proxies）** 标签页。
4. 选择套餐时长（如 **月套餐 Monthly Plan**），在 **端口数量（Ports count）** 中输入购买数量（如 5 个端口）。
5. 在 **预分配地区（Pre-assign Location）** 中可先指定部分端口国家，或选择 **购后再分配（Assign Later）**。
6. 选择支付方式完成结算。

---

## 第二步：为端口分配地区

1. 进入 **<a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">已购代理（My Proxies）</a>** 页面。
2. 在列表找到刚才购买的自定义代理端口。
3. 点击端口右侧的 **分配地区（Assign Region）** 按钮。
4. 在弹出的地区选择器中，选择目标国家/地区（例如 `United States 美国`），点击保存。
5. 系统将在数秒内将该端口的出口 IP 绑定到对应国家。

---

## 第三步：设置代理账密并提取端点

1. 进入 **<a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">账密与白名单（Users &amp; Whitelist）</a>** 页面，在 **用户名 / 密码（Username/Password）** 下新建代理账密（如 Username: `user123`，Password: `pass123`）。
2. 进入 **<a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">提取（Endpoint Generator）</a>** 页面，切换到 **自定义代理（Custom Proxies）** 标签。
3. 选择协议（`HTTP` 或 `SOCKS5`），点击 **复制地址列表（Copy Host List）**，获取端口专属端点：
   ```text
   http://user123:pass123@us-ca.edge.joyproxy.com:20001
   ```

---

## 第四步：测试代理连接

将上一步提取到的真实 `host:port` 和代理账密代入测试代码：

### cURL
```bash
curl -x http://user123:pass123@us-ca.edge.joyproxy.com:20001 https://api.ipify.org
```

### Python
```python
import requests

proxy_url = "http://user123:pass123@us-ca.edge.joyproxy.com:20001"
proxies = {
    "http": proxy_url,
    "https": proxy_url,
}

response = requests.get("https://api.ipify.org", proxies=proxies, timeout=15)
print("当前自定义端口出口 IP:", response.text)
```

### Node.js
```javascript
const { HttpsProxyAgent } = require('https-proxy-agent');

const proxyUrl = 'http://user123:pass123@us-ca.edge.joyproxy.com:20001';
const agent = new HttpsProxyAgent(proxyUrl);

async function testProxy() {
  const res = await fetch('https://api.ipify.org', { agent });
  const ip = await res.text();
  console.log('当前自定义端口出口 IP:', ip);
}

testProxy();
```

能够成功返回出口 IP 即代表连接成功！

---

## 3 秒排查常见报错

- **407 代理认证失败（Proxy Authentication Required）**：检查用户名和密码是否填错（必须填在「用户与白名单」里设定的 Username/Password）；若采用白名单模式，检查本机公网 IPv4 是否已添加。
- **403 目标拒绝访问（Forbidden）**：目标网站防护封禁了当前出口 IP。可在控制台中点击 **<a href="rotation-and-refresh.md" target="_blank" rel="noopener noreferrer">更换 IP（Refresh IP）</a>** 刷新出口。
- **502 / 504 连接超时（Gateway Timeout）**：检查端口是否已在 **<a href="view-ports.md" target="_blank" rel="noopener noreferrer">我的代理</a>** 中完成 [分配地区]。未分配地区的端口无法建立连接。
