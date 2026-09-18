# Make your first Static request

Replace `HOST`, `PORT`, `USER`, and `PASS` with values from Endpoints (omit user/pass if this machine is whitelisted).

```bash
curl -x http://USER:PASS@HOST:PORT https://api.ipify.org
```

Python:

```python
import requests

PROXY = "http://USER:PASS@HOST:PORT"
proxies = {"http": PROXY, "https": PROXY}
print(requests.get("https://api.ipify.org", proxies=proxies, timeout=30).text)
```

Confirm the printed IP matches the region you purchased. If geo is wrong, check the **order’s country**, not the proxy host string.

## Common fixes

| Symptom | What to check |
| --- | --- |
| Auth error | Credential username/password; or whitelist the **public** IP of this machine |
| Connection refused / timeout | Host and port from the **latest** generate; order still active |
| Works on VPS, fails at home | Home IP is not on the whitelist—add it or switch to user/pass |

## Next

[Code examples](code-examples.md) · [New IP](refresh-ip.md)
