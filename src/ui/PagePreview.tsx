/**
 * PagePreview — the whole-page preview, full screen (doc 186 §15): the style
 * and the elements on one made-up page in lorem ipsum.
 *
 * Opened from the top bar, it shows the page alone. Opened by « Copy the
 * brief », it shows what is about to leave: the page drawn in the theme, the
 * text of the brief beside it, and the copy button. Nothing is copied before
 * that button.
 *
 * The page is a frame and swallows clicks: the view closes on its own button
 * or Escape, which it takes before the cart under it does.
 *
 * @module ui/PagePreview
 */
import { useEffect } from 'react';
import { fill, type Dict } from '../i18n/words';
import type { CopyState } from './CartPanel';
import { Icon } from './Icon';

interface PagePreviewProps {
  doc: string;
  styleName: string;
  scope: string;
  w: Dict;
  onClose: () => void;
  /** Set when the view was opened to copy the brief. */
  copy?: { text: string; state: CopyState; onCopy: () => void };
}

export function PagePreview({ doc, styleName, scope, w, onClose, copy }: PagePreviewProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      e.stopImmediatePropagation();
      onClose();
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [onClose]);

  const copied = copy?.state.kind === 'copied' && copy.state.what === 'brief';
  return (
    <div className="studio page-view" role="dialog" aria-label={copy ? w.page.copyTitle : w.page.title}>
      <header className="studio-bar">
        <span className="lab brand">{copy ? w.page.copyTitle : w.page.title}</span>
        <span className="page-style">{styleName}</span>
        <span className="lab">{scope}</span>
        <div className="studio-actions">
          {copy && (
            <button type="button" className="primary" onClick={copy.onCopy}>{copied ? w.cart.copied : w.page.copy}</button>
          )}
          <button type="button" className="icon-btn" aria-label={w.page.close} title={w.page.close} onClick={onClose}>
            <Icon name="close" />
          </button>
        </div>
      </header>
      {copy?.state.kind === 'failed' && <p className="error" role="alert">{fill(w.cart.copyFailed, { detail: copy.state.detail })}</p>}
      <div className={`page-body${copy ? ' with-brief' : ''}`}>
        <iframe className="page-frame" sandbox="" srcDoc={doc} title={w.page.frame} />
        {copy && (
          <section className="brief hud" aria-label={w.page.briefLabel}>
            <span className="lab">{w.page.briefLabel}</span>
            <pre className="brief-text">{copy.text}</pre>
          </section>
        )}
      </div>
    </div>
  );
}
