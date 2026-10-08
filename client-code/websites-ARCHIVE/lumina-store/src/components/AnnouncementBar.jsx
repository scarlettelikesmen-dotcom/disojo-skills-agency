import './AnnouncementBar.css';

const items = [
  'Orders Now Open',
  'Free Delivery Above ₹699',
  'Secure Checkout',
  'Premium Fragrance Oil',
  '4 Scents · 1 Journey',
  'Alcohol-Free Formula',
  'Starting at ₹399',
  'Limited Debut Collection',
];

export default function AnnouncementBar() {
  const renderItems = () => items.map((item, i) => (
    <span key={i} className="announcement-item">
      <span className="announcement-dot" aria-hidden="true">✦</span>
      {item}
    </span>
  ));

  return (
    <div className="announcement-bar" role="marquee" aria-label="Site announcements">
      <div className="announcement-track">
        {/* We duplicate the set twice to create a seamless infinite loop at exactly 50% translation */}
        <div className="announcement-content">
          {renderItems()}
        </div>
        <div className="announcement-content" aria-hidden="true">
          {renderItems()}
        </div>
      </div>
    </div>
  );
}
