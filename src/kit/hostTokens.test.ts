import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { ALLOWED_TOKENS } from '@mnemosyne_os/design-sdk';
import { kitTokensCss } from './buildKit';
import { HOST_TOKEN_SOURCES, withHostFallback } from './hostTokens';

// Both files live in the monorepo only: the public repository has neither, so
// these checks run where the copy can drift and are skipped where it cannot.
const SDK_HOST = resolve(__dirname, '../../../../packages/design-sdk/src/host.ts');
const HOST_CSS = resolve(__dirname, '../../../infinity-edition/src/renderer/src/styles/globals.css');

describe('the kit meets the Mnemosyne OS host', () => {
  it('writes a token the host carries under another name as var(--host, style value), and leaves the others literal', () => {
    expect(withHostFallback('--status-active', '#3fd68a')).toBe('var(--accent-success-text, #3fd68a)');
    expect(withHostFallback('--radius-md', '8px')).toBe('8px');
    const css = kitTokensCss({ id: 'x', name: 'X', version: '1', tokens: { '--bg-card': '#111111', '--accent': '#5fe3ff', '--radius-md': '8px' } });
    expect(css).toBe(':root {\n  --bg-card: var(--bg-panel, #111111);\n  --accent: #5fe3ff;\n  --radius-md: 8px;\n}');
  });

  it('maps only tokens a skin may hold', () => {
    for (const k of Object.keys(HOST_TOKEN_SOURCES)) expect(ALLOWED_TOKENS.has(k), k).toBe(true);
  });

  it.skipIf(!existsSync(SDK_HOST))('is the same table as the design-sdk source', () => {
    const src = readFileSync(SDK_HOST, 'utf8');
    const block = /HOST_TOKEN_SOURCES[^{]*\{([^}]*)\}/.exec(src)?.[1] ?? '';
    const sdk = Object.fromEntries([...block.matchAll(/'(--[\w-]+)':\s*'(--[\w-]+)'/g)].map((m) => [m[1], m[2]]));
    expect(sdk).toEqual(HOST_TOKEN_SOURCES);
  });

  it.skipIf(!existsSync(HOST_CSS))('names host variables the host theme really declares', () => {
    const css = readFileSync(HOST_CSS, 'utf8');
    for (const host of Object.values(HOST_TOKEN_SOURCES)) expect(css, host).toMatch(new RegExp(`${host}\\s*:`));
  });
});
