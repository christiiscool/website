import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { marketNotes } from "@/data/site";

export default function MarketNotesPage() {
  return (
    <>
      <PageHero
        eyebrow="Market notes"
        title="Short-form commentary and market observations."
        description="A blog-style section for notes on sentiment, credit, factor behaviour, market structure, and research process."
      />
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-5">
          {marketNotes.map((note) => (
            <article
              key={note.title}
              className="group rounded-[28px] border border-[#111713]/10 bg-[#fffaf0] p-6 shadow-[0_16px_42px_rgba(24,59,43,0.08)] transition hover:-translate-y-1 hover:border-[#183b2b]/25"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-[#667064]">{note.date}</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#111713]">
                {note.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#445046]">{note.summary}</p>
              <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#183b2b] transition group-hover:text-[#111713]">
                Read note
                <ArrowRight size={15} className="transition group-hover:translate-x-1" />
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
