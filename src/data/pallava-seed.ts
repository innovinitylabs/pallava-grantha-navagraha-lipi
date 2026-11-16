/**
 * Nava Graha Lipi — Pallava Script Seed Data
 *
 * Complete character inventory for the Pallava script based on
 * Anshuman Pandey's 2018 "Preliminary Proposal to Encode Pallava
 * in Unicode" (L2/18-083, Unicode Consortium Document Registry).
 *
 * Every character in this file is sourced from that proposal, which
 * itself draws on epigraphic evidence from Pallava-dynasty inscriptions
 * (4th–9th century CE) across Tamil Nadu and Southeast Asia.
 *
 * Source: https://www.unicode.org/L2/L2018/18083-pallava.pdf
 *
 * NOTE: Pallava is NOT yet encoded in Unicode. All unicode_codepoint
 * and unicode_block fields are null.
 */

import type {
  Script,
  Character,
  HistoricalSource,
  CharacterSource,
  Graha,
} from '@/lib/types';

// ===========================================================================
// Utility: timestamp strings for seed records
// ===========================================================================

const SEED_TS = '2024-01-01T00:00:00Z';

// ===========================================================================
// SCRIPTS
// ===========================================================================

export const scripts: Script[] = [
  {
    id: 'pallava',
    name: 'Pallava',
    family: 'brahmi-derived',
    region: 'Tamil Nadu, Southeast Asia',
    period_start: '4th century CE',
    period_end: '9th century CE',
    description:
      'The Pallava script is a Brahmi-derived writing system developed under the Pallava dynasty ' +
      'of Kanchipuram (Tamil Nadu). It served as the official script of Pallava royal inscriptions ' +
      'and exerted a profound influence on the scripts of Southeast Asia — the Khmer, Javanese (Kawi), ' +
      'Mon, Burmese, and Thai writing systems all descend from Pallava prototypes. The script is ' +
      'attested in stone inscriptions, copper-plate grants, and temple pillar records from the 4th to ' +
      '9th centuries CE. Its forms are intermediate between late Southern Brahmi and early Grantha.',
    status: 'attested',
  },
  {
    id: 'grantha',
    name: 'Grantha',
    family: 'brahmi-derived',
    region: 'Tamil Nadu, Kerala',
    period_start: '6th century CE',
    period_end: 'present (liturgical use)',
    description:
      'Grantha is a South Indian script that evolved from the Pallava script, used historically ' +
      'to write Sanskrit in the Tamil-speaking regions. It was the primary vehicle for Sanskrit ' +
      'literary and liturgical texts in Tamil Nadu and Kerala. Grantha letters were also borrowed ' +
      'into the Tamil script to represent Sanskrit sounds absent in Tamil phonology (ja, śa, ṣa, ha, ' +
      'kṣa, śrī). The script is encoded in Unicode at U+11300–U+1137F (Unicode 7.0, 2014). It ' +
      'remains in limited liturgical use today, particularly in Vedic recitation manuscripts.',
    status: 'attested',
  },
  {
    id: 'vatteluttu',
    name: 'Vatteluttu',
    family: 'tamil-brahmi-derived',
    region: 'Tamil Nadu, Kerala',
    period_start: '5th century CE',
    period_end: '13th century CE',
    description:
      'Vatteluttu (வட்டெழுத்து, "rounded script") is a Tamil-region writing system characterised ' +
      'by its distinctively rounded letter forms, in contrast to the more angular Pallava-Grantha ' +
      'tradition. It developed from the Tamil-Brahmi script independently of the Pallava line and ' +
      'was the dominant script for Tamil-language inscriptions in the Pandya and Chera kingdoms. ' +
      'Vatteluttu inscriptions are found across Tamil Nadu and Kerala from the 5th to 13th centuries CE. ' +
      'The script declined as the modern Tamil script (derived from Grantha influence) became dominant.',
    status: 'attested',
  },
  {
    id: 'tamil-brahmi',
    name: 'Tamil-Brahmi',
    family: 'brahmi',
    region: 'Tamil Nadu',
    period_start: '3rd century BCE',
    period_end: '3rd century CE',
    description:
      'Tamil-Brahmi is the earliest known writing system used to write the Tamil language, ' +
      'attested in cave inscriptions (eḻuttu) and potsherds from the 3rd century BCE onward. ' +
      'It is an adaptation of the pan-Indian Brahmi script with modifications to suit Tamil ' +
      'phonology — notably the addition of a puḷḷi (dot) diacritic to mark pure consonants ' +
      'without the inherent /a/ vowel. The corpus has been comprehensively studied by Iravatham ' +
      'Mahadevan (Early Tamil Epigraphy, 2003). Tamil-Brahmi evolved into the Vatteluttu and ' +
      'early Tamil scripts by the 4th–5th centuries CE.',
    status: 'attested',
  },
];

// ===========================================================================
// HISTORICAL SOURCES
// ===========================================================================

export const historicalSources: HistoricalSource[] = [
  {
    id: 'SRC-PANDEY-2018',
    title: 'Preliminary Proposal to Encode Pallava in Unicode',
    author: 'Anshuman Pandey',
    year: '2018',
    publisher: 'Unicode Consortium',
    source_type: 'proposal',
    url: 'https://www.unicode.org/L2/L2018/18083-pallava.pdf',
    archive: 'Unicode Consortium Document Registry',
    notes:
      'L2/18-083. Contains proposed character repertoire for Pallava script encoding, ' +
      'with code chart, character names, and representative glyphs based on epigraphic sources.',
  },
  {
    id: 'SRC-BUEHLER-1896',
    title: 'Indische Palaeographie',
    author: 'Georg Bühler',
    year: '1896',
    publisher: 'K.J. Trübner, Strassburg',
    source_type: 'publication',
    url: '',
    archive: 'Various university libraries',
    notes:
      'Foundational reference for Indian script palaeography. English translation: ' +
      'Indian Palaeography (1904, Appendix to Indian Antiquary).',
  },
  {
    id: 'SRC-BURNELL-1878',
    title: 'Elements of South Indian Palaeography',
    author: 'Arthur Coke Burnell',
    year: '1878',
    publisher: 'Trübner & Co., London',
    source_type: 'publication',
    url: '',
    archive: 'Various university libraries; archive.org',
    notes:
      'Comprehensive study of South Indian script development including Pallava, Grantha, ' +
      'and Vatteluttu. Second enlarged edition, 1878.',
  },
  {
    id: 'SRC-EI',
    title: 'Epigraphia Indica',
    author: 'Archaeological Survey of India',
    year: '1892',
    publisher: 'Archaeological Survey of India',
    source_type: 'publication',
    url: '',
    archive: 'Archaeological Survey of India',
    notes:
      'Multi-volume journal (1892–present). Essential primary source for inscriptional evidence ' +
      'of Pallava-era epigraphy across South India.',
  },
  {
    id: 'SRC-MAHADEVAN-2003',
    title: 'Early Tamil Epigraphy',
    author: 'Iravatham Mahadevan',
    year: '2003',
    publisher: 'Cre-A, Chennai',
    source_type: 'publication',
    url: '',
    archive: '',
    notes:
      'Comprehensive study of Tamil-Brahmi inscriptions with palaeographic charts. ' +
      'The standard reference for Tamil-Brahmi decipherment and classification.',
  },
  {
    id: 'SRC-GRANTHA-UNICODE',
    title: 'The Unicode Standard — Grantha Block',
    author: 'Unicode Consortium',
    year: '2014',
    publisher: 'Unicode Consortium',
    source_type: 'proposal',
    url: 'https://www.unicode.org/charts/PDF/U11300.pdf',
    archive: 'Unicode Consortium',
    notes:
      'Official Unicode code chart for Grantha (U+11300–U+1137F). Encoded in Unicode 7.0. ' +
      'Relevant for comparison with Pallava predecessor forms.',
  },
  {
    id: 'SRC-SIVARAMAMURTI-1952',
    title: 'Indian Epigraphy and South Indian Scripts',
    author: 'Calambur Sivaramamurti',
    year: '1952',
    publisher: 'Government Museum, Chennai',
    source_type: 'publication',
    url: '',
    archive: 'Government Museum, Chennai',
    notes:
      'Detailed study of South Indian script forms with comparative palaeographic tables. ' +
      'Originally published as Bulletin of the Madras Government Museum.',
  },
  {
    id: 'SRC-SII',
    title: 'South Indian Inscriptions',
    author: 'Archaeological Survey of India',
    year: '1890',
    publisher: 'Archaeological Survey of India',
    source_type: 'publication',
    url: '',
    archive: 'Archaeological Survey of India',
    notes:
      'Multi-volume series of published South Indian inscriptions, including Pallava-era ' +
      'records. Edited by E. Hultzsch, V. Venkayya, H. Krishna Sastri, and others.',
  },
  {
    id: 'SRC-UNICODE-ASTRO',
    title: 'Unicode Miscellaneous Symbols (U+2600–U+26FF)',
    author: 'Unicode Consortium',
    year: '1991',
    publisher: 'Unicode Consortium',
    source_type: 'proposal',
    url: 'https://www.unicode.org/charts/PDF/U2600.pdf',
    archive: 'Unicode Consortium',
    notes:
      'Contains existing Western astronomical/astrological symbols. Critical for overlap ' +
      'analysis with proposed Indian astronomical symbols.',
  },
];

// ===========================================================================
// PALLAVA CHARACTER INVENTORY
// ===========================================================================
//
// Character naming follows Unicode conventions:
//   "PALLAVA LETTER {NAME}"        for independent letters
//   "PALLAVA VOWEL SIGN {NAME}"    for dependent vowel signs
//   "PALLAVA SIGN {NAME}"          for modifiers and marks
//
// Transliteration uses IAST (International Alphabet of Sanskrit Transliteration).
// IPA values represent the reconstructed phonetic value of the akṣara.
//
// Categories map to the CharacterCategory union in @/lib/types:
//   'independent-vowel', 'consonant', 'dependent-vowel-sign',
//   'virama', 'anusvara', 'visarga', 'subjoiner', 'length-mark',
//   'punctuation', 'sign'
// ===========================================================================

export const pallavCharacters: Character[] = [
  // =========================================================================
  // INDEPENDENT VOWELS (9)
  // Based on Pandey 2018, Section 3 — Vowels
  // =========================================================================
  {
    id: 'PAL-V-001',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER A',
    transliteration: 'a',
    phonetic_value: 'a',
    ipa: 'ɐ',
    category: 'independent-vowel',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Short vowel /a/. The inherent vowel of all Pallava consonant letters. ' +
      'Independent form attested in initial position in inscriptions.',
    sort_order: 1,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-V-002',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER AA',
    transliteration: 'ā',
    phonetic_value: 'aa',
    ipa: 'aː',
    category: 'independent-vowel',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Long vowel /ā/. Distinguished from short /a/ by an extended vertical stroke or additional curve.',
    sort_order: 2,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-V-003',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER I',
    transliteration: 'i',
    phonetic_value: 'i',
    ipa: 'i',
    category: 'independent-vowel',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Short vowel /i/. Attested in independent position in Pallava-era inscriptions.',
    sort_order: 3,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-V-004',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER II',
    transliteration: 'ī',
    phonetic_value: 'ii',
    ipa: 'iː',
    category: 'independent-vowel',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Long vowel /ī/. Form distinguished from short /i/ by an additional stroke element.',
    sort_order: 4,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-V-005',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER U',
    transliteration: 'u',
    phonetic_value: 'u',
    ipa: 'u',
    category: 'independent-vowel',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Short vowel /u/. Attested in independent (word-initial) position.',
    sort_order: 5,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-V-006',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER UU',
    transliteration: 'ū',
    phonetic_value: 'uu',
    ipa: 'uː',
    category: 'independent-vowel',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Long vowel /ū/. Distinguished from short /u/ by an extended or doubled element.',
    sort_order: 6,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-V-007',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER E',
    transliteration: 'e',
    phonetic_value: 'e',
    ipa: 'e',
    category: 'independent-vowel',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Short vowel /e/. In Brahmic scripts of this period, the short/long distinction for ' +
      'front mid vowels was not always systematically maintained.',
    sort_order: 7,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-V-008',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER O',
    transliteration: 'o',
    phonetic_value: 'o',
    ipa: 'o',
    category: 'independent-vowel',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Short vowel /o/. Formed by a combination of the /e/ marker and the /aa/ marker on ' +
      'the base vowel sign, following standard Brahmic compositional logic.',
    sort_order: 8,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-V-009',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER AU',
    transliteration: 'au',
    phonetic_value: 'au',
    ipa: 'au',
    category: 'independent-vowel',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Diphthong vowel /au/. Attested primarily in Sanskrit-language inscriptions ' +
      'using Pallava script.',
    sort_order: 9,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },

  // =========================================================================
  // CONSONANT LETTERS (35)
  // Based on Pandey 2018, Section 3 — Consonants
  //
  // Standard Brahmic order: velars, palatals, retroflexes, dentals, labials,
  // approximants/semivowels, sibilants, aspirate, Dravidian additions.
  // =========================================================================

  // --- Velar series (ka-varga) ---
  {
    id: 'PAL-C-001',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER KA',
    transliteration: 'ka',
    phonetic_value: 'ka',
    ipa: 'kɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Voiceless velar stop with inherent /a/. One of the most frequently attested Pallava consonants.',
    sort_order: 10,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-002',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER KHA',
    transliteration: 'kha',
    phonetic_value: 'kha',
    ipa: 'kʰɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Voiceless aspirated velar stop. Attested primarily in Sanskrit-language Pallava inscriptions.',
    sort_order: 11,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-003',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER GA',
    transliteration: 'ga',
    phonetic_value: 'ga',
    ipa: 'ɡɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Voiced velar stop. Frequent in both Sanskrit and Tamil-language inscriptions.',
    sort_order: 12,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-004',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER GHA',
    transliteration: 'gha',
    phonetic_value: 'gha',
    ipa: 'ɡʱɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Voiced aspirated velar stop. Used in Sanskrit loanwords in Pallava-era texts.',
    sort_order: 13,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-005',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER NGA',
    transliteration: 'ṅa',
    phonetic_value: 'nga',
    ipa: 'ŋɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Velar nasal. Occurs in conjuncts (e.g., ṅka, ṅga) in Pallava inscriptions.',
    sort_order: 14,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },

  // --- Palatal series (ca-varga) ---
  {
    id: 'PAL-C-006',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER CA',
    transliteration: 'ca',
    phonetic_value: 'ca',
    ipa: 'tɕɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Voiceless palatal stop/affricate. Frequently attested in Tamil-language Pallava records.',
    sort_order: 15,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-007',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER CHA',
    transliteration: 'cha',
    phonetic_value: 'cha',
    ipa: 'tɕʰɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Voiceless aspirated palatal stop. Primarily attested in Sanskrit-language inscriptions.',
    sort_order: 16,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-008',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER JA',
    transliteration: 'ja',
    phonetic_value: 'ja',
    ipa: 'dʑɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Voiced palatal stop/affricate. Attested in both Sanskrit and Tamil contexts.',
    sort_order: 17,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-009',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER JHA',
    transliteration: 'jha',
    phonetic_value: 'jha',
    ipa: 'dʑʱɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Voiced aspirated palatal stop. Rare; attested in Sanskrit-language inscriptions.',
    sort_order: 18,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-010',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER NYA',
    transliteration: 'ña',
    phonetic_value: 'nya',
    ipa: 'ɲɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Palatal nasal. Occurs independently and in conjuncts (ñca, ñja) in Pallava records.',
    sort_order: 19,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },

  // --- Retroflex series (ṭa-varga) ---
  {
    id: 'PAL-C-011',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER TTA',
    transliteration: 'ṭa',
    phonetic_value: 'tta',
    ipa: 'ʈɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Voiceless retroflex stop. Important in both Tamil and Sanskrit contexts.',
    sort_order: 20,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-012',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER TTHA',
    transliteration: 'ṭha',
    phonetic_value: 'ttha',
    ipa: 'ʈʰɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Voiceless aspirated retroflex stop. Primarily in Sanskrit-language records.',
    sort_order: 21,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-013',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER DDA',
    transliteration: 'ḍa',
    phonetic_value: 'dda',
    ipa: 'ɖɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Voiced retroflex stop. Attested in Sanskrit-language Pallava inscriptions.',
    sort_order: 22,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-014',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER DDHA',
    transliteration: 'ḍha',
    phonetic_value: 'ddha',
    ipa: 'ɖʱɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Voiced aspirated retroflex stop. Rare; attested in Sanskrit-language inscriptions.',
    sort_order: 23,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-015',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER NNA',
    transliteration: 'ṇa',
    phonetic_value: 'nna',
    ipa: 'ɳɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Retroflex nasal. An important phoneme in both Tamil and Sanskrit, ' +
      'frequently attested in Pallava-era inscriptions.',
    sort_order: 24,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },

  // --- Dental series (ta-varga) ---
  {
    id: 'PAL-C-016',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER TA',
    transliteration: 'ta',
    phonetic_value: 'ta',
    ipa: 't̪ɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Voiceless dental stop. One of the most common consonants in Pallava inscriptions.',
    sort_order: 25,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-017',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER THA',
    transliteration: 'tha',
    phonetic_value: 'tha',
    ipa: 't̪ʰɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Voiceless aspirated dental stop. Attested in Sanskrit-language Pallava records.',
    sort_order: 26,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-018',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER DA',
    transliteration: 'da',
    phonetic_value: 'da',
    ipa: 'd̪ɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Voiced dental stop. Frequently attested across Pallava-era inscriptions.',
    sort_order: 27,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-019',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER DHA',
    transliteration: 'dha',
    phonetic_value: 'dha',
    ipa: 'd̪ʱɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Voiced aspirated dental stop. Attested in Sanskrit contexts.',
    sort_order: 28,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-020',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER NA',
    transliteration: 'na',
    phonetic_value: 'na',
    ipa: 'n̪ɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Dental nasal. Very frequently attested in both Tamil and Sanskrit Pallava inscriptions.',
    sort_order: 29,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },

  // --- Labial series (pa-varga) ---
  {
    id: 'PAL-C-021',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER PA',
    transliteration: 'pa',
    phonetic_value: 'pa',
    ipa: 'pɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Voiceless labial stop. Frequently attested in Pallava inscriptions.',
    sort_order: 30,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-022',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER PHA',
    transliteration: 'pha',
    phonetic_value: 'pha',
    ipa: 'pʰɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Voiceless aspirated labial stop. Primarily in Sanskrit-language inscriptions.',
    sort_order: 31,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-023',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER BA',
    transliteration: 'ba',
    phonetic_value: 'ba',
    ipa: 'bɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Voiced labial stop. Attested in both Sanskrit and Tamil contexts.',
    sort_order: 32,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-024',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER BHA',
    transliteration: 'bha',
    phonetic_value: 'bha',
    ipa: 'bʱɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Voiced aspirated labial stop. Attested in Sanskrit-language Pallava inscriptions.',
    sort_order: 33,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-025',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER MA',
    transliteration: 'ma',
    phonetic_value: 'ma',
    ipa: 'mɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Labial nasal. Very frequently attested across all Pallava-era inscriptions.',
    sort_order: 34,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },

  // --- Semivowels / Approximants ---
  {
    id: 'PAL-C-026',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER YA',
    transliteration: 'ya',
    phonetic_value: 'ya',
    ipa: 'jɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Palatal approximant. Frequently attested in Pallava-era inscriptions.',
    sort_order: 35,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-027',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER RA',
    transliteration: 'ra',
    phonetic_value: 'ra',
    ipa: 'ɾɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Alveolar tap/trill. One of the most common consonants in Pallava-era epigraphy.',
    sort_order: 36,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-028',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER LA',
    transliteration: 'la',
    phonetic_value: 'la',
    ipa: 'lɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Dental/alveolar lateral approximant. Frequently attested.',
    sort_order: 37,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-029',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER VA',
    transliteration: 'va',
    phonetic_value: 'va',
    ipa: 'ʋɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Labio-dental approximant. Attested across Pallava inscriptions.',
    sort_order: 38,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },

  // --- Sibilants ---
  {
    id: 'PAL-C-030',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER SHA',
    transliteration: 'śa',
    phonetic_value: 'sha',
    ipa: 'ɕɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Voiceless palatal sibilant. Used in Sanskrit-language Pallava inscriptions. ' +
      'One of the three sibilants in the Brahmic consonant inventory.',
    sort_order: 39,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-031',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER SSA',
    transliteration: 'ṣa',
    phonetic_value: 'ssa',
    ipa: 'ʂɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Voiceless retroflex sibilant. Used in Sanskrit-language Pallava inscriptions.',
    sort_order: 40,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-032',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER SA',
    transliteration: 'sa',
    phonetic_value: 'sa',
    ipa: 'sɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Voiceless dental/alveolar sibilant. Attested in both Tamil and Sanskrit contexts.',
    sort_order: 41,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },

  // --- Aspirate ---
  {
    id: 'PAL-C-033',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER HA',
    transliteration: 'ha',
    phonetic_value: 'ha',
    ipa: 'ɦɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes: 'Voiced glottal fricative. Attested in Sanskrit-language Pallava inscriptions.',
    sort_order: 42,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },

  // --- Dravidian additions ---
  {
    id: 'PAL-C-034',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER LLA',
    transliteration: 'ḷa',
    phonetic_value: 'lla',
    ipa: 'ɭɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Retroflex lateral approximant (Tamil ழ/ள equivalent). A characteristically Dravidian ' +
      'phoneme not found in Sanskrit. Frequently attested in Tamil-language Pallava inscriptions.',
    sort_order: 43,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-C-035',
    script_id: 'pallava',
    character_name: 'PALLAVA LETTER RRA',
    transliteration: 'ṟa',
    phonetic_value: 'rra',
    ipa: 'rɐ',
    category: 'consonant',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Alveolar trill (Tamil ற equivalent). A characteristically Dravidian phoneme. ' +
      'Attested in Tamil-language Pallava inscriptions.',
    sort_order: 44,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },

  // =========================================================================
  // DEPENDENT VOWEL SIGNS (9)
  // Based on Pandey 2018, Section 3 — Vowel Signs (mātrā)
  // =========================================================================
  {
    id: 'PAL-D-001',
    script_id: 'pallava',
    character_name: 'PALLAVA VOWEL SIGN AA',
    transliteration: 'ā',
    phonetic_value: 'aa',
    ipa: 'aː',
    category: 'dependent-vowel-sign',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Dependent sign for long /ā/. Typically a vertical stroke added to the right of the ' +
      'base consonant, following Brahmic conventions.',
    sort_order: 45,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-D-002',
    script_id: 'pallava',
    character_name: 'PALLAVA VOWEL SIGN I',
    transliteration: 'i',
    phonetic_value: 'i',
    ipa: 'i',
    category: 'dependent-vowel-sign',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Dependent sign for short /i/. Typically attached above or to the upper-right of ' +
      'the base consonant.',
    sort_order: 46,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-D-003',
    script_id: 'pallava',
    character_name: 'PALLAVA VOWEL SIGN II',
    transliteration: 'ī',
    phonetic_value: 'ii',
    ipa: 'iː',
    category: 'dependent-vowel-sign',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Dependent sign for long /ī/. Distinguished from the short /i/ sign by an ' +
      'additional stroke element.',
    sort_order: 47,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-D-004',
    script_id: 'pallava',
    character_name: 'PALLAVA VOWEL SIGN U',
    transliteration: 'u',
    phonetic_value: 'u',
    ipa: 'u',
    category: 'dependent-vowel-sign',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Dependent sign for short /u/. Typically a small curved mark below or to the ' +
      'lower portion of the base consonant.',
    sort_order: 48,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-D-005',
    script_id: 'pallava',
    character_name: 'PALLAVA VOWEL SIGN UU',
    transliteration: 'ū',
    phonetic_value: 'uu',
    ipa: 'uː',
    category: 'dependent-vowel-sign',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Dependent sign for long /ū/. Distinguished from short /u/ sign by an extended ' +
      'or doubled curved element.',
    sort_order: 49,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-D-006',
    script_id: 'pallava',
    character_name: 'PALLAVA VOWEL SIGN E',
    transliteration: 'e',
    phonetic_value: 'e',
    ipa: 'e',
    category: 'dependent-vowel-sign',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Dependent sign for /e/. In Brahmic convention, typically placed before or above ' +
      'the base consonant.',
    sort_order: 50,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-D-007',
    script_id: 'pallava',
    character_name: 'PALLAVA VOWEL SIGN AI',
    transliteration: 'ai',
    phonetic_value: 'ai',
    ipa: 'ai',
    category: 'dependent-vowel-sign',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Dependent sign for diphthong /ai/. Composed as an extension of the /e/ vowel sign ' +
      'following Brahmic compositional logic.',
    sort_order: 51,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-D-008',
    script_id: 'pallava',
    character_name: 'PALLAVA VOWEL SIGN O',
    transliteration: 'o',
    phonetic_value: 'o',
    ipa: 'o',
    category: 'dependent-vowel-sign',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Dependent sign for /o/. In Brahmic scripts, typically a combination of the /e/ sign ' +
      'and the /aa/ sign around the base consonant.',
    sort_order: 52,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-D-009',
    script_id: 'pallava',
    character_name: 'PALLAVA VOWEL SIGN AU',
    transliteration: 'au',
    phonetic_value: 'au',
    ipa: 'au',
    category: 'dependent-vowel-sign',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Dependent sign for diphthong /au/. Compositionally derived from the /o/ sign with ' +
      'an additional element.',
    sort_order: 53,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },

  // =========================================================================
  // MODIFIER MARKS
  // Based on Pandey 2018, Section 3 — Various Signs
  // =========================================================================
  {
    id: 'PAL-M-001',
    script_id: 'pallava',
    character_name: 'PALLAVA SIGN ANUSVARA',
    transliteration: 'ṁ',
    phonetic_value: 'm (nasalisation)',
    ipa: 'm̃',
    category: 'anusvara',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Anusvāra — a suprasegmental nasalisation mark. Typically rendered as a dot above ' +
      'the akṣara. Used to represent word-final or pre-consonantal nasal segments.',
    sort_order: 54,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-M-002',
    script_id: 'pallava',
    character_name: 'PALLAVA SIGN VISARGA',
    transliteration: 'ḥ',
    phonetic_value: 'h (voiceless glottal)',
    ipa: 'h',
    category: 'visarga',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Visarga — a word-final aspiration mark. Typically rendered as two dots arranged ' +
      'vertically after the akṣara. Occurs in Sanskrit-language inscriptions.',
    sort_order: 55,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-M-003',
    script_id: 'pallava',
    character_name: 'PALLAVA SIGN VIRAMA',
    transliteration: '(virama)',
    phonetic_value: '(vowel killer)',
    ipa: '',
    category: 'virama',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Virāma (halant) — suppresses the inherent vowel of a consonant, yielding a bare ' +
      'consonant. Essential for representing consonant clusters and word-final consonants. ' +
      'In Pallava-era inscriptions, the virama is sometimes implicit (conjunct ligatures ' +
      'were preferred for clusters).',
    sort_order: 56,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-M-004',
    script_id: 'pallava',
    character_name: 'PALLAVA SIGN SUBJOINER',
    transliteration: '(subjoiner)',
    phonetic_value: '(consonant stacking)',
    ipa: '',
    category: 'subjoiner',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Subjoiner mark — used to form conjunct (stacked) consonant clusters by placing ' +
      'one consonant below another. Distinct from virama in encoding semantics: the ' +
      'subjoiner produces a visible sub-base form rather than a killed consonant.',
    sort_order: 57,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-M-005',
    script_id: 'pallava',
    character_name: 'PALLAVA LENGTH MARK',
    transliteration: '(length mark)',
    phonetic_value: '(vowel lengthening)',
    ipa: '',
    category: 'length-mark',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'A length mark (avagraha-like function) used to indicate prolongation of a vowel, ' +
      'particularly in ritual or emphatic contexts in Pallava-era Sanskrit inscriptions.',
    sort_order: 58,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },

  // =========================================================================
  // PUNCTUATION (3)
  // Based on Pandey 2018, Section 3 — Punctuation
  // =========================================================================
  {
    id: 'PAL-P-001',
    script_id: 'pallava',
    character_name: 'PALLAVA DANDA',
    transliteration: '।',
    phonetic_value: '(phrase separator)',
    ipa: '',
    category: 'punctuation',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Single vertical stroke used as a phrase or verse-half separator (daṇḍa). ' +
      'Functionally equivalent to the Devanagari daṇḍa (U+0964) but with Pallava ' +
      'glyph form.',
    sort_order: 59,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-P-002',
    script_id: 'pallava',
    character_name: 'PALLAVA DOUBLE DANDA',
    transliteration: '॥',
    phonetic_value: '(verse separator)',
    ipa: '',
    category: 'punctuation',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Double vertical stroke used as a verse or section separator. Marks the end of ' +
      'a complete verse (śloka) or paragraph in Pallava inscriptions.',
    sort_order: 60,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
  {
    id: 'PAL-P-003',
    script_id: 'pallava',
    character_name: 'PALLAVA SIGN SIDDHAM',
    transliteration: '(siddham)',
    phonetic_value: '(auspicious invocation)',
    ipa: '',
    category: 'punctuation',
    unicode_codepoint: null,
    unicode_block: null,
    attestation_status: 'directly-attested',
    confidence: 'high',
    svg_path: null,
    notes:
      'Auspicious invocation sign placed at the beginning of inscriptions and documents. ' +
      'The siddham (siddhaṃ, "success/accomplishment") is a conventional opening marker ' +
      'in Pallava royal inscriptions and copper-plate grants.',
    sort_order: 61,
    created_at: SEED_TS,
    updated_at: SEED_TS,
  },
];

// ===========================================================================
// CHARACTER → SOURCE LINKS
// ===========================================================================
//
// Every Pallava character is sourced from Pandey 2018 (SRC-PANDEY-2018).
// The reference_location points to the character chart section of the proposal.
// ===========================================================================

export const characterSources: CharacterSource[] = pallavCharacters.map(
  (char): CharacterSource => ({
    id: `CS-${char.id}`,
    character_id: char.id,
    source_id: 'SRC-PANDEY-2018',
    inscription_name: '',
    location: '',
    date_text: '2018',
    date_start_year: 2018,
    date_end_year: 2018,
    image_path: null,
    notes:
      `Character "${char.character_name}" listed in Pandey 2018 (L2/18-083), ` +
      `proposed Pallava character repertoire. Category: ${char.category}.`,
  })
);

// ===========================================================================
// NAVAGRAHA REFERENCE DATA
// ===========================================================================
//
// The nine celestial bodies (navagraha) of Indian astronomy/astrology.
// Tamil names follow standard Tamil transliteration conventions.
// Sanskrit names are in IAST. Tamil script names use Unicode Tamil block.
//
// NOTE on elements: Traditional Indian associations. Rāhu and Kētu, being
// shadow bodies (chāyā graha), do not have a single canonical element
// association — sources vary. We mark them null.
// ===========================================================================

export const navagrahas: Graha[] = [
  {
    id: 'surya',
    name: 'Sūrya',
    name_sanskrit: 'सूर्य',
    name_tamil: 'சூரியன்',
    celestial_body: 'Sun',
    day: 'Ñāyiṟṟukkiḻamai (ஞாயிற்றுக்கிழமை, Sunday)',
    element: 'Fire',
    description:
      'Sūrya (Tamil: Cūriyaṉ) is the Sun, the sovereign of the navagrahas and the source of ' +
      'light and life. In Indian astronomical tradition, Sūrya is classified as a graha (celestial ' +
      'mover) occupying the centre of the planetary scheme. Temples dedicated to Sūrya are attested ' +
      'across the Pallava cultural sphere, and solar symbolism features prominently in Pallava ' +
      'royal iconography.',
  },
  {
    id: 'chandra',
    name: 'Candra',
    name_sanskrit: 'चन्द्र',
    name_tamil: 'சந்திரன்',
    celestial_body: 'Moon',
    day: 'Tiṅkaḷkiḻamai (திங்கள்கிழமை, Monday)',
    element: 'Water',
    description:
      'Candra (Tamil: Cantiraṉ) is the Moon, associated with the mind (manas), fertility, ' +
      'and the tides. In Siddhāntic astronomy, the Moon\'s position is computed with high ' +
      'precision for calendar (pañcāṅga) and eclipse calculations. Lunar symbolism appears ' +
      'in Pallava-era temple sculptures and coin designs.',
  },
  {
    id: 'mangala',
    name: 'Maṅgala',
    name_sanskrit: 'मङ्गल',
    name_tamil: 'செவ்வாய்',
    celestial_body: 'Mars',
    day: 'Cevvāykkiḻamai (செவ்வாய்க்கிழமை, Tuesday)',
    element: 'Fire',
    description:
      'Maṅgala (Tamil: Cevvāy, literally "red one") is Mars, the red planet. Associated ' +
      'with martial energy, courage, and the earth element in some traditions (fire in others). ' +
      'The Tamil name Cevvāy directly references the planet\'s red appearance. Maṅgala ' +
      'appears in Pallava-era navagraha sculptural panels.',
  },
  {
    id: 'budha',
    name: 'Budha',
    name_sanskrit: 'बुध',
    name_tamil: 'புதன்',
    celestial_body: 'Mercury',
    day: 'Putaṉkiḻamai (புதன்கிழமை, Wednesday)',
    element: 'Earth',
    description:
      'Budha (Tamil: Putaṉ) is Mercury, associated with intellect, speech, and commerce. ' +
      'Not to be confused with Buddha (the Awakened One). In Indian astronomy, Budha\'s rapid ' +
      'orbital motion made it a challenging target for Siddhāntic computational models. ' +
      'The planet is personified as the son of Candra (the Moon) in Purāṇic tradition.',
  },
  {
    id: 'brihaspati',
    name: 'Bṛhaspati',
    name_sanskrit: 'बृहस्पति',
    name_tamil: 'குரு',
    celestial_body: 'Jupiter',
    day: 'Viyāḻakkiḻamai (வியாழக்கிழமை, Thursday)',
    element: 'Ether (Ākāśa)',
    description:
      'Bṛhaspati (Tamil: Kuru, also Viyāḻaṉ) is Jupiter, the teacher (guru) of the devas. ' +
      'Associated with wisdom, learning, and dharma. The 60-year Tamil calendar cycle ' +
      '(Tamil: Aṟupatu āṇṭu vaṭṭam) is based on the approximately 12-year orbital period of ' +
      'Jupiter. Bṛhaspati holds a position of honour in Pallava-era navagraha panels, ' +
      'typically depicted with a book or prayer beads.',
  },
  {
    id: 'shukra',
    name: 'Śukra',
    name_sanskrit: 'शुक्र',
    name_tamil: 'சுக்கிரன்',
    celestial_body: 'Venus',
    day: 'Veḷḷikkiḻamai (வெள்ளிக்கிழமை, Friday)',
    element: 'Water',
    description:
      'Śukra (Tamil: Cukkirraṉ, also Veḷḷi) is Venus, the teacher (guru) of the asuras. ' +
      'Associated with beauty, love, arts, and material prosperity. Venus as the morning ' +
      'and evening star was carefully observed in Indian astronomical traditions. The Tamil ' +
      'name Veḷḷi (வெள்ளி) means "silver" or "white," referencing the planet\'s brightness.',
  },
  {
    id: 'shani',
    name: 'Śani',
    name_sanskrit: 'शनि',
    name_tamil: 'சனி',
    celestial_body: 'Saturn',
    day: 'Caṉikkiḻamai (சனிக்கிழமை, Saturday)',
    element: 'Air',
    description:
      'Śani (Tamil: Caṉi) is Saturn, the slowest-moving of the visible planets. Associated ' +
      'with discipline, longevity, and karmic consequences. Saturn\'s approximately 29.5-year ' +
      'orbital period was well known in Siddhāntic astronomy. Śani is typically depicted ' +
      'in a dark hue in Pallava-era navagraha sculpture and is positioned at the end of ' +
      'the planetary sequence in temple panels.',
  },
  {
    id: 'rahu',
    name: 'Rāhu',
    name_sanskrit: 'राहु',
    name_tamil: 'ராகு',
    celestial_body: 'Ascending lunar node',
    day: '(no dedicated weekday)',
    element: null,
    description:
      'Rāhu (Tamil: Rāku) is the ascending node of the Moon — the point where the Moon\'s ' +
      'orbit crosses the ecliptic from south to north. In Indian astronomy, Rāhu is classified ' +
      'as a chāyā graha (shadow body) and is essential for computing lunar and solar eclipses. ' +
      'Mythologically, Rāhu is the severed head of the demon Svarbhānu who swallowed the sun, ' +
      'causing eclipses. Rāhu appears in Pallava navagraha panels alongside the seven visible ' +
      'celestial bodies.',
  },
  {
    id: 'ketu',
    name: 'Kētu',
    name_sanskrit: 'केतु',
    name_tamil: 'கேது',
    celestial_body: 'Descending lunar node',
    day: '(no dedicated weekday)',
    element: null,
    description:
      'Kētu (Tamil: Kētu) is the descending node of the Moon — the point where the Moon\'s ' +
      'orbit crosses the ecliptic from north to south. Like Rāhu, Kētu is a chāyā graha ' +
      '(shadow body) critical for eclipse prediction. Mythologically, Kētu is the severed ' +
      'tail of the demon whose head is Rāhu. In Pallava-era navagraha sculpture, Kētu is ' +
      'often depicted with a serpent body or a comet-like tail.',
  },
];

// ===========================================================================
// SUMMARY STATISTICS
// ===========================================================================
//
// Independent vowels:      9 characters  (PAL-V-001 to PAL-V-009)
// Consonant letters:      35 characters  (PAL-C-001 to PAL-C-035)
// Dependent vowel signs:   9 characters  (PAL-D-001 to PAL-D-009)
// Modifier marks:          5 characters  (PAL-M-001 to PAL-M-005)
// Punctuation:             3 characters  (PAL-P-001 to PAL-P-003)
// ─────────────────────────────────────────────────────────────────
// Total Pallava characters: 61
//
// Navagrahas:               9 entries
// Historical sources:       9 entries
// Character–source links:  61 entries (one per character → SRC-PANDEY-2018)
// ===========================================================================
