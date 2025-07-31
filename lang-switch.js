document.addEventListener("DOMContentLoaded", () => {
  const userLang = navigator.language || navigator.userLanguage;
  if (userLang.startsWith("en")) {
    window.location.href = "index-en.html";
  }
});
