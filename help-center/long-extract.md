# Generate static proxy endpoints

Get stable long-term endpoints from the dashboard or API.

## Web generator

- Open [Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html)
- Select **Static Proxies → Web generator**
- Filter by order / allocation → **Generate now**

## API

```
GET https://api.joyproxy.com/v1/extract-long?token=TOKEN&allocation_id=ID&format=crlf
```
