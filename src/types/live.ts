export type LivePlatform = 'twitch' | 'youtube' | 'mixcloud' | 'other';

export type LiveSetStatus = 'upcoming' | 'live' | 'ended';

export interface LiveSetEvent {
  id: string;
  title: string;
  djAlias: string;
  scheduledAt: string;
  timezone: string;
  platform: LivePlatform;
  embedUrl: string;
  landingUrl?: string;
  description?: string;
  tags?: string[];
  durationMinutes: number;
  status: LiveSetStatus;
}

export interface LiveSetSchedule {
  timezone: string;
  events: LiveSetEvent[];
}

