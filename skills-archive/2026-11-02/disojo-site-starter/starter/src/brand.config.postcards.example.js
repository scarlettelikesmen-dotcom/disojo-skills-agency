// REFERENCE ONLY: the brand config as filled in for the Postcards Perfumes rebuild (Oct 2026).
// Copy the shape, never the content. Testimonials here were flagged as unverified in the original build,
// so they stay disabled in any new project until the client confirms real, permissioned quotes.
// To try it: temporarily `export { brand } from './brand.config.postcards.example.js'` in brand.config.js
// (with the matching images/frames in /public).

export const brand = {
  name: 'Postcards',
  legalName: 'Postcards Perfumes',
  descriptor: 'Carry a place. Wear a memory.',
  email: 'care@postcardsperfumes.in',
  phone: { display: '+91 77108 66425', tel: '+917710866425' },
  instagram: 'https://instagram.com/',
  nouns: { one: 'scent', many: 'scents' },
  madeIn: 'Made in India',

  nav: [
    { label: 'Collection', to: '/#collection', scrollId: 'collection' },
    { label: 'Combos', to: '/shop' },
    { label: 'Our Story', to: '/about' },
    { label: 'B2B', to: '/#b2b', scrollId: 'b2b' },
  ],
  cta: { label: 'Order now' },

  loader: { mark: 'POSTCARDS' },
  curtain: {
    kicker: 'Postcards Perfumes',
    titles: { '/': 'Postcards', '/shop': 'Build a box', '/about': 'Our story', '/contact': 'Say hello' },
  },

  hero: {
    frameCount: 160,
    framePath: '/hero-frames/frame-',
    featuredProductId: 1,
    featuredLabel: 'Featured scent',
    statement: 'Carry a place. Wear a memory. Four scents bottled from the places India remembers.',
    hint: '(Scroll to turn)',
  },

  collection: { title: 'Four places.\nOne brand.', meta: '10 ml perfume oils' },
  bundle: {
    enabled: true,
    title: 'Build your\nown box.',
    text: 'Pick the places you want to carry. Any three scents or all four, packed in a kraft gift box.',
    offers: [
      { label: '3 scents', price: '₹899', save: 'Save 25%' },
      { label: '4 scents', price: '₹1,099', save: 'Save 31%' },
    ],
    cta: 'Build a box',
    to: '/shop',
    image: '/kraft-box.jpg',
    imageAlt: 'Postcards kraft gift box',
  },
  wheel: {
    enabled: true,
    ringText: 'CARRY A PLACE · WEAR A MEMORY · FOUR SCENTS, ONE JOURNEY · ',
    hint: 'Scroll to discover',
    viewLabel: 'View scent',
  },
  quiz: {
    enabled: true,
    kicker: 'Find your scent',
    resultLabel: 'Your scent is',
    ringText: 'CARRY A PLACE · WEAR A MEMORY · FOUR SCENTS, ONE JOURNEY · ',
  },
  story: {
    label: 'Our story',
    quote: 'We don’t bottle places. We bottle the feeling you take back from them.',
    cta: 'Read our story',
    to: '/about',
  },
  testimonials: { enabled: false, title: 'People don’t forget\na postcard.', items: [] },
  faq: {
    title: 'Questions.',
    items: [
      { q: 'Do you ship across India?', a: 'Yes! We offer delivery pan-India via Delhivery. Wherever you are, your memory is on its way.' },
      { q: 'When will my order be shipped?', a: 'Your order will typically ship within 5-7 working days of confirmation.' },
      { q: 'How long does the fragrance last?', a: 'Our premium perfume oils are designed to stay with you for 8-10 hours on average, sometimes longer, depending on your skin and the scent.' },
      { q: 'Are the perfumes alcohol-free?', a: 'Yes. All Postcards scents are 100% alcohol-free perfume oils - gentle on the skin, no overspray, and ideal for all skin types.' },
    ],
  },
  business: {
    enabled: true,
    kicker: 'For businesses',
    title: 'Give your people\na place to remember.',
    text: 'Diwali, annual day, new-joiner kits. A gift that tells a story about a place, shipped anywhere in India within 7 days.',
    cases: [
      { label: 'Corporate gifting', desc: 'Your message on the postcard insert, a branded kraft box, your logo on the label.' },
      { label: 'Bulk orders', desc: 'Wholesale pricing from 25 units. Mix and match scents freely.' },
      { label: 'Retail partnership', desc: 'Stock Postcards in your store. We handle fulfilment, you keep the margin.' },
    ],
    submitLabel: 'Send enquiry',
  },
  marquee: ['Alcohol-free perfume oil', 'Precision roll-on', 'No overspray', 'Lasts 8–10 hours', 'Travel friendly', 'Inspired by India', '10 ml'],

  footer: {
    title: 'Letters from\nplaces we love.',
    newsletterLabel: 'New scents and offers, first',
    columns: [
      { title: 'Shop', links: [{ label: 'The collection', to: '/#collection' }, { label: 'Build a box', to: '/shop' }, { label: 'Business gifting', to: '/#b2b' }] },
      { title: 'Help', links: [{ label: 'Our story', to: '/about' }, { label: 'FAQ', to: '/#faq' }] },
    ],
  },

  about: {
    title: 'We bottle the feeling\nyou take back.',
    lead: 'Postcards started from a simple idea: a place you love stays with you, so wear it.',
    paragraphs: ['(Original page copy omitted: write the real story with the client.)'],
    values: [{ title: 'Alcohol-free', text: 'Perfume oils, gentle on skin.' }, { title: 'Made in India', text: 'Inspired by places we know.' }],
  },
  contact: { title: 'Say hello.', text: 'Orders, gifting, retail partnerships.', submitLabel: 'Send message' },
  seo: {
    siteUrl: 'https://postcardsperfumes.in',
    title: 'Postcards Perfumes | Alcohol-free perfume oils inspired by India',
    description: 'Four alcohol-free roll-on perfume oils bottled from the places India remembers.',
    ogImage: '/og.jpg', themeColor: '#F7F4EF', locale: 'en_IN',
  },

  checkout: { mode: 'shopify', shopifyDomain: 'checkout.example.com', whatsapp: '' },
};
