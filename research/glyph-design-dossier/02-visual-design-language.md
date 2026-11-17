# Nava Graha Lipi — Glyph Design Research Dossier
## Document 02: Visual Design Language & Typographic Vocabulary

---

### 1. Design Philosophy: The Tension Between Geometry and Ductus

A successful astronomical symbol system cannot rely on bare Euclidean geometry alone. A simple circle, triangle, or square is a generic mathematical shape, not a cultural or typographic glyph. Conversely, an overly complex illustrative drawing or literal pictorial icon cannot function as an inline character in a running text font or high-density panchangam table.

**The core visual challenge in Fable:**
Synthesizing **cosmological geometric archetypes** with the **fluid calligraphic ductus of Tamil-region epigraphy**.

```
   COSMIC GEOMETRY                   CALLIGRAPHIC DUCTUS
 (Circle, Triangle, Arc,            (Pallava chisel serifs,
     Bow, Yantra grid)              Vatteluttu loop sweeps)
             │                                 │
             └───────────────┬─────────────────┘
                             │
                             ▼
                    NAVA GRAHA LIPI GLYPH
              • Monoline or subtly modulated
              • Stable 1000 UPM baseline grounding
              • Generous open counter apertures
              • Instant visual distinctiveness
```

---

### 2. Anatomical Design Vocabulary

When constructing glyph paths in Fable, adhere to the following unified vocabulary:

#### 2.1 Stroke Character & Weight Modulation
- **Primary Stem Weight:** Calibrated nominally at **48 to 60 units** on a 1000 UPM grid (approximately 5% to 6% of the em square).
- **Secondary / Accent Weight:** **32 to 40 units** for internal crossbars, auxiliary ray lines, and secondary counter loops.
- **Hairline / Flare Terminations:** **24 to 30 units** at tapering terminal flourishes.
- **Stroke Contrast Ratio:** Maintain a subtle, humanist contrast ratio between **1.4:1 and 1.8:1**. Avoid both extreme Didone-like vertical-to-horizontal hairline contrast (which shatters at 12pt) and pure mechanical monoline uniformity (which looks sterile and disconnected from stone-carving traditions).

#### 2.2 Terminal Treatments (The Pallava Head-mark)
Terminals must reflect the physical interaction of chisel and granite:
1. **Flared Terminals:** Subtle outward expansion (10%–15% increase in stem width) as a stroke approaches an open endpoint.
2. **Beveled Chisel Ends:** Angled cuts (between 12° and 24° from perpendicular) rather than blunt round caps or harsh geometric squares.
3. **Pallava Horizontal Bar / Serif:** On primary vertical stems, a compact horizontal cap with slight terminal drop-curves, derived from early Pallava epigraphic head-marks (attested in the Kasakudi and Kuram plates).

#### 2.3 Curvature: The Parabolic Sweep vs. Circular Arc
- **Avoid Pure Circular Stiff Arcs:** Pure circular segments (`A` commands) feel mechanical and computerized.
- **Embrace Asymmetric Bézier Acceleration:** Curves should exhibit parabolic acceleration: starting with a gradual trajectory, tightening through the apex, and releasing into an open terminal sweep. This mimics the natural kinetic inertia of a scribe or stone-mason.
- **$C^1$ and $C^2$ Tangency Continuity:** All curve-to-curve and line-to-curve transitions must maintain continuous mathematical tangency without accidental kinks, flat spots, or abrupt inflection points.

#### 2.4 Loop Construction & Counter-Clockwise Ductus
- In South Indian epigraphy, internal loops are predominantly initiated with a downward counter-clockwise sweep.
- **Open Apertures:** Loops must never be fully choked. Maintain a minimum counter clearance of **40 units** at the narrowest constriction to ensure legibility when printed on low-grade unbleached newsprint or rendered on 1x displays.
- **Internal Teardrop Counters:** When a loop encloses negative space, the counter should assume an organic teardrop or almond geometry rather than a rigid ellipse.

#### 2.5 Symmetry vs. Asymmetrical Tension
The nine Grahas naturally divide into two cosmological energies:
- **Centric & Symmetric Grahas (Solar & Benefic Stability):**
  - **Sūrya:** Centered radiation, radial symmetry or bilateral vertical symmetry.
  - **Guru:** Rectangular stability, vertical pillar equilibrium.
  - **Śukra:** Bilateral floral harmony, balanced loop distribution.
- **Dynamic & Asymmetric Grahas (Mars, Nodes, & Rapid Movers):**
  - **Maṅgala:** Directional angular thrust (upward and rightward trajectory).
  - **Budha:** Dynamic winged asymmetry reflecting swift orbital velocity.
  - **Śani:** Slow, heavy base with delayed upward release.
  - **Rāhu & Ketu:** Serpentine vortex arcs conveying nodal crossing and eclipse shadow.

---

### 3. Proportion, Visual Weight, and Optical Centers

#### 3.1 The Law of the Lower Optical Center
In typography, a geometric center ($y=500$) appears optically higher than it is.
- **Optical Center:** The focal mass of every Graha glyph must be positioned between **$y=460$ and $y=490$** (in a top-left origin grid where baseline is at $y=700$).
- **Grounded Base:** Glyphs must rest stably on the baseline ($y=700$). Avoid top-heavy designs that appear about to tip over during reading.

#### 3.2 Width-to-Height Proportions
To avoid a monotonous appearance where all glyphs look like identical circular medallions, vary proportions thoughtfully:
- **Compact / Vertical Glyphs (Aspect Ratio ~0.75 to 0.85):** Maṅgala, Guru, Ketu.
- **Balanced Square Glyphs (Aspect Ratio ~0.90 to 1.00):** Sūrya, Śani, Rāhu.
- **Expansive / Horizontal Glyphs (Aspect Ratio ~1.00 to 1.10):** Candra, Budha, Śukra.

```
┌────────────────────────────────────────────────────────────────────────┐
│                     ASPECT RATIO DIVERSITY MATRIX                      │
├─────────────────────┬───────────────────────────┬──────────────────────┤
│ VERTICAL (0.75-0.85)│ BALANCED SQUARE (0.9-1.0) │ EXPANSIVE (1.0-1.1)  │
├─────────────────────┼───────────────────────────┼──────────────────────┤
│ • Maṅgala (Spear)   │ • Sūrya (Solar Orb)       │ • Candra (Crescent)  │
│ • Guru (Pillar)     │ • Śani (Boundary)         │ • Budha (Winged Arc) │
│ • Ketu (Comet Tail) │ • Rāhu (Serpent Vortex)   │ • Śukra (Floral Loop)│
└─────────────────────┴───────────────────────────┴──────────────────────┘
```

---

### 4. Negative Space Management & Optical Compensation

When a vector is scaled down from 1000px in Fable to 14px in a web browser or panchangam table:
1. **Stroke Expansion Illusion:** Dark strokes on light paper appear optically thicker than light strokes on dark stone. Design outlines so that the internal counter spaces can absorb a 10% optical stroke blooming.
2. **Joint Acute-Angle Fill-in:** Where two strokes meet at an acute angle (< 45°), the interior vertex fills in with ink or pixels. 
   - *Design Rule:* Deep vertices must be slightly hollowed out or given a tiny optical radius (an *ink trap* of 15–20 UPM) to preserve distinct stroke separation at text sizes.
3. **Enclosure Trap Prevention:** Never nest a complex shape tightly inside an outer ring. For example, in Sūrya, if a central bindu is placed inside a circular solar orb, the distance between the bindu perimeter and the inner edge of the orb must be at least **140 to 180 units**.

---

### 5. Achieving Family Coherence Without Mechanical Monotony

A critical design failure occurs when an icon set is created by taking one master circle and sticking nine different pictograms inside it. Such systems look like corporate badge sets, not a profound astronomical notation system.

#### How to Build Family Unity:
1. **Common Stroke Vocabulary:** Every glyph shares the same terminal bevel angle, the same primary stroke weight (nominally 48–60 UPM), and the same inner counter clearance rules.
2. **Consistent Vertical Metrics:** Every glyph acknowledges the Cap-Height line ($y=250$), the Baseline ($y=700$), and the Optical Center ($x=500$).
3. **Shared Inscriptional Heritage:** All nine glyphs exhibit subtle Pallava chisel flourishes or Vatteluttu curvature transitions.
4. **Distinct Topological Skeletons:**
   - Sūrya is an orb with radiating or central focus.
   - Candra is an open crescent basin.
   - Maṅgala is an ascending tri-pointed spear apex.
   - Budha is a winged caduceus-arc.
   - Guru is a monumental four-fold sanctum / pillar.
   - Śukra is a five-fold woven knot / blossom.
   - Śani is a grounded bow / ascending ascetic staff.
   - Rāhu is an ascending hooded eclipse spiral.
   - Ketu is a descending tapering comet plume.

Each glyph possesses an unmistakably unique silhouette, recognizable even when blurred or viewed in peripheral vision.
