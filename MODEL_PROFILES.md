# Model And Reasoning Profiles

Use these profiles as operating guidance for GPT-5.5 in Codex.

## design-fast

Use for:

- quick visual variants
- lightweight HTML mockups
- small prototype edits
- design critique with no asset research
- minor script refactors

Suggested reasoning: low.

Risk: may miss subtle visual or toolchain issues. Pair with verification scripts.

## design-standard

Use for:

- normal app or web prototypes
- pitch decks and infographics
- branded visual systems using known assets
- moderate interaction design
- HTML-first slide and prototype deliverables

Suggested reasoning: medium.

This should be the default profile.

## design-heavy

Use for:

- complex brand and product research
- large decks
- launch animations
- video export with audio or timing requirements
- multi-artifact delivery
- difficult visual QA

Suggested reasoning: high.

Use only when the task justifies the extra cost or evals show a measurable improvement.

## coding-cheap

Use for:

- routine script maintenance
- lint fixes
- package cleanup
- small test harness changes
- non-visual refactors

Suggested model: a Codex-focused coding model or cheaper coding profile.

Use GPT-5.5 when visual judgment, complex reasoning, or broad context synthesis matters.
