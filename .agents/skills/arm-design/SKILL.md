---
name: arm-design
description: "Use when the user asks Codex to design, build, improve, or critique a polished visual artifact where visual taste, hierarchy, typography, layout, brand feel, or marketing positioning are main evaluation criteria. Covers premium marketing sites, one-page landing pages, design taste tests, frontend visual design, polished product pages, restrained premium software, clickable prototypes, browser-native slide decks, motion animations, MP4/GIF exports, design variants, infographics, and expert reviews. Use this before imagegen; call imagegen only from inside this workflow when a raster asset materially improves the page. Do not use for backend features, production SEO, or ordinary frontend bug fixes unless the user asks for visual direction."
---

# Arm Design

Use this skill for high-fidelity visual deliverables made primarily in HTML.

## Always

- Identify the artifact type: prototype, deck, motion/video, infographic, variant exploration, or critique.
- If the task names a current product, brand, person, event, version, or technical spec, verify facts before designing.
- If the task involves a brand or product, create or update `product-facts.md` and `brand-spec.md` before high-fidelity work.
- Build HTML-first unless the user explicitly requests another format.
- Use this workflow before `imagegen`; call `imagegen` only when a bespoke raster asset materially improves the artifact.
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

- Ambiguous request: `references/router.md`
- Brand or product work: `references/fact-and-asset-protocol.md`
- Vague visual direction: `references/design-direction-consultant.md`
- App or mobile prototype: `references/app-prototypes.md`
- Slide deck: `references/slide-decks.md`
- Animation or video: `references/motion-video.md`
- Review or critique: `references/critique.md`
- Final validation: `references/verification.md`
- Any design artifact: apply `references/anti-ai-slop.md`

## Done When

Prototype: source HTML opens locally, all requested screens exist, key interactions work, a verification screenshot exists, and console errors are absent or documented.

Deck: HTML deck works in browser, a representative style proof exists before bulk production for decks of five or more pages, requested exports are produced, and readability is checked at target viewport.

Animation/video: timeline plan exists, HTML animation runs locally, requested video/GIF/audio exports succeed or limitations are documented, and final file paths are listed.

Critique: scores or judgments are evidence-backed, fixes are prioritized, and quick wins are actionable.
