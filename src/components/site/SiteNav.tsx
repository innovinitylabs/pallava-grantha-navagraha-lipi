"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/grahas",               label: "Nine Grahas"   },
  { href: "/studio",               label: "Glyph Studio"  },
  { href: "/explorer",             label: "Explorer"      },
  { href: "/design-principles",    label: "Principles"    },
  { href: "/research",             label: "Research"      },
  { href: "/typography-fonts",     label: "Typography"    },
  { href: "/documentation",        label: "Docs"          },
];

const MOBILE_LINKS = [
  ...NAV_LINKS,
  { href: "/astronomical-symbols", label: "Symbols"       },
  { href: "/open-source",          label: "Open Source"   },
];

export function SiteNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  /* Close drawer on route change */
  useEffect(() => {
    const t = window.setTimeout(() => setMobileOpen(false), 0);
    return () => window.clearTimeout(t);
  }, [pathname]);

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close drawer when clicking outside */
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-16 transition-[background-color,border-color,box-shadow] duration-300",
        scrolled || mobileOpen
          ? "border-b border-[var(--border)] bg-[var(--paper)]/95 shadow-[0_1px_0_0_var(--border)] backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      )}
      ref={drawerRef as React.RefObject<HTMLElement>}
    >
      {/* ── Main bar ─────────────────────────────────────────────────────── */}
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-6 lg:px-10">

        {/* Brandmark */}
        <BrandLogo href="/" size="md" showWordmark />

        {/* Desktop nav — hidden below lg */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-0.5"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3.5 py-2 text-[0.7rem] uppercase tracking-[0.14em] font-medium transition-colors duration-150",
                  active
                    ? "text-[var(--cinnabar)]"
                    : "text-[var(--muted)] hover:text-[var(--ink)]"
                )}
              >
                {link.label}
                {active && (
                  <span
                    aria-hidden
                    className="absolute bottom-0 inset-x-3.5 h-[1px] bg-[var(--cinnabar)] rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="https://github.com/innovinitylabs/pallava-grantha-navagraha-lipi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            Open Source
          </a>
        </div>

        {/* Mobile hamburger — only visible below lg */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-md text-[var(--ink)] hover:bg-[var(--cinnabar-subtle)] transition-colors"
        >
          <span aria-hidden className="flex flex-col gap-[5px] w-5">
            <span className={cn(
              "block h-[1.5px] bg-current rounded-full transition-all duration-200",
              mobileOpen && "translate-y-[6.5px] rotate-45"
            )} />
            <span className={cn(
              "block h-[1.5px] bg-current rounded-full transition-all duration-200",
              mobileOpen && "opacity-0"
            )} />
            <span className={cn(
              "block h-[1.5px] bg-current rounded-full transition-all duration-200",
              mobileOpen && "-translate-y-[6.5px] -rotate-45"
            )} />
          </span>
        </button>
      </div>

      {/* ── Mobile drawer ─────────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--border)] bg-[var(--paper)] px-6 py-6">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {MOBILE_LINKS.map((link, i) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center border-b border-[var(--border)] py-3.5 text-sm uppercase tracking-[0.14em] transition-colors",
                    i === 0 && "border-t",
                    active
                      ? "font-semibold text-[var(--cinnabar)]"
                      : "text-[var(--ink)] hover:text-[var(--cinnabar)]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
