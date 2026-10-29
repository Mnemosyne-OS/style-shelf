/**
 * favoritesModel — the entries a person starred (doc 186 §15). Pure.
 *
 * A list of ids in the order they were starred, kept in the page's storage
 * and in the host's copy (doc 186 §16).
 *
 * @module favorites/favoritesModel
 */

/** The key the favourites are kept under. */
export const FAVORITES_KEY = 'style-shelf.favorites';

/** The ids from their stored text; anything else than a list of ids reads as none, said in the log. */
export function parseFavorites(text: string | null): string[] {
  if (!text) return [];
  try {
    const v: unknown = JSON.parse(text);
    if (!Array.isArray(v)) return [];
    return [...new Set(v.filter((x): x is string => typeof x === 'string'))];
  } catch (err) {
    console.warn('[style-shelf] stored favourites unreadable, starting with none:', err instanceof Error ? err.message : err);
    return [];
  }
}

/** Stars the id when absent, takes the star off when present. */
export function toggleFavorite(ids: string[], id: string): string[] {
  return ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id];
}

/** The favourites the catalogue still has (a personal style deleted, an entry gone). */
export function keepKnown(ids: string[], known: ReadonlySet<string>): string[] {
  return ids.filter((id) => known.has(id));
}
