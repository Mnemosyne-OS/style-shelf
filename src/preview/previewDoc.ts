/**
 * previewDoc — the page one preview frame shows (doc 186 §4). Pure.
 *
 * The frame is `<iframe sandbox="" srcdoc>`: no script, no form, no
 * navigation. An entry that came from a pull request can hold anything, it
 * stays a drawing.
 *
 * 🎭 At rest nothing moves (style-cartouche §7): every animation is off until
 * the pointer is over the frame, and stays off under `prefers-reduced-motion`.
 * Removing the animation leaves an element in its final state, so a one-shot
 * entrance reads as the element it brings in, and replays on each hover.
 *
 * @module preview/previewDoc
 */
import type { SkinManifest } from '@mnemosyne_os/design-sdk';
import type { CatalogEntry, EngineEntry, IconPackEntry, StyleEntry } from '../catalog/types';

/** The rules the preview adds around an entry; never shipped in a kit. */
export const PREVIEW_FRAME_CSS = `
html, body { margin: 0; height: 100%; }
body {
  display: grid; place-items: center; padding: 12px; box-sizing: border-box;
  background: var(--bg-void); color: var(--text-primary); font-family: var(--font-ui);
  overflow: hidden;
}
.ss-preview-fill { position: fixed; inset: 0; }
.ss-preview-icons { display: grid; grid-template-columns: repeat(4, 30px); gap: 14px; color: var(--text-accent); }
.ss-preview-icons svg { width: 26px; height: 26px; display: block; }
body:not(:hover) *, body:not(:hover) *::before, body:not(:hover) *::after { animation: none !important; }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}`;

/** `:root { --token: value; … }` for a style's manifest. */
export function tokensCss(manifest: SkinManifest): string {
  const lines = Object.entries(manifest.tokens).map(([k, v]) => `  ${k}: ${v};`);
  return `:root {\n${lines.join('\n')}\n}`;
}

/** Text that cannot close the `<style>` it is written into. */
export function inStyle(css: string): string {
  return css.replace(/<\/style/gi, '<\\/style');
}

export function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/** A small scene drawn in a style: what a style tile shows. */
function styleScene(style: StyleEntry, name: string): string {
  return `<div style="width:min(100%,300px);padding:var(--space-lg);border:1px solid var(--border-subtle);border-radius:var(--radius-lg);background:var(--bg-card);box-shadow:var(--shadow-card)">
<p style="margin:0 0 6px;font:11px/1.2 var(--font-mono);letter-spacing:.16em;text-transform:uppercase;color:var(--text-muted)">${escapeHtml(style.manifest.id)}</p>
<p style="margin:0 0 14px;font-size:18px;font-weight:600;color:var(--text-primary)">${escapeHtml(name)}</p>
<div style="display:flex;gap:8px;flex-wrap:wrap">
<span style="padding:8px 14px;border-radius:var(--radius-md);background:var(--accent);color:var(--bg-void);font-weight:600;font-size:13px">Aa</span>
<span style="padding:8px 14px;border-radius:var(--radius-md);border:1px solid var(--border-accent);color:var(--text-accent);font-size:13px">Aa</span>
<span style="padding:8px 10px;border-radius:999px;background:var(--accent-glow);color:var(--text-accent);font:12px var(--font-mono)">#tag</span>
</div></div>`;
}

/** What an icon pack tile shows: its sample icons in the style's accent, its name and its package. */
function iconsScene(entry: IconPackEntry, name: string): string {
  const pkg = entry.packages.react ?? entry.packages.any ?? Object.values(entry.packages)[0];
  // The samples were checked to hold nothing that runs, and the frame runs nothing anyway.
  const icons = entry.samples.map((s) => `<span title="${escapeHtml(s.name)}">${s.svg}</span>`).join('');
  return `<div style="text-align:center;display:grid;gap:12px;justify-items:center">
${icons ? `<div class="ss-preview-icons">${icons}</div>` : ''}
<p style="margin:0;font-size:16px;font-weight:600;color:var(--text-primary)">${escapeHtml(name)}</p>
<code style="font:12px var(--font-mono);color:var(--text-muted)">${escapeHtml(pkg)}</code></div>`;
}

/** What an engine tile shows: its name, its package and what it is for (it runs JavaScript, so nothing animates here). */
function engineScene(entry: EngineEntry, name: string, detail: string): string {
  const pkg = entry.packages.react ?? entry.packages.any ?? Object.values(entry.packages)[0];
  return `<div style="display:grid;gap:10px;justify-items:center;text-align:center;max-width:260px">
<p style="margin:0;font-size:18px;font-weight:600;color:var(--text-primary)">${escapeHtml(name)}</p>
<code style="padding:4px 10px;border:1px solid var(--border-subtle);border-radius:var(--radius-sm);font:12px var(--font-mono);color:var(--text-accent)">npm i ${escapeHtml(pkg)}</code>
<p style="margin:0;font-size:13px;line-height:1.4;color:var(--text-secondary)">${escapeHtml(detail)}</p></div>`;
}

/**
 * The page of the style atelier: the style drawn on what a screen is made of
 * (a card, both kinds of button, a field, a tag, the three statuses), so each
 * token changed shows where it lands.
 */
export function studioDoc(manifest: SkinManifest, name: string): string {
  const body = `<div style="display:grid;gap:var(--space-md);width:min(100%,380px)">
<div style="padding:var(--space-lg);border:1px solid var(--border-subtle);border-radius:var(--radius-lg);background:var(--bg-card);box-shadow:var(--shadow-card)">
<p style="margin:0 0 6px;font:11px/1.2 var(--font-mono);letter-spacing:.16em;text-transform:uppercase;color:var(--text-muted)">${escapeHtml(manifest.id)}</p>
<p style="margin:0 0 8px;font-size:20px;font-weight:600;color:var(--text-primary)">${escapeHtml(name)}</p>
<p style="margin:0 0 16px;font-size:14px;line-height:1.5;color:var(--text-secondary)">Aa Bb Cc 0123 · <span style="color:var(--text-accent)">accent</span></p>
<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
<span style="padding:var(--space-sm) var(--space-lg);border-radius:var(--radius-md);background:var(--accent);color:var(--bg-void);font-weight:600;font-size:13px;box-shadow:var(--shadow-accent)">Aa</span>
<span style="padding:var(--space-sm) var(--space-lg);border-radius:var(--radius-md);border:1px solid var(--border-accent);color:var(--text-accent);font-size:13px">Aa</span>
<span style="padding:6px 10px;border-radius:999px;background:var(--accent-glow);color:var(--text-accent);font:12px var(--font-mono)">#tag</span>
</div></div>
<div style="display:flex;gap:10px;align-items:center;padding:10px 12px;border:1px solid var(--border-subtle);border-radius:var(--radius-sm);background:var(--bg-panel);color:var(--text-muted);font-size:14px">name@example.com</div>
<div style="display:flex;gap:14px;align-items:center;padding:10px 12px;border-radius:var(--radius-md);background:var(--bg-surface);font:12px var(--font-mono);color:var(--text-secondary)">
<span style="display:inline-flex;gap:6px;align-items:center"><i style="width:9px;height:9px;border-radius:50%;background:var(--status-active)"></i>ok</span>
<span style="display:inline-flex;gap:6px;align-items:center"><i style="width:9px;height:9px;border-radius:50%;background:var(--status-warning)"></i>!</span>
<span style="display:inline-flex;gap:6px;align-items:center"><i style="width:9px;height:9px;border-radius:50%;background:var(--status-overload)"></i>×</span>
<span style="margin-left:auto;padding:4px 10px;border-radius:var(--radius-sm);background:var(--bg-hover);transition:background var(--transition-normal)">hover</span>
</div></div>`;
  return `<!doctype html><html><head><meta charset="utf-8"><style>${inStyle(tokensCss(manifest))}
${PREVIEW_FRAME_CSS}</style></head><body>${body}</body></html>`;
}

/** The whole page of one preview frame: `entry` drawn in `style`. */
export function previewDoc(style: StyleEntry, entry: CatalogEntry, name: string, detail = ''): string {
  let css = '';
  let body: string;
  if (entry.kind === 'style') {
    body = styleScene(entry, name);
  } else if (entry.kind === 'icons') {
    body = iconsScene(entry, name);
  } else if (entry.kind === 'engine') {
    body = engineScene(entry, name, detail);
  } else {
    css = entry.css;
    body = entry.html;
  }
  // A style tile is drawn in its OWN tokens, every other tile in the chosen style's.
  const tokens = tokensCss((entry.kind === 'style' ? entry : style).manifest);
  return `<!doctype html><html><head><meta charset="utf-8"><style>${inStyle(tokens)}
${PREVIEW_FRAME_CSS}
${inStyle(css)}</style></head><body>${body}</body></html>`;
}
