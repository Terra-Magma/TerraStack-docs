import { index, layout, prefix, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  layout('terramagma/_layout.tsx', [
    index('terramagma/home.tsx'),
    route('component-testing', 'components/ui/component-testing.tsx'),
    route('products', 'terramagma/pages/products.tsx'),
    route('services', 'terramagma/pages/services.tsx'),
    route('support', 'terramagma/pages/support.tsx'),

    layout('terrastack/_layout.tsx', [
      ...prefix('terrastack', [
        index('terrastack/home.tsx'),
        route('adoption', 'terrastack/pages/adoption/index.tsx'),
        route('adoption/current-adoption', 'terrastack/pages/adoption/current-adoption.tsx'),
        route('our-vision', 'terrastack/pages/our-vision/index.tsx'),
        route('our-vision/history', 'terrastack/pages/our-vision/history.tsx'),
        route('our-vision/problems', 'terrastack/pages/our-vision/problems.tsx'),
        route('our-vision/solution', 'terrastack/pages/our-vision/solutions.tsx'),
        route('our-vision/schedule', 'terrastack/pages/our-vision/schedule.tsx'),
        route('our-vision/supported-platforms', 'terrastack/pages/our-vision/supported-platforms.tsx'),
        route(
          'our-vision/what-about-existing-protocols',
          'terrastack/pages/our-vision/what-about-existing-protocols.tsx'
        ),
        route('docs', 'terrastack/pages/docs.tsx'),
        route('examples', 'terrastack/pages/examples.tsx'),
        route('installation', 'terrastack/pages/installation.tsx'),

        route('globe', 'terrastack/pages/globe.tsx'),
      ]),
    ]),

    route('*', 'terramagma/not-found.tsx'),
  ]),
] satisfies RouteConfig;
