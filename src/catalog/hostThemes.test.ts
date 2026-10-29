import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { HOST_TOKEN_SOURCES } from '../kit/hostTokens';
import { flatten, HOST_THEMES, hostThemeTokens, parseColour, readHostThemes } from './hostThemes';
import { shippedCatalog } from './loadCatalog';
import type { StyleEntry } from './types';

const HOST_CSS = resolve(__dirname, '../../../infinity-edition/src/renderer/src/styles/globals.css');

describe('hostThemes', () => {
  it('reads a theme as :root plus its own blocks, later wins, and leaves @media and descendant rules out', () => {
    const css = `@import url('x.css');
:root, [data-theme="dark"] { --bg-void: #111111; --accent: var(--violet); --violet: #7c4dff; }
[data-theme="light"] { --bg-void: #eeeeee; }
@media (prefers-reduced-motion: reduce) { :root { --bg-void: #ff0000; } }
:root[data-theme="glass"] .panel { --bg-void: #00ff00; }`;
    const t = readHostThemes(css);
    expect(t.dark['--bg-void']).toBe('#111111');
    expect(t.dark['--accent']).toBe('#7c4dff');
    expect(t.light['--bg-void']).toBe('#eeeeee');
    expect(t.glass['--bg-void']).toBe('#111111');
  });

  it('flattens a translucent colour over the ground, and reads color-mix toward transparent', () => {
    expect(flatten('rgba(255, 255, 255, 0.5)', '#000000')).toBe('#808080');
    expect(parseColour('color-mix(in srgb, #ff0000 16%, transparent)')).toEqual([255, 0, 0, 0.16]);
    expect(parseColour('linear-gradient(red, blue)')).toBeNull();
  });

  it('refuses a theme it cannot read, with the reason', () => {
    expect(hostThemeTokens({ '--accent': '#fff' }, {}, ['--accent'])).toMatch(/--bg-void/);
    expect(hostThemeTokens({ '--bg-void': '#000000', '--accent': '#ffffff' }, {}, ['--text-muted'])).toBe('the host declares no --text-muted for --text-muted');
  });

  it.skipIf(!existsSync(HOST_CSS))('the four Mnemosyne OS styles hold what the host stylesheet holds today', () => {
    const themes = readHostThemes(readFileSync(HOST_CSS, 'utf8'));
    const styles = shippedCatalog().entries.filter((e): e is StyleEntry => e.kind === 'style');
    for (const id of HOST_THEMES) {
      const shipped = styles.find((s) => s.id === `mnemosyne-${id}`);
      expect(shipped, id).toBeDefined();
      const order = Object.keys(shipped!.manifest.tokens);
      // Rerun scripts/host-theme-import.ts when this fails: the host changed a colour.
      expect(hostThemeTokens(themes[id], HOST_TOKEN_SOURCES, order), id).toEqual(shipped!.manifest.tokens);
    }
  });
});
