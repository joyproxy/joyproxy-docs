# Refresh the browser environment after a new exit IP

On Static Proxies, **Change IP** / **New IP** in the console assigns a new dedicated exit IP in the same region.

JoyProxy splits **Entry Point** from Dedicated Exit IP, so **the hostname, port, and Username/Password in the fingerprint browser stay the same. You do not recreate the profile**.

---

## Four-step refresh

1. **Close the running browser**: stop the fingerprint profile first;
2. **Change IP in the console**: sign in, open **My Proxies**, find the line, and click **Change IP**;
3. **Retest in the fingerprint browser**: open that profile’s proxy panel and click **Check proxy** / **Test connection**. The app handshakes again and updates the measured exit IP and timezone;
4. **Restart the profile**: cookies, bookmarks, and profile data stay. The network now uses the new exit IP.
