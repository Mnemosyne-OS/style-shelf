/**
 * pageDoc — the whole-page preview (doc 186 §15): a made-up page in lorem
 * ipsum, drawn in one style, with the chosen elements laid out on it. Pure.
 *
 * Same frame as a tile (doc 186 §4): `<iframe sandbox="" srcdoc>`, nothing
 * runs, and nothing moves until the pointer is over it.
 *
 * 🪤 A background's demo is `position: fixed; inset: 0` (`.ss-preview-fill`).
 * Dropped as it is in a page, it covers the page. So the first background of
 * the selection becomes the page's ground, behind everything, and each block
 * of the page is its own containing block (`transform`), where any other
 * background stays inside its box.
 *
 * @module preview/pageDoc
 */
import type { ElementEntry, IconPackEntry, StyleEntry } from '../catalog/types';
import { escapeHtml, inStyle, tokensCss } from './previewDoc';

/** The page's own layout; never shipped in a kit. */
const PAGE_FRAME_CSS = `
html, body { margin: 0; }
body { background: var(--bg-void); color: var(--text-primary); font-family: var(--font-ui); line-height: 1.5; }
.ss-page-ground { position: fixed; inset: 0; z-index: 0; }
.ss-page { position: relative; z-index: 1; max-width: 1080px; margin: 0 auto; padding: 0 24px 48px; }
.ss-page-head { display: flex; align-items: center; gap: 24px; padding: 18px 0; border-bottom: var(--border-subtle); }
.ss-page-logo { font-weight: 700; letter-spacing: 0.08em; color: var(--text-accent); }
.ss-page-nav { display: flex; gap: 18px; margin-left: auto; font-size: 14px; color: var(--text-secondary); }
.ss-page-hero { padding: 48px 0 32px; max-width: 640px; }
.ss-page-hero h1 { margin: 0 0 12px; font-size: clamp(28px, 5vw, 44px); line-height: 1.1; color: var(--text-primary); }
.ss-page-hero p { margin: 0; font-size: 17px; color: var(--text-secondary); }
.ss-page-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr)); gap: 20px; }
.ss-page-block { display: grid; gap: 10px; align-content: start; padding: var(--space-lg); border: var(--border-subtle); border-radius: var(--radius-lg); background: var(--bg-card); box-shadow: var(--shadow-card); }
.ss-page-block h2 { margin: 0; font-size: 15px; color: var(--text-primary); }
.ss-page-block p { margin: 0; font-size: 13px; color: var(--text-muted); }
.ss-page-demo { position: relative; transform: translateZ(0); overflow: hidden; min-height: 150px; display: grid; place-items: center; padding: 12px; border-radius: var(--radius-md); }
.ss-page-icons { display: flex; flex-wrap: wrap; gap: 14px; color: var(--text-accent); }
.ss-page-icons svg { width: 26px; height: 26px; display: block; }
.ss-page-foot { margin-top: 40px; padding-top: 18px; border-top: var(--border-subtle); font-size: 13px; color: var(--text-muted); }
body:not(:hover) *, body:not(:hover) *::before, body:not(:hover) *::after { animation: none !important; }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}`;

const LOREM = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
];

export interface PageEntries {
  elements: ElementEntry[];
  icons: IconPackEntry[];
}

/** The page: `style`'s tokens, every element's CSS once, a block per element; `names` gives each entry its shown name. */
export function pageDoc(style: StyleEntry, { elements, icons }: PageEntries, names: (id: string) => string): string {
  const ground = elements.find((e) => e.kind === 'background');
  const blocks = elements.filter((e) => e !== ground);
  const css = elements.map((e) => e.css).join('\n');
  const block = (title: string, i: number, inner: string) => `<section class="ss-page-block"><h2>${escapeHtml(title)}</h2><p>${LOREM[i % LOREM.length]}</p>${inner}</section>`;
  const body = `${ground ? `<div class="ss-page-ground">${ground.html}</div>` : ''}
<div class="ss-page">
<header class="ss-page-head"><span class="ss-page-logo">LOREM</span><nav class="ss-page-nav"><span>Ipsum</span><span>Dolor</span><span>Sit amet</span></nav></header>
<section class="ss-page-hero"><h1>Lorem ipsum dolor sit amet</h1><p>${LOREM[0]} ${LOREM[1]}</p></section>
<main class="ss-page-grid">
${blocks.map((e, i) => block(names(e.id), i, `<div class="ss-page-demo">${e.html}</div>`)).join('\n')}
${icons.map((p, i) => block(names(p.id), blocks.length + i, `<div class="ss-page-icons">${p.samples.map((s) => s.svg).join('')}</div>`)).join('\n')}
</main>
<footer class="ss-page-foot">${LOREM[3]}</footer>
</div>`;
  return `<!doctype html><html><head><meta charset="utf-8"><style>${inStyle(tokensCss(style.manifest))}
${PAGE_FRAME_CSS}
${inStyle(css)}</style></head><body>${body}</body></html>`;
}
