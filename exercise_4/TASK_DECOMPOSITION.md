# Task Decomposition - Exercise 4

## WBS Task T-03: 4-State Resilient Component Contract

- **Task ID**: T-03
- **Title**: 4-State Resilient Component Architecture
- **Description**: Implement a resilient component supporting 4 explicit UI states (Loading Skeleton, Live Data, Empty State, and Error State with accessible retry trigger).

---

### Component State Machine Contract

```
                     ┌──────────────────┐
                     │     INITIAL      │
                     └────────┬─────────┘
                              │
                              ▼
                     ┌──────────────────┐
         ┌──────────>│  LOADING STATE   │<───────────┐
         │           │ (Shimmer CSS)    │            │
         │           └────────┬─────────┘            │
         │                    │                      │
         │         ┌──────────┴──────────┐           │
         │         ▼                     ▼           │
   ┌─────┴────────────┐        ┌─────────┴────────┐  │
   │ LIVE DATA STATE  │        │   ERROR STATE    │──┘ (Retry Trigger)
   │ (Flexbox / Grid) │        │ (Role Alert)     │
   └───────┬──────────┘        └──────────────────┘
           │
           ▼ (Data Empty)
   ┌──────────────────┐
   │   EMPTY STATE    │
   │ (Reset Action)   │
   └──────────────────┘
```

---

### Sub-Tasks & Acceptance Criteria:

#### SUB-TASK T-03A: Loading Skeleton
- [x] Pure CSS shimmer gradient animation (`@keyframes shimmer`).
- [x] Layout matching live content to maintain 0 CLS.
- [x] Commit message: `feat(css): skeleton`

#### SUB-TASK T-03B: Live Data State
- [x] Responsive 2D CSS Grid list of data cards.
- [x] Flexbox metadata badges (categories, tags, status).
- [x] Commit message: `feat(html): live data state`

#### SUB-TASK T-03C: Empty & Error States with Accessible Retry
- [x] Empty state component with clear user guidance.
- [x] Error state component with accessible alert feedback (`role="alert"`).
- [x] Accessible Retry trigger button (`<button id="retry-btn">Retry</button>`).
- [x] State engine controller switching `data-state` attribute dynamically.
- [x] Commit message: `feat(js): empty and error states`
