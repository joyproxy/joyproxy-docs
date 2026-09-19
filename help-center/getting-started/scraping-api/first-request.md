# 在控制台 API 中心测试抓取（API Center）

JoyProxy 控制台提供了可视化的 **<a href="https://www.joyproxy.com/admin-web-unblocker.html?view=playground" target="_blank" rel="noopener noreferrer">API 中心（API Center）</a>** Playground 界面。你无需编写代码即可在浏览器中试跑抓取、调试各种高级参数，并一键生成直接可用的多语言代码。

---

## 在控制台 Playground 中发起测试

1. 登录控制台，进入 **<a href="https://www.joyproxy.com/admin-web-unblocker.html" target="_blank" rel="noopener noreferrer">网页抓取 API（Web Scraping API）</a>** 页面。
2. 切换到 **API 中心（API Center）** 页签（ Playground 视图）。
3. 界面参数配置区：
   - **目标 URL（Target URL）**：填入你需要抓取的网页地址（如 `https://example.com`）。
   - **HTTP 请求方法（Method）**：选择 `GET` 或 `POST`。
   - **JS 渲染开关（JavaScript Rendering）**：勾选是否开启 Headless 动态渲染（开启后相当于 `render=true`）。
   - **高级反爬绕过（Super Unblocker）**：勾选是否开启强力 WAF 绕过（开启后相当于 `super=true`）。
   - **出口国家（Geo Location）**：选择指定的代理出口国家（如 `United States 美国`）。
4. 点击 **发送请求（Send Request / Run）** 按钮。
5. 查看返回结果：
   - **响应预览（Response Body）**：可视化预览渲染后的网页 HTML 或 JSON。
   - **HTTP 状态码（Status Code）**：显示目标页面的响应码（如 `200 OK`）。
   - **积分消耗明细（Credits Used）**：实时展示本次抓取实际扣除的积分数。

---

## 一键导出代码

在控制台 Playground 页面下方，系统根据你在界面上勾选的参数，自动生成了对应调用的多语言代码。你可以直接点击 **复制代码（Copy Code）** 粘贴到你的项目中：

{% tabs %}
{% tab title="cURL" %}
```bash
curl -X GET "https://api.joyproxy.com/v1/fetch?token=YOUR_SCRAPING_TOKEN&url=https%3A%2F%2Fexample.com&render=true"
```
{% endtab %}

{% tab title="Python (Requests)" %}
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
{% endtab %}

{% tab title="Node.js (Fetch)" %}
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
{% endtab %}
{% endtabs %}

---

## 💡 RESTful API 文档与 OpenApi 中心引流

若你需要了解底层的 REST HTTP 路径、POST JSON 结构、请求头传递等原始接口说明：

> 💡 **OpenAPI 中心引流**  
> 请参阅 **<a href="../../best-practices/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a>** 中的网页抓取 API（Web Scraping API）章节，或点击控制台右上角的 **API 文档（Documentation）** 参阅原始 REST 端点规范。
