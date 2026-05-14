"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GitBranch, Link2, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, profile } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-9 place-items-center rounded-md border border-white/15 bg-white/[0.04] text-sm font-semibold text-white transition group-hover:border-white/30">
            CL
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-zinc-200 sm:block">
            Research Portfolio
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.04] hover:text-white",
                pathname === item.href && "bg-white/[0.06] text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            aria-label="GitHub"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="grid size-9 place-items-center rounded-md border border-white/10 text-zinc-400 transition hover:border-white/25 hover:text-white"
          >
            <GitBranch size={17} />
          </a>
          <a
            aria-label="LinkedIn"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="grid size-9 place-items-center rounded-md border border-white/10 text-zinc-400 transition hover:border-white/25 hover:text-white"
          >
            <Link2 size={17} />
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="grid size-10 place-items-center rounded-md border border-white/10 text-zinc-200 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-black/95 px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.05] hover:text-white",
                  pathname === item.href && "bg-white/[0.06] text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
