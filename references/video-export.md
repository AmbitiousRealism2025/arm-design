# Video Export

Use this reference when turning an HTML animation into MP4, 60fps MP4, GIF, and optional audio.

## When To Export

Export only after:

- the browser animation is visually correct
- key frames have been checked
- console/page errors are resolved
- the user or designer approves the browser version

Do not export while animation bugs remain. Fixing video output is slower than fixing HTML.

## Default Outputs

| Format | Typical Spec | Use |
|---|---|---|
| MP4 25fps | 1920x1080 H.264 | general video delivery |
| MP4 60fps | frame-copy or interpolated H.264 | high-framerate showcase |
| GIF | 960px wide, palette optimized | README, chat, social previews |

## Tooling

### HTML To MP4

```bash
npm run render-video -- path/to/animation.html --duration=30
```

Useful options:

- `--duration=30`
- `--width=1920`
- `--height=1080`
- `--trim=2.2`
- `--fontwait=1.5`
- `--readytimeout=8`
- `--keep-chrome`

The script writes an MP4 next to the HTML file.

### MP4 To 60fps And GIF

```bash
npm run formats -- path/to/animation.mp4
```

Optional:

```bash
npm run formats -- path/to/animation.mp4 1280 --minterpolate
```

Outputs:

- `name-60fps.mp4`
- `name.gif`

Default 60fps uses frame copy for compatibility. Use `--minterpolate` only after testing the target player.

### Add BGM

```bash
npm run music -- path/to/animation-60fps.mp4 --mood=tech
```

Available moods:

- `tech`
- `ad`
- `educational`
- `educational-alt`
- `tutorial`
- `tutorial-alt`

Use a custom track:

```bash
npm run music -- path/to/video.mp4 --music=path/to/audio.mp3 --out=final.mp4
```

## Standard Pipeline

```bash
npm run render-video -- my-animation.html --duration=30
npm run formats -- my-animation.mp4
npm run music -- my-animation-60fps.mp4 --mood=tech
```

## Preflight

- HTML runs from start to finish.
- First frame is not blank.
- Final frame is stable.
- Duration matches the actual timeline.
- Fonts and images load.
- `window.__ready` is set.
- `window.__recording` disables loops.
- Debug chrome is hidden.
- Watermark decision is intentional.

## Technical Notes

Playwright records WebM internally and ffmpeg converts to MP4. Recording starts before page readiness, so the script uses a warmup pass and the `window.__ready` signal to trim accurately.

GIF export uses a two-pass palette:

1. `palettegen` builds an optimized palette.
2. `paletteuse` applies it with dithering.

This produces much cleaner gradients and subtle colors than one-pass GIF encoding.

## Delivery Notes

When delivering video outputs, include:

- file paths
- duration
- resolution
- whether audio is included
- any known compatibility note, especially if `--minterpolate` was used

If audio was expected, verify it:

```bash
ffprobe -select_streams a final.mp4
```
