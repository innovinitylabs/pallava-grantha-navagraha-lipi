import { BRAND } from "@/lib/brand";
import { DisplayTitle } from "@/components/site/DisplayTitle";
import { FadeIn } from "@/components/site/FadeIn";

export default function OpenSourcePage() {
  const cffCode = `cff-version: 1.2.0
message: "If you use this software, font, or research output, please cite it as below."
type: software
title: "Nava Graha Lipi"
abstract: "An open-source Indian astronomical glyph initiative developing original planetary symbols informed by Tamil-region epigraphical traditions."
authors:
  - name: "Valipokkann & Nava Graha Lipi Contributors"
license: MIT
repository-code: "https://github.com/innovinitylabs/pallava-grantha-navagraha-lipi"
keywords:
  - navagraha
  - indian-astronomy
  - epigraphy
  - pallava-grantha
  - typography
  - glyph-design
  - unicode
version: "0.1.0"`;

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 space-y-16">
      {/* Header */}
      <FadeIn>
        <div className="space-y-4 max-w-3xl">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[var(--cinnabar)] font-semibold">
            Public Collaboration & Licensing
          </p>
          <h1 className="font-display text-4xl sm:text-6xl tracking-tight text-[var(--ink)]">
            <DisplayTitle>Open Source & Governance</DisplayTitle>
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Nava Graha Lipi is fully open-source and developed in public. We invite contributions from digital epigraphers, type designers, panchangam scholars, astronomical software authors, and font engineers.
          </p>
        </div>
      </FadeIn>

      {/* GitHub Repository Banner */}
      <FadeIn delay={0.1}>
        <div className="archive-mount rounded-2xl p-8 sm:p-10 space-y-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[var(--cinnabar)] font-semibold">
              Canonical GitHub Repository
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--ink)]">
              innovinitylabs/pallava-grantha-navagraha-lipi
            </h2>
            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              Browse the complete repository, clone the UFO font sources, inspect the Next.js web application, or open an issue for epigraphical corrections.
            </p>
          </div>

          <a
            href={BRAND.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-[var(--ink)] text-white px-6 py-3.5 text-xs uppercase tracking-[0.18em] hover:bg-[var(--cinnabar)] transition-colors shadow-xs"
          >
            Visit GitHub Repository ↗
          </a>
        </div>
      </FadeIn>

      {/* Tripartite Licensing Architecture */}
      <div className="space-y-6">
        <FadeIn delay={0.15}>
          <div className="border-b border-[var(--border)] pb-3">
            <h3 className="font-display text-2xl font-semibold text-[var(--ink)]">
              Tripartite Licensing Structure
            </h3>
            <p className="text-xs text-[var(--muted)] mt-1">
              To maximize adoption across open software, commercial publishing, and academic research, components are licensed under industry-standard terms.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn delay={0.2}>
            <div className="archive-mount rounded-2xl p-6 space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[var(--cinnabar)] font-semibold">
                  Software & Web App
                </span>
                <h4 className="font-display text-xl font-semibold text-[var(--ink)]">
                  MIT License
                </h4>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  Permissive open-source software license. You can freely use, modify, distribute, and embed the Next.js web application and tools in any personal or commercial project.
                </p>
              </div>
              <div className="pt-3 border-t border-[var(--border)] text-[10px] font-mono text-[var(--muted)]">
                File: LICENSE
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="archive-mount rounded-2xl p-6 space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[var(--cinnabar)] font-semibold">
                  Typeface & Fonts
                </span>
                <h4 className="font-display text-xl font-semibold text-[var(--ink)]">
                  SIL Open Font License 1.1
                </h4>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  The gold standard for open-source digital typography. Allows free bundling, embedding in apps and web pages, and derivative modifications without software contamination.
                </p>
              </div>
              <div className="pt-3 border-t border-[var(--border)] text-[10px] font-mono text-[var(--muted)]">
                File: LICENSE-FONT
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="archive-mount rounded-2xl p-6 space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[var(--cinnabar)] font-semibold">
                  Artwork & Metadata
                </span>
                <h4 className="font-display text-xl font-semibold text-[var(--ink)]">
                  Creative Commons Attribution (CC BY 4.0)
                </h4>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  Original vector artwork, glyph SVG masters, and epigraphical research databases are shareable and adaptable with proper attribution.
                </p>
              </div>
              <div className="pt-3 border-t border-[var(--border)] text-[10px] font-mono text-[var(--muted)]">
                File: LICENSE-ARTWORK
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Citation File Format (CITATION.cff) */}
      <FadeIn delay={0.35}>
        <div className="archive-mount rounded-2xl p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[var(--border)] pb-3">
            <h3 className="font-display text-xl font-semibold text-[var(--ink)]">
              Academic Citation (CITATION.cff)
            </h3>
            <span className="text-[10px] font-mono text-[var(--muted)]">
              Standard Citation File Format
            </span>
          </div>

          <p className="text-xs text-[var(--muted)] leading-relaxed">
            If you reference Nava Graha Lipi in an academic paper, epigraphical survey, or software package, please cite using the standard Citation File Format:
          </p>

          <pre className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-4 text-xs font-mono text-[var(--ink)] overflow-x-auto leading-relaxed">
            {cffCode}
          </pre>
        </div>
      </FadeIn>
    </div>
  );
}
