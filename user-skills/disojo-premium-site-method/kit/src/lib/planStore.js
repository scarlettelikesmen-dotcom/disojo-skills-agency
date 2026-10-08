import { useSyncExternalStore } from 'react';
// Which pricing preset the visitor picked; the contact form reads it.
let plan = 'unsure';
const subs = new Set();
export const setPlan = (p) => { plan = p; subs.forEach((f) => f()); };
export const usePlan = () => useSyncExternalStore((f) => { subs.add(f); return () => subs.delete(f); }, () => plan, () => 'unsure');
