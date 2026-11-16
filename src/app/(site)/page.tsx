import Link from "next/link";
import { GRAHAS } from "@/lib/glyphs/registry";
import { BrandLogo } from "@/components/site/BrandLogo";
import { DisplayTitle } from "@/components/site/DisplayTitle";
import { FadeIn } from "@/components/site/FadeIn";

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)]">
      {/* Hero Section */}
      <section className="paper-depth mx-auto flex min-h-[72vh] max-w-6xl flex-col justify-center px-6 pt-6 pb-20 sm:min-h-[78vh] md:min-h-[85vh] md:px-10 md:pt-4 md:pb-28">
        <FadeIn>
          <BrandLogo
            href="/"
            size="xl"
            showWordmark={false}
            className="mb-8"
          />
          <p className="text-[0.65rem] tracking-[0.28em] uppercase text-[var(--cinnabar)] font-semibold">
            An Open-Source Indian Astronomical Glyph Initiative
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.08] tracking-tight sm:text-6xl md:text-7xl text-[var(--ink)]">
            <DisplayTitle>Nava Graha Lipi — நவ கிரக லிபி</DisplayTitle>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-8 max-w-2xl text-[1.05rem] leading-relaxed text-[var(--muted)] sm:text-xl md:mt-10">
            Developing an original, historically grounded system of Indian astronomical and planetary glyphs — informed by the monumental epigraphical traditions of the Tamil region, engineered for contemporary digital typography.
          </p>
        </FadeIn>

        <FadeIn delay={0.35} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 md:mt-14">
          <Link
            href="/grahas"
            className="-my-3 inline-block border-b border-[var(--ink)] py-3 text-[0.68rem] tracking-[0.2em] uppercase font-semibold text-[var(--ink)] hover:text-[var(--cinnabar)] hover:border-[var(--cinnabar)] transition-colors"
          >
            Explore the Nine Grahas →
          </Link>
          <Link
            href="/studio"
            className="-my-3 inline-block py-3 text-[0.68rem] tracking-[0.2em] uppercase text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
          >
            Open Glyph Studio
          </Link>
          <Link
            href="/research"
            className="-my-3 inline-block py-3 text-[0.68rem] tracking-[0.2em] uppercase text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
          >
            Historical Epigraphy
          </Link>
        </FadeIn>
      </section>

      {/* The Nine Grahas Preview Grid */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28 space-y-12">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 border-b border-[var(--border)] pb-6">
              <div className="space-y-1">
                <span className="text-[0.62rem] tracking-[0.26em] uppercase text-[var(--cinnabar)] font-semibold">
                  Initial Repertoire
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-[var(--ink)] font-medium">
                  The Nine Planetary Glyphs
                </h2>
              </div>
              <Link
                href="/grahas"
                className="text-xs uppercase tracking-[0.16em] text-[var(--cinnabar)] hover:underline"
              >
                View Full Dossier & Variants →
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-4">
            {GRAHAS.map((g, idx) => {
              const primaryVariant = g.variants[0];
              return (
                <FadeIn key={g.id} delay={0.04 * idx}>
                  <Link
                    href={`/grahas/${g.id}`}
                    className="archive-mount group flex flex-col items-center justify-between p-4 rounded-xl text-center space-y-3 transition-all hover:-translate-y-1"
                  >
                    <span className="font-mono text-[9px] text-[var(--muted)]">
                      #{g.number}
                    </span>

                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] group-hover:border-[var(--cinnabar)] transition-colors shadow-2xs">
                      <svg viewBox="0 0 1000 1000" className="w-10 h-10">
                        <path
                          d={primaryVariant.svgPath}
                          fill="none"
                          stroke="#16120F"
                          strokeWidth="60"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="space-y-0.5">
                      <span className="font-display text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--cinnabar)] transition-colors block">
                        {g.name}
                      </span>
                      <span className="font-anek-tamil text-[10px] text-[var(--muted)] block">
                        {g.nameTamil}
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editorial Dual-Column: Historical Heritage & Mathematical Precision */}
      <section className="border-t border-[var(--border)] bg-[var(--paper)]">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-2 md:gap-18 md:px-10 md:py-28">
          <FadeIn>
            <span className="text-[0.62rem] tracking-[0.26em] uppercase text-[var(--cinnabar)] font-semibold block mb-2">
              Epigraphical Lineage
            </span>
            <h2 className="font-display text-3xl tracking-tight text-[var(--ink)]">
              Informed by the stone, not confined to antiquity
            </h2>
            <div className="prose-anek mt-6 text-[var(--muted)] space-y-4">
              <p>
                The Tamil region holds an unbroken two-thousand-year epigraphical record: from Tamil-Brahmi rock shelters to monumental Pallava royal inscriptions and fluid Vatteluttu copper grants.
              </p>
              <p>
                Nava Graha Lipi studies the stroke ductus, curvature, and loop geometry of Pallava Grantha as the aesthetic foundation for a new Indian astronomical notation system. We do not copy ancient letters; we synthesize their calligraphic logic into original glyphs.
              </p>
              <div className="pt-4">
                <Link
                  href="/research"
                  className="text-xs uppercase tracking-[0.16em] text-[var(--ink)] hover:text-[var(--cinnabar)] font-semibold inline-flex items-center gap-1"
                >
                  Examine Epigraphical Sources →
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <span className="text-[0.62rem] tracking-[0.26em] uppercase text-[var(--bronze)] font-semibold block mb-2">
              Geometric Rigor
            </span>
            <h2 className="font-display text-3xl tracking-tight text-[var(--ink)]">
              Mastered on a 1000 UPM OpenType grid
            </h2>
            <div className="prose-anek mt-6 text-[var(--muted)] space-y-4">
              <p>
                Each glyph is engineered within a 1000 Units Per Em coordinate system, observing strict optical compensations: open counters to prevent fill-in at 12pt panchangam print sizes, balanced vertical axes, and consistent stem weight modulation.
              </p>
              <p>
                Developed under three candidate design variants per Graha—Conservative Pallava, Geometric Yantra, and Calligraphic Modern—our interactive studio enables continuous peer review and outline refinement.
              </p>
              <div className="pt-4">
                <Link
                  href="/studio"
                  className="text-xs uppercase tracking-[0.16em] text-[var(--ink)] hover:text-[var(--cinnabar)] font-semibold inline-flex items-center gap-1"
                >
                  Launch Interactive Studio →
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Research Integrity Declaration */}
      <section className="border-t border-[var(--border)] bg-[var(--surface-elevated)]">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20 text-center space-y-4">
          <span className="text-[0.65rem] uppercase tracking-[0.26em] font-mono text-[var(--cinnabar)] font-semibold">
            Foundational Charter
          </span>
          <h3 className="font-display text-2xl sm:text-3xl text-[var(--ink)]">
            Historical Integrity First. Original Design Second.
          </h3>
          <p className="text-sm text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
            Nava Graha Lipi never fabricates historical claims or presents newly designed symbols as ancient relics. All historical references cite verifiable primary sources, and all planetary glyphs are proudly original designs engineered for the digital era.
          </p>
        </div>
      </section>
    </div>
  );
}
