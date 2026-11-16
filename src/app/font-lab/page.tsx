import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';

export default function FontLabPage() {
  const pipelineStages = [
    {
      stage: '1. Vector Master Outlines',
      format: 'SVG / Cubic Bézier',
      description: 'Master vector glyphs drawn on a 1000 UPM grid with defined optical metrics, stroke weights, and terminal angles.',
      status: 'In Progress (PUA E000–E008 for testing)',
    },
    {
      stage: '2. Unified Font Object (UFO)',
      format: 'UFO3 Specification',
      description: 'Interoperable source format separating glyph geometry (GLIF), font info, kerning, and OpenType layout features.',
      status: 'Pipeline Staging',
    },
    {
      stage: '3. OpenType Compilation',
      format: 'AFDKO / FontTools',
      description: 'Automated compilation pipeline compiling UFO sources into production-ready OpenType (OTF) and TrueType (TTF) fonts.',
      status: 'Specification Ready',
    },
    {
      stage: '4. Validation & Cross-Platform QA',
      format: 'Fontbakery / HarfBuzz',
      description: 'Rigorous font testing covering outline sanity, HarfBuzz shaping conformance, macOS, iOS, Android, and web browser compatibility.',
      status: 'Test Suite Architecture',
    },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Open-Source Font Laboratory"
        titleTamil="எழுத்துரு ஆய்வகம்"
        subtitle="End-to-end typeface engineering pipeline from SVG masters to validated OpenType binaries"
        description="Nava Graha Lipi develops an open-source reference typeface (under the SIL Open Font License 1.1) to make the historical Tamil-region scripts and new astronomical symbols immediately usable in digital publishing, web applications, and typesetting software."
      />

      {/* Font Engineering Pipeline */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-[var(--color-text-primary)] font-serif">
          Four-Stage Typeface Pipeline
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pipelineStages.map((stage, idx) => (
            <Card key={idx} className="p-5 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--color-accent-maroon)] text-white">
                  Stage {idx + 1}
                </span>
                <h4 className="text-sm font-bold text-[var(--color-text-primary)] font-serif mt-2">
                  {stage.stage}
                </h4>
                <div className="text-xs text-[var(--color-accent-bronze)] font-mono mt-0.5">
                  {stage.format}
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                  {stage.description}
                </p>
              </div>
              <div className="pt-2 border-t border-[var(--color-border)] text-[10px] text-[var(--color-text-muted)]">
                {stage.status}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Private Use Area (PUA) Clarification */}
      <Card className="p-6 space-y-3 border-amber-800/40 bg-amber-950/10 dark:bg-amber-950/20">
        <div className="flex items-center gap-2">
          <span className="text-amber-700 dark:text-amber-400 font-bold text-sm">⚠️ Mandatory Standardisation Warning:</span>
          <span className="text-xs font-bold text-[var(--color-text-primary)]">PUA Codepoints are Strictly for Testing</span>
        </div>
        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
          During experimental development and community prototyping, glyphs are mapped to the Unicode Private Use Area (U+E000 to U+E008). 
          <strong> These PUA assignments must never be advertised or mistaken as official Unicode characters.</strong> They exist exclusively 
          to facilitate internal font rendering verification and layout testing prior to any formal standardisation review.
        </p>
      </Card>
    </div>
  );
}
