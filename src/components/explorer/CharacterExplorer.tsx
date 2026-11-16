'use client';

import { useState, useMemo } from 'react';
import type { Character, Script } from '@/lib/types';
import { CharacterCard } from '@/components/atlas/CharacterCard';
import { Card } from '@/components/ui/Card';

interface CharacterExplorerProps {
  initialCharacters: Character[];
  scripts: Script[];
}

export function CharacterExplorer({ initialCharacters, scripts }: CharacterExplorerProps) {
  const [search, setSearch] = useState('');
  const [selectedScript, setSelectedScript] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredCharacters = useMemo(() => {
    return initialCharacters.filter((char) => {
      // Search term match
      if (search.trim()) {
        const query = search.toLowerCase().trim();
        const matchesName = char.character_name.toLowerCase().includes(query);
        const matchesTranslit = (char.transliteration || '').toLowerCase().includes(query);
        const matchesPhonetic = (char.phonetic_value || '').toLowerCase().includes(query);
        const matchesIpa = (char.ipa || '').toLowerCase().includes(query);
        const matchesNotes = (char.notes || '').toLowerCase().includes(query);
        if (!matchesName && !matchesTranslit && !matchesPhonetic && !matchesIpa && !matchesNotes) {
          return false;
        }
      }

      // Script filter
      if (selectedScript !== 'all' && char.script_id !== selectedScript) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && char.category !== selectedCategory) {
        return false;
      }

      // Status filter
      if (selectedStatus !== 'all' && char.attestation_status !== selectedStatus) {
        return false;
      }

      return true;
    });
  }, [initialCharacters, search, selectedScript, selectedCategory, selectedStatus]);

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'independent-vowel', label: 'Independent Vowels' },
    { value: 'consonant', label: 'Consonants' },
    { value: 'dependent-vowel-sign', label: 'Vowel Signs' },
    { value: 'anusvara', label: 'Anusvara' },
    { value: 'visarga', label: 'Visarga' },
    { value: 'virama', label: 'Virama' },
    { value: 'punctuation', label: 'Punctuation' },
    { value: 'subjoiner', label: 'Subjoiner' },
  ];

  return (
    <div className="space-y-6">
      {/* Search and Filters Bar */}
      <Card className="p-4 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by character name, IAST transliteration (k, kh, ā, etc.), IPA, or notes..."
              className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-3.5 py-2 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-maroon)]"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-2.5 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {/* Script Selector */}
            <select
              value={selectedScript}
              onChange={(e) => setSelectedScript(e.target.value)}
              className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-3 py-2 text-xs text-[var(--color-text-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-maroon)]"
            >
              <option value="all">All Scripts</option>
              {scripts.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>

            {/* Category Selector */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-3 py-2 text-xs text-[var(--color-text-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-maroon)]"
            >
              {categories.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>

            {/* Attestation Status Selector */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-3 py-2 text-xs text-[var(--color-text-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-maroon)]"
            >
              <option value="all">All Attestations</option>
              <option value="directly-attested">Directly Attested</option>
              <option value="reconstructed">Reconstructed</option>
              <option value="later-form">Later Form</option>
              <option value="uncertain">Uncertain</option>
            </select>
          </div>
        </div>

        {/* Filter Summary */}
        <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)] pt-2 border-t border-[var(--color-border)]">
          <span>
            Showing <strong className="text-[var(--color-text-primary)]">{filteredCharacters.length}</strong> of{' '}
            {initialCharacters.length} catalogued characters
          </span>
          {(search || selectedScript !== 'all' || selectedCategory !== 'all' || selectedStatus !== 'all') && (
            <button
              onClick={() => {
                setSearch('');
                setSelectedScript('all');
                setSelectedCategory('all');
                setSelectedStatus('all');
              }}
              className="text-[var(--color-accent-maroon)] hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>
      </Card>

      {/* Results Grid */}
      {filteredCharacters.length === 0 ? (
        <Card className="p-12 text-center space-y-2">
          <div className="text-3xl">🔍</div>
          <h4 className="text-base font-bold text-[var(--color-text-primary)] font-serif">
            No matching characters found
          </h4>
          <p className="text-xs text-[var(--color-text-muted)]">
            Try adjusting your search query or loosening filter constraints.
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredCharacters.map((char) => (
            <CharacterCard key={char.id} character={char} showScript={selectedScript === 'all'} />
          ))}
        </div>
      )}
    </div>
  );
}
