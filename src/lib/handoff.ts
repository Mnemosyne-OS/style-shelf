/**
 * handoff — the two ways the kit leaves the app without the host (doc 186 §5):
 * a file the browser downloads, and the brief put on the clipboard.
 *
 * @module lib/handoff
 */

/**
 * The text of a file the person chose, with a deadline: a FileReader can
 * answer neither `load` nor `error`. FileReader rather than `Blob.text()`,
 * which some engines (jsdom among them) do not have.
 */
export function readFileText(file: Blob, ms = 15_000): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    const timer = window.setTimeout(() => { reader.abort(); reject(new Error('TIMEOUT')); }, ms);
    reader.onload = () => { window.clearTimeout(timer); resolve(String(reader.result ?? '')); };
    reader.onerror = () => { window.clearTimeout(timer); reject(reader.error ?? new Error('unreadable')); };
    reader.readAsText(file);
  });
}

/** Makes the browser save `content` as `name`. */
export function downloadText(name: string, content: string, type = 'application/json'): void {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

/**
 * Puts `text` on the clipboard. The async clipboard first; a frame without the
 * clipboard permission refuses it, so the old selection copy is tried next.
 * Resolves to null when copied, or to the reason it was not.
 */
export async function copyText(text: string): Promise<string | null> {
  let reason = 'no clipboard';
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return null;
    } catch (err) {
      reason = err instanceof Error ? err.message : String(err);
    }
  }
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.opacity = '0';
  document.body.appendChild(area);
  area.select();
  try {
    return document.execCommand('copy') ? null : reason;
  } catch (err) {
    return err instanceof Error ? err.message : String(err);
  } finally {
    area.remove();
  }
}
