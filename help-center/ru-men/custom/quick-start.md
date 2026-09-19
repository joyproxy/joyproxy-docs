# 自定义独享代理 · 快速开始（Quick Start）

本指南带你快速完成自定义独享代理的端口购买、地区分配、账密配置与连接测试。

> **什么是自定义独享代理？**  
> 自定义独享代理按端口数量计费，每个端口支持随时切换国家地区，并支持设置定时自动更换出口 IP。

---

## 第一步：购买自定义端口

1. 登录 [JoyProxy 控制台](https://www.joyproxy.com/admin-overview.html)，进入 **[购买代理（Purchase Proxies）](https://www.joyproxy.com/admin-purchase.html)**。
2. 选择网络类型：**住宅代理（Residential）** / **商业 / ISP 代理（Business / ISP）** / **数据中心代理（Datacenter）**。
3. 切换到 **自定义独享代理（Custom Dedicated Proxies）** 标签页。
4. 选择端口数量（如 5 个端口）与套餐时长（如月套餐），完成支付。

---

## 第二步：为端口分配地区

1. 进入 **[我的代理（My Proxies）](https://www.joyproxy.com/admin-my-orders.html)** 页面，选择自定义代理区域。
2. 点击 **分配地区（Assign Region）** 按钮。
3. 为对应端口选择目标国家/地区（如美国 US），保存生效。

---

## 第三步：设置代理账密并提取端点

1. 在 **[用户与白名单（Users & Whitelist）](https://www.joyproxy.com/admin-authorization.html)** 中设置代理 Username 与 Password（如 `user123` / `pass123`）。
2. 在 **[提取（Endpoint Generator）](https://www.joyproxy.com/admin-ip-extraction-center.html)** 切换到 **自定义代理（Custom Proxies）** 页签，复制专属端口端点：
   ```text
   http://user123:pass123@us-ca.edge.joyproxy.com:20001
   ```

---

## 第四步：测试代理连接

运行测试命令：

{% tabs %}
{% tab title="cURL" %}
```bash
curl -x http://user123:pass123@us-ca.edge.joyproxy.com:20001 https://api.ipify.org
```
{% endtab %}

{% tab title="Python" %}
```python
import requests

proxy = "http://user123:pass123@us-ca.edge.joyproxy.com:20001"
res = requests.get("https://api.ipify.org", proxies={"http": proxy, "https": proxy}, timeout=15)
print("自定义端口出口 IP:", res.text)
```
{% endtab %}
{% endtabs %}

连通后，你随时可以回到控制台为该端口切换其他国家或设置定时换 IP！
