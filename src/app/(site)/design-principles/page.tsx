import { DisplayTitle } from "@/components/site/DisplayTitle";
import { FadeIn } from "@/components/site/FadeIn";

export default function DesignPrinciplesPage() {
  const principles = [
    {
      number: "01",
      title: "Pallava Grantha Calligraphic Ductus",
      tamil: "பல்லவ கிரந்த எழுத்து அமைப்பியல்",
      description:
        "The primary visual foundation of Nava Graha Lipi is derived from 5th–8th century Pallava Grantha stone and copper-plate inscriptional ductus. Distinctive horizontal serif terminals, sweeping counter-clockwise loops, and organic stem terminals inform our glyphs, setting them apart from Northern Brahmi derivatives.",
      metrics: "Top-bar thickness: 60 UPM • Serif overhang: 40 UPM • Axis tilt: 0° to 3°",
    },
    {
      number: "02",
      title: "Mathematical & Geometric Precision",
      tamil: "வடிவியல் மற்றும் கணித நேர்த்தி",
      description:
        "Every glyph is drafted strictly on a 1000 Units Per Em (UPM) OpenType coordinate grid. Cardinal geometric archetypes (Circle, Crescent, Equilateral Triangle, Rectangular Portal, Pentagonal Star, and Serpent Crest) are geometrically constructed with cubic Bézier curves, ensuring smooth curvature without inflections.",
      metrics: "Baseline: Y=700 • Cap-Height: Y=250 • Optical Center: Y=480 • UPM: 1000",
    },
    {
      number: "03",
      title: "Negative Space & Counter Preservation",
      tamil: "உட்புற இடைவெளிப் பாதுகாப்பு",
      description:
        "Astronomical almanacs (Panchangams) and mobile chart software frequently render glyphs at small sizes (12pt–14pt). Glyphs are designed with generous internal counters and softened inner cusps, preventing ink trap clumping and pixel coalescence on low-DPI screens.",
      metrics: "Minimum counter diameter: 140 UPM • Minimum stroke separation: 60 UPM",
    },
    {
      number: "04",
      title: "Non-Overlap with Western Astronomical Sigils",
      tamil: "மேற்கத்திய குறியீடுகளிலிருந்து தனித்துவம்",
      description:
        "A critical requirement for eventual character standardisation is semantic and visual non-overlap. The planetary symbols must never borrow or lightly modify Western astrological glyphs (☉, ☽, ♂, ☿, ♃, ♀, ♄, ☊, ☋). Instead, each glyph expresses indigenous Indian cosmological geometry.",
      metrics: "Independent glyph geometry • Independent stroke order • UTC Non-Duplication compliant",
    },
    {
      number: "05",
      title: "Dual-Surface Contrast Engineering",
      tamil: "இருதள மாறுபாட்டுச் சமநிலை",
      description:
        "Glyph outlines are tested across both positive (dark carbon ink on light archival rag paper #F4F0E8) and negative (light bronze/vermilion on deep inscriptional granite stone #161311) polarities to maintain balanced perceived stroke weight.",
      metrics: "Optical weight compensation: -8% on dark background to prevent irradiation bloom",
    },
    {
      number: "06",
      title: "Three-Tier Candidate Variant Architecture",
      tamil: "முப்பரிமாண வடிவமைப்பு வகைகள்",
      description:
        "To ensure thorough peer review and consensus, each Graha is developed across three candidate variants: Conservative Pallava (epigraphic purity), Geometric Synthesis (Yantra and celestial mechanics), and Calligraphic Modern (contemporary high-DPI publishing).",
      metrics: "3 candidate designs per Graha • 27 total vector masters in initial repertoire",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 space-y-16">
      {/* Header */}
      <FadeIn>
        <div className="space-y-4 max-w-3xl">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[var(--cinnabar)] font-semibold">
            Typographic Architecture & Epigraphic Methodology
          </p>
          <h1 className="font-display text-4xl sm:text-6xl tracking-tight text-[var(--ink)]">
            <DisplayTitle>Design Principles</DisplayTitle>
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            The mathematical, calligraphic, and optical standards governing the creation of Nava Graha Lipi. Bridging historical South Indian epigraphy with 21st-century digital typeface engineering.
          </p>
        </div>
      </FadeIn>

      {/* Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {principles.map((p, idx) => (
          <FadeIn key={p.number} delay={0.06 * idx}>
            <div className="archive-mount rounded-2xl p-6 sm:p-8 space-y-5 flex flex-col justify-between h-full">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                  <span className="font-mono text-xs text-[var(--cinnabar)] font-semibold">
                    PRINCIPLE {p.number}
                  </span>
                  <span className="font-anek-tamil text-xs text-[var(--muted)]">
                    {p.tamil}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-semibold text-[var(--ink)]">
                  {p.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border)]">
                <span className="font-mono text-[10px] text-[var(--bronze)] block">
                  {p.metrics}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Grid Specification Diagram Card */}
      <FadeIn delay={0.4}>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-8 space-y-6">
          <div className="space-y-2">
            <span className="text-[0.65rem] uppercase tracking-[0.24em] font-mono text-[var(--cinnabar)] font-semibold">
              Specification Matrix
            </span>
            <h3 className="font-display text-2xl font-semibold text-[var(--ink)]">
              The 1000 Units Per Em (UPM) Coordinate Frame
            </h3>
            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed max-w-2xl">
              All glyph vectors are mastered in absolute integer coordinates within a normalized 1000×1000 unit em-square. This guarantees seamless compilation into OpenType CFF (OTF) and TrueType (TTF) tables without rounding artifacts.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--mount)] space-y-1">
              <span className="text-[var(--muted)] text-[10px] uppercase">Ascender Line</span>
              <div className="text-sm font-bold text-[var(--ink)]">Y = 150</div>
              <p className="text-[10px] text-[var(--muted)]">+850 from baseline</p>
            </div>
            <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--mount)] space-y-1">
              <span className="text-[var(--muted)] text-[10px] uppercase">Cap-Height</span>
              <div className="text-sm font-bold text-[var(--ink)]">Y = 250</div>
              <p className="text-[10px] text-[var(--muted)]">+450 from baseline</p>
            </div>
            <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--mount)] space-y-1">
              <span className="text-[var(--cinnabar)] text-[10px] uppercase font-bold">Baseline</span>
              <div className="text-sm font-bold text-[var(--cinnabar)]">Y = 700</div>
              <p className="text-[10px] text-[var(--muted)]">Primary grounding axis</p>
            </div>
            <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--mount)] space-y-1">
              <span className="text-[var(--muted)] text-[10px] uppercase">Descender Line</span>
              <div className="text-sm font-bold text-[var(--ink)]">Y = 850</div>
              <p className="text-[10px] text-[var(--muted)]">-150 from baseline</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
