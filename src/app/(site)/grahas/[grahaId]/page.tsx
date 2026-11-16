import { notFound } from "next/navigation";
import Link from "next/link";
import { GRAHAS, getGrahaById } from "@/lib/glyphs/registry";
import { GlyphCanvas } from "@/components/studio/GlyphCanvas";
import { OpticalPreview } from "@/components/studio/OpticalPreview";
import { DisplayTitle } from "@/components/site/DisplayTitle";
import { FadeIn } from "@/components/site/FadeIn";

interface GrahaDetailPageProps {
  params: Promise<{
    grahaId: string;
  }>;
}

export async function generateStaticParams() {
  return GRAHAS.map((g) => ({ grahaId: g.id }));
}

export default async function GrahaDetailPage({ params }: GrahaDetailPageProps) {
  const { grahaId } = await params;
  const graha = getGrahaById(grahaId);

  if (!graha) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 space-y-12">
      {/* Back Link */}
      <FadeIn>
        <Link
          href="/grahas"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-[var(--muted)] hover:text-[var(--cinnabar)] transition-colors"
        >
          ← Back to All Nine Grahas
        </Link>
      </FadeIn>

      {/* Monograph Header */}
      <FadeIn delay={0.08}>
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--muted)]">
              GRAHA #{graha.number}
            </span>
            <span className="font-anek-tamil text-sm font-semibold text-[var(--cinnabar)]">
              {graha.nameTamil}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-medium tracking-tight text-[var(--ink)]">
            <DisplayTitle>{graha.name}</DisplayTitle>
          </h1>

          <div className="text-base text-[var(--muted)] font-serif">
            {graha.nameIAST} • {graha.celestialBody} • {graha.day} • Direction: {graha.direction}
          </div>

          <p className="text-sm sm:text-base text-[var(--ink)] leading-relaxed">
            {graha.traditionalAssociation}
          </p>
        </div>
      </FadeIn>

      {/* Three Candidate Variants Display */}
      <div className="space-y-8">
        <FadeIn delay={0.15}>
          <div className="border-b border-[var(--border)] pb-3">
            <h2 className="font-display text-2xl text-[var(--ink)]">
              Candidate Glyph Variants & Vector Construction
            </h2>
            <p className="text-xs text-[var(--muted)] mt-1">
              Each design variant is engineered on a 1000 UPM grid with documented calligraphic, geometric, and optical parameters.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {graha.variants.map((v, idx) => (
            <FadeIn key={v.id} delay={0.1 * (idx + 1)}>
              <div className="archive-mount rounded-2xl p-6 sm:p-8 space-y-8">
                {/* Variant Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[var(--border)] pb-4">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[var(--cinnabar)] block mb-1">
                      {v.styleLabel}
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-[var(--ink)]">
                      {v.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)]">
                      Codepoint: {v.puaCodepoint}
                    </span>
                    <Link
                      href={`/studio?graha=${graha.id}&variant=${v.id}`}
                      className="rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-1 text-xs text-[var(--ink)] hover:border-[var(--cinnabar)] hover:text-[var(--cinnabar)] transition-colors"
                    >
                      Open in Studio →
                    </Link>
                  </div>
                </div>

                {/* Two-Column Display: Canvas and Construction Table */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-6">
                    <GlyphCanvas variant={v} grahaName={graha.name} />
                  </div>

                  <div className="lg:col-span-6 space-y-6">
                    {/* Design Rationale */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">
                        Design Rationale
                      </h4>
                      <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                        {v.designRationale}
                      </p>
                    </div>

                    {/* Step-by-Step Construction */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">
                        Geometric Construction Steps
                      </h4>
                      <div className="space-y-2">
                        {v.construction.map((step) => (
                          <div
                            key={step.step}
                            className="p-3 rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] text-xs space-y-1"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-[var(--ink)]">
                                Step {step.step}: {step.label}
                              </span>
                              <span className="font-mono text-[10px] text-[var(--bronze)]">
                                {step.geometry}
                              </span>
                            </div>
                            <p className="text-[var(--muted)] leading-relaxed">{step.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Optical Verification */}
                    <div className="pt-2">
                      <OpticalPreview variant={v} grahaName={graha.name} />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
