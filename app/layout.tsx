import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Gym Name",
  description: "Simple and modern gym website built for a clean online presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
          <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-slate-50/75 py-4 backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-950/70">
            <div className="flex items-center justify-between gap-6">
              <Link href="/" className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Your Gym Name
              </Link>
              <nav className="flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-300 sm:gap-8">
                <Link href="/" className="transition-colors hover:text-slate-900 dark:hover:text-slate-100">
                  Home
                </Link>
                <Link href="/services" className="transition-colors hover:text-slate-900 dark:hover:text-slate-100">
                  Services
                </Link>
                <Link href="/contact" className="transition-colors hover:text-slate-900 dark:hover:text-slate-100">
                  Contact
                </Link>
              </nav>
            </div>
          </header>
          <main className="flex-1 py-16 sm:py-20 animate-page-in">{children}</main>
          <footer className="border-t border-slate-200 py-5 text-center text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400">
            Copyright {new Date().getFullYear()} Your Gym Name
          </footer>
        </div>
      </body>
    </html>
  );
}
