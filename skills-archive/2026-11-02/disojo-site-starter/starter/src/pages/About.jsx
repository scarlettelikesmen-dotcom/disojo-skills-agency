import Lines from '../components/Lines';
import { brand } from '../brand.config';
import './Pages.css';

export default function About() {
  const a = brand.about;
  return (
    <main className="page ed-gutter">
      <header className="page-head">
        <p className="ed-label">{brand.story.label}</p>
        <h1 className="ed-title"><Lines text={a.title} /></h1>
        <p className="page-lead">{a.lead}</p>
      </header>
      <div className="about-body">
        <div>{a.paragraphs.map((t, i) => <p key={i}>{t}</p>)}</div>
        <ul className="about-values">
          {a.values.map((v) => <li key={v.title}><h3>{v.title}</h3><p>{v.text}</p></li>)}
        </ul>
      </div>
    </main>
  );
}
