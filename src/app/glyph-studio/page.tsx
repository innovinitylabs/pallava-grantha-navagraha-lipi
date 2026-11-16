import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

export default function GlyphStudioPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Nava Graha Glyph Studio"
        titleTamil="எழுத்து வடிவ ஆய்வகம்"
        subtitle="A digital design workstation for creating historically grounded astronomical symbols"
        description="The Glyph Studio is dedicated to constructing original astronomical symbols using Pallava Grantha structural and calligraphic principles. Rather than converting random letters or borrowing Western astronomical sigils, each glyph is crafted with documented geometric, calligraphic, and astronomical rationale."
      />

      {/* Principles of Pallava Grantha Calligraphy */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 space-y-3">
          <div className="w-8 h-8 rounded-lg bg-[var(--color-accent-maroon)] text-white flex items-center justify-center font-bold text-sm">
            1
          </div>
          <h3 className="text-base font-bold text-[var(--color-text-primary)] font-serif">
            Ductus & Stroke Geometry
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            Pallava Grantha letterforms are characterized by distinct serif-like horizontal top bars, graceful counter-clockwise loops, and sweeping terminal descenders. The studio maintains consistent stroke weight and terminal angles.
          </p>
        </Card>

        <Card className="p-6 space-y-3">
          <div className="w-8 h-8 rounded-lg bg-[var(--color-accent-bronze)] text-white flex items-center justify-center font-bold text-sm">
            2
          </div>
          <h3 className="text-base font-bold text-[var(--color-text-primary)] font-serif">
            Geometric Iconography
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            Investigating traditional Indian geometric associations (Yantra geometries, Mandalas, and Panchangam notations) as foundational references, cross-validated across regional Tamil and pan-Indian astronomical treatises.
          </p>
        </Card>

        <Card className="p-6 space-y-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-bold text-sm">
            3
          </div>
          <h3 className="text-base font-bold text-[var(--color-text-primary)] font-serif">
            Original Design Integrity
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            Every newly developed glyph is clearly identified as an original modern creation. We do not invent claims that these glyphs existed in antiquity, preventing epigraphic distortion.
          </p>
        </Card>
      </section>

      {/* Glyph Studio Architecture & Tooling */}
      <Card className="p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[var(--color-border)] pb-4">
          <div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] font-serif">
              Glyph Design Workbench (Stage 4 Target)
            </h3>
            <p className="text-xs text-[var(--color-text-muted)]">
              Specifications for the vector editor and UFO-compatible outline pipeline
            </p>
          </div>
          <Link
            href="/navagraha"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent-maroon)] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[var(--color-accent-maroon-light)] transition-colors"
          >
            Inspect Navagraha Repertoire →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] space-y-2">
            <h4 className="font-bold text-[var(--color-text-primary)]">1. Precision Grid & Baseline</h4>
            <p className="text-[var(--color-text-secondary)]">
              1000 UPM coordinate system aligned with standard OpenType font metrics, cap-height, x-height, and baseline rules.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] space-y-2">
            <h4 className="font-bold text-[var(--color-text-primary)]">2. Triple Design Variations</h4>
            <p className="text-[var(--color-text-secondary)]">
              Each Graha receives three distinct candidate designs: Conservative Pallava, Geometric Synthesis, and Calligraphic Flourish.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] space-y-2">
            <h4 className="font-bold text-[var(--color-text-primary)]">3. Optical Correction</h4>
            <p className="text-[var(--color-text-secondary)]">
              Small-size preview at 12pt, 16pt, and 24pt, with dark and light background contrast verification.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] space-y-2">
            <h4 className="font-bold text-[var(--color-text-primary)]">4. OpenType Export</h4>
            <p className="text-[var(--color-text-secondary)]">
              SVG to UFO and OTF generation using cubic Bézier curves for cross-platform rendering.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
