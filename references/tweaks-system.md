# Tweaks System

Tweaks are live design parameters embedded in the artifact. Use them when the user should compare or tune options without editing code.

This skill uses a pure frontend `localStorage` approach so it works in Codex, Claude Code, Cursor, and ordinary browsers.

## When To Add Tweaks

Add Tweaks for:

- design variations
- color modes
- density controls
- layout alternatives
- typography scale
- motion intensity
- feature flags
- deck theme variants

Do not add Tweaks when the design should be a single locked artifact or when parameters would distract from the review.

## Basic Structure

```jsx
const defaultTweaks = {
  theme: "light",
  density: "medium",
  accent: "terracotta",
  motion: "calm",
};

function useTweaks() {
  const [tweaks, setTweaks] = React.useState(() => {
    try {
      return { ...defaultTweaks, ...JSON.parse(localStorage.getItem("design-tweaks")) };
    } catch {
      return defaultTweaks;
    }
  });

  React.useEffect(() => {
    localStorage.setItem("design-tweaks", JSON.stringify(tweaks));
  }, [tweaks]);

  return [tweaks, setTweaks];
}
```

## Panel UI

Keep the panel compact and practical.

Use:

- segmented controls for modes
- sliders for numeric values
- toggles for booleans
- swatches for color
- selects for larger option sets

Do not make Tweaks look like a separate product.

Example:

```jsx
function TweaksPanel({ tweaks, setTweaks }) {
  return (
    <aside className="tweaks-panel">
      <label>
        Theme
        <select
          value={tweaks.theme}
          onChange={event => setTweaks({ ...tweaks, theme: event.target.value })}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
    </aside>
  );
}
```

## Applying Tweaks

Map tweak values to CSS variables or component props.

```jsx
const themeVars = {
  light: { "--bg": "#f6f1e8", "--ink": "#171411" },
  dark: { "--bg": "#171411", "--ink": "#f6f1e8" },
};

<main style={themeVars[tweaks.theme]}>
  ...
</main>
```

## Common Tweak Options

### General

- theme
- accent color
- type scale
- density
- radius
- contrast

### Decks

- speaker mode
- section emphasis
- background style
- figure density

### Prototypes

- platform
- overview vs flow
- content density
- tab behavior

### Animation

- playback speed
- motion intensity
- show debug labels
- focus scene

### Landing Pages

- hero layout
- proof style
- CTA emphasis
- image treatment

## Design Rules

1. Every tweak should answer a real design question.
2. Fewer controls are better.
3. Defaults should represent the completed design.
4. Group controls logically.
5. Persist values with `localStorage`.
6. Provide a reset button when the panel has many controls.

## Forward Compatibility

If the artifact may later run in an environment with source-level tweak persistence, keep clearly named constants and marked tweak blocks. The localStorage version should still be the working default.

## Failure Modes

- too many controls
- controls change trivial details
- defaults look unfinished
- Tweaks panel overlaps the design
- state does not persist
- design breaks for some option combinations
