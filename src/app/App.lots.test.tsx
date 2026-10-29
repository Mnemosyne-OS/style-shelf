/**
 * The screen of lots 2 to 5 (doc 186 §12): the atelier of personal styles,
 * the host's copy, the import, the contributions, the proposal by pull
 * request, and the premium entries.
 */
import { act, cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { CART_KEY } from '../cart/cartModel';
import type { Catalog } from '../catalog/types';
import type { ContribRepo } from '../contrib/contribConfig';
import type { DetectDeps } from '../host/detect';
import type { MirrorDoors, MirrorTexts } from '../personal/personalMirror';
import { PERSONAL_KEY } from '../personal/personalModel';
import { App } from './App';

const T = (en: string) => ({ en, fr: en, es: en });
const base = { license: 'MIT', author: 'Mnemosyne OS', tier: 'free' as const, tags: [] };
const TOKENS = { '--accent': '#5fe3ff', '--bg-void': '#03060c', '--text-primary': '#e6f4fb' };
const catalog: Catalog = {
  refused: [],
  entries: [
    { ...base, id: 'hud-night', kind: 'style', title: T('HUD night'), manifest: { id: 'hud-night', name: 'HUD night', version: '1.0.0', tokens: TOKENS } },
    { ...base, id: 'btn', kind: 'button', title: T('Solid'), css: '.ss-btn { color: var(--accent); }', html: '<button class="ss-btn">Go</button>' },
    { ...base, id: 'gold', kind: 'motion', tier: 'premium', title: T('Gold'), css: '.ss-gold {}', html: '<div class="ss-gold"></div>' },
  ],
};
const REPO: ContribRepo = { owner: 'Mnemosyne-OS', repo: 'style-shelf', branch: 'main', catalogDir: 'catalog' };

const standalone: DetectDeps = { framed: () => false, ask: () => Promise.reject(new Error('none')), setTimer: () => 0, clearTimer: () => {} };
const inMnemosyne: DetectDeps = { framed: () => true, ask: async () => ({ capabilities: [] }), setTimer: () => 0, clearTimer: () => {} };
const noMirror: MirrorDoors = { get: async () => ({ state: null }), set: async () => ({}) };

function tile(id: string): HTMLElement {
  return document.querySelector(`[data-entry="${id}"]`) as HTMLElement;
}

/** Opens the atelier on a new style from HUD night, sets its accent, keeps it. */
function makeStyle(accent: string) {
  fireEvent.click(within(tile('hud-night')).getByRole('button', { name: 'Adapt HUD night' }));
  const studio = screen.getByRole('dialog', { name: 'Atelier' });
  expect(within(studio).getByDisplayValue('My HUD night')).toBeInTheDocument();
  const panel = within(studio).getByRole('region', { name: 'Accent' });
  fireEvent.change(within(panel).getAllByDisplayValue('#5fe3ff').find((i) => i.getAttribute('type') === 'text')!, { target: { value: accent } });
  fireEvent.click(within(studio).getByRole('button', { name: 'Keep' }));
}

beforeEach(() => {
  localStorage.clear();
  vi.spyOn(console, 'warn').mockImplementation(() => {});
  vi.spyOn(console, 'info').mockImplementation(() => {});
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe('lot 2: personal styles', () => {
  it('adapts a shipped style in the atelier, keeps it, and it draws the catalogue like any style', async () => {
    render(<App catalog={catalog} detectDeps={standalone} mirror={noMirror} />);
    makeStyle('#ff00aa');
    expect(screen.queryByRole('dialog', { name: 'Atelier' })).not.toBeInTheDocument();
    const mine = tile('my-my-hud-night');
    expect(within(mine).getByText('Mine')).toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem(PERSONAL_KEY)!)[0]).toMatchObject({ id: 'my-my-hud-night', basedOn: 'hud-night', tokens: { '--accent': '#ff00aa' } });
    fireEvent.click(within(mine).getByRole('button', { name: 'Choose the style My HUD night' }));
    await waitFor(() => expect(tile('btn').querySelector('iframe')!.getAttribute('srcdoc')).toContain('--accent: #ff00aa;'));
    // The shipped style it came from is untouched.
    expect(tile('hud-night').querySelector('iframe')!.getAttribute('srcdoc')).toContain('--accent: #5fe3ff;');
  });

  it('says a text pair under 4.5:1 in the atelier, and still lets the person keep the style', () => {
    render(<App catalog={catalog} detectDeps={standalone} mirror={noMirror} />);
    fireEvent.click(within(tile('hud-night')).getByRole('button', { name: 'Adapt HUD night' }));
    const studio = screen.getByRole('dialog', { name: 'Atelier' });
    fireEvent.click(within(studio).getByRole('button', { name: /Text/ }));
    const panel = within(studio).getByRole('region', { name: 'Text' });
    fireEvent.change(within(panel).getAllByDisplayValue('#e6f4fb').find((i) => i.getAttribute('type') === 'text')!, { target: { value: '#03060c' } });
    expect(within(studio).getByText('Text · 1:1, 4.5 expected')).toBeInTheDocument();
    expect(within(studio).getByRole('button', { name: 'Keep' })).toBeEnabled();
  });

  it('does not keep a style without a name, and says why', () => {
    render(<App catalog={catalog} detectDeps={standalone} mirror={noMirror} />);
    fireEvent.click(within(tile('hud-night')).getByRole('button', { name: 'Adapt HUD night' }));
    const studio = screen.getByRole('dialog', { name: 'Atelier' });
    fireEvent.change(within(studio).getByDisplayValue('My HUD night'), { target: { value: '  ' } });
    expect(within(studio).getByRole('button', { name: 'Keep' })).toBeDisabled();
    expect(within(studio).getByRole('alert')).toHaveTextContent('Not kept: name: missing');
  });

  it('deletes a personal style on a second click, and takes it out of the cart', () => {
    render(<App catalog={catalog} detectDeps={standalone} mirror={noMirror} />);
    makeStyle('#ff00aa');
    fireEvent.click(within(tile('my-my-hud-night')).getByRole('button', { name: 'Choose the style My HUD night' }));
    fireEvent.click(within(tile('my-my-hud-night')).getByRole('button', { name: 'Edit My HUD night' }));
    const studio = screen.getByRole('dialog', { name: 'Atelier' });
    fireEvent.click(within(studio).getByRole('button', { name: 'Delete' }));
    expect(tile('my-my-hud-night')).not.toBeNull();
    fireEvent.click(within(studio).getByRole('button', { name: 'Confirm delete' }));
    expect(tile('my-my-hud-night')).toBeNull();
    expect(JSON.parse(localStorage.getItem(CART_KEY)!).styleId).toBeNull();
  });

  it('inside Mnemosyne, restores the host copy into a blank page and says it; writes the copy only after a change', async () => {
    const stored = JSON.stringify([{ id: 'my-dusk', name: 'Dusk', author: '', basedOn: 'hud-night', license: 'MIT', baseAuthor: 'Mnemosyne OS', updatedAt: 'x', tokens: TOKENS }]);
    const mirror = { get: vi.fn(async () => ({ state: { personal: stored } })), set: vi.fn(async (_texts: MirrorTexts) => ({})) };
    render(<App catalog={catalog} detectDeps={inMnemosyne} mirror={mirror} />);
    await act(async () => {});
    expect(tile('my-dusk')).not.toBeNull();
    expect(screen.getByText('1 personal styles restored from Mnemosyne OS')).toBeInTheDocument();
    expect(mirror.set).not.toHaveBeenCalled();
    makeStyle('#00ff88');
    await act(async () => {});
    expect(mirror.set).toHaveBeenCalledTimes(1);
    expect(JSON.parse(mirror.set.mock.calls[0][0].personal).map((p: { id: string }) => p.id)).toEqual(['my-my-hud-night', 'my-dusk']);
  });

  it('restores the themes and the favourites too, and every write carries the three fields together', async () => {
    const themes = JSON.stringify([{ id: 'theme-site', name: 'Site', styleId: 'hud-night', itemIds: ['btn'], updatedAt: 'x' }]);
    const mirror = { get: vi.fn(async () => ({ state: { themes, favorites: '["btn"]' } })), set: vi.fn(async (_texts: MirrorTexts) => ({})) };
    render(<App catalog={catalog} detectDeps={inMnemosyne} mirror={mirror} />);
    await act(async () => {});
    expect(screen.getByText('Themes restored from Mnemosyne OS: 1')).toBeInTheDocument();
    expect(screen.getByText('Favourites restored from Mnemosyne OS: 1')).toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem('style-shelf.themes')!)[0].name).toBe('Site');
    expect(mirror.set).not.toHaveBeenCalled();
    fireEvent.click(within(tile('hud-night')).getByRole('button', { name: 'Add HUD night to the favourites' }));
    await act(async () => {});
    expect(mirror.set).toHaveBeenCalledTimes(1);
    const sent = mirror.set.mock.calls[0][0];
    expect(Object.keys(sent).sort()).toEqual(['favorites', 'personal', 'themes']);
    expect(JSON.parse(sent.favorites)).toEqual(['btn', 'hud-night']);
    expect(JSON.parse(sent.themes)[0].name).toBe('Site');
    expect(sent.personal).toBe('[]');
  });

  it('writes nothing before the host has answered: a star on a new page never erases the themes kept there', async () => {
    let answer: (v: { state: Record<string, unknown> }) => void = () => {};
    const themes = JSON.stringify([{ id: 'theme-site', name: 'Site', styleId: 'hud-night', itemIds: [], updatedAt: 'x' }]);
    const mirror = { get: vi.fn(() => new Promise<{ state: Record<string, unknown> }>((r) => { answer = r; })), set: vi.fn(async (_texts: MirrorTexts) => ({})) };
    render(<App catalog={catalog} detectDeps={inMnemosyne} mirror={mirror} />);
    await act(async () => {});
    fireEvent.click(within(tile('btn')).getByRole('button', { name: /to the favourites/ }));
    await act(async () => {});
    expect(mirror.set).not.toHaveBeenCalled();
    await act(async () => { answer({ state: { themes } }); });
    expect(mirror.set).toHaveBeenCalled();
    const sent = mirror.set.mock.calls.at(-1)![0];
    expect(JSON.parse(sent.themes)[0].name).toBe('Site');
    expect(JSON.parse(sent.favorites)).toEqual(['btn']);
  });

  it('a star clicked before the host answers joins the favourites kept there, it does not replace them', async () => {
    let answer: (v: { state: Record<string, unknown> }) => void = () => {};
    const mirror = { get: vi.fn(() => new Promise<{ state: Record<string, unknown> }>((r) => { answer = r; })), set: vi.fn(async (_texts: MirrorTexts) => ({})) };
    render(<App catalog={catalog} detectDeps={inMnemosyne} mirror={mirror} />);
    await act(async () => {});
    fireEvent.click(within(tile('btn')).getByRole('button', { name: /to the favourites/ }));
    await act(async () => { answer({ state: { favorites: '["card","hud-night"]' } }); });
    expect(screen.getByText('Favourites restored from Mnemosyne OS: 2')).toBeInTheDocument();
    expect(JSON.parse(mirror.set.mock.calls.at(-1)![0].favorites)).toEqual(['card', 'hud-night', 'btn']);
  });

  it('a host copy that cannot be read blocks every write, and the screen says the changes stay here', async () => {
    const mirror = { get: vi.fn(async () => { throw new Error('Host did not reply within 15s'); }), set: vi.fn(async (_texts: MirrorTexts) => ({})) };
    render(<App catalog={catalog} detectDeps={inMnemosyne} mirror={mirror} />);
    await act(async () => {});
    fireEvent.click(within(tile('btn')).getByRole('button', { name: /to the favourites/ }));
    await act(async () => {});
    expect(mirror.set).not.toHaveBeenCalled();
    expect(screen.getByText(/could not be read: changes stay on this page only \(Host did not reply within 15s\)/)).toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem('style-shelf.favorites')!)).toEqual(['btn']);
  });

  it('counts the themes of the host copy that cannot be read, as it counts the local ones', async () => {
    const themes = JSON.stringify([{ id: 'theme-ok', name: 'Ok', styleId: 'hud-night', itemIds: [], updatedAt: 'x' }, { id: 'broken' }]);
    render(<App catalog={catalog} detectDeps={inMnemosyne} mirror={{ get: async () => ({ state: { themes } }), set: async () => ({}) }} />);
    await act(async () => {});
    expect(screen.getByText('Stored themes that could not be read: 1')).toBeInTheDocument();
    expect(screen.getByText('Themes restored from Mnemosyne OS: 1')).toBeInTheDocument();
  });

  it('never overwrites a local copy with the host one', async () => {
    localStorage.setItem(PERSONAL_KEY, JSON.stringify([{ id: 'my-local', name: 'Local', author: '', basedOn: 'hud-night', license: 'MIT', baseAuthor: 'm', updatedAt: 'x', tokens: TOKENS }]));
    const other = JSON.stringify([{ id: 'my-other', name: 'Other', author: '', basedOn: 'hud-night', license: 'MIT', baseAuthor: 'm', updatedAt: 'x', tokens: TOKENS }]);
    render(<App catalog={catalog} detectDeps={inMnemosyne} mirror={{ get: async () => ({ state: { personal: other } }), set: async () => ({}) }} />);
    await act(async () => {});
    expect(tile('my-local')).not.toBeNull();
    expect(tile('my-other')).toBeNull();
  });

  it('imports a design-sdk skin into the atelier, and says why a file is refused', async () => {
    render(<App catalog={catalog} detectDeps={standalone} mirror={noMirror} />);
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    const skin = new File([JSON.stringify({ id: 'sunset', name: 'Sunset', version: '1.0.0', tokens: { '--accent': '#ff7700' } })], 'sunset.json');
    // The file is read by a FileReader, which answers after the event: wait for the atelier.
    fireEvent.change(input, { target: { files: [skin] } });
    expect(within(await screen.findByRole('dialog', { name: 'Atelier' })).getByDisplayValue('Sunset')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Close the atelier' }));
    fireEvent.change(input, { target: { files: [new File(['{ nope'], 'bad.json')] } });
    expect(await screen.findByText(/^Import refused: /)).toBeInTheDocument();
  });
});

describe('lot 3: contributions and proposals', () => {
  it('shows no tab and no Propose before the repository is set', () => {
    render(<App catalog={catalog} detectDeps={standalone} mirror={noMirror} contribRepo={null} />);
    expect(screen.queryByRole('button', { name: 'Contributions' })).not.toBeInTheDocument();
    fireEvent.click(within(tile('hud-night')).getByRole('button', { name: 'Adapt HUD night' }));
    expect(screen.queryByRole('button', { name: 'Propose' })).not.toBeInTheDocument();
  });

  it('lists the merged pull requests once the repository is set', async () => {
    const fetch = vi.fn(async () => ({ ok: true, status: 200, json: async () => [{ number: 7, title: 'Add dusk', merged_at: '2026-10-25T10:00:00Z', html_url: 'https://github.com/x/7', user: { login: 'ana' } }] }));
    render(<App catalog={catalog} detectDeps={standalone} mirror={noMirror} contribRepo={REPO} contribFetch={fetch} />);
    await act(async () => { fireEvent.click(screen.getByRole('button', { name: 'Contributions' })); });
    expect(screen.getByText('Add dusk')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Open pull request #7' })).toBeInTheDocument();
  });

  it('proposes a personal style: an author first, then GitHub opens on the file', async () => {
    const openUrl = vi.fn(async (_url: string, _inHost: boolean): Promise<string | null> => null);
    render(<App catalog={catalog} detectDeps={standalone} mirror={noMirror} contribRepo={REPO} openUrl={openUrl} />);
    fireEvent.click(within(tile('hud-night')).getByRole('button', { name: 'Adapt HUD night' }));
    const studio = screen.getByRole('dialog', { name: 'Atelier' });
    await act(async () => { fireEvent.click(within(studio).getByRole('button', { name: 'Propose' })); });
    expect(within(studio).getByRole('alert')).toHaveTextContent('An author is needed to propose');
    expect(openUrl).not.toHaveBeenCalled();
    fireEvent.change(within(studio).getByPlaceholderText('Name or GitHub handle'), { target: { value: 'ana' } });
    await act(async () => { fireEvent.click(within(studio).getByRole('button', { name: 'Propose' })); });
    const url = new URL(openUrl.mock.calls[0][0]);
    expect(url.pathname).toBe('/Mnemosyne-OS/style-shelf/new/main');
    expect(url.searchParams.get('filename')).toBe('catalog/styles/my-hud-night/style.json');
  });
});

describe('a blocked popup is never a dead button', () => {
  it('shows the proposal as a real link when the browser blocks the popup', async () => {
    const openUrl = vi.fn(async (_url: string, _inHost: boolean): Promise<string | null> => 'POPUP_BLOCKED');
    render(<App catalog={catalog} detectDeps={standalone} mirror={noMirror} contribRepo={REPO} openUrl={openUrl} />);
    fireEvent.click(within(tile('hud-night')).getByRole('button', { name: 'Adapt HUD night' }));
    const studio = screen.getByRole('dialog', { name: 'Atelier' });
    fireEvent.change(within(studio).getByPlaceholderText('Name or GitHub handle'), { target: { value: 'ana' } });
    await act(async () => { fireEvent.click(within(studio).getByRole('button', { name: 'Propose' })); });
    const link = within(studio).getByRole('link', { name: 'Open on GitHub' });
    expect(link).toHaveAttribute('href', openUrl.mock.calls[0][0]);
    expect(link).toHaveAttribute('target', '_blank');
    expect(within(studio).queryByRole('alert')).not.toBeInTheDocument();
  });

  it('openLink outside Mnemosyne says POPUP_BLOCKED when the browser gives no window, and cuts the opener otherwise', async () => {
    const { openLink } = await import('../host/openLink');
    const open = vi.spyOn(window, 'open').mockReturnValueOnce(null);
    expect(await openLink('https://github.com/x', false)).toBe('POPUP_BLOCKED');
    const win = { opener: window } as unknown as Window;
    open.mockReturnValueOnce(win);
    expect(await openLink('https://github.com/x', false)).toBeNull();
    expect(win.opener).toBeNull();
  });
});

describe('a remembered filter', () => {
  it('falls back to All when its kind has no entry left', () => {
    localStorage.setItem('style-shelf.filter', 'card');
    render(<App catalog={catalog} detectDeps={standalone} mirror={noMirror} />);
    expect(document.querySelectorAll('.tile')).toHaveLength(3);
    expect(within(screen.getByRole('group', { name: 'Kinds' })).getByRole('button', { name: /All/ })).toHaveAttribute('aria-pressed', 'true');
  });
});

describe('lot 5: premium', () => {
  it('a Premium filter appears with its count, and the kit is built and the verdict logged, never refused', () => {
    localStorage.setItem(CART_KEY, JSON.stringify({ styleId: 'hud-night', itemIds: ['gold'] }));
    // jsdom has no object URLs: the download is counted where it is made.
    const created: Blob[] = [];
    Object.defineProperty(URL, 'createObjectURL', { configurable: true, value: (b: Blob) => { created.push(b); return 'blob:x'; } });
    Object.defineProperty(URL, 'revokeObjectURL', { configurable: true, value: () => {} });
    render(<App catalog={catalog} detectDeps={standalone} mirror={noMirror} />);
    const kinds = screen.getByRole('group', { name: 'Kinds' });
    fireEvent.click(within(kinds).getByRole('button', { name: /Premium/ }));
    expect([...document.querySelectorAll('.tile')].map((t) => t.getAttribute('data-entry'))).toEqual(['gold']);
    fireEvent.click(screen.getByRole('button', { name: 'Cart · 2' }));
    fireEvent.click(screen.getByRole('button', { name: 'Download the kit' }));
    expect(created).toHaveLength(1);
    expect(console.info).toHaveBeenCalledWith('[style-shelf] premium gate: 1 premium entry (gold), access unknown, not enforced (doc 186 §9)');
  });
});
