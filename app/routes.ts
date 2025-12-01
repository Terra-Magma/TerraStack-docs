import { index, layout, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  layout('routes/_layout.tsx', [
    index('routes/home.tsx'),
    route('terrastack', 'routes/terrastack.tsx'),
    route('adoption', 'pages/adoption/index.tsx'),
    route('adoption/current-adoption', 'pages/adoption/current-adoption.tsx'),
    route('our-vision', 'pages/our-vision/index.tsx'),
    route('our-vision/history', 'pages/our-vision/history.tsx'),
    route('our-vision/problems', 'pages/our-vision/problems.tsx'),
    route('our-vision/solutions', 'pages/our-vision/solutions.tsx'),
    route('our-vision/schedule', 'pages/our-vision/schedule.tsx'),
    route('our-vision/supported-platforms', 'pages/our-vision/supported-platforms.tsx'),
    route('our-vision/what-about-existing-protocols', 'pages/our-vision/what-about-existing-protocols.tsx'),
    route('docs', 'pages/docs.tsx'),
    route('examples', 'pages/examples.tsx'),
    route('installation', 'pages/installation.tsx'),
    route('products', 'pages/products.tsx'),
    route('services', 'pages/services.tsx'),
    route('support', 'pages/support.tsx'),
    route('component-testing', 'pages/component-testing.tsx'),

    route('*', 'routes/not-found.tsx'),
  ]),
] satisfies RouteConfig;
