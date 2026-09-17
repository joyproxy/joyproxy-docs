# Generate rotating proxy endpoints

Rotating uses a shared gateway. Host and port are always `gate.joyproxy.com:9001`. Country, city, and session go in the username.

## Web generator

- Open [Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html) or the Endpoints tab on the network console
- Select **Rotating**
- Optionally pick country / state / city
- Choose session type: **Sticky** (1–30 minutes) or rotate every request
- Set count → **Generate** → copy Host, Port, Username, and Password

Use the generated username as-is. The password is the one from Whitelist & Users. The gateway string stays valid while traffic remains; sticky time only controls how long the exit IP holds.

## API

```
GET https://api.joyproxy.com/v2/extract?network_type=residential&count=5&duration=5m&format=json
Authorization: Bearer YOUR_API_TOKEN
```

The response includes `gate.joyproxy.com`, port `9001`, and a wire username. Do not rewrite the username. `/v1/extract` still maps to the same Rotating gateway.

**🔗**Test in [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html).
