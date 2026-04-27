# Animation Best Practices

This reference describes the taste layer for motion design. The technical layer lives in `animations.md` and `animation-pitfalls.md`.

## Identity

Act like a motion designer, not a developer adding CSS transitions.

Good motion:

- clarifies the idea
- directs attention
- has physical plausibility
- has contrast between stillness and movement
- reveals process rather than teleporting to a result
- ends with a resolved, readable final frame

## Core Beliefs

1. Animation is narrative, not decoration.
2. Easing is the emotional texture of movement.
3. The viewer should always know where to look.

## Taste Check

Ask:

- What does the viewer understand after this beat?
- Is the motion revealing cause and effect?
- Is the important object sharper, brighter, larger, or more stable than the background?
- Does the scene have enough stillness?
- Would the final frame work as a poster?

## The Five-Part Arc

A useful launch/demo rhythm:

1. Slow: establish the world.
2. Fast: start the process.
3. Build: accumulate change.
4. Boom: reveal the result.
5. Stop: hold the outcome.

Do not keep everything moving at the same intensity.

## Easing Philosophy

Avoid linear easing for narrative motion.

Use:

- `expoOut`: premium reveal, strong arrival
- `expoInOut`: large transition
- `cubicOut`: ordinary UI
- `backOut`: playful overshoot
- `linear`: ambient drift only

The strongest motion often arrives quickly, then spends time settling.

## Motion Language Rules

### 1. Avoid Pure Black And Pure White

Use near-black and warm off-white so highlights and shadows have room.

### 2. Show Process

For AI or tool demos, do not jump from prompt to perfect result. Show search, selection, transformation, error correction, or reasoning steps.

### 3. Draw Mouse Paths By Hand

If showing a cursor, use curved paths with slight imperfection. Perfect straight-line cursor motion feels fake.

### 4. Use Morphs For Brand Moments

Logo reveals feel better when fragments converge, compress, or resolve into a mark.

### 5. Pair Serif And Sans

Editorial motion often benefits from a strong serif display and restrained sans body.

### 6. Focus Switching

When one element becomes important:

- dim or blur the background
- sharpen or brighten the subject
- use a small flash or motion cue
- hold long enough to read

### 7. Stagger Groups

For lists and grids, stagger by 20-60ms. Do not make all items appear at once unless the point is impact.

### 8. Keep A Stable Anchor

During complex motion, keep one element stable: a logo, title, cursor, frame, or horizon line.

## Practical Techniques

### Shared Element Transition

Move the same perceived object between layouts instead of cutting between two unrelated objects.

### Breathing Expansion

A card can expand in width first, then height, then reveal contents. This feels more physical than instant scaling.

### Chunk Reveal

For generated text or code, reveal chunks rather than individual characters unless typing is the story.

### Anticipation And Follow-Through

Before a major movement, give a small counter-move. After it lands, allow a tiny settle.

### Depth With Perspective

Use `perspective`, `translateZ`, scale, and shadow sparingly. Too much 3D becomes noisy and expensive to render.

## Scene Recipes

### Product Launch

- quiet opening
- product or concept appears in fragments
- process accelerates
- hero reveal
- stable final frame with logo or CTA

### Tool Workflow

- start with the real interface or terminal
- show a human action
- show the system doing visible work
- reveal the improved artifact
- return to a dashboard or final state

### Document Or Productivity

- show before state
- show edits, redlines, or transformations
- make the output clearer and calmer
- hold on the finished document

## Failure Modes

- everything moves all the time
- animation does not explain anything
- text is unreadable
- scene cuts are random
- easing is linear
- cursor movement is robotic
- the final frame is a half-transition
- decorative particles replace story

## Delivery Checklist

- Story is clear in silent playback.
- Key text remains readable.
- Motion has a slow/fast rhythm.
- Viewer focus is guided.
- Final frame is stable.
- Representative frames pass screenshot review.
- Export behavior is tested.
