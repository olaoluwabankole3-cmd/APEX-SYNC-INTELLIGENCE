import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

const base='http://127.0.0.1:4173';
const sizes=[320,360,390,430,768,1024,1440];
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const issues=[];
await mkdir('qa-output',{recursive:true});

for(const width of sizes){
  const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1,isMobile:width<=430,hasTouch:width<=430});
  const errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  try {
    await page.goto(base,{waitUntil:'networkidle',timeout:45000});
    await page.locator('h1').waitFor({state:'visible'});
    await page.screenshot({path:'qa-output/v2-'+width+'-hero.png'});
    if(width===390||width===1440)await page.screenshot({path:'qa-output/v2-'+width+'-full.png',fullPage:true});
    const dimensions=await page.evaluate(()=>({
      width:document.documentElement.clientWidth,
      scrollWidth:document.documentElement.scrollWidth,
      bodyScrollWidth:document.body.scrollWidth,
      title:document.title,
      h1:document.querySelector('h1')?.textContent?.trim(),
      viewportWidth:window.innerWidth,
      smallTargets:[...document.querySelectorAll('button')].filter(e=>getComputedStyle(e).display!=='none').map(e=>({label:e.getAttribute('aria-label')||e.textContent?.trim().slice(0,30),rect:e.getBoundingClientRect().toJSON()})).filter(x=>x.rect.width>0&&x.rect.width<32)
    }));
    assert.equal(dimensions.width,width, 'document viewport mismatch');
    assert.ok(dimensions.scrollWidth<=width+1,'document overflow '+JSON.stringify(dimensions));
    assert.ok(dimensions.bodyScrollWidth<=width+1,'body overflow '+JSON.stringify(dimensions));
    assert.ok(dimensions.h1?.includes('BUILD')&&dimensions.h1.includes('NEXT'),'hero copy missing');
    assert.ok(dimensions.title.includes('QORVEX'),'title missing');
    assert.equal(errors.length,0,'unhandled browser errors '+errors.join(' / '));

    if(width<=430){
      const toggle=page.getByRole('button',{name:'Open menu'});
      await toggle.click();
      await page.getByRole('navigation',{name:'Main navigation'}).getByText('CORTEX',{exact:true}).click();
      assert.ok(page.url().includes('#cortex'),'mobile navigation failed');
      assert.equal(await page.getByRole('button',{name:'Open menu'}).getAttribute('aria-expanded'),'false','mobile menu did not close');
    }
    if(width===390){
      await page.getByRole('tab',{name:/02 Vision/i}).click();
      assert.equal(await page.getByRole('tab',{name:/02 Vision/i}).getAttribute('aria-selected'),'true','method interactive tab failed');
      await page.getByRole('button',{name:/02 \/ UNDERSTAND/}).click();
      assert.ok((await page.locator('.cortex-layer').textContent())?.includes('From data to context'),'CORTEX interaction failed');
      const note=page.getByRole('button',{name:'Read note 01'});
      await note.click();
      assert.ok(await page.locator('#note-01').isVisible(),'Field note did not open');
      await page.getByRole('button',{name:'Close note 01'}).click();
    }
    console.log(JSON.stringify({width,pass:true,documentWidth:dimensions.width,scrollWidth:dimensions.scrollWidth,smallTargets:dimensions.smallTargets}));
  }catch(error){issues.push({width,error:String(error),stack:error?.stack});console.error('FAILED '+width,error);}
  await page.close();
}
await browser.close();
if(issues.length){console.error(JSON.stringify(issues,null,2));process.exitCode=1;}
