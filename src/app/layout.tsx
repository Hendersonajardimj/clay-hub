import './globals.css';
import type { Metadata } from 'next';
import SiteNavigation from '@/components/SiteNavigation';

export const metadata: Metadata = {
  title: 'CLAY - Creative Playground',
  description: 'Audio-reactive visuals, 3D experiments, and portfolio works in one creative operating space.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteNavigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
