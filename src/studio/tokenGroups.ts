/**
 * tokenGroups — the nodes of the style atelier (style-cartouche §8): the
 * tokens of a style, grouped the way a person thinks of them. Values only.
 *
 * Every token a catalogue style defines sits in exactly one group (tested),
 * so nothing a style holds is out of reach of the atelier.
 *
 * @module studio/tokenGroups
 */

export const TOKEN_GROUPS = [
  { id: 'accent', tokens: ['--accent', '--accent-dim', '--accent-glow', '--accent-border', '--text-accent'], show: '--accent' },
  { id: 'grounds', tokens: ['--bg-void', '--bg-surface', '--bg-panel', '--bg-card', '--bg-hover'], show: '--bg-void' },
  { id: 'text', tokens: ['--text-primary', '--text-secondary', '--text-muted', '--font-ui', '--font-mono'], show: '--text-primary' },
  { id: 'shapes', tokens: ['--radius-sm', '--radius-md', '--radius-lg', '--space-sm', '--space-md', '--space-lg', '--border-subtle', '--border-accent'], show: '--radius-md' },
  { id: 'depth', tokens: ['--shadow-card', '--shadow-accent'], show: '--shadow-card' },
  { id: 'motion', tokens: ['--transition-fast', '--transition-normal'], show: '--transition-normal' },
  { id: 'status', tokens: ['--status-active', '--status-warning', '--status-overload'], show: '--status-active' },
] as const;

export type TokenGroupId = (typeof TOKEN_GROUPS)[number]['id'];

/** A colour the native colour picker can hold (it takes `#rrggbb` only). */
export function pickable(value: string): boolean {
  return /^#[0-9a-f]{6}$/i.test(value.trim());
}
