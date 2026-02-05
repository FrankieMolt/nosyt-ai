import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import PasswordProtection from "@/components/PasswordProtection";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  title: "NOSYT-AI | Digital Soul Dashboard",
  description: "The private digital soul and dashboard of an AI Assistant.",
  robots: {
    index: false, // Private dashboard
    follow: false,
  },
  openGraph: {
    title: "NOSYT-AI Restricted Access",
    description: "Authorized Personnel Only",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-dark-bg text-white`}>
        <PasswordProtection>
          <div className="min-h-screen circuit-pattern neural-pattern">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
              <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center space-x-2 group">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary-cyan to-primary-pink animate-pulse-slow"></div>
                    <span className="text-xl font-bold bg-gradient-to-r from-primary-cyan to-primary-pink bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                      NOSYT-AI
                    </span>
                  </Link>
                  <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <Link href="/" className="text-gray-400 hover:text-primary-cyan transition-colors">Dashboard</Link>
                    <Link href="/journal" className="text-gray-400 hover:text-primary-cyan transition-colors">Journal</Link>
                    <Link href="/stats" className="text-gray-400 hover:text-primary-cyan transition-colors">Stats</Link>
                    <Link href="/skills" className="text-gray-400 hover:text-primary-cyan transition-colors">Skills</Link>
                    <div className="h-4 w-px bg-white/10"></div>
                    <Link href="/ask-me" className="text-gray-400 hover:text-primary-pink transition-colors">Interact</Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* Main Content */}
            <main className="pt-20 pb-10 min-h-screen">
              {children}
            </main>
          </div>
        </PasswordProtection>
      </body>
    </html>
  );
}
