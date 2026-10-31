import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, Database, Eye, Fingerprint, GitBranch, Layers, LockKeyhole, ShieldCheck } from 'lucide-react';
import { cortexCapabilities, cortexLayers } from './content';
import { NextChapter, PageTitle, SceneLabel, SiteLink, TextLink } from './layout';

const nodes=[
  {name:'FINANCE',x:123,y:105},{name:'OPERATIONS',x:478,y:110},{name:'CUSTOMERS',x:87,y:343},
  {name:'DOCUMENTS',x:515,y:343},{name:'RISK',x:309,y:39}
];
function CortexGraph({active=0}:{active?:number}){
  const accent=['#D9A06F','#D8C9AE','#A7B0B8'][active];
  return <svg className="cx-graph" viewBox="0 0 620 460" fill="none" role="img" aria-label="Concept diagram: five institutional information sources are connected through CORTEX">
    <g stroke="#9B9B93" strokeWidth="1" strokeOpacity=".22"><path d="M24 64 H596 M24 149 H596 M24 234 H596 M24 319 H596 M24 404 H596 M108 23 V437 M209 23 V437 M310 23 V437 M411 23 V437 M512 23 V437" strokeDasharray="4 9"/></g>
    <g stroke={accent} strokeWidth="1.3" strokeOpacity=".56">
      <path d="M123 105 L310 225 L478 110 L310 225 L87 343 L310 225 L515 343 L310 225 L309 39 L310 225" />
      <path d="M123 105 L87 343 M478 110 L515 343" strokeDasharray="4 8" strokeOpacity=".45"/>
    </g>
    <circle cx="310" cy="225" r={active===1?117:93} stroke={accent} strokeOpacity=".33"/>
    <circle cx="310" cy="225" r="69" stroke={accent} strokeOpacity=".65"/>
    <circle cx="310" cy="225" r="39" fill="#342C24" stroke={accent} strokeWidth="2"/>
    <path d="M294 214 H314 V229 H294Z M310 225 L327 244" stroke="#F5F1E8" strokeWidth="3.7" strokeLinecap="square"/>
    {nodes.map((node,i)=><g key={node.name}>
      <circle cx={node.x} cy={node.y} r="27" fill="#252421" stroke="#989085" strokeWidth="1.5"/>
      <circle cx={node.x} cy={node.y} r={active===0?7:5} fill={active===0?accent:'#E5E1D8'}/>
      <text x={node.x} y={node.y+(i===4?-47:48)} textAnchor="middle" fontSize="10" fontFamily="monospace" letterSpacing="1" fill="#B9B0A4">{node.name}</text>
    </g>)}
    <text x="310" y="294" fontFamily="monospace" fontSize="11" letterSpacing="2" fill={accent} textAnchor="middle">CORTEX</text>
    <path d="M24 23 H46 M24 23 V45 M574 23 H596 V45 M24 416 V437 H46 M574 437 H596 V416" stroke="#A65A2E" strokeWidth="1.5"/>
  </svg>;
}

export function CortexPage(){
  const [active,setActive]=useState(0);
  const layer=cortexLayers[active];
  return <>
    <section className="cx-hero dark-section">
      <div className="page-frame">
        <div className="page-toprail"><span>QORVEX / CURRENT PRODUCT</span><span>04 — ENTERPRISE INTELLIGENCE</span></div>
        <div className="cx-hero-label"><span className="development-pill"><span/> IN DEVELOPMENT</span><span>INITIAL FOCUS / FINANCIAL INSTITUTIONS</span></div>
        <PageTitle>CORTEX<span>.</span></PageTitle>
        <div className="cx-hero-bottom"><h2>Intelligence, across the institution.</h2><p>An enterprise intelligence operating system designed to make disconnected information more connected, contextual and useful.</p></div>
        <div className="cx-hero-divider"><span>CONNECTED INTELLIGENCE</span><span>CONTEXTUAL REASONING</span><span>HUMAN OVERSIGHT</span></div>
      </div>
    </section>

    <section className="cx-problem warm-section section-space">
      <div className="page-frame cx-problem-grid">
        <SceneLabel number="01">THE CHALLENGE</SceneLabel>
        <div><h2>Many systems.<br/>One institution.<br/><em>Not always one picture.</em></h2>
          <div className="cx-problem-copy"><p>Financial, operational and organizational information often lives in separate environments. Each system may serve its purpose well, yet the relationships between them can remain difficult to understand.</p><p>CORTEX is intended to help close that gap by connecting relevant information and bringing institutional context into clearer view.</p></div>
        </div>
      </div>
    </section>

    <section className="cx-concept dark-section section-space">
      <div className="page-frame">
        <div className="section-rail"><SceneLabel number="02">THE CONCEPT</SceneLabel><span>AN INTELLIGENCE LAYER, NOT A SYSTEM REPLACEMENT</span></div>
        <div className="cx-concept-head"><h2>See how the parts<br/><em>connect.</em></h2><p>Explore the three foundations of the planned CORTEX architecture. This is a conceptual illustration, not a screenshot of completed software.</p></div>
        <div className="cx-explorer">
          <div className="cx-explorer-canvas">
            <div className="cx-canvas-rail"><span>INSTITUTIONAL INTELLIGENCE / CONCEPT</span><span>QX–CX / FIG. 02</span></div>
            <CortexGraph active={active}/>
            <div className="cx-canvas-foot"><span>CONNECT</span><span>UNDERSTAND</span><span>SUPPORT</span></div>
          </div>
          <div className="cx-explorer-info">
            <span className="overline-copper">THREE FOUNDATIONS / ONE SYSTEM</span>
            <div className="cx-tabs" role="tablist" aria-label="CORTEX architecture layers">
              {cortexLayers.map((item,i)=><button type="button" key={item.short} id={'cx-tab-'+i} role="tab" aria-selected={active===i} aria-controls="cx-layer-panel" className={active===i?'cx-tab selected':'cx-tab'} onClick={()=>setActive(i)}><span>0{i+1}</span><strong>{item.name}</strong><ArrowUpRight size={17} aria-hidden="true"/></button>)}
            </div>
            <div role="tabpanel" id="cx-layer-panel" aria-labelledby={'cx-tab-'+active} className="cx-layer-copy" key={active}>
              <span>{layer.short}</span><h3>{layer.title}</h3><p>{layer.body}</p><div className="cx-layer-output">{layer.outputs.map(value=><span key={value}><Check size={13} aria-hidden="true"/>{value}</span>)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cx-intelligence light-stone-section section-space">
      <div className="page-frame">
        <div className="section-rail"><SceneLabel number="03">FOUR DIMENSIONS</SceneLabel><span>THE INTELLIGENCE DIFFERENCE</span></div>
        <h2>Beyond isolated metrics.<br/><em>Toward understanding.</em></h2>
        <div className="cx-intelligence-list">
          {cortexCapabilities.map(item=><article key={item.number}><span>{item.number} / INTELLIGENCE</span><h3>{item.title}</h3><p>{item.description}</p><ArrowUpRight size={24} strokeWidth={1.25} aria-hidden="true"/></article>)}
        </div>
      </div>
    </section>

    <section className="cx-cycle warm-section section-space">
      <div className="page-frame">
        <div className="section-rail"><SceneLabel number="04">AN INTELLIGENCE CYCLE</SceneLabel><span>FROM OBSERVATION TO OUTCOME</span></div>
        <h2>Make understanding<br/><em>useful.</em></h2>
        <div className="cx-cycle-track">
          {['SEE','UNDERSTAND','FIND VALUE','DECIDE','EXECUTE','MEASURE','LEARN'].map((label,i)=><div key={label}><span>{String(i+1).padStart(2,'0')}</span><strong>{label}</strong>{i<6?<ArrowRight size={16} aria-hidden="true"/>:null}</div>)}
        </div>
        <p className="cx-cycle-caption">An intended operating cycle that connects observations to approved actions and measurable outcomes. Actual capabilities depend on implementation and institutional authorization.</p>
      </div>
    </section>

    <section className="cx-trust dark-section section-space">
      <div className="page-frame cx-trust-layout">
        <div><SceneLabel number="05">RESPONSIBILITY FIRST</SceneLabel><h2>Powerful intelligence.<br/><em>Accountable decisions.</em></h2><p>CORTEX is intended to assist—not replace—institutional decision-makers. It should not autonomously make consequential financial or compliance decisions without appropriate human authorization.</p></div>
        <div className="cx-trust-lines">
          {[
            {icon:LockKeyhole,title:'Secure by design',text:'Tenant isolation, access boundaries and responsible handling of sensitive institutional information are foundational requirements.'},
            {icon:GitBranch,title:'Traceable intelligence',text:'Data provenance, evidence and auditability should make it possible to understand how findings were formed.'},
            {icon:ShieldCheck,title:'Human in control',text:'Consequential actions require authorization, accountable workflows and appropriate review.'},
          ].map(row=>{const Icon=row.icon;return <article key={row.title}><Icon size={24} strokeWidth={1.4} aria-hidden="true"/><div><h3>{row.title}</h3><p>{row.text}</p></div></article>})}
        </div>
      </div>
    </section>

    <section className="cx-focus warm-section section-space">
      <div className="page-frame cx-focus-layout"><div><SceneLabel number="06">WHERE WE BEGIN</SceneLabel><h2>Starting with the complexity of financial institutions.</h2></div><div><p>CORTEX's initial market focus is financial institutions, where fragmented records, risk, exposures and relationships can make connected understanding especially valuable.</p><p>As a QORVEX product, its future development will be guided by real institutional needs, trust and measurable usefulness—not a claim that every envisioned capability already exists.</p><TextLink to="/contact">Corporate enquiries</TextLink></div></div>
    </section>
    <NextChapter number="07" eyebrow="THE IDEAS BEHIND THE WORK" title="More information is not more understanding." to="/notes/information-is-not-understanding"/>
  </>;
}
