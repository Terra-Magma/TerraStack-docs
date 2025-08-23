'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Book, ChevronDown, ChevronRight, Code, Users, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationItems = [
  {
    title: 'Getting Started',
    icon: Book,
    items: [
      { title: 'Introduction', href: '/' },
      { title: 'Installation', href: '/installation' },
      { title: 'Quick Start', href: '/quick-start' },
      { title: 'Configuration', href: '/configuration' },
    ],
  },
  {
    title: 'Core Concepts',
    icon: Zap,
    items: [
      { title: 'Address Structure', href: '/concepts/address-structure' },
      { title: 'Routing Protocol', href: '/concepts/routing' },
      { title: 'Security Model', href: '/concepts/security' },
      { title: 'Performance', href: '/concepts/performance' },
    ],
  },
  {
    title: 'API Reference',
    icon: Code,
    items: [
      { title: 'Network API', href: '/api/network' },
      { title: 'Address Management', href: '/api/address' },
      { title: 'Routing Control', href: '/api/routing' },
      { title: 'Security Functions', href: '/api/security' },
    ],
  },
  {
    title: 'Community',
    icon: Users,
    items: [
      { title: 'Contributing', href: '/community/contributing' },
      { title: 'Discussions', href: '/community/discussions' },
      { title: 'Support', href: '/community/support' },
      { title: 'Changelog', href: '/community/changelog' },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<string[]>(['Getting Started']);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => (prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]));
  };

  return (
    <aside className="fixed left-0 top-16 z-30 hidden h-[calc(100vh-4rem)] w-64 shrink-0 border-r bg-background lg:block">
      <div className="h-full overflow-auto p-6">
        <nav className="space-y-6">
          {navigationItems.map((section) => {
            const isExpanded = expandedSections.includes(section.title);
            const Icon = section.icon;

            return (
              <div key={section.title}>
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex w-full items-center justify-between py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    {section.title}
                  </div>
                  {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </button>

                {isExpanded && (
                  <div className="mt-2 space-y-1 pl-7">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          'block py-2 px-3 text-sm rounded-md transition-colors hover:bg-accent hover:text-accent-foreground',
                          pathname === item.href
                            ? 'bg-accent text-accent-foreground font-medium'
                            : 'text-muted-foreground'
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
