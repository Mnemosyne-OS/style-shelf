/**
 * HostBadge — where Style Shelf runs, in the top bar: a dim dot in a browser or a
 * foreign frame, a pulsing green dot inside Mnemosyne OS, a searching dot while
 * the answer is awaited.
 *
 * « Mnemosyne OS » is always a link to the product site (doc 186 §23): the
 * label itself inside the OS, beside « Browser » anywhere else, so a visitor of
 * the public site finds the OS the app comes from.
 *
 * @module ui/HostBadge
 */
import type { HostState } from '../host/hostState';
import type { Dict } from '../i18n/words';

/** The product site the badge links to. */
const OS_SITE = 'https://mnemosyne-os.io';

interface HostBadgeProps {
  state: HostState | null;
  w: Dict;
  /** Opens an outside address, in the browser of the OS inside Mnemosyne. */
  onOpen: (url: string) => void;
}

export function HostBadge({ state, w, onOpen }: HostBadgeProps) {
  const kind = state?.kind ?? 'pending';
  const label = state ? w.host[state.kind] : w.host.pending;
  const link = (
    <a
      className="os-link"
      href={OS_SITE}
      target="_blank"
      rel="noopener noreferrer"
      title={w.host.site}
      onClick={(e) => {
        e.preventDefault();
        onOpen(OS_SITE);
      }}
    >
      Mnemosyne OS
    </a>
  );
  return (
    <span className={`host-badge ${kind}`} role="status" aria-live="polite">
      <span className="dot" aria-hidden />
      {kind === 'mnemosyne' ? link : <>{label} · {link}</>}
    </span>
  );
}
