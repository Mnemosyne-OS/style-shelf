/**
 * host-theme-import — writes the four Mnemosyne OS themes into the catalogue
 * (doc 186 §20), read from the host's stylesheet.
 *
 *   node --experimental-strip-types scripts/host-theme-import.ts <globals.css>
 *
 * In the monorepo: ../infinity-edition/src/renderer/src/styles/globals.css.
 * Writes catalog/styles/mnemosyne-<theme>/style.json. A drift test re-reads the
 * same file and fails when a colour changed there and not here.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { HOST_THEMES, hostThemeTokens, readHostThemes } from '../src/catalog/hostThemes.ts';
import { HOST_TOKEN_SOURCES } from '../src/kit/hostTokens.ts';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const STYLES = join(ROOT, 'catalog', 'styles');
const ORDER = Object.keys(JSON.parse(readFileSync(join(STYLES, 'hud-night', 'style.json'), 'utf8')).manifest.tokens);

const NAMES = {
  dark: { en: 'Mnemosyne OS Dark', fr: 'Mnemosyne OS Sombre', es: 'Mnemosyne OS Oscuro' },
  light: { en: 'Mnemosyne OS Light', fr: 'Mnemosyne OS Clair', es: 'Mnemosyne OS Claro' },
  'tokyo-night': { en: 'Mnemosyne OS Tokyo Night', fr: 'Mnemosyne OS Tokyo Night', es: 'Mnemosyne OS Tokyo Night' },
  glass: { en: 'Mnemosyne OS Glass', fr: 'Mnemosyne OS Verre', es: 'Mnemosyne OS Cristal' },
} as const;

const file = process.argv[2];
if (!file) {
  console.error('usage: node --experimental-strip-types scripts/host-theme-import.ts <globals.css>');
  process.exit(1);
}
const themes = readHostThemes(readFileSync(file, 'utf8'));
for (const id of HOST_THEMES) {
  const tokens = hostThemeTokens(themes[id], HOST_TOKEN_SOURCES, ORDER);
  if (typeof tokens === 'string') {
    console.log(`SKIPPED mnemosyne-${id}: ${tokens}`);
    continue;
  }
  const styleId = `mnemosyne-${id}`;
  const author = 'Mnemosyne OS';
  const description = `The Mnemosyne OS theme "${id}", read from the host's globals.css. `
    + 'Translucent text and ground colours are flattened over the page ground for this preview; '
    + 'inside a cartridge the kit reads the host\'s live variables.'
    + (id === 'tokyo-night' ? ' Palette ported by the host from Tokyo Night by Enkia (MIT).' : '');
  const entry = {
    id: styleId,
    kind: 'style',
    title: NAMES[id],
    license: 'MIT',
    author,
    tier: 'free',
    tags: [id === 'light' ? 'light' : 'dark', 'mnemosyne-os'],
    manifest: { id: styleId, name: NAMES[id].en, version: '1.0.0', author, description, tokens },
  };
  mkdirSync(join(STYLES, styleId), { recursive: true });
  writeFileSync(join(STYLES, styleId, 'style.json'), `${JSON.stringify(entry, null, 2)}\n`);
  console.log(`wrote ${styleId}`);
}
