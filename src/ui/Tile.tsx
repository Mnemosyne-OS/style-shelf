/**
 * Tile — one catalogue entry: its preview drawn in the chosen style, its name,
 * its licence, and the buttons of its foot: the atelier (on a style), the
 * favourite star, and the cart.
 *
 * The preview is `<iframe sandbox="">` (doc 186 §4): nothing an entry holds
 * ever runs. It is a frame, so a click on it stays in it: the tile is driven
 * by the buttons of its foot only.
 *
 * 🎭 A new style does not swap the frame at once (doc 186 §14): the swap waits
 * its turn in the repaint queue, on-screen tiles first, and the tile says it is
 * loading until the new page has loaded. The old drawing stays under the
 * loader, dimmed, so nothing flashes blank.
 *
 * @module ui/Tile
 */
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import type { CatalogEntry, StyleEntry } from '../catalog/types';
import { fill, titleIn, type Dict } from '../i18n/words';
import { previewDoc } from '../preview/previewDoc';
import { repaintQueue } from '../preview/repaintQueue';
import { Credit } from './Credit';
import { Icon } from './Icon';

interface TileProps {
  entry: CatalogEntry;
  previewStyle: StyleEntry;
  inCart: boolean;
  favorite: boolean;
  lang: string;
  w: Dict;
  onToggle: (entry: CatalogEntry) => void;
  onFavorite: (id: string) => void;
  /** Opens an outside address (a contributor's profile), in the browser of the OS inside Mnemosyne. */
  onOpenLink: (url: string) => void;
  /** On a style: open the atelier (a new personal style from a shipped one, or the personal one itself). */
  onAtelier?: (entry: StyleEntry) => void;
}

/** A frame that never says it loaded stops showing the loader after this long. */
const LOAD_TIMEOUT_MS = 15_000;

export const Tile = memo(function Tile({ entry, previewStyle, inCart, favorite, lang, w, onToggle, onFavorite, onOpenLink, onAtelier }: TileProps) {
  const name = titleIn(entry.title, lang);
  const doc = useMemo(() => previewDoc(previewStyle, entry, name), [previewStyle, entry, name]);
  // The page the frame shows, and the last page it said it loaded.
  const [shown, setShown] = useState(doc);
  const [loaded, setLoaded] = useState<string | null>(null);
  const tileRef = useRef<HTMLElement>(null);
  const onScreen = useRef(false);
  const loading = shown !== doc || loaded !== shown;

  useEffect(() => {
    const el = tileRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([e]) => { onScreen.current = e.isIntersecting; });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (doc === shown) return;
    return repaintQueue.schedule(() => setShown(doc), onScreen.current);
  }, [doc, shown]);

  useEffect(() => {
    if (loaded === shown) return;
    const id = setTimeout(() => setLoaded(shown), LOAD_TIMEOUT_MS);
    return () => clearTimeout(id);
  }, [loaded, shown]);
  const label = entry.kind === 'style'
    ? (inCart ? w.tile.chosen : fill(w.tile.choose, { name }))
    : fill(inCart ? w.tile.remove : w.tile.add, { name });
  const favLabel = fill(favorite ? w.tile.unfavorite : w.tile.favorite, { name });
  const atelierLabel = entry.kind === 'style' ? fill(entry.personal ? w.tile.edit : w.tile.adapt, { name }) : '';

  return (
    <article ref={tileRef} className={`tile hud${inCart ? ' chosen' : ''}`} data-entry={entry.id} data-kind={entry.kind} aria-busy={loading}>
      <div className="preview-wrap">
        <iframe
          className={`preview${loading ? ' stale' : ''}`}
          sandbox=""
          srcDoc={shown}
          title={fill(w.tile.preview, { name })}
          loading="lazy"
          onLoad={() => setLoaded(shown)}
        />
        {loading && (
          <div className="preview-loading" role="status">
            <span className="ring" aria-hidden="true" />
            <span className="lab">{w.tile.loading}</span>
          </div>
        )}
        {entry.github && <Credit handle={entry.github} w={w} onOpen={onOpenLink} />}
      </div>
      <footer className="tile-foot">
        <div className="tile-meta">
          <span className="lab">{w.kindOne[entry.kind]}</span>
          <span className="tile-name">{name}</span>
        </div>
        <span className="tile-tags">
          {entry.kind === 'style' && entry.personal && <span className="badge holo">{w.tile.personal}</span>}
          {entry.tier === 'premium' && <span className="badge gold">{w.tile.premium}</span>}
          <span className="badge gold" title={entry.author}>{entry.license}</span>
        </span>
        {entry.kind === 'style' && onAtelier && (
          <button type="button" className="icon-btn" aria-label={atelierLabel} title={atelierLabel} onClick={() => onAtelier(entry)}>
            <Icon name={entry.personal ? 'pen' : 'sliders'} />
          </button>
        )}
        <button type="button" className={`icon-btn fav${favorite ? ' chosen' : ''}`} aria-pressed={favorite} aria-label={favLabel} title={favLabel} onClick={() => onFavorite(entry.id)}>
          <Icon name="star" />
        </button>
        <button
          type="button"
          className={`icon-btn${inCart ? ' chosen' : ''}`}
          aria-pressed={inCart}
          aria-label={label}
          title={label}
          onClick={() => onToggle(entry)}
        >
          <Icon name={inCart ? 'check' : 'plus'} />
        </button>
      </footer>
    </article>
  );
});
