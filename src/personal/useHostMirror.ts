/**
 * useHostMirror — the host's copy of the personal styles, the themes and the
 * favourites, kept as ONE document (doc 186 §16, doc 73).
 *
 * - Read once, inside Mnemosyne OS: each field that is blank locally takes
 *   the host's text, and the caller says how many items came back.
 * - A field the person changed BEFORE the answer is not blank any more, yet
 *   holds only what was done in those seconds: the host's items are merged
 *   into it, never thrown away (a star on opening kept only that star).
 * - Written only after a change the person made (`markChanged`), never at
 *   start, and never before the first read has answered: a person who stars
 *   an entry on a new origin before the host replied would otherwise write a
 *   blank list of themes over the host's.
 * - 🚨 A first read that FAILED blocks every write of the session, and the
 *   screen says so: written blind, one star would replace the host's whole
 *   document with what this page holds.
 * - Every write carries the three fields (the host replaces the document).
 *
 * @module personal/useHostMirror
 */
import { useCallback, useEffect, useRef, useState } from 'react';
import { isBlank, MIRRORED, toRestore, type MirroredField, type MirrorDoors, type MirrorTexts } from './personalMirror';

/** How a host text comes back: into a blank field, or merged into one changed before the answer. */
export type RestoreMode = 'replace' | 'merge';

export interface HostMirrorState {
  /** How many items each field got back from the host, 0 when none did. */
  restored: Record<MirroredField, number>;
  /** Why the host did not keep its copy, null when it did (or was never asked). */
  error: string | null;
  /** Why the host's copy could not be read; while set, nothing is written to it. */
  readError: string | null;
  /** To call on every change the person makes to a mirrored field. */
  markChanged: (field: MirroredField) => void;
}

const NONE: Record<MirroredField, number> = { personal: 0, themes: 0, favorites: 0 };

/**
 * `texts` are the fields as the page stores them right now; `restore` puts a
 * field's host text back and answers how many items it brought (0 = nothing).
 */
export function useHostMirror(
  inHost: boolean,
  mirror: MirrorDoors,
  texts: MirrorTexts,
  restore: (field: MirroredField, text: string, mode: RestoreMode) => number,
): HostMirrorState {
  const [restored, setRestored] = useState(NONE);
  const [error, setError] = useState<string | null>(null);
  const [readError, setReadError] = useState<string | null>(null);
  // False until the first read answered (or failed): no write before that.
  const [answered, setAnswered] = useState(false);
  const changed = useRef(new Set<MirroredField>());
  const asked = useRef(false);
  const current = useRef(texts);
  current.current = texts;
  const restoreRef = useRef(restore);
  restoreRef.current = restore;

  useEffect(() => {
    if (!inHost || asked.current) return undefined;
    asked.current = true;
    let live = true;
    mirror.get().then(
      (answer) => {
        if (!live) return;
        const back = { ...NONE };
        for (const field of MIRRORED) {
          const blank = toRestore(current.current[field], answer, field);
          if (blank) {
            back[field] = restoreRef.current(field, blank, 'replace');
            continue;
          }
          const host = answer?.state?.[field];
          if (changed.current.has(field) && typeof host === 'string' && !isBlank(host)) {
            back[field] = restoreRef.current(field, host, 'merge');
          }
        }
        setRestored(back);
        setAnswered(true);
      },
      (err: unknown) => {
        const detail = err instanceof Error ? err.message : String(err);
        console.warn('[style-shelf] host copy unreadable, nothing will be written to it:', detail);
        if (!live) return;
        setReadError(detail);
        setAnswered(true);
      },
    );
    return () => { live = false; };
  }, [inHost, mirror]);

  const { personal, themes, favorites } = texts;
  useEffect(() => {
    if (!inHost || !answered || readError !== null || changed.current.size === 0) return;
    mirror.set({ personal, themes, favorites }).then(
      () => setError(null),
      (err: unknown) => {
        const detail = err instanceof Error ? err.message : String(err);
        console.warn('[style-shelf] host copy not written:', detail);
        setError(detail);
      },
    );
  }, [personal, themes, favorites, inHost, answered, readError, mirror]);

  const markChanged = useCallback((field: MirroredField) => { changed.current.add(field); }, []);
  return { restored, error, readError, markChanged };
}
