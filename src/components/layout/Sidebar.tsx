'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavItem {
  name: string;
  nameTamil: string;
  href: string;
  icon: string;
  section?: 'core' | 'studio' | 'research' | 'project';
}

const navItems: NavItem[] = [
  { name: 'Overview', nameTamil: 'முகப்பு', href: '/', icon: '🏛️', section: 'core' },
  { name: 'Script Atlas', nameTamil: 'லிபி வரைபடம்', href: '/script-atlas', icon: '📜', section: 'core' },
  { name: 'Character Explorer', nameTamil: 'எழுத்து உலாவி', href: '/character-explorer', icon: '🔍', section: 'core' },
  { name: 'Historical Sources', nameTamil: 'வரலாற்று மூலங்கள்', href: '/historical-sources', icon: '📚', section: 'core' },
  
  { name: 'Glyph Studio', nameTamil: 'வடிவ ஆய்வகம்', href: '/glyph-studio', icon: '✏️', section: 'studio' },
  { name: 'Nava Graha', nameTamil: 'நவ கிரகங்கள்', href: '/navagraha', icon: '🪐', section: 'studio' },
  { name: 'Astronomical Symbols', nameTamil: 'வானியல் குறியீடுகள்', href: '/astronomical-symbols', icon: '✨', section: 'studio' },
  { name: 'Font Laboratory', nameTamil: 'எழுத்துரு கூடம்', href: '/font-lab', icon: '🔤', section: 'studio' },
  
  { name: 'Sanskrit Text Lab', nameTamil: 'சமஸ்கிருத கூடம்', href: '/sanskrit-text-lab', icon: '🕉️', section: 'research' },
  { name: 'Unicode Research', nameTamil: 'யூனிகோட் ஆய்வு', href: '/unicode-research', icon: '🌐', section: 'research' },
  
  { name: 'Documentation', nameTamil: 'ஆவணங்கள்', href: '/documentation', icon: '📖', section: 'project' },
  { name: 'Settings', nameTamil: 'அமைப்புகள்', href: '/settings', icon: '⚙️', section: 'project' },
];

export function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const navContent = (
    <div className="flex flex-col h-full bg-[var(--color-sidebar-bg)] text-[var(--color-sidebar-text)] border-r border-[var(--color-sidebar-border)] w-64 select-none">
      {/* Header / Brand */}
      <div className="p-5 border-b border-[var(--color-sidebar-border)]">
        <Link href="/" className="block group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-[var(--color-accent-maroon)] text-white flex items-center justify-center font-bold text-xl shadow-md border border-[#7A2E2C]">
              ௰
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight text-white group-hover:text-[var(--color-accent-bronze)] transition-colors">
                Nava Graha Lipi
              </div>
              <div className="text-xs text-[var(--color-accent-bronze)] font-serif tracking-wider">
                நவ கிரக லிபி
              </div>
            </div>
          </div>
          <p className="mt-2 text-[11px] text-[var(--color-sidebar-text-muted)] leading-tight">
            Historical Tamil-Region Epigraphy & Astronomical Symbol System
          </p>
        </Link>
      </div>

      {/* Navigation links */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        <div>
          <div className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-sidebar-text-muted)]">
            Epigraphy & Atlas
          </div>
          <div className="space-y-1">
            {navItems.filter((i) => i.section === 'core').map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium transition-all ${
                    active
                      ? 'bg-[var(--color-sidebar-active)] text-white shadow-sm'
                      : 'text-[var(--color-sidebar-text)] hover:bg-[var(--color-sidebar-hover)] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                  <span className={`text-[10px] font-serif ${active ? 'text-red-200' : 'text-[var(--color-sidebar-text-muted)]'}`}>
                    {item.nameTamil}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <div className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-sidebar-text-muted)]">
            Design & Repertoire
          </div>
          <div className="space-y-1">
            {navItems.filter((i) => i.section === 'studio').map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium transition-all ${
                    active
                      ? 'bg-[var(--color-sidebar-active)] text-white shadow-sm'
                      : 'text-[var(--color-sidebar-text)] hover:bg-[var(--color-sidebar-hover)] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                  <span className={`text-[10px] font-serif ${active ? 'text-red-200' : 'text-[var(--color-sidebar-text-muted)]'}`}>
                    {item.nameTamil}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <div className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-sidebar-text-muted)]">
            Linguistics & Standards
          </div>
          <div className="space-y-1">
            {navItems.filter((i) => i.section === 'research').map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium transition-all ${
                    active
                      ? 'bg-[var(--color-sidebar-active)] text-white shadow-sm'
                      : 'text-[var(--color-sidebar-text)] hover:bg-[var(--color-sidebar-hover)] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                  <span className={`text-[10px] font-serif ${active ? 'text-red-200' : 'text-[var(--color-sidebar-text-muted)]'}`}>
                    {item.nameTamil}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <div className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-sidebar-text-muted)]">
            Project
          </div>
          <div className="space-y-1">
            {navItems.filter((i) => i.section === 'project').map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium transition-all ${
                    active
                      ? 'bg-[var(--color-sidebar-active)] text-white shadow-sm'
                      : 'text-[var(--color-sidebar-text)] hover:bg-[var(--color-sidebar-hover)] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                  <span className={`text-[10px] font-serif ${active ? 'text-red-200' : 'text-[var(--color-sidebar-text-muted)]'}`}>
                    {item.nameTamil}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Footer / Status */}
      <div className="p-3 border-t border-[var(--color-sidebar-border)] text-[11px] text-[var(--color-sidebar-text-muted)] bg-black/10">
        <div className="flex items-center justify-between mb-1">
          <span className="font-semibold text-stone-300">Nava Graha Lipi</span>
          <span className="px-1.5 py-0.5 rounded text-[10px] bg-[var(--color-accent-maroon)] text-white">v0.1.0</span>
        </div>
        <p className="text-[10px] leading-tight">
          Pallava Grantha • Vatteluttu • Grantha • Tamil-Brahmi
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle button */}
      <div className="lg:hidden fixed top-3 left-3 z-50">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-md bg-[var(--color-sidebar-bg)] text-white shadow-lg border border-[var(--color-sidebar-border)]"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Desktop static sidebar */}
      <aside className="hidden lg:block shrink-0 h-screen sticky top-0">
        {navContent}
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="relative z-50 h-full">{navContent}</div>
        </div>
      )}
    </>
  );
}
