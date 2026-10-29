/**
 * AgentActions — serves Style Shelf's agent action (doc 149) while the window
 * is open inside Mnemosyne OS.
 *
 * A CHILD that renders nothing, never a hook in App (doc 149 §3): it keeps the
 * handlers' view of the app fresh through a ref written every render, and
 * subscribes once.
 *
 * @module app/AgentActions
 */
import { useEffect, useRef } from 'react';
import { sdk } from '../host/sdk';
import { styleShelfAgentHandlers, type AgentContext } from './agentHandlers';

export function AgentActions(props: AgentContext): null {
  const latest = useRef(props);
  latest.current = props;

  useEffect(() => {
    if (typeof sdk.onAgentActions !== 'function') {
      console.warn('[style-shelf] this SDK build has no onAgentActions; the IDE cannot read the cart');
      return undefined;
    }
    const sub = sdk.onAgentActions(styleShelfAgentHandlers(() => latest.current));
    sub.ready.catch((err: unknown) => console.warn('[style-shelf] agent actions not served:', err instanceof Error ? err.message : err));
    return () => sub.off();
  }, []);

  return null;
}
