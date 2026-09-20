# Query balance, create orders, and auto-renew via API

In automation or your own ops system, REST APIs can query balance, place proxy orders, and renew Static Proxies.

These account APIs require the **Master User Token**.

---

## Prerequisite: Master User Token

- **Use**: account-level APIs only (balance, orders, renew);
- **Where**: sign in, open **My Account**, and copy it;
- **Header**: `Authorization: Bearer <Master_User_Token>`.

---

## 1. Query balance (GET /v2/balance)

```python
import requests

MASTER_TOKEN = "YOUR_MASTER_USER_TOKEN"
headers = {
    "Authorization": f"Bearer {MASTER_TOKEN}",
    "Content-Type": "application/json"
}

response = requests.get("https://api.joyproxy.com/v2/balance", headers=headers)
data = response.json()

if data.get("code") == 200:
    balance = data["data"]["balance"]
    print(f"Available Balance: ${balance}")
```

---

## 2. Create an order with balance (POST /v2/orders/create)

```python
import requests

payload = {
    "product_id": "lt-monthly",          # long-term plan
    "type": "long-term",                  # Static Proxies
    "network_type": "residential",        # Residential
    "quantity": 1,                        # 1 IP
    "payment_method": "balance",          # Balance
    "purchase_geo": {
        "allocations": [
            {"country_iso": "US", "qty": 1} # 1 US IP
        ]
    }
}

response = requests.post("https://api.joyproxy.com/v2/orders/create", headers=headers, json=payload)
print(response.json())
```

---

## 3. Renew a static order (POST /v2/orders/renew)

```python
import requests

renew_payload = {
    "order_id": 12345,                    # order ID to renew
    "renew_product_id": "lt-monthly"      # renew plan SKU
}

response = requests.post("https://api.joyproxy.com/v2/orders/renew", headers=headers, json=renew_payload)
print(response.json())
```
