"use client";

import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';

const Rive = dynamic(() => import('@rive-app/react-canvas'), {
  ssr: false,
  loading: () => (
    <div className="scene-stage" role="status" aria-live="polite">
      Loading Rive runtime…
    </div>
  )
});

export default function RiveStudio() {
  const [assetUrl, setAssetUrl] = useState<string | null>(null);
  const [sourceLabel, setSourceLabel] = useState('No file selected yet');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onFileChoose = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files?.[0];

    if (!selected) {
      return;
    }

    if (!selected.name.toLowerCase().endsWith('.riv')) {
      setErrorMessage('Please choose a .riv file');
      return;
    }

    setErrorMessage(null);
    const nextUrl = URL.createObjectURL(selected);

    setAssetUrl((previous) => {
      if (previous) {
        URL.revokeObjectURL(previous);
      }
      return nextUrl;
    });

    setSourceLabel(selected.name);
  };

  useEffect(() => {
    return () => {
      if (assetUrl) {
        URL.revokeObjectURL(assetUrl);
      }
    };
  }, [assetUrl]);

  const player = useMemo(() => {
    if (!assetUrl) return null;
    return <Rive src={assetUrl} className="scene-stage" />;
  }, [assetUrl]);

  return (
    <div className="page-shell">
      <section className="section">
        <p className="kicker">Rive Sandbox</p>
        <h1>Rive</h1>
        <p className="copy">
          Drop in a .riv file to see it animate in the browser. This is ideal for stylized character loops, UI motion, and concept art animation experiments.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Load a local Rive file</h2>
        <label htmlFor="rive-file" className="file-label">
          <span role="presentation">Upload .riv</span>
          <span>+</span>
        </label>
        <input id="rive-file" type="file" accept=".riv" className="file-input-field" onChange={onFileChoose} />
        {errorMessage ? <p className="state-error">{errorMessage}</p> : null}
        <p className="state-note">Current source: {sourceLabel}</p>
        <p className="state-note">Tip: keep file names simple like `character-run-loop.riv` so teammates can track assets quickly.</p>
      </section>

      <section className="section">
        <h2 className="section-title">Player</h2>
        {player || <div className="empty-state">Upload a .riv file to begin</div>}
      </section>
    </div>
  );
}
