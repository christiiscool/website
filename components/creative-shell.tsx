import Link from "next/link";
import "@/styles/creative-pages.css";

export const creativeNavigation = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "my work", href: "/work" },
  { label: "journal", href: "/journal" },
  { label: "say hi", href: "/contact" },
];

export function CreativeShell({ children, current }: { children: React.ReactNode; current: string }) {
  return (
    <div className="creative-page">
      <a className="cp-skip" href="#page-content">skip to content</a>
      <header className="cp-header">
        <Link href="/" className="cp-wordmark">christi<span>✳</span></Link>
        <nav className="cp-desktop-nav" aria-label="Main navigation">
          {creativeNavigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={current === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <details className="cp-mobile-nav">
          <summary>menu <span aria-hidden="true">＋</span></summary>
          <nav aria-label="Mobile navigation">
            {creativeNavigation.map((item) => (
              <Link key={item.href} href={item.href} aria-current={current === item.href ? "page" : undefined}>{item.label}</Link>
            ))}
          </nav>
        </details>
      </header>
      <main id="page-content" className="cp-main">{children}</main>
      <footer className="cp-footer">
        <Link href="/">christi's corner <span aria-hidden="true">✳</span></Link>
        <span>a little space on the internet, made with love ♡</span>
        <a href="mailto:christichia@gmail.com">say hello ↗</a>
      </footer>
    </div>
  );
}
