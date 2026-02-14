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
        <p className="kicker">Live lab</p>
        <h1>Playground</h1>
        <p className="copy">
          This space is for fast experiments: rotating assets, shader tests, and 3D scenes that can support release artwork or performance pieces.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Live 3D</h2>
        <Suspense
          fallback={
            <div className="scene-stage">Initializing WebGL…</div>
          }
        >
          <PlaygroundScene />
        </Suspense>
      </section>

      <section className="section">
        <h2 className="section-title">Track anchor</h2>
        <div className="grid-two">
          {featuredTracks.map((track) => (
            <article className="card" key={track.title}>
              <h3>{track.title}</h3>
              <p className="copy">Wire this to real Bandcamp slugs as your catalog grows.</p>
              <iframe
                title="Bandcamp"
                src={`https://bandcamp.com/EmbeddedPlayer/album=${track.embedId}/size=large/bgcol=070707/linkcol=34d399/tracklist=true/transparent=true/`}
                width="100%"
                height="420"
                style={{ border: 0, maxWidth: 680 }}
                loading="lazy"
              />
              <a className="btn btn-ghost" href={track.bandcampUrl} target="_blank" rel="noreferrer">
                Open on Bandcamp
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
