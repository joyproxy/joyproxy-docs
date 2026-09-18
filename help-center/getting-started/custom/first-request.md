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

More languages: copy the <a href="../static/code-examples.md" target="_blank" rel="noopener noreferrer">Static code examples</a> and swap in the Custom host:port from Endpoints.

OS / browser: <a href="../static/clients.md" target="_blank" rel="noopener noreferrer">Static clients</a> — same forms, different host:port.

## Chapter index

<a href="README.md" target="_blank" rel="noopener noreferrer">Custom proxy</a> · <a href="protocols.md" target="_blank" rel="noopener noreferrer">Protocols</a> · <a href="response-codes.md" target="_blank" rel="noopener noreferrer">Response codes</a>
