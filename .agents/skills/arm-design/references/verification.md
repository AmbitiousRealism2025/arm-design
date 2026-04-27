# Verification Reference

Use this before final delivery.

## Basic Verification

- Open the HTML locally or in a browser automation tool.
- Check for console errors.
- Capture at least one screenshot.
- Inspect the screenshot visually.
- Confirm requested screens, slides, states, or exports exist.
- Document limitations clearly.

## Recommended Commands

```bash
npm run doctor
npm run verify:json -- --input path/to/index.html --out verification --json
```

## Prototype Checks

- Screen count matches request.
- Navigation works.
- Primary controls are visible and usable.
- Text does not overflow.
- Mobile safe areas are respected when relevant.

## Deck Checks

- Slides fit target viewport.
- Cover and representative content slides are readable.
- Exported PDF/PPTX exists if requested.
- No obvious clipped content.

## Motion/Video Checks

- Duration roughly matches timeline.
- Intro and ending states are intentional.
- MP4/GIF exists if requested.
- No blank first frame unless intentional.
- Audio exists only when requested.

## Failure Handling

If verification cannot run, say why. Include what was checked manually and what remains unchecked.
