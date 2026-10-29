/**
 * buildKit — what « Validate » produces from the cart (doc 186 §5). Pure.
 *
 * ONE function for the button and for the agent's `cart` action (doc 149 §3:
 * an action does what the button does): the files written into the project,
 * the file downloaded in a plain browser and the agent's answer all come from
 * here.
 *
 *   kit.json      the style (a design-sdk SkinManifest), the elements WITH
 *                 their code, the icon packs, the licences
 *   tokens.css    `:root { --accent: … }`
 *   elements.css  one commented block per element (name, licence, author)
 *   BRIEF.md      what the IDE's agent does with the rest
 *
 * The brief is written for an agent, in English like the code it lands next to.
 *
 * @module kit/buildKit
 */
import type { SkinManifest } from '@mnemosyne_os/design-sdk';
import type { Cart } from '../cart/cartModel';
import type { Catalog, ElementEntry, StyleEntry, Tier, Title } from '../catalog/types';
import { withHostFallback } from './hostTokens';

/** The folder the kit is written to, inside the project. */
export const KIT_DIR = 'style-shelf';

/** The four files of the kit, in the order they are written; the cart names them before the write (doc 186 §17). */
export const KIT_FILES = ['kit.json', 'tokens.css', 'elements.css', 'BRIEF.md'] as const;
export const KIT_FORMAT = 'style-shelf-kit/1';

export interface KitElement {
  id: string;
  kind: ElementEntry['kind'];
  title: Title;
  license: string;
  author: string;
  tier: Tier;
  css: string;
  html: string;
}

export interface KitIconPack {
  id: string;
  title: Title;
  license: string;
  author: string;
  homepage: string;
  packages: Record<string, string>;
}

export interface Kit {
  format: typeof KIT_FORMAT;
  createdAt: string;
  style: SkinManifest & { title: Title; license: string };
  elements: KitElement[];
  icons: KitIconPack[];
  /** Every licence the kit carries, once each, sorted. */
  licenses: string[];
}

export interface KitFile {
  name: string;
  content: string;
}

export type KitBuild = { ok: true; kit: Kit; files: KitFile[] } | { ok: false; missing: 'style' };

/** The kit of a cart, or what is missing for one. Ids the catalogue lacks are skipped (the cart is reconciled first). */
export function buildKit(cart: Cart, catalog: Catalog, createdAt: string): KitBuild {
  const byId = new Map(catalog.entries.map((e) => [e.id, e]));
  const style = cart.styleId ? byId.get(cart.styleId) : undefined;
  if (!style || style.kind !== 'style') return { ok: false, missing: 'style' };

  const elements: KitElement[] = [];
  const icons: KitIconPack[] = [];
  for (const id of cart.itemIds) {
    const e = byId.get(id);
    if (!e || e.kind === 'style') continue;
    if (e.kind === 'icons') {
      icons.push({ id: e.id, title: e.title, license: e.license, author: e.author, homepage: e.homepage, packages: e.packages });
    } else {
      elements.push({ id: e.id, kind: e.kind, title: e.title, license: e.license, author: e.author, tier: e.tier, css: e.css, html: e.html });
    }
  }
  const licenses = [...new Set([style.license, ...elements.map((e) => e.license), ...icons.map((i) => i.license)])].sort();
  const kit: Kit = {
    format: KIT_FORMAT,
    createdAt,
    style: { ...style.manifest, title: style.title, license: style.license },
    elements,
    icons,
    licenses,
  };
  return {
    ok: true,
    kit,
    files: [
      { name: 'kit.json', content: `${JSON.stringify(kit, null, 2)}\n` },
      { name: 'tokens.css', content: tokensFile(style) },
      { name: 'elements.css', content: elementsFile(elements) },
      { name: 'BRIEF.md', content: briefMarkdown(kit, { embedFiles: false }) },
    ],
  };
}

/**
 * The style's variables for the project (doc 186 §20). A token the Mnemosyne OS
 * host also carries under another name reads the host's variable first, so the
 * app follows the user's theme inside a cartridge and the style anywhere else.
 */
export function kitTokensCss(manifest: SkinManifest): string {
  const lines = Object.entries(manifest.tokens).map(([k, v]) => `  ${k}: ${withHostFallback(k, String(v))};`);
  return `:root {\n${lines.join('\n')}\n}`;
}

function tokensFile(style: StyleEntry): string {
  return `/* Style Shelf · ${style.title.en} (${style.id}) · ${style.license} · ${style.author} */\n${kitTokensCss(style.manifest)}\n`;
}

function elementsFile(elements: KitElement[]): string {
  if (elements.length === 0) return '/* Style Shelf · no element in this kit */\n';
  return `${elements.map((e) => `/* ── ${e.title.en} (${e.kind}, ${e.id}) · ${e.license} · ${e.author} ── */\n${e.css}\n`).join('\n')}`;
}

function iconLine(i: KitIconPack): string {
  const pkgs = Object.entries(i.packages).map(([fw, p]) => `${fw}: \`${p}\``).join(', ');
  return `- **${i.title.en}** · ${i.license} · ${i.homepage} · ${pkgs}`;
}

/**
 * The agent's instructions. With `embedFiles`, tokens.css and elements.css are
 * written inside it: that is the brief copied to the clipboard, which has no
 * files next to it.
 */
export function briefMarkdown(kit: Kit, opts: { embedFiles: boolean }): string {
  const style = kit.style;
  const out: string[] = [
    `# Style Shelf kit: ${style.title.en}`,
    '',
    'Apply this kit to the project.',
    '',
    `1. Load the style's variables once at the app root${opts.embedFiles ? ' (the `tokens.css` block below)' : ' (`tokens.css`)'}, or turn them into the project's own theme (Tailwind config, CSS-in-JS theme, design tokens). Keep their names.`,
    "2. Build each element below in the project's framework and component style. Read every colour, radius, spacing, font, shadow and duration from the variables: never hard-code a value the style defines.",
    '3. Keep each `prefers-reduced-motion` rule an element has.',
    '4. Install the icon packs listed with the package for the project\'s framework.',
    '5. Keep the licence notices.',
    "6. If the project is a Mnemosyne OS cartridge, call `onHostConfig()` from `@mnemosyne_os/cartridge-sdk` in its entry file. The app then takes the user's theme: `tokens.css` already reads the host's variables first. Border variables are colours: write `1px solid var(--border-subtle)`.",
    '',
    '## Style',
    '',
    `- **${style.title.en}** (\`${style.id}\`) · ${style.license} · ${style.author ?? 'unknown'}${style.description ? ` · ${style.description}` : ''}`,
    '',
    '## Elements',
    '',
  ];
  if (kit.elements.length === 0) out.push('None.', '');
  for (const e of kit.elements) {
    out.push(`### ${e.title.en} (${e.kind}, \`${e.id}\`) · ${e.license}`, '', 'Markup of the preview:', '', '```html', e.html, '```', '');
  }
  out.push('## Icon packs', '');
  if (kit.icons.length === 0) out.push('None.');
  for (const i of kit.icons) out.push(iconLine(i));
  out.push('', '## Licences', '', kit.licenses.join(', '), '');
  if (opts.embedFiles) {
    out.push('## tokens.css', '', '```css', kitTokensCss(style), '```', '', '## elements.css', '', '```css', elementsFile(kit.elements).trimEnd(), '```', '');
  } else {
    out.push('## Files', '', '- `tokens.css`: the variables', '- `elements.css`: the CSS of each element', '- `kit.json`: everything above, as data', '');
  }
  return out.join('\n');
}
