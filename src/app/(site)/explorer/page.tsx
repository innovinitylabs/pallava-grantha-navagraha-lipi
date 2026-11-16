"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { GRAHAS } from "@/lib/glyphs/registry";
import type { GlyphStyleVariant } from "@/lib/glyphs/types";
import { DisplayTitle } from "@/components/site/DisplayTitle";
import { FadeIn } from "@/components/site/FadeIn";

export default function ExplorerPage() {
  const [search, setSearch] = useState("");
  const [selectedStyle, setSelectedStyle] = useState<GlyphStyleVariant | "all">("all");
  const [selectedElement, setSelectedElement] = useState<string>("all");

  const elements = [
    { value: "all", label: "All Elements" },
    { value: "Agni", label: "Agni (Fire)" },
    { value: "Jala", label: "Jala (Water)" },
    { value: "Prithvi", label: "Prithvi (Earth)" },
    { value: "Vayu", label: "Vayu (Air)" },
    { value: "Akasha", label: "Akasha (Ether)" },
    { value: "Tamas", label: "Tamas / Chhaya (Shadow)" },
  ];

  const styles: { value: GlyphStyleVariant | "all"; label: string }[] = [
    { value: "all", label: "All Variant Styles" },
    { value: "conservative", label: "Variant A (Conservative Pallava)" },
    { value: "geometric", label: "Variant B (Geometric Synthesis)" },
    { value: "calligraphic", label: "Variant C (Calligraphic Modern)" },
  ];

  const filteredGrahas = useMemo(() => {
    return GRAHAS.filter((g) => {
      if (search.trim()) {
        const q = search.toLowerCase().trim();
        const matchesName = g.name.toLowerCase().includes(q);
        const matchesIAST = g.nameIAST.toLowerCase().includes(q);
        const matchesTamil = g.nameTamil.toLowerCase().includes(q);
        const matchesBody = g.celestialBody.toLowerCase().includes(q);
        if (!matchesName && !matchesIAST && !matchesTamil && !matchesBody) {
          return false;
        }
      }

      if (selectedElement !== "all" && !g.element.toLowerCase().includes(selectedElement.toLowerCase())) {
        return false;
      }

      return true;
    });
  }, [search, selectedElement]);

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 space-y-12">
      {/* Header */}
      <FadeIn>
        <div className="space-y-3 max-w-3xl">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[var(--cinnabar)] font-semibold">
            Comparative Typographic Analysis
          </p>
          <h1 className="font-display text-4xl sm:text-5xl tracking-tight text-[var(--ink)]">
            <DisplayTitle>Planetary Glyph Explorer</DisplayTitle>
          </h1>
          <p className="text-base text-[var(--muted)] leading-relaxed">
            Side-by-side comparative inspection of all nine Grahas. Filter by elemental resonance, candidate variant styles, and astrological qualities.
          </p>
        </div>
      </FadeIn>

      {/* Filter and Search Bar */}
      <FadeIn delay={0.1}>
        <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)]">
          <div className="relative flex-1">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name (Surya, Chandra, ஞாயிறு, Mars, Agni)..."
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--paper)] px-4 py-2 text-xs text-[var(--ink)] placeholder-[var(--muted)] focus:outline-none focus:ring-1 focus:ring-[var(--cinnabar)]"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-2 text-xs text-[var(--muted)] hover:text-[var(--ink)]"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value as GlyphStyleVariant | "all")}
              className="rounded-lg border border-[var(--border)] bg-[var(--paper)] px-3 py-2 text-xs text-[var(--ink)] focus:outline-none focus:ring-1 focus:ring-[var(--cinnabar)]"
            >
              {styles.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>

            <select
              value={selectedElement}
              onChange={(e) => setSelectedElement(e.target.value)}
              className="rounded-lg border border-[var(--border)] bg-[var(--paper)] px-3 py-2 text-xs text-[var(--ink)] focus:outline-none focus:ring-1 focus:ring-[var(--cinnabar)]"
            >
              {elements.map((el) => (
                <option key={el.value} value={el.value}>{el.label}</option>
              ))}
            </select>
          </div>
        </div>
      </FadeIn>

      {/* Comparative Cards Table */}
      <div className="space-y-6">
        {filteredGrahas.map((g, idx) => {
          const variantsToDisplay =
            selectedStyle === "all"
              ? g.variants
              : g.variants.filter((v) => v.style === selectedStyle);

          return (
            <FadeIn key={g.id} delay={0.05 * idx}>
              <div className="archive-mount rounded-xl p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[var(--border)] pb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[var(--muted)]">#{g.number}</span>
                    <h3 className="font-display text-xl font-semibold text-[var(--ink)]">
                      {g.name}
                    </h3>
                    <span className="font-anek-tamil text-sm text-[var(--cinnabar)] font-medium">
                      {g.nameTamil}
                    </span>
                    <span className="text-xs text-[var(--muted)] font-serif hidden sm:inline">
                      ({g.nameIAST})
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-[var(--muted)]">
                    <span>{g.celestialBody}</span>
                    <span>•</span>
                    <span>{g.element}</span>
                    <Link
                      href={`/grahas/${g.id}`}
                      className="text-[var(--cinnabar)] font-medium hover:underline ml-2"
                    >
                      Dossier →
                    </Link>
                  </div>
                </div>

                {/* Candidate Variants Side-by-Side */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  {variantsToDisplay.map((v) => (
                    <div
                      key={v.id}
                      className="flex items-center gap-4 p-4 rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)]"
                    >
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-[var(--mount)] border border-[var(--border)]">
                        <svg viewBox="0 0 1000 1000" className="w-10 h-10">
                          <path
                            d={v.svgPath}
                            fill="none"
                            stroke="#16120F"
                            strokeWidth="60"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      <div className="min-w-0 flex-1 space-y-0.5">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--cinnabar)] block">
                          {v.style}
                        </span>
                        <h4 className="font-display text-sm font-semibold text-[var(--ink)] truncate">
                          {v.name}
                        </h4>
                        <div className="font-mono text-[10px] text-[var(--muted)]">
                          {v.puaCodepoint}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
