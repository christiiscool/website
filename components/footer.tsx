import { GitBranch, Link2, Mail } from "lucide-react";
import { profile } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-sm font-medium text-stone-100">{profile.name}</p>
          <p className="mt-1 text-sm text-zinc-500">
            Behavioural finance, quantitative investing, and research systems.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            aria-label="GitHub"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="grid size-10 place-items-center rounded-md border border-white/10 text-zinc-400 transition hover:border-white/25 hover:text-white"
          >
            <GitBranch size={18} />
          </a>
          <a
            aria-label="LinkedIn"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="grid size-10 place-items-center rounded-md border border-white/10 text-zinc-400 transition hover:border-white/25 hover:text-white"
          >
            <Link2 size={18} />
          </a>
          <a
            aria-label="Email"
            href={`mailto:${profile.email}`}
            className="grid size-10 place-items-center rounded-md border border-white/10 text-zinc-400 transition hover:border-white/25 hover:text-white"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-zinc-600">
        (c) {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
