import { ArrowRight } from "lucide-react";
import { ResearchItem } from "@/data/site";

type ResearchCardProps = {
  item: ResearchItem;
};

export function ResearchCard({ item }: ResearchCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]">
      <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.22em] text-zinc-500">
        <span>{item.category}</span>
        <span>{item.date}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-stone-50">
        {item.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">{item.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>
      <button className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-stone-200 transition group-hover:text-white">
        Read more
        <ArrowRight size={15} className="transition group-hover:translate-x-1" />
      </button>
    </article>
  );
}
