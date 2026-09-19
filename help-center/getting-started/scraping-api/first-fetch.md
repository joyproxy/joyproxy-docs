# 在控制台 API 中心测试抓取

JoyProxy 控制台提供了可视化的 **<a href="https://www.joyproxy.com/admin-web-unblocker.html?view=playground" target="_blank" rel="noopener noreferrer">API 中心</a>** 在线测试台。你无需编写代码即可在浏览器中试跑抓取、调试各种高级参数，并一键生成直接可用的多语言代码。

---

## 在控制台 API 中心发起测试

1. 登录控制台，进入 **<a href="https://www.joyproxy.com/admin-web-unblocker.html" target="_blank" rel="noopener noreferrer">网页抓取 API</a>** 控制台。
2. 切换到 **API 中心** 页签（在线试玩 · 测试与集成）。
3. 界面参数配置区（右侧「请求参数」栏）：
   - **目标 URL**：填入你需要抓取的网页地址（如 `https://example.com`）。
   - **render (JS)**：勾选是否开启动态 JavaScript 渲染（开启后相当于 `render=true`）。
   - **super (住宅)**：勾选是否路由至高信任度真实家庭/移动出口（开启后相当于 `super=true`）。
   - **geoCode**：填入指定的代理出口国家代码（如 `us` 美国、`jp` 日本）。
4. 点击右侧操作栏的 **发送请求** 按钮。
5. 查看返回结果：
   - **响应（Response）**：实时预览返回的网页 HTML 或 JSON 数据。
   - **状态码（Status）**：显示目标页面的响应码（如 `200`）。
   - **消耗 Credits（Credits Used）**：实时展示本次抓取实际扣除的积分数。

---

## 一键导出集成示例代码

在控制台页面中，系统根据你在界面上勾选的参数，自动生成了对应调用的多语言代码。你可以直接点击 **复制** 粘贴到你的项目中：

### cURL
```bash
curl -X GET "https://api.joyproxy.com/v1/fetch?token=YOUR_SCRAPING_TOKEN&url=https%3A%2F%2Fexample.com&render=true"
```

### Python (Requests)
```python
import requests

token = "YOUR_SCRAPING_TOKEN"
target_url = "https://example.com"

api_url = "https://api.joyproxy.com/v1/fetch"
params = {
    "token": token,
    "url": target_url,
    "render": "true"
}

response = requests.get(api_url, params=params, timeout=30)
print("HTTP Status:", response.status_code)
print("Response HTML:", response.text[:500])
```

### Node.js (Fetch)
```javascript
const token = 'YOUR_SCRAPING_TOKEN';
const targetUrl = encodeURIComponent('https://example.com');

const apiUrl = `https://api.joyproxy.com/v1/fetch?token=${token}&url=${targetUrl}&render=true`;

async function fetchPage() {
  const res = await fetch(apiUrl);
  const html = await res.text();
  console.log('Response length:', html.length);
}

fetchPage();
```

---

## 💡 RESTful API 文档与在线参数规范

若你需要了解底层的 REST HTTP 路径、POST JSON 结构、请求头传递等原始接口说明：

> 💡 **在线 API 文档**  
> 请参阅控制台顶部的 **<a href="https://www.joyproxy.com/admin-unblocker-documentation.html" target="_blank" rel="noopener noreferrer">网页抓取 API 文档（API Documentation）</a>**，查阅完整的参数字典与响应规范。
