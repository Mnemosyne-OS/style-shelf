#!/usr/bin/env node
/**
 * theme-import — turns the themes of two MIT theme packs into catalogue
 * styles (doc 186 §13): daisyUI (oklch) and Skeleton (RGB triplets).
 *
 *   node scripts/theme-import.mjs daisy    <themes dir> <commit sha>
 *   node scripts/theme-import.mjs skeleton <themes dir> <commit sha>
 *
 * <themes dir> holds the theme files downloaded at <commit sha>
 * (daisyUI `packages/daisyui/src/themes/*.css`, kyrolabs/skeleton-theme
 * `src/themes/theme-*.css`). It writes catalog/styles/<pack>-<name>/style.json.
 *
 * Every style carries the same 30 tokens as the shipped styles, all colours
 * the contrast test measures written as #rrggbb. A theme whose accent does
 * not read at 4.5:1 on its ground has the accent's lightness moved (hue and
 * chroma kept) until it does, and the description says by how much. A theme
 * that cannot be made readable is skipped with its reason, never written.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const STYLES = join(ROOT, 'catalog', 'styles');
/** The token list of every shipped style: the atelier can set each one, and no other. */
const TOKENS = Object.keys(JSON.parse(readFileSync(join(STYLES, 'hud-night', 'style.json'), 'utf8')).manifest.tokens);

// ── colour ─────────────────────────────────────────────────────────────────

/** Linear sRGB of an OKLab colour. */
function oklabToLinear(L, a, b) {
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
}

function linearToOklch([r, g, b]) {
  const l = Math.cbrt(0.4122214708 * r + 0.5363329363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const A = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const B = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  return { L, C: Math.hypot(A, B), H: ((Math.atan2(B, A) * 180) / Math.PI + 360) % 360 };
}

const inGamut = (rgb) => rgb.every((c) => c >= -1e-4 && c <= 1 + 1e-4);

/** Linear sRGB of an oklch colour, chroma lowered until it fits in sRGB (hue and lightness kept). */
function oklchToLinear({ L, C, H }) {
  const h = (H * Math.PI) / 180;
  let c = C;
  for (let i = 0; i < 200; i++) {
    const rgb = oklabToLinear(L, c * Math.cos(h), c * Math.sin(h));
    if (inGamut(rgb)) return rgb;
    c *= 0.97;
  }
  return oklabToLinear(L, 0, 0);
}

const gamma = (c) => (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055);
const ungamma = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);

function linearToHex(rgb) {
  return `#${rgb.map((c) => Math.round(Math.min(1, Math.max(0, gamma(c))) * 255).toString(16).padStart(2, '0')).join('')}`;
}

function hexToLinear(hex) {
  return [1, 3, 5].map((i) => ungamma(parseInt(hex.slice(i, i + 2), 16) / 255));
}

const hexOf = (lch) => linearToHex(oklchToLinear(lch));
const lchOfHex = (hex) => linearToOklch(hexToLinear(hex));

/** WCAG 2 contrast of two #rrggbb, computed on the rounded hex the catalogue will measure. */
function contrast(a, b) {
  const lum = (hex) => {
    const [r, g, bl] = hexToLinear(hex);
    return 0.2126 * r + 0.7152 * g + 0.0722 * bl;
  };
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

/** `rgba(r, g, b, a)` of a #rrggbb. */
function rgba(hex, alpha) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** A #rrggbb between two others, `t` of the way from `a` to `b`, mixed in OKLab. */
function mix(a, b, t) {
  const pa = lchOfHex(a);
  const pb = lchOfHex(b);
  const lab = (p) => [p.L, p.C * Math.cos((p.H * Math.PI) / 180), p.C * Math.sin((p.H * Math.PI) / 180)];
  const [la, lb] = [lab(pa), lab(pb)];
  const m = la.map((v, i) => v + (lb[i] - v) * t);
  return linearToHex(oklabToLinear(m[0], m[1], m[2]));
}

// Self-check on known anchors, so a broken conversion never writes a catalogue.
for (const [lch, want] of [
  [{ L: 0, C: 0, H: 0 }, '#000000'],
  [{ L: 1, C: 0, H: 0 }, '#ffffff'],
  [{ L: 0.62796, C: 0.25768, H: 29.234 }, '#ff0000'],
  [{ L: 0.86644, C: 0.29483, H: 142.495 }, '#00ff00'],
  [{ L: 0.45201, C: 0.31321, H: 264.052 }, '#0000ff'],
]) {
  const got = hexOf(lch);
  if (got !== want) throw new Error(`oklch conversion broken: ${JSON.stringify(lch)} gave ${got}, not ${want}`);
}

// ── readability ────────────────────────────────────────────────────────────

const MIN = 4.5;

/**
 * The accent moved in lightness, away from the ground, until text on it and it
 * as text both read at 4.5:1 (the two are one ratio). Null when no lightness does.
 */
function readableAccent(accent, grounds) {
  const worst = (hex) => Math.min(...grounds.map((g) => contrast(hex, g)));
  if (worst(accent) >= MIN) return { hex: accent, moved: null };
  const p = lchOfHex(accent);
  const dir = lchOfHex(grounds[0]).L > 0.6 ? -1 : 1;
  for (let L = p.L; L >= 0 && L <= 1; L += dir * 0.005) {
    const hex = hexOf({ ...p, L });
    if (worst(hex) >= MIN) return { hex, moved: { from: p.L, to: L } };
  }
  return null;
}

/** A text mixed from the ground toward `text`: from `from` of the way, closer until it reads at 4.5:1 on every ground. */
function mutedText(text, grounds, from = 0.55) {
  for (let t = from; t <= 1.0001; t += 0.01) {
    const hex = mix(grounds[0], text, Math.min(1, t));
    if (grounds.every((g) => contrast(hex, g) >= MIN)) return hex;
  }
  return text;
}

/** The accent pushed a step further from the ground: the hover of a solid button. */
function dimmer(accent, ground) {
  const p = lchOfHex(accent);
  const dir = lchOfHex(ground).L > 0.6 ? -1 : 1;
  return hexOf({ ...p, L: Math.min(1, Math.max(0, p.L + dir * 0.07)) });
}

const pct = (L) => `${Math.round(L * 100)}%`;

// ── the 30 tokens ──────────────────────────────────────────────────────────

const SYSTEM_UI = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif";
const MONO = "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace";

/**
 * The tokens of a theme from its few source colours, or the reason it cannot
 * be made readable. `notes` collects what was changed, for the description.
 */
function tokensFrom({ ground, surface, card, line, text, accent, success, warning, error, font, radius, border, depth }) {
  const notes = [];
  // Every colour an element writes as TEXT must read on each ground a text sits on:
  // the page, the surface (panels, table heads) and the card.
  const grounds = [ground, surface, card];
  const acc = readableAccent(accent, grounds);
  if (!acc) return { error: `no lightness of the accent ${accent} reads at ${MIN}:1 on ${grounds.join(', ')}` };
  if (acc.moved) notes.push(`accent lightness moved from ${pct(acc.moved.from)} to ${pct(acc.moved.to)} (oklch) so text on it reads at 4.5:1`);
  for (const g of grounds) if (contrast(text, g) < MIN) return { error: `its text ${text} reads at ${contrast(text, g).toFixed(2)}:1 on ${g}` };
  // The status colours are fills in the source packs (each has its -content); here they are also text.
  const status = {};
  const statusMoved = [];
  for (const [name, hex] of [['success', success], ['warning', warning], ['error', error]]) {
    const r = readableAccent(hex, grounds);
    if (!r) return { error: `no lightness of the ${name} colour ${hex} reads at ${MIN}:1 on ${grounds.join(', ')}` };
    if (r.moved) statusMoved.push(name);
    status[name] = r.hex;
  }
  if (statusMoved.length) notes.push(`${statusMoved.join(', ')} lightness moved so they read as text at 4.5:1`);
  const a = acc.hex;
  // daisyUI depth 0 = flat; a dark ground needs a darker shadow to show at all.
  const shadow = depth > 0 ? `0 8px 22px -12px ${rgba('#000000', lchOfHex(ground).L > 0.6 ? 0.28 : 0.7)}` : 'none';
  const tokens = {
    '--accent': a,
    '--accent-dim': dimmer(a, ground),
    '--accent-glow': rgba(a, 0.16),
    '--accent-border': rgba(a, 0.45),
    '--bg-void': ground,
    '--bg-surface': surface,
    '--bg-panel': surface,
    '--bg-card': card,
    '--bg-hover': rgba(a, 0.08),
    '--text-primary': text,
    '--text-secondary': mutedText(text, grounds, 0.8),
    '--text-muted': mutedText(text, grounds),
    '--text-accent': a,
    '--font-ui': font ?? SYSTEM_UI,
    '--font-mono': MONO,
    '--space-sm': '8px',
    '--space-md': '14px',
    '--space-lg': '22px',
    '--radius-sm': radius.sm,
    '--radius-md': radius.md,
    '--radius-lg': radius.lg,
    '--border-subtle': `${border} solid ${line}`,
    '--border-accent': `${border} solid ${rgba(a, 0.45)}`,
    '--shadow-card': shadow,
    '--shadow-accent': `0 0 22px -6px ${rgba(a, 0.5)}`,
    '--transition-fast': '120ms ease',
    '--transition-normal': '240ms ease',
    '--status-active': status.success,
    '--status-warning': status.warning,
    '--status-overload': status.error,
  };
  const keys = Object.keys(tokens);
  if (keys.length !== TOKENS.length || TOKENS.some((t) => !(t in tokens))) throw new Error(`token list drifted from hud-night: ${keys.join(' ')}`);
  return { tokens, notes };
}

// ── the two packs ──────────────────────────────────────────────────────────

const rem = (v) => {
  const m = /^([\d.]+)(rem|px)$/.exec(v.trim());
  if (!m) throw new Error(`not a length: ${v}`);
  const px = m[2] === 'rem' ? parseFloat(m[1]) * 16 : parseFloat(m[1]);
  return `${Math.round(px)}px`;
};

const titleCase = (s) => s.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');

/** daisyUI: one `name.css` of `--x: value;` lines, colours in oklch. */
function daisy(file, text) {
  const v = Object.fromEntries([...text.matchAll(/(--[\w-]+|color-scheme):\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()]));
  const col = (k) => {
    const m = /^oklch\(([\d.]+)%\s+([\d.]+)\s+([\d.]+)\)$/.exec(v[k] ?? '');
    if (!m) throw new Error(`${file}: ${k} is not oklch: ${v[k]}`);
    return hexOf({ L: parseFloat(m[1]) / 100, C: parseFloat(m[2]), H: parseFloat(m[3]) });
  };
  const name = file.replace(/\.css$/, '');
  return {
    name,
    upstream: 'saadeghi/daisyui',
    path: `packages/daisyui/src/themes/${file}`,
    author: 'daisyUI (Pouya Saadeghi and contributors)',
    scheme: v['color-scheme'],
    source: {
      ground: col('--color-base-100'),
      surface: col('--color-base-200'),
      card: col('--color-base-200'),
      line: col('--color-base-300'),
      text: col('--color-base-content'),
      accent: col('--color-primary'),
      success: col('--color-success'),
      warning: col('--color-warning'),
      error: col('--color-error'),
      radius: { sm: rem(v['--radius-selector']), md: rem(v['--radius-field']), lg: rem(v['--radius-box']) },
      border: rem(v['--border']),
      depth: parseFloat(v['--depth']),
    },
  };
}

/** The GitHub user a Skeleton contest theme names in its header, else Skeleton Labs. */
function skeletonAuthor(text) {
  const m = /made by GitHub user (@[\w-]+)/.exec(text);
  return m ? `${m[1]} for the Skeleton community (via kyrolabs/skeleton-theme)` : 'Skeleton Labs (via kyrolabs/skeleton-theme)';
}

/** Skeleton: `R G B` triplets, a 50-900 ramp per colour, read here in light mode. */
function skeleton(file, text) {
  const root = /:root\s*{([\s\S]*?)}/.exec(text)?.[1] ?? '';
  const v = Object.fromEntries([...root.matchAll(/(--[\w-]+):\s*([^;]+);/g)].map((m) => [m[1], m[2].replace(/\s+/g, ' ').trim()]));
  const triplet = (raw, k) => {
    const ref = /^var\((--[\w-]+)\)$/.exec(raw);
    if (ref) return triplet(v[ref[1]], ref[1]);
    const m = /^(\d+) (\d+) (\d+)$/.exec(raw ?? '');
    if (!m) throw new Error(`${file}: ${k} is not an R G B triplet: ${raw}`);
    return `#${[m[1], m[2], m[3]].map((n) => Number(n).toString(16).padStart(2, '0')).join('')}`;
  };
  const col = (k) => triplet(v[k], k);
  const name = file.replace(/^theme-/, '').replace(/\.css$/, '');
  const first = (f) => f.split(',')[0].trim().replace(/^['"]|['"]$/g, '');
  const base = v['--theme-font-family-base'];
  // A named web font is kept by name with the system stack behind it: nothing is fetched.
  const font = base && first(base) !== 'system-ui' ? `'${first(base)}', ${SYSTEM_UI}` : SYSTEM_UI;
  const roundBase = rem(v['--theme-rounded-base']);
  const roundBox = rem(v['--theme-rounded-container']);
  return {
    name,
    upstream: 'kyrolabs/skeleton-theme',
    path: `src/themes/${file}`,
    author: skeletonAuthor(text),
    scheme: 'light',
    source: {
      ground: col('--color-surface-50'),
      surface: col('--color-surface-100'),
      card: col('--color-surface-100'),
      line: col('--color-surface-200'),
      text: col('--theme-font-color-base'),
      accent: col('--color-primary-500'),
      success: col('--color-success-500'),
      warning: col('--color-warning-500'),
      error: col('--color-error-500'),
      font,
      radius: { sm: roundBase, md: roundBase, lg: roundBox },
      border: rem(v['--theme-border-base']),
      depth: 1,
    },
  };
}

// ── main ───────────────────────────────────────────────────────────────────

const [pack, dir, sha] = process.argv.slice(2);
if (!['daisy', 'skeleton'].includes(pack) || !dir || !/^[0-9a-f]{40}$/.test(sha ?? '')) {
  console.error('usage: node scripts/theme-import.mjs <daisy|skeleton> <themes dir> <40-char commit sha>');
  process.exit(1);
}

const files = readdirSync(dir).filter((f) => (pack === 'daisy' ? f.endsWith('.css') : /^theme-.*\.css$/.test(f) && f !== 'theme-test.css')).sort();
let written = 0;
for (const file of files) {
  const t = (pack === 'daisy' ? daisy : skeleton)(file, readFileSync(join(dir, file), 'utf8'));
  const id = `${pack}-${t.name}`;
  const made = tokensFrom(t.source);
  if (made.error) {
    console.log(`SKIPPED ${id}: ${made.error}`);
    continue;
  }
  const label = pack === 'daisy' ? 'daisyUI' : 'Skeleton';
  const title = `${titleCase(t.name)} (${label})`;
  const description = [
    `${label} theme "${t.name}" (${t.scheme}), from ${t.upstream} ${t.path} at ${sha.slice(0, 12)}, MIT.`,
    ...made.notes.map((n) => `Changed: ${n}.`),
  ].join(' ');
  const entry = {
    id,
    kind: 'style',
    title: { en: title, fr: title, es: title },
    license: 'MIT',
    author: t.author,
    tier: 'free',
    tags: [t.scheme === 'dark' ? 'dark' : 'light', pack === 'daisy' ? 'daisyui' : 'skeleton'],
    manifest: { id, name: title, version: '1.0.0', author: t.author, description, tokens: made.tokens },
  };
  mkdirSync(join(STYLES, id), { recursive: true });
  writeFileSync(join(STYLES, id, 'style.json'), `${JSON.stringify(entry, null, 2)}\n`);
  written++;
  console.log(`wrote ${id}${made.notes.length ? ` (${made.notes.join('; ')})` : ''}`);
}
console.log(`${written} of ${files.length} themes written`);
