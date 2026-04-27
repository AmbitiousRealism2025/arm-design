# Slide Decks

HTML is the source format for slide decks. PDF and PPTX are exports.

## First Checkpoint: Delivery Format

Ask early:

- Is the primary deliverable browser-presented HTML?
- Do you need PDF?
- Do you need editable PPTX?
- What is the audience and talk length?
- How many slides?

If editable PPTX is required, follow `references/editable-pptx.md` from the beginning.

## HTML-First Decision Tree

```text
Need browser presentation only
  -> HTML deck

Need high-fidelity static export
  -> HTML deck + PDF

Need editable PowerPoint text
  -> PPTX-friendly HTML from the start + PPTX export

Need both fidelity and editability
  -> deliver PDF for fidelity and PPTX for editing, with caveats
```

## Showcase Before Scaling

For decks of five slides or more, build two representative slides first:

1. A title or section slide.
2. A dense content or data slide.

Use those to establish:

- typography
- grid
- spacing
- visual density
- figure style
- section rhythm

Then scale the system across the rest of the deck.

## Architecture Choice

### Multi-File Deck: Default For Larger Decks

Use for:

- 10+ slides
- lectures
- workshops
- academic decks
- many contributors
- parallel slide work

Structure:

```text
deck/
├── index.html
├── slides/
│   ├── 01-title.html
│   ├── 02-agenda.html
│   └── 03-section.html
└── shared/
    ├── tokens.css
    └── assets/
```

Copy `assets/deck_index.html` to `index.html` and edit its manifest.

Advantages:

- each slide can be opened directly
- CSS does not leak between slides
- verification is simple
- parallel work is easier

### Single-File Deck: Small Decks

Use `assets/deck_stage.js` for:

- 10 or fewer slides
- pitch decks
- shared state across slides
- fast prototypes

Hard rules:

- script tag for `deck_stage.js` must be placed after the `deck-stage` markup when required by the component.
- active slide layout must be applied to the active slide state, not only base sections.
- fixed dimensions need auto-scale/letterboxing.

## Slide Design Rules

### One System

Define:

- canvas size
- type scale
- colors
- margins
- grid
- image treatment
- chart style
- section divider style

### Common Layouts

Use variety:

- title
- section divider
- problem
- process
- comparison
- data/chart
- quote
- image-led
- summary
- closing

Do not repeat the same text-left/image-right layout for every slide.

### Scale

Deck text must work at presentation distance.

Typical starting points:

- title: 72-120px
- section title: 56-96px
- body: 28-40px
- footnote: 18-22px

Adjust for density and room size.

### Rhythm

Alternate dense and quiet slides. Give the audience breathing space after data-heavy slides.

### Data Slides

Keep:

- one primary message
- clear labels
- visible units
- source note
- restrained color coding

## Speaker Notes

Use notes when the deck supports a talk.

Good notes:

- explain intent
- cue transitions
- include key verbal points
- do not repeat every word on the slide

## PDF Export

Multi-file deck:

```bash
npm run deck:pdf -- --slides deck/slides --out deck/output.pdf
```

Single-file deck-stage:

```bash
npm run deck:stage-pdf -- --html deck/index.html --out deck/output.pdf
```

PDF keeps visual fidelity and vector text, but it is not text-editable like native PowerPoint.

## PPTX Export

```bash
npm run deck:pptx -- --slides deck/slides --out deck/output.pptx
```

Only use this path when the slides follow `references/editable-pptx.md`.

## Common Pitfalls

### Emoji Missing In Chromium/PDF

Use icons or inline SVG instead of relying on system color emoji.

### Dependency Errors

Run:

```bash
npm install
npm run playwright:install
```

### Fonts Not Loaded Before Export

Wait for fonts before screenshots/PDF export or self-host fonts.

### Too Much Content

Split dense content into multiple slides. A deck is not a report page.

### CSS Leakage

Use multi-file architecture when slides have very different layouts.

## Verification Checklist

- first and last slide render correctly
- every slide has readable text
- no overflow or cropped content
- images load
- charts are legible
- keyboard navigation works
- PDF export reviewed
- PPTX export opened when requested
- slide order is correct

## Final Delivery

Tell the user:

- where the HTML deck is
- whether PDF/PPTX was exported
- any caveats about fonts, editability, or placeholder data
