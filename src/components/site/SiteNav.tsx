"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { cn } from "@/lib/utils";

const links = [
  { href: "/grahas", label: "Nine Grahas", labelTamil: "நவ கிரகங்கள்" },
  { href: "/studio", label: "Glyph Studio", labelTamil: "வடிவ ஆய்வகம்" },
  { href: "/explorer", label: "Explorer", labelTamil: "உலாவி" },
  { href: "/design-principles", label: "Principles", labelTamil: "அமைப்பியல்" },
  { href: "/astronomical-symbols", label: "Symbols", labelTamil: "குறியீடுகள்" },
  { href: "/research", label: "Research", labelTamil: "ஆய்வு" },
  { href: "/typography-fonts", label: "Typography", labelTamil: "எழுத்துரு" },
  { href: "/documentation", label: "Docs", labelTamil: "ஆவணங்கள்" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setMobileOpen(false), 0);
    return () => window.clearTimeout(timeout);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-40 w-full transition-[background-color,border-color,backdrop-filter] duration-300 ease-out",
        scrolled || mobileOpen
          ? "border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <BrandLogo href="/" size="md" showWordmark />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-xs uppercase tracking-[0.16em] transition-colors",
                  active
                    ? "font-semibold text-[var(--cinnabar)]"
                    : "text-[var(--muted)] hover:text-[var(--ink)]"
                )}
              >
                <span>{link.label}</span>
                {active && (
                  <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-[var(--cinnabar)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA / GitHub */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/open-source"
            className="rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-3.5 py-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--ink)] transition-colors hover:border-[var(--cinnabar)] hover:text-[var(--cinnabar)]"
          >
            Open Source
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-[var(--ink)] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <span className="font-mono text-sm">{mobileOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-6 shadow-xl">
          <nav className="flex flex-col space-y-4">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center justify-between text-sm uppercase tracking-[0.14em]",
                    active ? "font-bold text-[var(--cinnabar)]" : "text-[var(--ink)]"
                  )}
                >
                  <span>{link.label}</span>
                  <span className="font-anek-tamil text-xs text-[var(--muted)]">{link.labelTamil}</span>
                </Link>
              );
            })}
            <div className="pt-4 border-t border-[var(--border)]">
              <Link
                href="/open-source"
                className="inline-block text-xs uppercase tracking-[0.18em] text-[var(--cinnabar)]"
              >
                GitHub Repository & Contributions →
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
