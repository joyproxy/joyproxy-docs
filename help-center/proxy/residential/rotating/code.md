# Integrate Rotating Proxies in Code

Connect to `gate.joyproxy.com:9001` with HTTP/HTTPS/SOCKS5. Paste the generated username as-is. Password comes from Whitelist & Users.

Replace `USER` with the generated Rotating username and `PASS` with your credential password. Rotating cannot omit credentials today (IP whitelist is coming soon).

## Python

```
import requests

PROXY = "http://USER:PASS@gate.joyproxy.com:9001"
proxies = {"http": PROXY, "https": PROXY}
r = requests.get("https://api.ipify.org", proxies=proxies, timeout=30)
print(r.text)
```

## curl

```
curl -x http://USER:PASS@gate.joyproxy.com:9001 https://api.ipify.org
```
