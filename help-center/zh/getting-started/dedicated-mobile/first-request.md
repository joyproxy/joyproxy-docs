# 发起代理请求

端口状态为 **运行中** 后，即可通过命令行、代码或客户端发起代理请求。以下示例中的 `HOST`、`HTTP_PORT`、`SOCKS5_PORT`、`USERNAME`、`PASSWORD` 请替换为控制台中的实际值。

## 1. 使用 cURL 测试（HTTP / SOCKS5）

**HTTP 代理测试：**

```bash
curl -x "http://USERNAME:PASSWORD@HOST:HTTP_PORT" https://ipinfo.io/json
```

**SOCKS5 代理测试（`socks5h` 确保 DNS 也在远端解析）：**

```bash
curl -x "socks5h://USERNAME:PASSWORD@HOST:SOCKS5_PORT" https://ipinfo.io/json
```

正常响应将返回目标国家与运营商（如 `AT&T`、`Verizon`、`T-Mobile` 等）的真实移动公网 IP 信息。

## 2. Python (`requests`) 示例

```python
import requests

proxies = {
    "http": "http://USERNAME:PASSWORD@HOST:HTTP_PORT",
    "https": "http://USERNAME:PASSWORD@HOST:HTTP_PORT",
}

resp = requests.get("https://ipinfo.io/json", proxies=proxies, timeout=20)
print(resp.status_code, resp.json())
```

## 3. 指纹浏览器集成

在 AdsPower、比特浏览器（BitBrowser）或 HubStudio 新建环境时：
1. 代理类型选择 **HTTP** 或 **SOCKS5**；
2. 点击控制台 **复制指纹格式** 并粘贴到代理主机输入框，系统会自动拆填主机、端口、账号与密码；
3. 点击「检查代理」，显示目标国家移动 IP 后即可保存并启动环境。
