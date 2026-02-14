export default function VaultPage() {
  return (
    <div className="page-shell">
      <section className="section">
        <h1>Vault</h1>
        <p style={{ color: 'var(--muted)' }}>
          Placeholder for the catalog brain: tracks, visuals, and media metadata that drive everything in the site.
        </p>
        <div className="card" style={{ marginTop: 12 }}>
          <h2 className="section-title">Roadmap hook</h2>
          <p style={{ color: 'var(--muted)' }}>
            This will evolve into searchable tracks with filters, waveform context, and scene presets linked to each release.
          </p>
        </div>
      </section>
    </div>
  );
}
