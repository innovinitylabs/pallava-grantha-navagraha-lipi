import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import { initializeDatabase } from '../src/lib/schema';
import {
  scripts,
  historicalSources,
  pallavCharacters,
  characterSources,
  navagrahas,
} from '../src/data/pallava-seed';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '..', 'data', 'db', 'navagraha.db');

console.log('Initializing database schema at:', dbPath);
initializeDatabase();

const db = new Database(dbPath);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

console.log('Seeding scripts...');
const insertScript = db.prepare(`
  INSERT OR REPLACE INTO scripts (id, name, family, region, period_start, period_end, description, status)
  VALUES (@id, @name, @family, @region, @period_start, @period_end, @description, @status)
`);

const insertManyScripts = db.transaction((items) => {
  for (const item of items) insertScript.run(item);
});
insertManyScripts(scripts);

console.log('Seeding historical sources...');
const insertSource = db.prepare(`
  INSERT OR REPLACE INTO historical_sources (id, title, author, year, publisher, source_type, url, archive, notes)
  VALUES (@id, @title, @author, @year, @publisher, @source_type, @url, @archive, @notes)
`);
const insertManySources = db.transaction((items) => {
  for (const item of items) insertSource.run(item);
});
insertManySources(historicalSources);

console.log('Seeding characters...');
const insertCharacter = db.prepare(`
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
const insertManyCharacters = db.transaction((items) => {
  for (const item of items) insertCharacter.run(item);
});
insertManyCharacters(pallavCharacters);

console.log('Seeding character sources...');
const insertCharSource = db.prepare(`
  INSERT OR REPLACE INTO character_sources (
    id, character_id, source_id, inscription_name, location,
    date_text, date_start_year, date_end_year, image_path, notes
  ) VALUES (
    @id, @character_id, @source_id, @inscription_name, @location,
    @date_text, @date_start_year, @date_end_year, @image_path, @notes
  )
`);
const insertManyCharSources = db.transaction((items) => {
  for (const item of items) insertCharSource.run(item);
});
insertManyCharSources(characterSources);

console.log('Seeding initial Navagraha astronomical records...');
const insertAstronomical = db.prepare(`
  INSERT OR REPLACE INTO astronomical_symbols (
    id, name, name_sanskrit, name_tamil, category,
    encoding_recommendation, encoding_rationale, unicode_status, existing_unicode, svg_path, version
  ) VALUES (
    @id, @name, @name_sanskrit, @name_tamil, @category,
    @encoding_recommendation, @encoding_rationale, @unicode_status, @existing_unicode, @svg_path, @version
  )
`);

const astronomicalItems = navagrahas.map((g) => ({
  id: `ASTRO-GRAHA-${g.id.toUpperCase()}`,
  name: g.name,
  name_sanskrit: g.name_sanskrit,
  name_tamil: g.name_tamil,
  category: 'graha',
  encoding_recommendation: 'standalone-character',
  encoding_rationale: `Primary Indian astronomical entity (${g.name} / ${g.celestial_body}). Distinct from Western planetary signs. In traditional Indian calendrical (Panchangam) and astronomical tables, distinct notation is required.`,
  unicode_status: 'not-encoded',
  existing_unicode: null,
  svg_path: null,
  version: '0.1.0',
}));

const insertManyAstro = db.transaction((items) => {
  for (const item of items) insertAstronomical.run(item);
});
insertManyAstro(astronomicalItems);

db.close();

console.log('Seeding completed successfully:');
console.log(`- Scripts: ${scripts.length}`);
console.log(`- Historical Sources: ${historicalSources.length}`);
console.log(`- Characters: ${pallavCharacters.length}`);
console.log(`- Character Sources: ${characterSources.length}`);
console.log(`- Astronomical Symbols (Grahas): ${astronomicalItems.length}`);
