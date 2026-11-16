import { getAllScripts, getCharacterStats } from '@/lib/db';
import { PageHeader } from '@/components/ui/PageHeader';
import { ScriptCard } from '@/components/atlas/ScriptCard';
import { Card } from '@/components/ui/Card';

export default function ScriptAtlasPage() {
  const scripts = getAllScripts();
  const stats = getCharacterStats();

  const countMap: Record<string, number> = {};
  stats.forEach((s) => {
    countMap[s.script_id] = s.total;
  });

  return (
    <div className="space-y-8">
      <PageHeader
        title="Historical Script Atlas"
        titleTamil="வரலாற்று லிபி வரைபடம்"
        subtitle="A searchable, comparative epigraphic atlas for Pallava, Grantha, Vatteluttu, and Tamil-Brahmi"
        description="The Script Atlas documents attested characters, phonetic values, and inscriptional provenance from primary epigraphic sources. Pallava Grantha serves as our primary visual foundation for astronomical symbol design, while Vatteluttu, Grantha, and Tamil-Brahmi provide essential comparative historical lineage."
      />

      {/* Script Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scripts.map((script) => (
          <ScriptCard
            key={script.id}
            script={script}
            characterCount={countMap[script.id] || 0}
          />
        ))}
      </div>

      {/* Chronological Script Timeline */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-[var(--color-text-primary)] font-serif">
          Historical Script Evolution in the Tamil Region
        </h3>
        
        <Card className="p-6 overflow-x-auto">
          <div className="min-w-[650px] space-y-6">
            <div className="relative border-l-2 border-[var(--color-accent-maroon)] ml-4 pl-6 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[var(--color-accent-maroon)] border-2 border-white dark:border-black" />
                <div className="flex items-baseline justify-between">
                  <h4 className="text-sm font-bold text-[var(--color-text-primary)]">Tamil-Brahmi (தமிழி)</h4>
                  <span className="text-xs font-mono text-[var(--color-accent-bronze)]">3rd c. BCE – 3rd c. CE</span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                  Earliest deciphered writing in Tamil Nadu (Mangulam, Sittannavasal, Pugalur, Kodumanal). Introduces distinctive puḷḷi marker for pure consonants.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[var(--color-accent-maroon)] border-2 border-white dark:border-black" />
                <div className="flex items-baseline justify-between">
                  <h4 className="text-sm font-bold text-[var(--color-text-primary)]">Pallava Script / Pallava Grantha (பல்லவ எழுத்து)</h4>
                  <span className="text-xs font-mono text-[var(--color-accent-bronze)]">4th c. CE – 9th c. CE</span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                  Royal script of Kanchipuram Pallavas (Mahendravarman, Narasimhavarman I). Characterised by elegant flourishes, ornamental loops, and serifed verticals. Direct progenitor of Southeast Asian scripts (Khmer, Mon, Old Javanese/Kawi).
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-amber-700 border-2 border-white dark:border-black" />
                <div className="flex items-baseline justify-between">
                  <h4 className="text-sm font-bold text-[var(--color-text-primary)]">Vatteluttu (வட்டெழுத்து)</h4>
                  <span className="text-xs font-mono text-[var(--color-accent-bronze)]">5th c. CE – 13th c. CE</span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                  Continuous curved and rounded script used throughout Pandya and Chera territories. Emphasises flowing continuous strokes with minimal angular serifs.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-blue-700 border-2 border-white dark:border-black" />
                <div className="flex items-baseline justify-between">
                  <h4 className="text-sm font-bold text-[var(--color-text-primary)]">Grantha (Middle & Modern) (கிரந்தம்)</h4>
                  <span className="text-xs font-mono text-[var(--color-accent-bronze)]">6th c. CE – Present</span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                  Gradual evolution of Pallava into mature Chola-period and modern Grantha for Sanskrit liturgical texts. Standardised in modern Unicode Block U+11300–U+1137F.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Script Comparative Method */}
      <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-card)] p-6 space-y-4">
        <h3 className="text-lg font-bold text-[var(--color-text-primary)] font-serif">
          Methodological Rule: Non-Conflation of Pallava and Grantha
        </h3>
        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
          A fundamental requirement of this project is to preserve the palaeographic distinction between Pallava and later Grantha. 
          While Grantha descends from Pallava, 4th–8th century Pallava letterforms possess unique ductus, terminal geometry, and stroke 
          ratios that differ significantly from 14th-century or modern printed Grantha. Pallava is treated as an independent historical script 
          (as proposed by Pandey 2018 in Unicode L2/18-083), not a mere font style of Grantha.
        </p>
      </section>
    </div>
  );
}
