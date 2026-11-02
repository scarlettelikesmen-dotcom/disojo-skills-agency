import { ArrowUp } from '@phosphor-icons/react';
import { CAL_URL, EMAIL, IG_HANDLE, IG_URL } from '../data/content.js';
import { scrollToTop } from '../lib/smoothScroll.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="f-top">
          <div className="f-who">
            <img src="/img/mark-ink.png" width="40" height="40" alt="" />
            <p className="nm">Ascender Media</p>
            <p className="ds">Social media post-production agency. Content planning, short-form editing and a posting system.</p>
          </div>
          <ul className="links">
            <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><a href={IG_URL} target="_blank" rel="noopener noreferrer">Instagram {IG_HANDLE}</a></li>
            <li><a href={CAL_URL} target="_blank" rel="noopener noreferrer">Book a call</a></li>
          </ul>
          <button className="top" onClick={() => scrollToTop()} aria-label="Back to the top"><ArrowUp size={20} weight="light" /></button>
        </div>
        <div className="f-row">
          <p>© 2026 Ascender Media. All rights reserved.</p>
          <p className="credit">Developed by <a href="https://disojo.in" target="_blank" rel="noopener">Disojo Solutions</a></p>
        </div>
      </div>
    </footer>
  );
}
