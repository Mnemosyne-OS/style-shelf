/**
 * Contributions — the merged pull requests of the catalogue (doc 186 §7):
 * number, title, author, date, and a link to each. Shown only when the
 * catalogue's repository is set (contribConfig).
 *
 * @module contrib/Contributions
 */
import { fill, type Dict } from '../i18n/words';
import { Icon } from '../ui/Icon';
import type { ContribView } from './contribModel';

interface ContributionsProps {
  view: ContribView;
  lang: string;
  w: Dict;
  onOpen: (url: string) => void;
}

export function Contributions({ view, lang, w, onOpen }: ContributionsProps) {
  if (view.kind === 'loading') return <p className="muted empty" role="status">{w.contrib.loading}</p>;
  if (view.kind === 'unavailable') return <p className="error empty" role="alert">{fill(w.contrib.unavailable, { detail: view.reason })}</p>;
  const date = (iso: string) => new Date(iso).toLocaleDateString(lang, { day: 'numeric', month: 'short', year: 'numeric' });
  return (
    <section className="contrib">
      {view.stale && <p className="notice">{fill(w.contrib.stale, { date: date(view.at) })}</p>}
      {view.items.length === 0 ? (
        <p className="muted empty">{w.contrib.empty}</p>
      ) : (
        <ol className="contrib-list">
          {view.items.map((c) => (
            <li key={c.number} className="hud">
              <span className="num">#{c.number}</span>
              <span className="contrib-title">{c.title}</span>
              <span className="lab">{fill(w.contrib.by, { author: c.author })} · {date(c.mergedAt)}</span>
              <button type="button" className="icon-btn small" aria-label={fill(w.contrib.open, { number: c.number })} title={fill(w.contrib.open, { number: c.number })} onClick={() => onOpen(c.url)}>
                <Icon name="external" size={14} />
              </button>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
