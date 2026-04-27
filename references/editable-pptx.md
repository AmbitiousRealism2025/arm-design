# Editable PPTX Export

Editable PPTX export is possible only when the HTML is written with strict constraints from the beginning.

Use this path when the user explicitly needs text boxes editable in PowerPoint or Keynote. If visual fidelity matters more than editability, export PDF instead.

## Canvas Size

Use PowerPoint wide layout:

- 13.333 x 7.5 inches
- equivalent HTML body target: 960 x 540 pt
- browser preview can scale this visually

Recommended:

```css
html, body {
  width: 960px;
  height: 540px;
  margin: 0;
}
```

## Four Hard Rules

### Rule 1: Text Must Be In Text Elements

Do not put raw text directly in `div`.

Bad:

```html
<div class="title">Quarterly Review</div>
```

Good:

```html
<div class="title"><h1>Quarterly Review</h1></div>
```

Use `p` or `h1`-`h6`.

### Rule 2: No CSS Gradients

PowerPoint native shapes do not map cleanly from CSS gradients. Use solid colors, images, or accept PDF export.

### Rule 3: Visual Decoration Goes On Containers

Do not put background, border, or shadow on text tags. Put those styles on wrapper `div`s.

Bad:

```html
<h2 class="boxed">Revenue</h2>
```

Good:

```html
<div class="boxed"><h2>Revenue</h2></div>
```

### Rule 4: Use `img` For Images

Do not use `background-image` on `div`.

Bad:

```html
<div style="background-image: url(hero.png)"></div>
```

Good:

```html
<img src="hero.png" alt="" />
```

## Template

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    * { box-sizing: border-box; }
    html, body {
      width: 960px;
      height: 540px;
      margin: 0;
      overflow: hidden;
      font-family: Arial, sans-serif;
      color: #171717;
      background: #f7f3ea;
    }
    .slide {
      position: relative;
      width: 960px;
      height: 540px;
      padding: 56px;
    }
    h1, h2, p { margin: 0; }
  </style>
</head>
<body>
  <section class="slide">
    <div class="eyebrow"><p>Section</p></div>
    <div class="headline"><h1>Slide title</h1></div>
    <div class="body"><p>Supporting text.</p></div>
  </section>
</body>
</html>
```

## Workflow

### Step 1: Decide Early

Ask whether editable PPTX is required before writing the deck. If yes, use these constraints from the start.

### Step 2: Build Slides

Use one HTML file per slide for multi-file decks.

### Step 3: Export

```bash
npm run deck:pptx -- --slides path/to/slides --out path/to/deck.pptx
```

### Step 4: Inspect In PowerPoint

Check:

- text is editable
- fonts fall back acceptably
- images are placed correctly
- no elements are missing
- line breaks are acceptable

## Choosing The Export Path

| Need | Use |
|---|---|
| maximum visual fidelity | PDF |
| editable text in PowerPoint | PPTX constraints |
| animation | video, not PPTX |
| complex CSS/WebGL/SVG effects | PDF or video |

## Retrofitting Existing Visual HTML

If the deck was already designed without PPTX constraints:

1. Tell the user export will not be perfectly faithful.
2. Offer two options: PDF with fidelity, or rebuilt PPTX-friendly slides.
3. If they choose PPTX, rewrite the HTML structure, do not ask the user to do it.
4. Deliver both PDF and PPTX when possible.

## Why These Constraints Exist

HTML/CSS and PowerPoint have different rendering models. A browser can render almost anything; editable PPTX requires mapping DOM elements into native PowerPoint shapes and text frames. The constraints make that mapping predictable.
