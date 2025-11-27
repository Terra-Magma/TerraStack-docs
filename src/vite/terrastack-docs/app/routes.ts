import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  route('/', 'routes/_layout.tsx', [
    index('routes/home.tsx'),
    route('terrastack', 'routes/terrastack.tsx'),
    route('*', 'routes/not-found.tsx'),
  ]),
] satisfies RouteConfig;
