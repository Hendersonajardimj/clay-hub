# Contributing to Clay Hub

Clay Hub is a creative onboarding sandbox where media-heavy experiments should stay discoverable.
Treat this repo as a low-friction teaching surface for people who are strong in art and music and newer to full-stack tooling.

## Local workflow first pass

Treat the onboarding page as the first task for new teammates.

`bun install`
`bun run onboarding`
Open `http://localhost:3000/onboarding`

From there, complete the first actions in order: `/onboarding`, `/playground`, `/rive`, `/music`, then `/orchestration` as your cross-media route.

## Route conventions

`/src/app` contains each route as its own surface.
`/src/components` contains reusable building blocks.
`/src/data` stores route-specific onboarding and content configuration.
`/src/types` stores shared contracts for data shared across pages.

## Naming for media and asset direction

Keep visual names direct and human-readable.
Use kebab-case for file names that may be synced with scripts later.
For 3D props and scene ideas, use `three-` or `visual-` prefixes so they are easy to filter.

## When to use each stack area

Use `threejs` when geometry, camera framing, lights, or animated scenes are the core artifact.
Use `rive` when you need expressive vector-driven motion with reusable timeline states.
Use `gsap` when you need timeline precision around DOM or Canvas-driven transitions.
Use `framer-motion` when compositional page-level animation should stay declarative with React.
Use direct Three.js state logic when motion and rendering need full control in canvas loops.

## Git and collaboration habits

Use focused commits around one idea.
Prefer adding one route or one media artifact per pull request.
Keep docs updated whenever a path changes in the navigation or onboarding flow.

## Onboarding content governance

When onboarding copy changes, update:
`/src/data/onboarding.ts`
`/src/types/onboarding.ts`
`/clay-hub/README.md`
`/clay-hub/CONTRIBUTING.md`
`/clay-hub/frontend-design-skill.md`

## Suggested file touch for first experiments

If a track is a first-class creative artifact, add it to `/src/app/playground`, `/src/app/music`, and `/src/app/vault` as a roadmap item so every path stays connected.
