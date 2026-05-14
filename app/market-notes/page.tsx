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
              className="group rounded-lg border border-white/10 bg-white/[0.035] p-6 transition hover:border-white/20 hover:bg-white/[0.055]"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">{note.date}</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-stone-50">
                {note.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{note.summary}</p>
              <button className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-zinc-200 transition group-hover:text-white">
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
