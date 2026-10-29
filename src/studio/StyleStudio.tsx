/**
 * StyleStudio — the atelier of a personal style (doc 186 §12, style-cartouche
 * §8): the style drawn in the centre, its token groups around it as nodes,
 * one group's panel open beside it.
 *
 * Nothing is kept until « Keep »: the atelier works on a draft, ✕ drops it.
 * A readable-text pair under 4.5:1 is SAID next to the tokens, never refused:
 * the style is the person's choice (style-cartouche §6).
 *
 * @module studio/StyleStudio
 */
import { useEffect, useMemo, useState } from 'react';
import { fill, type Dict } from '../i18n/words';
import { contrastIssues, MIN_CONTRAST } from '../lib/contrast';
import { checkPersonal, setToken, toManifest, type PersonalStyle } from '../personal/personalModel';
import { studioDoc } from '../preview/previewDoc';
import { Icon } from '../ui/Icon';
import { pickable, TOKEN_GROUPS, type TokenGroupId } from './tokenGroups';

export interface StyleStudioProps {
  draft: PersonalStyle;
  isNew: boolean;
  lang: string;
  w: Dict;
  onKeep: (p: PersonalStyle) => void;
  onDelete: (id: string) => void;
  onClose: () => void;
  onExport: (p: PersonalStyle) => void;
  /** Lot 3: offered only when the catalogue's public repository is set. */
  onPropose?: (p: PersonalStyle) => void;
  /** What the last proposal said, when it did not open. */
  proposeError?: string | null;
  /** The proposal's address when the browser blocked the popup: shown as a link a click may open. */
  linkHere?: string | null;
}

export function StyleStudio(p: StyleStudioProps) {
  const { w } = p;
  const [style, setStyle] = useState<PersonalStyle>(p.draft);
  const [open, setOpen] = useState<TokenGroupId>('accent');
  const [confirmDelete, setConfirmDelete] = useState(false);
  const error = checkPersonal(style);
  const issues = contrastIssues(style.tokens);
  const doc = useMemo(() => studioDoc(toManifest(style), style.name || ' '), [style]);
  const group = TOKEN_GROUPS.find((g) => g.id === open)!;
  const num = useMemo(() => new Intl.NumberFormat(p.lang, { maximumFractionDigits: 1 }), [p.lang]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') p.onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [p.onClose]);

  return (
    <div className="studio" role="dialog" aria-label={w.studio.title}>
      <header className="studio-bar">
        <span className="lab brand">{w.studio.title}</span>
        <label className="field">
          <span className="lab">{w.studio.name}</span>
          <input value={style.name} onChange={(e) => setStyle({ ...style, name: e.target.value })} />
        </label>
        <label className="field">
          <span className="lab">{w.studio.author}</span>
          <input value={style.author} placeholder={w.studio.authorHint} onChange={(e) => setStyle({ ...style, author: e.target.value })} />
        </label>
        <span className="lab based">{fill(w.studio.basedOn, { name: style.basedOn })}</span>
        <div className="studio-actions">
          <button type="button" className="primary" disabled={!!error} onClick={() => p.onKeep({ ...style, name: style.name.trim() })}>{w.studio.keep}</button>
          <button type="button" disabled={!!error} onClick={() => p.onExport(style)}>{w.studio.export}</button>
          {p.onPropose && <button type="button" disabled={!!error} onClick={() => p.onPropose?.(style)}>{w.studio.propose}</button>}
          {!p.isNew && (
            <button type="button" className={confirmDelete ? 'danger' : ''} onClick={() => (confirmDelete ? p.onDelete(style.id) : setConfirmDelete(true))}>
              {confirmDelete ? w.studio.confirmDelete : w.studio.delete}
            </button>
          )}
          <button type="button" className="icon-btn" aria-label={w.studio.close} title={w.studio.close} onClick={p.onClose}>
            <Icon name="close" />
          </button>
        </div>
      </header>
      {error && <p className="error" role="alert">{fill(w.studio.invalid, { detail: error })}</p>}
      {p.proposeError && <p className="error" role="alert">{p.proposeError}</p>}
      {p.linkHere && <p className="notice"><a className="link" href={p.linkHere} target="_blank" rel="noopener noreferrer">{w.contrib.openHere}</a></p>}

      <div className="atelier">
        <ol className="nodes" aria-label={w.studio.groupsLabel}>
          {TOKEN_GROUPS.map((g, i) => {
            const value = style.tokens[g.show] ?? '';
            return (
              <li key={g.id}>
                <button type="button" className={`node${open === g.id ? ' chosen' : ''}`} aria-pressed={open === g.id} onClick={() => setOpen(g.id)}>
                  <span className={`num${open === g.id ? ' done' : ''}`}>{String(i + 1).padStart(2, '0')}</span>
                  <span className="lab">{w.studio.groups[g.id]}</span>
                  {pickable(value) ? <span className="swatch" style={{ background: value }} aria-hidden /> : <span className="node-val">{value}</span>}
                </button>
              </li>
            );
          })}
        </ol>

        <div className="stage">
          <iframe className="preview" sandbox="" srcDoc={doc} title={fill(w.tile.preview, { name: style.name })} />
        </div>

        <section className="panel hud" aria-label={w.studio.groups[open]}>
          <h2 className="lab">{w.studio.groups[open]}</h2>
          {group.tokens.map((token) => {
            const value = style.tokens[token] ?? '';
            return (
              <label key={token} className="token">
                <span className="lab">{token}</span>
                <span className="token-inputs">
                  {pickable(value) && (
                    <input type="color" value={value} aria-label={token} onChange={(e) => setStyle(setToken(style, token, e.target.value))} />
                  )}
                  <input type="text" value={value} spellCheck={false} onChange={(e) => setStyle(setToken(style, token, e.target.value))} />
                </span>
              </label>
            );
          })}
          {issues.length > 0 && (
            <ul className="issues">
              {issues.map((i) => (
                <li key={i.pair} className="notice">
                  {w.studio.pairs[i.pair]} · {i.ratio === null ? w.studio.unmeasurable : fill(w.studio.ratio, { ratio: num.format(i.ratio), min: num.format(MIN_CONTRAST) })}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
