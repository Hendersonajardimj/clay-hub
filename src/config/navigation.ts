export type NavLinkItem = {
  label: string;
  href: string;
};

export type NavSection = {
  title: string;
  items: NavLinkItem[];
};

export const navSections: NavSection[] = [
  {
    title: 'Studio',
    items: [
      { label: 'Home', href: '/' },
      { label: 'Playground', href: '/playground' },
      { label: 'Rive', href: '/rive' },
      { label: 'Vault', href: '/vault' }
    ]
  },
  {
    title: 'Learning',
    items: [
      { label: 'Onboarding', href: '/onboarding' },
      { label: 'Touch Designer', href: '/touch' },
      { label: 'Ableton', href: '/ableton' },
      { label: 'Orchestration', href: '/orchestration' }
    ]
  },
  {
    title: 'Publishing',
    items: [
      { label: 'Music', href: '/music' },
      { label: 'Media', href: '/media' },
      { label: 'Live', href: '/live' }
    ]
  }
];
