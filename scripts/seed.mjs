import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const dbDir = path.join(rootDir, 'data', 'db');
const dbPath = path.join(dbDir, 'navagraha.db');
const seedDir = path.join(rootDir, 'data', 'seed');

if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

console.log('Connecting to database at:', dbPath);
const db = new Database(dbPath);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

// Initialize schema
db.exec(`
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

  CREATE TABLE IF NOT EXISTS historical_sources (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT,
    year TEXT,
    publisher TEXT,
    source_type TEXT NOT NULL DEFAULT 'publication'
      CHECK(source_type IN ('inscription', 'manuscript', 'publication', 'proposal', 'museum-catalog', 'digital-archive')),
    url TEXT,
    archive TEXT,
    notes TEXT
  );

  CREATE TABLE IF NOT EXISTS characters (
    id TEXT PRIMARY KEY,
    script_id TEXT NOT NULL,
    character_name TEXT NOT NULL,
    transliteration TEXT,
    phonetic_value TEXT,
    ipa TEXT,
    category TEXT NOT NULL
      CHECK(category IN ('independent-vowel', 'consonant', 'dependent-vowel-sign', 'length-mark', 'anusvara', 'visarga', 'virama', 'subjoiner', 'punctuation', 'sign', 'number', 'other')),
    unicode_codepoint TEXT,
    unicode_block TEXT,
    attestation_status TEXT NOT NULL DEFAULT 'directly-attested'
      CHECK(attestation_status IN ('directly-attested', 'reconstructed', 'later-form', 'modern-addition', 'uncertain')),
    confidence TEXT NOT NULL DEFAULT 'high'
      CHECK(confidence IN ('high', 'medium', 'low', 'uncertain')),
    svg_path TEXT,
    notes TEXT,
    sort_order INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (script_id) REFERENCES scripts(id)
  );

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

  CREATE TABLE IF NOT EXISTS graha_glyphs (
    id TEXT PRIMARY KEY,
    graha_name TEXT NOT NULL,
    graha_sanskrit TEXT,
    graha_tamil TEXT,
    variant_number INTEGER DEFAULT 1,
    design_rationale TEXT,
    script_influences TEXT,
    svg_data TEXT,
    status TEXT NOT NULL DEFAULT 'draft'
      CHECK(status IN ('draft', 'review', 'candidate', 'selected')),
    version TEXT DEFAULT '0.1.0',
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS astronomical_symbols (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    name_sanskrit TEXT,
    name_tamil TEXT,
    category TEXT NOT NULL
      CHECK(category IN ('graha', 'rashi', 'nakshatra', 'tithi', 'yoga', 'karana', 'lunar-phase', 'aspect', 'motion', 'dignity', 'conjunction', 'eclipse', 'measurement')),
    encoding_recommendation TEXT DEFAULT 'under-investigation'
      CHECK(encoding_recommendation IN ('standalone-character', 'combination', 'textual-label', 'graphical-notation', 'under-investigation')),
    encoding_rationale TEXT,
    unicode_status TEXT DEFAULT 'not-encoded'
      CHECK(unicode_status IN ('not-encoded', 'existing-overlap', 'proposed', 'encoded')),
    existing_unicode TEXT,
    svg_path TEXT,
    version TEXT DEFAULT '0.1.0'
  );

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

  CREATE INDEX IF NOT EXISTS idx_characters_script ON characters(script_id);
  CREATE INDEX IF NOT EXISTS idx_characters_category ON characters(category);
  CREATE INDEX IF NOT EXISTS idx_character_sources_char ON character_sources(character_id);
  CREATE INDEX IF NOT EXISTS idx_character_sources_src ON character_sources(source_id);
  CREATE INDEX IF NOT EXISTS idx_graha_glyphs_name ON graha_glyphs(graha_name);
  CREATE INDEX IF NOT EXISTS idx_astronomical_category ON astronomical_symbols(category);
`);

console.log('Seeding from JSON records in data/seed/ ...');

const scripts = JSON.parse(fs.readFileSync(path.join(seedDir, 'scripts.json'), 'utf-8'));
const sources = JSON.parse(fs.readFileSync(path.join(seedDir, 'historical-sources.json'), 'utf-8'));
const characters = JSON.parse(fs.readFileSync(path.join(seedDir, 'pallava-characters.json'), 'utf-8'));
const charSources = JSON.parse(fs.readFileSync(path.join(seedDir, 'character-sources.json'), 'utf-8'));
const astro = JSON.parse(fs.readFileSync(path.join(seedDir, 'astronomical-symbols.json'), 'utf-8'));

const insertScript = db.prepare(`
  INSERT OR REPLACE INTO scripts (id, name, family, region, period_start, period_end, description, status)
  VALUES (@id, @name, @family, @region, @period_start, @period_end, @description, @status)
`);
db.transaction((items) => items.forEach((i) => insertScript.run(i)))(scripts);

const insertSource = db.prepare(`
  INSERT OR REPLACE INTO historical_sources (id, title, author, year, publisher, source_type, url, archive, notes)
  VALUES (@id, @title, @author, @year, @publisher, @source_type, @url, @archive, @notes)
`);
db.transaction((items) => items.forEach((i) => insertSource.run(i)))(sources);

const insertChar = db.prepare(`
  INSERT OR REPLACE INTO characters (
    id, script_id, character_name, transliteration, phonetic_value, ipa,
    category, unicode_codepoint, unicode_block, attestation_status, confidence,
    svg_path, notes, sort_order, created_at, updated_at
  ) VALUES (
    @id, @script_id, @character_name, @transliteration, @phonetic_value, @ipa,
    @category, @unicode_codepoint, @unicode_block, @attestation_status, @confidence,
    @svg_path, @notes, @sort_order, @created_at, @updated_at
  )
`);
db.transaction((items) => items.forEach((i) => insertChar.run(i)))(characters);

const insertCharSrc = db.prepare(`
  INSERT OR REPLACE INTO character_sources (
    id, character_id, source_id, inscription_name, location,
    date_text, date_start_year, date_end_year, image_path, notes
  ) VALUES (
    @id, @character_id, @source_id, @inscription_name, @location,
    @date_text, @date_start_year, @date_end_year, @image_path, @notes
  )
`);
db.transaction((items) => items.forEach((i) => insertCharSrc.run(i)))(charSources);

const insertAstro = db.prepare(`
  INSERT OR REPLACE INTO astronomical_symbols (
    id, name, name_sanskrit, name_tamil, category,
    encoding_recommendation, encoding_rationale, unicode_status, existing_unicode, svg_path, version
  ) VALUES (
    @id, @name, @name_sanskrit, @name_tamil, @category,
    @encoding_recommendation, @encoding_rationale, @unicode_status, @existing_unicode, @svg_path, @version
  )
`);
db.transaction((items) => items.forEach((i) => insertAstro.run(i)))(astro);

db.close();

console.log('Database seeded successfully:');
console.log(`- Scripts: ${scripts.length}`);
console.log(`- Historical Sources: ${sources.length}`);
console.log(`- Characters: ${characters.length}`);
console.log(`- Character Sources: ${charSources.length}`);
console.log(`- Astronomical Symbols: ${astro.length}`);
