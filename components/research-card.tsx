import { ArrowRight } from "lucide-react";
import { ResearchItem } from "@/data/site";

type ResearchCardProps = {
  item: ResearchItem;
};

export function ResearchCard({ item }: ResearchCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-[#111713]/10 bg-[#fffaf0] p-6 shadow-[0_18px_45px_rgba(24,59,43,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#183b2b]/25 hover:shadow-[0_24px_60px_rgba(24,59,43,0.12)]">
      <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.22em] text-[#6b7468]">
        <span>{item.category}</span>
        <span>{item.date}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#111713]">
        {item.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-[#667064]">{item.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#111713]/10 bg-[#edf3dc] px-2.5 py-1 text-xs text-[#344238]"
          >
            {tag}
          </span>
        ))}
      </div>
      {item.href ? (
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#183b2b] transition group-hover:text-[#111713]"
        >
          View report
          <ArrowRight size={15} className="transition group-hover:translate-x-1" />
        </a>
      ) : (
        <button className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#183b2b] transition group-hover:text-[#111713]">
          Read more
          <ArrowRight size={15} className="transition group-hover:translate-x-1" />
        </button>
      )}
    </article>
  );
}
