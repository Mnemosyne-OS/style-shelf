/**
 * repaintQueue — previews repainted a few at a time (doc 186 §14).
 *
 * Choosing a style changes the page of every element preview at once, and
 * each new `srcdoc` is a whole document to parse and lay out. Swapping them
 * all in one task can freeze the screen (reported in the cartridge frame). The tiles hand
 * their swap to this queue instead: a few per tick, the ones on screen first,
 * so the page keeps answering and the person sees the style arrive.
 *
 * Ticks run on timers, never on `requestAnimationFrame`: a hidden frame runs
 * no animation frame, and the queue would never empty.
 *
 * @module preview/repaintQueue
 */

export interface RepaintQueueDeps {
  /** How many swaps one tick runs. */
  batch: number;
  /** Milliseconds between two ticks. */
  every: number;
  setTimer: (fn: () => void, ms: number) => unknown;
  clearTimer: (id: unknown) => void;
}

export interface RepaintQueue {
  /** Queues one swap; `onScreen` swaps run before the others. Returns its cancel. */
  schedule: (run: () => void, onScreen: boolean) => () => void;
  /** Swaps not run yet. */
  pending: () => number;
  /** Called after every change of `pending()`. Returns the unsubscribe. */
  subscribe: (listener: () => void) => () => void;
}

interface Job {
  run: () => void;
}

/**
 * A queue on its own timers. The page uses ONE (`repaintQueue`): a single
 * clock for every tile, so a style change is spread over ticks instead of each
 * tile scheduling its own swap at the same instant.
 */
export function createRepaintQueue(deps: RepaintQueueDeps): RepaintQueue {
  const first: Job[] = [];
  const later: Job[] = [];
  const listeners = new Set<() => void>();
  let timer: unknown = null;

  const notify = () => listeners.forEach((l) => l());

  function tick() {
    timer = null;
    try {
      for (let i = 0; i < deps.batch; i++) {
        const job = first.shift() ?? later.shift();
        if (!job) break;
        job.run();
      }
    } finally {
      // A swap that throws must not stall the others: the next tick is planned anyway.
      if (first.length + later.length > 0) timer = deps.setTimer(tick, deps.every);
      notify();
    }
  }

  function schedule(run: () => void, onScreen: boolean): () => void {
    const job: Job = { run };
    (onScreen ? first : later).push(job);
    if (timer === null) timer = deps.setTimer(tick, 0);
    notify();
    return () => {
      const list = first.includes(job) ? first : later;
      const at = list.indexOf(job);
      if (at < 0) return;
      list.splice(at, 1);
      if (first.length + later.length === 0 && timer !== null) {
        deps.clearTimer(timer);
        timer = null;
      }
      notify();
    };
  }

  return {
    schedule,
    pending: () => first.length + later.length,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

/** The queue every tile of the page shares. */
export const repaintQueue = createRepaintQueue({
  batch: 4,
  every: 32,
  setTimer: (fn, ms) => setTimeout(fn, ms),
  clearTimer: (id) => clearTimeout(id as ReturnType<typeof setTimeout>),
});
