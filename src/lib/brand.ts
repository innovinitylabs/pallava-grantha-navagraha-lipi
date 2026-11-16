/**
 * Nava Graha Lipi brand tokens and identity conventions.
 */

export const BRAND = {
  name: "Nava Graha Lipi",
  nameTamil: "நவ கிரக லிபி",
  latinInitial: "N",
  tamilInitial: "\u0BA8", // 'ந' (Tamil NA)
  tagline: "An Open-Source Indian Astronomical Glyph Initiative",
  deploymentDomain: "nava-graha-lipi.valipokkann.in",
  githubUrl: "https://github.com/innovinitylabs/pallava-grantha-navagraha-lipi",
  author: "Valipokkann",
  authorUrl: "https://valipokkann.in",
  favicon: "/favicon.ico",
  version: "0.1.0",
} as const;

export type BrandTheme = "light" | "dark";
