# Verification

Use this reference before delivering any generated HTML artifact.

## Checklist

### 1. Browser Render

The file must open without a blank screen.

```bash
open -a "Google Chrome" "/path/to/design.html"
```

Or use the verification script.

### 2. Console And Page Errors

```bash
python3 scripts/verify.py path/to/design.html
```

Or:

```bash
npm run verify -- path/to/design.html
```

The script:

1. Opens the HTML in headless Chromium.
2. Captures viewport and full-page screenshots.
3. Collects console warnings/errors.
4. Reports page errors.

### 3. Multiple Viewports

For responsive work:

```bash
python3 scripts/verify.py design.html --viewports 1920x1080,1440x900,768x1024,375x667
```

### 4. Interaction

Static screenshots do not prove interaction. For prototypes, manually click the main path or write a small Playwright check.

Minimum checks:

- main navigation
- important button or annotation
- tab or mode switch

### 5. Slide Decks

Capture slide screenshots:

```bash
python3 scripts/verify.py deck.html --slides 10
```

## Setup

```bash
npm install
npm run playwright:install
python3 -m pip install -r requirements.txt
python3 -m playwright install chromium
```

## Screenshot Patterns

Viewport screenshot:

```python
page.screenshot(path="viewport.png")
```

Full page:

```python
page.screenshot(path="full.png", full_page=True)
```

Element:

```python
element = page.query_selector(".hero")
element.screenshot(path="hero.png")
```

Retina:

```python
context = browser.new_context(device_scale_factor=2)
```

Wait for animation:

```python
page.wait_for_timeout(2000)
```

## Common Failures

### Blank Page

Check:

- Babel or React failed to load
- JSX syntax error
- undefined component
- scope not exported through `window`
- style object collision

### Broken Animation

Check:

- font loading
- layout thrash
- missing `window.__ready`
- wrong duration
- scene elements not reset

### Wrong Fonts

Wait for webfonts or self-host them.

### Layout Misalignment

Check:

- `box-sizing: border-box`
- CSS reset
- grid tracks
- fixed dimensions
- responsive constraints
- text overflow

## Delivery Rule

Always inspect the screenshots yourself. Verification is not just "script exited 0"; it is the designer's second pair of eyes.
