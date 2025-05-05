'use client';

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/lib/themes';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import Loading from './loading'; // Import Loading component from loading.tsx
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Frontend Developer Portfolio',
//   description: 'Professional portfolio showcasing frontend development skills, projects, and expertise.',
//   keywords: ['frontend developer', 'web developer', 'portfolio', 'React', 'Next.js', 'JavaScript', 'TypeScript'],
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  // Use useEffect to simulate loading phase, then switch to the main content
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 10000); // Example: 1.5s loading time
    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={ `${inter.className} min-h-screen flex flex-col` }>
        { loading ? (
          <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>helllllllllllllllllllllllllllllll</p> // Show Loading component when loading is true
        ) : (
          <ThemeProvider>
            <Navbar />
            <main className="flex-grow">{ children }</main>
            <Footer />
            <Toaster />
          </ThemeProvider>
        ) }
      </body>
    </html>
  );
}
