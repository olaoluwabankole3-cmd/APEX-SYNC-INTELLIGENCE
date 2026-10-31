import { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, BriefcaseBusiness, Check, Compass, Mail, Plus, X } from 'lucide-react';
import { notes, type FieldNote, type NoteCategory } from './content';
import { NextChapter, PageTitle, SceneLabel, SiteLink, TextLink } from './layout';

const categories=['All','Thinking','Engineering','Product'] as const;
export function NotesPage(){
  const [filter,setFilter]=useState<'All'|NoteCategory>('All');
  const displayed=filter==='All'?notes:notes.filter(n=>n.category===filter);
  return <>
    <section className="notes-hero warm-section">
      <div className="page-frame"><div className="page-toprail"><span>QORVEX / FIELD NOTES</span><span>05 — OBSERVATIONS & IDEAS</span></div>
        <div className="notes-hero-layout"><div><span className="overline-copper">IDEAS WITH SOMETHING TO SAY</span><PageTitle>THOUGHTS<br/>FOR WHAT<br/><em>COMES NEXT.</em></PageTitle></div><div><BookOpen size={33} strokeWidth={1.15} aria-hidden="true"/><p>A space for the questions, convictions and lessons behind the work. Written to invite thought—not manufacture activity.</p></div></div>
      </div>
    </section>

    <section className="notes-index light-stone-section section-space">
      <div className="page-frame">
        <div className="section-rail"><SceneLabel number="01">THE NOTEBOOK</SceneLabel><span>THINKING / ENGINEERING / PRODUCT</span></div>
        <div className="notes-index-head"><h2>Read between<br/><em>the systems.</em></h2><div className="note-filters" role="group" aria-label="Filter field notes">
          {categories.map(category=><button type="button" key={category} aria-pressed={category===filter} className={category===filter?'note-filter selected':'note-filter'} onClick={()=>setFilter(category)}>{category}</button>)}
        </div></div>
        <div className="notes-index-list" aria-live="polite">{displayed.map(note=><SiteLink to={'/notes/'+note.slug} className="notes-index-item" key={note.slug}>
          <div className="notes-index-number">{note.no}<span>FIELD NOTE</span></div>
          <div><span className="notes-index-meta">{note.category.toUpperCase()} / {note.reading}</span><h3>{note.title}</h3><p>{note.deck}</p></div><span className="notes-index-icon"><ArrowUpRight size={22} aria-hidden="true"/></span>
        </SiteLink>)}</div>
        <div className="notes-index-end"><span>THOUGHTFUL, ORIGINAL PERSPECTIVES FROM QORVEX</span><span>MORE NOTES AS THE WORK EVOLVES</span></div>
      </div>
    </section>
    <NextChapter number="02" eyebrow="THE COMPANY BEHIND THE PERSPECTIVE" title="Get to know QORVEX." to="/company"/>
  </>;
}

export function ArticlePage({note}:{note:FieldNote}){
  const current=notes.findIndex(n=>n.slug===note.slug);
  const related=notes[(current+1)%notes.length];
  return <>
    <article className="article-page warm-section">
      <div className="page-frame"><div className="page-toprail"><span>QORVEX / FIELD NOTES / {note.no}</span><span>{note.category.toUpperCase()} — {note.reading}</span></div>
        <div className="article-back"><TextLink to="/notes" reverse>Back to Field Notes</TextLink></div>
        <header className="article-header">
          <span className="overline-copper">{note.category.toUpperCase()} / A QORVEX PERSPECTIVE</span>
          <h1>{note.title}</h1>
          <p>{note.deck}</p>
          <div className="article-byline"><span>QORVEX</span><span>FIELD NOTE {note.no}</span><span>{note.reading}</span></div>
        </header>
      </div>
      <div className="article-accent" aria-hidden="true"><div className="page-frame article-accent-grid"><span>QORVEX / IDEAS AND ENGINEERING</span><span>{note.no} — THOUGHTS FOR WHAT COMES NEXT</span><div><i/><i/><i/></div></div></div>
      <div className="page-frame article-body-shell">
        <div className="article-margin"><span>AN ORIGINAL<br/>FIELD NOTE</span><span>QX — {note.no}</span></div>
        <div className="article-body"><p className="article-lead">{note.lead}</p>{note.paragraphs.map((paragraph,i)=><div key={i}>{i===2&&<blockquote>{note.pullquote}</blockquote>}<p>{paragraph}</p></div>)}
          <div className="article-end"><span>END OF NOTE / {note.no}</span><TextLink to="/notes">All Field Notes</TextLink></div>
        </div>
      </div>
    </article>
    <NextChapter number="NEXT" eyebrow={'FIELD NOTE '+related.no+' / '+related.category.toUpperCase()} title={related.title} to={'/notes/'+related.slug}/>
  </>;
}

export function CareersPage(){
  return <>
    <section className="careers-hero light-stone-section">
      <div className="page-frame"><div className="page-toprail"><span>QORVEX / CAREERS</span><span>06 — THE PEOPLE</span></div>
        <div className="careers-hero-grid"><div><span className="overline-copper">THOUGHTFUL WORK TAKES THOUGHTFUL PEOPLE</span><PageTitle>THE WORK<br/>IS NEVER<br/><em>DONE ALONE.</em></PageTitle><p>We believe ambitious technology depends on people who are curious, careful, rigorous, and willing to learn.</p></div>
          <div className="careers-art" aria-hidden="true"><div className="careers-art-outer"/><div className="careers-art-one"/><div className="careers-art-two"/><div className="careers-art-three"/><span>BETTER / TOGETHER</span></div>
        </div>
      </div>
    </section>

    <section className="careers-principles warm-section section-space">
      <div className="page-frame"><div className="section-rail"><SceneLabel number="01">HOW WE WANT TO WORK</SceneLabel><span>A CULTURE UNDER CONSTRUCTION</span></div>
        <h2>Room for ambition.<br/><em>Respect for the details.</em></h2>
        <div className="career-values">
          {[
            ['01','Ask sharper questions.','Curiosity, thoughtful disagreement and first-principles thinking are valuable when they lead to deeper understanding.'],
            ['02','Own the details.','A great idea should work in practice. We value quality, reliability, and the care required to make technology useful.'],
            ['03','Build with others.','Strong systems come from strong collaboration—across disciplines, experiences, and perspectives.'],
            ['04','Keep getting better.','Learning is part of the work. We prefer meaningful progress over the appearance of constant activity.']
          ].map(([num,title,body])=><article key={num}><span>{num}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </div>
    </section>

    <section className="careers-positions dark-section section-space">
      <div className="page-frame">
        <div className="section-rail"><SceneLabel number="02">OPPORTUNITIES</SceneLabel><span>CURRENT STATUS</span></div>
        <div className="career-status"><div className="career-status-icon"><BriefcaseBusiness size={46} strokeWidth={1.15} aria-hidden="true"/></div><div><span className="overline-copper">NO OPEN ROLES ADVERTISED</span><h2>We're building the foundation.</h2><p>There are no confirmed vacancies to publish at the moment. As QORVEX grows, verified opportunities and application instructions will appear here.</p><TextLink to="/notes">Explore our thinking</TextLink></div></div>
      </div>
    </section>
    <NextChapter number="03" eyebrow="THE THINKING THAT GUIDES THE WORK" title="Explore the QORVEX method." to="/approach"/>
  </>;
}

export function ContactPage(){
  const topics=[
    {num:'01',title:'Technology & product enquiries',description:'Questions about QORVEX, our technology direction and current product, CORTEX.'},
    {num:'02',title:'Research & collaboration',description:'Conversations about meaningful problems, technical possibilities and potential collaboration.'},
    {num:'03',title:'Corporate & media enquiries',description:'General enquiries about the company and its work.'},
  ];
  return <>
    <section className="contact-hero dark-section">
      <div className="page-frame"><div className="page-toprail"><span>QORVEX / CONTACT</span><span>07 — START A CONVERSATION</span></div>
        <div className="contact-hero-grid"><div><span className="overline-copper">BUILD WHAT COMES NEXT.</span><PageTitle>GOOD THINGS<br/>START WITH<br/><em>A QUESTION.</em></PageTitle></div><div className="contact-hero-mark" aria-hidden="true"><img src="/qorvex-emblem.svg" alt=""/><span>Q / V / E</span></div></div>
      </div>
    </section>
    <section className="contact-channels warm-section section-space">
      <div className="page-frame contact-channels-grid"><div><SceneLabel number="01">GET IN TOUCH</SceneLabel><h2>The right conversations create new possibilities.</h2><p>QORVEX is establishing its official corporate contact channels. We won't publish an unverified address or show a form that doesn't actually deliver messages.</p></div><div className="contact-live"><Mail size={31} strokeWidth={1.2} aria-hidden="true"/><span>OFFICIAL CONTACT CHANNELS</span><strong>Coming as they are verified.</strong><p>This page will provide confirmed contact details when they are ready for public use.</p></div></div>
    </section>
    <section className="contact-topics light-stone-section section-space">
      <div className="page-frame">
        <div className="section-rail"><SceneLabel number="02">FUTURE CONVERSATIONS</SceneLabel><span>WHAT WE WOULD LIKE TO DISCUSS</span></div>
        <div className="contact-topic-list">{topics.map(topic=><article key={topic.num}><span>{topic.num}</span><div><h3>{topic.title}</h3><p>{topic.description}</p></div><ArrowUpRight size={23} strokeWidth={1.2} aria-hidden="true"/></article>)}</div>
      </div>
    </section>
    <NextChapter number="03" eyebrow="THE CURRENT PRODUCT" title="Discover CORTEX." to="/cortex"/>
  </>;
}

export function NotFoundPage(){
  return <section className="not-found dark-section"><div className="page-frame"><span className="overline-copper">404 / NOT FOUND</span><h1>This path goes<br/><em>somewhere else.</em></h1><p>The page you requested doesn't exist. There's a better way back.</p><SiteLink to="/" className="button-copper">Back to QORVEX <ArrowRight size={18}/></SiteLink></div></section>;
}
