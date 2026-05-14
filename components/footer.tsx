import { GitBranch, Link2, Mail } from "lucide-react";
import { profile } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[#111713]/10 bg-[#111713]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-sm font-medium text-[#f7f3e8]">{profile.name}</p>
          <p className="mt-1 text-sm text-[#d8e4c9]">
            Behavioural finance, quantitative investing, and research systems.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            aria-label="GitHub"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="grid size-10 place-items-center rounded-full border border-[#f7f3e8]/15 text-[#d8e4c9] transition hover:border-[#c8ff5a] hover:text-[#c8ff5a]"
          >
            <GitBranch size={18} />
          </a>
          <a
            aria-label="LinkedIn"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="grid size-10 place-items-center rounded-full border border-[#f7f3e8]/15 text-[#d8e4c9] transition hover:border-[#c8ff5a] hover:text-[#c8ff5a]"
          >
            <Link2 size={18} />
          </a>
          <a
            aria-label="Email"
            href={`mailto:${profile.email}`}
            className="grid size-10 place-items-center rounded-full border border-[#f7f3e8]/15 text-[#d8e4c9] transition hover:border-[#c8ff5a] hover:text-[#c8ff5a]"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="border-t border-[#f7f3e8]/10 px-4 py-5 text-center text-xs text-[#d8e4c9]/70">
        (c) {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
