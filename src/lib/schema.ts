/**
 * Nava Graha Lipi — SQLite Schema
 *
 * Uses better-sqlite3 for synchronous, server-side DB access.
 * The database file lives at `data/db/navagraha.db` (created automatically).
 *
 * Call `initializeDatabase()` once at startup (or in a build script) to
 * ensure all tables and indices exist.
 */

import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const DB_PATH = path.join(process.cwd(), 'data', 'db', 'navagraha.db');

/**
 * Return a new connection to the project database.
 * Enables WAL mode and foreign-key enforcement on every connection.
 */
export function getDb(): Database.Database {
  // Ensure the directory exists before opening the database file.
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const db = new Database(DB_PATH);
  db.pragma('journal_mode = WAL');
  db.pragma('foreign_keys = ON');
  return db;
}

/**
 * Create all tables and indices if they do not already exist.
 */
export function initializeDatabase(): void {
  const db = getDb();

  db.exec(`
    -- -----------------------------------------------------------------
    -- Scripts
    -- -----------------------------------------------------------------
    CREATE TABLE IF NOT EXISTS scripts (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      family TEXT NOT NULL,
      region TEXT,
      period_start TEXT,
      period_end TEXT,
      description TEXT,
      status TEXT NOT NULL DEFAULT 'attested'
        CHECK(status IN ('attested', 'reconstructed', 'uncertain'))
    );

    -- -----------------------------------------------------------------
    -- Historical sources (must precede character_sources for FK order)
    -- -----------------------------------------------------------------
    CREATE TABLE IF NOT EXISTS historical_sources (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      author TEXT,
      year TEXT,
      publisher TEXT,
      source_type TEXT NOT NULL DEFAULT 'publication'
        CHECK(source_type IN (
          'inscription', 'manuscript', 'publication',
          'proposal', 'museum-catalog', 'digital-archive'
        )),
      url TEXT,
      archive TEXT,
      notes TEXT
    );

    -- -----------------------------------------------------------------
    -- Characters
    -- -----------------------------------------------------------------
    CREATE TABLE IF NOT EXISTS characters (
      id TEXT PRIMARY KEY,
      script_id TEXT NOT NULL,
      character_name TEXT NOT NULL,
      transliteration TEXT,
      phonetic_value TEXT,
      ipa TEXT,
      category TEXT NOT NULL
        CHECK(category IN (
          'independent-vowel', 'consonant', 'dependent-vowel-sign',
          'length-mark', 'anusvara', 'visarga', 'virama', 'subjoiner',
          'punctuation', 'sign', 'number', 'other'
        )),
      unicode_codepoint TEXT,
      unicode_block TEXT,
      attestation_status TEXT NOT NULL DEFAULT 'directly-attested'
        CHECK(attestation_status IN (
          'directly-attested', 'reconstructed', 'later-form',
          'modern-addition', 'uncertain'
        )),
      confidence TEXT NOT NULL DEFAULT 'high'
        CHECK(confidence IN ('high', 'medium', 'low', 'uncertain')),
      svg_path TEXT,
      notes TEXT,
      sort_order INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (script_id) REFERENCES scripts(id)
    );

    -- -----------------------------------------------------------------
    -- Character ↔ Source join table
    -- -----------------------------------------------------------------
    CREATE TABLE IF NOT EXISTS character_sources (
      id TEXT PRIMARY KEY,
      character_id TEXT NOT NULL,
      source_id TEXT NOT NULL,
      inscription_name TEXT,
      location TEXT,
      date_text TEXT,
      date_start_year INTEGER,
      date_end_year INTEGER,
      image_path TEXT,
      notes TEXT,
      FOREIGN KEY (character_id) REFERENCES characters(id),
      FOREIGN KEY (source_id) REFERENCES historical_sources(id)
    );

    -- -----------------------------------------------------------------
    -- Graha glyph designs (new / original — not historical)
    -- -----------------------------------------------------------------
    CREATE TABLE IF NOT EXISTS graha_glyphs (
      id TEXT PRIMARY KEY,
      graha_name TEXT NOT NULL,
      graha_sanskrit TEXT,
      graha_tamil TEXT,
      variant_number INTEGER DEFAULT 1,
      design_rationale TEXT,
      script_influences TEXT,  -- JSON array
      svg_data TEXT,
      status TEXT NOT NULL DEFAULT 'draft'
        CHECK(status IN ('draft', 'review', 'candidate', 'selected')),
      version TEXT DEFAULT '0.1.0',
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    -- -----------------------------------------------------------------
    -- Astronomical symbols
    -- -----------------------------------------------------------------
    CREATE TABLE IF NOT EXISTS astronomical_symbols (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      name_sanskrit TEXT,
      name_tamil TEXT,
      category TEXT NOT NULL
        CHECK(category IN (
          'graha', 'rashi', 'nakshatra', 'tithi', 'yoga', 'karana',
          'lunar-phase', 'aspect', 'motion', 'dignity', 'conjunction',
          'eclipse', 'measurement'
        )),
      encoding_recommendation TEXT DEFAULT 'under-investigation'
        CHECK(encoding_recommendation IN (
          'standalone-character', 'combination', 'textual-label',
          'graphical-notation', 'under-investigation'
        )),
      encoding_rationale TEXT,
      unicode_status TEXT DEFAULT 'not-encoded'
        CHECK(unicode_status IN (
          'not-encoded', 'existing-overlap', 'proposed', 'encoded'
        )),
      existing_unicode TEXT,
      svg_path TEXT,
      version TEXT DEFAULT '0.1.0'
    );

    -- -----------------------------------------------------------------
    -- Unicode research entries
    -- -----------------------------------------------------------------
    CREATE TABLE IF NOT EXISTS unicode_research (
      id TEXT PRIMARY KEY,
      character_id TEXT,
      symbol_id TEXT,
      existing_codepoint TEXT,
      block TEXT,
      overlap_analysis TEXT,
      recommendation TEXT,
      evidence_of_use TEXT,
      notes TEXT,
      FOREIGN KEY (character_id) REFERENCES characters(id),
      FOREIGN KEY (symbol_id) REFERENCES astronomical_symbols(id)
    );

    -- -----------------------------------------------------------------
    -- Indices
    -- -----------------------------------------------------------------
    CREATE INDEX IF NOT EXISTS idx_characters_script
      ON characters(script_id);
    CREATE INDEX IF NOT EXISTS idx_characters_category
      ON characters(category);
    CREATE INDEX IF NOT EXISTS idx_character_sources_char
      ON character_sources(character_id);
    CREATE INDEX IF NOT EXISTS idx_character_sources_src
      ON character_sources(source_id);
    CREATE INDEX IF NOT EXISTS idx_graha_glyphs_name
      ON graha_glyphs(graha_name);
    CREATE INDEX IF NOT EXISTS idx_astronomical_category
      ON astronomical_symbols(category);
  `);

  db.close();
}
