import { ArrowUp } from '@phosphor-icons/react';
import { CAL_URL, EMAIL, IG_HANDLE, IG_URL, TOTAL_SECONDS } from '../data/content.js';
import { timecode } from '../lib/time.js';
import { scrollToTop } from '../lib/smoothScroll.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="endcap">
      <div className="wrap">
        <div className="endbar" aria-hidden="true"><i /></div>
        <div className="endcap-row">
          <p className="mono rend"><span className="dotok" />Render complete <span className="tcend">{timecode(TOTAL_SECONDS)}</span></p>
          <button className="top" onClick={() => scrollToTop()}>Back to start <span className="ico"><ArrowUp size={18} weight="light" /></span></button>
        </div>
        <div className="endcap-grid">
          <div className="f-who">
            <img src="/img/mark.png" width="44" height="44" alt="" />
            <p className="nm">Ascender Media</p>
            <p className="ds">Social media post-production agency. Content planning, short-form editing and a posting system.</p>
          </div>
          <ul className="links">
            <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><a href={IG_URL} target="_blank" rel="noopener noreferrer">Instagram {IG_HANDLE}</a></li>
            <li><a href={CAL_URL} target="_blank" rel="noopener noreferrer">Book a call</a></li>
          </ul>
        </div>
        <p className="legal">© 2026 Ascender Media. All rights reserved.</p>
      </div>
    </footer>
  );
}
