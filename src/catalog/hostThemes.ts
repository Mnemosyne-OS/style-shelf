/**
 * hostThemes — the four Mnemosyne OS themes as catalogue styles, read from the
 * host's own stylesheet (doc 186 §20). Pure: CSS text in, tokens out.
 *
 * Used twice: by `scripts/host-theme-import.ts` to write
 * `catalog/styles/mnemosyne-<theme>/style.json`, and by a drift test that
 * re-reads `globals.css` and fails when the host changed a colour and the
 * catalogue did not.
 *
 * A theme = every top-level rule whose selector list holds `:root`,
 * `[data-theme="<id>"]` or `:root[data-theme="<id>"]`, in source order (later
 * wins). Rules inside `@media` and descendant selectors are left out: they are
 * not what a cartridge receives.
 *
 * A translucent text or ground colour is flattened over `--bg-void` to a hex:
 * the catalogue measures contrast on hex only. Inside a cartridge the kit reads
 * the host's live variables, so the flattening is a preview, never what ships.
 *
 * @module catalog/hostThemes
 */

export const HOST_THEMES = ['dark', 'light', 'tokyo-night', 'glass'] as const;
export type HostThemeId = (typeof HOST_THEMES)[number];

/** The variables each theme declares, resolved (var() chains followed). */
export function readHostThemes(css: string): Record<HostThemeId, Record<string, string>> {
  const text = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const rules: { selectors: string[]; decls: [string, string][] }[] = [];
  let depth = 0;
  let start = 0;
  let selector = '';
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '{') {
      if (depth === 0) {
        selector = text.slice(start, i);
        start = i + 1;
      }
      depth++;
    } else if (ch === '}') {
      depth--;
      if (depth === 0) {
        const body = text.slice(start, i);
        // Only plain rules: a body holding another block is an at-rule (@media…).
        const sel = selector.slice(Math.max(selector.lastIndexOf(';'), selector.lastIndexOf('}')) + 1).trim();
        if (!body.includes('{') && !sel.startsWith('@')) {
          const decls = [...body.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()] as [string, string]);
          rules.push({ selectors: sel.split(',').map((s) => s.trim()), decls });
        }
        start = i + 1;
      }
    } else if (ch === ';' && depth === 0) {
      start = i + 1;
    }
  }
  const out = {} as Record<HostThemeId, Record<string, string>>;
  for (const id of HOST_THEMES) {
    const raw: Record<string, string> = {};
    const applies = (s: string) => s === ':root' || s === `[data-theme="${id}"]` || s === `:root[data-theme="${id}"]`;
    for (const r of rules) if (r.selectors.some(applies)) for (const [k, v] of r.decls) raw[k] = v;
    const resolved: Record<string, string> = {};
    for (const k of Object.keys(raw)) resolved[k] = resolveVars(raw, raw[k]);
    out[id] = resolved;
  }
  return out;
}

function resolveVars(vars: Record<string, string>, value: string, depth = 0): string {
  if (depth > 10) return value;
  return value.replace(/var\(\s*(--[\w-]+)\s*(?:,\s*([^()]*(?:\([^()]*\))?[^()]*))?\)/g, (_m, name: string, fallback?: string) =>
    vars[name] !== undefined ? resolveVars(vars, vars[name], depth + 1) : (fallback ?? '').trim());
}

// ── colours ──────────────────────────────────────────────────────────────────

type Rgba = [number, number, number, number];

/** A `#rgb`, `#rrggbb`, `rgb()`, `rgba()` or `color-mix(in srgb, C P%, transparent)`, or null. */
export function parseColour(value: string): Rgba | null {
  const v = value.trim();
  const hex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(v);
  if (hex) {
    const h = hex[1].length === 3 ? hex[1].split('').map((c) => c + c).join('') : hex[1];
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16), 1];
  }
  const rgb = /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)$/i.exec(v);
  if (rgb) return [Number(rgb[1]), Number(rgb[2]), Number(rgb[3]), rgb[4] === undefined ? 1 : Number(rgb[4])];
  const mix = /^color-mix\(\s*in srgb\s*,\s*(.+?)\s+([\d.]+)%\s*,\s*transparent\s*\)$/i.exec(v);
  if (mix) {
    const c = parseColour(mix[1]);
    return c ? [c[0], c[1], c[2], c[3] * (Number(mix[2]) / 100)] : null;
  }
  return null;
}

const toHex = (c: Rgba) => `#${c.slice(0, 3).map((n) => Math.round(Math.min(255, Math.max(0, n))).toString(16).padStart(2, '0')).join('')}`;
const toRgba = (c: Rgba, a: number) => `rgba(${c.slice(0, 3).map((n) => Math.round(n)).join(', ')}, ${a})`;

/** The colour painted over `ground`, as a hex (alpha composited). */
export function flatten(value: string, ground: string): string | null {
  const c = parseColour(value);
  const g = parseColour(ground);
  if (!c || !g) return null;
  const a = c[3];
  return toHex([c[0] * a + g[0] * (1 - a), c[1] * a + g[1] * (1 - a), c[2] * a + g[2] * (1 - a), 1]);
}

// ── the 30 tokens of a catalogue style ───────────────────────────────────────

/** Tokens drawn as text or as a ground a text sits on: flattened to hex for the catalogue. */
const FLATTENED = new Set(['--bg-surface', '--bg-panel', '--bg-card', '--text-primary', '--text-secondary', '--text-muted', '--text-accent', '--accent', '--status-active', '--status-warning', '--status-overload']);

/**
 * A theme's 30 catalogue tokens. `sources` maps a kit token to the host
 * variable it reads first (kit/hostTokens); the 8 shared names read the host
 * variable of the same name. Shape tokens have no host equivalent.
 */
export function hostThemeTokens(vars: Record<string, string>, sources: Readonly<Record<string, string>>, order: readonly string[]): Record<string, string> | string {
  const ground = vars['--bg-void'];
  if (!parseColour(ground ?? '')) return `--bg-void is not a colour: ${String(ground)}`;
  const accent = parseColour(vars['--accent'] ?? '');
  if (!accent) return `--accent is not a colour: ${String(vars['--accent'])}`;
  const dim: Rgba = [accent[0] * 0.8, accent[1] * 0.8, accent[2] * 0.8, 1];
  const derived: Record<string, string> = {
    '--accent-dim': toHex(dim),
    '--accent-border': toRgba(accent, 0.45),
    '--shadow-accent': `0 0 22px -6px ${toRgba(accent, 0.5)}`,
    '--font-ui': vars['--font-family'] ?? "'Inter', system-ui, sans-serif",
    '--font-mono': vars['--font-mono'] ?? 'ui-monospace, monospace',
    '--space-sm': '8px',
    '--space-md': '14px',
    '--space-lg': '22px',
    '--radius-sm': '6px',
    '--radius-md': '10px',
    '--radius-lg': '16px',
    '--transition-fast': '120ms ease',
    '--transition-normal': '240ms ease',
  };
  const out: Record<string, string> = {};
  for (const token of order) {
    let value = derived[token] ?? vars[sources[token] ?? token];
    if (value === undefined) return `the host declares no ${sources[token] ?? token} for ${token}`;
    if (FLATTENED.has(token)) {
      const flat = flatten(value, ground);
      if (!flat) return `${token} is not a colour: ${value}`;
      value = flat;
    }
    out[token] = value;
  }
  return out;
}
