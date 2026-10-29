/**
 * themesModel — the person's named themes (doc 186 §15): a cart kept under a
 * name, one style and its elements, to load back in one click. Pure.
 *
 * « Theme » and never « style »: a style is a set of tokens (a SkinManifest);
 * a theme is a style WITH the elements chosen for it.
 *
 * Kept in the page's storage and in the host's copy, the one document that
 * also carries the personal styles and the favourites (doc 186 §16).
 *
 * @module themes/themesModel
 */
import type { Cart } from '../cart/cartModel';

export interface SavedTheme {
  id: string;
  name: string;
  styleId: string;
  itemIds: string[];
  updatedAt: string;
}

/** The key the themes are kept under. */
export const THEMES_KEY = 'style-shelf.themes';

const sameName = (a: string, b: string) => a.trim().toLocaleLowerCase() === b.trim().toLocaleLowerCase();

/** The theme already saved under this name (case and spaces ignored), if any. */
export function findByName(themes: SavedTheme[], name: string): SavedTheme | undefined {
  return themes.find((t) => sameName(t.name, name));
}

function slug(name: string): string {
  const s = name.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return s || 'theme';
}

/**
 * The list with the cart saved under `name`: a theme of the same name takes
 * the new contents and keeps its id, else a new theme goes first. Null when
 * there is nothing to save (no style, or no name).
 */
export function saveTheme(themes: SavedTheme[], name: string, cart: Cart, now: string): SavedTheme[] | null {
  const clean = name.trim();
  if (!clean || !cart.styleId) return null;
  const body = { name: clean, styleId: cart.styleId, itemIds: [...cart.itemIds], updatedAt: now };
  const same = findByName(themes, clean);
  if (same) return themes.map((t) => (t.id === same.id ? { ...t, ...body } : t));
  const taken = new Set(themes.map((t) => t.id));
  let id = `theme-${slug(clean)}`;
  for (let n = 2; taken.has(id); n++) id = `theme-${slug(clean)}-${n}`;
  return [{ id, ...body }, ...themes];
}

/** The list without the theme of this id. */
export function removeTheme(themes: SavedTheme[], id: string): SavedTheme[] {
  return themes.filter((t) => t.id !== id);
}

/** The cart a theme loads back (to be reconciled against the catalogue by the caller). */
export function themeCart(t: SavedTheme): Cart {
  return { styleId: t.styleId, itemIds: [...t.itemIds] };
}

function isTheme(v: unknown): v is SavedTheme {
  if (typeof v !== 'object' || v === null) return false;
  const t = v as Record<string, unknown>;
  return typeof t.id === 'string' && typeof t.name === 'string' && t.name.trim() !== '' && typeof t.styleId === 'string'
    && typeof t.updatedAt === 'string' && Array.isArray(t.itemIds) && t.itemIds.every((x) => typeof x === 'string');
}

/** The themes from their stored text, and how many stored ones could not be read (never dropped in silence). */
export function parseThemes(text: string | null): { themes: SavedTheme[]; refused: number } {
  if (!text) return { themes: [], refused: 0 };
  try {
    const v: unknown = JSON.parse(text);
    if (!Array.isArray(v)) return { themes: [], refused: 1 };
    const themes = v.filter(isTheme);
    return { themes, refused: v.length - themes.length };
  } catch (err) {
    console.warn('[style-shelf] stored themes unreadable:', err instanceof Error ? err.message : err);
    return { themes: [], refused: 1 };
  }
}
