// Writes <title>, description, Open Graph, Twitter, canonical, theme-color into index.html and
// generates public/robots.txt + public/sitemap.xml, all from src/brand.config.js. Runs before every build.
import { readFileSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const { brand } = await import(pathToFileURL(resolve('src/brand.config.js')).href);
const { seo } = brand;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const url = seo.siteUrl.replace(/\/$/, '');

const tags = [
  `<title>${esc(seo.title)}</title>`,
  `<meta name="description" content="${esc(seo.description)}" />`,
  `<meta name="theme-color" content="${esc(seo.themeColor)}" />`,
  `<link rel="canonical" href="${url}/" />`,
  `<meta property="og:type" content="website" />`,
  `<meta property="og:site_name" content="${esc(brand.name)}" />`,
  `<meta property="og:title" content="${esc(seo.title)}" />`,
  `<meta property="og:description" content="${esc(seo.description)}" />`,
  `<meta property="og:url" content="${url}/" />`,
  `<meta property="og:image" content="${url}${seo.ogImage}" />`,
  `<meta property="og:locale" content="${esc(seo.locale)}" />`,
  `<meta name="twitter:card" content="summary_large_image" />`,
].map((t) => `    ${t}`).join('\n');

let html = readFileSync('index.html', 'utf8');
html = html.replace(/(<!-- META:START[^>]*-->)[\s\S]*?(\s*<!-- META:END -->)/, `$1\n${tags}\n$2`);
writeFileSync('index.html', html);

const routes = ['/', ...brand.nav.map((n) => n.to).filter((t) => !t.includes('#'))];
const unique = [...new Set(routes)];
writeFileSync('public/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${unique.map((r) => `  <url><loc>${url}${r}</loc></url>`).join('\n')}\n</urlset>\n`);
writeFileSync('public/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${url}/sitemap.xml\n`);
console.log(`meta synced for ${brand.name} (${url}), ${unique.length} sitemap urls`);
