# Design Context

High-fidelity design should grow from context. Use this reference when the user has a product, brand, codebase, or existing material.

## What Counts As Context

- design system or UI kit
- existing components in the codebase
- brand guidelines
- logo files
- product screenshots
- marketing site
- previous decks or reports
- product documentation
- competitor references
- known design systems in the same category

## Context Gathering Flow

### Step 1: Ask

Ask for:

- design system or UI kit
- brand guidelines
- logo and product assets
- screenshots or links
- codebase paths
- references to match or avoid

### Step 2: Search The Workspace

If the user says there is no context, inspect the project:

```bash
rg --files
rg -n "brand|theme|tokens|colors|font|logo|design|figma|storybook|tailwind|css"
```

Look for:

- `tailwind.config.*`
- CSS variables
- theme files
- component libraries
- Storybook
- existing layouts
- screenshots or images

### Step 3: Search Public Sources

For public products or brands, verify current facts and official assets first.

Useful sources:

- official website
- brand or press page
- product page
- app store screenshots
- documentation pages
- official launch videos

For a public URL, capture a screenshot:

```bash
npx playwright screenshot https://example.com screenshot.png --viewport-size=1920,1080
```

### Step 4: Extract A System

From the context, identify:

- primary colors
- neutrals
- typography
- spacing rhythm
- border radius
- density
- icon style
- motion style
- layout conventions
- content tone

Then explain the system before building:

```markdown
I found a restrained B2B visual system: warm gray background, dark ink, one green accent, compact cards, 8px radius, and dense tables. I will keep the prototype quiet and operational rather than making a marketing hero page.
```

## If There Is No Context

Use a deliberate fallback instead of generic design.

1. Pick a relevant design direction from `references/design-styles.md`.
2. Choose a known product category skeleton.
3. Use a distinctive type pairing.
4. Keep colors restrained and intentional.
5. Use honest placeholders for missing assets.
6. Document assumptions in the artifact.

Fallback examples:

- SaaS dashboard: compact operational layout, muted neutrals, one accent, dense data.
- Editorial deck: strong serif display, quiet body type, large margins, rhythm between text and visual slides.
- Consumer app: device frame, real content, few screens, careful interaction states.
- Technical animation: stage timeline, clear phases, no decorative dashboard chrome.

## Codebase Import Strategy

### Small Codebase

Read key files directly:

- global CSS
- theme/tokens
- components
- app routes
- screenshots

### Medium Codebase

Use search first:

```bash
rg -n "theme|tokens|color|font|Button|Card|Layout|Header"
```

Then read only relevant files.

### Large Codebase

Avoid broad reads. Identify framework, design system, and target surface first. Use screenshots if available.

## Working With Figma Or Static Designs

If the user provides a Figma file, screenshot, or design export:

- identify layout grid
- extract type scale
- sample color values
- note component structure
- preserve visual hierarchy
- do not blindly clone artifacts that are clearly outdated

## Final Reminder

If you skip context, quality drops. If context is missing, say so and make the fallback explicit.
