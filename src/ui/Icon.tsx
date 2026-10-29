/**
 * Icon — the inline SVG icons of Style Shelf (style-cartouche §3: icons, never
 * emoji). The word goes in the caller's `aria-label` or `title`.
 *
 * @module ui/Icon
 */

export type IconName = 'cart' | 'plus' | 'check' | 'close' | 'grid9' | 'grid4' | 'grid1' | 'sliders' | 'pen' | 'upload' | 'external' | 'star' | 'eye';

const PATHS: Record<IconName, JSX.Element> = {
  cart: (
    <>
      <path d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L19.5 8H6.2" />
      <circle cx="9" cy="19" r="1.4" />
      <circle cx="17" cy="19" r="1.4" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  grid9: (
    <>
      {[4, 10, 16].flatMap((y) => [4, 10, 16].map((x) => <rect key={`${x}-${y}`} x={x} y={y} width="4" height="4" />))}
    </>
  ),
  grid4: (
    <>
      {[4, 13].flatMap((y) => [4, 13].map((x) => <rect key={`${x}-${y}`} x={x} y={y} width="7" height="7" />))}
    </>
  ),
  grid1: <rect x="4" y="4" width="16" height="16" />,
  sliders: (
    <>
      <path d="M5 4v16M12 4v16M19 4v16" />
      <circle cx="5" cy="15" r="2" />
      <circle cx="12" cy="8" r="2" />
      <circle cx="19" cy="13" r="2" />
    </>
  ),
  pen: <path d="M4 20l4-1 11-11-3-3L5 16l-1 4zM14 6l3 3" />,
  upload: <path d="M12 16V4M7 9l5-5 5 5M5 20h14" />,
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  star: <path d="M12 4l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16.4l-4.8 2.5.9-5.4-3.9-3.8 5.4-.8z" />,
  external: <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />,
};

export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden focusable="false">
      {PATHS[name]}
    </svg>
  );
}
