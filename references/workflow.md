# Workflow

This is the default path from brief to delivery. The model should behave like a junior designer reporting to a manager: clarify, show assumptions early, then refine.

## When To Ask Questions

Ask questions when:

- the task is new
- the brief is vague
- there is no design context
- the artifact type is unclear
- the user asks for high-fidelity work without assets

You can skip questions when:

- the task is a small follow-up
- the user already provided a clear PRD, screenshots, assets, and scope
- the user explicitly says to proceed without questions

Ask in one batch. Do not ask one question at a time.

## Required Question Categories

### 1. Design Context

- Do you have a design system, UI kit, component library, or codebase?
- Do you have brand guidelines, colors, typography, or a logo?
- Do you have existing screenshots, product pages, decks, or marketing assets?
- Are there competitors or references to match or avoid?

### 2. Variations

- How many directions do you want?
- Should the differences be visual, layout, interaction, copy, density, motion, or content?
- Should the range stay close to expected, or span conservative to bold?

### 3. Fidelity And Scope

- Wireframe, mid-fidelity, or high-fidelity?
- One screen, one flow, full product overview, deck, or animation?
- What must be included?
- What is explicitly out of scope?

### 4. Tweaks

- Which parameters should be adjustable after delivery?
- Should the user be able to switch color, density, copy, layout, or mode?

### 5. Task-Specific Questions

Add at least four questions for the artifact type:

- Landing page: audience, conversion action, proof points, copy owner.
- App prototype: screens, flow, platform, must-have interactions.
- Deck: audience, talk length, slide count, source material, export format.
- Animation: duration, destination, key frames, audio, final formats.
- Infographic: source data, size, print/digital destination, citation rules.

## Question Template

```markdown
Before I start, I want to align on a few things. You can answer in a batch.

**Design Context**
1. Do you have a design system, brand guide, screenshots, or product references?
2. Is there a codebase or existing UI I should inspect?

**Variations**
3. How many directions do you want?
4. Which dimensions should vary: layout, visual style, interaction, color, copy, density, motion?

**Fidelity And Scope**
5. What fidelity should this be?
6. What screens, slides, scenes, or states must be covered?

**Tweaks**
7. What should be adjustable after delivery?

**Task-Specific**
8. ...
9. ...
```

## Pass 1: Assumptions And Placeholders

Start with a small artifact that documents assumptions and structure.

Example:

```html
<!--
Assumptions:
- Audience: product team reviewing the concept.
- Tone: precise, warm, and premium.
- Scope: one overview plus three detail screens.

Open questions:
- Final data is not available, so metrics are placeholders.
- Product screenshots are missing, so image slots are labeled.

If this direction is wrong, this is the cheapest time to change it.
-->
```

Then build visible placeholders: labeled regions, rough hierarchy, clear screen/slide/scene structure, and notes about missing data.

Show this early. Do not wait until the artifact is polished.

## Pass 2: Real Components And Variations

After direction is approved:

- replace placeholders with real content
- use starter components from `assets/`
- add variations or Tweaks
- apply the brand or design system
- keep labels and structure clear

Show progress halfway through if the artifact is substantial.

## Pass 3: Craft

Polish:

- typography scale
- spacing and alignment
- contrast
- responsive behavior
- motion timing
- interactive states
- copy fit
- edge cases

## Pass 4: Verification And Delivery

Before final response:

- run `scripts/verify.py`
- inspect screenshots
- check console/page errors
- manually inspect important states
- run click tests for interactive prototypes
- export requested formats only after the browser artifact is correct

Final summaries should be brief:

```markdown
Done: the 10-slide HTML deck is complete and verified.

Notes:
- Slide 4 still uses placeholder numbers.
- The PDF export is ready; editable PPTX requires the stricter template.
```

## Variation Logic

Good variations:

- explore different dimensions
- have short labels
- expose tradeoffs
- are not just color swaps
- let the user combine ideas

Useful dimensions:

- minimal vs editorial vs technical
- low density vs high density
- symmetric vs asymmetric
- serif-led vs sans-led
- static overview vs interactive flow
- quiet motion vs cinematic motion

Use `assets/design_canvas.jsx` for side-by-side variants and Tweaks for switchable variants.

## Handling Uncertainty

- If information is missing, ask or use labeled placeholders.
- If the user's references conflict, name the conflict and ask them to choose.
- If the task is too large, propose the first deliverable and continue from there.
- If a requested effect is technically expensive, explain the tradeoff and offer a simpler path.

Do not fake confidence.
