/**
 * usePersonalStyles — the personal styles as React state (doc 186 §12): read
 * once from the page's storage and written back on every change.
 *
 * The host's copy is not kept here: it is one document shared with the themes
 * and the favourites (`useHostMirror`, doc 186 §16). `restore` is how that copy
 * comes back into a blank page.
 *
 * @module personal/usePersonalStyles
 */
import { useCallback, useState } from 'react';
import { writeChoice } from '../lib/choiceStore';
import { PERSONAL_KEY, parseStored, serialize, upsert, type PersonalStyle } from './personalModel';

export interface PersonalStylesState {
  styles: PersonalStyle[];
  /** Stored styles that no longer read, left out at start. */
  refusedAtLoad: number;
  keep: (p: PersonalStyle) => void;
  remove: (id: string) => void;
  /**
   * Puts the host's text back and answers how many styles it brought: in place of
   * a blank list (`replace`), or the host's styles this page does not have (`merge`).
   */
  restore: (text: string, mode: 'replace' | 'merge') => number;
}

export function usePersonalStyles(storage: Storage | null): PersonalStylesState {
  const [first] = useState(() => {
    try {
      return parseStored(storage?.getItem(PERSONAL_KEY) ?? null);
    } catch (err) {
      console.warn('[style-shelf] personal styles unreadable:', err);
      return { styles: [], refused: 0 };
    }
  });
  const [styles, setStyles] = useState<PersonalStyle[]>(first.styles);

  const change = useCallback((next: (s: PersonalStyle[]) => PersonalStyle[]) => {
    setStyles((s) => {
      const out = next(s);
      writeChoice(storage, PERSONAL_KEY, serialize(out));
      return out;
    });
  }, [storage]);

  const keep = useCallback((p: PersonalStyle) => change((s) => upsert(s, p)), [change]);
  const remove = useCallback((id: string) => change((s) => s.filter((x) => x.id !== id)), [change]);
  const restore = useCallback((text: string, mode: 'replace' | 'merge') => {
    const back = parseStored(text).styles;
    if (mode === 'replace') {
      if (back.length > 0) change(() => back);
      return back.length;
    }
    const added = back.filter((h) => !styles.some((s) => s.id === h.id));
    if (added.length > 0) change((s) => [...s, ...added.filter((h) => !s.some((x) => x.id === h.id))]);
    return added.length;
  }, [change, styles]);

  return { styles, refusedAtLoad: first.refused, keep, remove, restore };
}
