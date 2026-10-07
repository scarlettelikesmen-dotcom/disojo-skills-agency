// The one file you fill in per client. Every brand string, link and switch in the site reads from here.
// A completed real-world example (Postcards Perfumes) lives in brand.config.postcards.example.js.
// Multi-line strings use "\n" (rendered as <br />).

export const brand = {
  // --- identity -----------------------------------------------------------------------------
  name: 'Atelier',                    // wordmark in the nav, footer, loader and curtain
  legalName: 'Atelier Demo Co.',      // "© 2026 <legalName>"
  descriptor: 'Small-batch goods, made slowly.', // loader tagline + meta description
  email: 'hello@example.com',
  phone: { display: '+00 00000 00000', tel: '+0000000000' },
  instagram: 'https://instagram.com/',
  nouns: { one: 'piece', many: 'pieces' }, // used in UI copy: "New pieces and offers, first", "Your piece is"
  madeIn: 'Made with care',

  // --- navigation ---------------------------------------------------------------------------
  // scrollId = scroll to that section when already on the home page.
  nav: [
    { label: 'Collection', to: '/#collection', scrollId: 'collection' },
    { label: 'Shop', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],
  cta: { label: 'Order now' },

  // --- moments ------------------------------------------------------------------------------
  loader: { mark: 'ATELIER' },
  curtain: {
    kicker: 'Atelier Demo Co.',
    titles: { '/': 'Atelier', '/shop': 'The shop', '/about': 'About', '/contact': 'Say hello' },
  },

  // --- hero (scroll-scrubbed frame sequence; frameCount 1 = a single still) ------------------
  hero: {
    frameCount: 1,
    framePath: '/hero-frames/frame-',   // -> /hero-frames/frame-001.jpg
    featuredProductId: 1,
    featuredLabel: 'Featured piece',
    statement: 'Carry something real. Four pieces, made slowly.',
    hint: '(Scroll to turn)',
  },

  // --- home sections (set enabled:false to drop one) -----------------------------------------
  collection: { title: 'Four pieces.\nOne maker.', meta: 'Small batch' },
  bundle: {
    enabled: true,
    title: 'Build your\nown set.',
    text: 'Pick any three pieces or all four, packed in a gift box.',
    offers: [
      { label: '3 pieces', price: '₹899', save: 'Save 25%' },
      { label: '4 pieces', price: '₹1,099', save: 'Save 31%' },
    ],
    cta: 'Build a set',
    to: '/shop',
    image: '/images/bundle.jpg',
    imageAlt: 'Gift box',
  },
  wheel: {
    enabled: true,
    ringText: 'MADE SLOWLY · MADE WELL · FOUR PIECES, ONE MAKER · ',
    hint: 'Scroll to discover',
    viewLabel: 'View piece',
  },
  quiz: {
    enabled: true,
    kicker: 'Find your piece',
    resultLabel: 'Your piece is',
    ringText: 'MADE SLOWLY · MADE WELL · FOUR PIECES, ONE MAKER · ',
  },
  story: {
    label: 'Our story',
    quote: 'We make fewer things, and we make them better.',
    cta: 'Read our story',
    to: '/about',
  },
  testimonials: {
    enabled: false, // ONLY real, permissioned quotes. Leave off until you have them.
    title: 'Words from\nour customers.',
    items: [],
  },
  faq: {
    title: 'Questions.',
    items: [
      { q: 'Where do you ship?', a: 'Replace with the real shipping answer.' },
      { q: 'What is your returns policy?', a: 'Replace with the real returns answer.' },
    ],
  },
  business: {
    enabled: false,
    kicker: 'For businesses',
    title: 'Gifts for\nyour people.',
    text: 'Replace with the real business / wholesale offer.',
    cases: [],
    submitLabel: 'Send enquiry',
  },
  marquee: ['Small batch', 'Made to order', 'Ships in 3-5 days'],

  // --- footer ------------------------------------------------------------------------------
  footer: {
    title: 'Letters from\nthe workshop.',
    newsletterLabel: 'New pieces and offers, first',
    columns: [
      { title: 'Shop', links: [{ label: 'The collection', to: '/#collection' }, { label: 'Shop all', to: '/shop' }] },
      { title: 'Help', links: [{ label: 'About', to: '/about' }, { label: 'FAQ', to: '/#faq' }] },
    ],
  },

  // --- inner pages ---------------------------------------------------------------------------
  about: {
    title: 'Made slowly,\nmade well.',
    lead: 'Replace with the one-paragraph brand story, in the founder\'s own words.',
    paragraphs: ['Replace with the real story: where it started, what changed, why it matters.'],
    values: [
      { title: 'Value one', text: 'Replace with a real, specific principle.' },
      { title: 'Value two', text: 'Replace with a real, specific principle.' },
      { title: 'Value three', text: 'Replace with a real, specific principle.' },
    ],
  },
  contact: {
    title: 'Say hello.',
    text: 'Questions, orders, collaborations: we read everything.',
    submitLabel: 'Send message',
  },

  // --- SEO / launch --------------------------------------------------------------------------
  seo: {
    siteUrl: 'https://example.com',
    title: 'Atelier | Small-batch goods',
    description: 'Replace with a 150-character description of what the brand sells and who it is for.',
    ogImage: '/og.jpg',      // 1200x630
    themeColor: '#F7F4EF',
    locale: 'en_IN',
  },

  // --- checkout ----------------------------------------------------------------------------
  // 'demo'     alert only (default; nothing is sold)
  // 'shopify'  Shopify cart permalink: https://<shopifyDomain>/cart/<variantId>:<qty>,...
  // 'whatsapp' wa.me link with the order text
  // 'mailto'   opens the visitor's mail app addressed to brand.email
  checkout: { mode: 'demo', shopifyDomain: '', whatsapp: '' },
};
