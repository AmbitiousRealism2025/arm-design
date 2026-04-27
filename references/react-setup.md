# React And Babel Setup

Use this reference when generating standalone HTML artifacts with React and Babel.

## Pinned Script Tags

Use pinned versions so generated files stay stable:

```html
<script crossorigin src="https://unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone@7.25.6/babel.min.js"></script>
```

For debugging, use non-minified Babel temporarily.

## Default File Structure

For most prototypes:

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Design Artifact</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script crossorigin src="https://unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone@7.25.6/babel.min.js"></script>
  <script type="text/babel">
    const { useMemo, useState } = React;

    function App() {
      return <main>Hello</main>;
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  </script>
</body>
</html>
```

## Hard Rules

### 1. Unique Style Object Names

Do not use:

```jsx
const styles = {};
```

In large files or multiple scripts, this causes collisions.

Use:

```jsx
const dashboardStyles = {};
const phoneStyles = {};
const deckStyles = {};
```

### 2. Babel Script Scope Is Not Shared

Separate `<script type="text/babel">` tags do not automatically share local variables.

Export shared components explicitly:

```jsx
Object.assign(window, {
  IosFrame,
  PhoneScreen,
  tokens,
});
```

Then read them from `window` in later scripts.

### 3. Avoid `scrollIntoView`

`scrollIntoView` can scroll the wrong ancestor and break contained layouts. Use explicit container scroll methods instead.

## Calling An LLM From HTML

Most local agent environments do not provide a host helper such as `window.claude.complete`.

Options:

### A. Mock It

Best for demos.

```jsx
window.demoLLM = async function complete(prompt) {
  await new Promise(resolve => setTimeout(resolve, 600));
  return "Mock response for the prototype.";
};
```

### B. User-Provided API Key

Only when the user explicitly asks for live API behavior. Keep keys out of committed files.

### C. Agent-Generated Static Data

Ask the current agent to generate plausible demo responses once, then hard-code them as mock data. This keeps the artifact offline and reproducible.

## Large File Strategy

Prefer a single file for small prototypes and app demos. Split only when needed.

If splitting:

- run a local server
- export shared components through `window`
- avoid `file://` external script CORS problems
- document the launch command

Example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Common Errors

### Blank Page

Check:

- JSX syntax error
- missing root element
- Babel failed to load
- component not exported to `window`
- style object name collision

### External File Blocked

If using `file://`, inline the JS or run a local server.

### Font Flash Or Wrong Measurements

Wait for fonts:

```js
await document.fonts.ready;
```

### Components Not Updating

Check prop wiring and state ownership. Avoid global mutable state unless it is intentional for demos.
