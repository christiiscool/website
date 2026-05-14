import { Mail } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { profile } from "@/data/site";

export function ContactCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-[#111713]/10 bg-[#183b2b] p-8 shadow-[0_24px_70px_rgba(24,59,43,0.18)] md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c8ff5a]">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#f7f3e8]">
              Let&apos;s discuss markets, research, or data-driven investing.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#d8e4c9]">
              I am open to investment research conversations, project collaborations, and
              roles at the intersection of finance, AI, and systematic decision-making.
            </p>
          </div>
          <ButtonLink href={`mailto:${profile.email}`} external className="shrink-0">
            <Mail size={16} />
            Email me
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
