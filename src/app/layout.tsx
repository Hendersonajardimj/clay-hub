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
            <strong>CLAY</strong>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/playground">Playground</Link>
              <Link href="/vault">Vault</Link>
              <Link href="/music">Music</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
