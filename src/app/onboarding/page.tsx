'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

import { learningTracks, onboardingPaths, onboardingTasks } from '@/data/onboarding';
import type { LearningTrack, OnboardingPath, StarterTask } from '@/types/onboarding';

const stackLabel: Record<string, string> = {
  threejs: 'Three.js',
  rive: 'Rive',
  audio: 'Audio',
  motion: 'Motion',
  gsap: 'GSAP',
  touchdesigner: 'Touch Designer',
  ableton: 'Ableton',
  mcp: 'MCP'
};

function PathCard({ path }: { path: OnboardingPath }) {
  return (
    <article className="onboarding-card">
      <h2>{path.friendlyName}</h2>
      <p className="copy">{path.description}</p>
      <p>
        <strong>Estimated time:</strong> {path.estimatedMinutes} minutes
      </p>
      <p>
        <strong>Prerequisites:</strong> {path.prerequisites.join(', ')}
      </p>
      <div className="stack-pills" aria-label="Stack capabilities">
        {path.capabilities.map((cap) => (
          <span key={`${path.id}-${cap}`} className="stack-pill">
            {stackLabel[cap] ?? cap}
          </span>
        ))}
      </div>
      <p className="state-note">
        <strong>Starter command:</strong>
      </p>
      <pre className="onboarding-code">
        <code>{path.commandSnippet}</code>
      </pre>
      <Link href={path.primaryRoute} className="btn btn-primary">
        {path.primaryCta}
      </Link>
    </article>
  );
}

function TaskRow({ task }: { task: StarterTask }) {
  return (
    <article className="task-card">
      <h3>{task.title}</h3>
      <p className="copy">{task.detail}</p>
      <p className="state-note">
        Route target: <Link href={task.route}>{task.route}</Link>
      </p>
      <p className="copy">Expected time: {task.estimatedMinutes} minute(s)</p>
      <pre className="onboarding-code">
        <code>{task.commandSnippet}</code>
      </pre>
    </article>
  );
}

function LearningTabs({ tracks }: { tracks: LearningTrack[] }) {
  const [activeTrackId, setActiveTrackId] = useState(tracks[0]?.id ?? '');
  const activeTrack = useMemo(
    () => tracks.find((track) => track.id === activeTrackId) ?? tracks[0],
    [activeTrackId, tracks]
  );

  if (!activeTrack) {
    return null;
  }

  return (
    <section className="section">
      <h2 className="section-title">Learning tracks</h2>
      <p className="copy">
        Two starter tracks for Touch Designer and Ableton plugins, with practical first-step workflows.
      </p>
      <div className="tab-strip" role="tablist" aria-label="Choose a learning focus">
        {tracks.map((track) => (
          <button
            key={track.id}
            type="button"
            role="tab"
            aria-selected={track.id === activeTrackId}
            aria-controls={`${track.id}-panel`}
            id={`${track.id}-tab`}
            onClick={() => setActiveTrackId(track.id)}
            className={track.id === activeTrackId ? 'tab-pill is-active' : 'tab-pill'}
          >
            {track.friendlyName}
          </button>
        ))}
      </div>

      <div
        id={`${activeTrack.id}-panel`}
        role="tabpanel"
        aria-labelledby={`${activeTrack.id}-tab`}
        className="learning-panel"
      >
        <h3>{activeTrack.friendlyName} starter</h3>
        <p className="copy">{activeTrack.description}</p>
        <p className="state-note">
          <strong>Estimated time:</strong> {activeTrack.estimatedMinutes} minutes
        </p>
        <p className="state-note">
          <strong>Prerequisites:</strong> {activeTrack.prerequisites.join(', ')}
        </p>
        <ul className="learning-milestones">
          {activeTrack.milestones.map((milestone) => (
            <li key={`${activeTrack.id}-${milestone}`}>{milestone}</li>
          ))}
        </ul>
        <div className="stack-pills" aria-label="Stack capabilities">
          {activeTrack.capabilities.map((cap) => (
            <span key={`${activeTrack.id}-${cap}`} className="stack-pill">
              {stackLabel[cap] ?? cap}
            </span>
          ))}
        </div>
        <p className="state-note">
          <strong>Starter command:</strong>
        </p>
        <pre className="onboarding-code">
          <code>{activeTrack.commandSnippet}</code>
        </pre>
        <Link href={activeTrack.primaryRoute} className="btn btn-primary">
          {activeTrack.primaryCta}
        </Link>
      </div>
    </section>
  );
}

export default function OnboardingPage() {
  return (
    <div className="page-shell">
      <section className="section">
        <p className="kicker">Creative onboarding</p>
        <h1>Welcome to Clay Hub</h1>
        <p className="copy">
          This page is your first-run map. It shows the quickest ways to touch the stack: visual play, motion build, and music-forward presentation.
        </p>
      </section>

      <LearningTabs tracks={learningTracks} />

      <section className="section">
        <h2 className="section-title">Start Here — 10 minute starter flow</h2>
        <div className="onboarding-grid">
          {onboardingPaths.map((path) => (
            <PathCard key={path.id} path={path} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Three meaningful first actions</h2>
        <div className="task-grid">
          {onboardingTasks.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </div>
      </section>
    </div>
  );
}
