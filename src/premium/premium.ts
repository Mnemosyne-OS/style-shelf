/**
 * premium — the premium entries, DECLARED and never refused (doc 186 §9,
 * lot 5). Pure.
 *
 * A premium entry carries `tier: "premium"`. Access is a capability token the
 * HOST announces (`getStatus`), never a check written in this MIT cartridge:
 * a gate in a public cartridge is a wall the front door walks round (the paid
 * gate belongs in the OS). No host announces the token yet, so access reads
 * « unknown », and an unknown verdict never refuses: the kit is built, the
 * verdict is logged, like the agent actions' gate (doc 149 §5).
 *
 * @module premium/premium
 */
import type { Cart } from '../cart/cartModel';
import type { Catalog } from '../catalog/types';
import { hasCapability, type HostState } from '../host/hostState';

/** The token a host will announce when the person's licence opens the premium entries. */
export const PREMIUM_TOKEN = 'style-shelf.premium';

export type PremiumAccess = 'open' | 'unknown';

export function premiumAccess(host: HostState | null): PremiumAccess {
  return host && hasCapability(host, PREMIUM_TOKEN) ? 'open' : 'unknown';
}

/** The premium ids in the cart, its style included, in cart order. */
export function premiumInCart(cart: Cart, catalog: Catalog): string[] {
  const premium = new Set(catalog.entries.filter((e) => e.tier === 'premium').map((e) => e.id));
  return [cart.styleId, ...cart.itemIds].filter((id): id is string => !!id && premium.has(id));
}

/** The verdict of one kit, as the log line says it. Null when the kit holds no premium entry. */
export function premiumVerdict(ids: string[], access: PremiumAccess): string | null {
  if (ids.length === 0) return null;
  return `premium gate: ${ids.length} premium entr${ids.length === 1 ? 'y' : 'ies'} (${ids.join(', ')}), access ${access}, not enforced (doc 186 §9)`;
}
