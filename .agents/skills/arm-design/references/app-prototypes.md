# App And Web Prototype Reference

Use this for app, mobile, dashboard, and clickable prototype work.

## Output

Default to a local HTML prototype with embedded or local CSS/JS. Use framework files only when the repo already requires them or the user asks.

## Prototype Requirements

- Define target device or viewport.
- Include the requested number of screens or flows.
- Use realistic data, not lorem ipsum, unless privacy or missing context requires placeholders.
- Include navigation or interaction states where useful.
- Use a coherent design system across screens.
- Keep all controls tappable/clickable at realistic sizes.

## iOS/Mobile Guidance

- Use a phone frame only when it helps presentation.
- Respect safe areas, status bars, tab bars, and touch targets.
- Avoid cramming desktop density into mobile screens.
- Use motion sparingly for transitions and state changes.

## Dashboard/Web App Guidance

- Establish information hierarchy first.
- Prioritize real user tasks over decorative widgets.
- Design empty states, loading states, and error states when relevant.
- Make tables, cards, charts, and controls feel like one system.

## Files To Produce

```text
prototype/
  index.html
  assets/
  verification/
    screenshot.png
  design-brief.md
```

## Done When

- `index.html` opens locally.
- Requested screens are visible or navigable.
- Primary interactions work.
- A verification screenshot exists.
- Console errors are absent or documented.
