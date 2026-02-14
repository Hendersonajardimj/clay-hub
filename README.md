# Clay Hub Playground

This repository is the creative sandbox for your artist-tech workspace. It is set up as an onboarding-friendly place where visuals, music, and experiments can grow together. The current direction is a Next.js app with a 3D playground path, simple route structure for music and vault exploration, and Bun as the install/runtime runtime.

## Tech stack in this repo

Core runtime is on:

`/Users/joshuahenderson-jardim/projects/_inactive/clay/clay-hub/package.json`

It currently uses:

`next` `16.1.6`
`react` `19.2.4`
`react-dom` `19.2.4`
`three` `0.182.0`
`@react-three/fiber` `9.5.0`
`@react-three/drei` `10.7.7`
`framer-motion` `12.34.0`
`gsap` `3.14.2`
`@rive-app/react-canvas` `4.27.0`
`tailwindcss` `4.1.18`
`@tailwindcss/postcss` `4.1.18`
`bun` for package management and scripts (`1.3.5` pinned in `.bun-version`)

Bun lock/runtime support files:

`/Users/joshuahenderson-jardim/projects/_inactive/clay/clay-hub/.bun-version`
`/Users/joshuahenderson-jardim/projects/_inactive/clay/clay-hub/bun.lock`

Railway deploy config:

`/Users/joshuahenderson-jardim/projects/_inactive/clay/clay-hub/railway.json`

## App routes and what they are

Landing hub:
`/Users/joshuahenderson-jardim/projects/_inactive/clay/clay-hub/src/app/page.tsx`

Media gallery:
`/Users/joshuahenderson-jardim/projects/_inactive/clay/clay-hub/src/app/media/page.tsx`

Live set schedule:
`/Users/joshuahenderson-jardim/projects/_inactive/clay/clay-hub/src/app/live/page.tsx`

Media API:
`/Users/joshuahenderson-jardim/projects/_inactive/clay/clay-hub/src/app/api/media/route.ts`

Live API:
`/Users/joshuahenderson-jardim/projects/_inactive/clay/clay-hub/src/app/api/live/route.ts`

Media upload API:
`/Users/joshuahenderson-jardim/projects/_inactive/clay/clay-hub/src/app/api/media/upload/route.ts`

3D and experiment area:
`/Users/joshuahenderson-jardim/projects/_inactive/clay/clay-hub/src/app/playground/page.tsx`

Rive animation sandbox:
`/Users/joshuahenderson-jardim/projects/_inactive/clay/clay-hub/src/app/rive/page.tsx`

Rive component logic:
`/Users/joshuahenderson-jardim/projects/_inactive/clay/clay-hub/src/components/RiveStudio.tsx`

Music references and Bandcamp integration point:
`/Users/joshuahenderson-jardim/projects/_inactive/clay/clay-hub/src/app/music/page.tsx`

Content vault / catalog concept:
`/Users/joshuahenderson-jardim/projects/_inactive/clay/clay-hub/src/app/vault/page.tsx`

Reusable 3D scaffold component:
`/Users/joshuahenderson-jardim/projects/_inactive/clay/clay-hub/src/components/PlaygroundScene.tsx`

Global styles and shared shell rules:
`/Users/joshuahenderson-jardim/projects/_inactive/clay/clay-hub/src/app/globals.css`

## What already works as a meaningful foundation

You have a navigable landing, a dedicated playground route, a dynamic WebGL entry point, and placeholders for music and vault content. The project already demonstrates how to structure the future creative workflow: an experiential front page, a composable 3D layer, and routes that can be expanded into real release drops, scenes, and media metadata workflows.

`PlaygroundScene.tsx` currently renders an animated spinning geometry using React Three Fiber.
`playground/page.tsx` dynamically loads that scene with `ssr: false`, which is necessary for stable WebGL initialization.
`RiveStudio.tsx` and `/rive` provide a Rive workflow starter by accepting a local `.riv` file and rendering it in browser.

The pages currently use a simple studio aesthetic and are intentionally lightweight so the team can focus on adding media-first features next.

## Onboarding and first-run flow

The quickest path for new collaborators now begins with the onboarding route:

`/Users/joshuahenderson-jardim/projects/_inactive/clay/clay-hub/src/app/onboarding/page.tsx`

On that page, your friend can complete three practical first actions:
Visual-first.
Audio-first.
Motion-first.
Media-first.
Live-first.

## Quick start for your friend

From the Bun-first repo root:

`bun install`
`bun run onboarding`

Open `http://localhost:3000/onboarding` and verify:

`/` lands on the studio home
`/onboarding` opens the first-run guide
`/playground` shows the 3D scene
`/rive` gives a Rive file import + playback sandbox
`/music` is the launchpad for Bandcamp/track links
`/vault` is the catalog planning page
`/media` exposes image and AI-video exhibits
`/live` exposes DJ set planning and stream embeds

10-minute starter in this repo:

`bun install`
`bun run onboarding`
Open `/onboarding` to begin
Follow a starter path card
Complete at least three links to `/playground`, `/rive`, `/media`, `/live`, `/orchestration`, or `/music`

## Project setup notes

`/Users/joshuahenderson-jardim/projects/_inactive/clay/clay-hub` is the active project root for commands.

Stack map:

`/src/app/page.tsx` is the artist-facing launch surface
`/src/app/layout.tsx` controls shared nav and shell
`/src/app/onboarding/page.tsx` describes first-run orientation
`/src/types/onboarding.ts` contains typed onboarding contracts
`/src/data/onboarding.ts` owns the current starter tracks and task map
`/src/types/media.ts`, `/src/data/media-catalog.ts` model media gallery data
`/src/types/live.ts`, `/src/data/live-schedule.ts` model live set data
`/clay-hub/README.md`, `/clay-hub/CONTRIBUTING.md` are for collaborator orientation

Use `/src/app/playground` for Three.js-first experiments
Use `/src/app/rive` for animation states and Rive prototyping
Use `/src/app/music` for audio and Bandcamp references

Production checks:

`bun run build`
`bun run start`

Railway starts with `bun run start`, and the launch command is configured in:
`/Users/joshuahenderson-jardim/projects/_inactive/clay/clay-hub/railway.json`

Tailwind setup:

`/Users/joshuahenderson-jardim/projects/_inactive/clay/clay-hub/postcss.config.mjs`
`/Users/joshuahenderson-jardim/projects/_inactive/clay/clay-hub/src/app/globals.css`
`@import "tailwindcss";`

## Practical notes for new teammates

This repo is intentionally educational and low-friction. Start by adding tiny feature commits in one route at a time.

For 3D work, add models or shaders inside `src/components` and expose them from a dedicated scene file first.
For music, point to real Bandcamp embed values in `/playground/page.tsx` and `/music/page.tsx`.
For portfolio growth, treat `/vault/page.tsx` as the metadata index where tracks, media assets, scene presets, and release notes can eventually be indexed.
For media, stage image and video references in `/src/data/media-catalog.ts` and keep stream metadata in `/src/data/live-schedule.ts`.

## Known caveat to address next

`framer-motion` and `@react-three/drei` are installed and ready, but the project currently uses only the most basic R3F scene. You will get the most immediate value by adding your first motion + 3D combined artifact, such as intro transitions with Framer Motion around a scene card while the spinner is replaced by a production asset.

## Collaboration handoff checklist

Before inviting a teammate to start, make sure they have Bun installed and can run `bun install` cleanly.
Point them to this README and the route/component map.
Keep one branch strategy and open small PRs for scene experiments so your creative direction stays reviewable.
