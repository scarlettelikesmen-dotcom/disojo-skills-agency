// Verifies every fx component on the /__fx demo route actually moves. usage: node scripts/smoke-fx.cjs <baseUrl> <outdir>

const p=require('puppeteer-core');const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
 const b=await p.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:'new',args:['--autoplay-policy=no-user-gesture-required']});
 const pg=await b.newPage();await pg.setViewport({width:1440,height:900});
 const errs=[];pg.on('pageerror',e=>errs.push(e.message));pg.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
 await pg.goto(process.argv[2]+'/__fx',{waitUntil:'networkidle0'});await sleep(1500);
 const ok=(c,m)=>console.log((c?'PASS ':'FAIL ')+m);
 const go=async(y)=>{await pg.evaluate(v=>scrollTo(0,v),y);await sleep(900)};
 await go(0);
 ok(await pg.evaluate(()=>document.querySelector('.fx-split').classList.contains('is-in')),'SplitWords reveals in view');
 ok((await pg.evaluate(()=>document.querySelector('.fx-counter').textContent))==='97%','Counter reaches 97%');
 // floaters move with scroll
 const sec=await pg.evaluate(()=>{const e=document.querySelector('img[src*="sticker-1"]').parentElement.parentElement;return e.getBoundingClientRect().top+scrollY});
 await go(sec-400);const t1=await pg.evaluate(()=>document.querySelector('img[src*="sticker-1"]').style.transform);
 await go(sec-100);const t2=await pg.evaluate(()=>document.querySelector('img[src*="sticker-1"]').style.transform);
 ok(t1&&t2&&t1!==t2,`Floaters parallax (${t1} -> ${t2})`);
 ok(await pg.evaluate(()=>document.querySelectorAll('svg[preserveAspectRatio] path').length===3),'3 WaveDividers render');
 // video scrub
 const vs=await pg.evaluate(()=>{const e=document.querySelector('.fx-scrub');return [e.getBoundingClientRect().top+scrollY,e.offsetHeight]});
 await go(vs[0]);const c0=await pg.evaluate(()=>document.querySelector('.fx-scrub video').currentTime);
 await go(vs[0]+(vs[1]-900)*0.5);await sleep(900);const c1=await pg.evaluate(()=>document.querySelector('.fx-scrub video').currentTime);
 await go(vs[0]+(vs[1]-900));await sleep(900);const c2=await pg.evaluate(()=>document.querySelector('.fx-scrub video').currentTime);
 ok(c1>c0+0.3&&c2>c1+0.3,`VideoScrub scrubs (t=${c0.toFixed(2)} -> ${c1.toFixed(2)} -> ${c2.toFixed(2)} of 3s)`);
 // pinned row
 const pr=await pg.evaluate(()=>{const e=document.querySelector('.fx-pinned');return [e.getBoundingClientRect().top+scrollY,e.offsetHeight]});
 await go(pr[0]);const x0=await pg.evaluate(()=>document.querySelector('.fx-pinned-row').style.transform);
 await go(pr[0]+(pr[1]-900)*0.6);const x1=await pg.evaluate(()=>document.querySelector('.fx-pinned-row').style.transform);
 ok(x0!==x1&&/-\d/.test(x1),`PinnedRow slides sideways (${x0} -> ${x1})`);
 await pg.screenshot({path:(process.argv[3]||'.')+'/fx-pinned.png'});
 ok(await pg.evaluate(()=>!!document.querySelector('.fx-consent')),'ConsentCard shows');
 await pg.click('.fx-consent .pill-link');await sleep(300);
 ok(await pg.evaluate(()=>!document.querySelector('.fx-consent')&&localStorage.getItem('consent-v1')==='yes'),'Consent accept stores choice and hides card');
 ok(!(await pg.evaluate(()=>document.documentElement.scrollWidth>innerWidth)),'no horizontal overflow');
 ok(errs.length===0,'no console/page errors '+JSON.stringify(errs.slice(0,3)));
 await go(sec-150);await pg.screenshot({path:(process.argv[3]||'.')+'/fx-floaters.png'});
 await b.close();
})();
