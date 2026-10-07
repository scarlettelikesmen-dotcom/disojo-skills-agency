// Section divider that bites into the next section: wave, scallop or zigzag. Colours are the section ABOVE (`from`) and the one BELOW (`to`).
// <WaveDivider from="#F5E3CD" to="#F91814" variant="scallop" />
const PATHS = {
  wave: 'M0,40 C180,0 360,80 540,40 C720,0 900,80 1080,40 C1260,0 1350,60 1440,30 L1440,80 L0,80 Z',
  zigzag: 'M0,80 L0,30 L60,70 L120,30 L180,70 L240,30 L300,70 L360,30 L420,70 L480,30 L540,70 L600,30 L660,70 L720,30 L780,70 L840,30 L900,70 L960,30 L1020,70 L1080,30 L1140,70 L1200,30 L1260,70 L1320,30 L1380,70 L1440,30 L1440,80 Z',
};
const scallop = () => {
  let d = 'M0,80 L0,40 ';
  for (let x = 0; x < 1440; x += 90) d += `a45,40 0 0,0 90,0 `;
  return `${d} L1440,80 Z`;
};

export default function WaveDivider({ from, to, variant = 'wave', flip = false, height = 'clamp(36px, 6vw, 80px)' }) {
  const d = variant === 'scallop' ? scallop() : PATHS[variant] || PATHS.wave;
  return (
    <div aria-hidden="true" style={{ background: from, lineHeight: 0, transform: flip ? 'scaleY(-1)' : undefined }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height }}>
        <path d={d} fill={to} />
      </svg>
    </div>
  );
}
