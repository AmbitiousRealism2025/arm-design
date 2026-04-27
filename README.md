# Arm Design

Arm Design is an HTML-native design skill for agentic coding environments. It helps Codex, Claude Code, Cursor, and other markdown-skill-capable agents create high-fidelity design artifacts directly in files:

- clickable app and web prototypes
- browser-native slide decks
- motion design and launch videos
- design direction explorations
- print-grade infographics and data visuals
- expert design critiques

The fork is optimized for Codex: it includes an `AGENTS.md` onboarding guide, local verification commands, package scripts, and English-first docs.

```bash
npx skills add AmbitiousRealism2025/arm-design
```

Upstream release demo media is still hosted under `alchaincyf/huashu-design`; install this fork when you want the Codex-oriented version in this repository.

## What You Can Ask For

```text
Make a keynote for AI psychology. Give me three style directions to pick from.
Build an iOS prototype for a Pomodoro app: four screens, actually clickable.
Turn this product flow into a 60-second launch animation. Export MP4 and GIF.
Run a five-dimension expert review on this design.
```

No Figma plugin, no canvas product, no custom UI. You talk to the agent and it writes HTML/CSS/JS, verifies the result, and exports the requested artifact.

## Capabilities

| Capability | Deliverable | Typical Time |
|---|---|---|
| Interactive prototypes | Single-file HTML, real device frames, clickable flows, Playwright-verified | 10-15 min |
| Slide decks | HTML deck plus optional PDF or editable PPTX | 15-25 min |
| Motion design | MP4, 60fps derivative, GIF, optional BGM and SFX | 8-12 min |
| Design variations | Three or more directions, side-by-side or switchable with Tweaks | 10 min |
| Infographics | Print-quality layout, exportable to PDF/PNG/SVG | 10 min |
| Direction advisor | Three differentiated style routes from the design philosophy library | 5 min |
| Expert critique | 0-10 scoring across five dimensions with concrete fixes | 3 min |

## Demo Gallery

The media below comes from the upstream release assets so GitHub can render the gallery reliably.

### Design Direction Advisor

The fallback path for vague briefs: pick three differentiated directions, generate visual demos, then let the user choose.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/w3-fallback-advisor-en.gif" width="100%"></p>

### iOS App Prototype

Pixel-accurate iPhone frame, state-driven multi-screen navigation, real content imagery, and Playwright click tests.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/c1-ios-prototype-en.gif" width="100%"></p>

### Motion Design Engine

Stage and Sprite timeline primitives with `useTime`, `useSprite`, `interpolate`, and easing helpers.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/c3-motion-design-en.gif" width="100%"></p>

### HTML Slides to Editable PPTX

HTML decks for browser presentation, with optional conversion into editable PowerPoint text frames when the HTML follows the strict PPTX constraints.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/c2-slides-pptx-en.gif" width="100%"></p>

### Tweaks

Pure frontend live parameters for color, typography, density, and layout, persisted with `localStorage`.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/c4-tweaks-en.gif" width="100%"></p>

### Infographics

Magazine-grade typography, CSS Grid layout, real data, and export-friendly composition.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/c5-infographic-en.gif" width="100%"></p>

### Expert Review

Scores design work across philosophy, hierarchy, craft, functionality, and originality, then outputs Keep/Fix/Quick Wins.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/c6-expert-review-en.gif" width="100%"></p>

### Junior Designer Workflow

The agent starts with assumptions, placeholders, and reasoning, shows work early, then iterates.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/w2-junior-designer-en.gif" width="100%"></p>

### Core Asset Protocol

For specific brands, the agent collects logos, product shots, UI screenshots, colors, fonts, and brand rules before designing.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/w1-brand-protocol-en.gif" width="100%"></p>

## Core Mechanics

### Fact Verification First

For specific products, technologies, people, events, versions, specs, or release dates, the agent must verify current facts before assuming anything. This is especially important for 2024+ product launches and specs.

### Core Asset Protocol

When a task involves a specific brand or product, the agent must collect and freeze reusable assets before making high-fidelity work:

1. Ask for available assets.
2. Search official channels.
3. Download or capture assets by type.
4. Verify quality and extract colors/fonts from real sources.
5. Write a `brand-spec.md` with asset paths and CSS variables.

Asset priority is logo first, then product renders for physical products, then UI screenshots for digital products. Color values and fonts support recognition, but they do not replace the primary assets.

### Direction Advisor

When the brief is too vague, the skill recommends three design directions from distinct design schools, shows why each route fits, and can generate three demos before continuing into the main workflow.

### Junior Designer Workflow

The default behavior is not a heroic one-shot. The agent clarifies the brief, states assumptions, creates an early placeholder version, asks for feedback, then fills the design, adds variations, and verifies the result.

### Anti AI-Slop Rules

Avoid the familiar lowest-common-denominator AI look: purple gradients, decorative emoji, generic rounded cards with left accent borders, fake SVG people, Inter as display typography, and CSS silhouettes standing in for real product images. Use real context, real assets, careful typography, CSS Grid, and restrained but intentional detail.

## Codex Quick Start

Read [AGENTS.md](AGENTS.md) first when working in this repo. For local Codex use, the optimized skill package lives at:

```text
.agents/skills/arm-design/
```

The root [SKILL.md](SKILL.md) is kept as a compact compatibility router, while `.agents/skills/arm-design/SKILL.md` is the local day-to-day skill entry point.

To expose the optimized skill in Codex's **Available skills** list, sync it into `CODEX_HOME` and restart Codex:

```bash
mkdir -p ~/.codex/skills/arm-design
cp -R .agents/skills/arm-design/. ~/.codex/skills/arm-design/
```

Install local tooling:

```bash
npm install
npm run playwright:install
npm run verify:setup
```

Check local prerequisites:

```bash
npm run doctor
```

Verify an HTML artifact:

```bash
npm run verify -- path/to/design.html --viewports 1440x900,375x667
```

JSON verification for agents and evals:

```bash
npm run verify:json -- --input path/to/design.html --out verification --json
```

Render an animation:

```bash
npm run render-video -- path/to/animation.html --duration=30
npm run formats -- path/to/animation.mp4
npm run music -- path/to/animation-60fps.mp4 --mood=tech
```

Export a deck:

```bash
npm run deck:pdf -- --slides path/to/slides --out path/to/deck.pdf
npm run deck:pptx -- --slides path/to/slides --out path/to/deck.pptx
```

Run the lightweight JSON smoke check:

```bash
npm run smoke:json
```

## Local Skill Package

```text
.agents/skills/arm-design/
├── SKILL.md                 # compact local router
├── references/              # focused guidance loaded on demand
├── scripts/                 # doctor + JSON verification helpers
├── evals/                   # trigger, output, toolchain, and review eval seeds
└── fixtures/                # minimal verification fixture
```

The `.agents` skill package is optimized for local personal Codex use. It keeps activation cheap and routes deeper design guidance into focused references instead of loading the entire design system every time.

Reasoning-budget guidance lives in [MODEL_PROFILES.md](MODEL_PROFILES.md). Additional optimization notes live in [docs/codex-optimization-notes.md](docs/codex-optimization-notes.md).

## Repository Structure

```text
arm-design/
├── .agents/                  # Local Codex skill package
├── AGENTS.md                  # Codex onboarding
├── MODEL_PROFILES.md          # Reasoning-budget guidance
├── SKILL.md                   # Compatibility skill router
├── README.md                  # User-facing overview
├── assets/                    # Starter components, BGM, SFX, showcases
├── demos/                     # Demo HTML files
├── docs/                      # Codex optimization notes
├── references/                # Task-specific deep dives
├── scripts/                   # Verification, video, deck export tools
├── package.json               # Local tooling commands
└── test-prompts.json          # Regression prompts for the skill behavior
```

## Limitations

- This is not a production web app framework.
- Fully editable PPTX export requires strict HTML constraints from the beginning.
- Complex 3D, physics simulations, and full After Effects style compositing are outside the intended boundary.
- Blank-slate brand work is always lower quality than work grounded in real assets and design context.

## License

See [LICENSE](LICENSE).
