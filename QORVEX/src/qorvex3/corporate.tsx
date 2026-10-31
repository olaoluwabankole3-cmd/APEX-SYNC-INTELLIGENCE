import { useState } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, Compass, Crosshair, Layers3, ShieldCheck } from 'lucide-react';
import { NextChapter, PageTitle, SceneLabel, SiteLink, TextLink } from './layout';
import { pillars } from './content';

export function CompanyPage(){
  return <>
    <section className="company-hero warm-section">
      <div className="page-frame">
        <div className="page-toprail"><span>QORVEX / THE COMPANY</span><span>01 — WHO WE ARE</span></div>
        <div className="company-hero-inner">
          <div><span className="overline-copper">AN INDEPENDENT TECHNOLOGY & INNOVATION COMPANY</span><PageTitle>BUILT ON<br/>THE BELIEF<br/><em>IN BETTER.</em></PageTitle><p>We are here to ask important questions, imagine new possibilities, and build the technology that can make them real.</p></div>
          <div className="company-monogram" aria-hidden="true"><div className="company-monogram-grid"/><img src="/qorvex-emblem.svg" alt=""/><span>FIG. 01 / THE MARK</span></div>
        </div>
      </div>
    </section>

    <section className="company-philosophy dark-section section-space">
      <div className="page-frame company-philosophy-grid">
        <SceneLabel number="01">OUR CONVICTION</SceneLabel>
        <div><h2>The future should not simply be anticipated.<br/><em>It should be built.</em></h2><div className="company-essay"><span>WHAT WE BELIEVE</span><p>Meaningful innovation begins with understanding where current systems fall short. It demands curiosity to see beyond established limitations—and discipline to make a better alternative work in the real world.</p><p>Our ambition is not to occupy one category of technology. QORVEX is being built to explore problems across industries, develop original intellectual property, and create products with lasting value.</p></div></div>
      </div>
    </section>

    <section className="company-name light-stone-section section-space">
      <div className="page-frame">
        <div className="section-rail"><SceneLabel number="02">BEHIND THE NAME</SceneLabel><span>AN INTENTIONAL IDENTITY</span></div>
        <h2 className="company-name-title">QOR<span>VEX</span></h2>
        <div className="company-name-grid"><div className="name-part"><span>QOR / 01</span><h3>Quest.</h3><p>The relentless pursuit of new possibilities.</p></div><div className="name-part"><span>VEX / 02</span><h3>Vision + Execution.</h3><p>The ability to see what could exist—and the determination to build it.</p></div></div>
        <p className="company-name-note">This is the company's intended brand interpretation, not a literal etymology. The QORVEX name stands independently.</p>
      </div>
    </section>

    <section className="company-value warm-section section-space">
      <div className="page-frame value-layout">
        <div className="value-head"><SceneLabel number="03">THE STANDARD</SceneLabel><h2>Ambition is only the beginning.</h2></div>
        <div className="value-content"><p>We want our work to be recognized not only for the scale of its thinking, but for its clarity, reliability and usefulness. That means taking the details seriously.</p>
          <div className="value-lines">{[
            ['01','Intelligence','Think deeply before building.'],
            ['02','Precision','Make decisions deliberately.'],
            ['03','Integrity','Earn trust through the work.'],
            ['04','Impact','Create value that lasts.']
          ].map(([num,title,text])=><div key={num}><span>{num}</span><strong>{title}</strong><p>{text}</p></div>)}</div>
          <TextLink to="/approach">Discover how we work</TextLink>
        </div>
      </div>
    </section>
    <NextChapter number="04" eyebrow="THE QORVEX METHOD" title="The discipline behind possibility." to="/approach"/>
  </>;
}

export function ApproachPage(){
  const [active,setActive]=useState(0);
  const phase=pillars[active];
  const next=()=>setActive((active+1)%pillars.length);
  return <>
    <section className="approach-hero dark-section">
      <div className="page-frame">
        <div className="page-toprail"><span>QORVEX / OUR APPROACH</span><span>02 — THE METHOD</span></div>
        <div className="approach-hero-grid"><div><span className="overline-copper">CURIOUS MINDS. DISCIPLINED EXECUTION.</span><PageTitle>FOUR<br/>DISCIPLINES.<br/><em>ONE DIRECTION.</em></PageTitle></div><div className="approach-hero-side"><div className="approach-compass" aria-hidden="true"><span>Q</span><span>V</span><span>E</span><span>I</span><div/></div><p>Good technology isn't an accident. We work from the problem to the possibility, from the idea to the evidence, and from the outcome to the next question.</p></div></div>
      </div>
    </section>

    <section className="approach-workbench light-stone-section section-space">
      <div className="page-frame">
        <div className="section-rail"><SceneLabel number="01">THE WORKING METHOD</SceneLabel><span>SELECT A PRINCIPLE TO EXPLORE</span></div>
        <div className="workbench">
          <div className="workbench-steps" role="tablist" aria-label="Four QORVEX principles">
            {pillars.map((item,i)=><button key={item.id} type="button" role="tab" aria-selected={active===i} aria-controls="approach-tab-panel" id={'approach-tab-'+i} onClick={()=>setActive(i)} className={active===i?'workbench-step active':'workbench-step'}>
              <span>{item.id} / 04</span><strong>{item.name}</strong><ArrowUpRight size={19} aria-hidden="true"/>
            </button>)}
          </div>
          <div className="workbench-display" id="approach-tab-panel" role="tabpanel" aria-labelledby={'approach-tab-'+active}>
            <div className="workbench-display-rail"><span>QORVEX / PRINCIPLE {phase.id}</span><span>IN FOCUS</span></div>
            <div className={'workbench-visual stage-'+active} aria-hidden="true"><span className="visual-circle c1"/><span className="visual-circle c2"/><span className="visual-square q1"/><span className="visual-square q2"/><span className="visual-core"/><span className="visual-grid-marker">Q / V / E</span></div>
            <div className="workbench-copy" key={phase.id}><span className="overline-copper">{phase.verb.toUpperCase()}</span><h2>{phase.headline}</h2><p>{phase.text}</p><div className="workbench-detailed">{phase.detail.split(' / ').map(step=><span key={step}>{step}</span>)}</div><button type="button" onClick={next}>NEXT PRINCIPLE <ArrowRight size={16}/></button></div>
          </div>
        </div>
      </div>
    </section>

    <section className="approach-discipline warm-section section-space">
      <div className="page-frame">
        <div className="section-rail"><SceneLabel number="02">HOW WE THINK</SceneLabel><span>BEYOND THE PROCESS</span></div>
        <h2 className="approach-large">It takes more than a bright idea to build something <em>worth trusting.</em></h2>
        <div className="approach-discipline-grid">{[
          {icon:Compass,label:'DISCOVERY',title:'Understand before acting.',body:'What is the real problem? Whose experience should improve? What assumptions must be tested first?'},
          {icon:Crosshair,label:'DIRECTION',title:'Design with intent.',body:'Technology choices follow the problem—not trends, appearances, or excitement alone.'},
          {icon:Layers3,label:'ENGINEERING',title:'Work in evidence.',body:'Prototypes, testing, operational constraints and iteration all matter to building something dependable.'},
          {icon:ShieldCheck,label:'RESPONSIBILITY',title:'Earn the right to be used.',body:'Security, transparency, accessibility and accountable human decisions belong at the foundation.'},
        ].map(item=>{const Icon=item.icon;return <article key={item.label}><span>{item.label}</span><Icon size={30} strokeWidth={1.4} aria-hidden="true"/><h3>{item.title}</h3><p>{item.body}</p></article>})}</div>
      </div>
    </section>

    <section className="approach-manifesto dark-section section-space">
      <div className="page-frame manifesto-grid"><SceneLabel number="03">THE OPERATING BELIEF</SceneLabel><div><h2>Ideas must be questioned.<br/>Systems must be tested.<br/><em>Outcomes must matter.</em></h2><TextLink to="/innovation">Explore our innovation philosophy</TextLink></div></div>
    </section>
    <NextChapter number="04" eyebrow="THE ENGINEERING MINDSET" title="Innovation without the noise." to="/innovation"/>
  </>;
}

export function InnovationPage(){
  return <>
    <section className="innovation-hero warm-section">
      <div className="page-frame">
        <div className="page-toprail"><span>QORVEX / INNOVATION</span><span>03 — RESEARCH & ENGINEERING</span></div>
        <div className="innovation-hero-grid">
          <div><span className="overline-copper">PROGRESS IS A PRACTICE</span><PageTitle>THINK<br/>BEYOND.<br/><em>BUILD BETTER.</em></PageTitle><p>We see innovation as a disciplined way of understanding meaningful problems and developing original technology to address them.</p></div>
          <div className="innovation-art" aria-hidden="true"><div className="innovation-art-grid"/><div className="innovation-drawing d1"/><div className="innovation-drawing d2"/><div className="innovation-drawing d3"/><div className="innovation-drawing-center"/><span>STUDY / FORM / FUNCTION</span></div>
        </div>
      </div>
    </section>

    <section className="innovation-thesis dark-section section-space">
      <div className="page-frame innovation-thesis-grid"><SceneLabel number="01">OUR POINT OF VIEW</SceneLabel><div><h2>Not innovation for the sake of innovation.</h2><p>Our starting point is always the problem. We seek opportunities where an intelligent solution could remove friction, reveal understanding, reduce complexity or help an important system work better.</p><p>QORVEX is built to remain open to different industries and technologies. The intention is to develop original products and intellectual property guided by evidence, not to promise activity in every sector.</p></div></div>
    </section>

    <section className="innovation-areas light-stone-section section-space">
      <div className="page-frame">
        <div className="section-rail"><SceneLabel number="02">AREAS OF INTEREST</SceneLabel><span>QUESTIONS THAT GUIDE EXPLORATION</span></div>
        <h2>What becomes possible<br/>when we <em>look closer?</em></h2>
        <div className="innovation-area-list">
          {[
            {num:'01',title:'Connected intelligence',prompt:'What important relationships become visible when isolated information begins to make sense together?',meta:'DATA / CONTEXT'},
            {num:'02',title:'Better institutional decisions',prompt:'How can systems present evidence and uncertainty so people act with greater clarity and accountability?',meta:'REASONING / TRUST'},
            {num:'03',title:'Engineering for complexity',prompt:'What does it take to make ambitious technology secure, accessible, resilient and useful in practice?',meta:'SYSTEMS / RELIABILITY'},
            {num:'04',title:'Opportunities worth building',prompt:'Which difficult, overlooked problems could become the starting points for original products?',meta:'RESEARCH / DISCOVERY'}
          ].map(item=><article key={item.num}><span>{item.num}</span><div><span>{item.meta}</span><h3>{item.title}</h3><p>{item.prompt}</p></div><ArrowDownRight size={24} strokeWidth={1.3} aria-hidden="true"/></article>)}
        </div>
      </div>
    </section>

    <section className="innovation-principles warm-section section-space">
      <div className="page-frame innovation-principles-grid">
        <div><SceneLabel number="03">THE STANDARD</SceneLabel><h2>Original thinking.<br/><em>Responsible building.</em></h2></div>
        <div><p>A technology company earns credibility through what it builds and how responsibly it builds it. Research and engineering must reinforce one another.</p><div className="innovation-checks">
          {['Problem-led exploration','Measurable, testable outcomes','Security and trust by design','Human oversight where decisions matter','Products built for long-term usefulness'].map(t=><div key={t}><Check size={18} aria-hidden="true"/><span>{t}</span></div>)}
        </div><TextLink to="/cortex">See our current product</TextLink></div>
      </div>
    </section>
    <NextChapter number="04" eyebrow="OUR CURRENT FOCUS" title="Meet the CORTEX vision." to="/cortex"/>
  </>;
}
