/**
 * personalModel — the styles a person makes from a shipped one (doc 186 §12,
 * lot 2). Pure.
 *
 * A personal style starts as a copy of a catalogue style, under an id of its
 * own (`my-<name>`) so it never shadows a shipped entry or a future one. It
 * keeps the licence and the author of the style it came from: a derivative of
 * an MIT style carries its notice (written into the manifest's description).
 *
 * Every change goes through the design-sdk validator, the same one a shipped
 * style passes: a personal style is a SkinManifest like any other, so it can
 * be exported, imported elsewhere, and proposed to the catalogue (lot 3).
 *
 * @module personal/personalModel
 */
import { validateSkinManifest, type SkinManifest } from '@mnemosyne_os/design-sdk';
import type { StyleEntry } from '../catalog/types';

/** Where the personal styles are kept in the page's storage. */
export const PERSONAL_KEY = 'style-shelf.personal';
/** The prefix of every personal id. */
export const PERSONAL_PREFIX = 'my-';
/** The schema a design-sdk skin file names. */
export const SKIN_SCHEMA = 'https://unpkg.com/@mnemosyne_os/design-sdk/skin-schema.json';

export interface PersonalStyle {
  id: string;
  name: string;
  /** Who made it; empty until the person says. */
  author: string;
  /** The shipped style it was made from, its licence and its author (the notice it keeps). */
  basedOn: string;
  license: string;
  baseAuthor: string;
  updatedAt: string;
  tokens: Record<string, string>;
}

/** `Néon du soir !` → `neon-du-soir`. Empty when nothing usable is left. */
export function slugify(name: string): string {
  return name
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40)
    .replace(/-+$/g, '');
}

/** A personal id for `name` that no id in `taken` holds (`my-x`, then `my-x-2`, …). */
export function personalId(name: string, taken: ReadonlySet<string>): string {
  const base = `${PERSONAL_PREFIX}${slugify(name) || 'style'}`;
  if (!taken.has(base)) return base;
  let n = 2;
  while (taken.has(`${base}-${n}`)) n += 1;
  return `${base}-${n}`;
}

/** A new personal style, a copy of `base` named `name`. */
export function createPersonal(base: StyleEntry, name: string, taken: ReadonlySet<string>, now: string): PersonalStyle {
  const tokens: Record<string, string> = {};
  for (const [k, v] of Object.entries(base.manifest.tokens)) if (typeof v === 'string') tokens[k] = v;
  return {
    id: personalId(name, taken),
    name,
    author: '',
    basedOn: base.manifest.id,
    license: base.license,
    baseAuthor: base.author,
    updatedAt: now,
    tokens,
  };
}

/** The style with one token set to `value` (the id never changes). */
export function setToken(p: PersonalStyle, token: string, value: string): PersonalStyle {
  return { ...p, tokens: { ...p.tokens, [token]: value } };
}

/** The design-sdk manifest of a personal style. */
export function toManifest(p: PersonalStyle): SkinManifest {
  return {
    id: p.id,
    name: p.name,
    version: '1.0.0',
    author: p.author.trim() || p.baseAuthor,
    description: `Based on ${p.basedOn} (${p.license}, ${p.baseAuthor}).`,
    tokens: { ...p.tokens },
  };
}

/** The catalogue entry a personal style shows as, next to the shipped styles. */
export function toEntry(p: PersonalStyle): StyleEntry {
  const manifest = toManifest(p);
  return {
    id: p.id,
    kind: 'style',
    title: { en: p.name, fr: p.name, es: p.name },
    license: p.license,
    author: manifest.author ?? p.baseAuthor,
    tier: 'free',
    tags: ['personal'],
    manifest,
    personal: { basedOn: p.basedOn, updatedAt: p.updatedAt },
  };
}

/** Null when the style can be kept, else what the design-sdk validator refuses. */
export function checkPersonal(p: PersonalStyle): string | null {
  if (!p.name.trim()) return 'name: missing';
  const v = validateSkinManifest(toManifest(p));
  return v.ok ? null : v.error;
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

/** One stored style, or null when it is not one. */
function readStored(v: unknown): PersonalStyle | null {
  if (!isRecord(v)) return null;
  const { id, name, author, basedOn, license, baseAuthor, updatedAt, tokens } = v;
  if (typeof id !== 'string' || !id.startsWith(PERSONAL_PREFIX) || typeof name !== 'string' || !name.trim()) return null;
  if (typeof basedOn !== 'string' || typeof license !== 'string' || typeof baseAuthor !== 'string' || typeof updatedAt !== 'string') return null;
  if (!isRecord(tokens) || Object.values(tokens).some((t) => typeof t !== 'string')) return null;
  const p: PersonalStyle = {
    id, name, author: typeof author === 'string' ? author : '', basedOn, license, baseAuthor, updatedAt, tokens: tokens as Record<string, string>,
  };
  return checkPersonal(p) === null ? p : null;
}

/**
 * The personal styles from their stored text. A style that no longer reads is
 * left out AND counted, so the screen can say it; an id seen twice keeps the
 * first.
 */
export function parseStored(text: string | null): { styles: PersonalStyle[]; refused: number } {
  if (!text) return { styles: [], refused: 0 };
  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch (err) {
    console.warn('[style-shelf] personal styles unreadable:', err instanceof Error ? err.message : err);
    return { styles: [], refused: 1 };
  }
  if (!Array.isArray(raw)) return { styles: [], refused: 1 };
  const styles: PersonalStyle[] = [];
  let refused = 0;
  for (const item of raw) {
    const p = readStored(item);
    if (!p || styles.some((s) => s.id === p.id)) {
      refused += 1;
      continue;
    }
    styles.push(p);
  }
  return { styles, refused };
}

export function serialize(styles: PersonalStyle[]): string {
  return JSON.stringify(styles);
}

/** The list with `p` in place of the style of the same id, or added first. */
export function upsert(styles: PersonalStyle[], p: PersonalStyle): PersonalStyle[] {
  return styles.some((s) => s.id === p.id) ? styles.map((s) => (s.id === p.id ? p : s)) : [p, ...styles];
}

/** The text of the `.json` file a personal style exports to: a design-sdk skin. */
export function exportSkin(p: PersonalStyle): string {
  return `${JSON.stringify({ $schema: SKIN_SCHEMA, ...toManifest(p) }, null, 2)}\n`;
}

/**
 * A personal style from a skin file. Anything the design-sdk validator
 * refuses is refused with its words; the id becomes a personal one, so an
 * imported skin never takes the place of a catalogue entry.
 *
 * A skin may set one token only (the design-sdk allows it): the others come
 * from `base`, or the elements reading them would draw with nothing.
 */
export function importSkin(text: string, base: StyleEntry, taken: ReadonlySet<string>, now: string): PersonalStyle | { error: string } {
  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch (err) {
    return { error: err instanceof Error ? err.message : String(err) };
  }
  if (isRecord(raw)) delete raw.$schema;
  const v = validateSkinManifest(raw);
  if (!v.ok) return { error: v.error };
  const m = v.skin;
  const tokens: Record<string, string> = {};
  for (const [k, val] of Object.entries({ ...base.manifest.tokens, ...m.tokens })) if (typeof val === 'string') tokens[k] = val;
  return {
    id: personalId(m.name, taken),
    name: m.name,
    author: m.author ?? '',
    basedOn: m.id,
    license: 'unknown',
    baseAuthor: m.author ?? 'unknown',
    updatedAt: now,
    tokens,
  };
}
