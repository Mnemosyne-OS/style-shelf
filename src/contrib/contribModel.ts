/**
 * contribModel — the merged pull requests of the catalogue's repository, as
 * Lab 3D planned them (doc 166 §7, doc 186 §7).
 *
 * Read from GitHub's public API without a token (60 calls an hour), kept an
 * hour in the page's storage.
 *
 * 🎭 Offline or over the limit: the last list kept, with its date, or
 * « list unavailable ». Never an empty list, which would read « nobody has
 * contributed ».
 *
 * ⚠️ Shown is not shipped: a merged pull request is listed at once, its entry
 * arrives with the next build of the app.
 *
 * @module contrib/contribModel
 */
import type { ContribRepo } from './contribConfig';

export interface Contribution {
  number: number;
  title: string;
  author: string;
  mergedAt: string;
  url: string;
}

export interface ContribCache {
  at: string;
  items: Contribution[];
}

export type ContribView =
  | { kind: 'loading' }
  | { kind: 'list'; items: Contribution[]; at: string; stale: boolean }
  | { kind: 'unavailable'; reason: string };

export const CONTRIB_CACHE_KEY = 'style-shelf.contributions';
export const CONTRIB_TTL_MS = 60 * 60 * 1000;
export const CONTRIB_FETCH_MS = 15_000;

/** The merged pull requests of a GitHub `pulls` answer, newest first, or null when it is not one. */
export function parsePulls(json: unknown): Contribution[] | null {
  if (!Array.isArray(json)) return null;
  const out: Contribution[] = [];
  for (const pr of json) {
    if (typeof pr !== 'object' || pr === null) continue;
    const r = pr as Record<string, unknown>;
    if (typeof r.merged_at !== 'string' || typeof r.number !== 'number' || typeof r.title !== 'string' || typeof r.html_url !== 'string') continue;
    const user = r.user as Record<string, unknown> | null;
    out.push({ number: r.number, title: r.title, author: typeof user?.login === 'string' ? user.login : '?', mergedAt: r.merged_at, url: r.html_url });
  }
  return out.sort((a, b) => (a.mergedAt < b.mergedAt ? 1 : a.mergedAt > b.mergedAt ? -1 : 0));
}

export function parseCache(text: string | null): ContribCache | null {
  if (!text) return null;
  try {
    const v = JSON.parse(text) as Partial<ContribCache>;
    const items = parsePullsCache(v.items);
    return typeof v.at === 'string' && items ? { at: v.at, items } : null;
  } catch (err) {
    console.warn('[style-shelf] contributions cache unreadable:', err instanceof Error ? err.message : err);
    return null;
  }
}

function parsePullsCache(v: unknown): Contribution[] | null {
  if (!Array.isArray(v)) return null;
  return v.every((c) => c && typeof c.number === 'number' && typeof c.title === 'string' && typeof c.mergedAt === 'string' && typeof c.url === 'string')
    ? (v as Contribution[])
    : null;
}

export interface ContribDeps {
  fetch: (url: string, init: { signal: AbortSignal; headers: Record<string, string> }) => Promise<{ ok: boolean; status: number; json: () => Promise<unknown> }>;
  now: () => Date;
  read: () => string | null;
  write: (text: string) => void;
}

/** The list to show: the kept one while fresh, else GitHub's, else the kept one said as old. */
export async function loadContributions(repo: ContribRepo, deps: ContribDeps): Promise<ContribView> {
  const cache = parseCache(deps.read());
  const now = deps.now();
  if (cache && now.getTime() - Date.parse(cache.at) < CONTRIB_TTL_MS) return { kind: 'list', items: cache.items, at: cache.at, stale: false };

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), CONTRIB_FETCH_MS);
  let reason: string;
  try {
    const res = await deps.fetch(
      `https://api.github.com/repos/${encodeURIComponent(repo.owner)}/${encodeURIComponent(repo.repo)}/pulls?state=closed&per_page=50`,
      { signal: ctrl.signal, headers: { Accept: 'application/vnd.github+json' } },
    );
    if (res.ok) {
      const items = parsePulls(await res.json());
      if (items) {
        const at = now.toISOString();
        deps.write(JSON.stringify({ at, items }));
        return { kind: 'list', items, at, stale: false };
      }
      reason = 'not a list of pull requests';
    } else {
      reason = `HTTP ${res.status}`;
    }
  } catch (err) {
    reason = ctrl.signal.aborted ? 'TIMEOUT' : err instanceof Error ? err.message : String(err);
  } finally {
    clearTimeout(timer);
  }
  console.warn(`[style-shelf] contributions not read: ${reason}`);
  return cache ? { kind: 'list', items: cache.items, at: cache.at, stale: true } : { kind: 'unavailable', reason };
}
