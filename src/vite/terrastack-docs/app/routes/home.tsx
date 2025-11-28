import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { TableOfContents } from '@/components/layout/table-of-contents';
import { PageNavigation } from '@/components/layout/page-navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
            Terra Stack is a “clean-slate” network protocol stack. It answers the question:
            <br />
            <i>
              &nbsp;&nbsp;&nbsp;&nbsp; If we could redo the core protocol of the Internet from scratch, what would it
              look like?
            </i>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              variant="default"
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
            <h2 className="text-2xl font-semibold mb-4">Our Goal</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              The first iteration of any technology is never perfect. It takes several iterations before the technology
              starts to reach its final form. The goal of Terra Stack is to provide a model for a more advanced
              iteration of a protocol stack that is capable of running the Internet.
            </p>
          </section>

          <section
            id="key-features"
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6">What makes us different?</h2>
            <div className="">
              <p>
                Terra Stack combines currently disparate technologies into a single multi-threaded portable executable.
              </p>
              <ol>
                <li>
                  Naming - Names are universally UNICODE and are the preferred method of identification of process
                  connection points, etc.
                </li>
                <li>
                  Numbering - numbers are always of sufficient size to eliminate the possibility of regrets in design
                  choices, say, 100 years from now.
                </li>
                <li>
                  Addressing - Both the textual and the digital addressing schemes for identifying nodes are based on
                  theoretical principles and bring clarity to the nature of addressing.
                </li>
                <li>
                  Routing - Routing is based on theoretical principles and eliminates some of the peculiarities
                  associated with IPv4 such as high-latency between nodes that are geographically adjacent.
                </li>
                <li>Security - A full public-key infrastructure eliminates the need for usernames and passwords.</li>
                <li>
                  Mobility - Generalized mobility permits applications to remain connected even as wireless interfaces
                  make/break their links.
                </li>
                <li>
                  Rate-Control - The rate-control algorithm finally allows parity between the rate that an application
                  experiences and the theoretical maximum of the underlying hardware.
                </li>
                <li>
                  Large-Scale Multicast - In full-deployment of Terra Stack, a single source node would be able to
                  multicast to 1,000,000 target nodes with essentially no performance degradation.
                </li>
              </ol>
            </div>
          </section>

          <section
            id="why-terrastack"
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-4">Why TerraStack?</h2>
            <div className="bg-muted/50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
              <p className="text-sm text-muted-foreground">
                Terra Stack is the seed of advanced distributed Internet applications. It might be helpful to become
                familiar with it before Terra Magma starts delivering those applications.
              </p>
            </div>
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
