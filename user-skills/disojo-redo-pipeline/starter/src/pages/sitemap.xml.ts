import { BRAND } from '../data/brand.js';
export function GET() {
  const routes = Object.values(import.meta.glob('../data/pages/*.json', { eager: true })).map((m: any) => m.default.route);
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(r => `  <url><loc>${BRAND.origin}${r}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
