import { Header } from '~/components/layout/header';
import { Outlet } from 'react-router';
import { ThemeProvider, useTheme } from '~/components/theme';
import type { Route } from '../../+types/root';
import { useLoaderData } from 'react-router-dom';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'TerraStack Documentation' },
    {
      name: 'description',
      content: 'Comprehensive documentation for TerraStack - the next generation IPv4 alternative',
    },
  ];
}

export async function clientLoader({ request }: Route.ClientLoaderArgs) {
  return { url: request.url };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = useTheme()?.theme ?? 'light';
  const { url } = useLoaderData() as Awaited<ReturnType<typeof clientLoader>>;
  const headerNamespace = url.includes('/terrastack') ? 'terrastack' : 'terramagma';

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header namespace={headerNamespace} />
        <div className="flex">
          <main className="flex-1 w-max">
            <Outlet />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
