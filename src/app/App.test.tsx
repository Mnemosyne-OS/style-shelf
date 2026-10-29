import { act, cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { CART_KEY } from '../cart/cartModel';
import type { Catalog } from '../catalog/types';
import type { DetectDeps } from '../host/detect';
import type { KitDoors } from '../host/doors';
import type { MirrorDoors } from '../personal/personalMirror';
import { App } from './App';

const T = (en: string) => ({ en, fr: en, es: en });
const base = { license: 'MIT', author: 'a', tier: 'free' as const, tags: [] };
const catalog: Catalog = {
  refused: [],
  entries: [
    { ...base, id: 'night', kind: 'style', title: T('Night'), manifest: { id: 'night', name: 'Night', version: '1', tokens: { '--accent': '#5fe3ff' } } },
    { ...base, id: 'paper', kind: 'style', title: T('Paper'), manifest: { id: 'paper', name: 'Paper', version: '1', tokens: { '--accent': '#a8411f' } } },
    { ...base, id: 'btn', kind: 'button', title: T('Solid'), css: '.ss-btn { color: var(--accent); }', html: '<button class="ss-btn">Go</button>' },
    { ...base, id: 'spin', kind: 'motion', title: T('Spinner'), license: 'Apache-2.0', css: '.ss-spin {}', html: '<div class="ss-spin"></div>' },
  ],
};

const standalone: DetectDeps = { framed: () => false, ask: () => Promise.reject(new Error('none')), setTimer: () => 0, clearTimer: () => {} };
const inMnemosyne: DetectDeps = { framed: () => true, ask: async () => ({ capabilities: [] }), setTimer: () => 0, clearTimer: () => {} };
// Never the real host copy: its state.get would post to jsdom's window.parent.
const noMirror: MirrorDoors = { get: async () => ({ state: null }), set: async () => ({}) };

function tile(id: string): HTMLElement {
  return document.querySelector(`[data-entry="${id}"]`) as HTMLElement;
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

describe('App', () => {
  it('shows every entry, and the kind filter keeps only its own with its count', () => {
    render(<App catalog={catalog} detectDeps={standalone} />);
    expect(document.querySelectorAll('.tile')).toHaveLength(4);
    const kinds = screen.getByRole('group', { name: 'Kinds' });
    expect(within(kinds).getByRole('button', { name: /All/ })).toHaveTextContent('4');
    fireEvent.click(within(kinds).getByRole('button', { name: /Styles/ }));
    expect([...document.querySelectorAll('.tile')].map((t) => t.getAttribute('data-entry'))).toEqual(['night', 'paper']);
  });

  it('choosing a style repaints every element preview in it, and marks the tile chosen', async () => {
    render(<App catalog={catalog} detectDeps={standalone} />);
    const frame = () => tile('btn').querySelector('iframe')!.getAttribute('srcdoc')!;
    expect(frame()).toContain('#5fe3ff'); // the first style draws before any choice
    fireEvent.click(within(tile('paper')).getByRole('button', { name: 'Choose the style Paper' }));
    expect(tile('paper')).toHaveClass('chosen');
    await waitFor(() => expect(frame()).toContain('#a8411f'));
    expect(tile('btn').querySelector('iframe')).toHaveAttribute('sandbox', '');
  });

  it('a new style swaps the previews through the queue, says it is loading, and stops once the frame has loaded', async () => {
    render(<App catalog={catalog} detectDeps={standalone} />);
    const frame = () => tile('btn').querySelector('iframe')!;
    fireEvent.load(frame());
    expect(tile('btn')).toHaveAttribute('aria-busy', 'false');
    fireEvent.click(within(tile('paper')).getByRole('button', { name: 'Choose the style Paper' }));
    // Not swapped in the click's own task: the old drawing stays, dimmed, under the loader.
    expect(frame().getAttribute('srcdoc')).toContain('#5fe3ff');
    expect(tile('btn')).toHaveAttribute('aria-busy', 'true');
    expect(frame()).toHaveClass('stale');
    expect(within(tile('btn')).getByRole('status')).toHaveTextContent('Loading');
    expect(screen.getByText(/Applying the style, previews left: \d+/)).toBeInTheDocument();
    await waitFor(() => expect(frame().getAttribute('srcdoc')).toContain('#a8411f'));
    expect(tile('btn')).toHaveAttribute('aria-busy', 'true'); // swapped, not loaded yet
    fireEvent.load(frame());
    expect(tile('btn')).toHaveAttribute('aria-busy', 'false');
    expect(frame()).not.toHaveClass('stale');
    expect(screen.queryByText(/Applying the style/)).not.toBeInTheDocument();
  });

  it('a frame that never says it loaded stops showing the loader after 15 s', () => {
    vi.useFakeTimers();
    try {
      render(<App catalog={catalog} detectDeps={standalone} />);
      expect(tile('btn')).toHaveAttribute('aria-busy', 'true');
      act(() => { vi.advanceTimersByTime(14_900); });
      expect(tile('btn')).toHaveAttribute('aria-busy', 'true');
      act(() => { vi.advanceTimersByTime(200); });
      expect(tile('btn')).toHaveAttribute('aria-busy', 'false');
    } finally {
      vi.useRealTimers();
    }
  });

  it('a favourite the catalogue lost stays stored but is neither shown nor counted', () => {
    localStorage.setItem('style-shelf.favorites', JSON.stringify(['gone', 'btn']));
    render(<App catalog={catalog} detectDeps={standalone} />);
    const chip = within(screen.getByRole('group', { name: 'Kinds' })).getByRole('button', { name: /Favourites/ });
    expect(chip).toHaveTextContent('1');
    fireEvent.click(chip);
    expect([...document.querySelectorAll('.tile')].map((t) => t.getAttribute('data-entry'))).toEqual(['btn']);
    expect(JSON.parse(localStorage.getItem('style-shelf.favorites')!)).toEqual(['gone', 'btn']);
  });

  it('a theme whose style left the catalogue says so in words, never with the id', () => {
    localStorage.setItem('style-shelf.themes', JSON.stringify([{ id: 'theme-old', name: 'Old', styleId: 'my-gone-style', itemIds: ['btn'], updatedAt: 'x' }]));
    render(<App catalog={catalog} detectDeps={standalone} />);
    fireEvent.click(screen.getByRole('button', { name: 'Cart · 0' }));
    const cart = screen.getByRole('dialog', { name: 'Cart' });
    expect(within(cart).getByText('style no longer in the catalogue · elements: 1')).toBeInTheDocument();
    expect(within(cart).queryByText(/my-gone-style/)).not.toBeInTheDocument();
  });

  it('stars an entry into the favourites: a chip that keeps only them, remembered, gone with the last star', () => {
    render(<App catalog={catalog} detectDeps={standalone} />);
    const kinds = screen.getByRole('group', { name: 'Kinds' });
    expect(within(kinds).queryByRole('button', { name: /Favourites/ })).not.toBeInTheDocument();
    fireEvent.click(within(tile('btn')).getByRole('button', { name: 'Add Solid to the favourites' }));
    expect(within(tile('btn')).getByRole('button', { name: 'Take Solid out of the favourites' })).toHaveAttribute('aria-pressed', 'true');
    expect(JSON.parse(localStorage.getItem('style-shelf.favorites')!)).toEqual(['btn']);
    fireEvent.click(within(kinds).getByRole('button', { name: /Favourites/ }));
    expect([...document.querySelectorAll('.tile')].map((t) => t.getAttribute('data-entry'))).toEqual(['btn']);
    fireEvent.click(within(tile('btn')).getByRole('button', { name: 'Take Solid out of the favourites' }));
    expect(within(kinds).queryByRole('button', { name: /Favourites/ })).not.toBeInTheDocument();
    expect(document.querySelectorAll('.tile')).toHaveLength(4);
  });

  it('says before the click what each button will do: in Mnemosyne, the folder and the four files a write creates', async () => {
    render(<App catalog={catalog} detectDeps={inMnemosyne} mirror={noMirror} />);
    await act(async () => {});
    fireEvent.click(screen.getByRole('button', { name: 'Cart · 0' }));
    const explain = within(screen.getByRole('dialog', { name: 'Cart' })).getByRole('region', { name: 'What happens' });
    for (const f of ['kit.json', 'tokens.css', 'elements.css', 'BRIEF.md']) expect(within(explain).getByText(`style-shelf/${f}`)).toBeInTheDocument();
    expect(explain).toHaveTextContent('no folder to create. Style Shelf creates style-shelf/ in it by itself');
    expect(explain).toHaveTextContent('Nothing else in the project is read, changed or deleted.');
    expect(explain).toHaveTextContent('Mnemosyne OS asks for the files permission');
    expect(explain).toHaveTextContent('Needs no permission.');
  });

  it('in a browser alone, says the kit is downloaded and lists no folder', () => {
    render(<App catalog={catalog} detectDeps={standalone} />);
    fireEvent.click(screen.getByRole('button', { name: 'Cart · 0' }));
    const explain = within(screen.getByRole('dialog', { name: 'Cart' })).getByRole('region', { name: 'What happens' });
    expect(explain).toHaveTextContent('saves kit.json in the downloads folder.');
    expect(within(explain).queryByText('style-shelf/BRIEF.md')).not.toBeInTheDocument();
  });

  it('the cart offers nothing before a style, then the kit; it counts and keeps what is in it', () => {
    render(<App catalog={catalog} detectDeps={standalone} />);
    fireEvent.click(within(tile('btn')).getByRole('button', { name: 'Add Solid to the cart' }));
    fireEvent.click(screen.getByRole('button', { name: 'Cart · 1' }));
    const cart = screen.getByRole('dialog', { name: 'Cart' });
    expect(within(cart).getByText('Choose a style')).toBeInTheDocument();
    expect(within(cart).getByRole('button', { name: 'Download the kit' })).toBeDisabled();
    fireEvent.click(within(cart).getByRole('button', { name: 'Close the cart' }));

    fireEvent.click(within(tile('night')).getByRole('button', { name: 'Choose the style Night' }));
    fireEvent.click(screen.getByRole('button', { name: 'Cart · 2' }));
    expect(within(screen.getByRole('dialog', { name: 'Cart' })).getByRole('button', { name: 'Download the kit' })).toBeEnabled();
    expect(JSON.parse(localStorage.getItem(CART_KEY)!)).toEqual({ styleId: 'night', itemIds: ['btn'] });
  });

  it('a stored item the catalogue lost is taken out and said', () => {
    localStorage.setItem(CART_KEY, JSON.stringify({ styleId: 'night', itemIds: ['btn', 'gone'] }));
    render(<App catalog={catalog} detectDeps={standalone} />);
    expect(screen.getByText('1 items left the catalogue, taken out of the cart')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cart · 2' })).toBeInTheDocument();
  });

  it('inside Mnemosyne, writes the kit into the chosen project and says where', async () => {
    const written: string[] = [];
    const doors: KitDoors = {
      pickFolder: async () => 'C:\\Users\\me\\proj',
      mkdir: async () => ({ success: true }),
      writeFile: async (p) => { written.push(p); return { success: true }; },
    };
    localStorage.setItem(CART_KEY, JSON.stringify({ styleId: 'night', itemIds: ['btn', 'spin'] }));
    render(<App catalog={catalog} detectDeps={inMnemosyne} doors={doors} mirror={noMirror} />);
    await act(async () => {});
    fireEvent.click(screen.getByRole('button', { name: 'Cart · 3' }));
    const cart = screen.getByRole('dialog', { name: 'Cart' });
    await act(async () => { fireEvent.click(within(cart).getByRole('button', { name: 'Write into the project' })); });
    expect(written).toEqual(['kit.json', 'tokens.css', 'elements.css', 'BRIEF.md'].map((f) => `C:\\Users\\me\\proj\\style-shelf\\${f}`));
    expect(within(cart).getByText('C:\\Users\\me\\proj\\style-shelf')).toBeInTheDocument();
    expect(within(cart).getByText('4 files written')).toBeInTheDocument();
    expect(within(cart).getByText('MIT')).toBeInTheDocument();
    expect(within(cart).getByText('Apache-2.0')).toBeInTheDocument();
  });

  it('a cart changed after a write no longer says it is written: the kit on disk is the old one', async () => {
    const doors: KitDoors = { pickFolder: async () => 'C:\\p', mkdir: async () => ({ success: true }), writeFile: async () => ({ success: true }) };
    localStorage.setItem(CART_KEY, JSON.stringify({ styleId: 'night', itemIds: ['btn'] }));
    render(<App catalog={catalog} detectDeps={inMnemosyne} doors={doors} mirror={noMirror} />);
    await act(async () => {});
    fireEvent.click(screen.getByRole('button', { name: 'Cart · 2' }));
    await act(async () => { fireEvent.click(screen.getByRole('button', { name: 'Write into the project' })); });
    expect(screen.getByText('4 files written')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Take Solid out' }));
    expect(screen.queryByText('4 files written')).not.toBeInTheDocument();
  });

  it('a refused write is said with the file and what was written before it', async () => {
    const doors: KitDoors = {
      pickFolder: async () => 'C:\\x',
      mkdir: async () => ({ success: true }),
      writeFile: async (p) => (p.endsWith('tokens.css') ? { success: false, error: 'Access denied' } : { success: true }),
    };
    localStorage.setItem(CART_KEY, JSON.stringify({ styleId: 'night', itemIds: [] }));
    render(<App catalog={catalog} detectDeps={inMnemosyne} doors={doors} mirror={noMirror} />);
    await act(async () => {});
    fireEvent.click(screen.getByRole('button', { name: 'Cart · 1' }));
    await act(async () => { fireEvent.click(screen.getByRole('button', { name: 'Write into the project' })); });
    expect(screen.getByRole('alert')).toHaveTextContent('tokens.css not written: Access denied · 1 files written before it');
  });

  it('copies the brief with the CSS inside', async () => {
    const writeText = vi.fn(async (_text: string) => {});
    Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true });
    localStorage.setItem(CART_KEY, JSON.stringify({ styleId: 'night', itemIds: ['btn'] }));
    render(<App catalog={catalog} detectDeps={standalone} />);
    fireEvent.click(screen.getByRole('button', { name: 'Cart · 2' }));
    fireEvent.click(screen.getByRole('button', { name: 'Copy the brief' }));
    // Nothing leaves before the person has seen it: the page in the theme, and the text.
    expect(writeText).not.toHaveBeenCalled();
    const view = screen.getByRole('dialog', { name: 'What you copy' });
    expect(within(view).getByText('The 1 elements of the cart')).toBeInTheDocument();
    expect(view.querySelector('iframe.page-frame')!.getAttribute('srcdoc')).toContain('--accent: #5fe3ff;');
    expect(view.querySelector('iframe.page-frame')).toHaveAttribute('sandbox', '');
    expect(within(view).getByLabelText('The brief')).toHaveTextContent('elements.css');
    await act(async () => { fireEvent.click(within(view).getByRole('button', { name: 'Copy' })); });
    expect(writeText).toHaveBeenCalledTimes(1);
    expect(writeText.mock.calls[0][0]).toContain('## elements.css\n\n```css\n/* ── Solid');
    expect(within(view).getByRole('button', { name: 'Copied' })).toBeInTheDocument();
    // Escape closes the view, and the cart under it stays open.
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.queryByRole('dialog', { name: 'What you copy' })).not.toBeInTheDocument();
    expect(screen.getByRole('dialog', { name: 'Cart' })).toBeInTheDocument();
  });

  it('keeps the cart as a named theme, loads it back, and deletes it on a second click', () => {
    localStorage.setItem(CART_KEY, JSON.stringify({ styleId: 'night', itemIds: ['btn'] }));
    render(<App catalog={catalog} detectDeps={standalone} />);
    fireEvent.click(screen.getByRole('button', { name: 'Cart · 2' }));
    let cart = screen.getByRole('dialog', { name: 'Cart' });
    fireEvent.change(within(cart).getByRole('textbox', { name: 'Theme name' }), { target: { value: 'Site' } });
    fireEvent.click(within(cart).getByRole('button', { name: 'Save as a theme' }));
    expect(within(cart).getByText('Night · elements: 1')).toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem('style-shelf.themes')!)[0]).toMatchObject({ name: 'Site', styleId: 'night', itemIds: ['btn'] });

    // The same name updates the theme instead of adding one.
    fireEvent.change(within(cart).getByRole('textbox', { name: 'Theme name' }), { target: { value: 'site' } });
    expect(within(cart).getByRole('button', { name: 'Update this theme' })).toBeEnabled();

    fireEvent.click(within(cart).getByRole('button', { name: 'Take Solid out' }));
    fireEvent.click(within(cart).getByRole('button', { name: 'Load Site' }));
    expect(screen.getByRole('button', { name: 'Cart · 2' })).toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem(CART_KEY)!)).toEqual({ styleId: 'night', itemIds: ['btn'] });

    cart = screen.getByRole('dialog', { name: 'Cart' });
    fireEvent.click(within(cart).getByRole('button', { name: 'Delete Site' }));
    expect(within(cart).getByText('Night · elements: 1')).toBeInTheDocument();
    fireEvent.click(within(cart).getByRole('button', { name: 'Confirm: delete Site' }));
    expect(within(cart).getByText('No theme yet')).toBeInTheDocument();
  });

  it('a theme needs a style, and loading one says which of its items the catalogue lost', () => {
    localStorage.setItem('style-shelf.themes', JSON.stringify([{ id: 'theme-old', name: 'Old', styleId: 'paper', itemIds: ['btn', 'gone'], updatedAt: 'x' }]));
    render(<App catalog={catalog} detectDeps={standalone} />);
    fireEvent.click(screen.getByRole('button', { name: 'Cart · 0' }));
    const cart = screen.getByRole('dialog', { name: 'Cart' });
    fireEvent.change(within(cart).getByRole('textbox', { name: 'Theme name' }), { target: { value: 'New' } });
    expect(within(cart).getByRole('button', { name: 'Save as a theme' })).toBeDisabled();
    fireEvent.click(within(cart).getByRole('button', { name: 'Load Old' }));
    expect(JSON.parse(localStorage.getItem(CART_KEY)!)).toEqual({ styleId: 'paper', itemIds: ['btn'] });
    expect(screen.getByText('Items of this theme gone from the catalogue: 1')).toBeInTheDocument();
  });

  it('opens the whole-page preview from the top bar: every element while the cart has none', () => {
    render(<App catalog={catalog} detectDeps={standalone} />);
    fireEvent.click(screen.getByRole('button', { name: 'Whole-page preview' }));
    const view = screen.getByRole('dialog', { name: 'Whole-page preview' });
    expect(within(view).getByText('Every element of the catalogue')).toBeInTheDocument();
    const doc = view.querySelector('iframe')!.getAttribute('srcdoc')!;
    expect(doc).toContain('<h2>Solid</h2>');
    expect(doc).toContain('Lorem ipsum');
    expect(within(view).queryByRole('button', { name: 'Copy' })).not.toBeInTheDocument();
    fireEvent.click(within(view).getByRole('button', { name: 'Close the preview' }));
    expect(screen.queryByRole('dialog', { name: 'Whole-page preview' })).not.toBeInTheDocument();
  });
});
