import { describe, expect, it, vi } from 'vitest';
import { parseCatalog } from '../catalog/catalogModel';
import type { StyleEntry } from '../catalog/types';
import { createPersonal } from '../personal/personalModel';
import type { ContribRepo } from './contribConfig';
import { CONTRIB_TTL_MS, loadContributions, parsePulls, type ContribDeps } from './contribModel';
import { MAX_URL, proposalFile, proposalUrl } from './proposal';

const REPO: ContribRepo = { owner: 'Mnemosyne-OS', repo: 'style-shelf', branch: 'main', catalogDir: 'catalog' };
const night: StyleEntry = {
  id: 'hud-night', kind: 'style', title: { en: 'HUD night', fr: 'HUD de nuit', es: 'HUD nocturno' }, license: 'MIT', author: 'Mnemosyne OS', tier: 'free', tags: [],
  manifest: { id: 'hud-night', name: 'HUD night', version: '1.0.0', tokens: { '--accent': '#5fe3ff', '--bg-void': '#03060c' } },
};
const mine = { ...createPersonal(night, 'Soir bleu', new Set(), '2026-10-28T10:00:00.000Z'), author: 'tony' };

describe('a proposal by pull request', () => {
  it('is the very file the catalogue reads: it parses as a valid style under its own id', () => {
    const file = proposalFile(mine);
    expect(file.path).toBe('styles/soir-bleu/style.json');
    const catalog = parseCatalog({ [`catalog/${file.path}`]: file.content });
    expect(catalog.refused).toEqual([]);
    expect(catalog.entries[0]).toMatchObject({ id: 'soir-bleu', kind: 'style', author: 'tony', license: 'MIT' });
  });

  it('opens GitHub\'s new-file page on the repository, with the path and the text filled in', () => {
    const r = proposalUrl(REPO, mine);
    if (!r.ok) throw new Error(r.error);
    const url = new URL(r.url);
    expect(`${url.origin}${url.pathname}`).toBe('https://github.com/Mnemosyne-OS/style-shelf/new/main');
    expect(url.searchParams.get('filename')).toBe('catalog/styles/soir-bleu/style.json');
    expect(url.searchParams.get('value')).toBe(proposalFile(mine).content);
  });

  it('asks for an author first: the catalogue refuses an entry without one', () => {
    expect(proposalUrl(REPO, { ...mine, author: ' ' })).toEqual({ ok: false, error: 'NO_AUTHOR' });
  });

  it('says it is too long instead of sending half a file', () => {
    const big = { ...mine, tokens: { ...mine.tokens, '--font-ui': 'x'.repeat(MAX_URL) } };
    const r = proposalUrl(REPO, big);
    expect(r.ok).toBe(false);
    expect(!r.ok && r.error).toBe('TOO_LONG');
  });
});

const PULLS = [
  { number: 3, title: 'Add paper', merged_at: '2026-10-20T10:00:00Z', html_url: 'https://github.com/x/3', user: { login: 'ana' } },
  { number: 4, title: 'Closed unmerged', merged_at: null, html_url: 'https://github.com/x/4', user: { login: 'bo' } },
  { number: 5, title: 'Add neon', merged_at: '2026-10-25T10:00:00Z', html_url: 'https://github.com/x/5', user: { login: 'cy' } },
];

function deps(over: Partial<ContribDeps> & { stored?: string | null } = {}): ContribDeps & { written: string[] } {
  const written: string[] = [];
  return {
    written,
    fetch: vi.fn(async () => ({ ok: true, status: 200, json: async () => PULLS })),
    now: () => new Date('2026-10-28T10:00:00Z'),
    read: () => over.stored ?? null,
    write: (t) => { written.push(t); },
    ...over,
  };
}

describe('the contributions', () => {
  it('lists the merged pull requests only, newest first', () => {
    expect(parsePulls(PULLS)?.map((c) => c.number)).toEqual([5, 3]);
    expect(parsePulls({ message: 'rate limited' })).toBeNull();
  });

  it('reads GitHub and keeps the list', async () => {
    const d = deps();
    const v = await loadContributions(REPO, d);
    expect(v).toMatchObject({ kind: 'list', stale: false });
    expect(v.kind === 'list' && v.items.map((c) => c.author)).toEqual(['cy', 'ana']);
    expect(d.fetch).toHaveBeenCalledWith('https://api.github.com/repos/Mnemosyne-OS/style-shelf/pulls?state=closed&per_page=50', expect.anything());
    expect(JSON.parse(d.written[0]).items).toHaveLength(2);
  });

  it('serves a list younger than an hour without asking GitHub', async () => {
    const stored = JSON.stringify({ at: new Date(Date.parse('2026-10-28T10:00:00Z') - CONTRIB_TTL_MS + 60_000).toISOString(), items: [] });
    const d = deps({ stored });
    expect(await loadContributions(REPO, d)).toMatchObject({ kind: 'list', items: [], stale: false });
    expect(d.fetch).not.toHaveBeenCalled();
  });

  it('offline: the last list WITH its date, never an empty list', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    const stored = JSON.stringify({ at: '2026-10-01T00:00:00.000Z', items: [{ number: 3, title: 't', author: 'a', mergedAt: '2026-09-30T00:00:00Z', url: 'u' }] });
    const fail = vi.fn(async () => { throw new Error('Failed to fetch'); });
    expect(await loadContributions(REPO, deps({ stored, fetch: fail }))).toMatchObject({ kind: 'list', stale: true, at: '2026-10-01T00:00:00.000Z' });
    expect(await loadContributions(REPO, deps({ fetch: fail }))).toEqual({ kind: 'unavailable', reason: 'Failed to fetch' });
    const limited = vi.fn(async () => ({ ok: false, status: 403, json: async () => ({}) }));
    expect(await loadContributions(REPO, deps({ fetch: limited }))).toEqual({ kind: 'unavailable', reason: 'HTTP 403' });
  });
});
