import { searchCharacters, getAllScripts } from '@/lib/db';
import { PageHeader } from '@/components/ui/PageHeader';
import { CharacterExplorer } from '@/components/explorer/CharacterExplorer';

export default function CharacterExplorerPage() {
  const characters = searchCharacters('');
  const scripts = getAllScripts();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Character Explorer"
        titleTamil="எழுத்து உலாவி"
        subtitle="Search, filter, and inspect epigraphic character records across scripts and categories"
        description="Every character entry in the registry is cross-referenced with its IAST transliteration, IPA phonetic representation, attestation status, and historical publication provenance."
      />

      <CharacterExplorer initialCharacters={characters} scripts={scripts} />
    </div>
  );
}
