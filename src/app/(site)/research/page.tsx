import Link from "next/link";
import { DisplayTitle } from "@/components/site/DisplayTitle";
import { FadeIn } from "@/components/site/FadeIn";

export default function ResearchPage() {
  const sources = [
    {
      id: "SRC-PANDEY-2018",
      title: "Preliminary Proposal to Encode Pallava in Unicode",
      author: "Anshuman Pandey",
      year: "2018",
      publisher: "Unicode Consortium (L2/18-083)",
      type: "Unicode Technical Proposal",
      url: "https://www.unicode.org/L2/L2018/18083-pallava.pdf",
      notes: "The primary reference document for our Pallava character inventory. Documents 9 independent vowels, 35 consonants, 9 dependent vowel signs, virama, anusvara, visarga, subjoiner, and punctuation.",
    },
    {
      id: "SRC-BUEHLER-1896",
      title: "Indische Palaeographie (Indian Palaeography)",
      author: "Georg Bühler",
      year: "1896",
      publisher: "K.J. Trübner, Strassburg / Indian Antiquary",
      type: "Scholarly Treatise",
      url: "",
      notes: "Foundational reference for the palaeography of Indian scripts. Contains comparative plates of Brahmi derivatives, Southern scripts, and early Grantha.",
    },
    {
      id: "SRC-BURNELL-1878",
      title: "Elements of South Indian Palaeography (4th–17th Century A.D.)",
      author: "Arthur Coke Burnell",
      year: "1878",
      publisher: "Trübner & Co., London",
      type: "Epigraphical Publication",
      url: "",
      notes: "Essential landmark study classifying the evolution of Grantha, Vatteluttu, and Chera-Pandya scripts with detailed inscriptional plates.",
    },
    {
      id: "SRC-SIVARAMAMURTI-1952",
      title: "Indian Epigraphy and South Indian Scripts",
      author: "Calambur Sivaramamurti",
      year: "1952",
      publisher: "Bulletin of the Madras Government Museum",
      type: "Museum Corpus",
      url: "",
      notes: "Detailed structural analysis of Pallava inscriptional calligraphy from Mahendravarman I caves at Mamallapuram and Kanchipuram temple records.",
    },
    {
      id: "SRC-MAHADEVAN-2003",
      title: "Early Tamil Epigraphy: From the Earliest Times to the 6th Century A.D.",
      author: "Iravatham Mahadevan",
      year: "2003",
      publisher: "Cre-A, Chennai / Harvard University",
      type: "Epigraphical Corpus",
      url: "",
      notes: "Definitive palaeographical analysis of Tamil-Brahmi cave inscriptions, graffiti on pottery, and the origin of the puḷḷi marker.",
    },
    {
      id: "SRC-EI-CORPUS",
      title: "Epigraphia Indica & South Indian Inscriptions",
      author: "Archaeological Survey of India (ASI)",
      year: "1890–Present",
      publisher: "Archaeological Survey of India",
      type: "Primary Journal & Report Series",
      url: "",
      notes: "Official published volumes of estampages, transcriptions, and decipherments of Pallava rock-cut and copper-plate grants.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 space-y-16">
      {/* Header */}
      <FadeIn>
        <div className="space-y-4 max-w-3xl">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[var(--cinnabar)] font-semibold">
            Epigraphical Provenance & Archival Sources
          </p>
          <h1 className="font-display text-4xl sm:text-6xl tracking-tight text-[var(--ink)]">
            <DisplayTitle>Historical Research</DisplayTitle>
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Nava Graha Lipi is rooted in rigorous historical documentation. We preserve the critical distinction between historically attested characters (such as the 61 Pallava epigraphic forms) and our modern original astronomical glyph creations.
          </p>
        </div>
      </FadeIn>

      {/* Featured Banner: The Pallava Historical Character Atlas */}
      <FadeIn delay={0.1}>
        <div className="archive-mount rounded-2xl p-8 sm:p-10 space-y-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-l-4 border-l-[var(--cinnabar)]">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[var(--cinnabar)] font-semibold">
              Separate Historical Catalogue
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--ink)]">
              The 61 Pallava Attested Characters
            </h2>
            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              Explore the complete historical inventory of 61 Pallava script characters catalogued from Anshuman Pandey&apos;s 2018 preliminary Unicode proposal (L2/18-083), including independent vowels, 35 consonants, dependent signs, virama, and punctuation.
            </p>
          </div>

          <Link
            href="/research/pallava-atlas"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-[var(--ink)] text-white px-5 py-3 text-xs uppercase tracking-[0.16em] hover:bg-[var(--cinnabar)] transition-colors shadow-xs"
          >
            Open Pallava Atlas →
          </Link>
        </div>
      </FadeIn>

      {/* Research Principles of Integrity */}
      <FadeIn delay={0.15}>
        <div className="space-y-4">
          <h3 className="font-display text-2xl font-semibold text-[var(--ink)]">
            The Three Boundaries of Research Integrity
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[var(--muted)]">
            <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] space-y-2">
              <strong className="text-[var(--ink)] font-semibold block text-sm">
                1. No Anachronistic Inventions
              </strong>
              <p className="leading-relaxed">
                Newly designed astronomical symbols are always marked as modern original constructions. We never present modern vector designs as rediscovered ancient symbols.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] space-y-2">
              <strong className="text-[var(--ink)] font-semibold block text-sm">
                2. Non-Conflation of Lineages
              </strong>
              <p className="leading-relaxed">
                5th-century Pallava Grantha must not be conflated with 14th-century or modern Grantha. Although Grantha descends from Pallava, their inscriptional ductus, ductus angles, and loop structures differ significantly.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] space-y-2">
              <strong className="text-[var(--ink)] font-semibold block text-sm">
                3. Verifiable Primary Provenance
              </strong>
              <p className="leading-relaxed">
                Every historical record in our database is linked to published epigraphical reports (ASI, Epigraphia Indica, or Unicode Technical Committee proposals) with physical plate numbers.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Bibliography of Primary Sources */}
      <div className="space-y-6">
        <FadeIn delay={0.2}>
          <div className="border-b border-[var(--border)] pb-3">
            <h3 className="font-display text-2xl font-semibold text-[var(--ink)]">
              Primary Sources & Bibliographical Corpus
            </h3>
            <p className="text-xs text-[var(--muted)] mt-1">
              Historical documentation supporting our epigraphical and linguistic research.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sources.map((src, idx) => (
            <FadeIn key={src.id} delay={0.06 * idx}>
              <div className="archive-mount rounded-xl p-6 flex flex-col justify-between space-y-4 h-full">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-[var(--cinnabar)] font-semibold">{src.type}</span>
                    <span className="text-[var(--muted)]">{src.year}</span>
                  </div>
                  <h4 className="font-display text-lg font-semibold text-[var(--ink)] leading-snug">
                    {src.title}
                  </h4>
                  <div className="text-xs text-[var(--muted)] font-serif">
                    {src.author} • {src.publisher}
                  </div>
                  <p className="text-xs text-[var(--muted)] leading-relaxed pt-1">
                    {src.notes}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs">
                  <span className="font-mono text-[10px] text-[var(--muted)]">{src.id}</span>
                  {src.url ? (
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[var(--cinnabar)] hover:underline inline-flex items-center gap-1"
                    >
                      View Document ↗
                    </a>
                  ) : (
                    <span className="text-[10px] text-[var(--muted)] italic">Print / Library Repository</span>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
