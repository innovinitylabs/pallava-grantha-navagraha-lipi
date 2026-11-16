"use client";

import { useState } from "react";
import { GRAHAS } from "@/lib/glyphs/registry";
import type { GrahaRecord, GlyphVariant } from "@/lib/glyphs/types";
import { GlyphCanvas } from "@/components/studio/GlyphCanvas";
import { VariantSwitcher } from "@/components/studio/VariantSwitcher";
import { OpticalPreview } from "@/components/studio/OpticalPreview";
import { FadeIn } from "@/components/site/FadeIn";
import { cn } from "@/lib/utils";

export default function StudioPage() {
  const [selectedGraha, setSelectedGraha] = useState<GrahaRecord>(GRAHAS[0]);
  const [selectedVariant, setSelectedVariant] = useState<GlyphVariant>(GRAHAS[0].variants[0]);
  const [copied, setCopied] = useState(false);

  const handleSelectGraha = (graha: GrahaRecord) => {
    setSelectedGraha(graha);
    setSelectedVariant(graha.variants[0]);
  };

  const handleCopySvg = () => {
    const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">\n  <path d="${selectedVariant.svgPath}" fill="none" stroke="currentColor" stroke-width="${selectedVariant.strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>`;
    navigator.clipboard.writeText(svgCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 space-y-12">
      {/* Editorial Header */}
      <FadeIn>
        <div className="space-y-3 max-w-3xl">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[var(--cinnabar)] font-semibold">
            Nava Graha Lipi • Type Design Workbench
          </p>
          <h1 className="font-display text-3xl sm:text-5xl tracking-tight text-[var(--ink)]">
            Interactive Glyph Studio
          </h1>
          <p className="text-base text-[var(--muted)] leading-relaxed">
            Constructing, inspecting, and refining original Indian planetary glyphs on a 1000 UPM OpenType coordinate grid. Compare candidate variants, verify optical scaling, and inspect stroke construction.
          </p>
        </div>
      </FadeIn>

      {/* Planetary Selector Ribbon */}
      <FadeIn delay={0.1}>
        <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 border-b border-[var(--border)] scrollbar-none">
          {GRAHAS.map((g) => {
            const active = g.id === selectedGraha.id;
            return (
              <button
                key={g.id}
                onClick={() => handleSelectGraha(g)}
                className={cn(
                  "flex items-center gap-2.5 px-4 py-2 rounded-lg text-xs font-medium shrink-0 transition-all cursor-pointer",
                  active
                    ? "bg-[var(--surface-elevated)] border border-[var(--cinnabar)] text-[var(--cinnabar)] shadow-xs"
                    : "border border-transparent bg-transparent text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--surface)]"
                )}
              >
                <span className="font-mono text-[10px] text-[var(--muted)]">#{g.number}</span>
                <span className="font-display text-sm tracking-wide">{g.name}</span>
                <span className="font-anek-tamil text-[11px] text-[var(--muted)]">{g.nameTamil}</span>
              </button>
            );
          })}
        </div>
      </FadeIn>

      {/* Workbench Grid: Left Vector Canvas, Right Controls & Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Canvas + Optical Preview (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          <FadeIn delay={0.15}>
            <GlyphCanvas variant={selectedVariant} grahaName={selectedGraha.name} />
          </FadeIn>

          <FadeIn delay={0.25}>
            <OpticalPreview variant={selectedVariant} grahaName={selectedGraha.name} />
          </FadeIn>
        </div>

        {/* Right Column: Variant Selector, Rationale, Metadata, Export (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <FadeIn delay={0.2}>
            {/* Quick Graha Context Card */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[var(--ink)]">
                    {selectedGraha.name}
                  </h3>
                  <div className="text-xs text-[var(--muted)] font-serif mt-0.5">
                    {selectedGraha.nameSanskrit} • {selectedGraha.nameTamil}
                  </div>
                </div>
                <button
                  onClick={handleCopySvg}
                  className="rounded-md border border-[var(--border)] bg-[var(--mount)] px-3 py-1.5 text-xs font-mono text-[var(--ink)] hover:border-[var(--cinnabar)] hover:text-[var(--cinnabar)] transition-colors"
                >
                  {copied ? "Copied!" : "Copy SVG"}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[var(--border)] text-xs text-[var(--muted)]">
                <div>Celestial Body: <strong className="text-[var(--ink)]">{selectedGraha.celestialBody}</strong></div>
                <div>Day: <strong className="text-[var(--ink)]">{selectedGraha.day}</strong></div>
                <div>Element: <strong className="text-[var(--ink)]">{selectedGraha.element}</strong></div>
                <div>Direction: <strong className="text-[var(--ink)]">{selectedGraha.direction}</strong></div>
              </div>

              <div className="pt-2 border-t border-[var(--border)] text-xs text-[var(--muted)]">
                <span className="font-semibold text-[var(--ink)]">Geometric Archetype: </span>
                <span>{selectedGraha.geometricArchetype}</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <VariantSwitcher
              variants={selectedGraha.variants}
              selectedVariantId={selectedVariant.id}
              onSelectVariant={setSelectedVariant}
            />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
