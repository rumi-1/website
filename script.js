// Theme toggle: cycles between light and dark, remembers the choice,
// and falls back to the system preference when nothing is saved.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function current() {
    var saved = root.getAttribute('data-theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return media.matches ? 'dark' : 'light';
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  if (btn) {
    btn.setAttribute('aria-label', current() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    btn.addEventListener('click', function () {
      apply(current() === 'dark' ? 'light' : 'dark');
    });
  }

  // Keep the footer year current.
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
