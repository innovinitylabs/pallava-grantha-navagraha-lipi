import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';

export default function SanskritTextLabPage() {
  const granthaFeatures = [
    {
      title: 'Unicode Grantha Block Support',
      range: 'U+11300 – U+1137F',
      description: 'Native rendering and input support for the Grantha script as standardized in Unicode 7.0 and subsequent additions.',
    },
    {
      title: 'Complex Conjunct Shaping',
      range: 'GSUB / GPOS Tables',
      description: 'Support for vertical conjunct stacking, subjoined consonants (Virama + Consonant), and ligature substitution for traditional Sanskrit Vedic recitation.',
    },
    {
      title: 'Tamil-Grantha Diacritics',
      range: 'Vowel signs & Length Marks',
      description: 'Vedic accents (Svarita, Udatta, Anudatta) and traditional Dravidian vocalic distinctions historically preserved in Grantha palm-leaf manuscripts.',
    },
    {
      title: 'Palaeographic Segregation',
      range: 'Pallava vs. Later Grantha',
      description: 'Ensuring that Sanskrit texts rendered in historical Pallava Grantha follow epigraphic conventions (4th–8th c.), without forcing modern Grantha typographic constraints.',
    },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Sanskrit & Grantha Text Laboratory"
        titleTamil="சமஸ்கிருத மற்றும் கிரந்த எழுத்துக் கூடம்"
        subtitle="Epigraphical and modern Unicode Grantha support for Sanskrit astronomical and Vedic treatises"
        description="In the Tamil region, Sanskrit inscriptions and astronomical manuscripts were historically recorded in Pallava Grantha and its successor Grantha script. This subsystem provides linguistic and typographic tooling to accurately transcribe, shape, and typeset Sanskrit passages."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {granthaFeatures.map((feat, idx) => (
          <Card key={idx} className="p-6 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[var(--color-text-primary)] font-serif">
                {feat.title}
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--color-bg-secondary)] text-[var(--color-accent-maroon)] border border-[var(--color-border)]">
                {feat.range}
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {feat.description}
            </p>
          </Card>
        ))}
      </div>

      {/* Epigraphic Sample Area */}
      <Card className="p-6 space-y-4">
        <h3 className="text-base font-bold text-[var(--color-text-primary)] font-serif">
          Navagraha Stotra & Historical Sanskrit Epigraphs
        </h3>
        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
          The project supports bidirectional transliteration between IAST (International Alphabet of Sanskrit Transliteration), ISO 15919, Tamil script, and Unicode Grantha to enable comparative philological research across South Indian astronomical treatises like the <em>Sūryasiddhānta</em>, <em>Āryabhaṭīya</em>, and epigraphic prasastis.
        </p>
        <div className="p-4 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] font-mono text-xs text-[var(--color-text-primary)]">
          // Sample Navagraha Sanskrit invocation for Grantha shaping analysis:
          <br />
          <span className="text-[var(--color-accent-maroon)]">नमः सूर्याय चन्द्राय मङ्गलाय बुधाय च ।</span>
          <br />
          <span className="text-[var(--color-accent-bronze)]">गुरुशुक्रशनिभ्यश्च राहवे केतवे नमः ॥</span>
        </div>
      </Card>
    </div>
  );
}
