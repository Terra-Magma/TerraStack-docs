import '@/globals.css';
import '@/globals.scss';
import { Header } from '@/components/layout/header';
import { Outlet } from 'react-router';
import type { Route } from '../../.react-router/types/app/routes/+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'TerraStack Documentation' },
    {
      name: 'description',
      content: 'Comprehensive documentation for TerraStack - the next generation IPv4 alternative',
    },
  ];
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="">
        <div className="min-h-screen bg-background">
          <Header />
          <div className="flex">
            <main className="flex-1 w-max">
              <Outlet />
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
