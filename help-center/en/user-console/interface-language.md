# Language

The JoyProxy console is localized. You can switch the display language to match how your team works.

---

## How to switch Language

There are two entry points:

### Option 1: My Account (saved on the user)
1. Open **My Account** in the left sidebar.
2. On the **Profile** tab, find the **Language** dropdown.
3. Choose a language (for example **简体中文**, **English**, **繁體中文**).
4. The preference is saved and the console copy refreshes immediately.

### Option 2: Sidebar footer (quick switch)
At the bottom of the left sidebar (and on the desktop top bar), **Language** stays visible. Click it and pick a language for an instant switch.

---

## What Language affects

To avoid confusion for API users, the boundary is:

- **Translated**: left sidebar, network-console tabs, button labels, form help text, and success/error toasts.
- **Not translated**:
  - **Proxy credentials**: Username strings from **Endpoint generator** (for example `country-us_session-xxxx`) are protocol instructions and are **never** localized;
  - **API payloads**: OpenAPI and Web Scraping API JSON field names stay English;
  - **Help Center**: Help Center articles follow the documentation language you opened. They do not follow the console **Language** setting.
