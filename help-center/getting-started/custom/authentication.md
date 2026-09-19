# 设置代理账密与白名单（Authentication）

在连接自定义独享代理端口时，系统支持 **用户名 / 密码认证（Username/Password）** 与 **IP 白名单认证（IP Whitelist）** 两种鉴权方式。

---

## 方式一：用户名 / 密码认证（Username / Password）

这是最通用的代理认证方式，适用于各种编程语言代码、客户端软件以及指纹浏览器。

1. 打开 JoyProxy 控制台 **<a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">用户与白名单（Users &amp; Whitelist）</a>** 页面。
2. 切换到 **用户名 / 密码（Username/Password）** 页签。
3. 点击 **新建代理用户（Create User）**：
   - 设置 **代理用户名（Username）**：如 `user123`。
   - 设置 **代理密码（Password）**：如 `pass123`。
4. 保存成功后，你在账户下购买的所有自定义端口均可使用此账密建立连接：
   ```text
   http://user123:pass123@us-ca.edge.joyproxy.com:20001
   ```

---

## 方式二：IP 白名单认证（IP Whitelist 免密）

如果你的程序运行在具备固定公网 IPv4 地址的服务器（如 AWS EC2、阿里云 ECS、固定 IP 的机房服务器）上：

1. 打开 **<a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">用户与白名单（Users &amp; Whitelist）</a>** 页面。
2. 切换到 **IP 白名单（IP Whitelist）** 页签。
3. 点击 **添加 IP（Add IP）**，输入你服务器的真实公网 IPv4 地址并保存。
4. 添加成功后，在该服务器发起代理连接时无需输入代理 Username 和 Password，直接连接 `us-ca.edge.joyproxy.com:20001` 即可自动通过鉴权。

---

## 常见认证问题

- **多个代理账号**：你可以创建多个 Username/Password 凭据，分配给团队不同成员或不同项目使用。
- **账密与白名单同时生效**：如果同时设置了白名单和账密，符合白名单 IP 的请求可以直接连接，带账密的请求同样可以通过验证。
