import { describe, expect, it } from 'vitest';
import type { ElementEntry, IconPackEntry, StyleEntry } from '../catalog/types';
import { previewDoc } from './previewDoc';

const T = { en: 'x', fr: 'x', es: 'x' };
const base = { title: T, license: 'MIT', author: 'a', tier: 'free' as const, tags: [] };
const night: StyleEntry = { ...base, id: 'night', kind: 'style', manifest: { id: 'night', name: 'Night', version: '1', tokens: { '--accent': '#5fe3ff' } } };
const paper: StyleEntry = { ...base, id: 'paper', kind: 'style', manifest: { id: 'paper', name: 'Paper', version: '1', tokens: { '--accent': '#a8411f' } } };

describe('previewDoc', () => {
  it('draws an element in the chosen style: its tokens, its CSS, its markup', () => {
    const btn: ElementEntry = { ...base, id: 'b', kind: 'button', css: '.ss-b { color: var(--accent); }', html: '<button class="ss-b">Go</button>' };
    const doc = previewDoc(night, btn, 'Solid');
    expect(doc).toContain('--accent: #5fe3ff;');
    expect(doc).toContain('.ss-b { color: var(--accent); }');
    expect(doc).toContain('<body><button class="ss-b">Go</button></body>');
  });

  it('draws a style tile in its OWN tokens, whatever style is chosen', () => {
    const doc = previewDoc(night, paper, 'Paper');
    expect(doc).toContain('--accent: #a8411f;');
    expect(doc).not.toContain('#5fe3ff');
  });

  it('holds every animation still until the pointer is over it, and always under reduced motion', () => {
    const doc = previewDoc(night, night, 'Night');
    expect(doc).toContain('body:not(:hover) *, body:not(:hover) *::before, body:not(:hover) *::after { animation: none !important; }');
    expect(doc).toMatch(/@media \(prefers-reduced-motion: reduce\) \{\s*\*, \*::before, \*::after \{ animation: none !important; transition: none !important; \}/);
  });

  it('CSS cannot close its <style> and spill markup out', () => {
    const evil: ElementEntry = { ...base, id: 'e', kind: 'button', css: '.ss-e{}</style><img src=x>', html: '<b>x</b>' };
    const doc = previewDoc(night, evil, 'E');
    expect(doc).not.toContain('</style><img');
    expect(doc.match(/<\/style>/g)).toHaveLength(1);
  });

  it('an icon pack shows its name and package, escaped', () => {
    const pack: IconPackEntry = { ...base, id: 'p', kind: 'icons', homepage: 'https://x.dev', packages: { any: '@x/<icons>' }, samples: [], licenseText: null };
    const doc = previewDoc(night, pack, 'P & Q');
    expect(doc).toContain('P &amp; Q');
    expect(doc).toContain('@x/&lt;icons&gt;');
  });
});
