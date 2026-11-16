/**
 * Nava Graha Lipi — Database Access Layer
 *
 * Thin query wrappers over better-sqlite3. Every function opens its own
 * connection and closes it in a `finally` block so callers never leak
 * handles. This is fine for the low-concurrency, read-heavy workload of
 * a Next.js static / server-rendered site.
 */

import { getDb } from './schema';
import type {
  Script,
  Character,
  HistoricalSource,
  CharacterSource,
  GrahaGlyph,
  AstronomicalSymbol,
} from './types';

// ---------------------------------------------------------------------------
// Scripts
// ---------------------------------------------------------------------------

export function getAllScripts(): Script[] {
  const db = getDb();
  try {
    return db
      .prepare('SELECT * FROM scripts ORDER BY period_start')
      .all() as Script[];
  } finally {
    db.close();
  }
}

export function getScript(id: string): Script | undefined {
  const db = getDb();
  try {
    return db
      .prepare('SELECT * FROM scripts WHERE id = ?')
      .get(id) as Script | undefined;
  } finally {
    db.close();
  }
}

// ---------------------------------------------------------------------------
// Characters
// ---------------------------------------------------------------------------

export function getCharactersByScript(scriptId: string): Character[] {
  const db = getDb();
  try {
    return db
      .prepare(
        'SELECT * FROM characters WHERE script_id = ? ORDER BY sort_order, category, character_name',
      )
      .all(scriptId) as Character[];
  } finally {
    db.close();
  }
}

export function getCharactersByCategory(
  scriptId: string,
  category: string,
): Character[] {
  const db = getDb();
  try {
    return db
      .prepare(
        'SELECT * FROM characters WHERE script_id = ? AND category = ? ORDER BY sort_order',
      )
      .all(scriptId, category) as Character[];
  } finally {
    db.close();
  }
}

export function getCharacter(id: string): Character | undefined {
  const db = getDb();
  try {
    return db
      .prepare('SELECT * FROM characters WHERE id = ?')
      .get(id) as Character | undefined;
  } finally {
    db.close();
  }
}

export function searchCharacters(query: string): Character[] {
  const db = getDb();
  try {
    const pattern = `%${query}%`;
    return db
      .prepare(
        `
        SELECT * FROM characters
        WHERE character_name LIKE ?
           OR transliteration LIKE ?
           OR phonetic_value LIKE ?
           OR notes LIKE ?
        ORDER BY script_id, sort_order
      `,
      )
      .all(pattern, pattern, pattern, pattern) as Character[];
  } finally {
    db.close();
  }
}

// ---------------------------------------------------------------------------
// Character ↔ Source joins
// ---------------------------------------------------------------------------

export function getCharacterSources(
  characterId: string,
): (CharacterSource & { source: HistoricalSource })[] {
  const db = getDb();
  try {
    return db
      .prepare(
        `
        SELECT cs.*,
               hs.title   AS source_title,
               hs.author  AS source_author,
               hs.year    AS source_year,
               hs.publisher AS source_publisher,
               hs.source_type AS source_source_type,
               hs.url     AS source_url,
               hs.archive AS source_archive,
               hs.notes   AS source_notes
        FROM character_sources cs
        JOIN historical_sources hs ON cs.source_id = hs.id
        WHERE cs.character_id = ?
      `,
      )
      .all(characterId) as (CharacterSource & { source: HistoricalSource })[];
  } finally {
    db.close();
  }
}

// ---------------------------------------------------------------------------
// Historical Sources
// ---------------------------------------------------------------------------

export function getAllSources(): HistoricalSource[] {
  const db = getDb();
  try {
    return db
      .prepare('SELECT * FROM historical_sources ORDER BY year, author')
      .all() as HistoricalSource[];
  } finally {
    db.close();
  }
}

export function getSource(id: string): HistoricalSource | undefined {
  const db = getDb();
  try {
    return db
      .prepare('SELECT * FROM historical_sources WHERE id = ?')
      .get(id) as HistoricalSource | undefined;
  } finally {
    db.close();
  }
}

// ---------------------------------------------------------------------------
// Graha Glyphs
// ---------------------------------------------------------------------------

export function getAllGrahaGlyphs(): GrahaGlyph[] {
  const db = getDb();
  try {
    return db
      .prepare(
        'SELECT * FROM graha_glyphs ORDER BY graha_name, variant_number',
      )
      .all() as GrahaGlyph[];
  } finally {
    db.close();
  }
}

export function getGrahaGlyphsByName(grahaName: string): GrahaGlyph[] {
  const db = getDb();
  try {
    return db
      .prepare(
        'SELECT * FROM graha_glyphs WHERE graha_name = ? ORDER BY variant_number',
      )
      .all(grahaName) as GrahaGlyph[];
  } finally {
    db.close();
  }
}

// ---------------------------------------------------------------------------
// Astronomical Symbols
// ---------------------------------------------------------------------------

export function getAstronomicalSymbols(): AstronomicalSymbol[] {
  const db = getDb();
  try {
    return db
      .prepare(
        'SELECT * FROM astronomical_symbols ORDER BY category, name',
      )
      .all() as AstronomicalSymbol[];
  } finally {
    db.close();
  }
}

// ---------------------------------------------------------------------------
// Statistics
// ---------------------------------------------------------------------------

export interface ScriptStats {
  script_id: string;
  script_name: string;
  total: number;
  categories: Record<string, number>;
}

export function getCharacterStats(): ScriptStats[] {
  const db = getDb();
  try {
    const scripts = db
      .prepare(
        `
        SELECT s.id   AS script_id,
               s.name AS script_name,
               COUNT(c.id) AS total
        FROM scripts s
        LEFT JOIN characters c ON s.id = c.script_id
        GROUP BY s.id
        ORDER BY s.period_start
      `,
      )
      .all() as { script_id: string; script_name: string; total: number }[];

    return scripts.map((s) => {
      const cats = db
        .prepare(
          `
          SELECT category, COUNT(*) AS count
          FROM characters
          WHERE script_id = ?
          GROUP BY category
        `,
        )
        .all(s.script_id) as { category: string; count: number }[];

      const categories: Record<string, number> = {};
      cats.forEach((c) => {
        categories[c.category] = c.count;
      });

      return { ...s, categories };
    });
  } finally {
    db.close();
  }
}
