import type { GrahaRecord } from "./types";

/**
 * Nava Graha Lipi — Planetary Glyph Registry
 * 
 * 9 Grahas, each engineered with three candidate design variants on a 1000 UPM grid.
 * (viewBox: 0 0 1000 1000; Baseline: Y=700, Cap-Height: Y=250, Axis: X=500).
 * 
 * These glyphs represent original modern candidate constructions for community review,
 * testing, and standardisation research. They are NOT ancient historical artifacts.
 */

export const GRAHAS: GrahaRecord[] = [
  {
    id: "surya",
    number: 1,
    name: "Sūrya",
    nameSanskrit: "सूर्य",
    nameTamil: "சூரியன்",
    celestialBody: "Sun (Sol)",
    day: "Sunday (ஞாயிறு)",
    element: "Agni (Fire)",
    direction: "East (கிழக்கு)",
    geometricArchetype: "Circle with central Bindu / Octagonal solar radiance",
    traditionalAssociation: "King, vital soul (Atman), luminary origin of the planetary week",
    scriptInfluences: ["Pallava Grantha solar crown dedications", "Tamil-Brahmi circular bindu"],
    variants: [
      {
        id: "surya-a",
        name: "Variant A — Conservative Pallava",
        style: "conservative",
        styleLabel: "Conservative Pallava Ductus",
        svgPath: "M 500 240 C 640 240 750 350 750 490 C 750 630 640 740 500 740 C 360 740 250 630 250 490 C 250 350 360 240 500 240 Z M 500 440 C 470 440 450 460 450 490 C 450 520 470 540 500 540 C 530 540 550 520 550 490 C 550 460 530 440 500 440 Z M 480 160 L 520 160 L 520 230 L 480 230 Z M 500 750 L 500 830 M 170 490 L 240 490 M 760 490 L 830 490",
        strokeWidth: 48,
        puaCodepoint: "U+E000",
        construction: [
          { step: 1, label: "Core Bindu", description: "Invariable focal point located at grid origin", geometry: "Circle at (500, 490), radius 50" },
          { step: 2, label: "Solar Enclosure", description: "Perimeter boundary circle representing the solar orb", geometry: "Circle at (500, 490), radius 250" },
          { step: 3, label: "Cardinal Radiance", description: "Four cardinal ray accents with Pallava serif terminations", geometry: "Rays spanning to 160, 830 on Y and 170, 830 on X" }
        ],
        designRationale: "Direct synthesis of Pallava royal inscriptional crown motifs with the canonical astronomical solar disc.",
        opticalNotes: "Generous inner counter space ensures the central bindu remains distinct at 14pt text size.",
        status: "candidate"
      },
      {
        id: "surya-b",
        name: "Variant B — Geometric Synthesis",
        style: "geometric",
        styleLabel: "Geometric Yantra Synthesis",
        svgPath: "M 500 200 L 780 480 L 500 760 L 220 480 Z M 500 300 C 600 300 680 380 680 480 C 680 580 600 660 500 660 C 400 660 320 580 320 480 C 320 380 400 300 500 300 Z M 500 430 A 50 50 0 1 0 500 530 A 50 50 0 1 0 500 430 Z",
        strokeWidth: 44,
        puaCodepoint: "U+E000",
        construction: [
          { step: 1, label: "Rhombic Diamond Outer", description: "Angular dynamic boundary reflecting solar energy", geometry: "Rhombus spanning (500,200) to (780,480)" },
          { step: 2, label: "Inner Concentric Ring", description: "Smooth orbital channel", geometry: "Circle r=180 at center" },
          { step: 3, label: "Central Bindu", description: "Solid center point", geometry: "Center point r=50" }
        ],
        designRationale: "Synthesizes traditional Surya Mandala geometric grids with rigorous typographical contouring.",
        opticalNotes: "Diamond corners maintain visual weight against the horizontal line flow of text.",
        status: "candidate"
      },
      {
        id: "surya-c",
        name: "Variant C — Calligraphic Modern",
        style: "calligraphic",
        styleLabel: "Modern Calligraphic Flourish",
        svgPath: "M 320 680 C 260 620 240 520 260 440 C 290 320 400 220 520 210 C 660 200 760 280 770 400 C 780 540 670 660 540 680 C 420 700 340 640 330 560 C 320 480 390 410 470 420 C 530 430 570 470 560 520 C 550 570 500 600 460 590",
        strokeWidth: 54,
        puaCodepoint: "U+E000",
        construction: [
          { step: 1, label: "Continuous Spiral Ductus", description: "Unbroken spiral stroke starting from outer perimeter and coiling into the bindu", geometry: "Logarithmic cubic Bézier spiral" },
          { step: 2, label: "Weighted Terminal Arc", description: "Terminal base weighted to ground the letterform on the baseline", geometry: "Terminal sweep at Y=680" }
        ],
        designRationale: "Expresses solar dynamic rotation through a single continuous calligraphic ductus reminiscent of Vatteluttu flourishes.",
        opticalNotes: "High dynamic contrast between outer open sweep and inner focus.",
        status: "candidate"
      }
    ]
  },
  {
    id: "chandra",
    number: 2,
    name: "Chandra",
    nameSanskrit: "चन्द्र",
    nameTamil: "சந்திரன்",
    celestialBody: "Moon (Luna)",
    day: "Monday (திங்கள்)",
    element: "Jala (Water)",
    direction: "North-West (வடமேற்கு)",
    geometricArchetype: "Crescent Arc / Supportive Horizontal Pedestal",
    traditionalAssociation: "Mind (Manas), nocturnal rhythm, somatic fluidity",
    scriptInfluences: ["Pallava Grantha length-mark crescent curves", "Vatteluttu rounded continuous arcs"],
    variants: [
      {
        id: "chandra-a",
        name: "Variant A — Conservative Pallava",
        style: "conservative",
        styleLabel: "Conservative Pallava Crescent",
        svgPath: "M 340 250 C 540 250 680 380 680 540 C 680 660 570 740 440 740 C 320 740 240 660 240 540 C 240 460 280 390 340 350 C 400 310 490 300 560 330 C 520 400 480 470 420 520 C 370 560 320 560 270 530",
        strokeWidth: 50,
        puaCodepoint: "U+E001",
        construction: [
          { step: 1, label: "Outer Lunar Arc", description: "Sweeping crescent perimeter", geometry: "Cubic curve from (340,250) through (680,540) to baseline" },
          { step: 2, label: "Inner Reflective Counter", description: "Subtractive arc defining the crescent cusp", geometry: "Cubic arc with cusp at (560,330)" },
          { step: 3, label: "Pedestal Terminal", description: "Stabilizing serif on baseline Y=740", geometry: "Horizontal terminal flourish" }
        ],
        designRationale: "Anchored to Pallava vowel sign length-mark ductus, avoiding confusion with generic Western crescent ☽.",
        opticalNotes: "Cusp angles softened to prevent ink trap fill-in at 12pt.",
        status: "candidate"
      },
      {
        id: "chandra-b",
        name: "Variant B — Geometric Synthesis",
        style: "geometric",
        styleLabel: "Geometric Dual-Arc Synthesis",
        svgPath: "M 300 230 C 580 230 760 410 760 670 L 640 670 C 640 470 500 340 300 340 Z M 220 730 L 780 730",
        strokeWidth: 46,
        puaCodepoint: "U+E001",
        construction: [
          { step: 1, label: "Primary Crescent Profile", description: "Geometric circular arc subtraction", geometry: "Radii 440 and 330" },
          { step: 2, label: "Baseline Platform", description: "Direct horizontal foundation signifying water horizon", geometry: "Line from X=220 to X=780 at Y=730" }
        ],
        designRationale: "Clear geometric dual-arc mounted above a stable horizon bar, symbolizing reflective lunar emergence.",
        opticalNotes: "Distinct baseline bar provides firm typographic balance.",
        status: "candidate"
      },
      {
        id: "chandra-c",
        name: "Variant C — Calligraphic Modern",
        style: "calligraphic",
        styleLabel: "Calligraphic Flowing Arc",
        svgPath: "M 660 220 C 440 280 300 460 300 630 C 300 710 360 760 440 760 C 560 760 670 670 710 540 C 620 590 520 600 440 550 C 380 510 380 430 430 370 C 480 310 570 260 660 220 Z",
        strokeWidth: 48,
        puaCodepoint: "U+E001",
        construction: [
          { step: 1, label: "Descending Calligraphic Swell", description: "Variable stroke starting fine at top, swelling at lower loop", geometry: "Smooth Bézier envelope" }
        ],
        designRationale: "Flowing organic rhythm inspired by Vatteluttu ligature connectors and fluid water archetypes.",
        opticalNotes: "Asymmetrical optical weight prevents top-heaviness.",
        status: "candidate"
      }
    ]
  },
  {
    id: "mangala",
    number: 3,
    name: "Maṅgala",
    nameSanskrit: "मङ्गल",
    nameTamil: "செவ்வாய்",
    celestialBody: "Mars",
    day: "Tuesday (செவ்வாய்)",
    element: "Tejas (Fiery Energy / Iron)",
    direction: "South (தெற்கு)",
    geometricArchetype: "Acute Spear Apex (Vēl) / Upward Triangle",
    traditionalAssociation: "Courage, energy, commander (Senapati), iron, blood",
    scriptInfluences: ["Pallava consonant CA acute diagonals", "Tamil Vēl spear iconography"],
    variants: [
      {
        id: "mangala-a",
        name: "Variant A — Conservative Pallava",
        style: "conservative",
        styleLabel: "Pallava Spearhead (Vēl) Ductus",
        svgPath: "M 500 180 L 720 540 C 660 520 580 530 540 570 L 540 760 L 460 760 L 460 570 C 420 530 340 520 280 540 Z",
        strokeWidth: 48,
        puaCodepoint: "U+E002",
        construction: [
          { step: 1, label: "Spear Apex", description: "Sharp acute apex at top axis (500, 180)", geometry: "Triangular head with barb returns" },
          { step: 2, label: "Vertical Shaft", description: "Strong central grounding stem extending to baseline", geometry: "Vertical bar between X=460 and X=540" }
        ],
        designRationale: "Translates the iconic Tamil Vēl (spear) archetype through Pallava Grantha angular stroke terminals.",
        opticalNotes: "Inner shoulder curves prevent dark pooling at the junction of shaft and barb.",
        status: "candidate"
      },
      {
        id: "mangala-b",
        name: "Variant B — Geometric Synthesis",
        style: "geometric",
        styleLabel: "Equilateral Fiery Triangle",
        svgPath: "M 500 200 L 760 650 L 240 650 Z M 500 370 L 640 600 L 360 600 Z M 500 650 L 500 780 M 420 780 L 580 780",
        strokeWidth: 46,
        puaCodepoint: "U+E002",
        construction: [
          { step: 1, label: "Primary Agni Triangle", description: "Upward pointing triangle symbolizing fiery ascension", geometry: "Triangle vertices (500,200), (760,650), (240,650)" },
          { step: 2, label: "Grounded Foot", description: "Stabilizing base spur at baseline Y=780", geometry: "Spur and horizontal crossbar" }
        ],
        designRationale: "Direct adaptation of traditional Agni Yantra geometry paired with inscriptional grounding serifs.",
        opticalNotes: "Inner triangular counter provides crisp negative space.",
        status: "candidate"
      },
      {
        id: "mangala-c",
        name: "Variant C — Calligraphic Modern",
        style: "calligraphic",
        styleLabel: "Dynamic Diagonal Flourish",
        svgPath: "M 280 720 L 680 260 L 740 320 L 440 740 L 280 720 Z M 680 260 L 780 210 L 760 330 M 360 520 L 240 600 L 320 680",
        strokeWidth: 50,
        puaCodepoint: "U+E002",
        construction: [
          { step: 1, label: "Dynamic Diagonal Axis", description: "Ascending 45-degree shaft with terminal arrowhead", geometry: "Diagonal from bottom-left to top-right" }
        ],
        designRationale: "Dynamic directional motion celebrating martial vigor and astronomical ascendancy.",
        opticalNotes: "Strong angular rhythm differentiates it instantly from circular grahas.",
        status: "candidate"
      }
    ]
  },
  {
    id: "budha",
    number: 4,
    name: "Budha",
    nameSanskrit: "बुध",
    nameTamil: "புதன்",
    celestialBody: "Mercury",
    day: "Wednesday (புதன்)",
    element: "Prithvi (Earth / Intellect)",
    direction: "North-East (வடகிழக்கு)",
    geometricArchetype: "Double-Looped Wing / Curved Bow",
    traditionalAssociation: "Intellect (Buddhi), speech, mathematics, commerce, swift transit",
    scriptInfluences: ["Pallava BA and YA dual enclosed counters", "Vatteluttu bow curves"],
    variants: [
      {
        id: "budha-a",
        name: "Variant A — Conservative Pallava",
        style: "conservative",
        styleLabel: "Pallava Dual-Loop Ductus",
        svgPath: "M 500 240 C 600 240 680 310 680 400 C 680 480 610 540 530 560 C 640 590 710 660 710 740 L 290 740 C 290 660 360 590 470 560 C 390 540 320 480 320 400 C 320 310 400 240 500 240 Z M 500 320 C 450 320 400 350 400 400 C 400 450 450 480 500 480 C 550 480 600 450 600 400 C 600 350 550 320 500 320 Z",
        strokeWidth: 46,
        puaCodepoint: "U+E003",
        construction: [
          { step: 1, label: "Upper Intellectual Counter", description: "Circular loop reflecting the cognitive realm", geometry: "Centered at Y=400, radius 180" },
          { step: 2, label: "Lower Foundation Counter", description: "Broader terrestrial base loop", geometry: "Centered at Y=650, base span 420" }
        ],
        designRationale: "Direct adaptation of Pallava vertical dual-loop consonants, reflecting mercury's mercurial intellect.",
        opticalNotes: "Waist pinch positioned above optical center (Y=560) to avoid squat proportions.",
        status: "candidate"
      },
      {
        id: "budha-b",
        name: "Variant B — Geometric Synthesis",
        style: "geometric",
        styleLabel: "Winged Bow & Bindu",
        svgPath: "M 260 300 C 380 360 620 360 740 300 M 500 340 L 500 740 M 340 740 L 660 740 M 500 520 C 580 520 640 580 640 650 C 640 720 580 740 500 740 C 420 740 360 720 360 650 C 360 580 420 520 500 520 Z",
        strokeWidth: 44,
        puaCodepoint: "U+E003",
        construction: [
          { step: 1, label: "Winged Upper Crest", description: "Concave upward antenna arch", geometry: "Spans from (260,300) to (740,300)" },
          { step: 2, label: "Central Axis & Base", description: "Vertical spine with anchored loop", geometry: "Vertical spine X=500" }
        ],
        designRationale: "Iconographic bow arch evoking quick intellectual flight paired with grounded lower loop.",
        opticalNotes: "Top wings designed with positive upward thrust to aid recognition.",
        status: "candidate"
      },
      {
        id: "budha-c",
        name: "Variant C — Calligraphic Modern",
        style: "calligraphic",
        styleLabel: "Continuous Caduceus Flow",
        svgPath: "M 320 280 C 420 330 580 330 680 280 C 700 420 590 510 500 540 C 410 570 340 640 350 730 C 360 770 420 780 490 770 C 610 750 680 670 690 560",
        strokeWidth: 50,
        puaCodepoint: "U+E003",
        construction: [
          { step: 1, label: "Flowing S-Curve Caduceus", description: "Dynamic vertical S-ductus expressing rapid orbital movement", geometry: "Continuous cubic curve" }
        ],
        designRationale: "Contemporary calligraphic line embodying the fluid, communicative velocity of Mercury.",
        opticalNotes: "Open lower terminal ensures clarity without ink clumping.",
        status: "candidate"
      }
    ]
  },
  {
    id: "guru",
    number: 5,
    name: "Guru / Bṛhaspati",
    nameSanskrit: "बृहस्पति",
    nameTamil: "குரு / வியாழன்",
    celestialBody: "Jupiter",
    day: "Thursday (வியாழன்)",
    element: "Akasha (Ether / Wisdom)",
    direction: "North (வடக்கு)",
    geometricArchetype: "Monumental Pillar / Lotus Rectangular Enclosure",
    traditionalAssociation: "Preceptor, supreme benefic, Dharma, expansive wisdom, expansion",
    scriptInfluences: ["Pallava KA monumental central pillar", "Pallava royal aspirated serif flourishes"],
    variants: [
      {
        id: "guru-a",
        name: "Variant A — Conservative Pallava",
        style: "conservative",
        styleLabel: "Monumental Pallava Pillar",
        svgPath: "M 280 240 L 720 240 M 500 240 L 500 760 M 340 440 C 420 380 580 380 660 440 M 320 580 C 400 520 600 520 680 580 M 320 760 L 680 760",
        strokeWidth: 52,
        puaCodepoint: "U+E004",
        construction: [
          { step: 1, label: "Top Serif Bar", description: "Dominant horizontal bar establishing preeminent authority", geometry: "Width 440 at Y=240" },
          { step: 2, label: "Monumental Central Shaft", description: "Central vertical axis of wisdom", geometry: "Spine X=500 from 240 to 760" },
          { step: 3, label: "Tiered Wisdom Brackets", description: "Dual horizontal expansive curves", geometry: "Arcs at Y=440 and Y=580" }
        ],
        designRationale: "Draws directly upon the central pillar of Pallava monumental inscriptional KA, representing the Cosmic Pillar (Skambha).",
        opticalNotes: "Strong vertical hierarchy commands visual weight in astronomical tables.",
        status: "candidate"
      },
      {
        id: "guru-b",
        name: "Variant B — Geometric Synthesis",
        style: "geometric",
        styleLabel: "Sacred Quadrangle & Cross",
        svgPath: "M 320 240 L 680 240 L 680 680 L 320 680 Z M 500 180 L 500 740 M 240 460 L 760 460",
        strokeWidth: 46,
        puaCodepoint: "U+E004",
        construction: [
          { step: 1, label: "Rectangular Enclosure", description: "Traditional Guru mandala quadrangle", geometry: "Square/rectangle centered at (500,460)" },
          { step: 2, label: "Cosmic Cross Overhang", description: "Intersecting cardinal axes extending beyond perimeter", geometry: "Overhanging crossbars" }
        ],
        designRationale: "Translates the Brihaspati Yantra quadrangle with protective axial extensions.",
        opticalNotes: "Open interior creates excellent light-field balance.",
        status: "candidate"
      },
      {
        id: "guru-c",
        name: "Variant C — Calligraphic Modern",
        style: "calligraphic",
        styleLabel: "Graceful Ascending Sovereign",
        svgPath: "M 280 260 L 720 260 M 500 260 L 500 680 C 500 740 460 770 380 760 M 340 480 C 440 420 560 420 660 480 C 700 600 620 720 480 740",
        strokeWidth: 50,
        puaCodepoint: "U+E004",
        construction: [
          { step: 1, label: "Sovereign Crown", description: "Monumental top horizontal stroke", geometry: "Upper bar at Y=260" },
          { step: 2, label: "Sweeping Base Loop", description: "Asymmetric protective loop terminating on baseline", geometry: "Loop swinging from Y=480 down to 760" }
        ],
        designRationale: "Combines monumental strength with a fluid protective counter-curve.",
        opticalNotes: "Designed for effortless legibility alongside Western astrological signs without visual confusion.",
        status: "candidate"
      }
    ]
  },
  {
    id: "sukra",
    number: 6,
    name: "Śukra",
    nameSanskrit: "शुक्र",
    nameTamil: "சுக்கிரன் / வெள்ளி",
    celestialBody: "Venus",
    day: "Friday (வெள்ளி)",
    element: "Jala (Water / Vitality)",
    direction: "South-East (தென்கிழக்கு)",
    geometricArchetype: "Pentagonal Knot / Symmetrical Floral Loop",
    traditionalAssociation: "Beauty, harmony, poetry, reproductive vitality (Śukra), artistic refinement",
    scriptInfluences: ["Pallava loop intertwining ligatures", "Vatteluttu elegant symmetrical curves"],
    variants: [
      {
        id: "sukra-a",
        name: "Variant A — Conservative Pallava",
        style: "conservative",
        styleLabel: "Pallava Intertwined Knot",
        svgPath: "M 500 240 C 640 240 720 340 720 460 C 720 580 620 660 500 760 C 380 660 280 580 280 460 C 280 340 360 240 500 240 Z M 500 360 C 440 360 400 410 400 470 C 400 540 460 610 500 660 C 540 610 600 540 600 470 C 600 410 560 360 500 360 Z",
        strokeWidth: 48,
        puaCodepoint: "U+E005",
        construction: [
          { step: 1, label: "Tapering Heart/Lotus Contour", description: "Graceful ovate enclosure tapering toward baseline", geometry: "Symmetrical drop curve" },
          { step: 2, label: "Internal Harmonious Counter", description: "Nested seed loop embodying fertility", geometry: "Centered drop at Y=470" }
        ],
        designRationale: "Derives from Pallava ligature intersections, embodying beauty and balance without adopting the Western female symbol ♀.",
        opticalNotes: "Cusp at Y=760 provides a delicate, precise contact point on the baseline.",
        status: "candidate"
      },
      {
        id: "sukra-b",
        name: "Variant B — Geometric Synthesis",
        style: "geometric",
        styleLabel: "Pentagonal Star-Mandala",
        svgPath: "M 500 200 L 760 400 L 660 720 L 340 720 L 240 400 Z M 500 340 L 640 450 L 590 630 L 410 630 L 360 450 Z",
        strokeWidth: 44,
        puaCodepoint: "U+E005",
        construction: [
          { step: 1, label: "Pentagon Perimeter", description: "Five-pointed astronomical synodic cycle of Venus", geometry: "Regular pentagon centered at (500,480)" },
          { step: 2, label: "Concentric Pentagonal Window", description: "Internal negative space", geometry: "Scaled concentric counter" }
        ],
        designRationale: "Direct geometric homage to the 8-year, 5-synodic-cycle pentagram dance of Venus in celestial mechanics.",
        opticalNotes: "Five-sided geometry provides an unmistakable signature profile.",
        status: "candidate"
      },
      {
        id: "sukra-c",
        name: "Variant C — Calligraphic Modern",
        style: "calligraphic",
        styleLabel: "Flowing Sinuous Ligature",
        svgPath: "M 320 300 C 440 220 560 220 680 300 C 720 440 660 560 500 640 L 500 760 M 400 720 L 600 720 M 420 400 C 500 480 580 480 640 400",
        strokeWidth: 50,
        puaCodepoint: "U+E005",
        construction: [
          { step: 1, label: "Upper Harmonious Loop", description: "Broad welcoming crest", geometry: "Upper arc spanning 320 to 680" },
          { step: 2, label: "Stem & Crossbar", description: "Subtle anchoring descender", geometry: "Stem at X=500 with horizontal bar at Y=720" }
        ],
        designRationale: "Blends calligraphic flourish with classical astronomical elegance.",
        opticalNotes: "Open counters prevent muddy reproduction at low resolutions.",
        status: "candidate"
      }
    ]
  },
  {
    id: "sani",
    number: 7,
    name: "Śani",
    nameSanskrit: "शनि",
    nameTamil: "சனி",
    celestialBody: "Saturn",
    day: "Saturday (சனி)",
    element: "Vayu (Air / Endurance / Ash)",
    direction: "West (மேற்கு)",
    geometricArchetype: "Curved Bow / Ascetic Linga Contour / Horizontal Base Bar",
    traditionalAssociation: "Time (Kala), discipline, slow deliberation (Manda), endurance, asceticism",
    scriptInfluences: ["Pallava NA and SHA weighted base curves", "Vatteluttu grounded hook terminals"],
    variants: [
      {
        id: "sani-a",
        name: "Variant A — Conservative Pallava",
        style: "conservative",
        styleLabel: "Pallava Ascetic Ductus",
        svgPath: "M 260 280 L 740 280 M 340 280 L 340 640 C 340 720 420 760 500 760 C 600 760 680 700 680 600 L 680 460 C 680 380 620 340 540 340 C 480 340 440 380 440 440",
        strokeWidth: 52,
        puaCodepoint: "U+E006",
        construction: [
          { step: 1, label: "Weighted Top Bar", description: "Heavy deliberate horizontal bar of endurance", geometry: "Spans 260 to 740 at Y=280" },
          { step: 2, label: "Left Descending Pillar", description: "Disciplined vertical spine", geometry: "Stem at X=340" },
          { step: 3, label: "Grounded Ascetic Loop", description: "Heavy sweeping base curve rising into inner counter", geometry: "Deep basin to Y=760" }
        ],
        designRationale: "Reflects the solemn, deliberate weight of Saturn through Pallava Grantha character NA/SHA structure.",
        opticalNotes: "Generous basin depth prevents optical crowding with adjacent characters.",
        status: "candidate"
      },
      {
        id: "sani-b",
        name: "Variant B — Geometric Synthesis",
        style: "geometric",
        styleLabel: "Bow & Orbital Horizon",
        svgPath: "M 240 720 C 240 420 760 420 760 720 L 240 720 Z M 500 220 L 500 480 M 380 220 L 620 220",
        strokeWidth: 46,
        puaCodepoint: "U+E006",
        construction: [
          { step: 1, label: "Inverted Semicircular Bow", description: "Traditional Sani bow (Dhanus) archetype", geometry: "Arc from (240,720) through (500,420) to (760,720)" },
          { step: 2, label: "Ascending Crown Cross", description: "Vertical staff representing time measurement", geometry: "Cross at top center" }
        ],
        designRationale: "Geometric synthesis of the traditional Bow symbol of Saturn with an astronomical ring-horizon metaphor.",
        opticalNotes: "Solid horizontal base bar anchors the glyph firmly on text lines.",
        status: "candidate"
      },
      {
        id: "sani-c",
        name: "Variant C — Calligraphic Modern",
        style: "calligraphic",
        styleLabel: "Slow Measured Curve",
        svgPath: "M 320 260 L 680 260 M 420 260 L 420 620 C 420 730 520 760 620 720 C 700 680 720 580 700 500 C 660 560 600 600 520 580 C 470 560 450 500 460 440",
        strokeWidth: 50,
        puaCodepoint: "U+E006",
        construction: [
          { step: 1, label: "Measured Stroke Rhythm", description: "Deliberate deceleration of curve toward baseline", geometry: "Graduated cubic curve" }
        ],
        designRationale: "Contemporary calligraphic rendition emphasizing gravity, age, and philosophical restraint.",
        opticalNotes: "Thick stroke terminals evoke chiseled stone inscriptions.",
        status: "candidate"
      }
    ]
  },
  {
    id: "rahu",
    number: 8,
    name: "Rāhu",
    nameSanskrit: "राहु",
    nameTamil: "இராகு",
    celestialBody: "Ascending Lunar Node (Dragon's Head)",
    day: "Shadow Planet (சாயாகிரகம்)",
    element: "Tamas (Eclipse Force / Shadow)",
    direction: "South-West (தென்மேற்கு)",
    geometricArchetype: "Serpent Hood (Phaṇa) / Ascending Eclipse Arc",
    traditionalAssociation: "Eclipse node, celestial dragon head, ambition, occultation of light",
    scriptInfluences: ["Pallava serpent crest flourishes", "Tamil arch and hood ligature curves"],
    variants: [
      {
        id: "rahu-a",
        name: "Variant A — Conservative Pallava",
        style: "conservative",
        styleLabel: "Pallava Serpent Hood (Phaṇa)",
        svgPath: "M 260 740 C 260 520 340 320 500 240 C 660 320 740 520 740 740 M 360 740 C 360 560 420 400 500 340 C 580 400 640 560 640 740 M 500 240 L 500 180 M 440 180 L 560 180",
        strokeWidth: 48,
        puaCodepoint: "U+E007",
        construction: [
          { step: 1, label: "Ascending Hood Arc", description: "Convex ascending arch representing the upward eclipse node", geometry: "Arch from (260,740) to (740,740)" },
          { step: 2, label: "Internal Eclipse Shadow", description: "Concentric nested shadow arch", geometry: "Inner arch Y=340 to Y=740" },
          { step: 3, label: "Crown Apex", description: "Serpent crest point at top", geometry: "Spur at (500,180)" }
        ],
        designRationale: "Transposes the serpent hood iconography of Pallava sculptural reliefs into a pure typographic glyph.",
        opticalNotes: "Open base prevents the arch from appearing heavy or congested.",
        status: "candidate"
      },
      {
        id: "rahu-b",
        name: "Variant B — Geometric Synthesis",
        style: "geometric",
        styleLabel: "Ascending Node Crescent Ring",
        svgPath: "M 240 680 C 240 380 500 220 760 220 C 640 340 600 520 660 680 M 420 680 C 380 520 440 380 560 300 C 440 380 380 520 420 680",
        strokeWidth: 46,
        puaCodepoint: "U+E007",
        construction: [
          { step: 1, label: "Ascending Lunar Node Intersect", description: "Astronomical orbital intersection where Moon climbs above ecliptic", geometry: "Intersecting orbital ellipses" }
        ],
        designRationale: "Faithful to astronomical celestial mechanics: the intersection of lunar orbit and ecliptic.",
        opticalNotes: "Crescent tips point upward, establishing the ascending direction.",
        status: "candidate"
      },
      {
        id: "rahu-c",
        name: "Variant C — Calligraphic Modern",
        style: "calligraphic",
        styleLabel: "Swirling Eclipse Crest",
        svgPath: "M 280 720 C 320 460 440 280 580 240 C 720 200 760 320 700 440 C 640 560 480 640 360 600 C 300 580 280 500 320 440 C 360 380 440 380 480 440",
        strokeWidth: 50,
        puaCodepoint: "U+E007",
        construction: [
          { step: 1, label: "Dynamic Vortex Loop", description: "Spiral movement evoking the shadow vortex of eclipse", geometry: "Coiling cubic curve" }
        ],
        designRationale: "Evocative modern stroke capturing the mysterious, eclipse-inducing character of Rahu.",
        opticalNotes: "Spiral loops tuned to avoid tight radii.",
        status: "candidate"
      }
    ]
  },
  {
    id: "ketu",
    number: 9,
    name: "Ketu",
    nameSanskrit: "केतु",
    nameTamil: "கேது",
    celestialBody: "Descending Lunar Node (Dragon's Tail / Comet)",
    day: "Shadow Planet (சாயாகிரகம்)",
    element: "Moksha (Liberation / Subtlety)",
    direction: "Center-South (மையம்/தெற்கு)",
    geometricArchetype: "Inverted Flag (Dhvaja) / Descending Comet Tail",
    traditionalAssociation: "Descending node, spiritual liberation, comets, transcendence of form",
    scriptInfluences: ["Pallava descender terminal flourishes", "Vatteluttu downward tapered loops"],
    variants: [
      {
        id: "ketu-a",
        name: "Variant A — Conservative Pallava",
        style: "conservative",
        styleLabel: "Pallava Flag (Dhvaja) Ductus",
        svgPath: "M 280 260 L 720 260 L 720 500 L 500 620 L 500 780 M 280 260 L 280 500 L 500 620 M 420 780 L 580 780",
        strokeWidth: 48,
        puaCodepoint: "U+E008",
        construction: [
          { step: 1, label: "Top Flag Header", description: "Horizontal pennant bar", geometry: "Spans 280 to 720 at Y=260" },
          { step: 2, label: "Tapering Pennant Body", description: "Angular flag tapering downward to central spine", geometry: "Symmetrical chevron converging at (500,620)" },
          { step: 3, label: "Descending Root Staff", description: "Grounding descender stroke", geometry: "Vertical spine down to Y=780" }
        ],
        designRationale: "Translates the classical Ketu emblem of the Dhvaja (pennant/flag) through Pallava inscriptional angles.",
        opticalNotes: "Downward taper balances the upward flare of Rahu.",
        status: "candidate"
      },
      {
        id: "ketu-b",
        name: "Variant B — Geometric Synthesis",
        style: "geometric",
        styleLabel: "Cometary Tail Triangle",
        svgPath: "M 260 260 L 740 260 L 500 720 Z M 380 340 L 620 340 L 500 600 Z M 500 720 L 500 820 M 440 820 L 560 820",
        strokeWidth: 46,
        puaCodepoint: "U+E008",
        construction: [
          { step: 1, label: "Inverted Agni Triangle", description: "Downward descending comet stream", geometry: "Inverted triangle pointing down to Y=720" },
          { step: 2, label: "Spiritual Anchor Base", description: "Small terminal crossbar at baseline", geometry: "Foot at Y=820" }
        ],
        designRationale: "Geometric inversion of the fiery triangle of Mangala, representing dissolution of material ego.",
        opticalNotes: "Sharp lower vertex visually counterpoints Rahu's rounded hood.",
        status: "candidate"
      },
      {
        id: "ketu-c",
        name: "Variant C — Calligraphic Modern",
        style: "calligraphic",
        styleLabel: "Descending Cometary Trail",
        svgPath: "M 680 240 C 580 360 480 500 480 660 C 480 740 520 780 580 760 C 660 740 700 620 660 520 C 620 440 520 420 440 480 C 360 540 320 660 340 760",
        strokeWidth: 50,
        puaCodepoint: "U+E008",
        construction: [
          { step: 1, label: "Sweeping Cometary Plume", description: "Diagonal cascade resolving in a reflective lower loop", geometry: "Cascading cubic path" }
        ],
        designRationale: "Dynamic calligraphic rendering of a cometary tail sweeping across the celestial sphere.",
        opticalNotes: "Open counter-spaces ensure clean rendering across dark and light surfaces.",
        status: "candidate"
      }
    ]
  }
];

export function getGrahaById(id: string): GrahaRecord | undefined {
  return GRAHAS.find((g) => g.id.toLowerCase() === id.toLowerCase());
}
