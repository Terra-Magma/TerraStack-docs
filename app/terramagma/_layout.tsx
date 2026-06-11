import { Header } from '~/components/layout/header';
import { Outlet } from 'react-router';
import { ThemeProvider } from '~/components/theme';
import * as React from 'react';

export function meta() {
  return [
    { title: 'Terra Stack Documentation' },
    {
      name: 'description',
      content: 'Comprehensive documentation for Terra Stack - the next generation IPv4 alternative',
    },
  ];
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [navMenuOpenProducts, setNavMenuOpenProducts] = React.useState(false);

  const items = [
    { title: 'Packages', href: '/packages', children: [{ title: 'Terra Suite', href: '/terra-suite' }] },
    {
      title: 'Products',
      href: '/products',
      children: [{ title: 'Terra Stack', href: '/terra-stack' }],
      menuOpen: navMenuOpenProducts,
      setNavMenuOpen: setNavMenuOpenProducts,
    },
    { title: 'Services', href: '/services', children: [{ title: 'Terra Register', href: '/terra-register' }] },
    { title: 'Support', href: '/support' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background scroll-smooth">
        <div className="flex">
          <main className="flex-1 w-max mt-16">
            <Outlet />
          </main>
        </div>
        <Header
          items={items}
          title="Terra Magma"
          root={true}
        />
      </div>
    </ThemeProvider>
  );
}
