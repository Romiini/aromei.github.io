// theme: default to light; remember choice
(function () {
  const KEY = 'theme';
  const root = document.documentElement;
  const stored = localStorage.getItem(KEY);
  if (stored) root.setAttribute('data-theme', stored);
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('[data-theme-toggle]');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem(KEY, next);
    });
  });
})();
