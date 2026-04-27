# Codex Guide

This repository is a local Codex-optimized skill for producing HTML-native design artifacts: prototypes, decks, animations, infographics, visual variations, and expert design reviews.

## Start Here

- Prefer the local skill package in `.agents/skills/arm-design/`.
- Read `.agents/skills/arm-design/SKILL.md` first, but do not bulk-load every reference file.
- To advertise the skill in Codex's global Available skills list, sync `.agents/skills/arm-design/` to `$CODEX_HOME/skills/arm-design` and restart Codex.
- Use the root `SKILL.md` as a compatibility mirror of the compact router.
- Route by task type using the local skill's focused references.
- Prefer the starter components in `assets/` over rewriting common shells such as iPhone frames, deck stages, animation stages, or variation canvases.
- Keep generated project work in a task-specific folder. Do not scatter outputs in the skill root or `~/Downloads`.

## Codex Workflow

- Use a plan for multi-step work, and update it as checkpoints complete.
- If `SKILL.md` says `WebSearch`, use Codex web browsing/search before making factual claims about current products, brands, releases, specs, people, or events.
- If `SKILL.md` mentions subagents, use them only when the user explicitly authorizes parallel agent work. Otherwise generate variants serially.
- Ask clarifying questions for new or ambiguous design briefs, but if the user says to proceed, document assumptions in the artifact and continue.
- Before editing files, inspect nearby examples and existing assets. Keep docs and tool-facing text English-first.
- Use `MODEL_PROFILES.md` for reasoning-budget guidance.

## Verification Commands

Install local Node dependencies when needed:

```bash
npm install
npm run playwright:install
```

Install Python verification dependencies when needed:

```bash
npm run verify:setup
```

Run local prerequisite checks:

```bash
npm run doctor
```

Smoke-check an HTML artifact:

```bash
python3 scripts/verify.py path/to/design.html --viewports 1440x900,375x667
```

Package-script equivalent:

```bash
npm run verify -- path/to/design.html --viewports 1440x900,375x667
```

JSON verification path:

```bash
npm run verify:json -- --input path/to/design.html --out verification --json
```

For generated visual work, always inspect screenshots in the output folder and fix visible overlap, blank render, console errors, broken interactions, or cropped fixed-size scenes before delivery.

## Export Commands

Render an animation to MP4:

```bash
npm run render-video -- path/to/animation.html --duration=30
```

Create 60fps MP4 and GIF derivatives:

```bash
npm run formats -- path/to/animation.mp4
```

Add BGM:

```bash
npm run music -- path/to/animation-60fps.mp4 --mood=tech
```

Export a multi-file HTML deck:

```bash
npm run deck:pdf -- --slides path/to/slides --out path/to/deck.pdf
npm run deck:pptx -- --slides path/to/slides --out path/to/deck.pptx
```

## Repository Hygiene

- Do not commit generated screenshots, `.video-tmp-*`, `node_modules`, personal asset indexes, or one-off scratch scripts.
- Keep private user assets outside the skill directory unless the user explicitly wants them committed.
- Large binary assets already exist here for BGM/SFX; avoid adding more unless they are reusable skill assets.
- If changing public install instructions, keep fork-specific commands separate from upstream release/demo asset URLs so README media does not break.
