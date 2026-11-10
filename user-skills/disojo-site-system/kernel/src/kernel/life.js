// Page lifecycle: every module that starts something registers how to stop it.
// Page transitions call runCleanups() before the old page leaves, and the tab going
// hidden pauses whatever registered onSuspend. Without this, SPA transitions leak
// timers, listeners and ScrollTriggers and the site gets slower each page.
const cleanups = new Set();
const suspends = new Set();

export const onCleanup = fn => { cleanups.add(fn); return fn; };
export const onSuspend = fn => { suspends.add(fn); return fn; };

export function runCleanups() {
  for (const fn of cleanups) { try { fn(); } catch (e) { console.warn('[kernel] cleanup', e); } }
  cleanups.clear();
  suspends.clear();
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) for (const fn of suspends) { try { fn(true); } catch {} }
  else for (const fn of suspends) { try { fn(false); } catch {} }
});

// fonts decide line breaks, so never split text before they are in (cap the wait)
export const fontsReady = (ms = 1500) => Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, ms))]);
export const twoFrames = () => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

// listen with automatic removal at cleanup
export function on(target, type, fn, opts) {
  target.addEventListener(type, fn, opts);
  onCleanup(() => target.removeEventListener(type, fn, opts));
}
