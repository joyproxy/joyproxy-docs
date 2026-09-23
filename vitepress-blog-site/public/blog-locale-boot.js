(function () {
  var path = location.pathname.replace(/\/$/, "");
  if (path !== "/blog" && path !== "/blog/index.html") return;
  var q = new URLSearchParams(location.search);
  var lang = q.get("joy_lang") || q.get("lang") || "";
  try {
    if (!lang) lang = localStorage.getItem("joy_lang") || "";
  } catch (e) {}
  lang = String(lang).toLowerCase();
  var target = "";
  if (lang === "zh-cn" || lang === "zh-hans" || lang === "cn") target = "/blog/zh-CN/";
  else if (lang === "zh-tw" || lang === "zh-hant" || lang === "tw") target = "/blog/zh-TW/";
  if (!target) return;
  var qs = q.toString();
  location.replace(target + (qs ? "?" + qs : ""));
})();
