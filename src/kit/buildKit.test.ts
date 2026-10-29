import { describe, expect, it } from 'vitest';
import { cartAnswer } from '../app/agentHandlers';
import type { Catalog } from '../catalog/types';
import { briefMarkdown, buildKit, KIT_FILES, KIT_FORMAT } from './buildKit';

const T = (en: string) => ({ en, fr: `${en} fr`, es: `${en} es` });
const catalog: Catalog = {
  refused: [],
  entries: [
    { id: 'night', kind: 'style', title: T('Night'), license: 'MIT', author: 'Mnemosyne OS', tier: 'free', tags: [],
      manifest: { id: 'night', name: 'Night', version: '1.0.0', author: 'Mnemosyne OS', tokens: { '--accent': '#5fe3ff', '--bg-void': '#03060c' } } },
    { id: 'btn-a', kind: 'button', title: T('Solid'), license: 'MIT', author: 'A', tier: 'free', tags: [], css: '.ss-btn-a { color: var(--accent); }', html: '<button class="ss-btn-a">Go</button>' },
    { id: 'spin', kind: 'motion', title: T('Spinner'), license: 'Apache-2.0', author: 'B', tier: 'premium', tags: [], css: '.ss-spin { animation: ss-spin 1s; }', html: '<div class="ss-spin"></div>' },
    { id: 'lucide', kind: 'icons', title: T('Lucide'), license: 'ISC', author: 'L', tier: 'free', tags: [], homepage: 'https://lucide.dev', packages: { react: 'lucide-react' }, samples: [], licenseText: null },
  ],
};
const AT = '2026-10-27T22:00:00.000Z';

describe('buildKit', () => {
  it('asks for a style before anything', () => {
    expect(buildKit({ styleId: null, itemIds: ['btn-a'] }, catalog, AT)).toEqual({ ok: false, missing: 'style' });
  });

  it('writes the four files from the cart, elements in cart order with their code', () => {
    const built = buildKit({ styleId: 'night', itemIds: ['spin', 'lucide', 'btn-a'] }, catalog, AT);
    if (!built.ok) throw new Error('not built');
    expect(built.files.map((f) => f.name)).toEqual(['kit.json', 'tokens.css', 'elements.css', 'BRIEF.md']);
    // The cart names these files before the write: the list it shows is the list written.
    expect(built.files.map((f) => f.name)).toEqual([...KIT_FILES]);
    const kit = JSON.parse(built.files[0].content);
    expect(kit.format).toBe(KIT_FORMAT);
    expect(kit.createdAt).toBe(AT);
    expect(kit.style.tokens).toEqual({ '--accent': '#5fe3ff', '--bg-void': '#03060c' });
    expect(kit.elements.map((e: { id: string }) => e.id)).toEqual(['spin', 'btn-a']);
    expect(kit.elements[0].css).toBe('.ss-spin { animation: ss-spin 1s; }');
    expect(kit.icons.map((i: { id: string }) => i.id)).toEqual(['lucide']);
    expect(kit.licenses).toEqual(['Apache-2.0', 'ISC', 'MIT']);
  });

  it('tokens.css is the style as variables; elements.css carries each block under its licence', () => {
    const built = buildKit({ styleId: 'night', itemIds: ['btn-a', 'spin'] }, catalog, AT);
    if (!built.ok) throw new Error('not built');
    const tokens = built.files[1].content;
    expect(tokens).toContain(':root {\n  --accent: #5fe3ff;\n  --bg-void: #03060c;\n}');
    const css = built.files[2].content;
    expect(css).toContain('/* ── Solid (button, btn-a) · MIT · A ── */\n.ss-btn-a { color: var(--accent); }');
    expect(css).toContain('/* ── Spinner (motion, spin) · Apache-2.0 · B ── */\n.ss-spin');
    expect(css.indexOf('btn-a')).toBeLessThan(css.indexOf('spin'));
  });

  it('the brief points at the files on disk, and carries them inside when copied', () => {
    const built = buildKit({ styleId: 'night', itemIds: ['btn-a', 'lucide'] }, catalog, AT);
    if (!built.ok) throw new Error('not built');
    const onDisk = built.files[3].content;
    expect(onDisk).toContain('`tokens.css`');
    expect(onDisk).not.toContain('```css');
    expect(onDisk).toContain('<button class="ss-btn-a">Go</button>');
    expect(onDisk).toContain('react: `lucide-react`');
    const copied = briefMarkdown(built.kit, { embedFiles: true });
    expect(copied).toContain('## tokens.css\n\n```css\n:root {\n  --accent: #5fe3ff;');
    expect(copied).toContain('## elements.css\n\n```css\n/* ── Solid');
  });

  it('a kit with a style alone says it has no element, it does not write an empty section', () => {
    const built = buildKit({ styleId: 'night', itemIds: [] }, catalog, AT);
    if (!built.ok) throw new Error('not built');
    expect(built.files[2].content).toBe('/* Style Shelf · no element in this kit */\n');
    expect(built.files[3].content).toContain('## Elements\n\nNone.');
  });
});

describe('the agent action cart (doc 149: what the button does)', () => {
  it('says what is missing before a style is chosen', () => {
    expect(cartAnswer({ cart: { styleId: null, itemIds: ['btn-a'] }, catalog, writtenTo: null, premiumAccess: 'unknown' })).toEqual({ ready: false, missing: ['style'], itemIds: ['btn-a'] });
  });

  it('answers the same kit the button builds, the brief with the CSS inside, and where it was written', () => {
    const cart = { styleId: 'night', itemIds: ['btn-a'] };
    const answer = cartAnswer({ cart, catalog, writtenTo: 'C:\\proj\\style-shelf', premiumAccess: 'unknown' }, () => new Date(AT));
    const built = buildKit(cart, catalog, AT);
    if (!answer.ready || !built.ok) throw new Error('not ready');
    expect(answer.kit).toEqual(built.kit);
    expect(answer.brief).toBe(briefMarkdown(built.kit, { embedFiles: true }));
    expect(answer.writtenTo).toBe('C:\\proj\\style-shelf');
  });
});
