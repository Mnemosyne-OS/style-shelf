/**
 * contrast — the WCAG 2 contrast ratio of two colours written as hex. Pure.
 *
 * Only `#rgb` and `#rrggbb` are measured: a translucent colour has no ratio of
 * its own (it depends on what is under it), so it answers null, never a number
 * made up for it.
 *
 * @module lib/contrast
 */

/** The 0-255 channels of a `#rgb` / `#rrggbb` colour, or null for anything else. */
export function parseHex(color: string): [number, number, number] | null {
  const m = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(color.trim());
  if (!m) return null;
  const hex = m[1].length === 3 ? m[1].split('').map((c) => c + c).join('') : m[1];
  return [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16)) as [number, number, number];
}

function luminance([r, g, b]: [number, number, number]): number {
  const lin = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

/** The contrast ratio of two hex colours (1 to 21), or null when one is not measurable. */
export function contrastRatio(a: string, b: string): number | null {
  const ca = parseHex(a);
  const cb = parseHex(b);
  if (!ca || !cb) return null;
  const [hi, lo] = [luminance(ca), luminance(cb)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

/** The ratio text must reach on its ground (WCAG AA, normal text). */
export const MIN_CONTRAST = 4.5;

/** The four pairs a style must keep readable, as [label, foreground token, background token]. */
export const READABLE_PAIRS = [
  ['text', '--text-primary', '--bg-void'],
  ['muted', '--text-muted', '--bg-void'],
  ['accentText', '--text-accent', '--bg-void'],
  // A solid button writes --bg-void on --accent.
  ['onAccent', '--bg-void', '--accent'],
] as const;

export type ReadablePair = (typeof READABLE_PAIRS)[number][0];

/** The pairs of a style under 4.5:1 (null ratio = not measurable, listed apart). */
export function contrastIssues(tokens: Record<string, string | undefined>): { pair: ReadablePair; ratio: number | null }[] {
  const out: { pair: ReadablePair; ratio: number | null }[] = [];
  for (const [pair, fg, bg] of READABLE_PAIRS) {
    const ratio = contrastRatio(tokens[fg] ?? '', tokens[bg] ?? '');
    if (ratio === null || ratio < MIN_CONTRAST) out.push({ pair, ratio });
  }
  return out;
}
