import Link from 'next/link';
import { getAllScripts, getAllSources, getCharacterStats } from '@/lib/db';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function OverviewPage() {
  let scriptsCount = 0;
  let charactersCount = 0;
  let sourcesCount = 0;
  let stats: any[] = [];

  try {
    const scripts = getAllScripts();
    scriptsCount = scripts.length;
    const sources = getAllSources();
    sourcesCount = sources.length;
    stats = getCharacterStats();
    charactersCount = stats.reduce((acc, curr) => acc + (curr.total || 0), 0);
  } catch (err) {
    console.error('Error fetching stats from database:', err);
  }

  const grahas = [
    { id: 'surya', name: 'Sūrya', sanskrit: 'सूर्य', tamil: 'சூரியன்', body: 'Sun', day: 'Sunday (ஞாயிறு)', color: 'bg-amber-700/10 border-amber-800/30 text-amber-900 dark:text-amber-300' },
    { id: 'chandra', name: 'Chandra', sanskrit: 'चन्द्र', tamil: 'சந்திரன்', body: 'Moon', day: 'Monday (திங்கள்)', color: 'bg-slate-500/10 border-slate-600/30 text-slate-800 dark:text-slate-300' },
    { id: 'mangala', name: 'Maṅgala', sanskrit: 'मङ्गल', tamil: 'செவ்வாய்', body: 'Mars', day: 'Tuesday (செவ்வாய்)', color: 'bg-red-700/10 border-red-800/30 text-red-900 dark:text-red-300' },
    { id: 'budha', name: 'Budha', sanskrit: 'बुध', tamil: 'புதன்', body: 'Mercury', day: 'Wednesday (புதன்)', color: 'bg-emerald-700/10 border-emerald-800/30 text-emerald-900 dark:text-emerald-300' },
    { id: 'guru', name: 'Guru / Bṛhaspati', sanskrit: 'बृहस्पति', tamil: 'குரு / வியாழன்', body: 'Jupiter', day: 'Thursday (வியாழன்)', color: 'bg-yellow-700/10 border-yellow-800/30 text-yellow-900 dark:text-yellow-300' },
    { id: 'sukra', name: 'Śukra', sanskrit: 'शुक्र', tamil: 'சுக்கிரன் / வெள்ளி', body: 'Venus', day: 'Friday (வெள்ளி)', color: 'bg-cyan-700/10 border-cyan-800/30 text-cyan-900 dark:text-cyan-300' },
    { id: 'sani', name: 'Śani', sanskrit: 'शनि', tamil: 'சனி', body: 'Saturn', day: 'Saturday (சனி)', color: 'bg-indigo-700/10 border-indigo-800/30 text-indigo-900 dark:text-indigo-300' },
    { id: 'rahu', name: 'Rāhu', sanskrit: 'राहु', tamil: 'இராகு', body: 'Ascending Lunar Node', day: 'Nodes (நிழல் கிரகம்)', color: 'bg-purple-700/10 border-purple-800/30 text-purple-900 dark:text-purple-300' },
    { id: 'ketu', name: 'Ketu', sanskrit: 'केतु', tamil: 'கேது', body: 'Descending Lunar Node', day: 'Nodes (நிழல் கிரகம்)', color: 'bg-stone-700/10 border-stone-800/30 text-stone-900 dark:text-stone-300' },
  ];

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-card)] p-8 shadow-sm">
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent-maroon)]/30 bg-[var(--color-accent-maroon)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-accent-maroon)]">
            <span className="font-serif">நவ கிரக லிபி</span> • Digital Epigraphy & Indian Astronomical Notation
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-5xl font-serif">
            Nava Graha Lipi
          </h1>
          <p className="text-xl text-[var(--color-accent-bronze)] font-medium">
            An Open-Source Indian Astronomical Symbol and Historical Script Initiative
          </p>
          <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
            Developing a historically informed, typographically rigorous Indian astronomical notation system, 
            grounded in the epigraphic traditions of the Tamil region — beginning with Pallava Grantha as the 
            principal aesthetic foundation, with Vatteluttu, Tamil-Brahmi, and historical Grantha providing 
            parallel comparative contexts.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/script-atlas"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent-maroon)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--color-accent-maroon-light)] transition-colors"
            >
              Explore Script Atlas →
            </Link>
            <Link
              href="/navagraha"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface-card)] px-4 py-2.5 text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)] transition-colors"
            >
              View Navagraha Studio
            </Link>
            <Link
              href="/historical-sources"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface-card)] px-4 py-2.5 text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)] transition-colors"
            >
              Primary Sources Register
            </Link>
          </div>
        </div>

        {/* Decorative background script glyph motif */}
        <div className="absolute -right-6 -bottom-10 select-none text-[180px] font-serif text-[var(--color-accent-maroon)]/5 pointer-events-none">
          ௰
        </div>
      </section>

      {/* Metrics Row */}
      <section className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card className="p-4 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-[var(--color-accent-maroon)] font-serif">
            {scriptsCount}
          </div>
          <div className="text-xs text-[var(--color-text-muted)] font-medium mt-1">Catalogued Scripts</div>
          <div className="text-[10px] text-[var(--color-text-secondary)] mt-0.5">Pallava, Grantha, Vatteluttu, Brahmi</div>
        </Card>

        <Card className="p-4 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-[var(--color-accent-maroon)] font-serif">
            {charactersCount}
          </div>
          <div className="text-xs text-[var(--color-text-muted)] font-medium mt-1">Verified Characters</div>
          <div className="text-[10px] text-[var(--color-text-secondary)] mt-0.5">From Pandey (2018) & Inscriptions</div>
        </Card>

        <Card className="p-4 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-[var(--color-accent-maroon)] font-serif">
            {sourcesCount}
          </div>
          <div className="text-xs text-[var(--color-text-muted)] font-medium mt-1">Primary Sources</div>
          <div className="text-[10px] text-[var(--color-text-secondary)] mt-0.5">ASI, EI, Epigraphical Corpus</div>
        </Card>

        <Card className="p-4 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-[var(--color-accent-maroon)] font-serif">
            9
          </div>
          <div className="text-xs text-[var(--color-text-muted)] font-medium mt-1">Navagraha Glyphs</div>
          <div className="text-[10px] text-[var(--color-text-secondary)] mt-0.5">Under Architectural Design</div>
        </Card>

        <Card className="p-4 text-center">
          <div className="text-xs font-bold text-amber-700 dark:text-amber-400 font-serif uppercase tracking-wider mt-2">
            Preparation
          </div>
          <div className="text-xs text-[var(--color-text-muted)] font-medium mt-2">Unicode Roadmap</div>
          <div className="text-[10px] text-[var(--color-text-secondary)] mt-0.5">L2 Technical Corpus Build</div>
        </Card>
      </section>

      {/* Cultural Scope & Principles */}
      <section className="space-y-4">
        <PageHeader
          title="Epigraphic & Cultural Scope"
          titleTamil="வரலாற்று மற்றும் பண்பாட்டு நோக்கு"
          subtitle="Specific historical traditions of the Tamil region as primary foundations"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[var(--color-accent-maroon)]/10 text-[var(--color-accent-maroon)]">
                  Primary Foundation
                </span>
                <span className="text-xs text-[var(--color-text-muted)]">4th–9th c. CE</span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Pallava Script</h3>
              <p className="text-xs font-serif text-[var(--color-accent-bronze)] mb-2">பல்லவ கிரந்தம்</p>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                The royal inscriptional script of the Pallava dynasty. Primary structural source for glyph 
                stroke dynamics, terminals, and curvature. Mother script of Southeast Asian writing systems.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[var(--color-border)] text-[11px] text-[var(--color-text-muted)] flex justify-between">
              <span>Attestation: Inscriptional</span>
              <Link href="/script-atlas/pallava" className="text-[var(--color-accent-maroon)] font-semibold hover:underline">
                View 61 records →
              </Link>
            </div>
          </Card>

          <Card className="p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-700/10 text-amber-800 dark:text-amber-300">
                  Parallel Tradition
                </span>
                <span className="text-xs text-[var(--color-text-muted)]">5th–13th c. CE</span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Vatteluttu</h3>
              <p className="text-xs font-serif text-[var(--color-accent-bronze)] mb-2">வட்டெழுத்து</p>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                The indigenous rounded script of southern Tamil Nadu and Kerala. Provides essential comparative 
                curves, continuous loop logic, and geometric balance for astronomical glyph design.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[var(--color-border)] text-[11px] text-[var(--color-text-muted)] flex justify-between">
              <span>Attestation: Rock & Copper</span>
              <Link href="/script-atlas" className="text-[var(--color-accent-maroon)] font-semibold hover:underline">
                Overview →
              </Link>
            </div>
          </Card>

          <Card className="p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-700/10 text-blue-800 dark:text-blue-300">
                  Historical Lineage
                </span>
                <span className="text-xs text-[var(--color-text-muted)]">6th c. CE–Present</span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Grantha Script</h3>
              <p className="text-xs font-serif text-[var(--color-accent-bronze)] mb-2">கிரந்த எழுத்து</p>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                The mature liturgical script evolved from Pallava for Sanskrit texts in the Tamil region. 
                Preserved rigorously as distinct from Pallava — not conflated in Unicode or design.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[var(--color-border)] text-[11px] text-[var(--color-text-muted)] flex justify-between">
              <span>Unicode: U+11300–U+1137F</span>
              <Link href="/sanskrit-text-lab" className="text-[var(--color-accent-maroon)] font-semibold hover:underline">
                Text Lab →
              </Link>
            </div>
          </Card>

          <Card className="p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-700/10 text-stone-800 dark:text-stone-300">
                  Root Context
                </span>
                <span className="text-xs text-[var(--color-text-muted)]">3rd BCE–3rd CE</span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Tamil-Brahmi</h3>
              <p className="text-xs font-serif text-[var(--color-accent-bronze)] mb-2">தமிழ் பிராமி (தமிழி)</p>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Earliest epigraphic script of Tamil Nadu found in caves, potsherds and hero stones. Provides 
                foundational phonetic principles and the critical puḷḷi (pure consonant) tradition.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[var(--color-border)] text-[11px] text-[var(--color-text-muted)] flex justify-between">
              <span>Attestation: Epigraphia Indica</span>
              <Link href="/script-atlas" className="text-[var(--color-accent-maroon)] font-semibold hover:underline">
                Overview →
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Navagraha Section */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-serif">
              Initial Symbol Repertoire: The Nine Navagraha
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)]">
              Traditional astronomical entities for which original, historically derived glyphs are being created
            </p>
          </div>
          <Link
            href="/navagraha"
            className="text-xs font-semibold text-[var(--color-accent-maroon)] hover:underline"
          >
            Explore Design Studio →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {grahas.map((g, idx) => (
            <Card key={g.id} className="p-4 flex items-start gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 border ${g.color}`}>
                {idx + 1}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[var(--color-text-primary)] truncate">
                    {g.name}
                  </h4>
                  <span className="text-[11px] font-serif text-[var(--color-accent-maroon)]">
                    {g.tamil}
                  </span>
                </div>
                <div className="text-[11px] text-[var(--color-text-muted)] flex items-center gap-1.5 mt-0.5">
                  <span>{g.body}</span>
                  <span>•</span>
                  <span>{g.sanskrit}</span>
                </div>
                <div className="text-[10px] text-[var(--color-text-secondary)] mt-1 truncate">
                  {g.day}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Rigorous Epigraphic Principles */}
      <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-inset)] p-6 space-y-3">
        <h3 className="text-base font-bold text-[var(--color-text-primary)] font-serif">
          Core Research Integrity Principles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[var(--color-text-secondary)]">
          <div className="space-y-1">
            <span className="font-bold text-[var(--color-accent-maroon)]">1. No Historical Invention</span>
            <p className="leading-relaxed">
              Newly designed astronomical symbols are clearly designated as modern original constructions. 
              They are never presented as rediscovered ancient signs.
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-bold text-[var(--color-accent-maroon)]">2. Strict Provenance</span>
            <p className="leading-relaxed">
              Every historical character in the Script Atlas cites primary publications (ASI, Epigraphia Indica, 
              Pandey 2018, Bühler, Burnell) with verifiable inscriptional attestation.
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-bold text-[var(--color-accent-maroon)]">3. Standardisation Roadmap</span>
            <p className="leading-relaxed">
              Unicode proposals require real-world adoption, community consensus, and non-overlap verification 
              with existing symbols before formal submission to the Unicode Technical Committee (UTC).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
