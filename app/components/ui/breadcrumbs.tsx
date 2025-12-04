import { ChevronRight } from 'lucide-react';
import { cn } from '~/lib/utils';
import { Link } from '@mui/material';

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav className={cn('flex items-center space-x-1 text-sm', className)}>
      {items.map((item, index) => (
        <div
          key={item.href}
          className="flex items-center"
        >
          {index > 0 && <ChevronRight className="h-6 w-6 text-muted-foreground" />}
          {item.current ? (
            <span className="text-foreground font-medium !text-lg ml-2">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors !text-lg"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
