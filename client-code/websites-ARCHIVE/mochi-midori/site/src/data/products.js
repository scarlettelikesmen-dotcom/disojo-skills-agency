// Six bakes. Allergens, storage and shelf life are the client's data; descriptions are theirs where supplied, otherwise concept copy.
// bg/fg = the chapter colours on the home page; cut = transparent plated cut-out; card = 4:5 photo.
export const ALLERGENS = ['Gluten', 'Dairy', 'Eggs', 'Sesame', 'Tree nuts'];

export const products = [
  { id: 1, kanji: '一', name: 'Matcha Mille Crêpe', kind: 'Signature cake', tagline: 'Matcha crêpes, cream between each.',
    description: 'Thin matcha crêpes stacked with cream and dusted with matcha. Served chilled.',
    allergens: ['Gluten', 'Dairy', 'Eggs'], storage: 'Refrigerate at all times. Best served chilled', keeps: '2 days',
    bg: '#74953A', fg: '#0F1F0B', nav: 'dark', cut: '/cut/matcha-mille-crepe.webp', card: '/images/matcha-mille-crepe.jpg' },
  { id: 2, kanji: '二', name: 'Black Sesame Mochi Donut', kind: 'Donut', tagline: 'Chewy, nutty, charcoal-glazed.',
    description: 'Chewy, nutty, and glazed in a charcoal-grey sesame icing.',
    allergens: ['Gluten', 'Sesame', 'Dairy'], storage: 'Room temperature, airtight container', keeps: '1 day, best eaten fresh',
    bg: '#25272B', fg: '#F4F0E6', nav: 'light', cut: '/cut/black-sesame-mochi-donut.webp', card: '/images/black-sesame-mochi-donut.jpg' },
  { id: 3, kanji: '三', name: 'Yuzu Cloud Tart', kind: 'Tart', tagline: 'Bright citrus under a scorched cloud.',
    description: 'A bright, citrusy custard in a crisp shortcrust shell, topped with a scorched meringue "cloud".',
    allergens: ['Gluten', 'Dairy', 'Eggs'], storage: 'Refrigerate. Do not freeze', keeps: '2 days',
    bg: '#F0CD49', fg: '#2A2104', nav: 'dark', cut: '/cut/yuzu-cloud-tart.webp', card: '/images/yuzu-cloud-tart.jpg' },
  { id: 4, kanji: '四', name: 'Hojicha Brownie', kind: 'Roasted tea brownie', tagline: 'Dense, earthy, faintly smoky.',
    description: 'A dense, earthy chocolate brownie infused with smoky, charcoal-roasted green tea.',
    allergens: ['Gluten', 'Dairy', 'Eggs'], storage: 'Room temperature, or fridge for a fudgier bite', keeps: '5 days',
    bg: '#6E4129', fg: '#F6E9DC', nav: 'light', cut: '/cut/hojicha-brownie.webp', card: '/images/hojicha-brownie.jpg' },
  { id: 5, kanji: '五', name: 'Sakura Blossom Macarons', kind: 'Macarons', tagline: 'Pink shells, salted cherry blossom.',
    description: 'Delicate pink shells with a salted cherry blossom buttercream filling.',
    allergens: ['Tree nuts', 'Eggs', 'Dairy'], storage: 'Refrigerate, airtight container', keeps: '4 days',
    bg: '#F2C2CD', fg: '#3A1520', nav: 'dark', cut: '/cut/sakura-macarons.webp', card: '/images/sakura-macarons.jpg' },
  { id: 6, kanji: '六', name: 'Shokupan', kind: 'Japanese milk bread loaf', tagline: 'Cloud-soft, Hokkaido milk.',
    description: 'Our staple: an impossibly fluffy, cloud-like loaf made with Hokkaido milk.',
    allergens: ['Gluten', 'Dairy'], storage: 'Room temperature. Slice and freeze for longer', keeps: '3 days at room temperature',
    bg: '#E8D6AE', fg: '#2D1F08', nav: 'dark', cut: '/cut/shokupan.webp', card: '/images/shokupan.jpg' },
];
