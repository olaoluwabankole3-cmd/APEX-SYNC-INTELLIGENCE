import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

const origin='http://127.0.0.1:4173';
const widths=[320,360,390,430,768,1024,1440];
const paths=['/','/company','/approach','/cortex','/innovation','/notes','/careers','/contact',
 '/notes/the-future-is-a-construction-project','/notes/information-is-not-understanding',
 '/notes/craft-is-a-technical-decision'];
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const errors=[];
await mkdir('qa-output',{recursive:true});
let passed=0;

async function check(page,path,width){
 const failures=[];
 page.on('pageerror',error=>failures.push(error.message));
 const response=await page.goto(origin+path,{waitUntil:'domcontentloaded',timeout:30000});
 assert.ok(response?.ok(),'HTTP not OK for '+path);
 await page.locator('h1').waitFor({state:'visible',timeout:15000});
 await page.evaluate(()=>document.fonts.ready);
 const pageInfo=await page.evaluate(()=>({
   docWidth:document.documentElement.scrollWidth,
   viewport:document.documentElement.clientWidth,
   bodyWidth:document.body.scrollWidth,
   title:document.title,
   heading:document.querySelector('h1')?.textContent?.trim(),
   brokenImages:[...document.querySelectorAll('img')].filter(img=>!img.complete||img.naturalWidth===0).map(img=>img.src),
   links:[...document.querySelectorAll('a[href="#"]')].length
 }));
 assert.ok(pageInfo.viewport===width, 'viewport width mismatch '+JSON.stringify(pageInfo));
 assert.ok(pageInfo.docWidth<=width+1, 'horizontal page overflow '+JSON.stringify(pageInfo));
 assert.ok(pageInfo.bodyWidth<=width+1, 'body overflow '+JSON.stringify(pageInfo));
 assert.ok(pageInfo.title.includes('QORVEX'), 'QORVEX title missing');
 if(path==='/'){
   const visual=await page.evaluate(()=>{
     const hero=document.querySelector('.home-hero');
     const heading=hero?.querySelector('h1');
     const copper=heading?.querySelector('em');
     const plate=hero?.querySelector('.device-plane');
     return {
       copy:heading?.innerText?.replace(/\s+/g,' ').trim(),
       grid:getComputedStyle(hero,'::before').backgroundImage,
       copper:copper?getComputedStyle(copper).color:null,
       cardTransform:plate?getComputedStyle(plate).transform:null,
       layers:hero?.querySelectorAll('.device-plane,.device-back-card').length,
     };
   });
   assert.match(visual.copy??'',/BUILD WHAT\s+COMES NEXT\./,'hero headline wording changed');
   assert.ok(visual.grid.includes('linear-gradient'),'architectural grid background missing');
   assert.equal(visual.copper,'rgb(197, 141, 95)','copper headline color mismatch');
   assert.ok(visual.cardTransform&&visual.cardTransform!=='none','tilted Q card missing');
   assert.equal(visual.layers,2,'Q card layered construction missing');
   assert.equal(await page.locator('.home-prelude,.home-eyebrow,.device-top,.device-footer,.home-herobar>span').count(),0,'redundant landing-page microcopy reappeared');
   assert.equal(await page.locator('.home-hero .home-actions a').count(),2,'hero CTAs unexpectedly changed');
   assert.equal(await page.locator('.home-intro p').textContent(),'We explore what could exist, challenge what already does, and engineer technology that moves the world forward.','main introduction changed');
   assert.equal(await page.locator('.home-herobar a[href="#home-introduction"]').count(),1,'scroll navigation missing');
   const fold=await page.evaluate(()=>({
     nextTop:document.querySelector('.home-statement')?.getBoundingClientRect().top,
     heroBottom:document.querySelector('.home-hero')?.getBoundingClientRect().bottom,
     screen:window.innerHeight
   }));
   assert.ok(fold.nextTop>=fold.screen-1,'cream section visible before scrolling: '+JSON.stringify(fold));
   assert.ok(Math.abs(fold.heroBottom-fold.nextTop)<=2,'gap between hero and next section');
 }
 assert.ok(pageInfo.heading?.length>5,'page heading missing');
 assert.deepEqual(pageInfo.brokenImages,[], 'broken images');
 assert.equal(pageInfo.links,0,'dead # anchor(s)');
 assert.deepEqual(failures,[], 'page errors');
 const slug=path==='/'?'home':path.slice(1).replaceAll('/','-');
 if((width===320||width===390||width===1440) && !path.startsWith('/notes/'))await page.screenshot({path:'qa-output/'+slug+'-'+width+'-full.png',fullPage:true});
 console.log(JSON.stringify({route:path,width,pass:true,title:pageInfo.title,overflow:false}));
 passed++;
}

for(const width of widths){
 const page=await browser.newPage({viewport:{width,height:875},deviceScaleFactor:1,hasTouch:width<=430,isMobile:width<=430});
 page.setDefaultTimeout(15000);
 try{await check(page,'/',width);}catch(error){errors.push({path:'/',width,error:String(error)});console.error('FAILED home '+width,error);}
 await page.close();
}

for(const path of paths.filter(p=>p!=='/')){
 for(const width of [320,390,430,768,1440]){
  const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1,hasTouch:width<=430,isMobile:width<=430});
  page.setDefaultTimeout(15000);
  try{await check(page,path,width);}catch(error){errors.push({path,width,error:String(error)});console.error('FAILED '+path+' '+width,error);}
  await page.close();
 }
}

// Confirm first-fold behavior at actual desktop/laptop and phone viewport heights.
for(const [width,height] of [[1728,864],[1440,900],[1366,768],[390,844],[320,640]]){
  const page=await browser.newPage({viewport:{width,height},isMobile:width<=430,hasTouch:width<=430});
  try{
    await page.goto(origin,{waitUntil:'domcontentloaded'});
    await page.evaluate(()=>document.fonts.ready);
    const bounds=await page.evaluate(()=>({
      nextTop:document.querySelector('.home-statement').getBoundingClientRect().top,
      heroBottom:document.querySelector('.home-hero').getBoundingClientRect().bottom,
      scrollTop:document.documentElement.scrollTop,
      scrollWidth:document.documentElement.scrollWidth,
      clientWidth:document.documentElement.clientWidth
    }));
    assert.ok(bounds.nextTop>=height-1,'cream section entered first viewport at '+width+'x'+height+': '+JSON.stringify(bounds));
    assert.equal(bounds.scrollTop,0,'unexpected initial scroll position');
    assert.ok(bounds.scrollWidth<=bounds.clientWidth+1,'horizontal overflow at '+width+'x'+height);
    if(width>960){
      const arrow=await page.locator('.home-herobar a').boundingBox();
      assert.ok(arrow&&arrow.y+arrow.height<=height+1,'scroll cue outside initial desktop screen');
    }
    await page.screenshot({path:'qa-output/home-first-fold-'+width+'x'+height+'.png'});
    console.log('FIRST FOLD PASS '+width+'x'+height+' - next section starts '+Math.round(bounds.nextTop)+'px down');
    passed++;
  }catch(error){errors.push({test:'first-fold',width,height,error:String(error)});console.error('FAILED fold '+width+'x'+height,error);}
  await page.close();
}

// Verify actual site navigation, browser history and interactive controls.
const mobile=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
try{
 await mobile.goto(origin,{waitUntil:'domcontentloaded'});
 const menu=mobile.getByRole('button',{name:'Open menu'});
 await menu.click();
 assert.equal(await mobile.getByRole('button',{name:'Close menu'}).getAttribute('aria-expanded'),'true');
 await mobile.getByRole('navigation',{name:'Main navigation'}).getByRole('link',{name:'Company'}).click();
 await mobile.getByRole('heading',{level:1}).waitFor({state:'visible'});
 assert.equal(new URL(mobile.url()).pathname,'/company');
 assert.equal(await mobile.getByRole('button',{name:'Open menu'}).getAttribute('aria-expanded'),'false');
 await mobile.goBack();
 assert.equal(new URL(mobile.url()).pathname,'/');
 await mobile.goto(origin+'/approach',{waitUntil:'domcontentloaded'});
 await mobile.locator('.workbench-step').nth(2).click();
 assert.equal(await mobile.locator('.workbench-step').nth(2).getAttribute('aria-selected'),'true');
 assert.match(await mobile.locator('.workbench-copy h2').textContent(),/Give the idea/);
 await mobile.goto(origin+'/cortex',{waitUntil:'domcontentloaded'});
 await mobile.locator('.cx-tab').nth(2).click();
 assert.equal(await mobile.locator('.cx-tab').nth(2).getAttribute('aria-selected'),'true');
 assert.match(await mobile.locator('.cx-layer-copy').textContent(),/Intelligence people can use/);
 await mobile.goto(origin+'/notes',{waitUntil:'domcontentloaded'});
 await mobile.getByRole('button',{name:'Engineering'}).click();
 assert.equal(await mobile.locator('.notes-index-item').count(),1);
 await mobile.locator('.notes-index-item').click();
 assert.ok(new URL(mobile.url()).pathname.includes('/notes/craft-is-a-technical-decision'));
 await mobile.getByRole('link',{name:/Back to Field Notes/}).click();
 assert.equal(new URL(mobile.url()).pathname,'/notes');
 await mobile.goto(origin+'/nonexistent-page',{waitUntil:'domcontentloaded'});
 assert.match(await mobile.locator('h1').textContent(),/This path goes/);
 console.log('INTERACTION CHECKS PASS: mobile menu, history, tabs, articles, routing, 404');
 passed++;
}catch(error){errors.push({test:'interactions',error:String(error)});console.error('FAILED interactions',error);}
await mobile.close();
await browser.close();
console.log('TOTAL PASSED: '+passed);
if(errors.length){console.error('FAILURES '+JSON.stringify(errors,null,2));process.exitCode=1;}
