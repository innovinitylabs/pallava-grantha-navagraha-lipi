# Nava Graha Lipi — Glyph Design Research Dossier
## Document 00: Project Brief & Foundations for Fable Design Exploration

---

### 1. Executive Summary & Project Identity

**Project Name:** Nava Graha Lipi (Tamil: நவ கிரக லிபி)  
**Initiative Nature:** Independent, Open-Source Indian Astronomical Glyph Initiative  
**Domain:** `nava-graha-lipi.valipokkann.in`  
**Licensing Ecosystem:** Tripartite Open Source (SIL Open Font License 1.1 for fonts, Creative Commons Attribution 4.0 International for visual artwork and SVG specifications, MIT License for application code)  
**Primary Target Visual Tool:** Fable (vector motion and parametric design environment)

**Nava Graha Lipi** is an independent, open-source initiative dedicated to engineering an original, systematic, and historically grounded Indian astronomical glyph system. Beginning with the foundational nine Grahas (the *Navagraha* of classical Indian calendrical and celestial science), the project establishes a cohesive vector notation engineered to function seamlessly as standalone astronomical symbols, inline typographic characters in digital text, and scalable SVG vectors for modern digital user interfaces, astronomical charts, and epigraphical research tools.

This dossier serves as the foundational creative brief and technical reference manual for visual designers working in **Fable**. It defines the conceptual boundaries, historical inspirations, visual design grammar, 1000 UPM coordinate metrics, individual planetary briefs, and rigorous evaluation criteria required to develop candidate glyphs without succumbing to historical fabrication, Western astrological conflation, or generic iconographic clichés.

---

### 2. The Core Problem: Why a New Planetary Glyph System Is Needed

In contemporary digital typography and character encoding, astronomical notation is overwhelmingly dominated by the Western European tradition:

1. **Greco-Roman Cultural Monopoly in Unicode:** The standard Unicode Miscellaneous Symbols block (`U+263C–U+2644`) encodes glyphs rooted in Greco-Roman and Hellenistic astrological iconography:
   - Sūrya is represented by Sol's circular disc with a central dot or rayed face (`U+2609` ☉).
   - Chandra is represented by Diana's lunar crescent (`U+263D` ☽).
   - Maṅgala is represented by the shield and spear of Mars (`U+2642` ♂).
   - Budha is represented by the caduceus of Mercury (`U+263F` ☿).
   - Guru is represented by the thunderbolt or eagle/zeta of Jupiter (`U+2643` ♃).
   - Śukra is represented by the hand mirror of Venus (`U+2640` ♀).
   - Śani is represented by the sickle or scythe of Saturn (`U+2644` ♄).
   - Rāhu and Ketu are represented by medieval dragon node symbols: Caput Draconis (`U+260A` ☊) and Cauda Draconis (`U+260B` ☋).

2. **Absence of a Standardized Indian Astronomical Vector Repertoire:** In classical and contemporary Indian astronomical practice (Jyotiṣa, Siddhānta, and Pañcāṅgam calendrical computation), there has historically been no universally standardized, single-character vector glyph system shared across all regions. Instead, traditional practice has relied on:
   - First-syllable abbreviation ligatures rendered in diverse regional scripts (e.g., *Cū* for Cūriyan / Sūrya, *Can* for Cantiran / Candra, *Cev* for Cevvāy / Maṅgala in Tamil and Grantha manuscripts).
   - Katapayādi and Āryabhaṭa alphanumeric notation for mathematical tables.
   - Intricate multi-figure temple sculptures, pictorial miniature paintings, or geometric yantra diagrams that cannot function as inline typographic characters.

3. **Digital Panchangam and Academic Formatting Deficit:** Modern publishers of Indian almanacs (Pañcāṅgam), astronomical software, epigraphical databases, and horoscopic charts are forced to either:
   - Reuse Western astronomical symbols that convey foreign iconographic metaphors.
   - Use plain text abbreviations that clutter dense numerical tables.
   - Rely on low-resolution raster icons that do not scale, lack optical compensation, and cannot be integrated into OpenType fonts.

**Nava Graha Lipi** solves this historical void by developing an original, coherent, and elegant Indian astronomical symbol system.

---

### 3. Intended Users & Primary Use Cases

The glyph system developed through this dossier is engineered for five distinct functional ecosystems:

1. **Panchangam Publishers & Software Developers:**
   - Dense calendrical tables where space is at a premium and instant planetary identification at 10pt–14pt text sizes is mandatory.
   - Digital astronomical software displaying planetary transits, planetary hours (horā), and planetary alignments.

2. **Epigraphers & Astronomical Historians:**
   - Academic monographs, critical editions, and digital humanities databases documenting Indian astronomical history, Tamil-region archaeoastronomy, and Siddhāntic literature.

3. **Digital Type Designers & Foundries:**
   - Type designers seeking to include culturally grounded astronomical glyphs in South Asian OpenType fonts, mapped to Private Use Area (PUA) code points (`U+E000–U+E008`) and eventually proposed for universal Unicode standardisation.

4. **Visual & Motion Designers (Fable Ecosystem):**
   - High-resolution SVG vectors and animated visual assets for educational animations, planetarium presentations, astronomical documentaries, and museum exhibitions.

5. **Contemporary UI/UX Designers:**
   - Web and mobile application interfaces displaying celestial data, calendar notifications, and cultural observances.

---

### 4. Scope of the Initial Nine-Graha Repertoire

The initial design scope is deliberately focused on the **Nine Grahas (Navagraha)**:

| # | Primary English / IAST | Tamil Script | Astronomical Identity | Western Astrological Equivalent |
|---|---|---|---|---|
| 01 | **Sūrya** | சூரியன் | The Sun (Sol) | Sun (`U+2609`) |
| 02 | **Candra** (Chandra) | சந்திரன் | The Moon (Luna) | Moon (`U+263D`) |
| 03 | **Maṅgala** | செவ்வாய் | Mars | Mars (`U+2642`) |
| 04 | **Budha** | புதன் | Mercury | Mercury (`U+263F`) |
| 05 | **Guru** (Bṛhaspati) | குரு / வியாழன் | Jupiter | Jupiter (`U+2643`) |
| 06 | **Śukra** | சுக்கிரன் / வெள்ளி | Venus | Venus (`U+2640`) |
| 07 | **Śani** | சனி | Saturn | Saturn (`U+2644`) |
| 08 | **Rāhu** | இராகு | Ascending Lunar Node | North Node (`U+260A`) |
| 09 | **Ketu** | கேது | Descending Lunar Node | South Node (`U+260B`) |

#### Future Expansion Scope (Phases 2 & 3)
Following the consolidation of the nine Graha glyphs, the system will expand into:
- The 12 Rāśis (Zodiacal constellations / solar months).
- The 27 Nakṣatras (Lunar mansions).
- Tithis (Lunar phases), Karaṇas, and Yogas.
- Planetary dignities (Ucca, Nīca, Svakṣetra) and astronomical aspects (Dṛṣṭi).

---

### 5. Architectural Distinction: Historical Preservation vs. Original Glyph Creation

A fundamental design and research principle governs this entire project:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   NAVA GRAHA LIPI PROJECT INTEGRITY                    │
├───────────────────────────────────┬────────────────────────────────────┤
│   HISTORICAL EPIGRAPHY RESEARCH   │     ORIGINAL GLYPH CREATION        │
│      (Documentary & Archival)     │       (Design & Engineering)       │
├───────────────────────────────────┼────────────────────────────────────┤
│ • Preserving 61 attested Pallava  │ • Designing 9 original modern      │
│   characters from Pandey (2018).  │   planetary astronomical symbols.  │
│ • Cataloguing primary citations   │ • Creating new cubic Bézier paths  │
│   from ASI, EI, TNAA, SII.        │   on a 1000 UPM OpenType grid.     │
│ • Documenting stone inscriptions, │ • Synthesizing stroke ductus and   │
│   copper plates, and ductus.      │   yantra geometry into symbols.    │
│ • Strict palaeographical truth.   │ • Transparently modern invention.  │
│                                   │                                    │
│   "THIS IS WHAT HISTORY WROTE"    │   "THIS IS WHAT WE DESIGN TODAY"   │
└───────────────────────────────────┴────────────────────────────────────┘
```

> [!CAUTION]
> **Never Fabricate History:**
> Designers in Fable must never describe, present, or watermark newly created planetary glyphs as "ancient Indian symbols," "rediscovered Pallava characters," or "sacred historical seals." 
> 
> The historical scripts of the Tamil region (Pallava Grantha, Vatteluttu, Tamil-Brahmi) provide the **calligraphic grammar, stroke modulation, and aesthetic ductus**. The glyphs themselves are **proudly modern, original designs created for the digital age**.

---

### 6. Strict Language and Cultural Policy (NON-NEGOTIABLE)

This project operates under strict language and cultural boundaries established in the project charter:

1. **Permitted Languages & Scripts:**
   - **Tamil:** Both historical epigraphic scripts of the Tamil region (Pallava Grantha, Vatteluttu, Tamil-Brahmi) and modern Tamil script (தமிழ்).
   - **English:** Technical documentation, UI copy, and standard academic Latin IAST transliteration (e.g., *Sūrya*, *Candra*, *Maṅgala*, *Budha*, *Guru*, *Śukra*, *Śani*, *Rāhu*, *Ketu*).

2. **Absolute Prohibitions:**
   - **NO Hindi or Devanagari script anywhere in the project** (no Devanagari characters in documentation, filenames, SVGs, metadata, code, or databases).
   - **NO other modern Indian scripts** (Telugu, Kannada, Malayalam, Bengali, etc.).
   - Do not use Hindi terminology or North Indian visual conventions as the project's identity.
   - The design foundation must remain firmly rooted in the monumental stone and copper epigraphy of the Tamil region.

---

### 7. Long-Term Digital Typography & Open-Source Objectives

1. **Vector Precision in Fable:** Every glyph developed in Fable must be authored as mathematically pristine vector paths within a calibrated 1000×1000 coordinate frame.
2. **UFO3 Font Source Production:** Exported SVG outlines will feed directly into Unified Font Object (UFO3) masters and be compiled via FontMake into OpenType (OTF/TTF) and WOFF2 web fonts.
3. **Private Use Area (PUA) Mapping:** The initial 9 glyphs are mapped to Unicode Private Use Area code points `U+E000` through `U+E008`.
4. **Universal Standardisation Roadmap:** Following extensive community review, testing across astronomical software, and scholarly consultation, the project will assemble a formal Character Encoding Proposal to the Unicode Consortium (UTC) to propose an independent block for Indian Astronomical Symbols.
5. **Radical Openness:** All vector sources, construction grids, research notes, and test suites are permanently licensed under open terms to ensure unencumbered global adoption.
