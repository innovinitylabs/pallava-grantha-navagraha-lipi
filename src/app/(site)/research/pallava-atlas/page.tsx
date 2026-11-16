"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { pallavCharacters } from "@/data/pallava-seed";
import { DisplayTitle } from "@/components/site/DisplayTitle";
import { FadeIn } from "@/components/site/FadeIn";

export default function PallavaAtlasPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "All 61 Characters" },
    { value: "independent-vowel", label: "Independent Vowels (9)" },
    { value: "consonant", label: "Consonants (35)" },
    { value: "dependent-vowel-sign", label: "Dependent Vowel Signs (9)" },
    { value: "marks", label: "Marks (Virama, Anusvara, Visarga...)" },
    { value: "punctuation", label: "Punctuation & Siddham (3)" },
  ];

  const filteredCharacters = useMemo(() => {
    return pallavCharacters.filter((char) => {
      if (search.trim()) {
        const q = search.toLowerCase().trim();
        const matchesName = char.character_name.toLowerCase().includes(q);
        const matchesTranslit = (char.transliteration || "").toLowerCase().includes(q);
        const matchesPhonetic = (char.phonetic_value || "").toLowerCase().includes(q);
        const matchesIpa = (char.ipa || "").toLowerCase().includes(q);
        const matchesNotes = (char.notes || "").toLowerCase().includes(q);
        if (!matchesName && !matchesTranslit && !matchesPhonetic && !matchesIpa && !matchesNotes) {
          return false;
        }
      }

      if (selectedCategory !== "all") {
        if (selectedCategory === "marks") {
          return ["anusvara", "visarga", "virama", "subjoiner", "length-mark"].includes(char.category);
        }
        if (char.category !== selectedCategory) {
          return false;
        }
      }

      return true;
    });
  }, [search, selectedCategory]);

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 space-y-12">
      {/* Back Link */}
      <FadeIn>
        <Link
          href="/research"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-[var(--muted)] hover:text-[var(--cinnabar)] transition-colors"
        >
          ← Back to Historical Research
        </Link>
      </FadeIn>

      {/* Header */}
      <FadeIn delay={0.08}>
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--muted)]">
              Primary Reference: L2/18-083
            </span>
            <span className="font-anek-tamil text-xs text-[var(--cinnabar)]">
              பல்லவ கிரந்த எழுத்துத் தொகுப்பு
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-[var(--ink)]">
            <DisplayTitle>Pallava Historical Character Atlas</DisplayTitle>
          </h1>

          <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
            The complete 61-character inventory of the Pallava script attested in South Indian rock and copper-plate inscriptions (4th–9th century CE), systematically documented by Anshuman Pandey (2018). Preserved as our principal visual design influence.
          </p>
        </div>
      </FadeIn>

      {/* Filter and Search Bar */}
      <FadeIn delay={0.12}>
        <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)]">
          <div className="relative flex-1">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filter by transliteration (k, ā, ṭha...), IPA, or name..."
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--paper)] px-4 py-2 text-xs text-[var(--ink)] placeholder-[var(--muted)] focus:outline-none focus:ring-1 focus:ring-[var(--cinnabar)]"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-2 text-xs text-[var(--muted)] hover:text-[var(--ink)]"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-lg border border-[var(--border)] bg-[var(--paper)] px-3 py-2 text-xs text-[var(--ink)] focus:outline-none focus:ring-1 focus:ring-[var(--cinnabar)]"
            >
              {categories.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>
        </div>
      </FadeIn>

      {/* Character Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[var(--muted)] px-1">
          <span>
            Showing <strong className="text-[var(--ink)]">{filteredCharacters.length}</strong> attested Pallava characters
          </span>
          <span className="font-mono text-[10px]">Source: Pandey (2018) L2/18-083</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredCharacters.map((char) => (
            <div
              key={char.id}
              className="archive-mount flex flex-col justify-between rounded-xl p-4 space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] text-[var(--muted)]">
                  #{char.sort_order}
                </span>
                <span className="font-mono text-[8px] uppercase px-1.5 py-0.5 rounded border border-[var(--border)] text-[var(--muted)] truncate max-w-[80px]">
                  {char.category.replace("-", " ")}
                </span>
              </div>

              {/* Centered Transliteration Emblem */}
              <div className="flex flex-col items-center justify-center py-3 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)]">
                <span className="font-serif text-2xl font-bold text-[var(--ink)] group-hover:text-[var(--cinnabar)] transition-colors">
                  {char.transliteration || "—"}
                </span>
                <span className="font-mono text-[10px] text-[var(--muted)] mt-0.5">
                  [{char.ipa || char.phonetic_value}]
                </span>
              </div>

              <div className="space-y-0.5 text-center">
                <h4 className="font-display text-xs font-semibold text-[var(--ink)] truncate" title={char.character_name}>
                  {char.character_name.replace("PALLAVA LETTER ", "").replace("PALLAVA ", "")}
                </h4>
                <div className="text-[9px] font-mono text-[var(--muted)]">
                  {char.attestation_status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
