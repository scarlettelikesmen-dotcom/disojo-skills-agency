import { useState } from 'react';
import './fx.css';

// One small cookie/consent card (bottom-left), not a modal. Analytics only loads after "Accept".
// Wire `onAccept` to load your analytics script (GA4, Plausible, Clarity): do NOT load trackers before this fires.
const KEY = 'consent-v1';
const read = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
export const hasConsent = () => read() === 'yes';

export default function ConsentCard({ onAccept, text = 'We use cookies to understand how the site is used.' }) {
  const [choice, setChoice] = useState(read);
  if (choice) return null;
  const set = (v) => { try { localStorage.setItem(KEY, v); } catch { /* private mode */ } setChoice(v); if (v === 'yes') onAccept?.(); };
  return (
    <aside className="fx-consent" role="dialog" aria-label="Cookie preferences">
      <p>{text}</p>
      <div>
        <button type="button" className="text-link" onClick={() => set('no')}>Decline</button>
        <button type="button" className="pill-link" onClick={() => set('yes')}>Accept</button>
      </div>
    </aside>
  );
}
