import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nava Graha Lipi — நவ கிரக லிபி | Indian Astronomical & Historical Script Initiative',
  description:
    'An open-source Indian astronomical symbol system and digital epigraphy initiative rooted in Pallava Grantha, Grantha, Vatteluttu, and Tamil-Brahmi script traditions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
        <div className="flex min-h-screen">
          <Suspense fallback={<div className="w-64 bg-[var(--color-sidebar-bg)] shrink-0 h-screen hidden lg:block" />}>
            <Sidebar />
          </Suspense>
          <div className="flex-1 flex flex-col min-w-0">
            <Header />
            <main className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
