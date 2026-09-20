# Rotation interval and changing the exit IP

Custom Proxies support two ways to change IPs. Pick **scheduled rotation** or **New IP** (immediate) depending on how you avoid blocks.

---

## 1. Set a Rotation interval

If the port should replace its exit IP on a schedule (so one address does not hit the target too often), turn on rotation:

1. Open **<a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies</a>**.
2. Find the port and click **Rotation**.
3. In the **Rotation interval** dialog:
   - Set the interval. Examples: **5 min (300 seconds)**, **10 min (600 seconds)**, **30 min (1800 seconds)**, **1 hour (3600 seconds)**, or a custom number of seconds (rules: `0` turns rotation **Off**; any other value must be **at least 300 seconds** and a **multiple of 60**).
4. Save to apply.

After it is on, JoyProxy assigns a new exit IP when the timer fires (country and city stay the same). The `host:port` in your client does not change.

---

## 2. Replace the exit IP immediately (New IP)

If you are debugging or a target just blocked the current exit, do not wait for the timer — replace the IP now:

1. Open **<a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies</a>**.
2. Click **New IP** on the port.
3. Confirm in the dialog.
4. Within about 1–2 minutes, the port gets a new exit IP.

> **Note**  
> - **Same connection string**: New IP does not require changes to `host:port` or your Username/Password.  
> - **Cooldown**: There is usually a 1–3 minute cooldown between two New IP actions on the same port.

---

## Rotating Proxies vs Custom port rotation

- **Rotating Proxies**: billed by GB. Each request hits a shared gateway and is routed to a pooled IP, or you keep a sticky session via username parameters.
- **Custom Proxies**: billed by port and duration. The port is yours. You set the country and the Rotation interval in the console.
