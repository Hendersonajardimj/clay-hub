'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { navSections } from '@/config/navigation';
import type { NavSection } from '@/config/navigation';

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="menu-icon" aria-hidden="true">
      {open ? '×' : '☰'}
    </span>
  );
}

function NavLinkItem({
  href,
  label,
  isActive,
  onActivate
}: {
  href: string;
  label: string;
  isActive: boolean;
  onActivate: () => void;
}) {
  return (
    <Link
      href={href}
      className={`nav-link ${isActive ? 'is-active' : ''}`}
      onClick={onActivate}
      aria-current={isActive ? 'page' : undefined}
    >
      <span className="nav-link-text">{label}</span>
    </Link>
  );
}

function NavSectionList({
  section,
  pathname,
  onNavigate
}: {
  section: NavSection;
  pathname: string;
  onNavigate: () => void;
}) {
  return (
    <section className="nav-group" aria-label={section.title}>
      <p className="nav-group-title">{section.title}</p>
      <div className="nav-links">
        {section.items.map((link) => (
          <NavLinkItem
            key={link.href}
            href={link.href}
            label={link.label}
            isActive={pathname === link.href}
            onActivate={onNavigate}
          />
        ))}
      </div>
    </section>
  );
}

export default function SiteNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const desktopMatcher = window.matchMedia('(min-width: 769px)');

    const syncMode = () => {
      setIsDesktop(desktopMatcher.matches);
    };

    syncMode();
    desktopMatcher.addEventListener('change', syncMode);

    return () => {
      desktopMatcher.removeEventListener('change', syncMode);
    };
  }, []);

  const isNavOpen = isDesktop || isOpen;
  const isMobileMenuClosed = !isDesktop && !isOpen;

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
      <nav
        id="primary-nav"
        className={`nav-shell ${isNavOpen ? 'is-open' : ''}`}
        aria-label="Main"
        aria-hidden={isMobileMenuClosed}
        inert={isMobileMenuClosed}
      >
        {navSections.map((section) => (
          <NavSectionList
            key={section.title}
            section={section}
            pathname={pathname}
            onNavigate={() => setIsOpen(false)}
          />
        ))}
      </nav>
    </header>
  );
}
