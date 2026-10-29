/**
 * loadCatalog — the catalogue shipped with the app: every file under
 * `catalog/`, bundled as text at build time (doc 186 §3). No network.
 *
 * @module catalog/loadCatalog
 */
import { parseCatalog } from './catalogModel';
import type { Catalog } from './types';

const FILES = import.meta.glob('../../catalog/*/*/*', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

let cached: Catalog | null = null;

/** The shipped catalogue, read once. */
export function shippedCatalog(): Catalog {
  if (!cached) {
    cached = parseCatalog(FILES);
    for (const r of cached.refused) console.warn(`[style-shelf] catalogue entry refused: ${r.path}: ${r.reason}`);
  }
  return cached;
}
