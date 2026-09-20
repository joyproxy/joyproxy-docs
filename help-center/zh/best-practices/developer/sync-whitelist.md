# 服务器部署时通过 API 自动上报 IP 白名单

在云原生或弹性伸缩环境中，云服务器的公网 IP 可能会动态变化。通过调用白名单管理 API，可以在服务器部署或启动时自动将当前公网 IP 录入白名单。

调用白名单接口需使用 **代理提取 API Token（API Token）**。

---

## 自动化脚本示例（Python）

```python
import requests

API_TOKEN = "你的_API_Token"
headers = {
    "Authorization": f"Bearer {API_TOKEN}",
    "Content-Type": "application/json"
}

# 1. 获取当前机器公网 IP
try:
    public_ip = requests.get("https://api.ipify.org", timeout=5).text.strip()
    print(f"当前机器公网 IP: {public_ip}")
except Exception as e:
    raise SystemExit(f"获取公网 IP 失败: {e}")

# 2. 上报添加至白名单（POST /v2/whitelist/add）
payload = {
    "ip": public_ip,
    "remark": "server-node-01"
}

response = requests.post("https://api.joyproxy.com/v2/whitelist/add", headers=headers, json=payload)
print("添加白名单响应:", response.json())

# 3. 服务器下线时移除白名单（POST /v2/whitelist/remove）
# requests.post("https://api.joyproxy.com/v2/whitelist/remove", headers=headers, json={"ip": public_ip})
```
