# Apple Gallery Showcase

This reference describes a premium floating-gallery animation style: product cards, design thumbnails, or project artifacts arranged in a cinematic wall.

## When To Use It

Use when:

- there are many visual artifacts
- the point is breadth plus curation
- assets are visually consistent
- the scene should feel premium and slow
- the viewer needs to focus on selected items over time

Avoid when:

- there are fewer than six assets
- assets are low quality
- the story is a linear process
- the output needs dense explanation

## Visual Tokens

Recommended foundation:

```css
:root {
  --paper: #f4efe7;
  --ink: #1d1b18;
  --muted: #81776b;
  --accent: #c65f3d;
  --card: #fffaf2;
  --shadow: rgba(47, 38, 28, 0.18);
}
```

Use warm off-white, deep ink, restrained terracotta accents, and soft paper texture.

## Core Layout

### Floating Cards

Cards should have:

- stable aspect ratio
- image or artifact preview
- subtle shadow
- slight rotation or depth
- no heavy border

### Tilted Gallery Wall

Use a wide virtual canvas and pan across it. Add subtle perspective rather than heavy 3D.

### Four-Corner Convergence

For selection scenes, four groups can drift toward the center and resolve into a chosen artifact.

## Motion Patterns

### A. Corner Convergence

Use for narrowing choices. Cards move inward, decelerate, and leave room for the selected item.

### B. Selected Zoom

The selected card scales up while others fade, blur, or slide away.

### C. Ripple Expansion

Cards appear based on distance from a focal point. This expresses scale better than a simple stagger.

### D. Slow Pan

Use continuous diagonal pan to keep a static gallery alive. Keep motion slow enough that cards remain readable.

### E. Focus Overlay

Pause the gallery, dim the background, and spotlight one artifact with a short label.

## Timeline Skeleton

```text
0.0-1.2   quiet setup
1.2-3.0   gallery ripple
3.0-8.0   slow pan
8.0-12.0  focus sequence
12.0-15.0 convergence
15.0-18.0 brand or result reveal
18.0-20.0 hold
```

## Texture Details

Subtle noise helps avoid sterile flatness:

```css
.stage::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.08;
  pointer-events: none;
  background-image: url("data:image/svg+xml,...");
}
```

Keep texture almost invisible.

## Brand Signature

A small corner wordmark or label can stay present throughout the animation. Keep it low contrast until the final reveal.

## Failure Modes

- too many shadows
- cards move too fast to inspect
- all cards look identical
- no focal sequence
- fake 3D overwhelms the content
- texture becomes dirty
- final brand moment is too abrupt

## Related References

- `references/hero-animation-case-study.md`
- `references/animation-best-practices.md`
- `references/animation-pitfalls.md`
