// Renders a config string, turning "\n" into <br />. Keeps multi-line headlines editable in brand.config.js.
export default function Lines({ text }) {
  return String(text).split('\n').map((line, i) => (
    <span key={i}>{i > 0 && <br />}{line}</span>
  ));
}
