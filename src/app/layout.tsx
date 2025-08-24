import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TerraStack Documentation',
  description: 'Comprehensive documentation for TerraStack - the next generation IPv4 replacement',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="min-h-screen bg-background">
            <Header />
            <div className="flex">
              <main className="flex-1 w-max">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
