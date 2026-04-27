# Animation Pitfalls

These rules come from real HTML animation export failures.

## 1. Use Stable Layering

Animated scenes should usually use a fixed stage with absolutely positioned layers.

```css
.stage {
  position: relative;
  width: 1920px;
  height: 1080px;
  overflow: hidden;
}

.layer {
  position: absolute;
  inset: 0;
}
```

Without `position: relative`, absolute children attach to the wrong ancestor.

## 2. Avoid Rare Unicode

Chromium, PDF export, and headless recording may render uncommon symbols or emoji as empty boxes. Use text, CSS, icons from a known library, or inline SVG you control.

## 3. Make Grid And Flex Data-Driven

Avoid hard-coded nth-child layouts for repeated cards. Generate positions from data so the layout survives count changes.

## 4. Keep Scene Transitions Continuous

A hard cut is acceptable only when intentional. Otherwise, the outgoing scene should guide the incoming scene through shared color, position, scale, or motion direction.

## 5. Render Must Be Seekable

Animation should be a pure function of time. This enables screenshots at key moments and reliable video export.

Expose a seek hook when useful:

```js
window.__seek = seconds => setTime(seconds);
```

## 6. Wait For Fonts Before Measuring

Do not measure layout before webfonts are ready.

```js
await document.fonts.ready;
```

## 7. Prepare For Recording

The page should set:

```js
window.__ready = true;
```

after first meaningful paint. `assets/animations.jsx` handles this when using its Stage.

## 8. Use Unique Temporary Directories

Video export temp directories must include timestamp and process ID. Parallel exports should not collide.

## 9. Hide Debug Chrome During Export

Progress bars, replay buttons, counters, and debug controls should be hidden during video export unless they are part of the narrative.

Use:

```html
<div class="no-record">Debug controls</div>
```

or `data-record="hidden"`.

## 10. Avoid Warmup Frame Leakage

Playwright `recordVideo` starts when the context starts, before React/Babel/fonts may be ready. The export script uses a warmup pass and trims to `window.__ready`. Do not rely on manual ffmpeg trimming to hide broken startup frames.

## 11. Do Not Draw Fake Player Chrome In The Scene

If the exported video already has playback UI elsewhere, fake progress bars and timecodes inside the scene look cheap and collide with the real player. Keep the frame for narrative content.

## 12. Pair `__ready` With Timeline Start

`window.__ready` must represent animation time zero. If the timeline already advanced before the ready signal, the recorded video will start late.

## 13. Disable Looping While Recording

When `window.__recording === true`, force the animation to stop at the final frame.

```js
const shouldLoop = !window.__recording && loop;
```

## 14. Prefer Frame Copy For 60fps

`minterpolate` can create smoother motion, but it can also produce files that QuickTime or Safari reject. Default to frame copy for broad compatibility; use interpolation only when the target platform supports it.

## 15. Inline Engines For `file://`

If the artifact must open by double-clicking, do not load local `.jsx` files from `file://`. Inline the component code or run a local server.

## 16. Support Reversed Contexts

Elements that cross from light to dark scenes should not hard-code text or logo colors. Use CSS variables or scene-aware styles.

## Quick Preflight

- Stage has fixed dimensions.
- Key frames can be seeked.
- Fonts are loaded before measurement.
- `window.__ready` is set.
- `window.__recording` disables loops.
- Debug chrome is hidden during export.
- Final frame is stable.
- Screenshots cover representative moments.
