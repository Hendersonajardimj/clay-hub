# Frontend Design Skill for Clay Hub

This repository-level skill captures the design intent we want the team to inherit when building new visual experiments.

Reference plugin context came from Anthropic's Frontend Design plugin page, which describes the target behavior as production-grade, non-generic design with bold aesthetic direction, intentional typography, strong motion, and depth through gradients, textures, and spatial composition.

The plugin summary emphasizes that it:
- avoids generic system-font patterns
- avoids cookie-cutter component structures
- avoids predictable purple gradients
- establishes purpose, audience, and aesthetic before implementing components
- handles typography and motion as connected design systems rather than isolated styling

For Clay, we should treat that behavior as a human workflow checklist before coding.

## Skill intent

Use this for any new page, landing card, or media showcase component.

1) Decide intent and audience first
2) Choose a concrete direction before writing layout rules
3) Build visual hierarchy, motion, and interaction as one system
4) Keep typography, spacing, and color logic explicit and reusable
5) Verify the result feels like a specific aesthetic, not default utility scaffolding

## Design preferences for this repo

Keep the visual language bold and low clutter.

Use high-contrast earthy palettes inspired by night studios and machine textures.
Avoid flat single-color hero blocks.
Favor expressive typography combinations over defaults.
Use measured motion and layered depth instead of static, rigid blocks.
Prefer asymmetry and composition breaks where they improve focus.

## Practical application

For `3js` route ideas, define:

- scene purpose before camera setup
- what the static poster shot conveys in 3-5 seconds
- what motion cue indicates progression
- where fallback UI appears while scene assets load

For `rive` routes, define:

- source input and expected art style
- animation states to test in order
- expected export intent (UI, character, logo mark, etc.)

For `music` routes, define:

- audio context or mood keyword
- where the listener should look first
- a place to attach external links without breaking flow

## Starter prompts and checks

Try this sequence when onboarding new experiments:

`Build a minimal landing surface for {project_name} in a brutalist-retro style, prioritize a single dominant visual motif and one motion cue, then wire the route to /playground`  

`Audit the result: Is the page clearly non-generic and does the motion support the story rather than decorate it?`

`Refactor styles into reusable shared utility classes or tokens where one pattern repeats twice`

## Integration points in this repo

Use these files when adding new frontend directions:

`src/app/page.tsx`
`src/app/onboarding/page.tsx`
`src/app/globals.css`
`frontend-design-skill.md`
`CONTRIBUTING.md`

## Quick acceptance checklist

Each new design pass should pass:

Audience intent stated
Route purpose stated
Visual hierarchy obvious on mobile in first paint
One motion decision explained
Fallback path documented for motion-disabled users
