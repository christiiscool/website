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
          description="A resume-backed view of finance internships, private markets deal work, equity research leadership, live portfolio management, and academic achievements."
        />
        <div className="mt-10 space-y-5">
          {experiences.map((item) => (
            <article key={item.role} className="rounded-[28px] border border-[#111713]/10 bg-[#fffaf0] p-6 shadow-[0_16px_42px_rgba(24,59,43,0.08)]">
              <div className="flex items-start gap-4">
                <div className="grid size-11 shrink-0 place-items-center rounded-full border border-[#111713]/10 bg-[#c8ff5a] text-[#111713]">
                  <BriefcaseBusiness size={19} />
                </div>
                <div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                    <h2 className="text-xl font-semibold tracking-tight text-[#111713]">
                      {item.role}
                    </h2>
                    <span className="text-xs uppercase tracking-[0.22em] text-[#667064]">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[#667064]">{item.firm}</p>
                  <p className="mt-4 text-sm leading-6 text-[#445046]">{item.summary}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
