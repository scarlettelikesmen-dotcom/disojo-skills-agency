import { brand } from '../brand.config';
import './Pages.css';

export default function About() {
  const a = brand.about;
  return (
    <main data-nav="dark" className="page">
      <header className="page-head gutter">
        <p className="label page-kicker">Our story · <span aria-hidden="true">{brand.jp}</span></p>
        <h1 className="display page-title">{a.title.split('\n').map((l, i) => <span key={l}>{i > 0 && <br />}{l}</span>)}</h1>
        <p className="page-lead">{a.lead}</p>
      </header>
      <div className="about-photo gutter"><img src="/process/dusting-matcha.jpg" alt="A baker dusting matcha over a stack of crêpes on a wooden table" width="2000" height="1013" /></div>
      <div className="about-body gutter">
        <div>{a.paragraphs.map((t) => <p key={t}>{t}</p>)}</div>
        <ul className="about-values">
          {a.values.map((v) => <li key={v.title}><span className="display about-n" aria-hidden="true">{v.n}</span><div><h2 className="display">{v.title}</h2><p>{v.text}</p></div></li>)}
        </ul>
      </div>
    </main>
  );
}
