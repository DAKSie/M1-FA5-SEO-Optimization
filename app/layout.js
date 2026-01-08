import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Cozy Corner",
  description: "A cozy online bookstore with hand-picked recommendations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-neutral-50 via-stone-50 to-neutral-100`}
      >
        <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md shadow-sm">
          <div className="mx-auto max-w-6xl flex justify-between items-center p-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <span className="text-white text-lg font-bold">📚</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">The Cozy Corner</h1>
            </Link>
            <nav className="flex gap-6" aria-label="Main navigation">
              <Link href="/" className="text-sm font-medium text-zinc-700 hover:text-amber-600 transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all"></span>
              </Link>
              <Link href="/about" className="text-sm font-medium text-zinc-700 hover:text-amber-600 transition-colors relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all"></span>
              </Link>
              <Link href="/books" className="text-sm font-medium text-zinc-700 hover:text-amber-600 transition-colors relative group">
                Books
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all"></span>
              </Link>
              <Link href="/contact" className="text-sm font-medium text-zinc-700 hover:text-amber-600 transition-colors relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all"></span>
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl p-6 min-h-[calc(100vh-180px)]">{children}</main>

        <footer className="border-t bg-white/80 backdrop-blur-sm mt-12">
          <div className="mx-auto max-w-6xl py-8 px-4">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-amber-600 to-orange-600 rounded flex items-center justify-center">
                  <span className="text-white text-sm">📚</span>
                </div>
                <span className="font-semibold text-zinc-700">The Cozy Corner</span>
              </div>
              <p className="text-sm text-zinc-600">Your destination for handpicked book recommendations</p>
              <p className="text-sm text-zinc-500">© 2026 The Cozy Corner. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
