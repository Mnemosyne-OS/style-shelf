/**
 * doors — the host calls Style Shelf makes inside Mnemosyne OS (doc 186 §5),
 * each with a deadline. All three need `dialog:open`.
 *
 *   pickFolder  the person chooses the project folder (user-paced, no deadline)
 *   mkdir       creates `<project>/style-shelf` (the host's writeFile does not)
 *   writeFile   writes one text file (json, md and css are allowed extensions)
 *
 * @module host/doors
 */
import { sdk } from './sdk';

/** Deadline of one filesystem call. */
export const FILE_CALL_MS = 15_000;

/** The host's answer to a filesystem call. */
export interface HostResult {
  success: boolean;
  error?: string;
}

export interface KitDoors {
  pickFolder: () => Promise<string | null>;
  mkdir: (dirPath: string) => Promise<HostResult>;
  writeFile: (filePath: string, content: string) => Promise<HostResult>;
}

/** The doors as the cartridge reaches them through the SDK. */
export const hostKitDoors: KitDoors = {
  pickFolder: () => sdk.selectFolder(),
  mkdir: (dirPath) => sdk.invoke<HostResult>('dialog.mkdir', { dirPath }, FILE_CALL_MS),
  writeFile: (filePath, content) => sdk.invoke<HostResult>('dialog.writeFile', { filePath, content }, FILE_CALL_MS),
};
