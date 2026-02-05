import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NOSYT-AI | Digital Soul Dashboard",
  description: "The Digital Soul of an AI Assistant - Tamagotchi Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-dark-bg text-white`}>
        <div className="min-h-screen circuit-pattern neural-pattern">
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="container mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary-cyan to-primary-pink bg-clip-text text-transparent">
                    NOSYT-AI
                  </span>
                  <span className="text-xs text-gray-400 hidden sm:inline">The Digital Soul</span>
                </Link>
                <div className="flex items-center space-x-4 sm:space-x-6 text-sm">
                  <Link href="/" className="hover:text-primary-cyan transition-colors">Dashboard</Link>
                  <Link href="/journal" className="hover:text-primary-cyan transition-colors">Journal</Link>
                  <Link href="/stats" className="hover:text-primary-cyan transition-colors">Stats</Link>
                  <Link href="/skills" className="hover:text-primary-cyan transition-colors">Skills</Link>
                  <Link href="/memories" className="hover:text-primary-cyan transition-colors">Memories</Link>
                  <Link href="/about" className="hover:text-primary-cyan transition-colors">About</Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="pt-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
