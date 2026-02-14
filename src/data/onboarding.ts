import type { LearningTrack, OnboardingPath, StarterTask } from '@/types/onboarding';

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
  },
  {
    id: 'orchestration-first',
    friendlyName: 'Orchestration-first',
    description: 'Create one shared state event that drives Ableton section launches and TouchDesigner transitions.',
    estimatedMinutes: 7,
    prerequisites: ['Ableton and TouchDesigner in local workflow', 'OSC or MIDI transport path available'],
    commandSnippet: 'bun run onboarding\n# then open /orchestration',
    capabilities: ['ableton', 'touchdesigner', 'mcp', 'audio', 'motion'],
    primaryRoute: '/orchestration',
    primaryCta: 'Open orchestration concept'
  },
  {
    id: 'media-first',
    friendlyName: 'Media-first',
    description:
      'Review image and AI video references so there is a visual layer that can follow music sessions.',
    estimatedMinutes: 7,
    prerequisites: ['Cloud-hosted preview links or placeholders available'],
    commandSnippet: 'bun run onboarding\n# then open /media',
    capabilities: ['media', 'video'],
    primaryRoute: '/media',
    primaryCta: 'Open media gallery'
  },
  {
    id: 'live-first',
    friendlyName: 'Live-first',
    description:
      'Load the set calendar and preview embedded stream links before each scheduled set.',
    estimatedMinutes: 6,
    prerequisites: ['Platform links (Twitch/YouTube/Mixcloud) ready in schedule'],
    commandSnippet: 'bun run onboarding\n# then open /live',
    capabilities: ['streaming'],
    primaryRoute: '/live',
    primaryCta: 'Open DJ set schedule'
  }
];

export const onboardingTasks: StarterTask[] = [
  {
    id: 'starter-threejs',
    title: 'Load the 3D scene',
    detail: 'Open the playground route and confirm the WebGL canvas initializes.',
    route: '/playground',
    commandSnippet: 'bun run onboarding\n# then open /playground',
    estimatedMinutes: 2
  },
  {
    id: 'starter-rive',
    title: 'Try a Rive animation',
    detail: 'Drop in a .riv file and test loop and state toggles.',
    route: '/rive',
    commandSnippet: 'bun run onboarding\n# then open /rive',
    estimatedMinutes: 2
  },
  {
    id: 'starter-music',
    title: 'Anchor a release idea',
    detail: 'Open music area and verify your external track and landing references.',
    route: '/music',
    commandSnippet: 'bun run onboarding\n# then open /music',
    estimatedMinutes: 1
  },
  {
    id: 'starter-orchestration',
    title: 'Map an orchestration state',
    detail: 'Use one shared section event for both Ableton and TouchDesigner and verify both routes react.',
    route: '/orchestration',
    commandSnippet: 'bun run onboarding\n# then open /orchestration',
    estimatedMinutes: 2
  },
  {
    id: 'starter-media',
    title: 'Review gallery assets',
    detail: 'Open the media gallery and inspect image/video placeholders for quick curation workflows.',
    route: '/media',
    commandSnippet: 'bun run onboarding\n# then open /media',
    estimatedMinutes: 2
  },
  {
    id: 'starter-live',
    title: 'Review live set schedule',
    detail: 'Open the DJ schedule and verify one upcoming embed and one archive reference.',
    route: '/live',
    commandSnippet: 'bun run onboarding\n# then open /live',
    estimatedMinutes: 2
  }
];

export const learningTracks: LearningTrack[] = [
  {
    id: 'touch-designer',
    friendlyName: 'Touch Designer',
    description: 'Learn the node-first workflow for motion-first visuals and export references that can inspire WebGL or Rive sequences.',
    estimatedMinutes: 8,
    prerequisites: ['Basic visual design curiosity', 'A project folder ready for exports'],
    commandSnippet: 'bun run onboarding\n# then open /touch',
    capabilities: ['touchdesigner', 'motion'],
    primaryRoute: '/touch',
    primaryCta: 'Enter Touch Designer Guide',
    milestones: [
      'Understand how operators chain logic and timing in a scene graph.',
      'Build a looping motion network with one visual parameter drive.',
      'Export an image sequence or reference and annotate what to rebuild in web.'
    ]
  },
  {
    id: 'ableton-plugins',
    friendlyName: 'Ableton Plugins',
    description: 'Learn plugin-level thinking: one synth, one effect chain, and one transport rhythm you can pair with visuals.',
    estimatedMinutes: 7,
    prerequisites: ['Ability to run Ableton', 'A short MIDI or stem clip'],
    commandSnippet: 'bun run onboarding\n# then open /ableton',
    capabilities: ['ableton', 'audio'],
    primaryRoute: '/ableton',
    primaryCta: 'Enter Ableton Plugins Guide',
    milestones: [
      'Set up a simple chain that is clearly identifiable in the mix.',
      'Create an automation block that marks visual sync points.',
      'Export a short render and map the timeline cue names in your notes.'
    ]
  }
];
