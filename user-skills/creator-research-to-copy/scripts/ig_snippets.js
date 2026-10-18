// Paste-in snippets for the built-in browser (javascript_tool) while logged in to Instagram. READ-ONLY.
// Rules: never call /api/v1/* (it returned 429 once); keep >= 1.5 s between fetches; batches of <= 10 per call (45 s tool timeout).

// 1) Profile header + reel ids/views from a /<handle>/reels/ page (scroll first; grid is virtualised)
(() => { const head=(document.querySelector('header')||document.body).innerText.replace(/\n+/g,' | ').slice(0,400);
  const reels=[...document.querySelectorAll('a[href*="/reel/"]')].map(a=>a.getAttribute('href').split('/reel/')[1].split('/')[0]+' '+(a.innerText||'').trim().split('\n').pop());
  return {head, reels}; })()

// 2) Collect post ids from a keyword search page: /explore/search/keyword/?q=<terms> (wait ~6 s, scroll 3-4 times first)
window.__ids=[...new Set([...document.querySelectorAll('a')].map(a=>a.getAttribute('href')).filter(h=>h&&/\/(p|reel)\//.test(h)).map(h=>h.split('/').filter(Boolean).pop()))];

// 3) Owner, likes, comments, date and caption for each id from the post page's og:description (no API)
window.metaOf=async(ids)=>{const out=[];for(const id of ids){try{const r=await fetch('/p/'+id+'/',{credentials:'include'});const t=await r.text();
  const m=t.match(/<meta property="og:description" content="([^"]+)"/);out.push(id+' || '+(m?m[1].replace(/&quot;/g,'"').replace(/&#x[0-9a-f]+;/gi,'').replace(/\n/g,' ').slice(0,220):'NA'));}catch(e){out.push(id+' err')}
  await new Promise(r=>setTimeout(r,1500));}return out.join('\n');};
// await window.metaOf(window.__ids.slice(0,10))

// 4) On-screen hook of a single reel: open /<handle>/reel/<id>/, wait 6 s, then computer.zoom on the video area (region ~ [130,20,400,500]).
