import { DisplayTitle } from "@/components/site/DisplayTitle";
import { FadeIn } from "@/components/site/FadeIn";

export default function AstronomicalSymbolsPage() {
  const repertoireCategories = [
    {
      title: "1. The Nine Navagraha",
      tamil: "நவ கிரகங்கள்",
      entities: "9 Primary Celestial Bodies (Sūrya to Ketu)",
      recommendation: "Atomic Standalone Characters",
      rationale:
        "Primary semantic primitives in pan-Indian astronomy, calendrics, and Jyotiṣa. Distinct in structural geometry, ritual orientation, and usage from Western astrological signs.",
      status: "Initial Repertoire Active (Nava Graha Lipi)",
      priority: "Phase 1 Core",
    },
    {
      title: "2. The Twelve Rāśi",
      tamil: "பன்னிரு ராசிகள்",
      scope: "12 Zodiacal Divisions (Meṣa to Mīna)",
      recommendation: "Under Investigation — Textual / Distinct Sigil",
      rationale:
        "While Western zodiac signs (♈ U+2648 to ♓ U+2653) are encoded, traditional Tamil and Sanskrit treatises frequently employ single-grapheme initials (மே, ரி, மி...) or distinct mandala glyphs. We are actively investigating inscriptional evidence before proposing separate encoding.",
      status: "Research Phase",
      priority: "Phase 2 Evaluation",
    },
    {
      title: "3. The 27 Nakṣatra",
      tamil: "இருபத்தேழு நட்சத்திரங்கள்",
      scope: "27 Lunar Mansions (Aśvinī to Revatī)",
      recommendation: "Standardized Two-Letter Ligatures",
      rationale:
        "Epigraphical panchangams historically represent Nakshatras through standardized two-letter abbreviations rather than 27 arbitrary atomic symbols. Encoding separate atomic characters would inflate the Unicode repertoire unnecessarily.",
      status: "Linguistic Specification",
      priority: "Ligature Architecture",
    },
    {
      title: "4. Tithi & Pakṣa Markers",
      tamil: "திதி மற்றும் பட்சக் குறிகள்",
      scope: "15 Tithis × 2 Lunar Fortnights (Śukla / Kṛṣṇa)",
      recommendation: "Base Numerals + Phase Combining Marks",
      rationale:
        "Modeled as standard base numerals (1–15) combined with diacritical waxing (Śukla ☽) and waning (Kṛṣṇa ☾) markers, rather than 30 separate atomic codepoints.",
      status: "Decomposition Proposed",
      priority: "Phase 2 Staging",
    },
    {
      title: "5. Planetary Dignities (Ucca, Nīca, Vakrī)",
      tamil: "உச்சம், நீசம், வக்ரம்",
      scope: "Exaltation, Debilitation, Retrograde Motion, Combustion",
      recommendation: "Superscript Combining Annotations",
      rationale:
        "Modifiers applied dynamically above or adjacent to planetary glyphs in astrological charts to signify retrograde motion (வ / Vakrī), combustion (அ / Asta), or exaltation.",
      status: "OpenType GPOS Staging",
      priority: "Font Feature Implementation",
    },
    {
      title: "6. Aspects & Conjunctions (Dṛṣṭi, Yuti)",
      tamil: "பார்வை மற்றும் சேர்க்கைக் குறியீடுகள்",
      scope: "Planetary Aspects (7th, 4th, 8th) & Eclipses",
      recommendation: "Relational Operators / Existing Mathematical Symbols",
      rationale:
        "Analyzing overlap with existing Unicode mathematical and relational operators (☌ U+260C Conjunction, ☍ U+260D Opposition). Where existing operators adequately capture the mathematical relation, reuse is recommended.",
      status: "Comparative Audit",
      priority: "Overlap Mitigation",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 space-y-16">
      {/* Header */}
      <FadeIn>
        <div className="space-y-4 max-w-3xl">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[var(--cinnabar)] font-semibold">
            Indian Astronomical Notation Architecture
          </p>
          <h1 className="font-display text-4xl sm:text-6xl tracking-tight text-[var(--ink)]">
            <DisplayTitle>Astronomical Symbol Repertoire</DisplayTitle>
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            A principled, multi-category taxonomy for Indian astronomical notation. We distinguish between concepts requiring atomic character encoding, those best served by composite mark sequences, and those that represent typography or layout outside Unicode scope.
          </p>
        </div>
      </FadeIn>

      {/* Repertoire Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {repertoireCategories.map((cat, idx) => (
          <FadeIn key={cat.title} delay={0.06 * idx}>
            <div className="archive-mount rounded-2xl p-6 sm:p-8 space-y-5 flex flex-col justify-between h-full">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                  <span className="font-anek-tamil text-sm font-semibold text-[var(--cinnabar)]">
                    {cat.tamil}
                  </span>
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--muted)]">
                    {cat.priority}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-semibold text-[var(--ink)]">
                  {cat.title}
                </h3>

                <div className="rounded-lg border border-[var(--border)] bg-[var(--mount)] p-3 text-xs space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--muted)] block">
                    Encoding Recommendation
                  </span>
                  <span className="font-semibold text-[var(--cinnabar)]">
                    {cat.recommendation}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  {cat.rationale}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono text-[var(--muted)]">
                <span>Status:</span>
                <span className="text-[var(--ink)] font-medium">{cat.status}</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Unicode Methodology Callout */}
      <FadeIn delay={0.4}>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-8 max-w-4xl mx-auto space-y-4">
          <span className="text-[0.65rem] uppercase tracking-[0.24em] font-mono text-[var(--cinnabar)] font-semibold">
            Standardisation Guideline
          </span>
          <h4 className="font-display text-2xl font-semibold text-[var(--ink)]">
            The Unicode Principle of Non-Proliferation
          </h4>
          <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
            The Unicode Consortium operates under a strict policy against character proliferation. A new character proposal must demonstrate that existing codepoints cannot perform the semantic function. For Nava Graha Lipi, atomic encoding is justified exclusively for the primary Grahas due to distinct calligraphic morphology, traditional Indian directionality, and panchangam formatting rules. Secondary concepts are routed through combinatory and ligated typography.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
