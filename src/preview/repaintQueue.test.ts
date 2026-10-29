import { describe, expect, it, vi } from 'vitest';
import { createRepaintQueue } from './repaintQueue';

/** A queue on hand-driven timers: `step()` runs the next tick. */
function manual(batch = 2) {
  let next: (() => void) | null = null;
  const q = createRepaintQueue({
    batch,
    every: 32,
    setTimer: (fn) => {
      next = fn;
      return 1;
    },
    clearTimer: () => {
      next = null;
    },
  });
  const step = () => {
    const fn = next;
    next = null;
    fn?.();
  };
  return { q, step, armed: () => next !== null };
}

describe('repaintQueue', () => {
  it('runs a few swaps per tick, never all in one', () => {
    const { q, step } = manual(2);
    const ran: number[] = [];
    for (let i = 0; i < 5; i++) q.schedule(() => ran.push(i), false);
    expect(ran).toEqual([]);
    step();
    expect(ran).toEqual([0, 1]);
    step();
    step();
    expect(ran).toEqual([0, 1, 2, 3, 4]);
    expect(q.pending()).toBe(0);
  });

  it('swaps the previews on screen before the others', () => {
    const { q, step } = manual(2);
    const ran: string[] = [];
    q.schedule(() => ran.push('off-1'), false);
    q.schedule(() => ran.push('off-2'), false);
    q.schedule(() => ran.push('on'), true);
    step();
    expect(ran).toEqual(['on', 'off-1']);
  });

  it('a cancelled swap never runs, and an empty queue stops ticking', () => {
    const { q, step, armed } = manual(2);
    const run = vi.fn();
    const cancel = q.schedule(run, true);
    cancel();
    expect(q.pending()).toBe(0);
    expect(armed()).toBe(false);
    step();
    expect(run).not.toHaveBeenCalled();
  });

  it('a swap that throws does not stall the swaps after it', () => {
    const { q, step } = manual(1);
    const ran: string[] = [];
    q.schedule(() => { throw new Error('boom'); }, false);
    q.schedule(() => ran.push('next'), false);
    expect(() => step()).toThrow('boom');
    step();
    expect(ran).toEqual(['next']);
  });

  it('tells its listeners each time the count of waiting swaps changes', () => {
    const { q, step } = manual(1);
    const seen: number[] = [];
    const off = q.subscribe(() => seen.push(q.pending()));
    q.schedule(() => {}, false);
    q.schedule(() => {}, false);
    step();
    step();
    off();
    q.schedule(() => {}, false);
    expect(seen).toEqual([1, 2, 1, 0]);
  });
});
