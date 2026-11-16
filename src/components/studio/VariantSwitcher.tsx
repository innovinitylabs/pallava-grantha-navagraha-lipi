"use client";

import type { GlyphVariant } from "@/lib/glyphs/types";
import { cn } from "@/lib/utils";

interface VariantSwitcherProps {
  variants: GlyphVariant[];
  selectedVariantId: string;
  onSelectVariant: (variant: GlyphVariant) => void;
}

export function VariantSwitcher({
  variants,
  selectedVariantId,
  onSelectVariant,
}: VariantSwitcherProps) {
  const selected = variants.find((v) => v.id === selectedVariantId) || variants[0];

  return (
    <div className="space-y-6">
      {/* 3-Variant Tab Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {variants.map((v) => {
          const active = v.id === selectedVariantId;
          return (
            <button
              key={v.id}
              onClick={() => onSelectVariant(v)}
              className={cn(
                "flex flex-col text-left p-4 rounded-xl border transition-all cursor-pointer",
                active
                  ? "border-[var(--cinnabar)] bg-[var(--surface-elevated)] shadow-xs ring-1 ring-[var(--cinnabar)]"
                  : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--ink)]/30"
              )}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--muted)]">
                  {v.style}
                </span>
                <span className={cn(
                  "h-2 w-2 rounded-full",
                  active ? "bg-[var(--cinnabar)]" : "bg-transparent"
                )} />
              </div>
              <h4 className="font-display text-sm font-semibold text-[var(--ink)]">
                {v.name}
              </h4>
              <p className="text-[11px] text-[var(--muted)] line-clamp-1 mt-0.5">
                {v.styleLabel}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Variant Dossier */}
      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-5">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[var(--cinnabar)] font-semibold block mb-1">
            Design Rationale & Ductus
          </span>
          <p className="text-sm leading-relaxed text-[var(--ink)]">
            {selected.designRationale}
          </p>
        </div>

        {/* Construction Steps Breakdown */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[var(--muted)] font-semibold block mb-2">
            Step-by-Step Geometric Construction
          </span>
          <div className="space-y-2">
            {selected.construction.map((step) => (
              <div
                key={step.step}
                className="flex items-start gap-3 p-3 rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] text-xs"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--mount)] font-mono text-[10px] font-bold text-[var(--ink)]">
                  {step.step}
                </span>
                <div className="space-y-0.5">
                  <div className="font-semibold text-[var(--ink)]">{step.label}</div>
                  <div className="text-[var(--muted)] leading-relaxed">{step.description}</div>
                  <div className="font-mono text-[10px] text-[var(--bronze)] mt-1">{step.geometry}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optical & Metric Notes */}
        <div className="pt-4 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-[var(--muted)]">
          <div>
            <span className="font-semibold text-[var(--ink)]">Optical Compensation: </span>
            <span>{selected.opticalNotes}</span>
          </div>
          <span className="font-mono text-[10px] shrink-0 px-2 py-1 rounded bg-[var(--mount)] border border-[var(--border)]">
            Status: {selected.status}
          </span>
        </div>
      </div>
    </div>
  );
}
