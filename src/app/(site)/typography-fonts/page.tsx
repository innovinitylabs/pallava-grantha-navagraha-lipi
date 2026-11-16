import { DisplayTitle } from "@/components/site/DisplayTitle";
import { FadeIn } from "@/components/site/FadeIn";

export default function TypographyFontsPage() {
  const pipeline = [
    {
      stage: "Stage 01",
      title: "Master SVG Outlines",
      format: "1000 UPM Vector Grid",
      description:
        "Cubic Bézier outlines drafted with closed contours, consistent stroke weight modulation (44–64 UPM), and standardized metric alignments (Baseline Y=700, Cap-Height Y=250).",
      status: "In Progress (9 Grahas × 3 Variants)",
    },
    {
      stage: "Stage 02",
      title: "Unified Font Object (UFO3)",
      format: "UFO3 Directory Architecture",
      description:
        "Platform-agnostic source files storing raw GLIF data, glyph lib metrics, kerning pairs, and OpenType layout features, version-controlled directly in Git.",
      status: "Architecture Staged",
    },
    {
      stage: "Stage 03",
      title: "OpenType Binary Compilation",
      format: "AFDKO / FontTools Build Pipeline",
      description:
        "Automated build scripts compiling UFO sources into production-grade CFF OpenType (OTF), TrueType (TTF), and web font (WOFF2) binaries.",
      status: "Tooling Specification",
    },
    {
      stage: "Stage 04",
      title: "Cross-Platform Validation & Shaping",
      format: "Fontbakery / HarfBuzz / macOS & iOS QA",
      description:
        "Rigorous automated testing for contour direction, outline overlaps, OpenType feature execution, and native HarfBuzz text shaping compliance across Safari, Chrome, and desktop publishing suites.",
      status: "QA Matrix Defined",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 space-y-16">
      {/* Header */}
      <FadeIn>
        <div className="space-y-4 max-w-3xl">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[var(--cinnabar)] font-semibold">
            Open-Source Typeface Engineering
          </p>
          <h1 className="font-display text-4xl sm:text-6xl tracking-tight text-[var(--ink)]">
            <DisplayTitle>Typography & Font Pipeline</DisplayTitle>
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Nava Graha Lipi develops a companion open-source reference typeface under the SIL Open Font License 1.1. Our goal is to enable immediate digital typesetting in panchangams, astronomical publications, and mobile software.
          </p>
        </div>
      </FadeIn>

      {/* 4-Stage Typeface Pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pipeline.map((item, idx) => (
          <FadeIn key={item.stage} delay={0.06 * idx}>
            <div className="archive-mount rounded-2xl p-6 space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-3">
                <span className="font-mono text-[10px] text-[var(--cinnabar)] font-semibold">
                  {item.stage}
                </span>
                <h3 className="font-display text-xl font-semibold text-[var(--ink)]">
                  {item.title}
                </h3>
                <span className="font-mono text-[10px] text-[var(--bronze)] block">
                  {item.format}
                </span>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border)]">
                <span className="font-mono text-[10px] text-[var(--muted)]">
                  {item.status}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Mandatory PUA Disclaimer Card */}
      <FadeIn delay={0.3}>
        <div className="rounded-2xl border border-[var(--cinnabar)]/30 bg-[var(--surface-elevated)] p-8 max-w-4xl mx-auto space-y-4 border-l-4 border-l-[var(--cinnabar)]">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[var(--cinnabar)] font-semibold">
              Standardisation Precaution
            </span>
            <span className="font-mono text-xs text-[var(--muted)]">• U+E000 to U+E008</span>
          </div>

          <h4 className="font-display text-2xl font-semibold text-[var(--ink)]">
            Private Use Area (PUA) Assignments are Strictly Experimental
          </h4>

          <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
            During current development, the nine Navagraha glyphs are assigned to the Unicode Private Use Area (U+E000 to U+E008) exclusively to facilitate typeface compilation, browser testing, and panchangam typesetting mockups.
            <strong className="text-[var(--ink)] block mt-2">
              These PUA assignments must never be advertised or mistaken as standardised Unicode characters. Permanent codepoints require UTC review following real-world community adoption.
            </strong>
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
