export default function MusicPage() {
  return (
    <div className="page-shell">
      <section className="section">
        <h1>Music</h1>
        <p style={{ color: 'var(--muted)' }}>Start point for releases, collaborations, and direct Bandcamp references.</p>
        <div style={{ marginTop: '1rem', display: 'grid', gap: '0.8rem' }}>
          <a className="btn btn-primary" href="https://bandcamp.com" target="_blank" rel="noreferrer">
            Open Bandcamp
          </a>
          <a className="btn btn-ghost" href="/" rel="noreferrer">
            Back to studio
          </a>
        </div>
      </section>
    </div>
  );
}
