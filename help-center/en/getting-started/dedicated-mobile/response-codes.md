# Response Codes and Troubleshooting

| Symptom / Status Code | Likely Cause | Resolution |
| :--- | :--- | :--- |
| **`407 Proxy Authentication Required`** | Incorrect username/password or trailing spaces | Re-copy credentials from **My Dedicated Mobile Proxies**; credentials are case-sensitive |
| **Timeout / `502` / `504`** | On-demand IP switch in progress (5–15s) or wrong protocol port | Wait 15 seconds and retry; verify HTTP port vs SOCKS5 port |
| **Switch API `429`** | 45-second cooldown between switches | Wait at least 45 seconds before triggering another IP switch |
| **Status `Expired`** | Rental term has ended | Check expiry timestamp in console and place a new order or renew in advance |
| **Public sites work, target site blocks** | Target account risk control, stale cookies, or fingerprint mismatch | Clear browser profile cache/cookies or trigger an on-demand IP switch |

If standard public sites (e.g. `https://ipinfo.io/json`) remain unreachable for more than 5 minutes, click **Support Ticket** on that order row with your test log so ops can investigate or replace the port.
