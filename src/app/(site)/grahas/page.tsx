import Link from "next/link";
import { GRAHAS } from "@/lib/glyphs/registry";
import { DisplayTitle } from "@/components/site/DisplayTitle";
import { FadeIn } from "@/components/site/FadeIn";

export default function GrahasPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 space-y-16">
      {/* Header */}
      <FadeIn>
        <div className="space-y-4 max-w-3xl">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[var(--cinnabar)] font-semibold">
            The Initial Repertoire
          </p>
          <h1 className="font-display text-4xl sm:text-6xl tracking-tight text-[var(--ink)]">
            <DisplayTitle>The Nine Grahas — நவ கிரகங்கள்</DisplayTitle>
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            The foundation of Nava Graha Lipi. Each celestial body in the Indian astronomical tradition is defined through original typographic glyphs, engineered across three candidate design variants to balance inscriptional ductus, yantra geometry, and digital legibility.
          </p>
        </div>
      </FadeIn>

      {/* 9 Graha Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {GRAHAS.map((g, idx) => {
          const primaryVariant = g.variants[0];
          return (
            <FadeIn key={g.id} delay={0.06 * idx}>
              <div className="archive-mount group flex flex-col justify-between rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="space-y-5">
                  {/* Top Bar: Number & Tamil Script Name */}
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                    <span className="font-mono text-xs text-[var(--muted)]">
                      GRAHA 0{g.number}
                    </span>
                    <span className="font-anek-tamil text-sm font-semibold text-[var(--cinnabar)]">
                      {g.nameTamil}
                    </span>
                  </div>

                  {/* Centered Master Vector Glyph Display */}
                  <div className="flex items-center justify-center py-6">
                    <div className="relative flex h-36 w-36 items-center justify-center rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] shadow-xs transition-transform duration-300 group-hover:scale-105">
                      <svg viewBox="0 0 1000 1000" className="w-24 h-24">
                        <path
                          d={primaryVariant.svgPath}
                          fill="none"
                          stroke="#16120F"
                          strokeWidth="56"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Identity & Astronomical Details */}
                  <div className="space-y-1.5 text-center">
                    <h3 className="font-display text-2xl font-semibold text-[var(--ink)] group-hover:text-[var(--cinnabar)] transition-colors">
                      {g.name}
                    </h3>
                    <div className="text-xs text-[var(--muted)] font-serif">
                      {g.nameSanskrit} • {g.celestialBody}
                    </div>
                    <div className="text-[11px] text-[var(--bronze)]">
                      {g.day} • {g.element}
                    </div>
                  </div>

                  <p className="text-xs text-[var(--muted)] leading-relaxed text-center line-clamp-3 pt-2">
                    {g.traditionalAssociation}
                  </p>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs">
                  <span className="font-mono text-[10px] text-[var(--muted)]">
                    {g.variants.length} Design Variants
                  </span>
                  <Link
                    href={`/grahas/${g.id}`}
                    className="font-medium text-[var(--cinnabar)] hover:underline inline-flex items-center gap-1"
                  >
                    Examine Specs →
                  </Link>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      {/* Research Clarification Banner */}
      <FadeIn delay={0.4}>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-8 max-w-4xl mx-auto space-y-3 text-center">
          <span className="text-[0.65rem] uppercase tracking-[0.24em] font-mono text-[var(--cinnabar)] font-semibold block">
            Research Integrity Declaration
          </span>
          <h4 className="font-display text-xl text-[var(--ink)]">
            Original Glyph Creation vs. Historical Script Recording
          </h4>
          <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
            These planetary glyphs are original modern creations developed under this initiative. While their stroke dynamics and curves are rigorously informed by 5th–8th century Pallava Grantha and Vatteluttu epigraphy, they are explicitly not presented as ancient historical symbols.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
