import { index, layout, prefix, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  layout('terramagma/_layout.tsx', [
    index('terramagma/home.tsx'),
    route('component-testing', 'components/ui/component-testing.tsx'),
    route('products', 'terramagma/pages/products.tsx'),
    route('services', 'terramagma/pages/services.tsx'),
    route('support', 'terramagma/pages/support.tsx'),
    route('terra-register', 'terraregister/home.tsx'),
    route('terra-suite', 'terrasuite/home.tsx'),
    route('about', 'about/home.tsx'),
    route('contact', 'contact/home.tsx'),
    ...prefix('terra-stack', [
      index('terrastack/home.tsx'),
      route('docs', 'terrastack/pages/docs.tsx'),
      route('examples', 'terrastack/pages/examples.tsx'),
      route('installation', 'terrastack/pages/installation.tsx'),
    ]),

    route('*', 'terramagma/not-found.tsx'),
  ]),
] satisfies RouteConfig;
