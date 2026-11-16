"use client";

import { useState } from "react";
import type { GlyphVariant } from "@/lib/glyphs/types";
import { cn } from "@/lib/utils";

interface GlyphCanvasProps {
  variant: GlyphVariant;
  grahaName: string;
}

export function GlyphCanvas({ variant, grahaName }: GlyphCanvasProps) {
  const [showGrid, setShowGrid] = useState(true);
  const [showMetrics, setShowMetrics] = useState(true);
  const [strokeWidth, setStrokeWidth] = useState(variant.strokeWidth || 48);
  const [theme, setTheme] = useState<"paper" | "stone">("paper");
  const [colorMode, setColorMode] = useState<"ink" | "cinnabar" | "bronze">("ink");
  const [zoom, setZoom] = useState(1);

  const glyphColor =
    theme === "stone"
      ? colorMode === "cinnabar"
        ? "#E06D53"
        : colorMode === "bronze"
        ? "#D4B37F"
        : "#FAF6F0"
      : colorMode === "cinnabar"
      ? "#8C2D19"
      : colorMode === "bronze"
      ? "#947846"
      : "#16120F";

  return (
    <div className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] overflow-hidden shadow-xs">
      {/* Studio Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-display text-sm font-semibold tracking-wide text-[var(--ink)]">
            {grahaName}
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--mount)] text-[var(--muted)]">
            {variant.puaCodepoint}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          {/* Grid Toggles */}
          <div className="flex items-center gap-1.5 border-r border-[var(--border)] pr-3">
            <button
              onClick={() => setShowGrid(!showGrid)}
              className={cn(
                "px-2 py-1 rounded text-[11px] font-mono transition-colors",
                showGrid
                  ? "bg-[var(--cinnabar)] text-white"
                  : "bg-[var(--mount)] text-[var(--muted)] hover:text-[var(--ink)]"
              )}
            >
              Grid
            </button>
            <button
              onClick={() => setShowMetrics(!showMetrics)}
              className={cn(
                "px-2 py-1 rounded text-[11px] font-mono transition-colors",
                showMetrics
                  ? "bg-[var(--cinnabar)] text-white"
                  : "bg-[var(--mount)] text-[var(--muted)] hover:text-[var(--ink)]"
              )}
            >
              Metrics
            </button>
          </div>

          {/* Theme Surface Toggle */}
          <div className="flex items-center gap-1 border-r border-[var(--border)] pr-3">
            <button
              onClick={() => setTheme("paper")}
              className={cn(
                "px-2 py-1 rounded text-[11px] transition-colors",
                theme === "paper" ? "bg-[var(--ink)] text-white" : "text-[var(--muted)]"
              )}
            >
              Paper
            </button>
            <button
              onClick={() => setTheme("stone")}
              className={cn(
                "px-2 py-1 rounded text-[11px] transition-colors",
                theme === "stone" ? "bg-[var(--ink)] text-white" : "text-[var(--muted)]"
              )}
            >
              Stone
            </button>
          </div>

          {/* Color Mode */}
          <div className="flex items-center gap-1 border-r border-[var(--border)] pr-3">
            <button
              onClick={() => setColorMode("ink")}
              className={cn(
                "h-5 w-5 rounded-full border border-black/20 bg-[#16120F]",
                colorMode === "ink" && "ring-2 ring-[var(--cinnabar)] ring-offset-1"
              )}
              title="Carbon Ink"
            />
            <button
              onClick={() => setColorMode("cinnabar")}
              className={cn(
                "h-5 w-5 rounded-full border border-black/20 bg-[#8C2D19]",
                colorMode === "cinnabar" && "ring-2 ring-[var(--cinnabar)] ring-offset-1"
              )}
              title="Temple Cinnabar"
            />
            <button
              onClick={() => setColorMode("bronze")}
              className={cn(
                "h-5 w-5 rounded-full border border-black/20 bg-[#947846]",
                colorMode === "bronze" && "ring-2 ring-[var(--cinnabar)] ring-offset-1"
              )}
              title="Chola Bronze"
            />
          </div>

          {/* Zoom Controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setZoom(Math.max(0.6, zoom - 0.2))}
              className="px-1.5 py-0.5 rounded bg-[var(--mount)] text-[var(--ink)] hover:bg-[var(--paper-deep)]"
            >
              -
            </button>
            <span className="font-mono text-[10px] w-10 text-center">{Math.round(zoom * 100)}%</span>
            <button
              onClick={() => setZoom(Math.min(2, zoom + 0.2))}
              className="px-1.5 py-0.5 rounded bg-[var(--mount)] text-[var(--ink)] hover:bg-[var(--paper-deep)]"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Main SVG Vector Canvas */}
      <div
        className={cn(
          "relative flex items-center justify-center p-6 sm:p-12 transition-colors overflow-hidden min-h-[460px]",
          theme === "stone" ? "bg-[#181512]" : "bg-[var(--mount)]"
        )}
      >
        <div
          style={{ transform: `scale(${zoom})`, transformOrigin: "center center" }}
          className="transition-transform duration-200"
        >
          <svg
            viewBox="0 0 1000 1000"
            className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] select-none"
          >
            {/* 1000 UPM Grid System */}
            {showGrid && (
              <g className="opacity-40">
                {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((v) => (
                  <g key={v}>
                    <line
                      x1={v}
                      y1="0"
                      x2={v}
                      y2="1000"
                      stroke={theme === "stone" ? "rgba(255,255,255,0.08)" : "rgba(26,24,20,0.08)"}
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="0"
                      y1={v}
                      x2="1000"
                      y2={v}
                      stroke={theme === "stone" ? "rgba(255,255,255,0.08)" : "rgba(26,24,20,0.08)"}
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                  </g>
                ))}
              </g>
            )}

            {/* Typography Reference Metrics */}
            {showMetrics && (
              <g>
                {/* Central Vertical Axis (X=500) */}
                <line
                  x1="500"
                  y1="0"
                  x2="500"
                  y2="1000"
                  stroke={theme === "stone" ? "rgba(224,109,83,0.3)" : "rgba(140,45,25,0.25)"}
                  strokeWidth="1.5"
                />

                {/* Cap Height (Y=250) */}
                <line
                  x1="0"
                  y1="250"
                  x2="1000"
                  y2="250"
                  stroke={theme === "stone" ? "rgba(212,179,127,0.4)" : "rgba(148,120,70,0.4)"}
                  strokeWidth="1"
                  strokeDasharray="6 4"
                />
                <text
                  x="20"
                  y="240"
                  fill={theme === "stone" ? "#D4B37F" : "#947846"}
                  fontSize="22"
                  fontFamily="monospace"
                  opacity="0.8"
                >
                  CAP 250
                </text>

                {/* Optical Center (Y=480) */}
                <line
                  x1="0"
                  y1="480"
                  x2="1000"
                  y2="480"
                  stroke={theme === "stone" ? "rgba(255,255,255,0.15)" : "rgba(26,24,20,0.12)"}
                  strokeWidth="1"
                  strokeDasharray="2 4"
                />

                {/* Baseline (Y=700) */}
                <line
                  x1="0"
                  y1="700"
                  x2="1000"
                  y2="700"
                  stroke={theme === "stone" ? "#E06D53" : "#8C2D19"}
                  strokeWidth="2"
                  opacity="0.75"
                />
                <text
                  x="20"
                  y="690"
                  fill={theme === "stone" ? "#E06D53" : "#8C2D19"}
                  fontSize="22"
                  fontFamily="monospace"
                  fontWeight="bold"
                  opacity="0.85"
                >
                  BASELINE 700
                </text>

                {/* Descender (Y=850) */}
                <line
                  x1="0"
                  y1="850"
                  x2="1000"
                  y2="850"
                  stroke={theme === "stone" ? "rgba(255,255,255,0.15)" : "rgba(26,24,20,0.15)"}
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              </g>
            )}

            {/* The Candidate Glyph Vector Master */}
            <path
              d={variant.svgPath}
              fill="none"
              stroke={glyphColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-300"
            />
          </svg>
        </div>
      </div>

      {/* Stroke Width Slider & Live Dimensions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-xs">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="text-[11px] text-[var(--muted)] font-mono">Weight: {strokeWidth} UPM</span>
          <input
            type="range"
            min="24"
            max="84"
            step="2"
            value={strokeWidth}
            onChange={(e) => setStrokeWidth(Number(e.target.value))}
            className="w-32 accent-[var(--cinnabar)]"
          />
          <button
            onClick={() => setStrokeWidth(variant.strokeWidth || 48)}
            className="text-[10px] text-[var(--muted)] hover:text-[var(--ink)] underline"
          >
            Reset
          </button>
        </div>

        <div className="flex items-center gap-4 text-[11px] text-[var(--muted)] font-mono">
          <span>Grid: 1000×1000 UPM</span>
          <span>•</span>
          <span>Baseline: 700</span>
          <span>•</span>
          <span>Format: Cubic Bézier</span>
        </div>
      </div>
    </div>
  );
}
