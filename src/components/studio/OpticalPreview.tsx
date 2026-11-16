"use client";

import type { GlyphVariant } from "@/lib/glyphs/types";

interface OpticalPreviewProps {
  variant: GlyphVariant;
  grahaName: string;
}

export function OpticalPreview({ variant, grahaName }: OpticalPreviewProps) {
  const sizes = [
    { label: "12pt (Panchangam Micro)", size: 16, strokeWidth: 70 },
    { label: "16pt (Running Text)", size: 22, strokeWidth: 64 },
    { label: "24pt (Sub-heading)", size: 32, strokeWidth: 54 },
    { label: "48pt (Display)", size: 64, strokeWidth: 48 },
    { label: "96pt (Monumental)", size: 120, strokeWidth: 44 },
  ];

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 space-y-6">
      <div>
        <h4 className="font-display text-base font-semibold text-[var(--ink)]">
          Optical Size & Contrast Verification — {grahaName}
        </h4>
        <p className="text-xs text-[var(--muted)] mt-0.5">
          Verifying legibility, counter-space preservation, and stroke integrity from 12pt table micro-sizes to 96pt display.
        </p>
      </div>

      {/* Dual Surface Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Light Archival Paper */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--paper)] p-6 space-y-4">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[var(--muted)] block">
            Archival Rag Paper (#F4F0E8)
          </span>

          <div className="flex flex-wrap items-baseline gap-6 sm:gap-8 pt-2">
            {sizes.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2">
                <svg
                  viewBox="0 0 1000 1000"
                  style={{ width: s.size, height: s.size }}
                  className="shrink-0"
                >
                  <path
                    d={variant.svgPath}
                    fill="none"
                    stroke="#16120F"
                    strokeWidth={s.strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-mono text-[9px] text-[var(--muted)]">{s.size}px</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dark Inscriptional Stone */}
        <div className="rounded-xl border border-[#2D2A26] bg-[#161311] p-6 space-y-4 text-white">
          <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block">
            Deep Inscriptional Stone (#161311)
          </span>

          <div className="flex flex-wrap items-baseline gap-6 sm:gap-8 pt-2">
            {sizes.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2">
                <svg
                  viewBox="0 0 1000 1000"
                  style={{ width: s.size, height: s.size }}
                  className="shrink-0"
                >
                  <path
                    d={variant.svgPath}
                    fill="none"
                    stroke="#F4F0E8"
                    strokeWidth={s.strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-mono text-[9px] text-stone-400">{s.size}px</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
