import { describe, expect, it, vi } from 'vitest';
import type { StyleEntry } from '../catalog/types';
import { contrastIssues, contrastRatio } from '../lib/contrast';
import { toRestore } from './personalMirror';
import {
  checkPersonal, createPersonal, exportSkin, importSkin, parseStored, personalId, serialize, setToken, slugify, toEntry, toManifest, upsert,
} from './personalModel';

const night: StyleEntry = {
  id: 'hud-night', kind: 'style', title: { en: 'HUD night', fr: 'HUD de nuit', es: 'HUD nocturno' }, license: 'MIT', author: 'Mnemosyne OS', tier: 'free', tags: [],
  manifest: { id: 'hud-night', name: 'HUD night', version: '1.0.0', tokens: { '--accent': '#5fe3ff', '--bg-void': '#03060c', '--text-primary': '#e6f4fb' } },
};
const AT = '2026-10-28T10:00:00.000Z';

describe('personal styles', () => {
  it('names a personal style after its name, never over a taken id', () => {
    expect(slugify('Néon du soir !')).toBe('neon-du-soir');
    expect(slugify('***')).toBe('');
    expect(personalId('Néon du soir', new Set())).toBe('my-neon-du-soir');
    expect(personalId('Néon du soir', new Set(['my-neon-du-soir', 'my-neon-du-soir-2']))).toBe('my-neon-du-soir-3');
    expect(personalId('***', new Set())).toBe('my-style');
  });

  it('starts as a copy of the shipped style, keeping its licence and author as the notice', () => {
    const p = createPersonal(night, 'Mon HUD', new Set(), AT);
    expect(p).toMatchObject({ id: 'my-mon-hud', basedOn: 'hud-night', license: 'MIT', baseAuthor: 'Mnemosyne OS', author: '' });
    expect(p.tokens).toEqual(night.manifest.tokens);
    const m = toManifest(p);
    expect(m.author).toBe('Mnemosyne OS');
    expect(m.description).toBe('Based on hud-night (MIT, Mnemosyne OS).');
    expect(toManifest({ ...p, author: 'tony' }).author).toBe('tony');
  });

  it('a change never touches the style it came from', () => {
    const p = setToken(createPersonal(night, 'x', new Set(), AT), '--accent', '#ff00aa');
    expect(p.tokens['--accent']).toBe('#ff00aa');
    expect(night.manifest.tokens['--accent']).toBe('#5fe3ff');
  });

  it('shows in the catalogue as a style marked personal', () => {
    const e = toEntry(createPersonal(night, 'Mon HUD', new Set(), AT));
    expect(e).toMatchObject({ id: 'my-mon-hud', kind: 'style', tags: ['personal'], personal: { basedOn: 'hud-night', updatedAt: AT } });
    expect(e.title).toEqual({ en: 'Mon HUD', fr: 'Mon HUD', es: 'Mon HUD' });
  });

  it('is refused without a name, or with a token the design-sdk does not know', () => {
    const p = createPersonal(night, 'x', new Set(), AT);
    expect(checkPersonal(p)).toBeNull();
    expect(checkPersonal({ ...p, name: '  ' })).toBe('name: missing');
    expect(checkPersonal(setToken(p, '--made-up', '1px'))).toMatch(/--made-up/);
  });

  it('reads back what it stored, and leaves out AND counts what no longer reads', () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    const a = createPersonal(night, 'a', new Set(), AT);
    const b = createPersonal(night, 'b', new Set(), AT);
    expect(parseStored(serialize([a, b]))).toEqual({ styles: [a, b], refused: 0 });
    const broken = { ...b, id: 'not-mine' };
    expect(parseStored(JSON.stringify([a, broken, a]))).toEqual({ styles: [a], refused: 2 });
    expect(parseStored('{ nope')).toEqual({ styles: [], refused: 1 });
    expect(parseStored(null)).toEqual({ styles: [], refused: 0 });
  });

  it('keeps an edited style in its place, and puts a new one first', () => {
    const a = createPersonal(night, 'a', new Set(), AT);
    const b = createPersonal(night, 'b', new Set(), AT);
    expect(upsert([a], b).map((p) => p.id)).toEqual(['my-b', 'my-a']);
    expect(upsert([a, b], { ...a, name: 'A2' }).map((p) => p.name)).toEqual(['A2', 'b']);
  });

  it('exports a design-sdk skin that imports back as a new personal style', () => {
    const p = setToken({ ...createPersonal(night, 'Mon HUD', new Set(), AT), author: 'tony' }, '--accent', '#ff00aa');
    const text = exportSkin(p);
    expect(JSON.parse(text).$schema).toBe('https://unpkg.com/@mnemosyne_os/design-sdk/skin-schema.json');
    const back = importSkin(text, night, new Set([p.id]), AT);
    if ('error' in back) throw new Error(back.error);
    expect(back.id).toBe('my-mon-hud-2');
    expect(back.tokens['--accent']).toBe('#ff00aa');
    expect(back.author).toBe('tony');
  });

  it('an imported skin that sets one token takes the others from the base, so no element draws with nothing', () => {
    const got = importSkin(JSON.stringify({ id: 'tiny', name: 'Tiny', version: '1.0.0', tokens: { '--accent': '#123456' } }), night, new Set(), AT);
    if ('error' in got) throw new Error(got.error);
    expect(got.tokens).toEqual({ ...night.manifest.tokens, '--accent': '#123456' });
    expect(got.license).toBe('unknown');
  });

  it('refuses a file that is not a skin, with the reason', () => {
    expect(importSkin('{ nope', night, new Set(), AT)).toHaveProperty('error');
    expect(importSkin(JSON.stringify({ id: 'x', name: 'X', version: '1', tokens: { '--bad': '1' } }), night, new Set(), AT)).toHaveProperty('error');
  });
});

describe('the host copy (doc 73)', () => {
  it('restores only into a BLANK local copy: the local copy always wins', () => {
    const host = { state: { personal: '[{"id":"my-a"}]' } };
    expect(toRestore(null, host)).toBe('[{"id":"my-a"}]');
    expect(toRestore('[]', host)).toBe('[{"id":"my-a"}]');
    expect(toRestore('[{"id":"my-b"}]', host)).toBeNull();
    expect(toRestore(null, { state: null })).toBeNull();
    expect(toRestore(null, { state: { personal: '[]' } })).toBeNull();
  });
});

describe('contrast', () => {
  it('measures hex colours and says a translucent one has no ratio of its own', () => {
    expect(contrastRatio('#000000', '#ffffff')).toBeCloseTo(21, 5);
    expect(contrastRatio('#fff', '#ffffff')).toBeCloseTo(1, 5);
    expect(contrastRatio('rgba(0,0,0,0.5)', '#fff')).toBeNull();
  });

  it('names each readable pair under 4.5:1, and the unmeasurable ones', () => {
    const issues = contrastIssues({ '--text-primary': '#777777', '--bg-void': '#ffffff', '--text-muted': '#000000', '--text-accent': 'rgba(0,0,0,.4)', '--accent': '#000000' });
    expect(issues.map((i) => i.pair)).toEqual(['text', 'accentText']);
    expect(issues[1].ratio).toBeNull();
  });

  it('measures the text a solid button writes on the accent (--bg-void on --accent)', () => {
    const ok = { '--text-primary': '#000000', '--text-muted': '#000000', '--text-accent': '#000000', '--bg-void': '#ffffff' };
    expect(contrastIssues({ ...ok, '--accent': '#000000' })).toEqual([]);
    expect(contrastIssues({ ...ok, '--accent': '#f5f5f5' })).toEqual([{ pair: 'onAccent', ratio: expect.closeTo(1.09, 2) }]);
  });
});
