'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from '@/components/theme-toggle';
import { Menu, Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import DevelopmentButton from '@/components/ui/DevelopmentButton';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = [
    { title: 'Packages', href: '/packages' },
    { title: 'Products', href: '/products' },
    { title: 'Services', href: '/services' },
    { title: 'Support', href: '/support' },
    { title: 'Documentation', href: '/docs' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-6">
        <div className="flex items-center gap-6 flex-1">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TS</span>
            </div>
            <span className="font-semibold text-lg">TerraStack</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm">
            {items.map((item) => {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.title}
                </Link>
              );
            })}
            <div key={'component-testing'}>
              <DevelopmentButton
                link={'/component-testing'}
                title={'Component Testing'}
              />
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 relative">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search documentation..."
              className="w-64 pl-10"
            />
          </div>

          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn('lg:hidden border-t bg-background/95 backdrop-blur', isMenuOpen ? 'block' : 'hidden')}>
        <nav className="container px-6 py-4 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search documentation..."
              className="pl-10"
            />
          </div>
          <div className="space-y-2">
            {items.map((item) => {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
