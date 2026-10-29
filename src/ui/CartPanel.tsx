/**
 * CartPanel — the cart beside the catalogue (doc 186 §5): its style, its
 * elements, the licences they carry, and the way out of the app.
 *
 *   inside Mnemosyne  « Write into the project »: the person picks the folder,
 *                     the four files are written, the steps say what was done
 *   anywhere else     « Download the kit » (kit.json)
 *   always            « Copy the brief » (BRIEF.md with the CSS inside), seen first
 *
 * Section 04 keeps the cart as a named theme and loads one back (doc 186 §15).
 *
 * Under the buttons, what each one will do, said before the click (doc 186 §17):
 * the folder and the four files a write creates, that nothing is read or
 * deleted, and why Mnemosyne OS asks for a permission the first time.
 *
 * Nothing is offered before a style is chosen: the « to do » names the style,
 * the only thing missing (style-cartouche §6).
 *
 * @module ui/CartPanel
 */
import { useEffect, useState } from 'react';
import type { Cart } from '../cart/cartModel';
import type { Catalog, CatalogEntry } from '../catalog/types';
import { fill, titleIn, type Dict } from '../i18n/words';
import { KIT_DIR, KIT_FILES } from '../kit/buildKit';
import type { WriteOutcome } from '../kit/writeKit';
import { findByName, type SavedTheme } from '../themes/themesModel';
import { Icon } from './Icon';

/** The words key that says what each kit file holds. */
const FILE_WORD = { 'kit.json': 'kitJson', 'tokens.css': 'tokensCss', 'elements.css': 'elementsCss', 'BRIEF.md': 'briefMd' } as const;

export type WriteState = { kind: 'idle' } | { kind: 'writing' } | { kind: 'done'; outcome: WriteOutcome };
export type CopyState = { kind: 'idle' } | { kind: 'copied'; what: 'brief' | 'instruction' } | { kind: 'failed'; detail: string };

interface CartPanelProps {
  cart: Cart;
  catalog: Catalog;
  lang: string;
  w: Dict;
  inMnemosyne: boolean;
  writeState: WriteState;
  copyState: CopyState;
  onRemove: (id: string) => void;
  onClose: () => void;
  onWrite: () => void;
  onDownload: () => void;
  onCopyBrief: () => void;
  onCopyInstruction: () => void;
  themes: SavedTheme[];
  onSaveTheme: (name: string) => void;
  onLoadTheme: (theme: SavedTheme) => void;
  onDeleteTheme: (id: string) => void;
}

export function CartPanel(p: CartPanelProps) {
  const { cart, catalog, lang, w } = p;
  const byId = new Map(catalog.entries.map((e) => [e.id, e]));
  const style = cart.styleId ? byId.get(cart.styleId) : undefined;
  const items = cart.itemIds.map((id) => byId.get(id)).filter((e): e is CatalogEntry => !!e);
  const licenses = [...new Set([style, ...items].filter((e): e is CatalogEntry => !!e).map((e) => e.license))].sort();
  const ready = !!style;
  const outcome = p.writeState.kind === 'done' ? p.writeState.outcome : null;
  const [themeName, setThemeName] = useState('');
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const existing = findByName(p.themes, themeName);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') p.onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [p.onClose]);

  return (
    <div className="cart-veil" onClick={p.onClose}>
      <aside className="cart hud" role="dialog" aria-label={w.cart.title} onClick={(e) => e.stopPropagation()}>
        <header className="cart-head">
          <span className="lab">{w.cart.title}</span>
          <button type="button" className="icon-btn" aria-label={w.cart.close} title={w.cart.close} onClick={p.onClose}>
            <Icon name="close" />
          </button>
        </header>

        <section className="cart-sec">
          <h2 className="lab"><span className={`num${ready ? ' done' : ''}`}>01</span> {w.cart.style}</h2>
          {style ? <p className="cart-style">{titleIn(style.title, lang)}</p> : <p className="todo">{w.cart.needStyle}</p>}
        </section>

        <section className="cart-sec">
          <h2 className="lab"><span className={`num${items.length ? ' done' : ''}`}>02</span> {w.cart.items} · {items.length}</h2>
          {items.length === 0 ? (
            <p className="muted">{w.cart.empty}</p>
          ) : (
            <ul className="cart-items">
              {items.map((e) => {
                const name = titleIn(e.title, lang);
                return (
                  <li key={e.id}>
                    <span className="lab">{w.kindOne[e.kind]}</span>
                    <span className="cart-item-name">{name}</span>
                    <button type="button" className="icon-btn small" aria-label={fill(w.cart.remove, { name })} title={fill(w.cart.remove, { name })} onClick={() => p.onRemove(e.id)}>
                      <Icon name="close" size={14} />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        <section className="cart-sec">
          <h2 className="lab"><span className="num">03</span> {w.cart.licenses}</h2>
          <p className="licenses">{licenses.length ? licenses.map((l) => <span key={l} className="badge gold">{l}</span>) : <span className="muted">{w.cart.empty}</span>}</p>
        </section>

        <section className="cart-sec" aria-label={w.themes.title}>
          <h2 className="lab"><span className={`num${p.themes.length ? ' done' : ''}`}>04</span> {w.themes.title} · {p.themes.length}</h2>
          <form className="theme-save" onSubmit={(e) => { e.preventDefault(); if (ready && themeName.trim()) { p.onSaveTheme(themeName); setThemeName(''); } }}>
            <input aria-label={w.themes.name} placeholder={w.themes.name} value={themeName} maxLength={60} onChange={(e) => setThemeName(e.target.value)} />
            <button type="submit" disabled={!ready || !themeName.trim()} title={ready ? undefined : w.themes.needStyle}>{existing ? w.themes.update : w.themes.save}</button>
          </form>
          {p.themes.length === 0 ? (
            <p className="muted">{w.themes.none}</p>
          ) : (
            <ul className="cart-items themes">
              {p.themes.map((t) => {
                const styleEntry = byId.get(t.styleId);
                const summary = fill(w.themes.summary, { style: styleEntry ? titleIn(styleEntry.title, lang) : w.themes.styleGone, count: t.itemIds.length });
                const confirming = confirmDelete === t.id;
                return (
                  <li key={t.id}>
                    <span className="theme-meta"><span className="cart-item-name">{t.name}</span><span className="lab">{summary}</span></span>
                    <button type="button" className="icon-btn small" aria-label={fill(w.themes.load, { name: t.name })} onClick={() => { setConfirmDelete(null); p.onLoadTheme(t); }}>
                      <Icon name="upload" size={14} />
                    </button>
                    <button
                      type="button"
                      className={`icon-btn small${confirming ? ' danger' : ''}`}
                      aria-label={fill(confirming ? w.themes.confirm : w.themes.delete, { name: t.name })}
                      title={fill(confirming ? w.themes.confirm : w.themes.delete, { name: t.name })}
                      onClick={() => { if (confirming) { p.onDeleteTheme(t.id); setConfirmDelete(null); } else setConfirmDelete(t.id); }}
                    >
                      <Icon name="close" size={14} />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        <div className="cart-actions">
          {p.inMnemosyne ? (
            <button type="button" className="primary" disabled={!ready || p.writeState.kind === 'writing'} onClick={p.onWrite}>
              {p.writeState.kind === 'writing' ? w.cart.writing : w.cart.write}
            </button>
          ) : (
            <button type="button" className="primary" disabled={!ready} onClick={p.onDownload}>{w.cart.download}</button>
          )}
          <button type="button" disabled={!ready} onClick={p.onCopyBrief}>
            {p.copyState.kind === 'copied' && p.copyState.what === 'brief' ? w.cart.copied : w.cart.copyBrief}
          </button>
        </div>
        <section className="cart-explain" aria-label={w.explain.title}>
          <span className="lab">{w.explain.title}</span>
          {p.inMnemosyne ? (
            <>
              <p><strong>{w.cart.write}</strong> · {fill(w.explain.write, { dir: `${KIT_DIR}/` })}</p>
              <ul className="kit-files">
                {KIT_FILES.map((f) => <li key={f}><code>{KIT_DIR}/{f}</code><span>{w.explain.files[FILE_WORD[f]]}</span></li>)}
              </ul>
              <p className="muted">{w.explain.nothingElse}</p>
              <p className="muted">{w.explain.permission}</p>
            </>
          ) : (
            <p><strong>{w.cart.download}</strong> · {w.explain.download}</p>
          )}
          <p><strong>{w.cart.copyBrief}</strong> · {w.explain.copy}</p>
        </section>

        {p.copyState.kind === 'failed' && <p className="error" role="alert">{fill(w.cart.copyFailed, { detail: p.copyState.detail })}</p>}

        {outcome && outcome.ok && (
          <ol className="rail" aria-label={fill(w.cart.written, { count: outcome.written.length })}>
            <li className="done"><span className="num done">01</span><span className="lab">{w.cart.folder}</span><code className="path">{outcome.dir}</code></li>
            <li className="done"><span className="num done">02</span><span className="lab">{w.cart.files}</span><span>{fill(w.cart.written, { count: outcome.written.length })}</span></li>
            <li><span className="num">03</span><span className="lab">{w.cart.ide}</span>
              <button type="button" onClick={p.onCopyInstruction}>
                {p.copyState.kind === 'copied' && p.copyState.what === 'instruction' ? w.cart.copied : w.cart.copyInstruction}
              </button>
            </li>
          </ol>
        )}
        {outcome && !outcome.ok && !outcome.cancelled && (
          <p className="error" role="alert">
            {fill(w.cart.writeFailed, { step: outcome.step, detail: outcome.error })}
            {outcome.written.length > 0 && ` · ${fill(w.cart.writtenBefore, { count: outcome.written.length })}`}
          </p>
        )}
      </aside>
    </div>
  );
}
