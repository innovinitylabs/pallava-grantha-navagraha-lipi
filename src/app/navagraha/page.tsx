import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

export default function NavaGrahaPage() {
  const grahaRepertoire = [
    {
      id: 'surya',
      name: 'Sūrya',
      sanskrit: 'सूर्य',
      tamil: 'சூரியன்',
      body: 'Sun (Sol)',
      day: 'Sunday (ஞாயிற்றுக்கிழமை)',
      element: 'Agni (Fire)',
      direction: 'East (கிழக்கு)',
      rationale: 'Primary luminary and center of the graha mandala. Design foundation incorporates radial crown motifs derived from Pallava solar dedications (e.g., Mahabalipuram Atiranachanda cave) synthesized with circular central focal loops.',
      status: 'Design Phase (Variant 1–3 in Progress)',
      geometricReference: 'Circle with central Bindu / Square enclosure',
    },
    {
      id: 'chandra',
      name: 'Chandra',
      sanskrit: 'चन्द्र',
      tamil: 'சந்திரன்',
      body: 'Moon (Luna)',
      day: 'Monday (திங்கட்கிழமை)',
      element: 'Jala (Water)',
      direction: 'North-West (வடமேற்கு)',
      rationale: 'Reflective lunar luminary. The glyph stroke incorporates the crescent arc common in Pallava vowel sign length-marks and crown ornaments of Pallava royal iconography, balanced with a supportive base stroke.',
      status: 'Design Phase (Variant 1–3 in Progress)',
      geometricReference: 'Crescent / Diamond',
    },
    {
      id: 'mangala',
      name: 'Maṅgala / Angāraka',
      sanskrit: 'मङ्गल / अङ्गारक',
      tamil: 'செவ்வாய்',
      body: 'Mars',
      day: 'Tuesday (செவ்வாய்க்கிழமை)',
      element: 'Tejas (Fiery Energy)',
      direction: 'South (தெற்கு)',
      rationale: 'Associated with spear (Vēl / Śakti) iconography in Tamil tradition. Visual motif adopts dynamic diagonal strokes reflecting Pallava consonant CA and RA structures with acute terminal angles.',
      status: 'Design Phase (Variant 1–3 in Progress)',
      geometricReference: 'Triangle / Arrow apex',
    },
    {
      id: 'budha',
      name: 'Budha',
      sanskrit: 'बुध',
      tamil: 'புதன்',
      body: 'Mercury',
      day: 'Wednesday (புதன்கிழமை)',
      element: 'Prithvi (Earth / Intellect)',
      direction: 'North-East (வடகிழக்கு)',
      rationale: 'Planet of intellect, speech, and commerce. Design draws upon the elegant double-looped structure of Pallava BA and YA, emphasizing harmonious curvature and enclosed counter-spaces.',
      status: 'Design Phase (Variant 1–3 in Progress)',
      geometricReference: 'Arrow / Curved bow',
    },
    {
      id: 'guru',
      name: 'Guru / Bṛhaspati',
      sanskrit: 'गुरु / बृहस्पति',
      tamil: 'குரு / வியாழன்',
      body: 'Jupiter',
      day: 'Thursday (வியாழக்கிழமை)',
      element: 'Akasha (Ether / Wisdom)',
      direction: 'North (வடக்கு)',
      rationale: 'Preceptor and supreme benefic. The glyph reflects majestic vertical grandeur, drawing from the central axis of Pallava KA and aspirated letters with pronounced upper serifs.',
      status: 'Design Phase (Variant 1–3 in Progress)',
      geometricReference: 'Rectangle / Lotus',
    },
    {
      id: 'sukra',
      name: 'Śukra',
      sanskrit: 'शुक्र',
      tamil: 'சுக்கிரன் / வெள்ளி',
      body: 'Venus',
      day: 'Friday (வெள்ளிக்கிழமை)',
      element: 'Jala (Water / Vitality)',
      direction: 'East / South-East (தென்கிழக்கு)',
      rationale: 'Planet of beauty, harmony, and poetic arts. Stroke construction utilizes flowing asymmetrical loops evocative of Pallava and Vatteluttu ligature connectors.',
      status: 'Design Phase (Variant 1–3 in Progress)',
      geometricReference: 'Pentagon / Symmetrical knot',
    },
    {
      id: 'sani',
      name: 'Śani',
      sanskrit: 'शनि',
      tamil: 'சனி',
      body: 'Saturn',
      day: 'Saturday (சனிக்கிழமை)',
      element: 'Vayu (Air / Endurance)',
      direction: 'West (மேற்கு)',
      rationale: 'Slow-moving ascetic planet of discipline and time. Stroke construction features deliberate, weighted base curves reflecting Pallava NA and SHA terminals.',
      status: 'Design Phase (Variant 1–3 in Progress)',
      geometricReference: 'Bow / Linga form',
    },
    {
      id: 'rahu',
      name: 'Rāhu',
      sanskrit: 'राहु',
      tamil: 'இராகு',
      body: 'Ascending Lunar Node (Dragon\'s Head)',
      day: 'Shadow Planet (சாயாகிரகம்)',
      element: 'Tamas (Eclipse Force)',
      direction: 'South-West (தென்மேற்கு)',
      rationale: 'North ascending node of the moon causing solar/lunar eclipses. Visual design invokes an open serpent crest (phaṇa) motif synthesized with Pallava upper vowel curves.',
      status: 'Design Phase (Variant 1–3 in Progress)',
      geometricReference: 'Serpent hood / Half-ellipse',
    },
    {
      id: 'ketu',
      name: 'Ketu',
      sanskrit: 'केतु',
      tamil: 'கேது',
      body: 'Descending Lunar Node (Dragon\'s Tail)',
      day: 'Shadow Planet (சாயாகிரகம்)',
      element: 'Moksha (Liberation)',
      direction: 'Center-South (மையம்/தெற்கு)',
      rationale: 'South descending node of the moon associated with cometary tails and liberation. Visual design employs a downward-tapering flag (dhvaja) terminal echoing Pallava descenders.',
      status: 'Design Phase (Variant 1–3 in Progress)',
      geometricReference: 'Flag / Downward triangle',
    },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="The Nava Graha Repertoire"
        titleTamil="நவ கிரகங்கள் குறியீட்டுத் தொகுப்பு"
        subtitle="Epigraphically inspired astronomical symbol specifications for the nine celestial bodies"
        description="Each celestial body in the Indian astronomical tradition is defined here with its cultural associations, geometric archetypes, and the specific Pallava Grantha calligraphic rationale governing its forthcoming glyph design."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {grahaRepertoire.map((graha, idx) => (
          <Card key={graha.id} className="p-6 flex flex-col justify-between hover:border-[var(--color-accent-maroon)] transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] border border-[var(--color-border)]">
                  GRAHA #{idx + 1}
                </span>
                <span className="text-xs font-serif text-[var(--color-accent-maroon)] font-bold">
                  {graha.tamil}
                </span>
              </div>

              {/* Glyph Placeholder & Name */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-[var(--color-bg-secondary)] border-2 border-dashed border-[var(--color-accent-maroon)]/40 flex items-center justify-center font-serif text-2xl font-bold text-[var(--color-accent-maroon)]">
                  {graha.name[0]}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] font-serif">
                    {graha.name}
                  </h3>
                  <div className="text-xs text-[var(--color-text-muted)]">
                    {graha.sanskrit} • {graha.body}
                  </div>
                  <div className="text-[11px] text-[var(--color-accent-bronze)] mt-0.5">
                    {graha.day}
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-[var(--color-text-secondary)]">
                <div>
                  <strong className="text-[var(--color-text-primary)]">Design Rationale: </strong>
                  <span className="leading-relaxed">{graha.rationale}</span>
                </div>
                <div className="pt-2 border-t border-[var(--color-border)] text-[11px] text-[var(--color-text-muted)]">
                  Traditional Geometric Archetype: <span className="text-[var(--color-text-secondary)] font-medium">{graha.geometricReference}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[var(--color-border)] flex items-center justify-between text-[11px]">
              <span className="text-amber-800 dark:text-amber-300 font-medium">
                {graha.status}
              </span>
              <Link
                href="/glyph-studio"
                className="text-[var(--color-accent-maroon)] font-semibold hover:underline"
              >
                Studio →
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
