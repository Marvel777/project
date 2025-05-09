import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from './../lib/themes';
import { ThemeToggle } from './../components/theme-toggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Frontend Developer Portfolio',
  description: 'Professional portfolio showcasing frontend development skills, projects, and expertise.',
  keywords: ['frontend developer', 'web developer', 'portfolio', 'React', 'Next.js', 'JavaScript', 'TypeScript'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={ `${inter.className} min-h-screen flex flex-col` }>
        <ThemeProvider defaultTheme="system">
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>
          <Navbar />
          <main className="flex-grow">
            { children }
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}