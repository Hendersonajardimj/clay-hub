import Link from 'next/link';

const pluginCurriculum = [
  {
    title: 'Pick one chain',
    detail: 'Start with one synth source and one effect to keep the learning path understandable.'
  },
  {
    title: 'Create one repeat point',
    detail: 'Create a one-bar automation shape and mark exactly where visuals should respond.'
  },
  {
    title: 'Draft a release-ready cue list',
    detail: 'List 3 cues with timestamps so scene timing can be reproduced in the Web stack.'
  }
];

export default function AbletonPage() {
  return (
    <div className="page-shell">
      <section className="section">
        <p className="kicker">Learning module</p>
        <h1>Ableton Plugins: Minimal Starter</h1>
        <p className="copy">
          A practical entry point for plugin-first audio creation where the end result is a short cue list that can drive visual scene logic.
        </p>
        <div className="stack-pills">
          <span className="stack-pill">Ableton</span>
          <span className="stack-pill">Plugins</span>
          <span className="stack-pill">Sync cue mapping</span>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Starter curriculum</h2>
        <div className="grid-stacked">
          {pluginCurriculum.map((step) => (
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
          <Link className="btn btn-primary" href="/music">
            Continue in music area
          </Link>
          <Link className="btn btn-ghost" href="/onboarding">
            Back to onboarding
          </Link>
        </div>
      </section>
    </div>
  );
}
