import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { education, experiences, profile } from "@/data/site";

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="Investment research across public and private markets."
        description="A detailed view of my finance internships, private markets deal work, live portfolio management, student-managed fund research, and schooling."
      />
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Experience"
            title="Professional and investing experience"
            description="Resume-backed roles spanning global fund analytics, private equity and private credit execution, TMT equity research, and live portfolio management."
          />
          <ButtonLink href={profile.linkedin} external variant="secondary" className="shrink-0">
            View LinkedIn
          </ButtonLink>
        </div>
        <div className="mt-10 space-y-5">
          {experiences.map((item) => (
            <article
              key={item.role}
              className="rounded-[28px] border border-[#111713]/10 bg-[#fffaf0] p-6 shadow-[0_16px_42px_rgba(24,59,43,0.08)]"
            >
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
                  <ul className="mt-5 grid gap-2">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-3 text-sm leading-6 text-[#445046]">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#183b2b]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#111713]/10 bg-[#d8e4c9]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Schooling"
            title="Education, competitions, and leadership"
            description="Academic foundations and leadership experiences that shape the finance, research, and behavioural investing lens of the portfolio."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {education.map((item) => (
              <article
                key={item.school}
                className="rounded-[28px] border border-[#111713]/10 bg-[#fffaf0] p-6 shadow-[0_16px_42px_rgba(24,59,43,0.08)]"
              >
                <div className="flex items-start gap-4">
                  <div className="grid size-11 shrink-0 place-items-center rounded-full border border-[#111713]/10 bg-[#c8ff5a] text-[#111713]">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[#667064]">
                      {item.period}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold tracking-tight text-[#111713]">
                      {item.school}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-[#445046]">
                      {item.credential}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-[#445046]">{item.summary}</p>
                    <ul className="mt-5 grid gap-2">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex gap-3 text-sm leading-6 text-[#445046]">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#183b2b]" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
