import { describe, expect, it } from 'vitest';
import type { Catalog } from '../catalog/types';
import { PREMIUM_TOKEN, premiumAccess, premiumInCart, premiumVerdict } from './premium';

const T = { en: 'x', fr: 'x', es: 'x' };
const base = { title: T, license: 'MIT', author: 'a', tags: [] };
const catalog: Catalog = {
  refused: [],
  entries: [
    { ...base, id: 'gold-style', kind: 'style', tier: 'premium', manifest: { id: 'gold-style', name: 'G', version: '1', tokens: {} } },
    { ...base, id: 'free-btn', kind: 'button', tier: 'free', css: '.ss-free-btn{}', html: '<b></b>' },
    { ...base, id: 'gold-motion', kind: 'motion', tier: 'premium', css: '.ss-gold-motion{}', html: '<b></b>' },
  ],
};

describe('premium (lot 5: declared, never refused)', () => {
  it('opens only on the token the HOST announces; anything else is unknown, never closed', () => {
    expect(premiumAccess({ kind: 'mnemosyne', capabilities: [PREMIUM_TOKEN], platform: null })).toBe('open');
    expect(premiumAccess({ kind: 'mnemosyne', capabilities: [], platform: null })).toBe('unknown');
    expect(premiumAccess({ kind: 'standalone' })).toBe('unknown');
    expect(premiumAccess(null)).toBe('unknown');
  });

  it('finds the premium entries of a cart, its style included', () => {
    expect(premiumInCart({ styleId: 'gold-style', itemIds: ['free-btn', 'gold-motion'] }, catalog)).toEqual(['gold-style', 'gold-motion']);
    expect(premiumInCart({ styleId: null, itemIds: ['free-btn'] }, catalog)).toEqual([]);
  });

  it('says the verdict, and says nothing for a free kit', () => {
    expect(premiumVerdict([], 'unknown')).toBeNull();
    expect(premiumVerdict(['gold-motion'], 'unknown')).toBe('premium gate: 1 premium entry (gold-motion), access unknown, not enforced (doc 186 §9)');
  });
});
