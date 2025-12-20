import { createRouter } from '~/routes';
import type { RouteConfigEntry } from '@react-router/dev/routes';

export function terrastackRoutes(): RouteConfigEntry[] {
  return createRouter('terrastack', 'terrastack', [{ route: '', path: 'home.tsx', index: true }]);
}
