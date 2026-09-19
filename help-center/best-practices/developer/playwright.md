# Playwright 与 Puppeteer 自动化代理集成

在 Playwright 与 Puppeteer 自动化测试中，可直接在启动配置中设置带鉴权信息的代理节点。

---

## 一、Playwright（Python）集成示例

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
        print("页面标题:", page.title())
        browser.close()

if __name__ == "__main__":
    run()
```

---

## 二、Puppeteer（Node.js）集成示例

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
