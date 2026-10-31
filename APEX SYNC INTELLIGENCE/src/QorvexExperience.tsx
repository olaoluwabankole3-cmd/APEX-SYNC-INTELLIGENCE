import { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight,
  Check, ChevronDown, Compass, CornerDownRight, Crosshair, Menu, MoveUpRight,
  Network, Radio, ShieldCheck, X,
} from 'lucide-react';

type ProcessKey = 'quest' | 'vision' | 'execution' | 'impact';
type LayerKey = 'connect' | 'understand' | 'support';

const process: { key: ProcessKey; index: string; title: string; headline: string; body: string; detail: string }[] = [
  { key: 'quest', index: '01', title: 'Quest', headline: 'Ask a better question.', body: 'Progress starts by looking closely at what is not working—and refusing to accept the limits of what already exists.', detail: 'EXPLORE / QUESTION / DISCOVER' },
  { key: 'vision', index: '02', title: 'Vision', headline: 'See beyond the obvious.', body: 'We connect the dots between emerging needs, complex systems and overlooked possibilities to imagine something worth creating.', detail: 'FRAME / ENVISION / DESIGN' },
  { key: 'execution', index: '03', title: 'Execution', headline: 'Make the idea real.', body: 'Ambition means little without engineering. We develop, test and refine solutions until the underlying promise becomes useful technology.', detail: 'ENGINEER / TEST / ITERATE' },
  { key: 'impact', index: '04', title: 'Impact', headline: 'Build something that matters.', body: 'The measure of innovation is not complexity or hype, but the value it creates for people and the systems they depend on.', detail: 'SOLVE / IMPROVE / LEARN' },
];

const intelligenceLayers: {key: LayerKey; label: string; title: string; text: string; note: string}[] = [
  { key:'connect', label:'01 / CONNECT', title:'One connected picture.', text:'CORTEX is designed to connect information across existing institutional systems, preserving the relationships and context isolated reports can miss.', note:'DATA FOUNDATION' },
  { key:'understand', label:'02 / UNDERSTAND', title:'From data to context.', text:'The proposed intelligence layer brings together organizational memory, relationships, risk signals and opportunities to support a more complete understanding.', note:'INTELLIGENCE CORE' },
  { key:'support', label:'03 / SUPPORT', title:'Clarity for the next decision.', text:'Evidence-grounded insights and authorized workflows are intended to help people make better decisions—with human oversight and accountable execution.', note:'EXPERIENCE LAYER' },
];

const notes = [
  {
    id:'01',
    type:'A POINT OF VIEW',
    title:'The future is a construction project.',
    lead:'Innovation is not complete when an idea sounds compelling. It is complete only when something better exists because of it.',
    paragraphs:[
      'There is a difference between predicting change and producing it. The first can be persuasive. The second demands research, engineering, uncomfortable questions, and an appetite for iteration.',
      'At QORVEX, we begin with the problem. We examine where existing systems fall short, imagine what better could look like, and work backward to the technology needed to make it useful.',
      'Quest sets the direction. Vision gives it shape. Execution makes it tangible. Impact determines whether it was worth building.'
    ]
  },
  {
    id:'02',
    type:'ON INTELLIGENCE',
    title:'More information is not the same as more understanding.',
    lead:'A system can contain an enormous amount of data and still struggle to explain what actually matters.',
    paragraphs:[
      'Large organizations rely on information distributed across many platforms. Each system may be excellent at its own job, while the connections between them remain difficult to see.',
      'Our working thesis behind CORTEX is that connecting information with its wider institutional context can help people understand relationships, recognize risk, and identify opportunities that isolated views might miss.',
      'The goal is not to replace people’s judgment. It is to give that judgment a clearer, more reliable foundation.'
    ]
  },
];

function Mark({ className = '' }: { className?: string }) {
  return <img className={className} src="/qorvex-emblem.svg" width="210" height="180" alt="" decoding="async" />;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update=()=>setScrolled(window.scrollY > 16);
    update();
    window.addEventListener('scroll',update,{passive:true});
    return ()=>window.removeEventListener('scroll',update);
  },[]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent)=>{if(e.key==='Escape')setOpen(false);};
    window.addEventListener('keydown',onKey);
    return ()=>window.removeEventListener('keydown',onKey);
  },[open]);
  const close=()=>setOpen(false);
  return <>
    <header className={scrolled?'q-header is-scrolled':'q-header'}>
      <div className="q-header-inner frame">
        <a className="q-logo" href="#top" onClick={close} aria-label="QORVEX home">
          <img src="/qorvex-wordmark.svg" alt="QORVEX" width="175" height="37" />
        </a>
        <nav className={open ? 'q-navigation is-open' : 'q-navigation'} aria-label="Main navigation" id="site-navigation">
          <a href="#company" onClick={close}>The company</a>
          <a href="#approach" onClick={close}>Our approach</a>
          <a href="#cortex" onClick={close}>CORTEX</a>
          <a href="#notes" onClick={close}>Field notes</a>
          <a href="#connect" className="nav-special" onClick={close}>Connect <ArrowUpRight size={15} aria-hidden="true"/></a>
        </nav>
        <button className="nav-toggle" aria-expanded={open} aria-controls="site-navigation" aria-label={open ? 'Close menu' : 'Open menu'} onClick={()=>setOpen(v=>!v)}>
          {open ? <X size={23} aria-hidden="true"/> : <Menu size={23} aria-hidden="true"/>}
        </button>
      </div>
    </header>
    {open && <button className="nav-scrim" onClick={close} aria-label="Close navigation" tabIndex={-1}/>}
  </>;
}

function Hero() {
  return <section className="hero-v2" id="top" aria-labelledby="hero-title">
    <div className="hero-tint" aria-hidden="true"/>
    <div className="hero-lead frame">
      <span>INDEPENDENT TECHNOLOGY & INNOVATION</span>
      <span className="hero-lead-right">Q / V / E <span>—</span> ESTABLISHED IN POSSIBILITY</span>
    </div>
    <div className="hero-stage frame">
      <div className="hero-words">
        <p className="eyebrow eyebrow-copper"><span className="mini-line"/> THE NEXT IS OUR STARTING POINT</p>
        <h1 id="hero-title">BUILD<br/>WHAT<br/><span>COMES NEXT<span className="hero-period">.</span></span></h1>
        <div className="hero-under">
          <div className="hero-under-rule" aria-hidden="true"/>
          <p>We pursue the possibilities others have yet to build. Through purposeful technology, rigorous engineering and a refusal to stand still.</p>
          <a href="#company" className="circular-cta" aria-label="Explore QORVEX"><ArrowDownRight size={26} strokeWidth={1.4} aria-hidden="true"/></a>
        </div>
      </div>
      <div className="hero-signature" aria-hidden="true">
        <div className="signature-measure"><span>REF / QX — 001</span><span>FIG. 01</span></div>
        <div className="signature-ring outer-ring"/><div className="signature-ring inner-ring"/>
        <div className="signature-target"><div className="signature-crosshairs"/><Mark className="signature-mark"/></div>
        <div className="signature-annot"><span>DESIGNED TO MOVE FORWARD</span><span>QUEST / VISION / EXECUTION</span></div>
      </div>
    </div>
    <div className="hero-foot frame"><span>THE FUTURE SHOULD NOT SIMPLY BE ANTICIPATED. IT SHOULD BE BUILT.</span><a href="#company">SCROLL TO EXPLORE <ArrowDown size={14} aria-hidden="true"/></a></div>
  </section>;
}

function Statement() {
  return <section className="statement-v2" id="company" aria-labelledby="company-title">
    <div className="frame statement-inner">
      <div className="section-aside"><span className="section-number">01 — THE COMPANY</span><span className="section-index">A STATEMENT OF INTENT</span></div>
      <div className="statement-main">
        <span className="small-quote-mark" aria-hidden="true">“</span>
        <h2 id="company-title">The future isn't something we wait for. <em>It's something we make.</em></h2>
        <div className="statement-detail">
          <div className="statement-marker"><span>QOR</span><span className="v-line"/><span>VEX</span></div>
          <p>QORVEX is an independent technology and innovation company built on a simple conviction: meaningful progress is made by people who question limitations, see possibilities, and turn ideas into useful systems.</p>
        </div>
      </div>
    </div>
    <div className="statement-bottom frame"><span>QUEST</span><span>VISION</span><span>EXECUTION</span><span>IMPACT</span></div>
  </section>;
}

function Method() {
  const [selected,setSelected]=useState<ProcessKey>('quest');
  const current=process.find(x=>x.key===selected)!;
  const idx=process.findIndex(x=>x.key===selected);
  return <section className="method-v2" id="approach" aria-labelledby="approach-title">
    <div className="frame">
      <div className="section-topline"><span>02 — THE WAY WE WORK</span><span>OUR METHOD / FOUR PRINCIPLES</span></div>
      <div className="method-title-row">
        <h2 id="approach-title">Curiosity starts it.<br/><em>Craft brings it to life.</em></h2>
        <p>Four connected disciplines. One commitment to building what matters.</p>
      </div>
      <div className="method-panel">
        <div className="method-tabs" role="tablist" aria-label="QORVEX principles">
          {process.map(step=><button key={step.key} id={'tab-'+step.key} type="button" role="tab" aria-selected={selected===step.key} aria-controls="principle-panel" className={selected===step.key?'method-tab active':'method-tab'} onClick={()=>setSelected(step.key)}>
            <span className="method-tab-num">{step.index}</span><span>{step.title}</span><ArrowUpRight size={18} aria-hidden="true"/>
          </button>)}
        </div>
        <div className="method-content" role="tabpanel" id="principle-panel" aria-labelledby={'tab-'+selected} key={selected}>
          <div className="method-content-top"><span>THE QORVEX METHOD</span><span>{current.index} / 04</span></div>
          <div className="method-figure" aria-hidden="true">
            <div className={'method-graphic stage-'+idx}>
              <div className="graphic-axis h"/><div className="graphic-axis v"/>
              <div className="graphic-square s1"/><div className="graphic-square s2"/><div className="graphic-square s3"/>
              <div className="graphic-center"/><span className="graphic-label">Q / V / E</span>
            </div>
          </div>
          <span className="method-mini">{current.detail}</span>
          <h3>{current.headline}</h3>
          <p>{current.body}</p>
          <button className="method-next" type="button" onClick={()=>setSelected(process[(idx+1)%4].key)}>
            EXPLORE NEXT PRINCIPLE <ArrowRight size={16} aria-hidden="true"/>
          </button>
        </div>
      </div>
    </div>
  </section>;
}

function Cortex() {
  const [selected,setSelected]=useState<LayerKey>('connect');
  const layer=intelligenceLayers.find(x=>x.key===selected)!;
  return <section className="cortex-v2" id="cortex" aria-labelledby="cortex-title">
    <div className="frame">
      <div className="section-topline"><span>03 — CURRENT FOCUS</span><span>ONE CURRENT PRODUCT / LONG-TERM VISION</span></div>
      <div className="cortex-head">
        <div><span className="overline"><span className="status-light"/> PRODUCT IN DEVELOPMENT</span><h2 id="cortex-title">CORTEX<span>.</span></h2></div>
        <div className="cortex-head-side"><span>A QORVEX PRODUCT</span><p>Enterprise intelligence,<br/>connected by design.</p></div>
      </div>
      <div className="cortex-body">
        <div className="cortex-canvas">
          <div className="cortex-canvas-top"><span>CONCEPTUAL SYSTEM VIEW / NOT A PRODUCT SCREENSHOT</span><span>QX / CX—01</span></div>
          <svg className="cortex-network" viewBox="0 0 650 450" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
            <g stroke="#A7B0B8" strokeOpacity=".22" strokeWidth="1"><path d="M45 140 H605 M45 225 H605 M45 310 H605 M150 45 V405 M325 45 V405 M500 45 V405" strokeDasharray="2 7"/></g>
            <g stroke="#A7B0B8" strokeOpacity=".4" strokeWidth="1.5">
              <path d="M156 105 L323 225 L497 102 M156 345 L323 225 L497 347 M156 105 L156 345 M497 102 L497 347" />
            </g>
            <g stroke="#C98A55" strokeWidth="1.5"><circle cx="325" cy="225" r="85" strokeOpacity=".55"/><circle cx="325" cy="225" r="113" strokeOpacity=".22"/><circle cx="325" cy="225" r="55" strokeOpacity=".7"/></g>
            <g fill="#24231F" stroke="#B6ADA2" strokeWidth="1.5"><circle cx="156" cy="105" r="23"/><circle cx="497" cy="102" r="23"/><circle cx="156" cy="345" r="23"/><circle cx="497" cy="347" r="23"/></g>
            <g fill="#E5E1D8"><circle cx="156" cy="105" r="5"/><circle cx="497" cy="102" r="5"/><circle cx="156" cy="345" r="5"/><circle cx="497" cy="347" r="5"/></g>
            <circle cx="325" cy="225" r="28" fill="#B4784C" fillOpacity=".17" stroke="#C98A55" strokeWidth="2"/>
            <path d="M312 218 H332 V231 H312 Z M326 229 L340 244" stroke="#F5F1E8" strokeWidth="3"/>
            <g fill="#B6ADA2" fontFamily="Inter, sans-serif" fontSize="11" letterSpacing="2"><text x="95" y="57">SYSTEMS</text><text x="465" y="58">DOCUMENTS</text><text x="104" y="398">OPERATIONS</text><text x="454" y="399">RELATIONSHIPS</text><text x="283" y="380" fill="#C98A55">CORTEX</text></g>
          </svg>
          <div className="cortex-canvas-foot"><span>DATA</span><span>CONTEXT</span><span>INTELLIGENCE</span></div>
        </div>
        <div className="cortex-explain">
          <p className="cortex-intro">Connected information.<br/><span>Clearer understanding.</span></p>
          <p className="cortex-long">CORTEX is envisioned as an intelligence layer across institutional systems. Its goal is to bring fragmented information together and help authorized teams understand risks, relationships and opportunities with greater context.</p>
          <div className="cortex-steps" role="group" aria-label="CORTEX intelligence layers">
            {intelligenceLayers.map(item=><button key={item.key} type="button" className={selected===item.key?'cortex-step selected':'cortex-step'} aria-pressed={selected===item.key} onClick={()=>setSelected(item.key)}>
              <span>{item.label}</span><ChevronDown size={16} aria-hidden="true"/></button>)}
          </div>
          <div className="cortex-layer" key={layer.key}><span>{layer.note}</span><h3>{layer.title}</h3><p>{layer.text}</p></div>
          <p className="cortex-disclaimer"><ShieldCheck size={16} aria-hidden="true"/> Designed around evidence, access control and human oversight. Initially focused on financial institutions.</p>
        </div>
      </div>
    </div>
  </section>;
}

function FieldNotes() {
  const [open,setOpen]=useState<string|null>(null);
  return <section className="notes-v2" id="notes" aria-labelledby="notes-title">
    <div className="frame">
      <div className="section-topline"><span>04 — FROM THE NOTEBOOK</span><span>IDEAS WORTH EXPLORING</span></div>
      <div className="notes-head"><h2 id="notes-title">Thoughts for<br/><em>what comes next.</em></h2><p>Not headlines for the sake of activity. A place for the ideas and questions behind the work. New notes will be published as there is something worth saying.</p></div>
      <div className="notes-list">
        {notes.map(note=><article className="note" key={note.id}>
          <div className="note-index"><span>{note.id}</span><span>FIELD NOTE</span></div>
          <div className="note-main"><span className="note-type">{note.type}</span><h3>{note.title}</h3><p>{note.lead}</p>
          {open===note.id && <div className="note-full" id={'note-'+note.id}>{note.paragraphs.map((paragraph,i)=><p key={i}>{paragraph}</p>)}</div>}
          </div>
          <button type="button" className="note-button" aria-expanded={open===note.id} aria-controls={'note-'+note.id} onClick={()=>setOpen(current=>current===note.id?null:note.id)} aria-label={(open===note.id?'Close':'Read')+' note '+note.id}>{open===note.id?<X size={19} aria-hidden="true"/>:<ArrowUpRight size={21} aria-hidden="true"/>}</button>
        </article>)}
      </div>
    </div>
  </section>;
}

function End() {
  return <>
    <section className="people-v2" id="careers" aria-labelledby="people-title">
      <div className="frame people-inner"><span className="section-number">05 — PEOPLE</span><h2 id="people-title">Good work is a<br/><em>collective act.</em></h2><div><p>Ambition needs curious minds and people who care about the details. Confirmed opportunities to work with QORVEX will be shared here as the company grows.</p><span>NO OPEN ROLES ARE CURRENTLY ADVERTISED.</span></div></div>
    </section>
    <section className="end-v2" id="connect" aria-labelledby="end-title">
      <div className="frame">
        <div className="section-topline"><span>06 — THE NEXT CHAPTER</span><span>QORVEX / FORWARD</span></div>
        <div className="end-core"><div className="end-ring" aria-hidden="true"><Mark/></div><p>THE QUESTION ISN'T WHAT THE FUTURE WILL LOOK LIKE.</p><h2 id="end-title">It's what we'll<br/><em>build next.</em></h2><p className="end-explain">QORVEX is developing its corporate presence. Verified contact channels will appear here once available.</p></div>
      </div>
    </section>
  </>;
}

export default function QorvexExperience() {
  const [progress,setProgress]=useState(0);
  useEffect(()=>{
    let frame=0;
    const update=()=>{
      if(frame)return;
      frame=window.requestAnimationFrame(()=>{
        const max=document.documentElement.scrollHeight-window.innerHeight;
        setProgress(max>0?Math.max(0,Math.min(100,window.scrollY/max*100)):0);
        frame=0;
      });
    };
    update();
    window.addEventListener('scroll',update,{passive:true});
    window.addEventListener('resize',update);
    return ()=>{window.removeEventListener('scroll',update);window.removeEventListener('resize',update);if(frame)window.cancelAnimationFrame(frame);};
  },[]);
  return <div className="qorvex-v2">
    <a className="skip-link" href="#content">Skip to content</a>
    <div className="progress-track" aria-hidden="true"><span style={{width:progress+'%'}}/></div>
    <Header/>
    <main id="content"><Hero/><Statement/><Method/><Cortex/><FieldNotes/><End/></main>
    <footer className="footer-v2"><div className="frame footer-inner">
      <div className="footer-top"><a href="#top" className="footer-logo" aria-label="QORVEX home"><img src="/qorvex-wordmark.svg" alt="QORVEX" width="175" height="37"/></a><p>Independent technology.<br/>Meaningful innovation.<br/>Disciplined execution.</p><a className="return-top" href="#top">BACK TO TOP <MoveUpRight size={16} aria-hidden="true"/></a></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} QORVEX</span><span>BUILD WHAT COMES NEXT.</span><span>QUEST / VISION / EXECUTION</span></div>
    </div></footer>
  </div>;
}
