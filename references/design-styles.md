# Design Style Library

Use this library when the brief is vague or the user asks for style directions.

## How To Use

Recommend three directions from different schools. For each direction, include:

- name
- best-fit use case
- mood
- typography
- color behavior
- layout behavior
- motion behavior, if relevant
- what to avoid

Do not use a style name as a magic prompt. Translate it into concrete visual rules.

## Quick Matrix

| School | Good For | Avoid When |
|---|---|---|
| Information Architecture | SaaS, decks, docs, data, explainers | user wants expressive art direction |
| Motion Poetics | launch films, interactive demos, product stories | static dense documents |
| Minimalism | premium brands, portfolios, editorial decks | product needs obvious density |
| Experimental Avant-Garde | campaigns, creative tools, identity moments | enterprise trust and clarity |
| Eastern Philosophy | calm tools, culture, wellness, craft, reflective decks | user needs aggressive conversion |

## School 1: Information Architecture

### 01. Pentagram / Michael Bierut

Clear hierarchy, typographic confidence, strong grid, almost no decoration.

Use for:

- brand systems
- serious decks
- institutional content
- product narratives that need authority

Rules:

- strong typographic contrast
- disciplined grid
- restrained palette
- iconic but simple visual devices

Avoid:

- gradients
- decorative icons
- over-animated UI

### 02. Stamen / Data Poetics

Data becomes landscape. Analytical but emotional.

Use for:

- maps
- data stories
- science or climate visuals
- exploratory interfaces

Rules:

- data-driven geometry
- layered density
- fine lines
- subtle color fields

Avoid:

- fake data
- purely decorative charts

### 03. Information Architects

Content first. Typography and whitespace do the work.

Use for:

- essays
- technical docs
- product explanations
- knowledge tools

Rules:

- strong reading rhythm
- quiet interface
- few visual effects
- careful margins

Avoid:

- marketing noise
- image filler

### 04. Fathom / Scientific Narrative

Explain complex systems with clarity and care.

Use for:

- scientific explainers
- technical decks
- process diagrams
- policy/data reports

Rules:

- diagrams over decoration
- labeled structure
- evidence and source notes
- calm color coding

Avoid:

- unverified claims
- overly cute metaphors

## School 2: Motion Poetics

### 05. Locomotive / Scroll Narrative

Editorial web energy, spatial transitions, cinematic scrolling.

Use for:

- product stories
- launch pages
- immersive demos

Rules:

- full-bleed sections
- strong scroll rhythm
- oversized type
- transition choreography

Avoid:

- tiny dashboard panels
- generic card grids

### 06. Active Theory / WebGL Energy

Expressive, immersive, high interaction.

Use for:

- experimental sites
- creative technology
- campaign pieces

Rules:

- pointer-reactive motion
- depth and light
- procedural texture
- strong scene changes

Avoid:

- business dashboards
- accessibility-insensitive effects

### 07. Field.io / Algorithmic Aesthetics

Code, nature, and systems visualized beautifully.

Use for:

- AI systems
- generative design
- technical art
- research visualizations

Rules:

- particles or fields with meaning
- rhythm and emergence
- restrained palette
- process visible

Avoid:

- meaningless sparkle

### 08. Resn / Narrative Interaction

Playful, surreal, tactile interaction.

Use for:

- brand activations
- playful product demos
- creative portfolios

Rules:

- interaction has personality
- transitions surprise
- tactile details

Avoid:

- serious enterprise workflows

## School 3: Minimalism

### 09. Experimental Jetset

Conceptual, typographic, direct.

Use for:

- posters
- stark identity pieces
- manifesto decks

Rules:

- type as image
- limited palette
- conceptual repetition

Avoid:

- soft SaaS polish

### 10. Swiss Grid

Precise, rational, modular.

Use for:

- structured decks
- data-heavy communication
- product comparisons

Rules:

- strict grid
- aligned baseline
- limited type sizes
- strong negative space

Avoid:

- random asymmetry

### 11. Build / Contemporary Minimal Brand

Quiet, premium, well-spaced brand systems.

Use for:

- product identity
- premium landing pages
- portfolios

Rules:

- small set of components
- understated color
- excellent spacing
- restrained type contrast

Avoid:

- generic beige without a concept

### 12. Sagmeister & Walsh / Joyful Minimalism

Simple ideas with a memorable twist.

Use for:

- campaign ideas
- editorial visuals
- human-centered design

Rules:

- one strong visual trick
- clear composition
- wit or warmth

Avoid:

- many small effects

## School 4: Experimental Avant-Garde

### 13. Zach Lieberman / Code Poetry

Human, generative, expressive.

Use for:

- interactive art
- education
- creative coding demos

Rules:

- visible algorithmic behavior
- organic motion
- simple inputs, rich outputs

Avoid:

- random particles with no role

### 14. Raven Kwok / Parametric Form

Dense generative structure, often abstract.

Use for:

- AI visualization
- motion identity
- technical visuals

Rules:

- repeated geometry
- parameter-driven variation
- high craft in motion

Avoid:

- low-performance scenes

### 15. Ash Thorp / Cinematic Tech

Dark, precise, cinematic interface fiction.

Use for:

- launch films
- concept interfaces
- sci-fi product mood

Rules:

- high contrast
- glow used sparingly
- cinematic framing
- screen language

Avoid:

- ordinary SaaS features

### 16. Territory Studio / Fictional UI

Complex screen systems with narrative credibility.

Use for:

- futuristic dashboards
- command centers
- product concept films

Rules:

- layers of functional detail
- plausible data density
- modular interface panels

Avoid:

- fake numbers and unreadable noise

## School 5: Eastern Philosophy

### 17. Takram / Speculative Design

Research-led, thoughtful, calm, future-facing.

Use for:

- concept decks
- product strategy
- design research

Rules:

- subtle visuals
- diagrams and prototypes
- reflective tone
- precise language

Avoid:

- loud conversion design

### 18. Kenya Hara / Emptiness

Whitespace, material quietness, sensory restraint.

Use for:

- culture
- wellness
- craft
- premium editorial pieces

Rules:

- large empty space
- soft neutrals
- one tactile detail
- slow rhythm

Avoid:

- data-dense products

### 19. Irma Boom / Book Architecture

Pages as objects, editorial sequencing, material surprise.

Use for:

- reports
- books
- longform decks
- archival storytelling

Rules:

- strong page sequence
- scale shifts
- physical reading rhythm
- unexpected crops

Avoid:

- one-screen app prototypes

### 20. Neo Shen / Eastern Light And Shadow

Atmospheric, poetic, cinematic, image-led.

Use for:

- cultural campaigns
- filmic brand pieces
- reflective animations

Rules:

- soft light
- shadow and negative space
- slow reveals
- restrained type

Avoid:

- operational interfaces

## Prompt Construction

Write prompts and implementation notes using concrete traits:

Bad:

```text
Make it minimalist.
```

Good:

```text
Use a Swiss-grid layout with a 12-column structure, black ink on warm off-white, one red accent, generous margins, and type-led hierarchy. No gradients, no decorative icons.
```

## Quality Control

Before choosing a style, check:

- Does it fit the audience?
- Does it fit the artifact type?
- Does it have enough content support?
- Does it conflict with the brand?
- Can it be built and verified within the time available?
