# Idle sign-out time

On shared networks, busy offices, or borrowed devices, leaving the console open without Logout puts Available Balance and proxy settings at risk of misuse.

JoyProxy lets you set **Idle sign-out time**.

<a href="https://www.joyproxy.com/admin-settings.html" target="_blank" rel="noopener noreferrer">Open Security & API</a>

---

## Steps

1. In the left sidebar, click **My Account**.
2. Open the **Security & API** tab.
3. Find the **Idle sign-out time** card.
4. Choose how long the session may stay idle:
   - **1 hour** / **3 hours** / **6 hours** / **12 hours**: better for high-security or public devices;
   - **24 hours (default)**: a personal workstation, balancing safety and convenience;
   - **1 day** / **3 days** / **5 days** / **7 days**: long-running monitors or ops dashboards.
5. The choice is saved automatically. The toast reads **Saved. Your session has been refreshed.**

---

## Timer behavior

- **Reset**: Idle means no activity. Clicks, navigation, refresh, or background API calls from the console restart the timer.
- **When it fires**: After the idle limit, the session is invalidated. The next click sends you to Log In. Proxy configuration already in production is not deleted; sign in again with password or OAuth to continue.
