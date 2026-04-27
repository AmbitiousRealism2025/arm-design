# Gallery Ripple And Multi-Focus

This is a reusable scene structure for showing many related artifacts while still creating moments of focus.

## One-Sentence Pattern

Use a gallery ripple to express scale, then multi-focus spotlights to express quality.

## What It Communicates

The pattern says:

- there is a large body of work
- the work has variety
- the system can select and focus
- individual examples are worth inspecting
- the final brand/result emerges from the collection

## Preconditions

Use only when:

- you have roughly 20 or more related visual items
- the items are good enough to show
- the viewer needs both breadth and depth
- the scene can spare 15-25 seconds
- the final result benefits from a reveal

Do not use it for a simple three-step workflow or a single product screen.

## Technical Recipe

### Layer Structure

1. Paper/background layer.
2. Gallery card layer.
3. Focus overlay layer.
4. Brand/result layer.

### Ripple

Delay each card by distance from a focal point:

```js
const delay = Math.hypot(card.x - origin.x, card.y - origin.y) * 0.015;
```

Animate opacity, y offset, rotation, and scale.

### Multi-Focus

Pick three to five artifacts. For each:

- dim the gallery
- scale or sharpen the selected card
- show a short label
- hold long enough to understand
- release back to the gallery

### Pan

Add subtle pan throughout so the large field feels alive.

## Reusable Moves

### 1. `expoOut` As Main Reveal Easing

It feels decisive and premium. Use cubic easing for smaller UI details.

### 2. Warm Paper And Terracotta Accent

Warm neutrals plus one earthy accent give the scene a designed editorial feel without neon.

### 3. Two Shadow Levels

Use two or three shadow recipes instead of calculating full 3D depth for every card. It is cheaper and visually sufficient.

### 4. Weight Change Over Size Change

For text reveals, variable font weight can feel more cinematic than jumping font size.

### 5. Corner Brand Signature

Keep a small, low-contrast brand mark present. Let the final scene strengthen it.

## When Not To Use This

Avoid when:

- assets are low quality
- the story is about a precise process
- there is no meaningful collection
- the video is under 10 seconds
- the user needs a utilitarian demo

## Fit Check

Ask:

- Do I have enough artifacts?
- Are they visually coherent?
- Does the collection itself tell the story?
- Do I know which few deserve focus?
- Is the final reveal stronger because of the gallery?

If yes, this pattern is a good candidate.
