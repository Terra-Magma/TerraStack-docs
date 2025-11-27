import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PageNavigationItem {
  title: string;
  href: string;
}

interface PageNavigationProps {
  prev?: PageNavigationItem | null;
  next?: PageNavigationItem | null;
}

export function PageNavigation({ prev, next }: PageNavigationProps) {
  return (
    <div className="flex justify-between items-center pt-8 mt-12 border-t">
      <div className="flex-1">
        {prev && (
          <Link href={prev.href}>
            <Button
              variant="ghost"
              className="group p-0 h-auto"
            >
              <div className="flex items-center gap-2 p-4 rounded-lg hover:bg-accent transition-colors">
                <ChevronLeft className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Previous</div>
                  <div className="font-medium group-hover:text-foreground">{prev.title}</div>
                </div>
              </div>
            </Button>
          </Link>
        )}
      </div>

      <div className="flex-1 flex justify-end">
        {next && (
          <Link href={next.href}>
            <Button
              variant="ghost"
              className="group p-0 h-auto"
            >
              <div className="flex items-center gap-2 p-4 rounded-lg hover:bg-accent transition-colors">
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Next</div>
                  <div className="font-medium group-hover:text-foreground">{next.title}</div>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
              </div>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
