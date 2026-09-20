# Playwright and Puppeteer proxy integration

In Playwright and Puppeteer you can pass an authenticated proxy in the launch config.

---

## 1. Playwright (Python)

```python
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        proxy_config = {
            "server": "http://us-ca.edge.joyproxy.com:10001",
            "username": "your_username",
            "password": "your_password"
        }
        browser = p.chromium.launch(headless=False, proxy=proxy_config)
        page = browser.new_page()
        page.goto("https://ipinfo.io")
        print("Page title:", page.title())
        browser.close()

if __name__ == "__main__":
    run()
```

---

## 2. Puppeteer (Node.js)

```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--proxy-server=http://us-ca.edge.joyproxy.com:10001']
  });
  const page = await browser.newPage();
  await page.authenticate({
    username: 'your_username',
    password: 'your_password'
  });
  await page.goto('https://ipinfo.io');
  await browser.close();
})();
```
