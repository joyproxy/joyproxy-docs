# 怎么用接口查余额、自动买代理和续费订单

在企业级爬虫系统或自动化运维体系中，很多团队希望**全程无需人工登录控制台点击网页**，直接通过编写脚本或定时任务，实现：自动监控账户余额、余额不足时告警、自动下单采购新代理、以及静态线路即将到期时自动续费。

JoyProxy 提供了标准的 RESTful API，配合你的 **主用户 Token（Master User Token）**，可以非常轻巧地实现上述全流程自动化。

---

## 前置准备：获取 Master User Token

- **什么是 Master Token**：这是你账户最高权限的凭证，专用于查询余额、下单购买和续费；
- **获取位置**：登录控制台，进入「我的账户（My Account）」页面即可复制；
- **鉴权方式**：在 HTTP 请求头中携带：
  ```http
  Authorization: Bearer <你的_Master_User_Token>
  Content-Type: application/json
  ```

---

## 第一步：查询账户可用余额（/v2/balance）

你可以写一个定时脚本（例如每天早上 9 点运行），自动查询当前账户余额：

### 请求示例（Python）：
```python
import requests

MASTER_TOKEN = "你的_Master_User_Token"
headers = {
    "Authorization": f"Bearer {MASTER_TOKEN}",
    "Content-Type": "application/json"
}

resp = requests.get("https://api.joyproxy.com/v2/balance", headers=headers)
data = resp.json()

if data.get("code") == 200:
    balance = data["data"]["balance"]
    print(f"当前账户可用余额: ${balance}")
    if float(balance) < 20.0:
        print("【警告】账户余额不足 $20，请及时充值！")
else:
    print(f"查询失败: {data.get('error')}")
```

---

## 第二步：使用账户余额自动下单购买（/v2/orders/create）

当系统发现需要更多代理资源时，直接调用创建订单接口，系统会**全自动从你的账户余额中免密扣款并瞬间开通**：

### 场景示例：自动购买 2 个月的静态独享住宅代理
```python
import requests

payload = {
    "product_id": "lt-monthly",          # 长期月套餐
    "type": "long-term",                  # 静态代理
    "network_type": "residential",        # 住宅网络
    "quantity": 1,                        # 购买数量 1 个 IP
    "payment_method": "balance",          # 使用账户余额结算
    "purchase_geo": {
        "allocations": [
            {"country_iso": "US", "qty": 1} # 分配 1 个美国 IP
        ]
    }
}

resp = requests.post("https://api.joyproxy.com/v2/orders/create", headers=headers, json=payload)
result = resp.json()

if result.get("code") == 200:
    order_id = result["data"]["order_id"]
    print(f"购买成功！生成订单号: {order_id}，已即时开通。")
```

---

## 第三步：订单自动续费（/v2/orders/renew）

对于正在运行店铺或养号的固定静态线路，你可以在程序中检测到期时间，并在到期前调用续费接口延长周期：

```python
import requests

renew_payload = {
    "order_id": 12345,                    # 需要续费的旧订单编号
    "renew_product_id": "lt-monthly"      # 续费套餐规格（按月续费）
}

resp = requests.post("https://api.joyproxy.com/v2/orders/renew", headers=headers, json=renew_payload)
res = resp.json()

if res.get("code") == 200:
    print(f"订单 12345 续费成功，有效期已顺延！")
```

---

## 最佳安全建议

1. **绝对不要把 Master Token 提交到公开的 GitHub 代码库中**，建议保存在服务器的环境变量中读取；
2. Master Token 仅供你内部受信任的核心服务器调用，**绝不要**把它当成代理提取 API Token 分发给普通的爬虫节点。
