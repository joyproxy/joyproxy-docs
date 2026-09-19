# 登录

登录后进入 JoyProxy 管理后台（控制台），默认跳转到 [概览（Overview）](overview.md)。

[登录](https://www.joyproxy.com/login.html)

---

## 邮箱与密码登录

页面标题 **登录**（`login.title`），副标题 **欢迎回到 JoyProxy**（`login.subtitle`）。

1. 填写 **邮箱**、**密码**。
2. 点击 **登录**（`login.submit`）；处理中显示 **登录中…**。
3. 忘记密码？点击 **忘记密码？**（`login.forgot`）→ [找回密码](forgot-password.md)。

---

## 使用 Google / GitHub 登录

在 **或**（`login.or`）分隔线下方：

- **使用 Google 继续**（`login.google`）
- **使用 GitHub 继续**（`login.github`）

授权完成后同样进入控制台 **概览**。

---

## 账户尚未激活

若提示 **账户尚未激活。请查收邮件并点击激活链接。**（`login.notActivated`），可点击 **重发激活邮件**（`login.resendActivation`）。详见 [邮箱激活](email-activation.md)。

---

## 登录后安全习惯

- 在 **我的账户** → **资料** 配置 [无操作退出时间](idle-sign-out.md)。
- 勿在工单或聊天中发送 [Token](rotate-token.md)；使用密钥管理工具保存。
- 共享电脑用完后点击侧栏 **退出登录**（`sidebar.logout`）。
