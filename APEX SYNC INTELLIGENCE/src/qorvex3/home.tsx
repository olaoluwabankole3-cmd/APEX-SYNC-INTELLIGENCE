import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight } from 'lucide-react';
import { NextChapter, SceneLabel, SiteLink, TextLink } from './layout';
import { notes } from './content';

function HeroDevice(){
  return <div className="home-device" aria-hidden="true">
    <div className="device-top"><span>QX / FUTURE STUDIES</span><span>FIG. 001</span></div>
    <div className="device-outer-ring"/>
    <div className="device-inner-ring"/>
    <div className="device-plane"><div className="device-cross"/><img src="/qorvex-emblem.svg" alt="" width="240" height="205"/></div>
    <div className="device-footer"><span>PRECISION<br/>BY DESIGN</span><span>Q / V / E</span></div>
  </div>;
}
export function HomePage(){
  return <>
    <section className="home-hero">
      <div className="page-frame home-prelude"><span>INDEPENDENT TECHNOLOGY & INNOVATION</span><span>QUEST / VISION / EXECUTION</span></div>
      <div className="page-frame home-hero-grid">
        <div className="home-hero-copy">
          <div className="home-eyebrow"><span className="brand-signal"/> THE FUTURE IS NOT A DESTINATION</div>
          <h1>BUILD<br/>WHAT<br/><em>COMES NEXT.</em></h1>
          <div className="home-intro"><span className="intro-line"/><p>We explore what could exist, challenge what already does, and engineer technology that moves the world forward.</p></div>
          <div className="home-actions"><SiteLink className="button-copper" to="/company">Discover QORVEX <ArrowUpRight size={18}/></SiteLink><TextLink to="/cortex">Meet CORTEX</TextLink></div>
        </div>
        <HeroDevice/>
      </div>
      <div className="page-frame home-herobar"><span>QORVEX / AN INDEPENDENT COMPANY</span><span>THE WORK BEGINS WITH A QUESTION.</span><ArrowDown size={17} aria-hidden="true"/></div>
    </section>

    <section className="home-statement warm-section">
      <div className="page-frame home-statement-grid">
        <SceneLabel number="01">WHY WE EXIST</SceneLabel>
        <div><h2>Not just to imagine the future.<br/><em>To build what matters.</em></h2><div className="home-statement-detail"><p>QORVEX is driven by a belief that important problems deserve ambitious thinking and disciplined execution. Technology should make complex things clearer, stronger and more useful.</p><TextLink to="/company">The company behind the work</TextLink></div></div>
      </div>
    </section>

    <section className="home-cortex dark-section">
      <div className="page-frame">
        <div className="section-rail"><SceneLabel number="02">CURRENT PRODUCT</SceneLabel><span>INTELLIGENCE / CONTEXT / ACTION</span></div>
        <div className="home-cortex-grid">
          <div className="home-cortex-copy">
            <span className="development-pill"><span/> IN DEVELOPMENT</span>
            <h2>CORTEX<span>.</span></h2>
            <h3>The intelligence between the systems.</h3>
            <p>CORTEX is being developed as an enterprise intelligence operating system. Its vision: bring disconnected institutional information into context so people can uncover relationships, understand risks and make better-informed decisions.</p>
            <TextLink to="/cortex">Explore the CORTEX vision</TextLink>
          </div>
          <div className="home-cortex-art" aria-label="Abstract diagram connecting multiple systems through one intelligence core">
            <div className="home-cortex-art-label">CONCEPTUAL INTELLIGENCE MAP <span>QX — CX 01</span></div>
            <svg viewBox="0 0 560 420" fill="none" role="img" aria-label="Four connected data sources around a central intelligence node">
              <g stroke="#A7B0B8" strokeOpacity=".45"><path d="M90 85 L280 210 L455 86 L280 210 L450 336 L280 210 L105 330 L280 210"/><path d="M90 85 L105 330 M455 86 L450 336" strokeDasharray="5 9" opacity=".5"/></g>
              <circle cx="280" cy="210" r="108" stroke="#B57B50" strokeOpacity=".24"/>
              <circle cx="280" cy="210" r="75" stroke="#B57B50" strokeOpacity=".55"/>
              <circle cx="280" cy="210" r="44" stroke="#D9A06F" fill="#B57B5016"/>
              <path d="M264 197 H285 V214 H264Z M282 211 L298 228" stroke="#F5F1E8" strokeWidth="4"/>
              {[[90,85],[455,86],[105,330],[450,336]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="26" stroke="#9C8B7D" fill="#24231F"/><circle cx={x} cy={y} r="5" fill="#D9A06F"/></g>)}
              <g fill="#A7B0B8" fontFamily="monospace" fontSize="11" letterSpacing="1"><text x="44" y="38">SYSTEMS</text><text x="421" y="39">RECORDS</text><text x="43" y="379">OPERATIONS</text><text x="409" y="380">KNOWLEDGE</text></g>
            </svg>
            <div className="home-cortex-art-bottom"><span>CONNECT</span><span>UNDERSTAND</span><span>SUPPORT</span></div>
          </div>
        </div>
      </div>
    </section>

    <section className="home-directions light-stone-section">
      <div className="page-frame">
        <div className="section-rail"><SceneLabel number="03">GO DEEPER</SceneLabel><span>THREE WAYS INTO QORVEX</span></div>
        <h2>There's more beneath<br/><em>the surface.</em></h2>
        <div className="home-direction-list">
          {[
            {num:'01',title:'A deliberate approach.',desc:'From asking the right question to the craft of real execution.',to:'/approach',tag:'THE METHOD'},
            {num:'02',title:'Innovation, without the noise.',desc:'Our perspective on research, engineering and original technology.',to:'/innovation',tag:'THE THINKING'},
            {num:'03',title:'Ideas worth returning to.',desc:'A growing journal of thoughtful, original perspectives.',to:'/notes',tag:'THE FIELD NOTES'}
          ].map(item=><SiteLink key={item.num} to={item.to} className="home-direction">
            <span>{item.num}</span><div><span className="home-direction-tag">{item.tag}</span><h3>{item.title}</h3><p>{item.desc}</p></div><ArrowUpRight size={26} strokeWidth={1.25} aria-hidden="true"/>
          </SiteLink>)}
        </div>
      </div>
    </section>

    <section className="home-reading warm-section">
      <div className="page-frame home-reading-grid">
        <div><SceneLabel number="04">FROM THE NOTEBOOK</SceneLabel><h2>A reason<br/>to <em>return.</em></h2><p>Perspectives on the questions shaping our work. Written to invite thought, not chase attention.</p><TextLink to="/notes">Browse all field notes</TextLink></div>
        <SiteLink to={'/notes/'+notes[0].slug} className="home-feature-note"><span>FEATURED FIELD NOTE / {notes[0].no}</span><div className="feature-note-art" aria-hidden="true"><div/><div/><div/></div><h3>{notes[0].title}</h3><p>{notes[0].deck}</p><div className="feature-note-foot"><span>{notes[0].category.toUpperCase()} / {notes[0].reading}</span><ArrowRight size={24}/></div></SiteLink>
      </div>
    </section>
    <NextChapter number="05" eyebrow="QORVEX / THE COMPANY" title="There is a reason behind the name." to="/company"/>
  </>;
}
