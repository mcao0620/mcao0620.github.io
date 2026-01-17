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

function initTheme() {
  loadThemeIcon();
  
  const themeToggle = document.querySelector("#theme-toggle");
  themeToggle?.addEventListener("click", toggleTheme);
}

// Handle SPA navigation
async function handleNavigation(e) {
  const link = e.target.closest('a[href^="/"]');
  if (!link || link.target === '_blank') return;
  e.preventDefault();

  // Fetch new page and replace HTML
  const res = await fetch(link.href);
  const html = new DOMParser().parseFromString(await res.text(), 'text/html');
  document.querySelector('main').innerHTML = html.querySelector('main').innerHTML;
  document.title = html.title;

  // Re-initialize theme listeners for new content (if any) or just ensure state is correct
  initTheme();

  // Update history without reloading
  history.pushState({}, '', link.href);
}

window.addEventListener('popstate', async () => {
  const res = await fetch(location.href);
  const html = new DOMParser().parseFromString(await res.text(), 'text/html');
  document.querySelector('main').innerHTML = html.querySelector('main').innerHTML;
  document.title = html.title;
  initTheme();
});

document.addEventListener("DOMContentLoaded", () => {
  // Remove preload class to enable transitions
  document.body.classList.remove("preload");

  // Initialize Theme
  initTheme();

  // Initialize Navigation
  document.addEventListener('click', handleNavigation);
});
