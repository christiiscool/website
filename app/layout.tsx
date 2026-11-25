import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christi's Corner | A little space on the internet",
  description: "Christi's personal corner of the internet: markets, code, climbing, travelling, research and things she's made.",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en" className="h-full antialiased"><body className="min-h-full bg-[#fcf7f3] text-[#292337]"><Navbar/><main className="min-h-screen">{children}</main><Footer/></body></html>;
}
