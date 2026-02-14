export default function MusicPage() {
  return (
    <div className="page-shell">
      <section className="section">
        <p className="kicker">Music lab</p>
        <h1>Music</h1>
        <p className="copy">Start point for releases, collaborations, and direct Bandcamp references.</p>
        <div className="grid-two mt-4">
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
