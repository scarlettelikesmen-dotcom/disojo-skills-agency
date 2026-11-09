// Filled per project from site.json and the chosen direction. Everything here is the client's published fact or the brief's decision.
import site from './site.json';
export const BRAND = {
  name: site.name,
  origin: site.origin,            // the client's live site: canonical and og:url point here once we replace it
  fonts: '',                      // Google Fonts href printed by tokens_to_css.py
  noindex: true,                  // demos stay noindex; flip to false only when this replaces the live site
  grain: true,                    // tokens.json grain: a fine film grain over the page (approved on disojostudio.com)
  nav: [],                        // [['/about/', 'About'], ...] chosen in the brief from site.nav
  cta: null,                      // ['/contact/', 'Book a call'] only if the client has that action
  tel: site.tel[0] || '', mail: site.mail[0] || '', address: site.address,
  social: site.social,
};
export const yr = 2026;
