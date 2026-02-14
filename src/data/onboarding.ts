import type { OnboardingPath, StarterTask } from '@/types/onboarding';

export const onboardingPaths: OnboardingPath[] = [
  {
    id: 'visual-first',
    friendlyName: 'Visual-first',
    description: 'Open the 3D playground first, then map one simple motion pass to an image or mock scene.',
    estimatedMinutes: 5,
    prerequisites: ['Bun installed', 'Browser with modern WebGL support'],
    commandSnippet: 'bun install\nbun run onboarding',
    capabilities: ['threejs', 'motion'],
    primaryRoute: '/playground',
    primaryCta: 'Launch 3D Playground'
  },
  {
    id: 'audio-first',
    friendlyName: 'Audio-first',
    description: 'Start from a music anchor and connect a Bandcamp-friendly release flow before layering visuals.',
    estimatedMinutes: 4,
    prerequisites: ['No extra tools required', 'Bandcamp URLs ready when available'],
    commandSnippet: 'bun run dev\n# then open /music',
    capabilities: ['audio'],
    primaryRoute: '/music',
    primaryCta: 'Open Music Hub'
  },
  {
    id: 'motion-first',
    friendlyName: 'Motion-first',
    description: 'Use Rive for expressive animated states, then think about where it might support a final scene export.',
    estimatedMinutes: 6,
    prerequisites: ['Creative file ready (.riv preferred)', 'Able to upload local file in browser'],
    commandSnippet: 'bun run dev\n# then open /rive',
    capabilities: ['rive', 'gsap'],
    primaryRoute: '/rive',
    primaryCta: 'Open Rive Studio'
  }
];

export const onboardingTasks: StarterTask[] = [
  {
    id: 'starter-threejs',
    title: 'Load the 3D scene',
    detail: 'Open the playground route and confirm the WebGL canvas initializes.',
    route: '/playground',
    commandSnippet: 'bun run onboarding',
    estimatedMinutes: 2
  },
  {
    id: 'starter-rive',
    title: 'Try a Rive animation',
    detail: 'Drop in a .riv file and test loop and state toggles.',
    route: '/rive',
    commandSnippet: 'bun run onboarding',
    estimatedMinutes: 2
  },
  {
    id: 'starter-music',
    title: 'Anchor a release idea',
    detail: 'Open music area and verify your external track and landing references.',
    route: '/music',
    commandSnippet: 'bun run onboarding',
    estimatedMinutes: 1
  }
];
