# 快速开始

定制端口是付款后配置的**独享 `host:port`**：先分配地区，可选定时轮换，再像静态一样生成端点。

端口已分配好？跳到 [发测试请求](#发测试请求)。

下单即锁定国家？见 <a href="../static/quick-start.md" target="_blank" rel="noopener noreferrer">静态快速开始</a>。共享网关见 <a href="../rotating/quick-start.md" target="_blank" rel="noopener noreferrer">轮换快速开始</a>。

## 连接参数

| 字段 | 取值 |
| --- | --- |
| Host / port | 分配地区后在端点生成页获取 |
| 认证 | IP 白名单 **和/或** 短用户名 + 密码 |
| 地域 | 在「我的代理」<a href="assign-region.md" target="_blank" rel="noopener noreferrer">分配地区</a> |

连生成的 host:port，不要连订单上的 Exit IP。

## 发测试请求

替换 `USER`、`PASS`、`HOST`、`PORT`。白名单机器可省略 `USER:PASS@`。

```bash
curl -x http://USER:PASS@HOST:PORT https://api.ipify.org
```

```python
import requests

PROXY = "http://USER:PASS@HOST:PORT"
proxies = {"http": PROXY, "https": PROXY}
print(requests.get("https://api.ipify.org", proxies=proxies, timeout=30).text)
```

更多语言：复制 <a href="../static/code-examples.md" target="_blank" rel="noopener noreferrer">静态代码示例</a>，换成定制的 host:port。

## 控制台配置

> **提示**
>
> 新账户可领 **$5 注册赠金**，首单可用。

### 1. 购买端口

1. <a href="https://www.joyproxy.com/admin-purchase.html?tab=custom-ip" target="_blank" rel="noopener noreferrer">购买 → 定制</a>。
2. 选网络类型。
3. 选有效期、端口数量并付款。
4. 在 <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">我的代理 → Custom</a> 查看。

详见 <a href="purchase.md" target="_blank" rel="noopener noreferrer">购买端口</a>。

### 2. 分配地区

生成端点**之前**先选国家（有则选省/市）。轮换出的 IP 不会跑出你分配的地域。

详见 <a href="assign-region.md" target="_blank" rel="noopener noreferrer">分配地区</a>。

### 3. 设置轮换（可选）

可长期固定出口，也可设定时器按间隔换 IP。

详见 <a href="rotation.md" target="_blank" rel="noopener noreferrer">设置轮换</a>。

### 4. 授权并生成

1. 在 <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">用户与白名单</a> 建 Username/Password（也可用 IP 白名单）。
2. <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成</a> → **Custom Proxies → Web generator**。
3. 选分配 → **Generate now** → 复制 host、port。

详见 <a href="authorize-and-generate.md" target="_blank" rel="noopener noreferrer">授权与生成</a>。

### 5. 确认出口

跑上面的 curl，看到公网 IP 落在分配地区即可使用。

## 接下来

| 任务 | 页面 |
| --- | --- |
| 自动续费 | <a href="auto-renew.md" target="_blank" rel="noopener noreferrer">自动续费</a> |
| 更换 IP | <a href="new-ip.md" target="_blank" rel="noopener noreferrer">更换 IP</a> |
| 首次请求 | <a href="first-request.md" target="_blank" rel="noopener noreferrer">首次请求与代码</a> |
| 协议 | <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a> |
| 407 / 403 | <a href="response-codes.md" target="_blank" rel="noopener noreferrer">响应码</a> |
| 认证说明 | <a href="../rotating/authentication.md" target="_blank" rel="noopener noreferrer">认证方式</a> |
