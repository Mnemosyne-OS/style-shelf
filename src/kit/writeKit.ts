/**
 * writeKit — puts the kit into the project the person chose (doc 186 §5).
 *
 * `<project>/style-shelf/` is created, then the four files are written one by
 * one. The first refusal stops the run and is reported with the step and the
 * host's words: a kit half written is said as half written, never as done.
 *
 * @module kit/writeKit
 */
import type { HostResult, KitDoors } from '../host/doors';
import { KIT_DIR, type KitFile } from './buildKit';

export type WriteOutcome =
  | { ok: true; dir: string; written: string[] }
  | { ok: false; cancelled: true }
  | { ok: false; cancelled: false; step: string; error: string; written: string[] };

/** `folder` joined to `name` with the separator the folder already uses. */
export function joinPath(folder: string, name: string): string {
  const sep = folder.includes('\\') && !folder.includes('/') ? '\\' : '/';
  return folder.endsWith(sep) ? `${folder}${name}` : `${folder}${sep}${name}`;
}

function failure(r: HostResult | undefined, err?: unknown): string {
  if (err !== undefined) return err instanceof Error ? err.message : String(err);
  return r?.error ?? 'no answer';
}

/** Asks for the project folder, then writes the kit into it. */
export async function writeKit(files: KitFile[], doors: KitDoors): Promise<WriteOutcome> {
  let folder: string | null;
  try {
    folder = await doors.pickFolder();
  } catch (err) {
    return { ok: false, cancelled: false, step: 'folder', error: failure(undefined, err), written: [] };
  }
  if (!folder) return { ok: false, cancelled: true };

  const dir = joinPath(folder, KIT_DIR);
  try {
    const made = await doors.mkdir(dir);
    if (!made?.success) return { ok: false, cancelled: false, step: KIT_DIR, error: failure(made), written: [] };
  } catch (err) {
    return { ok: false, cancelled: false, step: KIT_DIR, error: failure(undefined, err), written: [] };
  }

  const written: string[] = [];
  for (const f of files) {
    try {
      const r = await doors.writeFile(joinPath(dir, f.name), f.content);
      if (!r?.success) return { ok: false, cancelled: false, step: f.name, error: failure(r), written };
    } catch (err) {
      return { ok: false, cancelled: false, step: f.name, error: failure(undefined, err), written };
    }
    written.push(f.name);
  }
  return { ok: true, dir, written };
}
