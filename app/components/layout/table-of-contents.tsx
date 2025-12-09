import { useEffect, useState } from 'react';
import { cn } from '~/lib/utils';

interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -66%',
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-2">
      <p className="font-medium text-sm text-foreground mb-4">On this page</p>
      <nav className="space-y-1">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={cn(
              'block w-full text-left text-sm py-1.5 px-2 rounded hover:bg-accent hover:text-accent-foreground transition-colors',
              item.level === 3 && 'pl-6',
              activeId === item.id ? 'text-primary font-medium bg-accent' : 'text-muted-foreground'
            )}
          >
            {item.title}
          </button>
        ))}
      </nav>
    </div>
  );
}
