import { describe, expect, it } from 'vitest';
import { parseCatalog } from './catalogModel';

const TITLE = { en: 'Solid', fr: 'Plein', es: 'Sólido' };

function style(id: string, extra: Record<string, unknown> = {}) {
  return JSON.stringify({
    id, kind: 'style', title: TITLE, license: 'MIT', author: 'a', tier: 'free', tags: [],
    manifest: { id, name: 'S', version: '1.0.0', tokens: { '--accent': '#fff' } },
    ...extra,
  });
}

function element(id: string, kind = 'button', extra: Record<string, unknown> = {}) {
  return JSON.stringify({ id, kind, title: TITLE, license: 'MIT', author: 'a', tier: 'free', ...extra });
}

describe('parseCatalog', () => {
  it('reads a style, an element and an icon pack from their folders', () => {
    const c = parseCatalog({
      '../../catalog/styles/night/style.json': style('night'),
      '../../catalog/buttons/btn-a/entry.json': element('btn-a'),
      '../../catalog/buttons/btn-a/element.css': '.ss-btn-a { color: var(--accent); }\n',
      '../../catalog/buttons/btn-a/demo.html': '<button class="ss-btn-a">A</button>',
      '../../catalog/icons/lucide/entry.json': element('lucide', 'icons', { homepage: 'https://lucide.dev', packages: { react: 'lucide-react' } }),
    });
    expect(c.refused).toEqual([]);
    // Styles first, the elements, then the icon packs: not the folders' alphabet.
    expect(c.entries.map((e) => `${e.kind}:${e.id}`)).toEqual(['style:night', 'button:btn-a', 'icons:lucide']);
    const btn = c.entries.find((e) => e.id === 'btn-a');
    expect(btn && 'css' in btn && btn.css).toBe('.ss-btn-a { color: var(--accent); }');
    const st = c.entries.find((e) => e.id === 'night');
    expect(st && 'manifest' in st && st.manifest.tokens['--accent']).toBe('#fff');
  });

  it('refuses with a reason, never drops: bad JSON, missing files, folder and id that disagree', () => {
    const c = parseCatalog({
      'catalog/styles/broken/style.json': '{ nope',
      'catalog/buttons/no-css/entry.json': element('no-css'),
      'catalog/buttons/no-css/demo.html': '<b>x</b>',
      'catalog/buttons/wrong/entry.json': element('other'),
      'catalog/buttons/wrong/element.css': '.x{}',
      'catalog/buttons/wrong/demo.html': '<b>x</b>',
      'catalog/cards/kind/entry.json': element('kind', 'button'),
      'catalog/cards/kind/element.css': '.x{}',
      'catalog/cards/kind/demo.html': '<b>x</b>',
    });
    expect(c.entries).toEqual([]);
    const reasons = Object.fromEntries(c.refused.map((r) => [r.path, r.reason]));
    expect(reasons['catalog/styles/broken']).toMatch(/^style\.json: /);
    expect(reasons['catalog/buttons/no-css']).toBe('element.css: missing');
    expect(reasons['catalog/buttons/wrong']).toBe('id "other" is not its folder "wrong"');
    expect(reasons['catalog/cards/kind']).toBe('kind "button" is not its folder\'s "card"');
  });

  it('refuses a skin manifest the design-sdk refuses (a token outside its list)', () => {
    const c = parseCatalog({
      'catalog/styles/odd/style.json': style('odd', { manifest: { id: 'odd', name: 'O', version: '1.0.0', tokens: { '--not-a-token': 'red' } } }),
    });
    expect(c.entries).toEqual([]);
    expect(c.refused[0].reason).toMatch(/^manifest: /);
  });

  it('refuses a missing translation, an unknown tier, an unknown kind folder and a file outside a folder', () => {
    const c = parseCatalog({
      'catalog/styles/no-es/style.json': style('no-es', { title: { en: 'a', fr: 'b' } }),
      'catalog/styles/gold/style.json': style('gold', { tier: 'gold' }),
      'catalog/widgets/w/entry.json': element('w'),
      'catalog/readme.md': '# hi',
    });
    expect(c.entries).toEqual([]);
    expect(c.refused.map((r) => r.reason).sort()).toEqual([
      '"widgets" is not a kind of the catalogue',
      'not in a catalog/<kind>/<id>/ folder',
      'tier "gold" is neither free nor premium',
      'title.es: missing',
    ]);
  });

  it('keeps the first of two entries with one id and refuses the second', () => {
    const c = parseCatalog({
      'catalog/styles/same/style.json': style('same'),
      'catalog/icons/same/entry.json': element('same', 'icons', { homepage: 'https://x.dev', packages: { any: 'x' } }),
    });
    expect(c.entries.map((e) => `${e.kind}:${e.id}`)).toEqual(['style:same']);
    expect(c.refused).toEqual([{ path: 'catalog/icons/same', reason: 'id "same" is already taken by another entry' }]);
  });

  it('reads the sample icons of a pack with its licence, and refuses copied icons without one', () => {
    const pack = element('p', 'icons', { homepage: 'https://x.dev', packages: { any: 'x' } });
    const samples = JSON.stringify({ samples: [{ name: 'home', svg: '<svg viewBox="0 0 24 24"><path d="M1 1"/></svg>' }] });
    const ok = parseCatalog({ 'catalog/icons/p/entry.json': pack, 'catalog/icons/p/samples.json': samples, 'catalog/icons/p/LICENSE.txt': 'MIT License\n' });
    expect(ok.refused).toEqual([]);
    expect(ok.entries[0]).toMatchObject({ samples: [{ name: 'home' }], licenseText: 'MIT License' });
    const noLicence = parseCatalog({ 'catalog/icons/p/entry.json': pack, 'catalog/icons/p/samples.json': samples });
    expect(noLicence.refused).toEqual([{ path: 'catalog/icons/p', reason: 'LICENSE.txt: missing next to samples.json' }]);
  });

  it('refuses a sample icon that holds something that runs', () => {
    const pack = element('p', 'icons', { homepage: 'https://x.dev', packages: { any: 'x' } });
    for (const svg of ['<svg onload="alert(1)"></svg>', '<svg><script>x</script></svg>', '<svg><foreignObject></foreignObject></svg>', '<img src=x>']) {
      const c = parseCatalog({
        'catalog/icons/p/entry.json': pack,
        'catalog/icons/p/samples.json': JSON.stringify({ samples: [{ name: 'bad', svg }] }),
        'catalog/icons/p/LICENSE.txt': 'MIT',
      });
      expect(c.entries, svg).toEqual([]);
    }
  });

  it('refuses an icon pack without packages or with a plain http homepage', () => {
    const c = parseCatalog({
      'catalog/icons/none/entry.json': element('none', 'icons', { homepage: 'https://x.dev', packages: {} }),
      'catalog/icons/http/entry.json': element('http', 'icons', { homepage: 'http://x.dev', packages: { any: 'x' } }),
    });
    expect(c.refused.map((r) => r.reason).sort()).toEqual(['homepage: not an https address', 'packages: not a list of npm packages']);
  });

  it('keeps a GitHub handle to credit, and refuses one that is not a username', () => {
    const c = parseCatalog({
      'catalog/styles/ok/style.json': style('ok', { github: 'octo-cat' }),
      'catalog/styles/at/style.json': style('at', { github: '@octocat' }),
      'catalog/styles/url/style.json': style('url', { github: 'https://evil.example/x' }),
    });
    expect(c.entries.map((e) => [e.id, e.github])).toEqual([['ok', 'octo-cat']]);
    expect(c.refused.map((r) => r.reason)).toEqual(['github "@octocat" is not a GitHub username', 'github "https://evil.example/x" is not a GitHub username']);
  });
});
