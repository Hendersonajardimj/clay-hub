import type { LiveSetSchedule } from '@/types/live';

export const liveSchedule: LiveSetSchedule = {
  timezone: 'America/Los_Angeles',
  events: [
    {
      id: 'live-setup-001',
      title: 'Midnight Buildset',
      djAlias: 'Guest Curator',
      scheduledAt: '2026-02-14T21:00:00-08:00',
      timezone: 'America/Los_Angeles',
      platform: 'youtube',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      landingUrl: 'https://www.youtube.com/live',
      description:
        'First-pass showcase of a studio DJ route with a short set of visual transition tests.',
      tags: ['testing', 'playlist', 'visual-sync'],
      durationMinutes: 90,
      status: 'upcoming'
    },
    {
      id: 'live-setup-002',
      title: 'Motion Feedback Session',
      djAlias: 'Clay Team',
      scheduledAt: '2026-01-20T20:00:00-08:00',
      timezone: 'America/Los_Angeles',
      platform: 'twitch',
      embedUrl: 'https://player.twitch.tv/?channel=twitch&parent=localhost&autoplay=false',
      landingUrl: 'https://www.twitch.tv',
      description:
        'Archived sample for playlist planning and post-performance review context.',
      tags: ['legacy', 'reference', 'practice'],
      durationMinutes: 120,
      status: 'ended'
    }
  ]
};

