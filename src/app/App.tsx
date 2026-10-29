/**
 * App — Style Shelf (doc 186): the catalogue, its filter and tile sizes, the
 * cart, the way the kit leaves the app, the atelier of the personal styles,
 * and the catalogue's contributions.
 *
 * Every tile is drawn in the chosen style, so choosing a style repaints the
 * whole catalogue: that is the configurator. Before a style is chosen, the
 * house HUD draws the previews.
 *
 * The personal styles join the catalogue as styles like the others (first in
 * line): the cart, the kit and the agent action read ONE catalogue.
 *
 * @module app/App
 */
import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import { EMPTY_CART, CART_KEY, cartCount, inCart, parseCart, reconcile, removeItem, setStyle, toggleItem, type Cart } from '../cart/cartModel';
import { shippedCatalog } from '../catalog/loadCatalog';
import { isElementKind } from '../catalog/catalogModel';
import { ENTRY_KINDS, type Catalog, type CatalogEntry, type ElementEntry, type EntryKind, type IconPackEntry, type StyleEntry } from '../catalog/types';
import { CONTRIB_REPO, type ContribRepo } from '../contrib/contribConfig';
import { CONTRIB_CACHE_KEY, loadContributions, type ContribDeps, type ContribView } from '../contrib/contribModel';
import { Contributions } from '../contrib/Contributions';
import { proposalUrl } from '../contrib/proposal';
import type { DetectDeps } from '../host/detect';
import { hostKitDoors, type KitDoors } from '../host/doors';
import { inMnemosyne } from '../host/hostState';
import { openLink, POPUP_BLOCKED } from '../host/openLink';
import { browserDetectDeps } from '../host/sdk';
import { FAVORITES_KEY, keepKnown, parseFavorites, toggleFavorite } from '../favorites/favoritesModel';
import { fill, titleIn, words } from '../i18n/words';
import { briefMarkdown, buildKit } from '../kit/buildKit';
import { writeKit } from '../kit/writeKit';
import { readChoice, safeLocalStorage, writeChoice } from '../lib/choiceStore';
import { copyText, downloadText, readFileText } from '../lib/handoff';
import { hostMirrorDoors, type MirroredField, type MirrorDoors } from '../personal/personalMirror';
import { createPersonal, exportSkin, importSkin, parseStored, PERSONAL_KEY, serialize, toEntry, type PersonalStyle } from '../personal/personalModel';
import { useHostMirror, type RestoreMode } from '../personal/useHostMirror';
import { usePersonalStyles } from '../personal/usePersonalStyles';
import { premiumAccess, premiumInCart, premiumVerdict } from '../premium/premium';
import { pageDoc } from '../preview/pageDoc';
import { repaintQueue } from '../preview/repaintQueue';
import { StyleStudio } from '../studio/StyleStudio';
import { parseThemes, removeTheme, saveTheme, themeCart, THEMES_KEY, type SavedTheme } from '../themes/themesModel';
import { CartPanel, type CopyState, type WriteState } from '../ui/CartPanel';
import { HostBadge } from '../ui/HostBadge';
import { Icon } from '../ui/Icon';
import { PagePreview } from '../ui/PagePreview';
import { Tile } from '../ui/Tile';
import { AgentActions } from './AgentActions';
import { useHost } from './useHost';
import { useLang } from './useLang';

const SIZES = ['small', 'medium', 'large'] as const;
type Size = (typeof SIZES)[number];
const FILTERS = ['all', 'favorites', ...ENTRY_KINDS, 'premium'] as const;
type Filter = (typeof FILTERS)[number];
const SIZE_ICONS = { small: 'grid9', medium: 'grid4', large: 'grid1' } as const;
/** The style that draws the previews before one is chosen: the house HUD, when the catalogue has it. */
const DEFAULT_PREVIEW_STYLE = 'hud-night';

const browserContribFetch: ContribDeps['fetch'] = (url, init) => window.fetch(url, init);

interface AppProps {
  catalog?: Catalog;
  detectDeps?: DetectDeps;
  doors?: KitDoors;
  mirror?: MirrorDoors;
  contribRepo?: ContribRepo | null;
  contribFetch?: ContribDeps['fetch'];
  openUrl?: (url: string, inMnemosyne: boolean) => Promise<string | null>;
  now?: () => Date;
}

/** The shipped catalogue with the personal styles in it, first among the styles. */
function withPersonal(shipped: Catalog, personal: PersonalStyle[]): Catalog {
  return personal.length === 0 ? shipped : { entries: [...personal.map(toEntry), ...shipped.entries], refused: shipped.refused };
}

function loadCart(catalog: Catalog, storage: Storage | null): { cart: Cart; dropped: string[] } {
  try {
    return reconcile(parseCart(storage?.getItem(CART_KEY) ?? null), catalog);
  } catch (err) {
    console.warn('[style-shelf] stored cart unreadable, starting empty:', err);
    return { cart: EMPTY_CART, dropped: [] };
  }
}

type Notice = { tone: 'notice' | 'error'; text: string } | null;

export function App({
  catalog: shipped = shippedCatalog(),
  detectDeps = browserDetectDeps,
  doors = hostKitDoors,
  mirror = hostMirrorDoors,
  contribRepo = CONTRIB_REPO,
  contribFetch = browserContribFetch,
  openUrl = openLink,
  now = () => new Date(),
}: AppProps) {
  const host = useHost(detectDeps);
  const lang = useLang();
  const w = words(lang);
  const storage = useMemo(() => safeLocalStorage(), []);
  const inHost = !!host && inMnemosyne(host);

  const personal = usePersonalStyles(storage);
  const catalog = useMemo(() => withPersonal(shipped, personal.styles), [shipped, personal.styles]);

  // The cart is reconciled once, against the catalogue as it reads at start (personal styles included).
  const [{ cart: firstCart, dropped }] = useState(() => {
    let stored: PersonalStyle[] = [];
    try { stored = parseStored(storage?.getItem(PERSONAL_KEY) ?? null).styles; } catch (err) { console.warn('[style-shelf] storage unreadable:', err); }
    return loadCart(withPersonal(shipped, stored), storage);
  });
  const [cart, setCart] = useState<Cart>(firstCart);
  const [filter, setFilter] = useState<Filter>(() => readChoice(storage, 'style-shelf.filter', FILTERS, 'all'));
  const [size, setSize] = useState<Size>(() => readChoice(storage, 'style-shelf.size', SIZES, 'medium'));
  const [view, setView] = useState<'catalog' | 'contrib'>('catalog');
  const [contrib, setContrib] = useState<ContribView>({ kind: 'loading' });
  const [cartOpen, setCartOpen] = useState(false);
  const [writeState, setWriteState] = useState<WriteState>({ kind: 'idle' });
  const [copyState, setCopyState] = useState<CopyState>({ kind: 'idle' });
  const [atelier, setAtelier] = useState<{ draft: PersonalStyle; isNew: boolean } | null>(null);
  const [proposeError, setProposeError] = useState<string | null>(null);
  const [linkHere, setLinkHere] = useState<string | null>(null);
  const [notice, setNotice] = useState<Notice>(null);
  const importInput = useRef<HTMLInputElement>(null);
  // The whole-page view: open alone (brief null) or to copy the brief, built once when it opens.
  const [storedThemes] = useState(() => {
    try { return parseThemes(storage?.getItem(THEMES_KEY) ?? null); } catch (err) { console.warn('[style-shelf] storage unreadable:', err); return { themes: [], refused: 0 }; }
  });
  const [themes, setThemes] = useState<SavedTheme[]>(storedThemes.themes);
  const [pageView, setPageView] = useState<{ brief: string | null } | null>(null);
  const [favorites, setFavorites] = useState<string[]>(() => {
    try { return parseFavorites(storage?.getItem(FAVORITES_KEY) ?? null); } catch (err) { console.warn('[style-shelf] storage unreadable:', err); return []; }
  });

  useEffect(() => writeChoice(storage, CART_KEY, JSON.stringify(cart)), [storage, cart]);
  useEffect(() => writeChoice(storage, 'style-shelf.filter', filter), [storage, filter]);
  useEffect(() => writeChoice(storage, 'style-shelf.size', size), [storage, size]);
  useEffect(() => writeChoice(storage, FAVORITES_KEY, JSON.stringify(favorites)), [storage, favorites]);
  useEffect(() => writeChoice(storage, THEMES_KEY, JSON.stringify(themes)), [storage, themes]);

  // The host's copy of what the person made here: one document, three fields (doc 186 §16).
  const mirrorTexts = useMemo(() => ({ personal: serialize(personal.styles), themes: JSON.stringify(themes), favorites: JSON.stringify(favorites) }), [personal.styles, themes, favorites]);
  // Stored themes the host held that could not be read: counted on screen like the local ones.
  const [hostRefusedThemes, setHostRefusedThemes] = useState(0);
  // `merge` = the person changed this list before the host answered: the host's items join it.
  const restoreField = useCallback((field: MirroredField, text: string, mode: RestoreMode): number => {
    if (field === 'personal') return personal.restore(text, mode);
    if (field === 'themes') {
      const parsed = parseThemes(text);
      setHostRefusedThemes(parsed.refused);
      const back = mode === 'merge' ? parsed.themes.filter((h) => !themes.some((t) => t.id === h.id)) : parsed.themes;
      if (back.length > 0) setThemes((list) => (mode === 'merge' ? [...list, ...back.filter((h) => !list.some((t) => t.id === h.id))] : back));
      return back.length;
    }
    const host = parseFavorites(text);
    const back = mode === 'merge' ? host.filter((id) => !favorites.includes(id)) : host;
    if (back.length > 0) setFavorites((f) => (mode === 'merge' ? [...host, ...f.filter((id) => !host.includes(id))] : back));
    return back.length;
  }, [personal, themes, favorites]);
  const hostCopy = useHostMirror(inHost, mirror, mirrorTexts, restoreField);
  const { markChanged } = hostCopy;

  const styles = useMemo(() => catalog.entries.filter((e): e is StyleEntry => e.kind === 'style'), [catalog]);
  const chosenStyle = styles.find((s) => s.id === cart.styleId);
  // Previews still waiting for the chosen style (doc 186 §14).
  const repainting = useSyncExternalStore(repaintQueue.subscribe, repaintQueue.pending);
  const previewStyle = chosenStyle ?? styles.find((s) => s.id === DEFAULT_PREVIEW_STYLE) ?? styles[0];
  // The stored list keeps an id the catalogue lost (a personal style may come back); the screen does not show it.
  const favSet = useMemo(() => new Set(keepKnown(favorites, new Set(catalog.entries.map((e) => e.id)))), [favorites, catalog]);
  const counts = useMemo(() => {
    const c = new Map<Filter, number>([['all', catalog.entries.length]]);
    if (favSet.size > 0) c.set('favorites', favSet.size);
    for (const e of catalog.entries) {
      c.set(e.kind, (c.get(e.kind) ?? 0) + 1);
      if (e.tier === 'premium') c.set('premium', (c.get('premium') ?? 0) + 1);
    }
    return c;
  }, [catalog, favSet]);
  // A remembered filter whose kind has no entry left would show « Nothing here » with its chip hidden.
  const activeFilter: Filter = filter === 'all' || counts.has(filter) ? filter : 'all';
  const shown = activeFilter === 'all' ? catalog.entries : catalog.entries.filter((e) => (activeFilter === 'premium' ? e.tier === 'premium' : activeFilter === 'favorites' ? favSet.has(e.id) : e.kind === activeFilter));
  // The page shows the cart's elements, or the whole catalogue while the cart has none.
  const page = useMemo(() => {
    const byId = new Map(catalog.entries.map((e) => [e.id, e]));
    const fromCart = cart.itemIds.map((id) => byId.get(id)).filter((e): e is CatalogEntry => !!e);
    const pick = fromCart.length > 0 ? fromCart : catalog.entries;
    return {
      fromCart: fromCart.length,
      elements: pick.filter((e): e is ElementEntry => isElementKind(e.kind)),
      icons: pick.filter((e): e is IconPackEntry => e.kind === 'icons'),
      name: (id: string) => { const e = byId.get(id); return e ? titleIn(e.title, lang) : id; },
    };
  }, [catalog, cart.itemIds, lang]);
  const pageHtml = useMemo(() => (pageView && previewStyle ? pageDoc(previewStyle, page, page.name) : ''), [pageView, previewStyle, page]);
  const writtenTo = writeState.kind === 'done' && writeState.outcome.ok ? writeState.outcome.dir : null;
  const access = premiumAccess(host);

  // The contributions are read when their view opens, and only when the repository is set.
  useEffect(() => {
    if (view !== 'contrib' || !contribRepo) return undefined;
    let live = true;
    setContrib({ kind: 'loading' });
    loadContributions(contribRepo, {
      fetch: contribFetch,
      now,
      read: () => { try { return storage?.getItem(CONTRIB_CACHE_KEY) ?? null; } catch (err) { console.warn('[style-shelf] storage unreadable:', err); return null; } },
      write: (text) => writeChoice(storage, CONTRIB_CACHE_KEY, text),
    }).then((v) => { if (live) setContrib(v); });
    return () => { live = false; };
    // `now` is a clock, not a reason to read GitHub again: left out of the list on purpose.
  }, [view, contribRepo, contribFetch, storage]);

  // A cart that changes after a write is not the kit on disk any more.
  const changeCart = useCallback((next: (c: Cart) => Cart) => {
    setCart(next);
    setWriteState({ kind: 'idle' });
    setCopyState({ kind: 'idle' });
  }, []);

  const onToggle = useCallback((entry: CatalogEntry) => {
    changeCart((c) => (entry.kind === 'style' ? setStyle(c, c.styleId === entry.id ? null : entry.id) : toggleItem(c, entry.id)));
  }, [changeCart]);

  const onFavorite = useCallback((id: string) => { markChanged('favorites'); setFavorites((f) => toggleFavorite(f, id)); }, [markChanged]);
  // ── The named themes (doc 186 §15): the cart kept under a name ─────────
  const onSaveTheme = useCallback((name: string) => {
    markChanged('themes');
    setThemes((list) => saveTheme(list, name, cart, now().toISOString()) ?? list);
  }, [cart, now, markChanged]);
  // Loading goes through the catalogue: an id it lost is named, never dropped in silence.
  const onLoadTheme = useCallback((t: SavedTheme) => {
    const { cart: next, dropped: lost } = reconcile(themeCart(t), catalog);
    changeCart(() => next);
    setNotice(lost.length > 0 ? { tone: 'notice', text: fill(w.themes.dropped, { count: lost.length }) } : null);
  }, [catalog, changeCart, w]);
  const onDeleteTheme = useCallback((id: string) => { markChanged('themes'); setThemes((list) => removeTheme(list, id)); }, [markChanged]);
  const onRemove = useCallback((id: string) => changeCart((c) => removeItem(c, id)), [changeCart]);
  const onClose = useCallback(() => setCartOpen(false), []);

  /** The kit leaving the app, with the premium verdict said in the log (lot 5: never enforced). */
  const kitForExit = useCallback(() => {
    const built = buildKit(cart, catalog, now().toISOString());
    const verdict = premiumVerdict(premiumInCart(cart, catalog), access);
    if (built.ok && verdict) console.info(`[style-shelf] ${verdict}`);
    return built;
  }, [cart, catalog, now, access]);

  const onWrite = useCallback(async () => {
    const built = kitForExit();
    if (!built.ok) return;
    setWriteState({ kind: 'writing' });
    const outcome = await writeKit(built.files, doors);
    if (!outcome.ok && !outcome.cancelled) console.warn(`[style-shelf] kit not written at ${outcome.step}: ${outcome.error}`);
    setWriteState(outcome.ok || !outcome.cancelled ? { kind: 'done', outcome } : { kind: 'idle' });
  }, [kitForExit, doors]);

  const onDownload = useCallback(() => {
    const built = kitForExit();
    if (built.ok) downloadText('style-shelf-kit.json', built.files[0].content);
  }, [kitForExit]);

  const copy = useCallback(async (text: string, what: 'brief' | 'instruction') => {
    const refused = await copyText(text);
    if (refused) console.warn('[style-shelf] copy refused:', refused);
    setCopyState(refused ? { kind: 'failed', detail: refused } : { kind: 'copied', what });
  }, []);

  // « Copy the brief » shows what leaves first; the copy is the view's own button.
  const onCopyBrief = useCallback(() => {
    const built = kitForExit();
    if (built.ok) setPageView({ brief: briefMarkdown(built.kit, { embedFiles: true }) });
  }, [kitForExit]);
  const closePage = useCallback(() => setPageView(null), []);

  const onCopyInstruction = useCallback(() => void copy(w.cart.instruction, 'instruction'), [copy, w]);

  // ── The atelier (lot 2) ────────────────────────────────────────────────
  const takenIds = useCallback(() => new Set(catalog.entries.map((e) => e.id)), [catalog]);

  const onAtelier = useCallback((entry: StyleEntry) => {
    setProposeError(null);
    const own = personal.styles.find((p) => p.id === entry.id);
    if (own) {
      setAtelier({ draft: own, isNew: false });
      return;
    }
    const name = fill(w.studio.newName, { name: titleIn(entry.title, lang) });
    setAtelier({ draft: createPersonal(entry, name, takenIds(), now().toISOString()), isNew: true });
  }, [personal.styles, w, lang, takenIds, now]);

  const onKeep = useCallback((p: PersonalStyle) => {
    markChanged('personal');
    personal.keep({ ...p, updatedAt: now().toISOString() });
    if (cart.styleId === p.id) setWriteState({ kind: 'idle' });
    setAtelier(null);
  }, [personal, cart.styleId, now, markChanged]);

  const onDelete = useCallback((id: string) => {
    markChanged('personal');
    personal.remove(id);
    if (cart.styleId === id) changeCart((c) => setStyle(c, null));
    setAtelier(null);
  }, [personal, cart.styleId, changeCart, markChanged]);

  const onExport = useCallback((p: PersonalStyle) => downloadText(`${p.id}.json`, exportSkin(p)), []);
  const closeAtelier = useCallback(() => setAtelier(null), []);

  const onPropose = useCallback(async (p: PersonalStyle) => {
    if (!contribRepo) return;
    const link = proposalUrl(contribRepo, p);
    if (!link.ok) {
      setProposeError(link.error === 'NO_AUTHOR' ? w.contrib.noAuthor : fill(w.contrib.tooLong, { size: link.size }));
      return;
    }
    const refused = await openUrl(link.url, inHost);
    setLinkHere(refused === POPUP_BLOCKED ? link.url : null);
    setProposeError(refused && refused !== POPUP_BLOCKED ? fill(w.contrib.openFailed, { detail: refused }) : null);
  }, [contribRepo, w, openUrl, inHost]);

  const onImportFile = useCallback(async (file: File | undefined) => {
    if (!file || !previewStyle) return;
    let text: string;
    try {
      text = await readFileText(file);
    } catch (err) {
      setNotice({ tone: 'error', text: fill(w.personal.importFailed, { detail: err instanceof Error ? err.message : String(err) }) });
      return;
    }
    const got = importSkin(text, previewStyle, takenIds(), now().toISOString());
    if ('error' in got) {
      setNotice({ tone: 'error', text: fill(w.personal.importFailed, { detail: got.error }) });
      return;
    }
    setNotice({ tone: 'notice', text: fill(w.personal.imported, { name: got.name }) });
    setProposeError(null);
    setAtelier({ draft: got, isNew: true });
  }, [previewStyle, takenIds, now, w]);

  const onOpenContribution = useCallback((url: string) => {
    void openUrl(url, inHost).then((refused) => {
      setLinkHere(refused === POPUP_BLOCKED ? url : null);
      if (refused && refused !== POPUP_BLOCKED) setNotice({ tone: 'error', text: fill(w.contrib.openFailed, { detail: refused }) });
    });
  }, [openUrl, inHost, w]);

  const count = cartCount(cart);
  const notices: { tone: 'notice' | 'error'; text: string; title?: string }[] = [];
  if (catalog.refused.length > 0) notices.push({ tone: 'error', text: fill(w.catalog.refused, { count: catalog.refused.length }), title: catalog.refused.map((r) => `${r.path}: ${r.reason}`).join('\n') });
  if (dropped.length > 0) notices.push({ tone: 'notice', text: fill(w.catalog.dropped, { count: dropped.length }), title: dropped.join(', ') });
  if (storedThemes.refused + hostRefusedThemes > 0) notices.push({ tone: 'error', text: fill(w.themes.refused, { count: storedThemes.refused + hostRefusedThemes }) });
  if (personal.refusedAtLoad > 0) notices.push({ tone: 'error', text: fill(w.personal.refused, { count: personal.refusedAtLoad }) });
  if (hostCopy.restored.personal > 0) notices.push({ tone: 'notice', text: fill(w.personal.restored, { count: hostCopy.restored.personal }) });
  if (hostCopy.restored.themes > 0) notices.push({ tone: 'notice', text: fill(w.hostCopy.themes, { count: hostCopy.restored.themes }) });
  if (hostCopy.restored.favorites > 0) notices.push({ tone: 'notice', text: fill(w.hostCopy.favorites, { count: hostCopy.restored.favorites }) });
  if (hostCopy.readError) notices.push({ tone: 'error', text: fill(w.hostCopy.unreadable, { detail: hostCopy.readError }) });
  if (hostCopy.error) notices.push({ tone: 'error', text: fill(w.personal.mirrorFailed, { detail: hostCopy.error }) });
  if (notice) notices.push(notice);

  return (
    <div className="hud-root app">
      <header className="topbar">
        <span className="brand lab">{w.appTitle}</span>
        <HostBadge state={host} w={w} />
        {contribRepo && (
          <div className="segmented views" role="group" aria-label={w.contrib.views}>
            <button type="button" className={`icon-btn${view === 'catalog' ? ' chosen' : ''}`} aria-pressed={view === 'catalog'} onClick={() => setView('catalog')}>{w.contrib.catalogTab}</button>
            <button type="button" className={`icon-btn${view === 'contrib' ? ' chosen' : ''}`} aria-pressed={view === 'contrib'} onClick={() => setView('contrib')}>{w.contrib.tab}</button>
          </div>
        )}
        <button type="button" className="icon-btn" aria-label={w.page.open} title={w.page.open} onClick={() => setPageView({ brief: null })}>
          <Icon name="eye" />
        </button>
        <button type="button" className="icon-btn" aria-label={w.personal.import} title={w.personal.import} onClick={() => importInput.current?.click()}>
          <Icon name="upload" />
        </button>
        <input ref={importInput} type="file" accept=".json,application/json" hidden onChange={(e) => { void onImportFile(e.target.files?.[0]); e.target.value = ''; }} />
        <button type="button" className="cart-btn" aria-label={`${w.cart.open} · ${count}`} title={w.cart.open} onClick={() => setCartOpen(true)}>
          <Icon name="cart" />
          <span className="count">{count}</span>
        </button>
      </header>

      {view === 'catalog' && (
        <div className="toolbar">
          <div className="kinds" role="group" aria-label={w.kinds.label}>
            {FILTERS.filter((f) => f === 'all' || counts.has(f)).map((f) => (
              <button key={f} type="button" className={`chip-tile${activeFilter === f ? ' chosen' : ''}`} aria-pressed={activeFilter === f} onClick={() => setFilter(f)}>
                {f === 'all' ? w.kinds.all : f === 'favorites' ? w.kinds.favorites : f === 'premium' ? w.premium.label : w.kinds[f as EntryKind]}
                <span className="lab n">{counts.get(f) ?? 0}</span>
              </button>
            ))}
          </div>
          <div className="segmented" role="group" aria-label={w.view.label}>
            {SIZES.map((s) => (
              <button key={s} type="button" className={`icon-btn${size === s ? ' chosen' : ''}`} aria-pressed={size === s} aria-label={w.view[s]} title={w.view[s]} onClick={() => setSize(s)}>
                <Icon name={SIZE_ICONS[s]} />
              </button>
            ))}
          </div>
          <p className="repaint lab" role="status" aria-live="polite">
            {repainting > 0 ? fill(w.tile.repainting, { n: repainting }) : ''}
          </p>
        </div>
      )}

      {(notices.length > 0 || (linkHere && !atelier)) && (
        <div className="notices">
          {notices.map((n) => <p key={n.text} className={n.tone} title={n.title}>{n.text}</p>)}
          {linkHere && !atelier && <p className="notice"><a className="link" href={linkHere} target="_blank" rel="noopener noreferrer">{w.contrib.openHere}</a></p>}
        </div>
      )}

      {view === 'contrib' && contribRepo ? (
        <Contributions view={contrib} lang={lang} w={w} onOpen={onOpenContribution} />
      ) : previewStyle && shown.length > 0 ? (
        <main className={`grid size-${size}`}>
          {shown.map((e) => (
            <Tile key={e.id} entry={e} previewStyle={previewStyle} inCart={inCart(cart, e.id)} favorite={favSet.has(e.id)} lang={lang} w={w} onToggle={onToggle} onFavorite={onFavorite} onAtelier={onAtelier} />
          ))}
        </main>
      ) : (
        <p className="muted empty">{w.catalog.empty}</p>
      )}

      {cartOpen && (
        <CartPanel
          cart={cart}
          catalog={catalog}
          lang={lang}
          w={w}
          inMnemosyne={inHost}
          writeState={writeState}
          copyState={copyState}
          onRemove={onRemove}
          onClose={onClose}
          onWrite={onWrite}
          onDownload={onDownload}
          onCopyBrief={onCopyBrief}
          onCopyInstruction={onCopyInstruction}
          themes={themes}
          onSaveTheme={onSaveTheme}
          onLoadTheme={onLoadTheme}
          onDeleteTheme={onDeleteTheme}
        />
      )}

      {pageView && previewStyle && (
        <PagePreview
          doc={pageHtml}
          styleName={titleIn(previewStyle.title, lang)}
          scope={page.fromCart > 0 ? fill(w.page.fromCart, { count: page.fromCart }) : w.page.allElements}
          w={w}
          onClose={closePage}
          copy={pageView.brief === null ? undefined : { text: pageView.brief, state: copyState, onCopy: () => void copy(pageView.brief!, 'brief') }}
        />
      )}

      {atelier && (
        <StyleStudio
          key={atelier.draft.id}
          draft={atelier.draft}
          isNew={atelier.isNew}
          lang={lang}
          w={w}
          onKeep={onKeep}
          onDelete={onDelete}
          onClose={closeAtelier}
          onExport={onExport}
          onPropose={contribRepo ? onPropose : undefined}
          proposeError={proposeError}
          linkHere={linkHere}
        />
      )}

      {inHost && <AgentActions cart={cart} catalog={catalog} writtenTo={writtenTo} premiumAccess={access} />}
    </div>
  );
}
