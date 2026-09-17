# Generate custom proxy endpoints

Generate host:port for each custom allocation (stable until rotation).

- [Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html)
- **Custom Proxies → Web generator**
- Pick allocation / order → Generate now

## API

```
GET https://api.joyproxy.com/v1/extract-custom?token=TOKEN&allocation_id=ID&format=crlf
```
