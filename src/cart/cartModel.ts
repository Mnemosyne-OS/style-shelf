/**
 * cartModel — the cart of Style Shelf (doc 186 §5). Pure.
 *
 * One style at most (choosing another replaces it) and any number of elements
 * and icon packs, in the order they were added. Kept in local storage as a
 * convenience: a cart that cannot be read is an empty cart, said in the log.
 *
 * @module cart/cartModel
 */
import type { Catalog } from '../catalog/types';

export interface Cart {
  styleId: string | null;
  itemIds: string[];
}

export const EMPTY_CART: Cart = { styleId: null, itemIds: [] };

/** The key the cart is kept under. */
export const CART_KEY = 'style-shelf.cart';

/** The cart with this style chosen (null clears it). */
export function setStyle(cart: Cart, styleId: string | null): Cart {
  return { ...cart, styleId };
}

/** Adds the item when absent, removes it when present. */
export function toggleItem(cart: Cart, id: string): Cart {
  return cart.itemIds.includes(id)
    ? { ...cart, itemIds: cart.itemIds.filter((x) => x !== id) }
    : { ...cart, itemIds: [...cart.itemIds, id] };
}

export function removeItem(cart: Cart, id: string): Cart {
  return { ...cart, itemIds: cart.itemIds.filter((x) => x !== id) };
}

/** True when the entry is in the cart, as its style or as an item. */
export function inCart(cart: Cart, id: string): boolean {
  return cart.styleId === id || cart.itemIds.includes(id);
}

/** How many entries the cart holds, its style included. */
export function cartCount(cart: Cart): number {
  return cart.itemIds.length + (cart.styleId ? 1 : 0);
}

/**
 * The cart against the catalogue it runs with: an id the catalogue no longer
 * has is taken out AND named in `dropped`, so the screen can say it.
 * A style id that names an element (or the reverse) counts as gone.
 */
export function reconcile(cart: Cart, catalog: Catalog): { cart: Cart; dropped: string[] } {
  const byId = new Map(catalog.entries.map((e) => [e.id, e]));
  const dropped: string[] = [];
  let styleId = cart.styleId;
  if (styleId && byId.get(styleId)?.kind !== 'style') {
    dropped.push(styleId);
    styleId = null;
  }
  const itemIds: string[] = [];
  for (const id of cart.itemIds) {
    // A duplicate is not a loss: the item is still in the cart once.
    if (itemIds.includes(id)) continue;
    const e = byId.get(id);
    if (!e || e.kind === 'style') {
      dropped.push(id);
      continue;
    }
    itemIds.push(id);
  }
  return { cart: { styleId, itemIds }, dropped };
}

/** The cart from its stored text; anything else than a cart reads as empty. */
export function parseCart(text: string | null): Cart {
  if (!text) return EMPTY_CART;
  try {
    const v: unknown = JSON.parse(text);
    if (typeof v !== 'object' || v === null) return EMPTY_CART;
    const { styleId, itemIds } = v as Record<string, unknown>;
    return {
      styleId: typeof styleId === 'string' ? styleId : null,
      itemIds: Array.isArray(itemIds) ? itemIds.filter((x): x is string => typeof x === 'string') : [],
    };
  } catch (err) {
    console.warn('[style-shelf] stored cart unreadable, starting empty:', err instanceof Error ? err.message : err);
    return EMPTY_CART;
  }
}
