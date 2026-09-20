# Change Password

Rotating a strong Log In password protects proxy inventory and billing. You can change it in the console.

<a href="https://www.joyproxy.com/admin-settings.html" target="_blank" rel="noopener noreferrer">Open Change Password</a>

---

## Steps

1. Log In, then click **My Account** in the left sidebar.
2. Stay on the **Profile** tab.
3. In the **Change Password** card, fill in:
   - **Current Password**: the password you use now;
   - **New Password**: the password you want (at least 6 characters; mix of letters and symbols is recommended);
   - **Confirm Password**: the same new password again.
4. Click **Save Changes**.

On success, a green **Password updated successfully!** toast appears. The new password takes effect immediately.

---

## Notes

- **Forgot Current Password?**  
  Do not guess in this form. Log out and use the <a href="forgot-password.md" target="_blank" rel="noopener noreferrer">Forgot password</a> flow to reset from the registered email.
- **Effect on automation**:  
  OpenAPI, extract **API URL**s, and Web Scraping API all authenticate with dedicated tokens. **Changing the website Log In password does not stop proxy extract or fetch jobs**.
- **OAuth-only accounts**:  
  If you only use Google or GitHub and never set a password, run Forgot password once to create an initial password, then use Change Password.
