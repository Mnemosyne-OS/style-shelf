/**
 * types — the shapes of the Style Shelf catalogue (doc 186 §3). Types only.
 *
 * @module catalog/types
 */
import type { SkinManifest } from '@mnemosyne_os/design-sdk';

/** The kinds of UI element, each drawn on the tokens of the chosen style. */
export const ELEMENT_KINDS = ['button', 'card', 'input', 'badge', 'alert', 'tooltip', 'menu', 'table', 'placeholder', 'motion', 'background'] as const;
export type ElementKind = (typeof ELEMENT_KINDS)[number];

/** Every kind of entry, in the order the filter shows them. */
export const ENTRY_KINDS = ['style', ...ELEMENT_KINDS, 'icons'] as const;
export type EntryKind = (typeof ENTRY_KINDS)[number];

/** The catalogue folder of each kind. */
export const KIND_DIRS: Record<EntryKind, string> = {
  style: 'styles',
  button: 'buttons',
  card: 'cards',
  input: 'inputs',
  badge: 'badges',
  alert: 'alerts',
  tooltip: 'tooltips',
  menu: 'menus',
  table: 'tables',
  placeholder: 'placeholders',
  motion: 'motion',
  background: 'backgrounds',
  icons: 'icons',
};

/** Reserved for premium entries (doc 186 §9): read by nothing that refuses. */
export type Tier = 'free' | 'premium';

/** A name in the host's three first languages. */
export interface Title {
  en: string;
  fr: string;
  es: string;
}

interface EntryBase {
  id: string;
  title: Title;
  license: string;
  author: string;
  tier: Tier;
  tags: string[];
  /** The GitHub account of whoever proposed it: its picture and link show on the tile (doc 186 §21). */
  github?: string;
}

/** A style: a design-sdk skin manifest, the tokens every element reads. */
export interface StyleEntry extends EntryBase {
  kind: 'style';
  manifest: SkinManifest;
  /** Set on a personal style (doc 186 §11): made on this machine, from a shipped one. */
  personal?: { basedOn: string; updatedAt: string };
}

/** A UI element: its CSS (on the style's tokens only) and the markup of its preview. */
export interface ElementEntry extends EntryBase {
  kind: ElementKind;
  css: string;
  html: string;
}

/** One icon copied from a pack to show it (lot 4), with the pack's licence beside it. */
export interface IconSample {
  name: string;
  svg: string;
}

/**
 * An icon pack, referenced by its npm packages (doc 186 §8). The project
 * installs the pack; the catalogue holds only a few samples to show it, and
 * then the pack's licence text with them.
 */
export interface IconPackEntry extends EntryBase {
  kind: 'icons';
  homepage: string;
  /** Package name per framework (`react`, `vue`, `svelte`, `any`). */
  packages: Record<string, string>;
  samples: IconSample[];
  /** The pack's LICENSE, present whenever samples are. */
  licenseText: string | null;
}

export type CatalogEntry = StyleEntry | ElementEntry | IconPackEntry;

/** An entry the catalogue could not take, with the reason, never dropped in silence. */
export interface RefusedEntry {
  path: string;
  reason: string;
}

export interface Catalog {
  entries: CatalogEntry[];
  refused: RefusedEntry[];
}
