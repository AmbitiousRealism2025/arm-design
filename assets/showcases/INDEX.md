# Design Philosophy Showcases

This folder indexes 24 prepared visual examples: 8 scene types times 3 styles.

Use these examples during the Direction Advisor phase to show what a style looks like in practice.

## Style Families

| Code | School | Style | Visual Character |
|---|---|---|---|
| Pentagram | Information Architecture | Pentagram / Michael Bierut | restrained black/white, Swiss grid, strong type hierarchy, red accent |
| Build | Minimalism | Build Studio | luxury whitespace, subtle weight changes, warm gold, refined restraint |
| Takram | Eastern Philosophy | Takram | soft technology, natural colors, rounded forms, diagrams as art |

## Scene Matrix

### Content Design

| # | Scene | Size | Pentagram | Build | Takram |
|---|---|---|---|---|---|
| 1 | Article cover | 1200x510 | `cover/cover-pentagram` | `cover/cover-build` | `cover/cover-takram` |
| 2 | PPT data slide | 1920x1080 | `ppt/ppt-pentagram` | `ppt/ppt-build` | `ppt/ppt-takram` |
| 3 | Vertical infographic | 1080x1920 | `infographic/infographic-pentagram` | `infographic/infographic-build` | `infographic/infographic-takram` |

### Website Design

| # | Scene | Size | Pentagram | Build | Takram |
|---|---|---|---|---|---|
| 4 | Personal homepage | 1440x900 | `website-homepage/homepage-pentagram` | `website-homepage/homepage-build` | `website-homepage/homepage-takram` |
| 5 | AI tool directory | 1440x900 | `website-ai-nav/ainav-pentagram` | `website-ai-nav/ainav-build` | `website-ai-nav/ainav-takram` |
| 6 | AI writing tool | 1440x900 | `website-ai-writing/aiwriting-pentagram` | `website-ai-writing/aiwriting-build` | `website-ai-writing/aiwriting-takram` |
| 7 | SaaS landing page | 1440x900 | `website-saas/saas-pentagram` | `website-saas/saas-build` | `website-saas/saas-takram` |
| 8 | Developer docs | 1440x900 | `website-devdocs/devdocs-pentagram` | `website-devdocs/devdocs-build` | `website-devdocs/devdocs-takram` |

Each entry has an `.html` source file. Some releases may also include screenshot assets.

## Usage

When recommending a direction, show the closest prepared example:

```text
This is what the Pentagram route looks like for an article cover: cover/cover-pentagram.
This is what the Takram route looks like for a data slide: ppt/ppt-takram.
```

Scene matching priority:

1. Exact match to the user's requested artifact.
2. Closest similar scene.
3. If no match is useful, skip showcases and generate a fresh mini-demo.

For side-by-side comparison, show the same scene in all three styles:

1. Pentagram: rational and restrained.
2. Build: luxurious and minimal.
3. Takram: soft and warm.

## Scene Notes

### Article Cover

Topic: agent workflow architecture.

- Pentagram: giant numeral, Swiss grid, red accent.
- Build: thin display type, large whitespace, warm gold line.
- Takram: radial node diagram, warm paper background.

### PPT Data Slide

Topic: open model coding capability metrics.

- Pentagram: large metric anchor and stark comparison bars.
- Build: thin numerals and refined warm accents.
- Takram: radar chart, layered soft colors, rounded data cards.

### Vertical Infographic

Topic: memory system compression.

- Pentagram: giant before/after numbers and numbered blocks.
- Build: whitespace, soft cards, warm connector lines.
- Takram: ring chart, organic flow lines, soft translucent cards.

### Personal Homepage

Topic: independent developer portfolio.

- Pentagram: large name, grid columns, editorial numbers.
- Build: refined navigation, floating stats, thin type.
- Takram: paper texture, small avatar, hairline dividers, asymmetry.

### AI Tool Directory

Topic: catalog of AI tools.

- Pentagram: square search, numbered list, uppercase categories.
- Build: rounded search, refined white cards, pill tags.
- Takram: organic staggered cards, soft labels, connected categories.

### AI Writing Tool

Topic: writing assistant.

- Pentagram: large headline, wireframe editor, grid features.
- Build: floating editor card, warm CTA, premium writing mood.
- Takram: poetic serif title, organic editor, process diagram.

### SaaS Landing Page

Topic: business intelligence platform.

- Pentagram: black/white split, structured dashboard, large metric.
- Build: floating dashboard cards, area chart, warm gradient accent.
- Takram: rounded bars, process nodes, earth-tone softness.

### Developer Docs

Topic: API gateway documentation.

- Pentagram: left nav, square code blocks, red string highlight.
- Build: centered floating code card, soft shadow, warm icons.
- Takram: beige code block, flow connections, dashed feature cards.

## Version

- Version: 1.0
- Created: 2026-02-13
- Intended use: Direction Advisor phase.
