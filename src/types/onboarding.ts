export type ToolCapability =
  | 'threejs'
  | 'rive'
  | 'audio'
  | 'motion'
  | 'gsap'
  | 'touchdesigner'
  | 'ableton'
  | 'mcp';

export interface StarterTask {
  id: string;
  title: string;
  detail: string;
  route: string;
  commandSnippet: string;
  estimatedMinutes: number;
}

export interface OnboardingPath {
  id: string;
  friendlyName: string;
  description: string;
  estimatedMinutes: number;
  prerequisites: string[];
  commandSnippet: string;
  capabilities: ToolCapability[];
  primaryRoute: string;
  primaryCta: string;
}

export interface LearningTrack {
  id: string;
  friendlyName: string;
  description: string;
  estimatedMinutes: number;
  prerequisites: string[];
  commandSnippet: string;
  capabilities: ToolCapability[];
  primaryRoute: string;
  primaryCta: string;
  milestones: string[];
}
