/**
 * catalogModel — the catalogue read from its files (doc 186 §3). Pure.
 *
 * One folder per entry: `catalog/<kind dir>/<id>/` with `style.json` for a
 * style, `entry.json` + `element.css` + `demo.html` for an element, and
 * `entry.json` alone for an icon pack. Folders are read in path order, so the
 * catalogue reads the same on every machine.
 *
 * 🎭 An entry that cannot be read is REFUSED with its reason, never dropped:
 * a catalogue of 30 that shows 28 would read « there are 28 ».
 *
 * @module catalog/catalogModel
 */
import { validateSkinManifest, type SkinManifest } from '@mnemosyne_os/design-sdk';
import { githubHandle } from '../lib/github';
import {
  ELEMENT_KINDS,
  ENTRY_KINDS,
  KIND_DIRS,
  type Catalog,
  type CatalogEntry,
  type ElementKind,
  type EntryKind,
  type IconSample,
  type RefusedEntry,
  type Tier,
  type Title,
} from './types';

const ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DIR_KINDS = new Map<string, EntryKind>(Object.entries(KIND_DIRS).map(([k, d]) => [d, k as EntryKind]));

type Raw = Record<string, unknown>;

/** The part of a path after its `catalog/` segment, or null when it has none. */
function inCatalog(path: string): string | null {
  const norm = path.replace(/\\/g, '/');
  const at = norm.lastIndexOf('catalog/');
  return at < 0 ? null : norm.slice(at + 'catalog/'.length);
}

function isRecord(v: unknown): v is Raw {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function readTitle(v: unknown): Title | string {
  if (!isRecord(v)) return 'title: missing';
  for (const lang of ['en', 'fr', 'es'] as const) {
    if (typeof v[lang] !== 'string' || !(v[lang] as string).trim()) return `title.${lang}: missing`;
  }
  return { en: v.en as string, fr: v.fr as string, es: v.es as string };
}

/** The fields every entry carries, or the reason they cannot be read. */
function readBase(raw: Raw, id: string, kind: EntryKind): { title: Title; license: string; author: string; tier: Tier; tags: string[]; github?: string } | string {
  if (raw.id !== id) return `id "${String(raw.id)}" is not its folder "${id}"`;
  if (raw.kind !== kind) return `kind "${String(raw.kind)}" is not its folder's "${kind}"`;
  const title = readTitle(raw.title);
  if (typeof title === 'string') return title;
  if (typeof raw.license !== 'string' || !raw.license.trim()) return 'license: missing';
  if (typeof raw.author !== 'string' || !raw.author.trim()) return 'author: missing';
  if (raw.tier !== 'free' && raw.tier !== 'premium') return `tier "${String(raw.tier)}" is neither free nor premium`;
  const tags = raw.tags === undefined ? [] : raw.tags;
  if (!Array.isArray(tags) || tags.some((t) => typeof t !== 'string')) return 'tags: not a list of words';
  // A credit links to a profile and loads its picture: only a real GitHub handle.
  let github: string | undefined;
  if (raw.github !== undefined) {
    const handle = typeof raw.github === 'string' ? githubHandle(raw.github) : null;
    if (!handle || handle !== raw.github) return `github "${String(raw.github)}" is not a GitHub username`;
    github = handle;
  }
  return { title, license: raw.license, author: raw.author, tier: raw.tier, tags: tags as string[], ...(github ? { github } : {}) };
}

function parseJson(text: string | undefined, name: string): Raw | string {
  if (text === undefined) return `${name}: missing`;
  try {
    const v: unknown = JSON.parse(text);
    return isRecord(v) ? v : `${name}: not an object`;
  } catch (err) {
    return `${name}: ${err instanceof Error ? err.message : String(err)}`;
  }
}

/** Markup that would run if it were ever put in a page: never an icon. */
const RUNS = /<script|\son[a-z]+\s*=|javascript:|<foreignObject/i;

/** The icons of a `samples.json` (none when there is no file), or the reason they are refused. */
function readSamples(text: string | undefined): IconSample[] | string {
  if (text === undefined) return [];
  const raw = parseJson(text, 'samples.json');
  if (typeof raw === 'string') return raw;
  if (!Array.isArray(raw.samples)) return 'samples.json: no samples list';
  const out: IconSample[] = [];
  for (const s of raw.samples as unknown[]) {
    if (!isRecord(s) || typeof s.name !== 'string' || typeof s.svg !== 'string') return 'samples.json: a sample without name or svg';
    const svg = s.svg.trim();
    if (!svg.startsWith('<svg') || !svg.endsWith('</svg>')) return `samples.json: ${s.name} is not one <svg>`;
    if (RUNS.test(svg)) return `samples.json: ${s.name} holds something that runs`;
    out.push({ name: s.name, svg });
  }
  return out;
}

/** One entry from the files of its folder, or the reason it is refused. */
function readEntry(kind: EntryKind, id: string, files: Map<string, string>): CatalogEntry | string {
  if (!ID.test(id)) return `id "${id}" is not lowercase words joined by dashes`;
  if (kind === 'style') {
    const raw = parseJson(files.get('style.json'), 'style.json');
    if (typeof raw === 'string') return raw;
    const base = readBase(raw, id, kind);
    if (typeof base === 'string') return base;
    const checked = validateSkinManifest(raw.manifest);
    if (!checked.ok) return `manifest: ${checked.error}`;
    const manifest: SkinManifest = checked.skin;
    if (manifest.id !== id) return `manifest.id "${manifest.id}" is not its folder "${id}"`;
    return { ...base, id, kind, manifest };
  }
  const raw = parseJson(files.get('entry.json'), 'entry.json');
  if (typeof raw === 'string') return raw;
  const base = readBase(raw, id, kind);
  if (typeof base === 'string') return base;
  if (kind === 'icons' || kind === 'engine') {
    if (typeof raw.homepage !== 'string' || !raw.homepage.startsWith('https://')) return 'homepage: not an https address';
    const pkgs = raw.packages;
    if (!isRecord(pkgs) || Object.keys(pkgs).length === 0 || Object.values(pkgs).some((p) => typeof p !== 'string' || !p.trim())) {
      return 'packages: not a list of npm packages';
    }
    if (kind === 'engine') {
      const use = readTitle(raw.use);
      if (typeof use === 'string') return use.replace(/^title/, 'use');
      return { ...base, id, kind, homepage: raw.homepage, packages: pkgs as Record<string, string>, use };
    }
    const samples = readSamples(files.get('samples.json'));
    if (typeof samples === 'string') return samples;
    const licenseText = files.get('LICENSE.txt')?.trim() || null;
    // Copied icons travel with their licence, or they are not copied.
    if (samples.length > 0 && !licenseText) return 'LICENSE.txt: missing next to samples.json';
    return { ...base, id, kind, homepage: raw.homepage, packages: pkgs as Record<string, string>, samples, licenseText };
  }
  const css = files.get('element.css');
  const html = files.get('demo.html');
  if (!css?.trim()) return 'element.css: missing';
  if (!html?.trim()) return 'demo.html: missing';
  return { ...base, id, kind: kind as ElementKind, css: css.trim(), html: html.trim() };
}

/**
 * The catalogue from its files, keyed by path (any prefix before `catalog/`).
 * Every folder gives one entry or one refusal; ids are unique across kinds,
 * because the cart and the agent name an entry by its id alone.
 */
export function parseCatalog(files: Record<string, string>): Catalog {
  const folders = new Map<string, Map<string, string>>();
  const refused: RefusedEntry[] = [];
  for (const [path, text] of Object.entries(files)) {
    const rel = inCatalog(path);
    const parts = rel?.split('/') ?? [];
    if (parts.length !== 3) {
      refused.push({ path, reason: 'not in a catalog/<kind>/<id>/ folder' });
      continue;
    }
    const key = `${parts[0]}/${parts[1]}`;
    if (!folders.has(key)) folders.set(key, new Map());
    folders.get(key)!.set(parts[2], text);
  }

  const entries: CatalogEntry[] = [];
  const seen = new Set<string>();
  // Styles first, then the elements, then the icon packs (ENTRY_KINDS); by id inside a kind.
  const rank = (key: string) => {
    const kind = DIR_KINDS.get(key.split('/')[0]);
    return kind ? ENTRY_KINDS.indexOf(kind) : ENTRY_KINDS.length;
  };
  const keys = [...folders.keys()].sort((a, b) => rank(a) - rank(b) || (a < b ? -1 : a > b ? 1 : 0));
  for (const key of keys) {
    const [dir, id] = key.split('/');
    const kind = DIR_KINDS.get(dir);
    const path = `catalog/${key}`;
    if (!kind) {
      refused.push({ path, reason: `"${dir}" is not a kind of the catalogue` });
      continue;
    }
    const entry = readEntry(kind, id, folders.get(key)!);
    if (typeof entry === 'string') {
      refused.push({ path, reason: entry });
      continue;
    }
    if (seen.has(entry.id)) {
      refused.push({ path, reason: `id "${entry.id}" is already taken by another entry` });
      continue;
    }
    seen.add(entry.id);
    entries.push(entry);
  }
  return { entries, refused };
}

/** True for a kind whose entries carry CSS and a preview markup. */
export function isElementKind(kind: EntryKind): kind is ElementKind {
  return (ELEMENT_KINDS as readonly string[]).includes(kind);
}
