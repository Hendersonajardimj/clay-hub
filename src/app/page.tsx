import Link from 'next/link';

const pillars = [
  {
    title: '3D Playground',
    description: 'Scene-first experiments for characters, motion studies, and visual prototypes with direct export potential.'
  },
  {
    title: 'Audio-Visual Crossovers',
    description: 'Bandcamp-aligned releases and Ableton-backed story arcs built with visual pacing in mind.'
  },
  {
    title: 'Creative Publishing',
    description: 'Treat each artifact as a living object with a route, media references, and discoverable structure.'
  }
];

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="section">
        <p className="kicker">Artist + Tech Sandbox</p>
        <h1 className="hero-title">Build visuals, tools, and music experiences together</h1>
        <p className="copy">
          CLAY is being rebuilt as a creative operating system: music-ready landing pages, interactive 3D scenes, and composable experiences for release drops, performances, and experiments.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/onboarding" className="btn btn-primary">Onboarding Flow</Link>
          <Link href="/playground" className="btn btn-primary">Enter Playground</Link>
          <Link href="/vault" className="btn btn-ghost">Explore Vault</Link>
          <Link href="/music" className="btn btn-ghost">Music + Bandcamp</Link>
          <Link href="/orchestration" className="btn btn-primary">Orchestration Guide</Link>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Current Studio Priorities</h2>
        <div className="grid-two">
          {pillars.map((pillar) => (
            <article className="card" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p className="copy">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
