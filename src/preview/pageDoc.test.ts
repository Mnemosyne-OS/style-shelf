import { describe, expect, it } from 'vitest';
import type { ElementEntry, IconPackEntry, StyleEntry } from '../catalog/types';
import { pageDoc } from './pageDoc';

const T = (en: string) => ({ en, fr: en, es: en });
const base = { license: 'MIT', author: 'a', tier: 'free' as const, tags: [] };
const style: StyleEntry = { ...base, id: 'night', kind: 'style', title: T('Night'), manifest: { id: 'night', name: 'Night', version: '1', tokens: { '--accent': '#5fe3ff' } } };
const btn: ElementEntry = { ...base, id: 'btn', kind: 'button', title: T('Solid'), css: '.ss-btn { color: var(--accent); }', html: '<button class="ss-btn">Go</button>' };
const bg: ElementEntry = { ...base, id: 'bg', kind: 'background', title: T('Grid'), css: '.ss-bg {}', html: '<div class="ss-bg ss-preview-fill"></div>' };
const bg2: ElementEntry = { ...bg, id: 'bg2', css: '.ss-bg2 {}', html: '<div class="ss-bg2 ss-preview-fill"></div>' };
const icons: IconPackEntry = { ...base, id: 'lucide', kind: 'icons', title: T('Lucide'), homepage: 'https://x', packages: { any: 'x' }, samples: [{ name: 'home', svg: '<svg id="i-home"></svg>' }], licenseText: 'MIT License' };
const names = (id: string) => `name-${id}`;

describe('pageDoc', () => {
  it('draws the page in the style, with each element once under its name, in lorem ipsum', () => {
    const doc = pageDoc(style, { elements: [btn], icons: [icons] }, names);
    expect(doc).toContain('--accent: #5fe3ff;');
    expect(doc).toContain('.ss-btn { color: var(--accent); }');
    expect(doc).toContain('<h2>name-btn</h2>');
    expect(doc).toContain('<button class="ss-btn">Go</button>');
    expect(doc).toContain('<svg id="i-home"></svg>');
    expect(doc).toContain('Lorem ipsum');
    expect(doc).not.toMatch(/<script/i);
  });

  it('makes the first background the ground of the page, and keeps any other inside its own block', () => {
    const doc = pageDoc(style, { elements: [btn, bg, bg2], icons: [] }, names);
    expect(doc).toContain('<div class="ss-page-ground"><div class="ss-bg ss-preview-fill"></div></div>');
    expect(doc).not.toContain('<h2>name-bg</h2>');
    expect(doc).toContain('<h2>name-bg2</h2>');
    // A block is a containing block: a fixed background in it stays in it.
    expect(doc).toMatch(/\.ss-page-demo \{[^}]*transform: translateZ\(0\)/);
  });

  it('a name cannot open markup, and a CSS cannot close its style tag', () => {
    const evil: ElementEntry = { ...btn, css: '.ss-btn{} </style><script>x</script>' };
    const doc = pageDoc(style, { elements: [evil], icons: [] }, () => '<img src=x>');
    expect(doc).not.toContain('<img src=x>');
    expect(doc).not.toContain('</style><script>');
  });
});
