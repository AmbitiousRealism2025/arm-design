# Fact And Asset Protocol

Use this for branded, current, or factual design work.

## Principle

Facts before aesthetics. A beautiful artifact with invented product details is a velvet-lined error.

## Required Outputs For Branded Work

Create or update:

- `product-facts.md`
- `brand-spec.md`
- `asset-inventory.md` when there are multiple images, logos, videos, or fonts

## When Internet Access Is Available

Prefer sources in this order:

1. Official product or company pages.
2. Official press kits and brand guidelines.
3. Official app store screenshots or product screenshots.
4. Official docs, release notes, or help pages.
5. Public repositories or public-domain media.
6. Reputable secondary sources only when official sources are unavailable.

Record:

- source URL
- retrieval date
- what was used from the source
- license or usage note when visible
- local asset path

## When Internet Access Is Unavailable

- Search repo files and user-provided assets first.
- Ask for essential missing assets only when brand recognition or factual accuracy would materially fail without them.
- Use honest placeholders for non-blocking missing assets.
- Do not invent brand colors, product screenshots, quotes, specs, dates, or metrics.

## `product-facts.md` Template

```markdown
# Product Facts

Generated: YYYY-MM-DD

## Product Or Brand

Name:
Category:
Audience:
Current relevant version or status:

## Verified Facts

| Fact | Source | Confidence | Notes |
|---|---|---:|---|
|  |  | High/Medium/Low |  |

## Unverified Assumptions

-

## Do Not Claim

-
```

## `brand-spec.md` Template

```markdown
# Brand Spec

Generated: YYYY-MM-DD

## Assets

| Asset | Local path | Source | Usage note |
|---|---|---|---|
| Logo |  |  |  |

## Visual System

Colors:
Typography:
Logo treatment:
Imagery style:
UI motifs:
Motion style:

## Constraints

-
```

## Validation

Before high-fidelity design, check that the facts and assets support the visual direction. If they do not, state the gap and choose the safest fallback.
