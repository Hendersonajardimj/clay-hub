"use client";

import { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { ChangeEvent } from 'react';

const Rive = dynamic(() => import('@rive-app/react-canvas'), {
  ssr: false,
  loading: () => <div className="visual-canvas" style={{ display: 'grid', placeItems: 'center', color: 'var(--muted)' }}>Loading Rive runtime…</div>
});

export default function RiveStudio() {
  const [assetUrl, setAssetUrl] = useState<string | null>(null);
  const [sourceLabel, setSourceLabel] = useState('No file selected yet');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

const onFileChoose = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files?.[0];
    if (!selected) return;
    if (!selected.name.toLowerCase().endsWith('.riv')) {
      setErrorMessage('Please choose a .riv file');
      return;
    }
    setErrorMessage(null);
    const nextUrl = URL.createObjectURL(selected);
    setAssetUrl((previous) => {
      if (previous) URL.revokeObjectURL(previous);
      return nextUrl;
    });
    setSourceLabel(selected.name);
  };

  useEffect(() => {
    return () => {
      if (assetUrl) URL.revokeObjectURL(assetUrl);
    };
  }, [assetUrl]);

  const player = useMemo(() => {
    if (!assetUrl) return null;
    return <Rive src={assetUrl} className="visual-canvas" />;
  }, [assetUrl]);

  return (
    <div className="page-shell">
      <section className="section">
        <p style={{ color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.12rem', textTransform: 'uppercase', marginBottom: 4 }}>
          Rive Sandbox
        </p>
        <h1>Rive</h1>
        <p style={{ color: 'var(--muted)' }}>
          Drop in a .riv file to see it animate in the browser. This is ideal for stylized character loops, UI motion, and concept art animation experiments.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Load a local Rive file</h2>
        <input type="file" accept=".riv" onChange={onFileChoose} />
        {errorMessage ? <p style={{ color: '#ff9e9e', marginTop: '0.6rem' }}>{errorMessage}</p> : null}
        <p style={{ color: 'var(--muted)', marginTop: 12 }}>Current source: {sourceLabel}</p>
      </section>

      <section className="section">
        <h2 className="section-title">Player</h2>
        {player || (
          <div className="visual-canvas" style={{ display: 'grid', placeItems: 'center', color: 'var(--muted)' }}>
            Upload a .riv file to begin
          </div>
        )}
      </section>
    </div>
  );
}
