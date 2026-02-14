import Link from 'next/link';

const touchCurriculum = [
  {
    title: 'Build a motion chain',
    detail: 'Create a single chain with one controllable timing input and one visual parameter to track behavior changes.'
  },
  {
    title: 'Test a repeatable loop',
    detail: 'Keep loop length under 8 seconds so it maps cleanly to UI states and scene transitions.'
  },
  {
    title: 'Export reference assets',
    detail: 'Export one short sequence and annotate when the movement rhythm starts and ends.'
  }
];

export default function TouchDesignerPage() {
  return (
    <div className="page-shell">
      <section className="section">
        <p className="kicker">Learning module</p>
        <h1>Touch Designer: Minimal Starter</h1>
        <p className="copy">
          A lightweight route for first exposure to node-based motion thinking. The goal is to leave with one repeatable motion idea and a clear export note for downstream 3D or Rive work.
        </p>
        <div className="stack-pills">
          <span className="stack-pill">Touch Designer</span>
          <span className="stack-pill">Motion</span>
          <span className="stack-pill">Reference export</span>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Starter curriculum</h2>
        <div className="grid-stacked">
          {touchCurriculum.map((step) => (
            <article className="onboarding-card" key={step.title}>
              <h3>{step.title}</h3>
              <p className="copy">{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Next move</h2>
        <div className="grid-two">
          <Link className="btn btn-primary" href="/playground">
            Try a related 3D pass
          </Link>
          <Link className="btn btn-ghost" href="/onboarding">
            Back to onboarding
          </Link>
        </div>
      </section>
    </div>
  );
}
