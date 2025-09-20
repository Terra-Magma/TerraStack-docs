import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { TableOfContents } from '@/components/layout/table-of-contents';
import { PageNavigation } from '@/components/layout/page-navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AdoptionVisual from '@/components/visuals/adoption';

const tableOfContents = [
  { id: 'overview', title: 'Overview', level: 2 },
  { id: 'key-features', title: 'Key Features', level: 2 },
  { id: 'why-terrastack', title: 'Why TerraStack?', level: 2 },
  { id: 'getting-started', title: 'Getting Started', level: 2 },
];

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex-1 px-6 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: 'Documentation', href: '/docs' },
            { label: 'Introduction', href: '/intro', current: true },
          ]}
        />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <Badge
              variant="secondary"
              className="text-sm"
            >
              v1.0.0
            </Badge>
            <Badge
              variant="outline"
              className="text-sm text-green-600 border-green-200 bg-green-50 dark:text-green-400 dark:border-green-800 dark:bg-green-950"
            >
              Latest
            </Badge>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-4">Welcome to TerraStack</h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Description coming soon...
            {/* TODO: Fill out */}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
            >
              View on GitHub
            </Button>
          </div>

          <section
            id="overview"
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Coming soon...
              {/* TODO: Fill out */}
            </p>
          </section>

          <section
            id="key-features"
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              Coming soon...
              {/* TODO: Fill out */}
            </div>
          </section>

          <section
            id="why-terrastack"
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-4">Why TerraStack?</h2>
            <div className="bg-muted/50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
              <p className="text-sm text-muted-foreground">
                Coming soon...
                {/* TODO: Fill out */}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Current Adoption</h2>
            <AdoptionVisual />
            {/*    TODO: get this data from api */}
          </section>

          <section
            id="getting-started"
            className="my-12"
          >
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <p className="text-muted-foreground mb-6">
              Ready to implement TerraStack in your network? Follow our comprehensive guides to get up and running
              quickly.
            </p>

            <div className="bg-card border rounded-lg p-6">
              <h4 className="font-medium mb-3">Quick Start Options</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="justify-start h-auto p-4 flex-col items-start"
                >
                  <span className="font-medium">Installation Guide</span>
                  <span className="text-sm text-muted-foreground mt-1">Step-by-step setup instructions</span>
                </Button>
                <Button
                  variant="outline"
                  className="justify-start h-auto p-4 flex-col items-start"
                >
                  <span className="font-medium">API Reference</span>
                  <span className="text-sm text-muted-foreground mt-1">Complete API documentation</span>
                </Button>
              </div>
            </div>
          </section>
        </div>

        <PageNavigation
          prev={null}
          next={{ title: 'Installation', href: '/installation' }}
        />
      </div>

      <div className="hidden xl:block w-64 flex-shrink-0">
        <div className="sticky top-24 p-6">
          <TableOfContents items={tableOfContents} />
        </div>
      </div>
    </div>
  );
}
