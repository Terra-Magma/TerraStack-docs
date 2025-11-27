import { index, layout, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  layout('routes/_layout.tsx', [
    index('routes/home.tsx'),
    route('terrastack', 'routes/terrastack.tsx'),
    route('*', 'routes/not-found.tsx'),
  ]),
] satisfies RouteConfig;
