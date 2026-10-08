// Hanko-style stamp: a vermilion square with the two characters of the shop name. Decorative.
export default function Seal({ size = 56, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Mochi and Midori seal">
      <rect x="3" y="3" width="58" height="58" rx="5" fill="#C8412B" />
      <rect x="7" y="7" width="50" height="50" rx="3" fill="none" stroke="#F5F1E6" strokeWidth="1.5" opacity="0.8" />
      <text x="32" y="29" textAnchor="middle" fontFamily="'Shippori Mincho B1', serif" fontWeight="800" fontSize="21" fill="#F5F1E6">餅</text>
      <text x="32" y="51" textAnchor="middle" fontFamily="'Shippori Mincho B1', serif" fontWeight="800" fontSize="21" fill="#F5F1E6">緑</text>
    </svg>
  );
}
