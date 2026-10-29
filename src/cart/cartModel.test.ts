import { describe, expect, it, vi } from 'vitest';
import type { Catalog } from '../catalog/types';
import { EMPTY_CART, cartCount, inCart, parseCart, reconcile, removeItem, setStyle, toggleItem } from './cartModel';

const T = { en: 'x', fr: 'x', es: 'x' };
const base = { title: T, license: 'MIT', author: 'a', tier: 'free' as const, tags: [] };
const catalog: Catalog = {
  refused: [],
  entries: [
    { ...base, id: 'night', kind: 'style', manifest: { id: 'night', name: 'N', version: '1', tokens: {} } },
    { ...base, id: 'paper', kind: 'style', manifest: { id: 'paper', name: 'P', version: '1', tokens: {} } },
    { ...base, id: 'btn', kind: 'button', css: '.ss-btn{}', html: '<b></b>' },
    { ...base, id: 'lucide', kind: 'icons', homepage: 'https://lucide.dev', packages: { any: 'lucide' }, samples: [], licenseText: null },
  ],
};

describe('cartModel', () => {
  it('holds one style: choosing another replaces it', () => {
    const c = setStyle(setStyle(EMPTY_CART, 'night'), 'paper');
    expect(c.styleId).toBe('paper');
    expect(cartCount(c)).toBe(1);
  });

  it('adds an item once and takes it out on the second toggle, in the order added', () => {
    let c = toggleItem(EMPTY_CART, 'btn');
    c = toggleItem(c, 'lucide');
    expect(c.itemIds).toEqual(['btn', 'lucide']);
    expect(inCart(c, 'btn')).toBe(true);
    c = toggleItem(c, 'btn');
    expect(c.itemIds).toEqual(['lucide']);
    expect(removeItem(c, 'lucide').itemIds).toEqual([]);
  });

  it('takes out what the catalogue no longer has, and NAMES it', () => {
    const { cart, dropped } = reconcile({ styleId: 'gone-style', itemIds: ['btn', 'gone', 'night', 'btn'] }, catalog);
    expect(cart).toEqual({ styleId: null, itemIds: ['btn'] });
    // A style id in the item list is not an item; a duplicate is not a loss.
    expect(dropped).toEqual(['gone-style', 'gone', 'night']);
  });

  it('keeps a cart the catalogue fully has, with nothing dropped', () => {
    expect(reconcile({ styleId: 'night', itemIds: ['btn', 'lucide'] }, catalog)).toEqual({ cart: { styleId: 'night', itemIds: ['btn', 'lucide'] }, dropped: [] });
  });

  it('reads a stored cart, and anything else as empty', () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    expect(parseCart('{"styleId":"night","itemIds":["btn",3]}')).toEqual({ styleId: 'night', itemIds: ['btn'] });
    expect(parseCart(null)).toEqual(EMPTY_CART);
    expect(parseCart('{ nope')).toEqual(EMPTY_CART);
    expect(parseCart('42')).toEqual(EMPTY_CART);
  });
});
