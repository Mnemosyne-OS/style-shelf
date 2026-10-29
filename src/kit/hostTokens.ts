/**
 * hostTokens — the Mnemosyne OS host variable a kit token reads first inside a
 * cartridge (doc 186 §20). Values only.
 *
 * A LOCAL COPY of `HOST_TOKEN_SOURCES` from @mnemosyne_os/design-sdk 0.2.8:
 * Style Shelf installs the SDK from npm, where 0.2.7 does not have it yet. A
 * drift test compares this copy with the SDK source while both sit in the
 * monorepo. Import it from the SDK once 0.2.8 is published, and delete this file.
 *
 * @module kit/hostTokens
 */

export const HOST_TOKEN_SOURCES: Readonly<Record<string, string>> = {
  '--accent-glow': '--accent-soft',
  '--bg-hover': '--bg-surface-hover',
  '--bg-card': '--bg-panel',
  '--text-accent': '--accent',
  '--border-accent': '--border-active',
  '--shadow-card': '--shadow-widget',
  '--status-active': '--accent-success-text',
  '--status-warning': '--accent-warning-text',
  '--status-overload': '--accent-danger-text',
};

/** The value to write for `token` in a kit: the host variable first when there is one. */
export function withHostFallback(token: string, value: string): string {
  const source = HOST_TOKEN_SOURCES[token];
  return source ? `var(${source}, ${value})` : value;
}
