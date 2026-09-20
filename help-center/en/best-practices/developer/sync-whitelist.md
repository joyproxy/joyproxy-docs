# Sync IP whitelist via API

On autoscaling hosts, the public IP can change. Call the whitelist API at deploy or boot so the current public IP is added to **IP Whitelist**.

Whitelist APIs use the **API token** from Endpoint generator.

---

## Example script (Python)

```python
import requests

API_TOKEN = "YOUR_API_TOKEN"
headers = {
    "Authorization": f"Bearer {API_TOKEN}",
    "Content-Type": "application/json"
}

# 1. Current machine public IP
try:
    public_ip = requests.get("https://api.ipify.org", timeout=5).text.strip()
    print(f"Public IP: {public_ip}")
except Exception as e:
    raise SystemExit(f"Failed to get public IP: {e}")

# 2. Add to whitelist (POST /v2/whitelist/add)
payload = {
    "ip": public_ip,
    "remark": "server-node-01"
}

response = requests.post("https://api.joyproxy.com/v2/whitelist/add", headers=headers, json=payload)
print("Add whitelist response:", response.json())

# 3. Remove on shutdown (POST /v2/whitelist/remove)
# requests.post("https://api.joyproxy.com/v2/whitelist/remove", headers=headers, json={"ip": public_ip})
```
