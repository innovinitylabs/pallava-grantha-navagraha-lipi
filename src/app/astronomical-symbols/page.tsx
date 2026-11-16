import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';

export default function AstronomicalSymbolsPage() {
  const repertoireCategories = [
    {
      name: 'Nava Graha (Nine Planetary Bodies)',
      tamil: 'நவ கிரகங்கள்',
      scope: '9 Characters',
      recommendation: 'Standalone Characters',
      rationale: 'Primary semantic entities in Indian astronomy, distinct in both geometry and usage from Western astrological signs.',
      status: 'Initial Phase in Progress',
    },
    {
      name: 'Rāśi (Zodiacal Signs)',
      tamil: 'பன்னிரு ராசிகள்',
      scope: '12 Signs (Meṣa to Mīna)',
      recommendation: 'Under Investigation',
      rationale: 'Western zodiac symbols (♈ U+2648 to ♓ U+2653) exist in Unicode. Evaluating whether Indian epigraphical treatises utilize distinct symbols or textual abbreviations.',
      status: 'Research Phase',
    },
    {
      name: 'Nakṣatra (Lunar Mansions)',
      tamil: 'இருபத்தேழு நட்சத்திரங்கள்',
      scope: '27 Asterisms (Aśvinī to Revatī)',
      recommendation: 'Textual Abbreviation / Ligature',
      rationale: 'Traditional almanacs typically use standardized two-letter initial abbreviations rather than atomic Unicode symbols.',
      status: 'Architectural Analysis',
    },
    {
      name: 'Tithi & Karaṇa (Lunar Days & Halves)',
      tamil: 'திதி மற்றும் கரணம்',
      scope: '15 Tithis (Śukla/Kṛṣṇa Pakṣa)',
      recommendation: 'Combination of Numbers & Phase Marks',
      rationale: 'Best encoded as base numerals combined with pakṣa markers rather than 30 separate atomic codepoints.',
      status: 'Architectural Analysis',
    },
    {
      name: 'Planetary Dignities (Ucca / Nīca / Vakrī)',
      tamil: 'உச்சம், நீசம், வக்ரம்',
      scope: 'Exaltation, Debilitation, Retrograde',
      recommendation: 'Superscript Combining Marks or Annotations',
      rationale: 'Modifiers applied to planetary symbols to denote retrograde motion (வ / Vakrī), combustion (அஸ்தமனம்), or exaltation.',
      status: 'Proposal Staging',
    },
    {
      name: 'Aspects & Conjunctions (Dṛṣṭi / Yuti)',
      tamil: 'பார்வை மற்றும் சேர்க்கை',
      scope: 'Aspect notation (7th, 4th, 8th, etc.)',
      recommendation: 'Mathematical / Relational Symbols',
      rationale: 'Investigating overlap with existing Unicode mathematical and astronomical relational operators.',
      status: 'Research Phase',
    },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Indian Astronomical Symbol Repertoire"
        titleTamil="பாரத வானியல் குறியீட்டுத் தொகுப்பு"
        subtitle="Architectural classification and encoding recommendations for pan-Indian astronomical concepts"
        description="A foundational tenet of Nava Graha Lipi is that not every concept requires an atomic Unicode codepoint. We systematically analyze whether each astronomical concept should be an atomic character, a combination of existing characters, a textual abbreviation, or a graphical rendering convention outside character encoding."
      />

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repertoireCategories.map((cat, idx) => (
            <Card key={idx} className="p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-serif text-[var(--color-accent-maroon)] font-bold">
                    {cat.tamil}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] border border-[var(--color-border)]">
                    {cat.scope}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[var(--color-text-primary)] font-serif">
                  {cat.name}
                </h3>

                <div className="p-2.5 rounded bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-xs">
                  <span className="text-[var(--color-text-muted)] block text-[10px] uppercase font-semibold">Recommendation:</span>
                  <strong className="text-[var(--color-accent-maroon)]">{cat.recommendation}</strong>
                </div>

                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {cat.rationale}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--color-border)] text-[11px] text-[var(--color-text-muted)]">
                Status: <span className="text-[var(--color-text-primary)] font-medium">{cat.status}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Unicode Overlap Precaution */}
      <Card className="p-6 space-y-3 bg-[var(--color-surface-inset)]">
        <h4 className="text-sm font-bold text-[var(--color-text-primary)] font-serif">
          Critical Unicode Standardisation Requirement: Non-Duplication
        </h4>
        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
          The Unicode Consortium strictly rejects proposals that duplicate existing encoded characters. Western astronomical symbols (☉ U+2609 SUN, ☽ U+263D FIRST QUARTER MOON, ♂ U+2642 MARS, ♃ U+2643 JUPITER, etc.) are already encoded in the Miscellaneous Symbols block. Our proposal documentation must demonstrate that Indian astronomical notation constitutes an independent, culturally distinct, and historically attested symbol system with separate typographic semantics, bidirectional rules, and rendering behaviors.
        </p>
      </Card>
    </div>
  );
}
