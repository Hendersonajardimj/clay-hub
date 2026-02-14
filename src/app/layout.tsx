import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CLAY - Creative Playground',
  description: 'Audio-reactive visuals, 3D experiments, and portfolio works in one creative operating space.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-nav">
          <div className="site-nav-inner">
            <Link href="/" className="brand-mark">
              CLAY
            </Link>
            <nav className="nav-links">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/onboarding" className="nav-link">Onboarding</Link>
              <Link href="/playground" className="nav-link">Playground</Link>
              <Link href="/rive" className="nav-link">Rive</Link>
              <Link href="/touch" className="nav-link">Touch Designer</Link>
              <Link href="/ableton" className="nav-link">Ableton</Link>
              <Link href="/orchestration" className="nav-link">Orchestration</Link>
              <Link href="/vault" className="nav-link">Vault</Link>
              <Link href="/music" className="nav-link">Music</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
