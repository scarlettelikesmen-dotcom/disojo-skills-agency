import { EMAIL } from '../data/content.js';
// Contact form delivery. FormSubmit.co forwards the JSON to the inbox below; the first ever submission sends an activation
// email to that address, which the owner must confirm once. To change provider, replace this one function.
const ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

export async function sendMessage({ name, email, plan, message, hp }) {
  if (hp) return { ok: true }; // honeypot filled: a bot. Pretend success, send nothing.
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      name, email, plan, message,
      _subject: `New enquiry from ${name} (ascendermedia.in)`,
      _replyto: email, _template: 'table', _captcha: 'false',
    }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json().catch(() => ({}));
  if (data.success === 'false' || data.success === false) throw new Error(data.message || 'Not accepted');
  return { ok: true };
}
