import LiveSetList from '@/components/LiveSetList';

export default function LivePage() {
  return (
    <div className="page-shell">
      <section className="section">
        <p className="kicker">Performance schedule</p>
        <h1>DJ Live Sets</h1>
        <p className="copy">
          Plan and track stream windows with embed-ready platform links. This version keeps orchestration and content external while preserving a clean studio-facing first view.
        </p>
      </section>
      <LiveSetList />
    </div>
  );
}

