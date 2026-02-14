import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="section">
        <p style={{ color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.12rem', textTransform: 'uppercase', marginBottom: 4 }}>
          Artist + Tech Sandbox
        </p>
        <h1 style={{ marginTop: 0, marginBottom: 12, fontSize: '2.4rem' }}>Build visuals, tools, and music experiences together</h1>
        <p style={{ color: 'var(--muted)' }}>
          CLAY is being rebuilt as a creative operating system: music-ready landing pages, interactive 3D scenes, and composable experiences for release drops, performances, and experiments.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: '1.1rem' }}>
          <Link href="/playground" className="btn btn-primary">Enter Playground</Link>
          <Link href="/vault" className="btn btn-ghost">Explore Vault</Link>
          <Link href="/music" className="btn btn-ghost">Music + Bandcamp</Link>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Current Studio Priorities</h2>
        <div className="grid two">
          <article className="card">
            <h3>3D Playground</h3>
            <p style={{ color: 'var(--muted)' }}>Scene-first experiments for character concepts, motion studies, and animated stills.</p>
          </article>
          <article className="card">
            <h3>Audio-Visual Crossovers</h3>
            <p style={{ color: 'var(--muted)' }}>Bandcamp-backed drops and experiments that blend Ableton stems with visual systems.</p>
          </article>
          <article className="card">
            <h3>Creative Publishing</h3>
            <p style={{ color: 'var(--muted)' }}>Treat each experiment as an artifact: page, gallery, and discoverable path for clients.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
