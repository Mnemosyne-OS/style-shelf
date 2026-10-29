/**
 * contribConfig — the public repository that receives the catalogue's pull
 * requests (doc 186 §7). Values only.
 *
 * Set on 2026-10-29: github.com/Mnemosyne-OS/style-shelf (doc 186 §19). Null
 * hides the « Propose » button and the Contributions tab, so no button ever
 * leads nowhere.
 *
 * @module contrib/contribConfig
 */

export interface ContribRepo {
  owner: string;
  repo: string;
  /** The branch a proposal targets. */
  branch: string;
  /** Where `catalog/` sits in that repository (`catalog`, or `apps/style-shelf/catalog`). */
  catalogDir: string;
}

export const CONTRIB_REPO: ContribRepo | null = { owner: 'Mnemosyne-OS', repo: 'style-shelf', branch: 'main', catalogDir: 'catalog' };
