# Motion And Video Reference

Use this for animation, launch videos, explainers, MP4/GIF exports, and timed motion systems.

## Default Approach

Build HTML/CSS/JS animation first. Export with Playwright and ffmpeg when requested and available.

## Timeline Plan

Before building, write a compact timeline:

```markdown
# Timeline

Duration:
Format:
Viewport:

| Time | Beat | Visual | Motion | Audio |
|---:|---|---|---|---|
| 0.0s |  |  |  |  |
```

## Motion Rules

- Motion should explain, reveal, or focus attention.
- Avoid constant movement that competes with reading.
- Use clear staging: intro, development, payoff, end card.
- Respect export constraints: viewport, duration, frame rate, file size.
- Make loops seamless only when the user asks for a loop.

## Export Rules

- MP4 export requires ffmpeg.
- GIF export should be used only when requested or when the platform requires it.
- Music and sound effects should be added only when requested or clearly part of the brief.
- Record limitations when required tools are unavailable.

## Suggested Files

```text
motion/
  index.html
  timeline.md
  exports/
    animation.mp4
  verification/
    frame-000.png
```

## Done When

- HTML animation runs locally.
- Timeline matches requested duration.
- Export succeeds if requested.
- Final file paths are listed.
- Any tool limitations are documented.
