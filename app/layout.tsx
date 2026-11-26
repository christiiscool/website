import type { Metadata } from "next";
import "./globals.css";

const description = "Christi's personal website: markets, code, climbing, travel, research and everything she's making.";

export const metadata: Metadata = {
  title: "Christi",
  applicationName: "Christi",
  description,
  openGraph: { title: "Christi", siteName: "Christi", description, type: "website" },
  appleWebApp: { title: "Christi" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="h-full antialiased"><body className="min-h-full bg-[#fcf7f3] text-[#292337]">{children}</body></html>;
}
