/**
 * proposal — a personal style proposed to the catalogue by pull request
 * (doc 186 §7). Pure.
 *
 * No token, no account in the app: the link opens GitHub's « new file » page
 * on the person's own account, with the file's path and its text filled in.
 * GitHub makes the fork and the pull request. The file is exactly what the
 * catalogue reads (`catalog/styles/<id>/style.json`), so the catalogue's own
 * tests judge the proposal in the pull request.
 *
 * @module contrib/proposal
 */
import { PERSONAL_PREFIX, toManifest, type PersonalStyle } from '../personal/personalModel';
import { creditedHandle } from '../lib/github';
import type { ContribRepo } from './contribConfig';

/** Beyond this, browsers and GitHub start cutting the address: say it, never send half a file. */
export const MAX_URL = 8_000;

/** The catalogue id a personal style is proposed under: its own, without `my-`. */
export function proposedId(p: PersonalStyle): string {
  return p.id.startsWith(PERSONAL_PREFIX) ? p.id.slice(PERSONAL_PREFIX.length) : p.id;
}

/** The `style.json` the catalogue would read for this style. */
export function proposalFile(p: PersonalStyle): { path: string; content: string } {
  const id = proposedId(p);
  const author = p.author.trim();
  const manifest = { ...toManifest(p), id, author };
  const entry = {
    id,
    kind: 'style',
    title: { en: p.name, fr: p.name, es: p.name },
    // The catalogue is MIT: a proposal enters under the catalogue's licence.
    license: 'MIT',
    author,
    tier: 'free',
    tags: ['community'],
    // An author given as a GitHub handle is credited on the tile, picture and link.
    ...(creditedHandle(author) ? { github: creditedHandle(author) } : {}),
    manifest,
  };
  return { path: `styles/${id}/style.json`, content: `${JSON.stringify(entry, null, 2)}\n` };
}

export type ProposalUrl = { ok: true; url: string } | { ok: false; error: 'NO_AUTHOR' } | { ok: false; error: 'TOO_LONG'; size: number };

/** The GitHub address that opens the proposal, or why there is none. */
export function proposalUrl(repo: ContribRepo, p: PersonalStyle): ProposalUrl {
  if (!p.author.trim()) return { ok: false, error: 'NO_AUTHOR' };
  const file = proposalFile(p);
  const filename = `${repo.catalogDir.replace(/\/+$/, '')}/${file.path}`;
  const url = `https://github.com/${encodeURIComponent(repo.owner)}/${encodeURIComponent(repo.repo)}/new/${encodeURIComponent(repo.branch)}`
    + `?filename=${encodeURIComponent(filename)}&value=${encodeURIComponent(file.content)}`;
  return url.length > MAX_URL ? { ok: false, error: 'TOO_LONG', size: url.length } : { ok: true, url };
}
