import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  className,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-200",
    variant === "primary" &&
      "bg-[#c8ff5a] text-[#111713] shadow-[0_12px_30px_rgba(56,89,35,0.16)] hover:bg-[#b7f247]",
    variant === "secondary" &&
      "border border-[#111713]/15 bg-[#fffaf0] text-[#111713] hover:border-[#111713]/30 hover:bg-white",
    variant === "ghost" && "text-[#183b2b] hover:bg-[#183b2b]/8",
    className,
  );

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {children}
        <ArrowUpRight size={16} />
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
