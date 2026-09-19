# 多台服务器部署时怎么用接口自动加白名单

在分布式数据采集或云端业务中，很多公司会在 AWS、阿里云、腾讯云或自建机房上弹性伸缩成百上千台服务器。这些云主机的公网 IP 可能会随着机器重启、容器漂移或扩容而动态变化。

如果每次服务器变动都需要运维人员人工登录 JoyProxy 网页后台去点「添加白名单」，不仅繁琐，还极易导致线上业务因为未加白而报错。

JoyProxy 提供了自动化的 **白名单管理 API**，配合 **代理提取 API Token（Extract Token）**，可以轻松融入你的 CI/CD 自动部署脚本中。

---

## 自动化架构与流程设计

最标准的做法是在服务器的启动脚本（如 Docker entrypoint 或云主机 user-data）中植入一段自动化命令：
1. **服务器开机启动**：自动向公共服务查询本机的外网 IP；
2. **上报白名单**：调用 JoyProxy API 将该外网 IP 自动追加到白名单中；
3. **机器销毁下线**：在优雅退出（graceful shutdown）时，调用删除接口移除该 IP，释放白名单配额。

---

## 第一步：获取 API Token（提取 Token）

- **注意区分**：白名单接口使用的是 **代理提取 API Token（API Token）**，不要使用 Master Token；
- **获取位置**：在控制台任意代理网络的「提取」页面即可复制；
- **请求头规范**：携带 `Authorization: Bearer <你的_API_Token>`。

---

## 第二步：机器启动时自动添加白名单（/v2/whitelist/add）

以下提供一段即开即用的 Python 生产级自动化上报脚本：

```python
import requests

API_TOKEN = "你的_API_Token"
headers = {
    "Authorization": f"Bearer {API_TOKEN}",
    "Content-Type": "application/json"
}

# 1. 获取当前服务器对外的真实公网 IP
try:
    my_public_ip = requests.get("https://api.ipify.org", timeout=5).text.strip()
    print(f"检测到当前机器公网 IP: {my_public_ip}")
except Exception as e:
    raise SystemExit(f"获取本机公网 IP 失败: {e}")

# 2. 将当前 IP 上报到 JoyProxy 住宅代理的白名单中
payload = {
    "ip": my_public_ip,
    "remark": "k8s-node-worker-01"   # 可选备注标识
}

resp = requests.post("https://api.joyproxy.com/v2/whitelist/add", headers=headers, json=payload)
data = resp.json()

if data.get("code") == 200:
    print(f"成功将 IP {my_public_ip} 加入白名单！所有连接均可免密通行。")
elif "already_exists" in str(data):
    print("该 IP 已在白名单中，无需重复添加。")
else:
    print(f"添加失败: {data.get('error')}")
```

---

## 第三步：查询当前所有白名单列表（/v2/whitelist/list）

如果需要定时审计或清理旧的无效 IP，可以获取白名单全量列表：

```python
resp = requests.get("https://api.joyproxy.com/v2/whitelist/list", headers=headers)
print("当前生效的白名单列表:", resp.json())
```

---

## 第四步：机器缩容时自动移除白名单（/v2/whitelist/remove）

当一台云服务器即将被回收时，触发退出钩子自动删除该 IP，防止占用 10 条白名单配额上限：

```python
del_payload = {"ip": my_public_ip}
requests.post("https://api.joyproxy.com/v2/whitelist/remove", headers=headers, json=del_payload)
print(f"已成功将 IP {my_public_ip} 从白名单中移除。")
```
