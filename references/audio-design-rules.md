# Audio Design Rules

Use this reference when exporting animation videos with music and sound effects.

## Core Rule: Two Audio Tracks

Polished motion often needs both:

- BGM for emotional floor and pacing
- SFX for high-frequency feedback and moments of contact

BGM alone can feel flat. SFX alone can feel empty. Together they make the animation feel intentional.

Skip audio only when the user asks for silent output or plans to add voiceover/music elsewhere.

## Golden Balance

### Volume

Typical starting points:

- BGM: -18 to -24 dB
- SFX: -8 to -14 dB
- Voiceover, if present: highest priority

### Frequency Separation

Keep BGM low and wide. Let SFX occupy sharper transients. If they compete, reduce BGM gain or EQ the track.

### Fade

Use short fades:

- BGM fade in: 0.3-0.6s
- BGM fade out: 0.8-1.5s
- SFX fade: usually none or very short

## SFX Density

Recommended density per 10 seconds:

| Scene Type | Density |
|---|---|
| launch hero | 4-8 cues |
| product demo | 2-4 cues |
| tutorial | 0-2 cues |
| ambient cinematic | 0-1 cue |
| magic/AI transformation | 3-6 cues |

Every cue should correspond to visible action.

## Cue Priority

Add SFX for:

1. user action
2. state change
3. reveal
4. transformation
5. completion
6. impact or brand moment

Do not add SFX to random decorative movement.

## Timing Precision

Align cues within roughly one to three frames of the visual event. Loose timing feels amateur even when the sounds are good.

## BGM Decision Tree

Use bundled music:

- `tech`: product launch, AI tooling, premium tech
- `ad`: upbeat promotional videos
- `educational`: explainers, courses, friendly tutorials
- `educational-alt`: alternate educational mood
- `tutorial`: low-presence software walkthroughs
- `tutorial-alt`: alternate tutorial mood

No BGM may be better for:

- very short UI interaction clips
- clips meant for voiceover
- accessibility-sensitive demos
- silent embed contexts

## Scene Recipes

### Product Launch

- BGM: `tech` or `ad`
- SFX: whoosh, impact, reveal, subtle UI ticks
- Density: medium-high

### Tool Demo

- BGM: `tutorial` or quiet `tech`
- SFX: click, type, notification, success
- Density: low-medium

### AI Generation

- BGM: `tech`
- SFX: sparkle, process, transform, completion
- Density: medium

### Ambient Gallery

- BGM: `educational` or custom ambient
- SFX: minimal, only on major focus shifts

## ffmpeg Patterns

Single cue:

```bash
ffmpeg -i video.mp4 -i click.mp3 \
  -filter_complex "[1:a]adelay=1200|1200,volume=0.6[sfx];[0:a][sfx]amix=inputs=2:duration=first" \
  -c:v copy out.mp4
```

Multiple cues plus BGM should be mixed in a dedicated filter graph or staged into an intermediate SFX track, then mixed with the video and BGM.

## Failure Modes

- SFX with no matching visual event
- too many cues in a quiet scene
- BGM too loud
- no fade out
- cue timing feels late
- cheerful audio on serious visuals
- harsh high frequencies
- exported video has no audio stream

## Quality Check

Before delivery:

- watch with audio once
- watch muted once
- check that audio improves rather than explains
- verify final file has an audio stream

```bash
ffprobe -select_streams a final.mp4
```
