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
    "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition duration-200",
    variant === "primary" &&
      "bg-stone-100 text-zinc-950 hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.16)]",
    variant === "secondary" &&
      "border border-white/12 bg-white/[0.03] text-stone-100 hover:border-white/25 hover:bg-white/[0.07]",
    variant === "ghost" && "text-zinc-300 hover:bg-white/[0.05] hover:text-white",
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
