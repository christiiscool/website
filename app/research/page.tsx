import { PageHero } from "@/components/page-hero";
import { ResearchCard } from "@/components/research-card";
import { research } from "@/data/site";

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Research reports and investment notes."
        description="A home for behavioural finance research, factor studies, private markets analysis, and publishable market memos."
      />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {research.map((item) => (
            <ResearchCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
