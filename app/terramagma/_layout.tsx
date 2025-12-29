import { Header } from '~/components/layout/header';
import { Outlet } from 'react-router';
import { ThemeProvider, useTheme } from '~/components/theme';
import type { Route } from '../../.react-router/types/app/+types/root';
import * as React from 'react';

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
  const theme = useTheme()?.theme ?? 'light';

  const [navMenuOpenProducts, setNavMenuOpenProducts] = React.useState(false);

  const items = [
    { title: 'Packages', href: '/packages' },
    {
      title: 'Products',
      href: '/products',
      children: [{ title: 'TerraStack', href: '/terrastack' }],
      menuOpen: navMenuOpenProducts,
      setNavMenuOpen: setNavMenuOpenProducts,
    },
    { title: 'Services', href: '/services' },
    { title: 'Support', href: '/support' },
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header
          items={items}
          title="TerraMagma"
          root={true}
        />
        <div className="flex">
          <main className="flex-1 w-max">
            <Outlet />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
