import { useSyncExternalStore } from 'react';

// Tiny store so the DOM loader (main bundle) can follow the 3D chunk (lazy bundle)
// without importing three.js. Progress only moves on real events.
let snap = { progress: 0, ready: false };
const subs = new Set();

export function setLoad(patch) {
  const next = { ...snap, ...patch };
  next.progress = Math.max(snap.progress, next.progress);
  snap = next;
  subs.forEach((f) => f());
}

export const useLoad = () =>
  useSyncExternalStore(
    (f) => {
      subs.add(f);
      return () => subs.delete(f);
    },
    () => snap,
  );
