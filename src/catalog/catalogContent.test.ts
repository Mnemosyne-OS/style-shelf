/**
 * The shipped catalogue itself (doc 186 §3): the rules a pull request must
 * keep, run on every entry.
 */
import { describe, expect, it } from 'vitest';
import { contrastIssues, contrastRatio, parseHex } from '../lib/contrast';
import { TOKEN_GROUPS } from '../studio/tokenGroups';
import { shippedCatalog } from './loadCatalog';
import { ENTRY_KINDS, type ElementEntry, type IconPackEntry, type StyleEntry } from './types';

const catalog = shippedCatalog();
const styles = catalog.entries.filter((e): e is StyleEntry => e.kind === 'style');
const elements = catalog.entries.filter((e): e is ElementEntry => 'css' in e);

/**
 * The Mnemosyne OS styles copy the host's own colours, so their contrast is the
 * host's (doc 186 §20). Measured 2026-10-29: the dark theme's violet accent
 * #7c4dff reads 3.82:1 on #141416. Listed exactly: the test fails the day the
 * host fixes it, so the exception goes with the defect.
 */
const HOST_CONTRAST_KNOWN: Record<string, { pairs: string[]; texts: string[] }> = {
  'mnemosyne-dark': {
    pairs: ['accentText', 'onAccent'],
    texts: ['--text-accent on --bg-void', '--text-accent on --bg-surface', '--text-accent on --bg-card'],
  },
};


describe('the shipped catalogue', () => {
  it('reads every entry, refuses none, and has every kind', () => {
    expect(catalog.refused).toEqual([]);
    for (const kind of ENTRY_KINDS) expect(catalog.entries.some((e) => e.kind === kind), kind).toBe(true);
  });

  it('draws elements on the style only: no colour written in an element', () => {
    for (const e of elements) {
      expect(e.css, e.id).not.toMatch(/#[0-9a-f]{3,8}\b/i);
      expect(e.css, e.id).not.toMatch(/\b(rgba?|hsla?|hwb|lab|lch|oklab|oklch)\(/i);
    }
  });

  it('every style defines every token an element reads', () => {
    const read = new Set(elements.flatMap((e) => [...e.css.matchAll(/var\((--[a-z0-9-]+)/g)].map((m) => m[1])).filter((t) => !t.startsWith('--ss-')));
    for (const s of styles) {
      const missing = [...read].filter((t) => !(t in s.manifest.tokens));
      expect(missing, s.id).toEqual([]);
    }
  });

  it("keeps each element's classes and keyframes under its own name, so a kit never collides", () => {
    for (const e of elements) {
      const classes = [...e.css.matchAll(/\.(-?[a-z_][a-z0-9_-]*)/gi)].map((m) => m[1]);
      expect(classes.length, e.id).toBeGreaterThan(0);
      for (const c of classes) expect(c === `ss-${e.id}` || c.startsWith(`ss-${e.id}__`), `${e.id}: .${c}`).toBe(true);
      for (const m of e.css.matchAll(/@keyframes\s+([\w-]+)/g)) expect(m[1].startsWith(`ss-${e.id}`), `${e.id}: ${m[1]}`).toBe(true);
    }
  });

  it('every element that animates stops under prefers-reduced-motion, whatever its kind', () => {
    // A loading skeleton animates too: the rule follows the CSS, never the kind.
    const moving = elements.filter((x) => x.kind === 'motion' || /@keyframes|animation\s*:/.test(x.css));
    expect(moving.some((x) => x.kind !== 'motion')).toBe(true);
    for (const e of moving) expect(e.css, e.id).toMatch(/prefers-reduced-motion:\s*reduce/);
  });

  it('a preview markup carries no script and no event handler', () => {
    for (const e of elements) {
      expect(e.html, e.id).not.toMatch(/<script/i);
      expect(e.html, e.id).not.toMatch(/\son[a-z]+\s*=/i);
    }
  });

  it('every style reads at 4.5:1: text, muted text, accent text, and the text on the accent', () => {
    // Measured, not assumed: a translucent colour has no ratio and fails here too.
    for (const s of styles) expect(contrastIssues(s.manifest.tokens as Record<string, string>).map((i) => i.pair), s.id).toEqual(HOST_CONTRAST_KNOWN[s.id]?.pairs ?? []);
  });

  it('every colour an element writes as text reads at 4.5:1 on each ground a text sits on', () => {
    // The status colours are text too (a stat trend, a « Delete » line), and texts sit on
    // the surface and the card as well as the page. A translucent ground has no ratio of
    // its own: it is skipped here, the 4.5:1 test above already refuses one on the page.
    const texts = ['--text-primary', '--text-secondary', '--text-muted', '--text-accent', '--status-active', '--status-warning', '--status-overload'];
    const grounds = ['--bg-void', '--bg-surface', '--bg-card'];
    for (const s of styles) {
      const t = s.manifest.tokens as Record<string, string>;
      const low = texts.flatMap((fg) => grounds.map((bg) => [fg, bg, contrastRatio(t[fg] ?? '', t[bg] ?? '')] as const))
        .filter(([, bg, r]) => (r !== null && r < 4.5) || (r === null && parseHex(t[bg] ?? '') !== null))
        .map(([fg, bg, r]) => `${fg} on ${bg}: ${r === null ? 'not measurable' : r.toFixed(2)}`);
      expect(low.map((l) => l.replace(/: .*$/, '')), s.id).toEqual(HOST_CONTRAST_KNOWN[s.id]?.texts ?? []);
    }
  });

  it('border tokens are colours, as in the Mnemosyne OS host, and every border writes its own width and style', () => {
    // The host posts --border-subtle as a colour into a cartridge: a kit that wrote
    // `border: var(--border-subtle)` would lose every border there (no width, no style).
    for (const s of styles) {
      for (const k of ['--border-subtle', '--border-accent'] as const) {
        expect((s.manifest.tokens as Record<string, string>)[k], `${s.id} ${k}`).not.toMatch(/(solid|dashed|dotted|double|none)/);
      }
    }
    for (const e of elements) {
      for (const text of [e.css, e.html]) expect(text, e.id).not.toMatch(/border(-[a-z]+)?\s*:\s*var\(--border-(subtle|accent)\)/);
    }
  });

  it('names an icon pack by its packages, shows the same 8 icons in each, with the licence they came under', () => {
    const packs = catalog.entries.filter((x): x is IconPackEntry => x.kind === 'icons');
    for (const e of packs) {
      expect(Object.keys(e.packages).length, e.id).toBeGreaterThan(0);
      expect(e.license, e.id).toMatch(/^(MIT|ISC|Apache-2\.0)$/);
      expect(e.samples.map((s) => s.name), e.id).toEqual(['home', 'search', 'settings', 'user', 'heart', 'star', 'bell', 'trash']);
      expect(e.licenseText, e.id).toContain(e.license === 'ISC' ? 'ISC License' : 'MIT License');
    }
  });

  it('every token a style defines can be set in the atelier, in exactly one group', () => {
    const grouped = TOKEN_GROUPS.flatMap((g) => [...g.tokens]);
    expect(new Set(grouped).size).toBe(grouped.length);
    for (const s of styles) expect(Object.keys(s.manifest.tokens).filter((t) => !grouped.includes(t as never)), s.id).toEqual([]);
  });
});
