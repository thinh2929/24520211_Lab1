/**
 * Exercise 4: 4-State Machine & Accessible Retry Controller
 * Controls UI transitions between Loading, Live Data, Empty, and Error states.
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('state-container');
    const stateBtns = document.querySelectorAll('.state-btn');
    const retryBtn = document.getElementById('retry-btn');
    const resetDataBtn = document.getElementById('reset-data-btn');

    if (!container) return;

    /**
     * Sets active state on component container and updates control buttons.
     * @param {'loading' | 'live' | 'empty' | 'error'} targetState
     */
    function setState(targetState) {
      container.setAttribute('data-state', targetState);

      // Update control button active states
      stateBtns.forEach((btn) => {
        const btnState = btn.getAttribute('data-target-state');
        if (btnState === targetState) {
          btn.classList.add('active');
          btn.setAttribute('aria-current', 'true');
        } else {
          btn.classList.remove('active');
          btn.removeAttribute('aria-current');
        }
      });
    }

    // Attach click handlers to State Machine Switcher buttons
    stateBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const state = btn.getAttribute('data-target-state');
        if (state) {
          setState(state);
        }
      });
    });

    // Accessible Retry Trigger implementation (Error -> Loading -> Live Data)
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        // Step 1: Transition to Loading state
        setState('loading');

        // Step 2: Simulate async network fetch recovery after 1.5 seconds
        setTimeout(() => {
          setState('live');
        }, 1500);
      });
    }

    // Reset Data Trigger implementation (Empty -> Loading -> Live Data)
    if (resetDataBtn) {
      resetDataBtn.addEventListener('click', () => {
        setState('loading');
        setTimeout(() => {
          setState('live');
        }, 1200);
      });
    }
  });
})();
