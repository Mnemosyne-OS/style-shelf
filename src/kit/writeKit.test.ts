import { describe, expect, it, vi } from 'vitest';
import type { KitDoors } from '../host/doors';
import { joinPath, writeKit } from './writeKit';

const FILES = [
  { name: 'kit.json', content: '{}' },
  { name: 'tokens.css', content: ':root{}' },
  { name: 'elements.css', content: '' },
  { name: 'BRIEF.md', content: '# kit' },
];

function doors(over: Partial<KitDoors> = {}): KitDoors & { calls: string[] } {
  const calls: string[] = [];
  return {
    calls,
    pickFolder: vi.fn(async () => 'C:\\Users\\me\\proj'),
    mkdir: vi.fn(async (d: string) => { calls.push(`mkdir ${d}`); return { success: true }; }),
    writeFile: vi.fn(async (p: string) => { calls.push(`write ${p}`); return { success: true }; }),
    ...over,
  };
}

describe('writeKit', () => {
  it('joins with the separator the folder uses', () => {
    expect(joinPath('C:\\a\\b', 'x')).toBe('C:\\a\\b\\x');
    expect(joinPath('C:\\a\\b\\', 'x')).toBe('C:\\a\\b\\x');
    expect(joinPath('/home/me/proj', 'x')).toBe('/home/me/proj/x');
  });

  it('creates style-shelf in the chosen project, then writes the four files into it', async () => {
    const d = doors();
    const out = await writeKit(FILES, d);
    expect(out).toEqual({ ok: true, dir: 'C:\\Users\\me\\proj\\style-shelf', written: ['kit.json', 'tokens.css', 'elements.css', 'BRIEF.md'] });
    expect(d.calls).toEqual([
      'mkdir C:\\Users\\me\\proj\\style-shelf',
      'write C:\\Users\\me\\proj\\style-shelf\\kit.json',
      'write C:\\Users\\me\\proj\\style-shelf\\tokens.css',
      'write C:\\Users\\me\\proj\\style-shelf\\elements.css',
      'write C:\\Users\\me\\proj\\style-shelf\\BRIEF.md',
    ]);
  });

  it('a cancelled folder choice writes nothing and is not an error', async () => {
    const d = doors({ pickFolder: async () => null });
    expect(await writeKit(FILES, d)).toEqual({ ok: false, cancelled: true });
    expect(d.calls).toEqual([]);
  });

  it('stops at the first refusal and says which file, and what was written before it', async () => {
    const d = doors({
      writeFile: async (p: string) => (p.endsWith('elements.css') ? { success: false, error: 'Access denied: path outside user home directory' } : { success: true }),
    });
    expect(await writeKit(FILES, d)).toEqual({
      ok: false, cancelled: false, step: 'elements.css', error: 'Access denied: path outside user home directory', written: ['kit.json', 'tokens.css'],
    });
  });

  it('a folder the host will not create stops before any file', async () => {
    const d = doors({ mkdir: async () => ({ success: false, error: 'Access denied' }) });
    expect(await writeKit(FILES, d)).toEqual({ ok: false, cancelled: false, step: 'style-shelf', error: 'Access denied', written: [] });
  });

  it('a call that throws (a deadline passed) is reported with its message', async () => {
    const d = doors({ writeFile: async () => { throw new Error('TIMEOUT'); } });
    expect(await writeKit(FILES, d)).toEqual({ ok: false, cancelled: false, step: 'kit.json', error: 'TIMEOUT', written: [] });
  });
});
