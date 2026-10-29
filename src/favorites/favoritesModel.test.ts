import { describe, expect, it, vi } from 'vitest';
import { keepKnown, parseFavorites, toggleFavorite } from './favoritesModel';

describe('favoritesModel', () => {
  it('stars and unstars, keeping the order they were starred in', () => {
    expect(toggleFavorite(['a'], 'b')).toEqual(['a', 'b']);
    expect(toggleFavorite(['a', 'b'], 'a')).toEqual(['b']);
  });

  it('reads stored ids once each, and anything else as none', () => {
    expect(parseFavorites('["a","b","a",3]')).toEqual(['a', 'b']);
    expect(parseFavorites('{"a":1}')).toEqual([]);
    expect(parseFavorites(null)).toEqual([]);
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    expect(parseFavorites('not json')).toEqual([]);
    expect(warn).toHaveBeenCalled();
    warn.mockRestore();
  });

  it('keeps only the ids the catalogue still has', () => {
    expect(keepKnown(['a', 'gone', 'b'], new Set(['a', 'b']))).toEqual(['a', 'b']);
  });
});
