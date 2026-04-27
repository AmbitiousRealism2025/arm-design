# SFX Library

Bundled sound effects live under `assets/sfx/`.

## Directory Map

```text
assets/sfx/
├── keyboard/
├── ui/
├── transition/
├── container/
├── feedback/
├── progress/
├── impact/
├── magic/
└── terminal/
```

## Quick Index

### Keyboard

- `type.mp3`
- `type-fast.mp3`
- `enter.mp3`
- `delete-key.mp3`
- `space-tap.mp3`

Use for terminal demos, typing scenes, prompt entry, and code edits.

### UI

- `click.mp3`
- `click-soft.mp3`
- `hover-subtle.mp3`
- `focus.mp3`
- `toggle-on.mp3`
- `tap-finger.mp3`

Use for buttons, toggles, tabs, focus states, and touch interactions.

### Transition

- `whoosh.mp3`
- `whoosh-fast.mp3`
- `swipe-horizontal.mp3`
- `slide-in.mp3`
- `dissolve.mp3`

Use for scene changes and large spatial movement.

### Container

- `card-flip.mp3`
- `card-snap.mp3`
- `modal-open.mp3`
- `stack-collapse.mp3`

Use for cards, panels, stacks, and modals.

### Feedback

- `success-chime.mp3`
- `notification-pop.mp3`
- `achievement.mp3`
- `error-tone.mp3`

Use for completion, notification, achievement, and failure states.

### Progress

- `generate-start.mp3`
- `complete-done.mp3`

Use for generation or processing moments.

### Impact

- `brand-stamp.mp3`
- `logo-reveal.mp3`
- `logo-reveal-v2.mp3`
- `drop-thud.mp3`

Use sparingly for brand or hero moments.

### Magic

- `ai-process.mp3`
- `transform.mp3`
- `sparkle.mp3`

Use for AI transformation scenes.

### Terminal

- `command-execute.mp3`
- `cursor-blink.mp3`
- `output-appear.mp3`

Use for CLI workflows and command demos.

## Recommended Pairings

### Terminal Demo

- keyboard/type-fast
- terminal/command-execute
- terminal/output-appear
- feedback/success-chime

### Card Selection

- ui/hover-subtle
- ui/click-soft
- container/card-snap
- transition/whoosh

### AI Generation

- progress/generate-start
- magic/ai-process
- magic/transform
- feedback/success-chime

### Logo Reveal

- transition/whoosh-fast
- impact/logo-reveal-v2
- impact/brand-stamp

### Mobile UI

- ui/tap-finger
- ui/toggle-on
- feedback/notification-pop

## Usage Rules

- Match every cue to visible action.
- Keep SFX lower than it feels in isolation.
- Leave silence between events.
- Avoid stacking more than two cues at the same timestamp.
- Make impact sounds rare.

## Prompting Principle

When designing an audio pass, write a cue sheet:

```text
00.40 click-soft      user taps Generate
01.20 ai-process      model starts working
03.80 transform       preview changes form
05.10 success-chime   final state lands
```

Then implement with ffmpeg.

See `references/audio-design-rules.md`.
