# Animations

Use this reference for timeline-driven HTML motion design.

## Core Pattern: Stage And Sprite

Use `assets/animations.jsx` whenever possible. It provides:

- `Stage`: owns duration, playback, seek, and recording behavior
- `Sprite`: shows children during a time slice
- `useTime`: reads current timeline time
- `useSprite`: maps a sprite's local time
- `interpolate`: maps input time ranges to output values
- `Easing`: motion curves

## Starter Flow

1. Define the story.
2. Break it into scenes.
3. Assign timestamps.
4. Build static scene states.
5. Animate transitions.
6. Add `window.__ready` support through the Stage.
7. Verify key frames.

## Common Patterns

### Fade

```jsx
<Sprite start={0} end={3} fadeIn={0.4} fadeOut={0.3}>
  <Title />
</Sprite>
```

### Slide

```jsx
function SlidingCard() {
  const t = useTime();
  const x = interpolate(t, [0, 1], [80, 0], Easing.expoOut);
  return <div style={{ transform: `translateX(${x}px)` }}>Card</div>;
}
```

### Typewriter

Reveal by character count, but keep readable timing. Do not make users watch long fake typing unless the process itself is the story.

### Number Count

Use easing and round only at display time.

```jsx
const value = Math.round(interpolate(t, [2, 3.2], [0, 184], Easing.expoOut));
```

### Scene Phases

Prefer a few clear phases over many simultaneous effects.

```text
0.0-2.0   setup
2.0-5.0   process
5.0-7.5   reveal
7.5-9.0   resolve
```

## Easing

Avoid linear motion except for background drift or intentionally mechanical motion.

Use:

- `expoOut` for strong entrances and hero reveals
- `expoInOut` for major scene transitions
- `cubicOut` for ordinary UI motion
- `backOut` for playful elements
- `linear` only for continuous ambient movement

## Timing Guidelines

- microinteraction: 0.1-0.3s
- UI transition: 0.3-0.8s
- scene beat: 2-10s
- key text should remain readable for at least 2-3s
- a single narrative segment should rarely exceed 10s

## Design Order

Think in this order:

1. What does the viewer need to understand?
2. What changes over time?
3. What is the emotional arc?
4. Which elements enter, transform, and leave?
5. Where should the viewer look?
6. What should be static so the motion has contrast?

## Export Compatibility

Animations meant for video must:

- be seekable
- avoid infinite loops while recording
- set `window.__ready = true` after first paint
- honor `window.__recording === true`
- keep final frame stable
- avoid UI chrome in the frame unless it is part of the story

Read `references/animation-pitfalls.md` before exporting.
