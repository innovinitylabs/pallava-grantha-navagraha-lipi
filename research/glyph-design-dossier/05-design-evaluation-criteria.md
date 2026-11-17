# Nava Graha Lipi — Glyph Design Research Dossier
## Document 05: Design Evaluation Criteria & Quality Assurance Framework

---

### 1. Purpose & Methodological Framework

This evaluation framework provides an objective, repeatable methodology to review and benchmark candidate glyphs developed in Fable.

> [!IMPORTANT]
> **No Automated Winners:**  
> A high numerical score does not automatically crown a winner. Scoring is a diagnostic instrument to identify design deficiencies, guide iterative refinement, and structure peer review. Final selection requires seasoned human typographic and cultural judgement.

Every candidate glyph is evaluated across **ten critical dimensions**, weighted across three overarching categories:
1. **Typographic & Functional Performance (40 Points)**
2. **Epigraphic & Cultural Integrity (30 Points)**
3. **Symbolic Distinctiveness & Semiotics (30 Points)**

---

### 2. The Ten Evaluation Dimensions (100-Point Scoring System)

```
┌────────────────────────────────────────────────────────────────────────┐
│             NAVA GRAHA LIPI 100-POINT EVALUATION RUBRIC                │
├────┬───────────────────────────────────────┬────────┬──────────────────┤
│ #  │ DIMENSION CRITERIA                    │ MAX PTS│ KEY QUESTION     │
├────┼───────────────────────────────────────┼────────┼──────────────────┤
│ 01 │ Individual Recognisability            │ 10     │ Is the silhouette│
│    │                                       │        │ unmistakable?    │
│ 02 │ Family Coherence & Systemic Harmony   │ 10     │ Does it belong to│
│    │                                       │        │ the 9-set family?│
│ 03 │ Small-Scale Legibility (11px–14px)    │ 10     │ Does it hold in  │
│    │                                       │        │ panchangam chart?│
│ 04 │ Monochrome Reproduction & 1-Bit Purity│ 10     │ Does it work in  │
│    │                                       │        │ solid black/ink? │
├────┼───────────────────────────────────────┼────────┼──────────────────┤
│ 05 │ Epigraphical Ductile Fidelity         │ 10     │ Does it reflect  │
│    │ (Tamil-Region Heritage)               │        │ Pallava ductus?  │
│ 06 │ Historical Integrity & Authenticity   │ 10     │ Does it avoid    │
│    │                                       │        │ pseudo-history?  │
│ 07 │ Cultural & Iconographic Resonance     │ 10     │ Does it evoke the│
│    │                                       │        │ Graha's essence? │
├────┼───────────────────────────────────────┼────────┼──────────────────┤
│ 08 │ Distinguishability from Western Astro │ 10     │ Is it distinct   │
│    │ Symbols (Unicode U+2600–U+26FF)       │        │ from ☉, ☽, ♂, ♃? │
│ 09 │ Geometric Consistency & 1000 UPM Grid │ 10     │ Are vectors &    │
│    │                                       │        │ metrics clean?   │
│ 10 │ Digital Font & OpenType Readiness     │ 10     │ Is it ready for  │
│    │                                       │        │ UFO3 & HarfBuzz? │
├────┴───────────────────────────────────────┼────────┼──────────────────┤
│ TOTAL MAXIMUM EVALUATION SCORE             │ 100 PTS│                  │
└────────────────────────────────────────────┴────────┴──────────────────┘
```

---

### 3. Detailed Scoring Breakdown & Rubrics

#### Criterion 01: Individual Recognisability (10 Points)
- **10–9 Points:** The glyph's silhouette is instantly identifiable in peripheral vision or when heavily blurred. It possesses a distinct topological structure unmatched by any other character in the set.
- **8–6 Points:** Clearly identifiable when viewed directly, but shares minor skeletal similarities with one other glyph.
- **5–3 Points:** Can be confused with another glyph under rapid scanning.
- **2–0 Points:** Indistinguishable from another Graha; generic medallion or ambiguous shape.

#### Criterion 02: Family Coherence & Systemic Harmony (10 Points)
- **10–9 Points:** Feels unmistakably like a sibling of the other eight symbols through shared terminal treatments, stroke contrast ratio (1.4:1–1.8:1), and curve acceleration, yet without sacrificing its individual skeleton.
- **8–6 Points:** Generally cohesive; one or two minor details (such as terminal angle or line thickness) deviate slightly from the master system.
- **5–3 Points:** Appears noticeably heavier, lighter, or drawn in a different style than its peers.
- **2–0 Points:** Looks like an intruder from a completely unrelated icon pack.

#### Criterion 03: Small-Scale Legibility at 11px–14px (10 Points)
- **10–9 Points:** Tested in a dense panchangam table layout at 12pt: internal counters remain completely open, vertices do not choke into solid black blobs, and key structural features remain crisp.
- **8–6 Points:** Readable at 14pt; minor counter constriction at 11pt, but identity is maintained.
- **5–3 Points:** Severe counter clogging at 12pt; requires squinting or prior familiarity.
- **2–0 Points:** Complete visual collapse into an amorphous ink blob below 16pt.

#### Criterion 04: Monochrome Reproduction & 1-Bit Purity (10 Points)
- **10–9 Points:** Functions flawlessly in 100% solid black ink on paper and 100% solid white on stone. Requires zero color accents, gradients, drop shadows, or variable opacity to communicate its full meaning.
- **8–6 Points:** Fully functional in monochrome, but benefits slightly from color distinction.
- **5–3 Points:** Depends on multi-tone stroke weights or subtle grey shades to be understood.
- **2–0 Points:** Fails in solid monochrome; requires colored fills to distinguish overlapping layers.

#### Criterion 05: Epigraphical Ductile Fidelity — Tamil-Region Heritage (10 Points)
- **10–9 Points:** Expresses the unmistakable calligraphic logic of Pallava Grantha or Vatteluttu stone and copper epigraphy: open-loop ductus, subtle chisel flares, and stable baseline grounding. Free of North Indian / Devanagari hanging shirorekha lines.
- **8–6 Points:** Shows clear inspiration from Tamil epigraphy, though slightly smoothed out by modern vector tools.
- **5–3 Points:** Feels generic or hybrid; faint echo of Indian ductus mixed with Western modernism.
- **2–0 Points:** Completely devoid of Tamil epigraphic character; feels like a generic tech startup logo.

#### Criterion 06: Historical Integrity & Honesty (10 Points)
- **10–9 Points:** Transparently positioned as a modern original creation. Respects historical research boundaries without falsely claiming to be an ancient glyph.
- **8–6 Points:** Well-documented; clear distinction between historical source and modern design choice.
- **5–3 Points:** Blurred lines between what is epigraphically attested and what was invented.
- **2–0 Points:** Falsely presented as a "rediscovered ancient script symbol" or "sacred relic."

#### Criterion 07: Cultural & Iconographic Resonance (10 Points)
- **10–9 Points:** Powerfully evokes the cosmic, astronomical, and traditional nature of the Graha (e.g., Sūrya's solar radiance, Maṅgala's martial spear, Guru's foundational pillar, Rāhu's eclipse hood) in an abstract typographic manner.
- **8–6 Points:** Conceptually sound; evokes the core archetype with minor ambiguity.
- **5–3 Points:** Metaphor is overly obscure or idiosyncratic.
- **2–0 Points:** Trivial, comical, or culturally disconnected.

#### Criterion 08: Distinguishability from Existing Astronomical Symbols (10 Points)
- **10–9 Points:** Zero risk of confusion with Western astronomical symbols (`U+263C–U+2644` ☉, ☽, ♂, ♃, etc.), existing mathematical operators, or standard alphanumeric characters.
- **8–6 Points:** Distinct from Western symbols; very faint similarity to an obscure mathematical sign that does not impair use.
- **5–3 Points:** Dangerously close to a Western astrological symbol or an existing punctuation mark.
- **2–0 Points:** A direct copy or minor variation of an existing Western astrological glyph.

#### Criterion 09: Geometric Consistency & 1000 UPM Grid Adherence (10 Points)
- **10–9 Points:** Authored with pristine mathematical hygiene: exactly placed within `viewBox="0 0 1000 1000"`, optical mass centered at `Y = 475`, baseline grounded at `Y = 700`, cap-height aligned at `Y = 250`, sidebearings $\ge$ 50 UPM.
- **8–6 Points:** Clean geometry with 1–2 minor coordinate offsets (< 10 units) easily resolved in cleanup.
- **5–3 Points:** Sloppy coordinate placement; stems floating above baseline or crashing through sidebearings.
- **2–0 Points:** Irregular viewBox, stray anchor points, unclosed paths, or erratic scale.

#### Criterion 10: Digital Font & OpenType Readiness (10 Points)
- **10–9 Points:** Vectors consist exclusively of clean, closed cubic Bézier contours (`fill-rule: nonzero;`). Extremum points properly anchored, zero self-intersections, correct clockwise/counter-clockwise winding order. Ready for immediate import into FontForge, Glyphs, or UFO3.
- **8–6 Points:** Clean outlines; requires minor automated path direction inversion or node cleanup before font compilation.
- **5–3 Points:** Contains open path strokes, duplicate overlapping vertices, or unjoined endpoints.
- **2–0 Points:** Non-vector artwork, raster elements, or corrupt path geometry.

---

### 4. Candidate Classification Tiers

Based on the total score achieved across all 10 criteria, each candidate concept in Fable is categorized into one of three operational tiers:

```
┌────────────────────────────────────────────────────────────────────────┐
│                      CANDIDATE CLASSIFICATION TIERS                    │
├─────────┬──────────────┬────────────────────────┬──────────────────────┤
│ TIER    │ SCORE RANGE  │ STATUS                 │ ACTION REQUIRED      │
├─────────┼──────────────┼────────────────────────┼──────────────────────┤
│ TIER I  │ 85 – 100 Pts │ Approved Candidate     │ Advance to UFO3 font │
│         │              │ for Public Peer Review │ staging & test font. │
├─────────┼──────────────┼────────────────────────┼──────────────────────┤
│ TIER II │ 70 – 84 Pts  │ Conditional Candidate  │ Return to Fable for  │
│         │              │ (Refinement Required)  │ specific fixes.      │
├─────────┼──────────────┼────────────────────────┼──────────────────────┤
│ TIER III│ 0 – 69 Pts   │ Archived Exploration   │ Concept retired;     │
│         │              │ (Rejected)             │ notes preserved.     │
└─────────┴──────────────┴────────────────────────┴──────────────────────┘
```

---

### 5. Review Protocol: Step-by-Step QA Workflow

When a designer in Fable completes a set of three candidate concepts for a Graha:

1. **Step 1: Metric Verification (Fable / Illustrator):**
   - Verify coordinate frame is strictly 1000×1000.
   - Verify baseline (`Y=700`) and cap-height (`Y=250`) alignments.
2. **Step 2: Optical Scale Stress-Test:**
   - Render candidate side-by-side at 256px, 64px, 24px, 16px, and 12px.
   - Check if the silhouette remains instantaneously distinguishable from the other eight Grahas.
3. **Step 3: Background Inversion Test:**
   - Place glyph on light parchment (`#F4F0E8`) with ink fill (`#16120F`).
   - Invert to dark stone (`#16120F`) with bone fill (`#FAF8F4`).
   - Check for optical stroke blooming or counter constriction.
4. **Step 4: Comparative Unicode Audit:**
   - Place candidate adjacent to standard Western glyphs (`U+263C–U+2644`) to guarantee complete visual independence.
5. **Step 5: Completion of Metadata Dossier:**
   - Generate metadata JSON conforming to `glyph-specification.schema.json`.
   - Record design rationale and historical inspiration citations.
