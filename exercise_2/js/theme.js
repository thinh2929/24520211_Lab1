/**
 * SUB-TASK T-02C: Theme Engine & Persistence
 * Controls light/dark theme toggling with localStorage state persistence.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'theme';

  /**
   * Retrieves the current saved theme or system preference.
   * @returns {'light' | 'dark'}
   */
  function getPreferredTheme() {
    const storedTheme = localStorage.getItem(STORAGE_KEY);
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  /**
   * Applies the theme to root element and updates ARIA states.
   * @param {'light' | 'dark'} theme
   */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      const isDark = theme === 'dark';
      toggleBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      toggleBtn.setAttribute('aria-label', isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme');
      
      const iconSpan = toggleBtn.querySelector('.theme-icon');
      const textSpan = toggleBtn.querySelector('.theme-toggle-text');
      
      if (iconSpan) {
        iconSpan.textContent = isDark ? '☀️' : '🌓';
      }
      if (textSpan) {
        textSpan.textContent = isDark ? 'Light Theme' : 'Dark Theme';
      }
    }
  }

  // Apply theme immediately to prevent FOUC / CLS
  const initialTheme = getPreferredTheme();
  document.documentElement.setAttribute('data-theme', initialTheme);

  // Bind click event after DOM content loaded
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(initialTheme);

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
      });
    }
  });
})();
