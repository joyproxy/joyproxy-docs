# Playwright / Puppeteer 自动化测试怎么挂代理

在现代前端自动化测试、逆向爬虫以及需要模拟真实用户操作的场景中，微软的 **Playwright** 和 Google 的 **Puppeteer** 是最主流的两大无头浏览器引擎。

然而，这两款工具在挂载代理时最容易让新手踩坑的地方是：**遇到需要输入用户名密码的代理时，会因为无法自动处理 407 认证弹窗而导致页面白屏超时**。

本文分别提供 Playwright 和 Puppeteer 挂载 JoyProxy 代理的最佳实践代码。

---

## 方案一：Playwright 挂载代理标准实操（推荐）

Playwright 原生设计了非常优雅的 `proxy` 参数，并且支持在启动浏览器时直接传入 `username` 和 `password`，全自动在底层握手时完成身份验证。

### Python 代码示例：
```python
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        # 配置 JoyProxy 代理参数（以静态独享线路为例）
        proxy_config = {
            "server": "http://us-ca.edge.joyproxy.com:10001",
            "username": "your_proxy_user",      # 若已加白名单，可省略 username 和 password
            "password": "your_proxy_password"
        }

        # 启动 Chromium 浏览器并挂载代理
        browser = p.chromium.launch(headless=False, proxy=proxy_config)
        
        # 创建独立上下文并测试
        page = browser.new_page()
        page.goto("https://ipinfo.io")
        
        print("页面标题:", page.title())
        page.screenshot(path="proxy_success.png")
        
        browser.close()

if __name__ == "__main__":
    run()
```

### Node.js 代码示例：
```javascript
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,
    proxy: {
      server: 'http://us-ca.edge.joyproxy.com:10001',
      username: 'your_proxy_user',
      password: 'your_proxy_password'
    }
  });

  const page = await browser.newPage();
  await page.goto('https://ipinfo.io');
  console.log('成功打开页面！');
  await browser.close();
})();
```

---

## 方案二：Puppeteer 挂载代理实操

Puppeteer 在启动参数中只能通过 `--proxy-server` 传递主机和端口，账密必须通过 `page.authenticate()` 单独注入：

### Node.js 代码示例：
```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      '--proxy-server=http://us-ca.edge.joyproxy.com:10001',
      '--no-sandbox'
    ]
  });

  const page = await browser.newPage();

  // 关键步骤：为页面注入代理认证凭证
  await page.authenticate({
    username: 'your_proxy_user',
    password: 'your_proxy_password'
  });

  await page.goto('https://ipinfo.io', { waitUntil: 'networkidle2' });
  console.log('Puppeteer 代理加载成功！');
  await browser.close();
})();
```

---

## 防指纹泄漏核心建议

在无头浏览器中跑业务时，建议配合以下启动参数避免被目标网站识破：
1. 传入 `--disable-blink-features=AutomationControlled`，隐藏 `navigator.webdriver` 自动化标识；
2. 确保页面时区与代理 IP 所在的地理时区保持一致。
