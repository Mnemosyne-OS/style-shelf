/**
 * agentHandlers — the agent action of Style Shelf (doc 186 §6, doc 149).
 *
 *   cart  (read)  the kit « Validate » would write, built by the SAME function
 *                 as the button (buildKit), plus the brief with the CSS inside
 *                 and the folder the kit was last written to, if it was.
 *
 * No write action: the project folder is the person's to choose.
 *
 * @module app/agentHandlers
 */
import type { Cart } from '../cart/cartModel';
import type { Catalog } from '../catalog/types';
import { briefMarkdown, buildKit, type Kit } from '../kit/buildKit';
import { premiumInCart, premiumVerdict, type PremiumAccess } from '../premium/premium';

/** What the handlers read of the app, fresh at each call. */
export interface AgentContext {
  cart: Cart;
  catalog: Catalog;
  /** The `style-shelf` folder the kit was last written to, null when never. */
  writtenTo: string | null;
  premiumAccess: PremiumAccess;
}

export type CartAnswer =
  | { ready: false; missing: ['style']; itemIds: string[] }
  | { ready: true; kit: Kit; brief: string; writtenTo: string | null; premium: { ids: string[]; access: PremiumAccess } };

export function cartAnswer(ctx: AgentContext, now: () => Date = () => new Date()): CartAnswer {
  const built = buildKit(ctx.cart, ctx.catalog, now().toISOString());
  if (!built.ok) return { ready: false, missing: ['style'], itemIds: [...ctx.cart.itemIds] };
  // Lot 5: the verdict is said, the kit is never held back (doc 186 §9).
  const ids = premiumInCart(ctx.cart, ctx.catalog);
  const verdict = premiumVerdict(ids, ctx.premiumAccess);
  if (verdict) console.info(`[style-shelf] ${verdict}`);
  return { ready: true, kit: built.kit, brief: briefMarkdown(built.kit, { embedFiles: true }), writtenTo: ctx.writtenTo, premium: { ids, access: ctx.premiumAccess } };
}

/** The handlers `sdk.onAgentActions` serves, reading the app through `get`. */
export function styleShelfAgentHandlers(get: () => AgentContext): Record<string, () => CartAnswer> {
  return { cart: () => cartAnswer(get()) };
}
