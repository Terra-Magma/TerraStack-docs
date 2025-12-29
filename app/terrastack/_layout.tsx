import { Header } from '~/components/layout/header';
import { Outlet } from 'react-router';
import { ThemeProvider } from '~/components/theme';
import * as React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [navMenuOpenVision, setNavMenuOpenVision] = React.useState(false);
  const [navMenuOpenAdoption, setNavMenuOpenAdoption] = React.useState(false);

  const items = [
    { title: 'Documentation', href: '/docs' },
    {
      title: 'Vision',
      href: '/our-vision',
      children: [
        { title: 'A Brief History', href: '/our-vision/history' },
        { title: 'Problems', href: '/our-vision/problems' },
        { title: 'Solution', href: '/our-vision/solution' },
        { title: 'Supported Platforms', href: '/our-vision/supported-platforms' },
        { title: 'Existing Protocols', href: '/our-vision/what-about-existing-protocols' },
        { title: 'Schedule', href: '/our-vision/schedule' },
      ],
      menuOpen: navMenuOpenVision,
      setNavMenuOpen: setNavMenuOpenVision,
    },
    {
      title: 'Adoption',
      href: '/adoption',
      children: [
        { title: 'Early Adoption', href: '/adoption/early-adoption' },
        { title: 'Current Adoption', href: '/adoption/current-adoption' },
      ],
      menuOpen: navMenuOpenAdoption,
      setNavMenuOpen: setNavMenuOpenAdoption,
    },
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <div className="flex">
          <main className="flex-1 w-max mt-16">
            <Outlet />
          </main>
        </div>
        <Header
          items={items}
          title="TerraStack"
          root={false}
          prefix="/terrastack"
        />
      </div>
    </ThemeProvider>
  );
}
