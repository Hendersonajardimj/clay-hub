"use client";

import { Suspense } from 'react';
import PlaygroundScene from '@/components/PlaygroundScene';

const featuredTracks = [
  {
    title: 'Concrete Frequencies',
    bandcampUrl: 'https://bandcamp.com/album/concrete-frequencies',
    embedId: '1234567890'
  }
];

export default function PlaygroundPage() {
  return (
    <div className="page-shell">
      <section className="section">
        <h1>Playground</h1>
        <p style={{ color: 'var(--muted)' }}>
          This space is for fast experiments: rotating assets, shader tests, and 3D scenes that can support release artwork or performance pieces.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Live 3D</h2>
        <Suspense fallback={<div className="visual-canvas" style={{ display: 'grid', placeItems: 'center', color: 'var(--muted)' }}>Initializing WebGL…</div>}>
          <PlaygroundScene />
        </Suspense>
      </section>

      <section className="section">
        <h2 className="section-title">Track Anchor</h2>
        {featuredTracks.map((track) => (
          <div key={track.title} className="card">
            <h3>{track.title}</h3>
            <p style={{ color: 'var(--muted)' }}>Wire this to real Bandcamp slugs as your catalog grows.</p>
            <iframe
              title="Bandcamp"
              src={`https://bandcamp.com/EmbeddedPlayer/album=${track.embedId}/size=large/bgcol=070707/linkcol=7fb069/tracklist=true/transparent=true/`}
              width="100%"
              height="420"
              style={{ border: 0, maxWidth: 680 }}
              loading="lazy"
            />
          </div>
        ))}
      </section>
    </div>
  );
}
