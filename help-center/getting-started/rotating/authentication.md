# 设置代理账密与白名单（Authentication）

在连接动态代理网关之前，你需要先在控制台中配置代理认证凭据。

> **区分提示**  
> 代理连接密码与 JoyProxy 官网登录密码是完全独立的。在官网重置登录密码不会更改你的代理连接密码。

---

## 方式一：设置代理 Username/Password（推荐）

这是绝大多数程序与客户端连接动态代理时使用的方式。

1. 打开控制台 **<a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">用户与白名单（Users &amp; Whitelist）</a>** 页面。
2. 切换到 **用户名 / 密码（Username/Password）** 页签。
3. 选择凭据模式：
   - **共享模式（Shared）**：账户下所有代理网络共用同一组代理账密（推荐初次使用选择）。
   - **按产品模式（Per Product）**：住宅、移动、商业与数据中心各自设置独立的代理账密。
4. 在 **创建 Username/Password（Create Username/Password）** 下填写凭据信息：
   - **产品（Product）**：选择对应的代理网络（如 Residential）。
   - **代理用户名（Username）**：以小写字母开头，仅包含小写字母与数字 (`a–z`, `0–9`)，最长 16 位。
   - **代理密码（Password）**：至少 6 位。
   - **备注（Description）**：方便标识用途（可选）。
5. 点击 **创建 User/Pass（Create User/Pass）** 保存，并妥善记录你设置的**代理密码**。

> **重要注意**  
> 在此处创建的短用户名（如 `user123`）用于管理凭据。实际连接动态代理网关 `gate.joyproxy.com:9001` 时，代理用户名字段必须填入在 **<a href="extract-ip.md" target="_blank" rel="noopener noreferrer">提取中心（Endpoint Generator）</a>** 页面生成的**完整长用户名**。

### 管理与修改密码

- 在 **我的 Username/Password（My Username/Password）** 列表中点击 **修改（Edit）** 按钮，可随时修改代理密码。
- 修改代理密码后，只需更新客户端中的密码字段，在 [提取] 页面生成的长用户名无需重新生成。

---

## 方式二：设置 IP 白名单（IP Whitelist）

如果你的客户端或爬虫服务器拥有固定的公网 IPv4 地址，可以配置 IP 白名单进行免密连接：

1. 获取你客户端服务器的**固定公网 IPv4 地址**。
2. 进入 **<a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">用户与白名单（Users &amp; Whitelist）</a>** → **IP 白名单（IP Whitelist）** 页签。
3. 在 **IP 地址（IP Address）** 输入框中填写 IP，在 **备注（Description）** 中填写备注。
4. 点击 **添加 IP（Add IP）** 按钮保存。
