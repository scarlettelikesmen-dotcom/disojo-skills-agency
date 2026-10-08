// Mochi & Midori Patisserie: CONCEPT build by Disojo. Every business detail, story line and policy below is concept copy
// (`concept: true`); the 555 numbers, the Maps link and the address are not real. Replace before any launch.
export const brand = {
  concept: true,
  conceptNote: 'Concept by Disojo. Business details and copy are illustrative; photos and video are AI-generated (Google Gemini, invisible SynthID mark).',
  name: 'Mochi & Midori',
  jp: '餅と緑',
  legalName: 'Mochi & Midori Patisserie',
  descriptor: 'Japanese pastry, folded slowly.',
  email: 'hello@mochimidori.com',
  phone: { display: '+1 (415) 555-0198', tel: '+14155550198' },
  whatsapp: '14155550199',
  instagram: 'https://instagram.com/mochimidori_bakery',
  instagramHandle: '@mochimidori_bakery',
  address: ['42-15 Zen Garden Lane', 'Little Tokyo, San Francisco, CA 94115'],
  mapsUrl: 'https://maps.app.goo.gl/mochi-midori-demo',
  hours: [{ days: 'Tue to Sun', time: '8:00 to 18:00' }, { days: 'Monday', time: 'Closed' }],
  nav: [
    { n: '一', label: 'The counter', to: '/#counter', scrollId: 'counter' },
    { n: '二', label: 'Our story', to: '/about' },
    { n: '三', label: 'Visit', to: '/visit' },
  ],
  hero: {
    kicker: 'Japanese patisserie · San Francisco',
    lines: [{ from: 0.6, to: 0.84, text: 'Pink shells, salted cherry blossom.' }],
    end: { from: 0.89, text: 'Six bakes. Every day we are open.', cta: { label: 'See the counter', to: '/#counter' } },
  },
  counter: { title: 'The counter', intro: 'Six bakes, each made by hand. Scroll through them, or find what is in each one below.' },
  hands: { title: 'By hand', items: [
    { img: '/process/sifting-matcha.jpg', alt: 'A baker sifting matcha over a cake on a stand', label: 'Matcha, sifted', speed: 0.12 },
    { img: '/process/smoothing-cream.jpg', alt: 'A baker smoothing cream across a matcha crêpe', label: 'Cream, smoothed', speed: -0.06 },
    { img: '/process/decorating-macaron.jpg', alt: 'A baker placing a cherry blossom on a pink macaron', label: 'Blossom, placed', speed: 0.2 },
    { img: '/process/scoring-shokupan.jpg', alt: 'A baker scoring shokupan dough in a wooden tin', label: 'Dough, scored', speed: -0.1 },
    { img: '/process/tools.jpg', alt: 'A whisk, matcha bowl, scales and palette knife on a wooden counter', label: 'The tools', speed: 0.1 },
  ] },
  good: {
    title: 'What is in it',
    note: 'Our kitchen handles gluten, dairy, eggs, sesame and tree nuts, so we cannot promise any bake is free of cross-contact. Ask us if it matters.',
    steps: [
      { n: '1', title: 'Look', text: 'Everything on the counter was made that morning.' },
      { n: '2', title: 'Message or walk in', text: 'We do not sell online. WhatsApp us to set something aside, or just come by.' },
      { n: '3', title: 'Collect', text: 'Pick up from the shop. Whole cakes and larger boxes need 48 hours. We do not deliver.' },
    ],
  },
  about: {
    title: 'Quiet pastry,\nmade slowly.',
    lead: 'Mochi & Midori is a small Japanese patisserie with a short menu, baked fresh in the morning before the doors open.',
    paragraphs: [
      'Mochi is the soft rice cake. Midori is the Japanese word for green. Between the two you get most of what we bake: chew, tea, cream and a little restraint.',
      'The menu stays short on purpose. Six bakes, each one made by hand, each one listed with exactly what is in it and how long it keeps.',
      'The shop is a wooden room with a long counter. Come in, take your time, and tell us which one you are going to try first.',
    ],
    values: [
      { n: '一', title: 'A short menu', text: 'Six bakes, done properly, instead of thirty done quickly.' },
      { n: '二', title: 'Baked in the morning', text: 'Everything on the counter was made for that day.' },
      { n: '三', title: 'Nothing hidden', text: 'Allergens, storage and shelf life on every bake. If we do not know, we say so.' },
    ],
  },
  seo: {
    siteUrl: 'https://mochi-midori-concept.vercel.app',
    title: 'Mochi & Midori | Japanese pastry (concept by Disojo)',
    description: 'Concept website for Mochi & Midori, a Japanese patisserie: matcha mille crêpe, yuzu tart, black sesame mochi donut and more. Built by Disojo.',
    ogImage: '/og.jpg', themeColor: '#1B3020', locale: 'en_US', noindex: true,
  },
  checkout: { mode: 'none' },
};
