'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { navSections } from '@/config/navigation';

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="menu-icon" aria-hidden="true">
      {open ? '×' : '☰'}
    </span>
  );
}

export default function SiteNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <Link href="/" className="brand-mark">
          CLAY
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="primary-nav"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close main navigation' : 'Open main navigation'}
        >
          <MenuIcon open={isOpen} />
        </button>
      </div>
      <nav id="primary-nav" className={`nav-shell ${isOpen ? 'is-open' : ''}`} aria-label="Main">
        {navSections.map((section) => (
          <div className="nav-group" key={section.title}>
            <p className="nav-group-title">{section.title}</p>
            <div className="nav-links">
              {section.items.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className={`nav-link ${pathname === link.href ? 'is-active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </header>
  );
}
