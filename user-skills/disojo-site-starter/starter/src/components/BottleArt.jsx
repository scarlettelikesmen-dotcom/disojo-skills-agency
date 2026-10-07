import { brand } from '../brand.config';

// Placeholder roll-on bottle, drawn so each scent shows its real name and oil colour.
// Swap for a real transparent cut-out by giving the product an `cutout` image path.
export default function BottleArt({ product }) {
  if (product.cutout) {
    return <img src={product.cutout} alt={product.name} className="bottle-art" draggable="false" decoding="async" />;
  }
  // Placeholder colours come from the product's own tint, so a new client needs no extra table.
  const look = { oil: product.gradientTo };
  const id = `b${product.id}`;
  return (
    <svg className="bottle-art" viewBox="0 0 200 640" role="img" aria-label={`${product.name} roll-on bottle`}>
      <defs>
        <linearGradient id={`${id}-glass`} x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="0.18" stopColor="#fff" stopOpacity="0.08" />
          <stop offset="0.82" stopColor="#000" stopOpacity="0.06" />
          <stop offset="1" stopColor="#000" stopOpacity="0.22" />
        </linearGradient>
        <linearGradient id={`${id}-cap`} x1="0" x2="1">
          <stop offset="0" stopColor="#2a2a28" />
          <stop offset="0.35" stopColor="#0d0d0c" />
          <stop offset="1" stopColor="#1c1c1a" />
        </linearGradient>
        <linearGradient id={`${id}-label`} x1="0" x2="1">
          <stop offset="0" stopColor="#efe6d4" />
          <stop offset="0.5" stopColor="#f7f1e4" />
          <stop offset="1" stopColor="#ddd2bd" />
        </linearGradient>
      </defs>

      {/* glass body + oil */}
      <rect x="14" y="168" width="172" height="462" rx="26" fill={look.oil} opacity="0.85" />
      <rect x="14" y="168" width="172" height="462" rx="26" fill={`url(#${id}-glass)`} />
      <rect x="14" y="168" width="172" height="462" rx="26" fill="none" stroke="#000" strokeOpacity="0.12" />

      {/* label wrap */}
      <rect x="14" y="236" width="172" height="330" fill={`url(#${id}-label)`} />
      <g aria-hidden="true" fill="#1d1a16" textAnchor="middle" fontFamily="Fraunces, Georgia, serif">
        <text transform="translate(72 401) rotate(-90)" fontSize="30" letterSpacing="6">{brand.name.toUpperCase()}</text>
        <text transform="translate(98 401) rotate(-90)" fontSize="9" letterSpacing="5" fontFamily="'Plus Jakarta Sans', sans-serif"></text>
        <text transform="translate(136 401) rotate(-90)" fontSize={product.name.length > 14 ? 20 : 23} letterSpacing="1">
          {product.name.toUpperCase()}
        </text>
        <text transform="translate(162 401) rotate(-90)" fontSize="9" letterSpacing="3" fontFamily="'Plus Jakarta Sans', sans-serif">
          {product.size}
        </text>
      </g>

      {/* collar + ribbed cap */}
      <rect x="18" y="150" width="164" height="22" rx="4" fill="#0e0e0d" />
      <rect x="22" y="6" width="156" height="148" rx="12" fill={`url(#${id}-cap)`} />
      {Array.from({ length: 19 }, (_, i) => (
        <rect key={i} x={30 + i * 7.6} y="14" width="2.2" height="132" fill="#fff" opacity="0.07" />
      ))}
    </svg>
  );
}
