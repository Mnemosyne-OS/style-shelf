/**
 * personalMirror — the host's copy of what a person made here (doc 73), the
 * one that survives the frame's origin changing (a dev port, the packaged
 * copy): the personal styles, the named themes and the favourites
 * (doc 186 §16).
 *
 * The page's storage stays the primary. The cart, the filter and the tile
 * size are not mirrored: three clicks get them back.
 *
 * 🚨 The host keeps ONE state document per cartridge and `state.set`
 * replaces it whole. So every write carries the three fields together: a
 * write of one field alone would erase the other two.
 *
 * The doctrine of doc 73, per field: the local copy always wins; the mirror
 * is read back only into a field that is BLANK locally, which is the
 * signature of the app opened on a new origin, and the screen says it
 * restored.
 *
 * @module personal/personalMirror
 */
import { sdk } from '../host/sdk';

/** The fields of the host's document, each the text the page stores. */
export const MIRRORED = ['personal', 'themes', 'favorites'] as const;
export type MirroredField = (typeof MIRRORED)[number];
export type MirrorTexts = Record<MirroredField, string>;

export interface MirrorDoors {
  get: () => Promise<{ state: Partial<Record<MirroredField, unknown>> | null }>;
  set: (texts: MirrorTexts) => Promise<unknown>;
}

/** The host's own doors: `state.get` / `state.set`, under the SDK's default timeout. */
export const hostMirrorDoors: MirrorDoors = {
  get: () => sdk.invoke<{ state: Partial<Record<MirroredField, unknown>> | null }>('state.get'),
  set: (texts) => sdk.invoke('state.set', { state: { ...texts } }),
};

/** True when the stored text holds nothing at all. */
export function isBlank(text: string | null): boolean {
  return !text || text.trim() === '' || text.trim() === '[]';
}

/** The mirrored text of one field to restore, or null: only a blank local copy is ever replaced. */
export function toRestore(
  localText: string | null,
  mirrored: { state: Partial<Record<MirroredField, unknown>> | null } | null,
  field: MirroredField = 'personal',
): string | null {
  if (!isBlank(localText)) return null;
  const text = mirrored?.state?.[field];
  return typeof text === 'string' && !isBlank(text) ? text : null;
}
