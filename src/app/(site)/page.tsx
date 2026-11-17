import Link from "next/link";
import { GRAHAS } from "@/lib/glyphs/registry";
import { DisplayTitle } from "@/components/site/DisplayTitle";
import { FadeIn } from "@/components/site/FadeIn";

/* ─── Inline SVG: Astronomical composition (sun + orbital rings) ──────────── */
function AstronomicalDiagram() {
  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      {/* Outer orbit ring */}
      <circle
        cx="240" cy="240" r="210"
        stroke="var(--border)"
        strokeWidth="1"
        strokeDasharray="3 6"
      />
      {/* Middle orbit ring */}
      <circle
        cx="240" cy="240" r="152"
        stroke="var(--border)"
        strokeWidth="1"
        strokeDasharray="2 5"
      />
      {/* Inner orbit ring */}
      <circle
        cx="240" cy="240" r="92"
        stroke="var(--bronze)"
        strokeWidth="0.75"
        strokeDasharray="2 4"
        opacity="0.5"
      />

      {/* Central solar disc */}
      <circle
        cx="240" cy="240" r="38"
        stroke="var(--ink)"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Central bindu */}
      <circle
        cx="240" cy="240" r="6"
        fill="var(--cinnabar)"
      />

      {/* Cardinal ray accents — Pallava solar crown motif */}
      <line x1="240" y1="186" x2="240" y2="168" stroke="var(--ink)" strokeWidth="1.25" strokeLinecap="round" />
      <line x1="240" y1="294" x2="240" y2="312" stroke="var(--ink)" strokeWidth="1.25" strokeLinecap="round" />
      <line x1="186" y1="240" x2="168" y2="240" stroke="var(--ink)" strokeWidth="1.25" strokeLinecap="round" />
      <line x1="294" y1="240" x2="312" y2="240" stroke="var(--ink)" strokeWidth="1.25" strokeLinecap="round" />

      {/* Diagonal rays */}
      <line x1="213" y1="213" x2="200" y2="200" stroke="var(--ink)" strokeWidth="0.75" strokeLinecap="round" opacity="0.5" />
      <line x1="267" y1="213" x2="280" y2="200" stroke="var(--ink)" strokeWidth="0.75" strokeLinecap="round" opacity="0.5" />
      <line x1="213" y1="267" x2="200" y2="280" stroke="var(--ink)" strokeWidth="0.75" strokeLinecap="round" opacity="0.5" />
      <line x1="267" y1="267" x2="280" y2="280" stroke="var(--ink)" strokeWidth="0.75" strokeLinecap="round" opacity="0.5" />

      {/* Planet node — Chandra (moon) on middle orbit */}
      <circle cx="240" cy="88" r="7"
        stroke="var(--ink)" strokeWidth="1" fill="var(--surface-elevated)" />
      {/* Planet node — Maṅgala on outer orbit */}
      <circle cx="450" cy="240" r="6"
        stroke="var(--bronze)" strokeWidth="1" fill="var(--surface-elevated)" />
      {/* Rāhu node mark */}
      <circle cx="80" cy="310" r="4"
        stroke="var(--cinnabar)" strokeWidth="1" fill="none" />
      <line x1="80" y1="302" x2="80" y2="296" stroke="var(--cinnabar)" strokeWidth="1" strokeLinecap="round" />

      {/* Grid crosshairs */}
      <line x1="240" y1="30" x2="240" y2="450"
        stroke="var(--border)" strokeWidth="0.5" strokeDasharray="1 8" />
      <line x1="30" y1="240" x2="450" y2="240"
        stroke="var(--border)" strokeWidth="0.5" strokeDasharray="1 8" />

      {/* Metric label annotations */}
      <text x="246" y="174" fontSize="8" fill="var(--muted)" fontFamily="monospace" opacity="0.7">Candra</text>
      <text x="456" y="244" fontSize="8" fill="var(--muted)" fontFamily="monospace" opacity="0.7">Maṅgala</text>
      <text x="30" y="316" fontSize="8" fill="var(--cinnabar)" fontFamily="monospace" opacity="0.8">Rāhu</text>
      <text x="204" y="260" fontSize="7" fill="var(--muted)" fontFamily="monospace" opacity="0.5">1000 UPM</text>
    </svg>
  );
}

/* ─── Single Graha cell for specimen grid ────────────────────────────────── */
function GrahaSpecimenCell({
  graha,
  index,
}: {
  graha: (typeof GRAHAS)[number];
  index: number;
}) {
  const v = graha.variants[0];

  return (
    <FadeIn delay={0.03 * index} className="h-full">
      <Link
        href={`/grahas/${graha.id}`}
        className="group flex h-full flex-col items-center px-3 py-6 text-center
          border-r border-[var(--border)] last:border-r-0
          hover:bg-[var(--cinnabar-subtle)] transition-colors duration-300"
      >
        {/* Serial number */}
        <span className="font-mono text-[9px] tracking-widest text-[var(--muted)] num-tabular mb-4 block">
          {String(graha.number).padStart(2, "0")}
        </span>

        {/* Glyph specimen */}
        <div className="relative mx-auto mb-4 h-14 w-14 flex items-center justify-center">
          <svg
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            aria-hidden="true"
          >
            <path
              d={v.svgPath}
              fill="none"
              stroke="var(--ink)"
              strokeWidth={v.strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Name */}
        <span className="font-display text-[0.85rem] font-semibold leading-tight text-[var(--ink)] group-hover:text-[var(--cinnabar)] transition-colors block mb-1">
          {graha.name}
        </span>

        {/* Tamil name */}
        <span className="font-anek-tamil text-[0.65rem] text-[var(--muted)] block mb-3 leading-tight">
          {graha.nameTamil}
        </span>

        {/* Status pill */}
        <span className="inline-block rounded-sm border border-[var(--border)] bg-[var(--surface-elevated)] px-1.5 py-0.5 text-[8px] uppercase tracking-[0.12em] text-[var(--muted)]">
          {v.status}
        </span>
      </Link>
    </FadeIn>
  );
}

/* ─── Design principle card ──────────────────────────────────────────────── */
function PrincipleCard({
  number,
  title,
  body,
  delay,
}: {
  number: string;
  title: string;
  body: string;
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="border-t border-[var(--border)] pt-6 space-y-3">
        <span className="font-mono text-[0.6rem] tracking-[0.2em] text-[var(--cinnabar)]">
          {number}
        </span>
        <h3 className="font-display text-lg font-medium text-[var(--ink)]">
          {title}
        </h3>
        <p className="text-[0.84rem] leading-relaxed text-[var(--muted)]">
          {body}
        </p>
      </div>
    </FadeIn>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* ══ HERO ════════════════════════════════════════════════════════════ */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-0 lg:grid-cols-2 px-6 lg:px-10">

          {/* Left column — editorial text */}
          <div className="flex flex-col justify-center py-20 lg:py-28 lg:pr-16">

            <FadeIn>
              <p className="mb-7 inline-flex items-center gap-3">
                <span className="rule-cinnabar" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[var(--cinnabar)]">
                  Open-Source · Indian Astronomical Glyphs · Unicode Research
                </span>
              </p>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="font-display text-5xl font-semibold leading-[1.06] tracking-tight text-[var(--ink)] sm:text-6xl xl:text-7xl">
                <DisplayTitle>
                  Nava Graha Lipi
                </DisplayTitle>
              </h1>
              <h1 className="font-anek-tamil mt-2 text-3xl font-light leading-snug text-[var(--muted)] sm:text-4xl">
                நவ கிரக லிபி
              </h1>
            </FadeIn>

            <FadeIn delay={0.18}>
              <p className="mt-8 max-w-lg text-base leading-[1.8] text-[var(--muted)] sm:text-lg">
                An independent, historically grounded initiative to develop
                original Indian astronomical and planetary glyph symbols —
                informed by Tamil-region epigraphy, engineered for
                contemporary digital typography.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="/grahas"
                className="inline-flex items-center gap-2 rounded-sm bg-[var(--ink)] px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--paper)] transition-colors hover:bg-[var(--cinnabar)]"
              >
                Explore the Nine Grahas
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="/studio"
                className="inline-flex items-center gap-2 border border-[var(--border)] px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
              >
                Open Glyph Studio
              </Link>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-14 flex items-center gap-6 border-t border-[var(--border)] pt-8 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                <span>9 Grahas</span>
                <span className="text-[var(--border)]">|</span>
                <span>27 Candidate Glyphs</span>
                <span className="text-[var(--border)]">|</span>
                <span>61 Historical Characters</span>
              </div>
            </FadeIn>
          </div>

          {/* Right column — astronomical diagram */}
          <div
            className="hidden lg:flex items-center justify-center border-l border-[var(--border)] py-20 px-10"
            aria-hidden="true"
          >
            <FadeIn delay={0.15} className="w-full max-w-sm">
              <div className="relative aspect-square w-full">
                <AstronomicalDiagram />
              </div>
              <p className="mt-4 text-center font-mono text-[0.6rem] tracking-[0.14em] uppercase text-[var(--muted)]">
                Navagraha orbital diagram — 1000 UPM coordinate reference
              </p>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* ══ NINE GRAHAS SPECIMEN STRIP ══════════════════════════════════════ */}
      <section className="border-b border-[var(--border)] bg-[var(--surface-elevated)]">
        <div className="mx-auto max-w-screen-xl px-6 lg:px-10">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 border-b border-[var(--border)] py-6">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-[var(--cinnabar)]">
                Initial Repertoire
              </span>
              <h2 className="font-display text-xl font-medium text-[var(--ink)]">
                The Nine Planetary Glyphs — நவ கிரகங்கள்
              </h2>
            </div>
            <Link
              href="/grahas"
              className="text-[0.65rem] uppercase tracking-[0.16em] text-[var(--cinnabar)] hover:underline shrink-0"
            >
              Full Dossier & Variants →
            </Link>
          </div>

          {/* 9-column grid — collapses gracefully on mobile */}
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 divide-x divide-[var(--border)]">
            {GRAHAS.map((g, idx) => (
              <GrahaSpecimenCell key={g.id} graha={g} index={idx} />
            ))}
          </div>
        </div>
      </section>


      {/* ══ RESEARCH FOUNDATION ═════════════════════════════════════════════ */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-0 lg:grid-cols-2 px-6 lg:px-10">

          {/* Historical context */}
          <div className="border-b border-[var(--border)] lg:border-b-0 lg:border-r py-16 lg:pr-16">
            <FadeIn>
              <span className="rule-cinnabar mb-6 block" />
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-[var(--cinnabar)]">
                Epigraphical Lineage
              </span>
              <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-[var(--ink)]">
                Informed by the stone,<br />not confined to antiquity
              </h2>
              <div className="mt-6 space-y-4 text-[0.9rem] leading-relaxed text-[var(--muted)]">
                <p>
                  The Tamil region holds an unbroken two-thousand-year
                  epigraphical record — from Tamil-Brahmi rock shelters
                  to monumental Pallava royal inscriptions and fluid
                  Vatteluttu copper grants.
                </p>
                <p>
                  Nava Graha Lipi studies the stroke ductus, curvature,
                  and loop geometry of Pallava Grantha as the aesthetic
                  foundation for a new Indian astronomical notation system.
                  We do not copy ancient letters; we synthesise their
                  calligraphic logic into original glyphs.
                </p>
                <p className="text-[0.75rem] border-l-2 border-[var(--bronze)] pl-4 italic text-[var(--muted)]">
                  All historical references cite verifiable primary sources.
                  No newly designed glyph is ever presented as an ancient symbol.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/research"
                  className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--ink)] hover:text-[var(--cinnabar)] transition-colors"
                >
                  Epigraphic Sources →
                </Link>
                <Link
                  href="/research/pallava-atlas"
                  className="text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
                >
                  Pallava Atlas (61 characters)
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Reference cards */}
          <FadeIn delay={0.12} className="py-16 lg:pl-16">
            <span className="rule-cinnabar mb-6 block" style={{ background: "var(--bronze)" }} />
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-[var(--bronze)]">
              Primary Sources
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-[var(--ink)]">
              Research grounded in<br />verifiable evidence
            </h2>
            <div className="mt-8 space-y-3">
              {[
                {
                  code: "L2/18-083",
                  title: "Preliminary Proposal to Encode Pallava in Unicode",
                  author: "Anshuman Pandey, 2018",
                  note: "61 Pallava character specimens with script comparison tables"
                },
                {
                  code: "ASI",
                  title: "Archaeological Survey of India",
                  author: "Epigraphia Indica (ongoing)",
                  note: "Primary corpus of South Indian inscriptional evidence"
                },
                {
                  code: "TNAA",
                  title: "Tamil Nadu Archaeology Dept.",
                  author: "Annual Reports",
                  note: "Regional epigraphy with Tamil-Brahmi and Vatteluttu records"
                }
              ].map((s) => (
                <div
                  key={s.code}
                  className="research-card rounded-sm p-4 space-y-1"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-mono text-[0.6rem] tracking-widest text-[var(--cinnabar)]">
                      [{s.code}]
                    </span>
                  </div>
                  <p className="text-[0.82rem] font-medium text-[var(--ink)]">
                    {s.title}
                  </p>
                  <p className="text-[0.72rem] text-[var(--muted)]">{s.author}</p>
                  <p className="text-[0.68rem] text-[var(--muted)] italic">{s.note}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ══ GLYPH STUDIO PREVIEW ════════════════════════════════════════════ */}
      <section className="border-b border-[var(--border)] bg-[var(--ink)]">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-0 lg:grid-cols-2 px-6 lg:px-10">

          {/* Studio panel mock */}
          <div className="border-b border-white/10 lg:border-b-0 lg:border-r border-r-white/10 py-14 lg:pr-16">
            <FadeIn>
              {/* Fake coordinate grid */}
              <div className="relative h-64 w-full overflow-hidden rounded-sm border border-white/10 bg-[#0f0d0b] p-6">
                {/* Grid lines */}
                <svg viewBox="0 0 400 240" className="absolute inset-0 h-full w-full" aria-hidden>
                  {/* Vertical grid */}
                  {[0, 100, 200, 300, 400].map((x) => (
                    <line key={x} x1={x} y1={0} x2={x} y2={240} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  ))}
                  {/* Horizontal grid */}
                  {[0, 60, 120, 180, 240].map((y) => (
                    <line key={y} x1={0} y1={y} x2={400} y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  ))}
                  {/* Baseline */}
                  <line x1={0} y1={168} x2={400} y2={168} stroke="rgba(140,45,25,0.6)" strokeWidth="1" strokeDasharray="4 4" />
                  {/* Cap height */}
                  <line x1={0} y1={60} x2={400} y2={60} stroke="rgba(148,120,70,0.5)" strokeWidth="1" strokeDasharray="3 6" />
                  {/* Center axis */}
                  <line x1={200} y1={0} x2={200} y2={240} stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 4" />

                  {/* Sūrya glyph at reduced scale — variant A */}
                  {/* Map 1000 UPM to ~200x200 centered at (200,120) */}
                  <g transform="translate(100 20) scale(0.2)">
                    <path
                      d="M 500 240 C 640 240 750 350 750 490 C 750 630 640 740 500 740 C 360 740 250 630 250 490 C 250 350 360 240 500 240 Z M 500 440 C 470 440 450 460 450 490 C 450 520 470 540 500 540 C 530 540 550 520 550 490 C 550 460 530 440 500 440 Z M 480 160 L 520 160 L 520 230 L 480 230 Z M 500 750 L 500 830 M 170 490 L 240 490 M 760 490 L 830 490"
                      fill="none"
                      stroke="rgba(244,240,232,0.85)"
                      strokeWidth="48"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>

                  {/* Metric labels */}
                  <text x="4" y="164" fontSize="6" fill="rgba(140,45,25,0.8)" fontFamily="monospace">BL Y=700</text>
                  <text x="4" y="56" fontSize="6" fill="rgba(148,120,70,0.8)" fontFamily="monospace">CH Y=250</text>
                  <text x="202" y="12" fontSize="6" fill="rgba(255,255,255,0.3)" fontFamily="monospace">x=500</text>
                </svg>

                {/* Overlay labels */}
                <div className="absolute bottom-3 right-3 flex items-center gap-3 text-[0.55rem] font-mono uppercase tracking-widest text-white/30">
                  <span>1000 UPM</span>
                  <span>Variant A</span>
                  <span className="text-[var(--cinnabar)]">Sūrya</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Studio description */}
          <FadeIn delay={0.12} className="py-14 lg:pl-16 flex flex-col justify-center">
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-[var(--cinnabar)]">
              Interactive Design Environment
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-[var(--paper)]">
              Design, compare, and<br />refine glyph candidates
            </h2>
            <div className="mt-6 space-y-3 text-[0.88rem] leading-relaxed text-white/50">
              <p>
                The Glyph Studio renders each planetary symbol on a
                calibrated 1000 UPM coordinate system with adjustable
                stroke weight, zoom, paper/stone themes, and copyable
                SVG source.
              </p>
              <p>
                Three design variants per Graha — Conservative Pallava
                Ductus, Geometric Yantra Synthesis, and Calligraphic
                Modern — enable side-by-side comparison and community
                peer review.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-6">
              <Link
                href="/studio"
                className="inline-flex items-center gap-2 border border-[var(--paper)]/20 px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--paper)] hover:border-[var(--cinnabar)] hover:text-[var(--cinnabar)] transition-colors"
              >
                Launch Studio →
              </Link>
              <Link
                href="/explorer"
                className="inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.16em] text-white/40 hover:text-white/70 transition-colors"
              >
                Glyph Explorer
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ══ DESIGN PRINCIPLES ═══════════════════════════════════════════════ */}
      <section className="border-b border-[var(--border)] bg-[var(--paper-deep)]">
        <div className="mx-auto max-w-screen-xl px-6 lg:px-10 py-16 lg:py-24">
          <FadeIn>
            <div className="mb-12 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4">
              <div>
                <span className="rule-cinnabar mb-4 block" />
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-[var(--cinnabar)]">
                  Methodology
                </span>
                <h2 className="mt-2 font-display text-3xl font-medium text-[var(--ink)]">
                  Design Principles
                </h2>
              </div>
              <Link
                href="/design-principles"
                className="text-[0.65rem] uppercase tracking-[0.16em] text-[var(--muted)] hover:text-[var(--ink)] transition-colors shrink-0"
              >
                Full methodology →
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-0">
            <PrincipleCard
              number="01"
              title="Historical Fidelity"
              body="Every stroke derives from documented Pallava, Vatteluttu, or Tamil-Brahmi calligraphic logic. No design decision is arbitrary; each has an epigraphical precedent or a rationale grounded in observable script morphology."
              delay={0}
            />
            <PrincipleCard
              number="02"
              title="1000 UPM Geometric Rigor"
              body="All glyphs are engineered on a 1000 Units Per Em OpenType grid. Baseline at Y=700, cap-height at Y=250, optical axis at X=500. Stem widths and counter spaces are computed, not drawn."
              delay={0.07}
            />
            <PrincipleCard
              number="03"
              title="Optical Compensation"
              body="Generous open counters prevent ink-trap fill-in at 12pt panchangam print sizes. Rounded joints at branch intersections maintain stroke rhythm at display scales."
              delay={0.14}
            />
            <PrincipleCard
              number="04"
              title="Cultural Distinction"
              body="Tamil-region epigraphical traditions — not Devanagari, not pan-Indic generalisations — provide the design foundation. Pallava Grantha and Vatteluttu are distinct traditions treated with individual precision."
              delay={0.07}
            />
            <PrincipleCard
              number="05"
              title="Three-Variant Review"
              body="Each Graha receives Conservative Pallava, Geometric Yantra Synthesis, and Calligraphic Modern candidates. No single variant is authoritative; community review determines progression toward a final encoding proposal."
              delay={0.14}
            />
            <PrincipleCard
              number="06"
              title="Research Integrity"
              body="Historical symbols are never fabricated. All 61 Pallava reference characters in the atlas cite Pandey (2018) provenance. The design section and the research section are architecturally separate."
              delay={0.21}
            />
          </div>
        </div>
      </section>


      {/* ══ OPEN SOURCE CHARTER ═════════════════════════════════════════════ */}
      <section>
        <div className="mx-auto max-w-screen-xl px-6 lg:px-10 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            <FadeIn className="col-span-1 md:col-span-2">
              <span className="rule-cinnabar mb-5 block" />
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-[var(--cinnabar)]">
                Foundational Charter
              </span>
              <h2 className="mt-3 font-display text-3xl font-medium text-[var(--ink)]">
                Open source, openly accountable
              </h2>
              <p className="mt-5 max-w-xl text-[0.9rem] leading-relaxed text-[var(--muted)]">
                Nava Graha Lipi is published under three complementary
                licences — SIL OFL 1.1 for fonts, CC BY 4.0 for artwork,
                and MIT for software — to ensure the widest possible use
                while maintaining attribution integrity.
              </p>
              <div className="mt-8 flex flex-wrap gap-5">
                <Link
                  href="/open-source"
                  className="inline-flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--ink)] hover:text-[var(--cinnabar)] transition-colors"
                >
                  Contributions & Licensing →
                </Link>
                <a
                  href="https://github.com/innovinitylabs/pallava-grantha-navagraha-lipi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
                >
                  GitHub Repository ↗
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="space-y-4">
                {[
                  { label: "SIL OFL 1.1", scope: "Font files and glyph outlines", accent: "var(--cinnabar)" },
                  { label: "CC BY 4.0",   scope: "Glyph artwork and SVG assets",   accent: "var(--bronze)"   },
                  { label: "MIT",         scope: "Application source code",         accent: "var(--accent)"   },
                ].map((lic) => (
                  <div
                    key={lic.label}
                    className="flex items-start gap-4 border-t border-[var(--border)] pt-4"
                  >
                    <span
                      className="mt-0.5 shrink-0 w-1 h-8 rounded-full"
                      style={{ background: lic.accent }}
                    />
                    <div>
                      <span className="font-mono text-[0.72rem] font-semibold text-[var(--ink)]">
                        {lic.label}
                      </span>
                      <p className="mt-0.5 text-[0.72rem] text-[var(--muted)]">
                        {lic.scope}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
