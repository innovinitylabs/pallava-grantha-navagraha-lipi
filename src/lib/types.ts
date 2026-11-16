/**
 * Nava Graha Lipi — Core Type Definitions
 *
 * These types model the project's domain: historical scripts of the
 * Tamil region (Pallava, Grantha, Vatteluttu, Tamil-Brahmi), their
 * characters, bibliographic sources, and the new astronomical symbol
 * designs that the project proposes.
 *
 * Every "status" / "attestation" field enforces an explicit provenance
 * label so that attested historical forms are never conflated with
 * modern or reconstructed ones.
 */

// ---------------------------------------------------------------------------
// Scripts
// ---------------------------------------------------------------------------

/** A writing system tracked by the Script Atlas. */
export interface Script {
  id: string;
  name: string;
  family: string;
  region: string;
  period_start: string;
  period_end: string;
  description: string;
  status: 'attested' | 'reconstructed' | 'uncertain';
}

// ---------------------------------------------------------------------------
// Characters
// ---------------------------------------------------------------------------

/** Valid character categories (phonological / structural role). */
export type CharacterCategory =
  | 'independent-vowel'
  | 'consonant'
  | 'dependent-vowel-sign'
  | 'length-mark'
  | 'anusvara'
  | 'visarga'
  | 'virama'
  | 'subjoiner'
  | 'punctuation'
  | 'sign'
  | 'number'
  | 'other';

/** Provenance of a character form. */
export type AttestationStatus =
  | 'directly-attested'
  | 'reconstructed'
  | 'later-form'
  | 'modern-addition'
  | 'uncertain';

/** Scholarly confidence in the identification. */
export type ConfidenceLevel = 'high' | 'medium' | 'low' | 'uncertain';

/** A single character (glyph) within a script. */
export interface Character {
  id: string;
  script_id: string;
  character_name: string;
  transliteration: string;
  phonetic_value: string;
  ipa: string;
  category: CharacterCategory;
  unicode_codepoint: string | null;
  unicode_block: string | null;
  attestation_status: AttestationStatus;
  confidence: ConfidenceLevel;
  svg_path: string | null;
  notes: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

// ---------------------------------------------------------------------------
// Sources
// ---------------------------------------------------------------------------

/** Link between a character and its attesting source. */
export interface CharacterSource {
  id: string;
  character_id: string;
  source_id: string;
  inscription_name: string;
  location: string;
  date_text: string;
  date_start_year: number | null;
  date_end_year: number | null;
  image_path: string | null;
  notes: string;
}

/** A bibliographic / epigraphic source. */
export type SourceType =
  | 'inscription'
  | 'manuscript'
  | 'publication'
  | 'proposal'
  | 'museum-catalog'
  | 'digital-archive';

export interface HistoricalSource {
  id: string;
  title: string;
  author: string;
  year: string;
  publisher: string;
  source_type: SourceType;
  url: string;
  archive: string;
  notes: string;
}

// ---------------------------------------------------------------------------
// Graha Glyphs (new symbol designs — always marked as original)
// ---------------------------------------------------------------------------

/** Design status lifecycle for a proposed glyph. */
export type GlyphStatus = 'draft' | 'review' | 'candidate' | 'selected';

/** A glyph design for a Navagraha symbol. */
export interface GrahaGlyph {
  id: string;
  graha_name: string;
  graha_sanskrit: string;
  graha_tamil: string;
  variant_number: number;
  design_rationale: string;
  script_influences: string[];
  svg_data: string;
  status: GlyphStatus;
  version: string;
  created_at: string;
  updated_at: string;
}

// ---------------------------------------------------------------------------
// Astronomical Symbols
// ---------------------------------------------------------------------------

/** Broad category of an astronomical symbol. */
export type AstronomicalCategory =
  | 'graha'
  | 'rashi'
  | 'nakshatra'
  | 'tithi'
  | 'yoga'
  | 'karana'
  | 'lunar-phase'
  | 'aspect'
  | 'motion'
  | 'dignity'
  | 'conjunction'
  | 'eclipse'
  | 'measurement';

/** Encoding recommendation for an astronomical concept. */
export type EncodingRecommendation =
  | 'standalone-character'
  | 'combination'
  | 'textual-label'
  | 'graphical-notation'
  | 'under-investigation';

/** Unicode encoding status. */
export type UnicodeStatus =
  | 'not-encoded'
  | 'existing-overlap'
  | 'proposed'
  | 'encoded';

export interface AstronomicalSymbol {
  id: string;
  name: string;
  name_sanskrit: string;
  name_tamil: string;
  category: AstronomicalCategory;
  encoding_recommendation: EncodingRecommendation;
  encoding_rationale: string;
  unicode_status: UnicodeStatus;
  existing_unicode: string | null;
  svg_path: string | null;
  version: string;
}

// ---------------------------------------------------------------------------
// Unicode Research
// ---------------------------------------------------------------------------

export interface UnicodeResearch {
  id: string;
  character_id: string | null;
  symbol_id: string | null;
  existing_codepoint: string | null;
  block: string | null;
  overlap_analysis: string;
  recommendation: string;
  evidence_of_use: string;
  notes: string;
}

// ---------------------------------------------------------------------------
// Navagraha reference data
// ---------------------------------------------------------------------------

export interface Graha {
  id: string;
  name: string;
  name_sanskrit: string;
  name_tamil: string;
  celestial_body: string;
  day: string;
  element: string | null;
  description: string;
}
