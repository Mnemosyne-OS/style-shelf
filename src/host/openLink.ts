/**
 * openLink — opens an address outside the app. Inside Mnemosyne OS a frame
 * cannot open a popup (it is blocked), so the host opens it
 * (`shell.openExternal`, urlGuard-protected); anywhere else, a new tab.
 *
 * Resolves to null when opened, or to the reason it was not. A popup the
 * browser blocked (a site that embeds the app) answers POPUP_BLOCKED: the
 * screen then shows the address as a real link, which a click is allowed to
 * open.
 *
 * @module host/openLink
 */
import { sdk } from './sdk';

export const POPUP_BLOCKED = 'POPUP_BLOCKED';

export async function openLink(url: string, inMnemosyne: boolean): Promise<string | null> {
  if (inMnemosyne) {
    try {
      const r = await sdk.invoke<{ success?: boolean; error?: string } | undefined>('shell.openExternal', { url }, 15_000);
      return r && r.success === false ? (r.error ?? 'refused') : null;
    } catch (err) {
      return err instanceof Error ? err.message : String(err);
    }
  }
  // Not `noopener` in the features: with it the browser answers null even when the tab
  // opened, so a blocked popup would look like a success. The opener is cut by hand.
  try {
    const win = window.open(url, '_blank');
    if (!win) return POPUP_BLOCKED;
    win.opener = null;
    return null;
  } catch (err) {
    return err instanceof Error ? err.message : String(err);
  }
}
