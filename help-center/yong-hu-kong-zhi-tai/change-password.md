# 修改密码

在 **我的账户** → **资料** Tab 更新登录密码。

[我的账户](https://www.joyproxy.com/admin-settings.html)

---

## 步骤

1. 登录控制台，侧栏点击 **我的账户**。
2. 确认位于 **资料** Tab（`settingsPage.tabAccount`）。
3. 在 **修改密码**（`settingsPage.changePassword`）区域填写：
   - **目前密码**（`settingsPage.currentPassword`）
   - **新密码**（`settingsPage.newPassword`）
   - **确认密码**（`settingsPage.confirmPassword`）
4. 点击 **保存更改**（`settingsPage.saveChanges`）。

校验失败时页面提示例如：**请填写所有密码字段**、**两次输入的新密码不一致！**、**密码至少 6 个字符**。成功：**密码已更新！**

---

## 保存之后

- 在其他浏览器或设备重新 **登录**。
- 自动化脚本应使用 API Token，勿把登录密码写入代码；见 [主用户与自动化 Token](rotate-token.md)。

忘记 **目前密码**？请用 [找回密码](forgot-password.md)，不要在本表单随意尝试。
