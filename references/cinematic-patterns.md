# Cinematic Patterns

Use this reference for workflow demo animations: skill demos, product onboarding, API flows, and agent task execution.

## Problem

Workflow demos often become boring step lists. A good cinematic demo must show the workflow clearly while still feeling designed.

## Pattern A: Dashboard Plus Cinematic Overlay

Use two layers:

1. A static dashboard that explains the whole workflow at rest.
2. A cinematic overlay that animates through the key story.

The viewer should understand the workflow even before pressing play.

## Pattern B: Scene-Based, Not Step-Based

Do not animate every checklist item evenly. Group steps into scenes:

- input
- analysis
- transformation
- output
- proof

Each scene needs a visual role.

## Pattern C: Distinct Visual Language Per Demo

If a deck contains multiple workflow demos, each should have its own visual language. Do not reuse the same dashboard skin for every example.

Change:

- color system
- spatial metaphor
- typography
- motion grammar
- density
- icon/image strategy

## Pattern D: Real Or Generated Assets, Not Emoji

Use real screenshots, product assets, generated scene art, or precise UI elements. Emoji and generic SVG illustrations flatten the work.

## Pattern E: BGM Plus SFX

Workflow demos benefit from subtle audio cues:

- typing
- command execute
- card snap
- transform
- success

Use audio only when exporting video.

## Static Dashboard Design

A good dashboard frame includes:

- title and short purpose
- stages or phases
- current status
- key artifacts
- input and output
- enough detail to be paused and understood

Do not make it look like a fake analytics dashboard unless the story is analytics.

## Debug Tools

Build these into complex demos:

### `?seek=N`

Freeze or jump to a specific second.

### `?autoplay=1`

Skip the play overlay when embedded or recorded.

### Replay

A replay control is useful in the browser, but hide it during video export.

## iframe Embeds

When embedding a cinematic demo in a deck:

- make sure click zones do not block iframe controls
- handle focus so keyboard navigation is not stolen
- test both `file://` and local server behavior
- expose an autoplay query parameter for recording

## Anti-Patterns

| Problem | Better Choice |
|---|---|
| evenly animating every step | group into scenes |
| fake dashboard metrics | show actual artifacts |
| same skin for every demo | unique visual language |
| progress bar as main story | visible transformation |
| lots of tiny unreadable UI | fewer, larger proof moments |
| no static overview | dashboard at rest |

## Time Budget

For a polished 20-30s workflow demo:

- story and timeline: 20-30 min
- static dashboard: 30-60 min
- animation pass: 60-120 min
- audio pass: 20-40 min
- verification/export: 20-40 min
