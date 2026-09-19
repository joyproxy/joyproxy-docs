# 通过 API 查询余额、创建订单与自动续费

在自动化运维或业务系统中，可通过 RESTful API 直接完成账户余额查询、自动下单购买代理以及静态线路自动续费等操作。

调用此类账户管理接口需要使用 **主用户 Token（Master User Token）**。

---

## 前置准备：Master User Token

- **作用**：专用于账户级管理接口（余额、订单、续费）；
- **获取**：登录控制台，在「我的账户」页面复制；
- **请求头**：携带 `Authorization: Bearer <Master_User_Token>`。

---

## 一、查询账户余额（GET /v2/balance）

```python
import requests

MASTER_TOKEN = "你的_Master_User_Token"
headers = {
    "Authorization": f"Bearer {MASTER_TOKEN}",
    "Content-Type": "application/json"
}

response = requests.get("https://api.joyproxy.com/v2/balance", headers=headers)
data = response.json()

if data.get("code") == 200:
    balance = data["data"]["balance"]
    print(f"当前账户可用余额: ${balance}")
```

---

## 二、使用余额创建订单（POST /v2/orders/create）

```python
import requests

payload = {
    "product_id": "lt-monthly",          # 长期套餐
    "type": "long-term",                  # 静态代理
    "network_type": "residential",        # 住宅网络
    "quantity": 1,                        # 1 个 IP
    "payment_method": "balance",          # 余额支付
    "purchase_geo": {
        "allocations": [
            {"country_iso": "US", "qty": 1} # 1 个美国 IP
        ]
    }
}

response = requests.post("https://api.joyproxy.com/v2/orders/create", headers=headers, json=payload)
print(response.json())
```

---

## 三、静态订单续费（POST /v2/orders/renew）

```python
import requests

renew_payload = {
    "order_id": 12345,                    # 待续费订单 ID
    "renew_product_id": "lt-monthly"      # 续费套餐规格
}

response = requests.post("https://api.joyproxy.com/v2/orders/renew", headers=headers, json=renew_payload)
print(response.json())
```
