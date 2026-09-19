# 设置代理账密与白名单（Authentication）

静态独享代理支持通过用户名密码认证或 IP 白名单免密认证。

---

## 方式一：用户名 / 密码认证（Username/Password）

1. 进入 **<a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">用户与白名单（Users &amp; Whitelist）</a>** 页面。
2. 切换到 **用户名 / 密码（Username/Password）** 页签。
3. 新建或选择现有的代理凭据：
   - **代理用户名（Username）**：如 `user123`。
   - **代理密码（Password）**：如 `pass123`。
4. 保存后，在客户端连接静态独享端点 `us-ca.edge.joyproxy.com:10001` 时，直接填入此 Username 与 Password 即可。

---

## 方式二：IP 白名单认证（IP Whitelist）

如果你的程序运行在固定公网 IPv4 地址的服务器上：

1. 打开 **<a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">用户与白名单（Users &amp; Whitelist）</a>** → **IP 白名单（IP Whitelist）** 页签。
2. 输入服务器的公网 IPv4 地址并保存。
3. 添加成功后，该服务器发起连接时无需填写代理用户名与密码，直接访问专属 `host:port` 即可通过认证。
