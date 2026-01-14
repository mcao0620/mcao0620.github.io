function loadThemeIcon() {
  const isDark = document.documentElement.classList.contains("dark");
  document.querySelector(".sun").style.opacity = isDark ? "1" : "0";
  document.querySelector(".moon").style.opacity = isDark ? "0" : "1";
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  loadThemeIcon();
}

document.addEventListener("DOMContentLoaded", () => {
  loadThemeIcon();
  
  const sunIcon = document.querySelector(".sun");
  const moonIcon = document.querySelector(".moon");
  
  sunIcon?.addEventListener("click", toggleTheme);
  moonIcon?.addEventListener("click", toggleTheme);
});
