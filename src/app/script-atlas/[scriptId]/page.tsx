import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getScript, getCharactersByScript, getAllScripts } from '@/lib/db';
import { PageHeader } from '@/components/ui/PageHeader';
import { CharacterCard } from '@/components/atlas/CharacterCard';
import { Card } from '@/components/ui/Card';

export function generateStaticParams() {
  try {
    const scripts = getAllScripts();
    return scripts.map((s) => ({ scriptId: s.id }));
  } catch {
    return [];
  }
}

interface ScriptDetailPageProps {
  params: Promise<{
    scriptId: string;
  }>;
}

export default async function ScriptDetailPage({ params }: ScriptDetailPageProps) {
  const { scriptId } = await params;
  const script = getScript(scriptId);

  if (!script) {
    notFound();
  }

  const characters = getCharactersByScript(scriptId);

  // Group characters by category
  const categories = [
    { id: 'independent-vowel', title: 'Independent Vowels (ஸ்வரங்கள்)', items: characters.filter((c) => c.category === 'independent-vowel') },
    { id: 'consonant', title: 'Consonants (மெய்யெழுத்துக்கள்)', items: characters.filter((c) => c.category === 'consonant') },
    { id: 'dependent-vowel-sign', title: 'Dependent Vowel Signs (உயிர்மெய்க் குறிகள்)', items: characters.filter((c) => c.category === 'dependent-vowel-sign') },
    { id: 'marks', title: 'Marks (அனுஸ்வாரம், விஸர்கம், புள்ளி)', items: characters.filter((c) => ['anusvara', 'visarga', 'virama', 'subjoiner', 'length-mark'].includes(c.category)) },
    { id: 'punctuation', title: 'Punctuation & Signs (நிறுத்தக்குறிகள் & மங்கலக்குறி)', items: characters.filter((c) => ['punctuation', 'sign'].includes(c.category)) },
  ];

  return (
    <div className="space-y-8">
      <div>
        <Link
          href="/script-atlas"
          className="inline-flex items-center gap-1 text-xs text-[var(--color-accent-maroon)] font-semibold hover:underline mb-3"
        >
          ← Back to Script Atlas
        </Link>
        <PageHeader
          title={`${script.name} Script Inventory`}
          subtitle={`${script.period_start} – ${script.period_end} • ${script.region}`}
          description={script.description}
        />
      </div>

      {/* Script Statistics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold font-serif text-[var(--color-accent-maroon)]">{characters.length}</div>
          <div className="text-xs text-[var(--color-text-muted)]">Catalogued Characters</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold font-serif text-[var(--color-text-primary)]">
            {characters.filter((c) => c.attestation_status === 'directly-attested').length}
          </div>
          <div className="text-xs text-[var(--color-text-muted)]">Directly Attested</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold font-serif text-[var(--color-text-primary)]">
            {characters.filter((c) => c.category === 'consonant').length}
          </div>
          <div className="text-xs text-[var(--color-text-muted)]">Consonants</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold font-serif text-[var(--color-text-primary)]">
            {characters.filter((c) => c.category === 'independent-vowel').length}
          </div>
          <div className="text-xs text-[var(--color-text-muted)]">Independent Vowels</div>
        </Card>
      </div>

      {/* Categorized Character Grids */}
      {characters.length === 0 ? (
        <Card className="p-12 text-center space-y-3">
          <div className="text-3xl">📜</div>
          <h4 className="text-lg font-bold text-[var(--color-text-primary)] font-serif">
            Character Records Under Archival Compilation
          </h4>
          <p className="text-xs text-[var(--color-text-secondary)] max-w-lg mx-auto">
            Character records for {script.name} are currently being compiled from primary epigraphical publications (Epigraphia Indica, South Indian Inscriptions, and Sivaramamurti 1952).
          </p>
        </Card>
      ) : (
        <div className="space-y-10">
          {categories.map((cat) => {
            if (cat.items.length === 0) return null;
            return (
              <section key={cat.id} className="space-y-4">
                <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-2">
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] font-serif">
                    {cat.title}
                  </h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)]">
                    {cat.items.length} characters
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {cat.items.map((char) => (
                    <CharacterCard key={char.id} character={char} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
