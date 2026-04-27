# Content Guidelines

This reference covers anti-slop rules, content integrity, scale, and CSS patterns.

## Anti AI-Slop Blacklist

Avoid these defaults unless the context strongly justifies them.

### Visual

- purple/cyan gradients as the main identity
- glossy blobs, orbs, bokeh, and random glow fields
- meaningless floating cards
- generic glassmorphism
- fake 3D product silhouettes
- fake SVG people
- decorative emojis
- icon spam
- oversized hero sections for tools that should be operational
- landing-page composition when the user asked for an app or tool

### Typography

- Inter as display typography by default
- too many font families
- all-caps everywhere
- negative letter spacing
- viewport-width font sizing
- tiny deck text
- weak hierarchy where headings and body look the same

### Color

- palettes dominated by one hue family
- unverified brand colors
- random accent colors with no system
- neon cyberpunk for ordinary business products
- low contrast text
- too many saturated colors in non-data contexts

### Layout

- cards inside cards
- rounded card plus colored left border as a default motif
- excessive borders and shadows
- mismatched alignment
- cramped content
- hero-scale type inside compact panels
- text overflow in buttons, chips, or cards

## Content Integrity

Do not invent:

- stats
- testimonials
- customer logos
- quotes
- product capabilities
- benchmarks
- dates
- user names
- pricing

Use honest placeholders:

```text
[Customer quote needed]
[Final metric pending]
[Product screenshot]
```

If the design needs content to work, ask for it or clearly label assumptions.

## Ask Before Adding Material

Ask before adding:

- stock photography
- brand marks
- claims about external companies
- sensitive user data
- medical, legal, or financial facts
- current product specs

For public facts, verify first.

## Build A System Up Front

Before writing detailed CSS, define:

- canvas size
- type scale
- grid
- spacing rhythm
- color tokens
- component vocabulary
- motion rules
- image strategy

Then design within that system.

## Scale Rules

### Slide Decks

- 1920x1080 visual target unless specified.
- Audience may be 5-10 meters away.
- Body text should usually be 24px or larger.
- One main idea per slide.
- Avoid dense paragraphs.

### Print Or PDF

- Use clear margins.
- Preserve vector text where possible.
- Keep body text readable after export.
- Use citations and source notes when data matters.

### Web And Mobile

- Respect the actual viewport.
- Use responsive constraints.
- Test at desktop and mobile sizes.
- Avoid fixed widths that crop on mobile.

### Contrast

Make primary text readable. Subtle text can be quiet, but never illegible.

## Useful CSS

### Typography

```css
text-wrap: pretty;
font-variation-settings: "opsz" 72;
font-feature-settings: "ss01" 1;
```

### Layout

```css
display: grid;
grid-template-columns: repeat(12, minmax(0, 1fr));
gap: clamp(16px, 2vw, 32px);
box-sizing: border-box;
```

### Fixed-Format Scenes

```css
.stage {
  width: 1920px;
  height: 1080px;
  transform-origin: top left;
}
```

Use JS scale/letterboxing for fixed deck or video stages.

### Motion

Prefer `transform` and `opacity`. Avoid layout-thrashing animation of top/left/width/height unless carefully controlled.

## Decision Rules

When unsure:

- choose real assets over decoration
- choose clarity over novelty
- choose fewer colors
- choose a stronger hierarchy
- choose an honest placeholder over fake content
- choose one memorable detail over many weak effects
