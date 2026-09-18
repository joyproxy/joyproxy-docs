# First request and code (Custom)

Custom clients look like Static: dedicated host and port, whitelist or `USER:PASS`.

```bash
curl -x http://USER:PASS@HOST:PORT https://api.ipify.org
```

Python (replace placeholders):

```python
import requests

PROXY = "http://user:pass@HOST:PORT"
proxies = {"http": PROXY, "https": PROXY}
print(requests.get("https://api.ipify.org", proxies=proxies, timeout=30).text)
```

More languages: copy the [Static code examples](../static/code-examples.md) and swap in the Custom host:port from Endpoints.

OS / browser: [Static clients](../static/clients.md) — same forms, different host:port.

## Chapter index

[Custom proxy](README.md) · [Protocols](protocols.md) · [Response codes](response-codes.md)
