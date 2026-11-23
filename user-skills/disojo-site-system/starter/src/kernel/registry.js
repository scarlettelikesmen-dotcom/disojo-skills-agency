// Module registry. The pattern behind TFTL's shared skeleton (hands-on study 2026-11-22):
// one init per data attribute, all run after every page swap, each one returns how to
// stop itself. A site adds its own moments with use() and never edits the kernel.
//
//   use('[data-ink]', el => { ...start...; return () => { ...stop... } })
//
// scope 'page' (default): searched in the new container (and the container itself) on every page.
// scope 'shell': searched in the whole document on every page (fixed UI that needs fresh
//   ScrollTriggers after a swap, like the header), cleaned up on leave like page modules.
// scope 'once': searched in the whole document once, never cleaned (tab blink).
import { onCleanup } from './life.js';

const mods = { page: [], shell: [], once: [] };

export const use = (selector, init, { scope = 'page' } = {}) => mods[scope].push({ selector, init });

function run(list, root) {
  for (const { selector, init } of list) {
    const els = [...root.querySelectorAll(selector)];
    if (root.matches?.(selector)) els.unshift(root);
    els.forEach(el => {
      try {
        const stop = init(el);
        if (typeof stop === 'function') onCleanup(stop);
      } catch (e) { console.warn('[kernel]', selector, e); }
    });
  }
}

export const runPage = root => { run(mods.page, root); run(mods.shell, document); };
export const runOnce = () => run(mods.once, document);
