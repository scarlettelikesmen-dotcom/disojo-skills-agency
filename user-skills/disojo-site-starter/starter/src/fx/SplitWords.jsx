import { useRef } from 'react';
import useInView from './useInView';
import './fx.css';

// Headline whose words rise out of masks when it scrolls into view. <SplitWords as="h2" className="ed-title" text="One\nbrand." />
export default function SplitWords({ text, as: Tag = 'h2', className = '', stagger = 70 }) {
  const ref = useRef(null);
  const seen = useInView(ref);
  let n = 0;
  return (
    <Tag ref={ref} className={`fx-split${seen ? ' is-in' : ''} ${className}`} aria-label={text.replace(/\n/g, ' ')}>
      {text.split('\n').map((line, li) => (
        <span className="fx-split-line" key={li} aria-hidden="true">
          {line.split(' ').map((w) => (
            <span className="fx-split-word" key={`${li}-${n}`}><span style={{ '--d': `${n++ * stagger}ms` }}>{w}&nbsp;</span></span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
