#!/usr/bin/env node
/**
 * icon-samples — copies eight icons of an icon pack, with the pack's licence,
 * into its catalogue folder (doc 186 §12, lot 4).
 *
 *   node scripts/icon-samples.mjs <pack id> <package dir>
 *
 * <package dir> is the unpacked npm package (`npm pack <name>`, then the
 * `package/` folder of the tarball). It writes, in catalog/icons/<pack id>/:
 *
 *   samples.json  { package, version, samples: [{ name, file, svg }] }
 *   LICENSE.txt   the package's LICENSE, as shipped
 *
 * The same eight meanings in every pack (home, search, settings, user, heart,
 * star, bell, trash), so the packs compare side by side. Only these eight are
 * copied: the pack itself is installed by the project, from npm.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const PACKS = {
  lucide: { dir: 'icons', files: { home: 'house', search: 'search', settings: 'settings', user: 'user', heart: 'heart', star: 'star', bell: 'bell', trash: 'trash-2' } },
  tabler: { dir: 'icons/outline', files: { home: 'home', search: 'search', settings: 'settings', user: 'user', heart: 'heart', star: 'star', bell: 'bell', trash: 'trash' } },
  phosphor: { dir: 'assets/regular', files: { home: 'house', search: 'magnifying-glass', settings: 'gear', user: 'user', heart: 'heart', star: 'star', bell: 'bell', trash: 'trash' } },
  heroicons: { dir: '24/outline', files: { home: 'home', search: 'magnifying-glass', settings: 'cog-6-tooth', user: 'user', heart: 'heart', star: 'star', bell: 'bell', trash: 'trash' } },
};

/** One line of SVG: no comment, no XML header, no run of spaces. Refuses anything that could run. */
function clean(svg, file) {
  const out = svg
    .replace(/<\?xml[^>]*\?>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s+/g, ' ')
    .replace(/>\s+</g, '><')
    .trim();
  if (!out.startsWith('<svg') || !out.endsWith('</svg>')) throw new Error(`${file}: not one <svg> element`);
  if (/<script|\son[a-z]+\s*=|javascript:|<foreignObject/i.test(out)) throw new Error(`${file}: holds something that runs`);
  return out;
}

const [packId, pkgDir] = process.argv.slice(2);
const pack = PACKS[packId];
if (!pack || !pkgDir) {
  console.error(`usage: node scripts/icon-samples.mjs <${Object.keys(PACKS).join('|')}> <package dir>`);
  process.exit(1);
}

const pkg = JSON.parse(readFileSync(join(pkgDir, 'package.json'), 'utf8'));
const samples = Object.entries(pack.files).map(([name, base]) => {
  const file = `${pack.dir}/${base}.svg`;
  return { name, file, svg: clean(readFileSync(join(pkgDir, file), 'utf8'), file) };
});

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, '..', 'catalog', 'icons', packId);
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'samples.json'), `${JSON.stringify({ package: pkg.name, version: pkg.version, samples }, null, 2)}\n`);
writeFileSync(join(out, 'LICENSE.txt'), readFileSync(join(pkgDir, 'LICENSE'), 'utf8').replace(/\r\n/g, '\n'));
console.log(`${packId}: ${samples.length} icons from ${pkg.name}@${pkg.version}, licence copied`);
