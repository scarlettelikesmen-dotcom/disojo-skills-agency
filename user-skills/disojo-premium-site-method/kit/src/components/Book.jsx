import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, EnvelopeSimple, InstagramLogo, CalendarBlank, ChatCircleText, CheckCircle, WarningCircle } from '@phosphor-icons/react';
import { CAL_URL, EMAIL, IG_HANDLE, IG_URL, START } from '../data/content.js';
import { useInView } from '../lib/motion.js';
import { usePlan, setPlan } from '../lib/planStore.js';
import { sendMessage } from '../lib/submit.js';
import './Book.css';

const CAL_EMBED = `${CAL_URL}?hide_gdpr_banner=1&background_color=fbfbf9&text_color=0e0e10&primary_color=2b45f5`;
const PLAN_OPTIONS = [['unsure', 'Not sure yet'], ['starter', 'Starter, $1,300 a month'], ['growth', 'Growth, $3,500 a month'], ['scale', 'Scale, $6,000 a month']];

function Calendar() {
  const [load, setLoad] = useState(false);
  return (
    <div className="cal">
      {!load ? (
        <div className="cal-idle">
          <p className="lead">Thirty minutes, free. Pick a time that suits you and we'll send the invite.</p>
          <button className="btn" onClick={() => setLoad(true)}>Book a call <span className="ico"><ArrowUpRight size={20} weight="light" /></span></button>
          <a className="alt" href={CAL_URL} target="_blank" rel="noopener noreferrer">Open the calendar in a new tab</a>
        </div>
      ) : (
        <>
          <iframe title="Book a 30-minute strategy call" src={CAL_EMBED} loading="lazy" />
          <a className="alt" href={CAL_URL} target="_blank" rel="noopener noreferrer">Calendar not loading? Open it in a new tab</a>
        </>
      )}
    </div>
  );
}

function Form() {
  const plan = usePlan();
  const [v, setV] = useState({ name: '', email: '', message: '', hp: '' });
  const [err, setErr] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | failed
  const live = useRef(null);

  const set = (k) => (e) => { setV((s) => ({ ...s, [k]: e.target.value })); setErr((x) => (x[k] ? { ...x, [k]: undefined } : x)); };
  const validate = () => {
    const e = {};
    if (!v.name.trim()) e.name = 'Please tell us your name.';
    if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter an email we can reply to.';
    if (v.message.trim().length < 10) e.message = 'A sentence or two helps us prepare.';
    return e;
  };
  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate(); setErr(e);
    if (Object.keys(e).length) { document.getElementById(`f-${Object.keys(e)[0]}`)?.focus(); return; }
    setStatus('sending');
    try {
      await sendMessage({ ...v, plan: PLAN_OPTIONS.find(([k]) => k === plan)?.[1] || plan });
      setStatus('sent');
    } catch { setStatus('failed'); }
  };
  useEffect(() => { if (status === 'sent' || status === 'failed') live.current?.focus(); }, [status]);

  if (status === 'sent') {
    return (
      <div className="done" tabIndex={-1} ref={live} role="status">
        <CheckCircle size={44} weight="light" aria-hidden="true" />
        <h3>Message sent.</h3>
        <p>Thanks, {v.name.split(' ')[0]}. We'll get back to you within 24 hours.</p>
      </div>
    );
  }
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent('Enquiry from ascendermedia.in')}&body=${encodeURIComponent(`${v.message}\n\n${v.name}`)}`;
  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="row2">
        <div className="field">
          <label htmlFor="f-name">Your name</label>
          <input id="f-name" name="name" autoComplete="name" value={v.name} onChange={set('name')} aria-invalid={!!err.name} aria-describedby={err.name ? 'e-name' : undefined} />
          {err.name && <p className="err" id="e-name"><WarningCircle size={16} weight="light" />{err.name}</p>}
        </div>
        <div className="field">
          <label htmlFor="f-email">Email address</label>
          <input id="f-email" name="email" type="email" autoComplete="email" inputMode="email" value={v.email} onChange={set('email')} aria-invalid={!!err.email} aria-describedby={err.email ? 'e-email' : undefined} />
          {err.email && <p className="err" id="e-email"><WarningCircle size={16} weight="light" />{err.email}</p>}
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-plan">Plan you're considering</label>
        <select id="f-plan" value={plan} onChange={(e) => setPlan(e.target.value)}>
          {PLAN_OPTIONS.map(([k, l]) => <option key={k} value={k}>{l}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-message">What are you looking for?</label>
        <textarea id="f-message" name="message" rows="4" value={v.message} onChange={set('message')} aria-invalid={!!err.message} aria-describedby={err.message ? 'e-message' : undefined} />
        {err.message && <p className="err" id="e-message"><WarningCircle size={16} weight="light" />{err.message}</p>}
      </div>
      <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={v.hp} onChange={set('hp')} name="website" />
      <div className="actions">
        <button className="btn" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending' : 'Send message'} <span className="ico"><ArrowUpRight size={20} weight="light" /></span>
        </button>
        <p className="fine">We reply within 24 hours.</p>
      </div>
      {status === 'failed' && (
        <p className="fail" role="alert" tabIndex={-1} ref={live}>
          <WarningCircle size={18} weight="light" /> That didn't go through. <a href={mailto}>Email us directly</a> and we'll pick it up from there.
        </p>
      )}
    </form>
  );
}

export default function Book() {
  const [ref, seen] = useInView();
  const [tab, setTab] = useState('cal');
  return (
    <section className="sec book" id="book" ref={ref}>
      <div className="wrap b-grid">
        <div className={`b-copy rv${seen ? ' in' : ''}`}>
          <h2>Ready to make content less random?</h2>
          <p className="sub">Book a free 30-minute strategy call. We'll look at your current content, your offer and what a realistic growth system could look like.</p>
          <ol className="start">
            {START.slice(1).map(([k, v]) => <li key={k}><b>{k}</b> {v}</li>)}
          </ol>
          <ul className="contact">
            <li><a href={`mailto:${EMAIL}`}><span className="ic"><EnvelopeSimple size={22} weight="light" /></span><span><small>Email</small>{EMAIL}</span></a></li>
            <li><a href={IG_URL} target="_blank" rel="noopener noreferrer"><span className="ic"><InstagramLogo size={22} weight="light" /></span><span><small>Instagram</small>{IG_HANDLE}</span></a></li>
          </ul>
        </div>
        <div className={`b-panel rv${seen ? ' in' : ''}`} style={{ '--d': 160 }}>
          <div className="core">
            <div className="seg b-tabs" role="tablist" aria-label="How to reach us">
              <button role="tab" id="tab-cal" aria-selected={tab === 'cal'} aria-controls="pane-cal" className={tab === 'cal' ? 'on' : ''} onClick={() => setTab('cal')}><CalendarBlank size={18} weight="light" /> Calendar</button>
              <button role="tab" id="tab-msg" aria-selected={tab === 'msg'} aria-controls="pane-msg" className={tab === 'msg' ? 'on' : ''} onClick={() => setTab('msg')}><ChatCircleText size={18} weight="light" /> Message</button>
            </div>
            <div role="tabpanel" id="pane-cal" aria-labelledby="tab-cal" hidden={tab !== 'cal'}><Calendar /></div>
            <div role="tabpanel" id="pane-msg" aria-labelledby="tab-msg" hidden={tab !== 'msg'}><Form /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
