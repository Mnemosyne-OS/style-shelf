import { describe, expect, it, vi } from 'vitest';
import { findByName, parseThemes, removeTheme, saveTheme, themeCart } from './themesModel';

const cart = { styleId: 'night', itemIds: ['btn', 'card'] };
const T0 = '2026-10-28T10:00:00.000Z';
const T1 = '2026-10-28T11:00:00.000Z';

describe('themesModel', () => {
  it('saves the cart under a name, first in the list, with an id from the name', () => {
    const list = saveTheme([], '  Mon Été ', cart, T0)!;
    expect(list).toEqual([{ id: 'theme-mon-ete', name: 'Mon Été', styleId: 'night', itemIds: ['btn', 'card'], updatedAt: T0 }]);
    expect(themeCart(list[0])).toEqual(cart);
  });

  it('a name already used takes the new contents and keeps its id', () => {
    const first = saveTheme([], 'Site', cart, T0)!;
    const again = saveTheme(first, ' site ', { styleId: 'paper', itemIds: [] }, T1)!;
    expect(again).toHaveLength(1);
    expect(again[0]).toMatchObject({ id: 'theme-site', styleId: 'paper', itemIds: [], updatedAt: T1 });
    expect(findByName(again, 'SITE')?.id).toBe('theme-site');
  });

  it('two names with the same slug get two ids', () => {
    const a = saveTheme([], 'Été', cart, T0)!;
    const b = saveTheme(a, 'Ete!', cart, T0)!;
    expect(b.map((t) => t.id)).toEqual(['theme-ete-2', 'theme-ete']);
  });

  it('saves nothing without a style or without a name', () => {
    expect(saveTheme([], 'x', { styleId: null, itemIds: ['btn'] }, T0)).toBeNull();
    expect(saveTheme([], '   ', cart, T0)).toBeNull();
  });

  it('removes one theme', () => {
    const list = saveTheme(saveTheme([], 'A', cart, T0)!, 'B', cart, T0)!;
    expect(removeTheme(list, 'theme-a').map((t) => t.name)).toEqual(['B']);
  });

  it('reads stored themes and counts the ones it cannot read', () => {
    const good = { id: 'theme-a', name: 'A', styleId: 'night', itemIds: ['btn'], updatedAt: T0 };
    expect(parseThemes(JSON.stringify([good, { id: 'x' }]))).toEqual({ themes: [good], refused: 1 });
    expect(parseThemes(null)).toEqual({ themes: [], refused: 0 });
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    expect(parseThemes('{oops')).toEqual({ themes: [], refused: 1 });
    warn.mockRestore();
  });
});
