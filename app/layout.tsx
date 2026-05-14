import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christi Chia | Investment Research Portfolio",
  description:
    "Portfolio for Christi Chia, covering behavioural finance, asset management, private equity, private credit, portfolio management, and investment research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#f7f3e8] text-[#111713]">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
