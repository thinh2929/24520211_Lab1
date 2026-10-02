# Task Decomposition - Exercise 2

## WBS Tasks Breakdown

### SUB-TASK T-02A: Tokens & Reset
- **Task ID**: T-02A
- **Title**: CSS Tokens and Reset Implementation
- **Description**: Define CSS custom properties (design tokens) for light and dark themes in `:root` / `[data-theme="dark"]` and implement a modern CSS reset.
- **Status**: In Progress
- **Commit Message**: `feat(css): tokens & reset`
- **Acceptance Criteria**:
  - CSS variables for colors, typography, spacing, and borders.
  - Zero hardcoded hex codes in element styling rules.
  - Modern CSS reset ensuring box-sizing border-box and zero margin defaults.

### SUB-TASK T-02B: 2D Grid Layout
- **Task ID**: T-02B
- **Title**: Responsive 2D CSS Grid Layout
- **Description**: Implement a 2D responsive CSS grid layout that renders cleanly on mobile (375px) without horizontal scroll and meets WCAG 2.2 AA contrast ratios.
- **Status**: Pending
- **Commit Message**: `feat(css): responsive grid`
- **Acceptance Criteria**:
  - 2D Grid layout for section cards and page structure.
  - Responsive at 375px mobile breakpoint (zero horizontal overflow).
  - WCAG 2.2 AA compliant contrast ratio (>= 4.5:1).
  - Full keyboard focus navigation styling (`:focus-visible`).

### SUB-TASK T-02C: Theme Engine
- **Task ID**: T-02C
- **Title**: Dark Mode Engine & State Persistence
- **Description**: Implement JavaScript theme toggling engine with persistent state via `localStorage` key `'theme'`.
- **Status**: Pending
- **Commit Message**: `feat(js): dark mode engine`
- **Acceptance Criteria**:
  - `localStorage` key strictly set to `'theme'`.
  - Accessible toggle button supporting Tab & Enter keyboard flow with `aria-pressed`.
  - Zero console errors on dynamic toggle.
  - Fast load performance with zero CLS.
