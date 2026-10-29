/**
 * github — the GitHub account credited on an entry (doc 186 §21). Pure.
 *
 * GitHub serves every account's picture at `github.com/<handle>.png`, without
 * a token: the tile shows it beside the handle and links to the profile.
 *
 * @module lib/github
 */

/** A GitHub username: letters, digits and single dashes, 39 characters at most. */
const HANDLE = /^[A-Za-z0-9](?:[A-Za-z0-9]|-(?=[A-Za-z0-9])){0,38}$/;

/** The handle in `text` (`@octocat` or `octocat`), or null when it is not one. */
export function githubHandle(text: string): string | null {
  const t = text.trim().replace(/^@/, '');
  return HANDLE.test(t) ? t : null;
}

/**
 * The handle an author credits: only one written with `@`. A bare word (« tony »)
 * may be someone else's account, and the tile would show their picture.
 */
export function creditedHandle(author: string): string | null {
  return author.trim().startsWith('@') ? githubHandle(author) : null;
}

export function profileUrl(handle: string): string {
  return `https://github.com/${handle}`;
}

/** The account's picture, at twice the size it is drawn (sharp on a dense screen). */
export function avatarUrl(handle: string, px = 20): string {
  return `https://github.com/${handle}.png?size=${px * 2}`;
}
