---
name: arm-design
description: Use this skill when the user asks Codex to create, improve, or critique high-fidelity visual artifacts in HTML: clickable app/web prototypes, 1920x1080 slide decks, motion-design animations, MP4/GIF exports, design variants, infographics, or visual-direction exploration. Do not use for production web apps, backend features, SEO work, ordinary frontend bug fixes, or general website implementation unless the user asks for a visual artifact. Start from verified facts and brand/product assets, build HTML-first, and verify visually before delivery.
---

# Arm Design

Use this skill for high-fidelity visual deliverables made primarily in HTML.

## Always

- Identify the artifact type: prototype, deck, motion/video, infographic, variant exploration, or critique.
- If the task names a current product, brand, person, event, version, or technical spec, verify facts before designing.
- If the task involves a brand or product, create or update `product-facts.md` and `brand-spec.md` before high-fidelity work.
- Build HTML-first unless the user explicitly requests another format.
- Apply the anti-slop rules in `references/content-guidelines.md`.
- Use starter components from `assets/` before rebuilding frames, deck shells, variation canvases, or animation engines.
- Run visual verification before final delivery whenever the environment allows it.
- Record assumptions only when they affect the artifact.
- Use design rationale, not private reasoning traces.

## Do Not Use This Skill For

- Backend implementation.
- Production SEO work.
- Ordinary frontend bug fixes.
- Generic website implementation where the user did not ask for visual direction or a design artifact.
- Pure copywriting with no visual output.

## Interaction Modes

Default to **Execute Mode**. Make reasonable, reversible assumptions and proceed.

Use **Interview Mode** only when the user explicitly wants to choose direction first, or when the prompt is too vague to create a useful first draft.

Use **Checkpoint Mode** for decks of five or more pages, branded launch animations, client-facing visual systems, or other high-risk deliverables. Create a small style proof before scaling.

## Load References By Task

- Ambiguous request: `references/workflow.md`
- Brand or product work: `references/design-context.md`
- App or mobile prototype: `references/react-setup.md` + `assets/ios_frame.jsx` or `assets/android_frame.jsx`
- Slide deck: `references/slide-decks.md`
- Editable PPTX: `references/editable-pptx.md`
- Animation or video: `references/animations.md` + `references/animation-pitfalls.md` + `references/video-export.md`
- Audio/SFX: `references/audio-design-rules.md` + `references/sfx-library.md`
- Review or critique: `references/critique-guide.md`
- Visual direction: `references/design-styles.md` + `assets/showcases/INDEX.md`
- Final validation: `references/verification.md`

## Done When

Prototype: source HTML opens locally, all requested screens exist, key interactions work, a verification screenshot exists, and console errors are absent or documented.

Deck: HTML deck works in browser, a representative style proof exists before bulk production for decks of five or more pages, requested exports are produced, and readability is checked at target viewport.

Animation/video: timeline plan exists, HTML animation runs locally, requested video/GIF/audio exports succeed or limitations are documented, and final file paths are listed.

Critique: scores or judgments are evidence-backed, fixes are prioritized, and quick wins are actionable.
