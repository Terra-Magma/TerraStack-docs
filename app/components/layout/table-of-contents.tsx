import { useEffect, useRef, useState } from 'react';
import { cn } from '~/lib/utils';

interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

const SECTION_SCROLL_OFFSET = 96;

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const tocNavRef = useRef<HTMLElement>(null);

  const scrollTocItemIntoView = (id: string) => {
    const container = tocNavRef.current;
    const element = document.getElementById(`toc-${id}`);

    if (!container || !element) return;

    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    const containerTop = container.scrollTop;
    const containerBottom = containerTop + container.clientHeight;
    const elementTop = elementRect.top - containerRect.top + containerTop;
    const elementBottom = elementTop + elementRect.height;
    const scrollPadding = 8;

    if (elementTop < containerTop + scrollPadding) {
      container.scrollTo({
        top: Math.max(elementTop - scrollPadding, 0),
        behavior: 'smooth',
      });
    } else if (elementBottom > containerBottom - scrollPadding) {
      container.scrollTo({
        top: elementBottom - container.clientHeight + scrollPadding,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            scrollTocItemIntoView(entry.target.id);
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
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - SECTION_SCROLL_OFFSET,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="space-y-2">
      <p className="font-medium text-sm text-foreground mb-4">On this page</p>
      <nav ref={tocNavRef} className="max-h-[calc(100vh-12rem)] space-y-1 overflow-y-auto pr-1">
        {items.map((item) => (
          <button
            key={item.id}
            id={`toc-${item.id}`}
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
