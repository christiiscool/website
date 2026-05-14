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
    <header className="sticky top-0 z-50 border-b border-[#111713]/10 bg-[#f7f3e8]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-10 place-items-center rounded-full border border-[#111713]/15 bg-[#c8ff5a] text-sm font-semibold text-[#111713] transition group-hover:scale-105">
            CL
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-[#111713] sm:block">
            Research Portfolio
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm text-[#526058] transition hover:bg-[#183b2b]/8 hover:text-[#111713]",
                pathname === item.href && "bg-[#183b2b] text-[#f7f3e8]",
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
            className="grid size-9 place-items-center rounded-full border border-[#111713]/15 text-[#183b2b] transition hover:border-[#111713]/30 hover:bg-[#fffaf0]"
          >
            <GitBranch size={17} />
          </a>
          <a
            aria-label="LinkedIn"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="grid size-9 place-items-center rounded-full border border-[#111713]/15 text-[#183b2b] transition hover:border-[#111713]/30 hover:bg-[#fffaf0]"
          >
            <Link2 size={17} />
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="grid size-10 place-items-center rounded-full border border-[#111713]/15 text-[#111713] lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[#111713]/10 bg-[#f7f3e8]/98 px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-full px-3 py-3 text-sm text-[#526058] transition hover:bg-[#183b2b]/8 hover:text-[#111713]",
                  pathname === item.href && "bg-[#183b2b] text-[#f7f3e8]",
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
