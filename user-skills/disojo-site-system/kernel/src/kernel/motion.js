// Motion tokens and named eases. Read from CSS custom properties so each site tunes
// its feel in tokens.css (from the picked idea) and the JS never changes.
// Pattern seen in Monolog, ERA and Shortscut code (2026-11-10): one token object,
// four to six named eases, nothing ad hoc.
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(CustomEase, ScrollTrigger, SplitText);

const css = getComputedStyle(document.documentElement);
const num = (name, fallback) => {
  const v = parseFloat(css.getPropertyValue(name));
  return Number.isFinite(v) ? v : fallback;
};
const curve = (name, fallback) => (css.getPropertyValue(name).trim() || fallback).replace(/cubic-bezier\(|\)/g, '');

// seconds
export const T = {
  fast: num('--m-fast', 0.3),
  normal: num('--m-normal', 0.65),
  slow: num('--m-slow', 0.95),
  slower: num('--m-slower', 1.25),
  stagger: num('--m-stagger', 0.05),
};

// names are the API every module uses
CustomEase.create('out', curve('--e-out', '.16,1,.35,1'));      // arrivals, reveals, hovers
CustomEase.create('in', curve('--e-in', '.5,0,.75,0'));         // exits, hides
CustomEase.create('inout', curve('--e-inout', '.76,0,.24,1'));  // panels, page wipes, menus
CustomEase.create('soft', curve('--e-soft', '.25,.1,.25,1'));   // fades, colour

export const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
export const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

gsap.defaults({ ease: 'out', duration: T.normal });

export { gsap, ScrollTrigger, SplitText };
