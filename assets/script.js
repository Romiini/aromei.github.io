document.addEventListener('DOMContentLoaded', () => {
  const KEY = 'ar-theme';
  const root = document.documentElement;
  const btn = document.querySelector('[data-theme-toggle]');

  // init from storage or system
  const stored = localStorage.getItem(KEY);
  if (stored === 'dark') root.setAttribute('data-theme', 'dark');
  else if (!stored) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) root.setAttribute('data-theme', 'dark');
  }

  if (btn) {
    btn.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      if (isDark) {
        root.removeAttribute('data-theme');
        localStorage.setItem(KEY, 'light');
      } else {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem(KEY, 'dark');
      }
    });
  }
});
