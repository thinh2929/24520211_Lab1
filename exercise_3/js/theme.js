/**
 * Exercise 3: Accessible Theme Engine
 * Manages light/dark mode state persistence via localStorage key 'theme'.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'theme';

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    const btn = document.getElementById('theme-toggle');
    if (btn) {
      const isDark = theme === 'dark';
      btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      btn.setAttribute('aria-label', isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme');
      
      const iconSpan = btn.querySelector('.theme-icon');
      const textSpan = btn.querySelector('.theme-toggle-text');
      
      if (iconSpan) {
        iconSpan.textContent = isDark ? '☀️' : '🌓';
      }
      if (textSpan) {
        textSpan.textContent = isDark ? 'Light Theme' : 'Dark Theme';
      }
    }
  }

  // Set theme before DOM content loads to prevent FOUC / CLS
  const initialTheme = getPreferredTheme();
  document.documentElement.setAttribute('data-theme', initialTheme);

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(initialTheme);

    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
      });
    }
  });
})();
