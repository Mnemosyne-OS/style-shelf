/**
 * Credit — who proposed an entry: their GitHub picture and handle, over the
 * corner of the preview, opening their profile (doc 186 §21).
 *
 * The picture comes from GitHub; when it does not load (offline, a host that
 * refuses the address), the first letter of the handle takes its place.
 *
 * @module ui/Credit
 */
import { useState } from 'react';
import { fill, type Dict } from '../i18n/words';
import { avatarUrl, profileUrl } from '../lib/github';

interface CreditProps {
  handle: string;
  w: Dict;
  onOpen: (url: string) => void;
}

export function Credit({ handle, w, onOpen }: CreditProps) {
  const [broken, setBroken] = useState(false);
  const url = profileUrl(handle);
  const label = fill(w.tile.proposedBy, { name: `@${handle}` });
  return (
    <a
      className="credit"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      onClick={(e) => {
        e.preventDefault();
        onOpen(url);
      }}
    >
      {broken ? (
        <span className="credit-initial" aria-hidden="true">{handle[0].toUpperCase()}</span>
      ) : (
        <img src={avatarUrl(handle)} alt="" width={20} height={20} loading="lazy" referrerPolicy="no-referrer" onError={() => setBroken(true)} />
      )}
      <span className="credit-handle">@{handle}</span>
    </a>
  );
}
