/**
 * Type definitions for Nava Graha Lipi planetary glyphs, variants, and geometric metadata.
 */

export type GlyphStyleVariant = "conservative" | "geometric" | "calligraphic";

export interface GlyphConstructionStep {
  step: number;
  label: string;
  description: string;
  geometry: string; // e.g. "Center bindu at (500, 500) r=40"
}

export interface GlyphVariant {
  id: string;
  name: string;
  style: GlyphStyleVariant;
  styleLabel: string;
  svgPath: string;
  strokeWidth: number;
  fillRule?: "nonzero" | "evenodd";
  puaCodepoint: string; // Experimental Private Use Area mapping (U+E000 to U+E008)
  construction: GlyphConstructionStep[];
  designRationale: string;
  opticalNotes: string;
  status: "candidate" | "prototype" | "under-review";
}

export interface GrahaRecord {
  id: string;
  number: number;
  name: string;
  nameSanskrit: string;
  nameTamil: string;
  celestialBody: string;
  day: string;
  element: string;
  direction: string;
  geometricArchetype: string;
  traditionalAssociation: string;
  scriptInfluences: string[];
  variants: GlyphVariant[];
}
