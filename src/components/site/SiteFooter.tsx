import Link from "next/link";
import { BrandLogo } from "@/components/site/BrandLogo";
import { BRAND } from "@/lib/brand";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-14 md:px-10 bg-[var(--paper-deep)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4 max-w-md">
          <BrandLogo href="/" size="sm" showWordmark />
          <p className="text-[0.84rem] leading-relaxed text-[var(--muted)]">
            An independent, open-source Indian astronomical glyph initiative. Grounded in the epigraphical traditions of the Tamil region; engineered with contemporary type-design standards.
          </p>
          <div className="text-[0.68rem] tracking-[0.16em] uppercase text-[var(--muted)] space-x-3">
            <span>SIL OFL 1.1 (Fonts)</span>
            <span>•</span>
            <span>CC BY 4.0 (Artwork)</span>
            <span>•</span>
            <span>MIT (Software)</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-14 text-xs">
          <div className="space-y-2">
            <span className="text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink)] font-semibold block">
              Core Application
            </span>
            <ul className="space-y-1.5 text-[var(--muted)]">
              <li><Link href="/grahas" className="hover:text-[var(--ink)]">The Nine Grahas</Link></li>
              <li><Link href="/studio" className="hover:text-[var(--ink)]">Glyph Studio</Link></li>
              <li><Link href="/explorer" className="hover:text-[var(--ink)]">Glyph Explorer</Link></li>
              <li><Link href="/astronomical-symbols" className="hover:text-[var(--ink)]">Astronomical Notation</Link></li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink)] font-semibold block">
              Research & Heritage
            </span>
            <ul className="space-y-1.5 text-[var(--muted)]">
              <li><Link href="/research" className="hover:text-[var(--ink)]">Epigraphic Sources</Link></li>
              <li><Link href="/research/pallava-atlas" className="hover:text-[var(--ink)]">Pallava Character Atlas</Link></li>
              <li><Link href="/design-principles" className="hover:text-[var(--ink)]">Geometric Methodology</Link></li>
              <li><Link href="/typography-fonts" className="hover:text-[var(--ink)]">Font Engineering</Link></li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink)] font-semibold block">
              Project
            </span>
            <ul className="space-y-1.5 text-[var(--muted)]">
              <li><Link href="/documentation" className="hover:text-[var(--ink)]">Unicode Roadmap</Link></li>
              <li><Link href="/open-source" className="hover:text-[var(--ink)]">Contributions</Link></li>
              <li>
                <a
                  href={BRAND.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--cinnabar)]"
                >
                  GitHub Repository ↗
                </a>
              </li>
              <li>
                <a
                  href={BRAND.authorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.62rem] tracking-[0.26em] uppercase text-[var(--muted)] hover:text-[var(--ink)] block pt-2"
                >
                  Valipokkann
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
