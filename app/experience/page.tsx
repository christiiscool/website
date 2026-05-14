import { BriefcaseBusiness } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/data/site";

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="Investment research across public and private markets."
        description="A concise experience page for private equity, private credit, quantitative research, behavioural finance, and market analysis."
      />
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Timeline"
          title="Experience snapshot"
          description="Replace these placeholders with specific roles, firms, dates, achievements, and resume links when ready."
        />
        <div className="mt-10 space-y-5">
          {experiences.map((item) => (
            <article key={item.role} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
              <div className="flex items-start gap-4">
                <div className="grid size-11 shrink-0 place-items-center rounded-md border border-white/10 bg-black/40 text-stone-200">
                  <BriefcaseBusiness size={19} />
                </div>
                <div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                    <h2 className="text-xl font-semibold tracking-tight text-stone-50">
                      {item.role}
                    </h2>
                    <span className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-zinc-500">{item.firm}</p>
                  <p className="mt-4 text-sm leading-6 text-zinc-400">{item.summary}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
