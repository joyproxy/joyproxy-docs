# 静态独享代理 · 快速开始（Quick Start）

本指南带你快速完成静态独享代理的购买、认证、提取与连接测试。

> **什么是静态独享代理？**  
> 静态独享代理按线路数量与时间（天/月/年）计费，在有效期内提供专属固定的主机与端口（如 `us-ca.edge.joyproxy.com:10001`），100% 专享独用。

---

## 第一步：购买静态独享线路

1. 登录 <a href="https://www.joyproxy.com/admin-overview.html" target="_blank" rel="noopener noreferrer">JoyProxy 控制台</a>，进入左侧菜单 **<a href="https://www.joyproxy.com/admin-purchase.html" target="_blank" rel="noopener noreferrer">购买代理（Purchase Proxies）</a>**。
2. 选择需要的网络类型：**住宅代理（Residential）** / **商业 / ISP 代理（Business / ISP）** / **数据中心代理（Datacenter）**。
3. 切换到 **静态独享代理（Static Dedicated Proxies）** 标签页。
4. 选择套餐时长（如月套餐 Monthly Plan），在 **选择 IP 地区（Choose IP Locations）** 下选择目标国家/地区并设定购买 IP 数量。
5. 完成支付。

---

## 第二步：设置代理账号密码

1. 进入 **<a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">账密与白名单（Users &amp; Whitelist）</a>** 页面。
2. 在 **用户名 / 密码（Username/Password）** 下新建一组代理账号（如 `user123` / `pass123`）。
3. 记下设置的代理用户名与代理密码。

---

## 第三步：提取固定端点

1. 进入 **<a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">提取（Endpoint Generator）</a>** 页面，切到 **静态代理（Static Proxies）** 页签。
2. 筛选你购买的订单线路，在 **输出格式（Output Format）** 选择展示样式。
3. 点击 **复制地址列表（Copy Host List）**，获取专属端点：
   ```text
   http://user123:pass123@us-ca.edge.joyproxy.com:10001
   ```

---

## 第四步：测试代理连接

将连接地址替换为你提取到的真实 host:port 和代理账密，运行测试：

### cURL
```bash
curl -x http://user123:pass123@us-ca.edge.joyproxy.com:10001 https://api.ipify.org
```

### Python
```python
import requests

proxy = "http://user123:pass123@us-ca.edge.joyproxy.com:10001"
res = requests.get("https://api.ipify.org", proxies={"http": proxy, "https": proxy}, timeout=15)
print("静态独享 IP:", res.text)
```

返回的公网 IP 保持固定，即代表静态独享代理连接成功！

---

## 3 秒排查常见报错

- **407 代理认证失败（Proxy Authentication Required）**：检查密码与用户名是否填错（填写在「账密与白名单」里设定的 Username/Password）。
- **连接超时**：确认 Host 和 Port 是否完全匹配提取页面给出的专有端口。
- **IP 遭到目标封禁**：在 **<a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">已购代理（My Proxies）</a>** 中使用 **更换 IP（Refresh IP）** 刷新替换。
