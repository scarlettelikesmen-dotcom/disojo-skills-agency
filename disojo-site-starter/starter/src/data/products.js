// Product data. One object per product. Order = order everywhere (cards, wheel, quiz ids).
//   id            1..N, used by the quiz and hero (keep stable)
//   subtitle      the single line under the name on cards ("Origin", "Collection", "Material"...)
//   tagline       short line used in the popup, the wheel caption and the quiz result
//   facts         [{ label, value }]  rows shown in the popup and the quiz result (3 is ideal)
//   image         4:5 studio photo (card + popup)   cutout  transparent WebP for the wheel/quiz (optional)
//   gradientFrom / gradientTo / textColor   the product's tint triple: the wheel and quiz colour themselves with it
//   shopifyVariantId   only needed when brand.checkout.mode === 'shopify'
export const products = [
  {
    id: 1, number: '01', name: 'Item One', subtitle: 'Sage edition', tagline: 'Fresh. Clean. Light.',
    description: 'Replace with two sentences that sell the product honestly.',
    price: 399, originalPrice: null, currency: '₹', size: 'Standard',
    facts: [{ label: 'Made from', value: 'Replace' }, { label: 'Best for', value: 'Replace' }],
    image: '/images/item-one.jpg', cutout: null,
    gradientFrom: '#DCEADF', gradientTo: '#4F7A64', textColor: '#16271E', shopifyVariantId: '', badge: null,
  },
  {
    id: 2, number: '02', name: 'Item Two', subtitle: 'Rose edition', tagline: 'Soft. Warm. Elegant.',
    description: 'Replace with two sentences that sell the product honestly.',
    price: 399, originalPrice: null, currency: '₹', size: 'Standard',
    facts: [{ label: 'Made from', value: 'Replace' }, { label: 'Best for', value: 'Replace' }],
    image: '/images/item-two.jpg', cutout: null,
    gradientFrom: '#F3D9DD', gradientTo: '#A94F63', textColor: '#30141A', shopifyVariantId: '', badge: null,
  },
  {
    id: 3, number: '03', name: 'Item Three', subtitle: 'Sea edition', tagline: 'Breezy. Calm. Free.',
    description: 'Replace with two sentences that sell the product honestly.',
    price: 399, originalPrice: null, currency: '₹', size: 'Standard',
    facts: [{ label: 'Made from', value: 'Replace' }, { label: 'Best for', value: 'Replace' }],
    image: '/images/item-three.jpg', cutout: null,
    gradientFrom: '#D3E8E8', gradientTo: '#1F5E63', textColor: '#0D2426', shopifyVariantId: '', badge: null,
  },
  {
    id: 4, number: '04', name: 'Item Four', subtitle: 'Sand edition', tagline: 'Warm. Rich. Deep.',
    description: 'Replace with two sentences that sell the product honestly.',
    price: 399, originalPrice: null, currency: '₹', size: 'Standard',
    facts: [{ label: 'Made from', value: 'Replace' }, { label: 'Best for', value: 'Replace' }],
    image: '/images/item-four.jpg', cutout: null,
    gradientFrom: '#EBD9BC', gradientTo: '#8A5A2E', textColor: '#2A1A0A', shopifyVariantId: '', badge: null,
  },
];
