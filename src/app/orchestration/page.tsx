import Link from 'next/link';

const pillars = [
  {
    title: 'Control layer + timing layer',
    details:
      'Ableton owns transport and section timing. MCP sends compact intent, not sample-accurate fader messages.'
  },
  {
    title: 'One-way triggers + safety fallback',
    details:
      'Primary mappings are deterministic section or cue triggers from Ableton, with TouchDesigner fallback behavior if a packet is missed.'
  },
  {
    title: 'Audio feedback loop',
    details:
      'TouchDesigner can report analysis signals like energy and density so MCP can make resilient scene decisions.'
  }
];

const protocol = [
  '{',
  '  "state": "running",',
  '  "section": "intro",',
  '  "energy": 0.42,',
  '  "density": 0.58,',
  '  "cue_id": "pre_dawn",',
  '  "transition": { "duration_sec": 4.0, "style": "dissolve" },',
  '  "intent": "build_tension"',
  '}'
];

export default function OrchestrationPage() {
  return (
    <div className="page-shell">
      <section className="section">
        <p className="kicker">MCP Orchestration</p>
        <h1>Meaningful Ableton and Touch Designer Integration</h1>
        <p className="copy">
          Treat the stack as one instrument: Ableton carries timing truth, TouchDesigner owns responsive visuals, and MCP coordinates shared intent.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Minimal MVP pattern</h2>
        <div className="grid-three">
          {pillars.map((pillar) => (
            <article className="card" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p className="copy">{pillar.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Concrete command grammar</h2>
        <p className="copy">Emit one event per section boundary to keep the workflow intentional.</p>
        <pre className="onboarding-code">
          <code>{protocol.join('\n')}</code>
        </pre>
        <p className="state-note">
          MCP emits one event; Ableton launches the section while TouchDesigner applies a matching preset transition.
        </p>
        <div className="grid-two mt-3">
          <Link className="btn btn-primary" href="/music">
            Open music flow
          </Link>
          <Link className="btn btn-ghost" href="/playground">
            Open visual flow
          </Link>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Safety defaults</h2>
        <ul className="learning-milestones">
          <li>Single master clock source and scene-safe section boundaries.</li>
          <li>Show-critical bindings separated from experimental bindings.</li>
          <li>Endpoint ACK expected; timeout goes to fallback ambient state.</li>
          <li>Minimal MCP verbs only: set_section, set_intent, blackout, reset.</li>
        </ul>
      </section>
    </div>
  );
}
