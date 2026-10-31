import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';

const destinations = [
  { label:'Company', path:'/company' },
  { label:'Our approach', path:'/approach' },
  { label:'CORTEX', path:'/cortex' },
  { label:'Innovation', path:'/innovation' },
  { label:'Field notes', path:'/notes' },
  { label:'Careers', path:'/careers' }
];
const NavigationContext=createContext<(path:string)=>void>(()=>undefined);
export const useNavigate=()=>useContext(NavigationContext);

function normalize(path:string){return path==='/'?'/':path.replace(/\/+$/,'')||'/';}
export function useLocationPath(){
  const [path,setPath]=useState(()=>normalize(window.location.pathname));
  useEffect(()=>{
    const callback=()=>setPath(normalize(window.location.pathname));
    window.addEventListener('popstate',callback);
    return ()=>window.removeEventListener('popstate',callback);
  },[]);
  const navigate=useCallback((to:string)=>{
    const next=normalize(to);
    if(normalize(window.location.pathname)!==next)window.history.pushState({},'',next);
    setPath(next);
    window.scrollTo({top:0,behavior:'instant'});
  },[]);
  return {path,navigate};
}
type SiteLinkProps=Omit<AnchorHTMLAttributes<HTMLAnchorElement>,'href'> & {to:string; children:ReactNode};
export function SiteLink({to,onClick,children,...props}:SiteLinkProps){
  const navigate=useNavigate();
  const handle=(event:MouseEvent<HTMLAnchorElement>)=>{
    onClick?.(event);
    if(event.defaultPrevented||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||props.target==='_blank')return;
    if(to.startsWith('#'))return;
    event.preventDefault();
    navigate(to);
  };
  return <a href={to} {...props} onClick={handle}>{children}</a>;
}
export function SiteHeader({path}:{path:string}){
  const [open,setOpen]=useState(false);
  useEffect(()=>setOpen(false),[path]);
  useEffect(()=>{
    if(!open)return;
    const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false);};
    document.addEventListener('keydown',onKey);
    return ()=>document.removeEventListener('keydown',onKey);
  },[open]);
  return <>
    <header className="site-head">
      <div className="head-inner page-frame">
        <SiteLink to="/" className="site-brand" onClick={()=>setOpen(false)} aria-label="QORVEX home">
          <img src="/qorvex-wordmark.svg" alt="QORVEX" width="168" height="34"/>
        </SiteLink>
        <nav id="primary-navigation" className={open?'head-nav nav-expanded':'head-nav'} aria-label="Main navigation">
          {destinations.map(item=><SiteLink key={item.path} to={item.path} onClick={()=>setOpen(false)} aria-current={path===item.path?'page':undefined}>{item.label}</SiteLink>)}
          <SiteLink to="/contact" className="head-contact" onClick={()=>setOpen(false)} aria-current={path==='/contact'?'page':undefined}>Contact <ArrowUpRight size={15} aria-hidden="true"/></SiteLink>
        </nav>
        <button type="button" className="head-menu" onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="primary-navigation">
          {open?<X size={23} aria-hidden="true"/>:<Menu size={23} aria-hidden="true"/>}
        </button>
      </div>
    </header>
    {open&&<button className="nav-backdrop" type="button" onClick={()=>setOpen(false)} aria-label="Dismiss menu" tabIndex={-1}/>}
  </>;
}
export function SiteFooter(){
  return <footer className="site-footer">
    <div className="page-frame">
      <div className="foot-top">
        <div className="foot-identity"><SiteLink to="/" aria-label="QORVEX home"><img src="/qorvex-wordmark.svg" alt="QORVEX" width="185" height="39"/></SiteLink><p>Quest. Vision. Execution.<br/>An independent technology and innovation company.</p></div>
        <div className="foot-links"><span>EXPLORE</span><SiteLink to="/company">Company</SiteLink><SiteLink to="/approach">Approach</SiteLink><SiteLink to="/cortex">CORTEX</SiteLink><SiteLink to="/innovation">Innovation</SiteLink></div>
        <div className="foot-links"><span>CONNECT</span><SiteLink to="/notes">Field notes</SiteLink><SiteLink to="/careers">Careers</SiteLink><SiteLink to="/contact">Contact</SiteLink><SiteLink to="/">Home</SiteLink></div>
        <div className="foot-callout"><span>OUR CONVICTION</span><strong>The future should not simply be anticipated.<br/>It should be built.</strong></div>
      </div>
      <div className="foot-bottom"><span>© {new Date().getFullYear()} QORVEX</span><span>BUILD WHAT COMES NEXT.</span><span>INDEPENDENT BY DESIGN</span></div>
    </div>
  </footer>;
}
export function SceneLabel({number,children,light=false}:{number:string;children:ReactNode;light?:boolean}){
  return <div className={'scene-label'+(light?' label-light':'')}><span>{number}</span><span>{children}</span></div>;
}
export function TextLink({to,children,reverse=false}:{to:string;children:ReactNode;reverse?:boolean}){
  return <SiteLink to={to} className="text-arrow-link">{reverse?<ArrowLeft size={18} aria-hidden="true"/>:null}<span>{children}</span>{!reverse?<ArrowUpRight size={18} aria-hidden="true"/>:null}</SiteLink>;
}
export function NextChapter({number,eyebrow,title,to}:{number:string;eyebrow:string;title:string;to:string}){
  return <section className="next-chapter"><div className="page-frame next-inner"><div><SceneLabel number={number}>CONTINUE EXPLORING</SceneLabel><span className="next-eyebrow">{eyebrow}</span><h2>{title}</h2></div><SiteLink to={to} className="next-arrow" aria-label={'Explore '+title}><ArrowRight size={40} strokeWidth={1.2} aria-hidden="true"/></SiteLink></div></section>;
}
export function PageTitle({children}:{children:ReactNode}){
  return <h1 className="page-title">{children}</h1>;
}
export function WebsiteShell({path,children,navigate}:{path:string;children:ReactNode;navigate:(path:string)=>void}){
  useEffect(()=>{
    const meta:{[key:string]:[string,string]}={
      '/':['QORVEX — Build What Comes Next.','QORVEX is an independent technology and innovation company building solutions to complex problems.'],
      '/company':['The Company — QORVEX','Discover the meaning and philosophy behind QORVEX, an independent technology and innovation company.'],
      '/approach':['Our Approach — QORVEX','How QORVEX moves from quest and vision to disciplined execution and impact.'],
      '/cortex':['CORTEX — Enterprise Intelligence | QORVEX','Explore CORTEX, the enterprise intelligence operating system in development at QORVEX.'],
      '/innovation':['Innovation & Engineering — QORVEX','Explore the way QORVEX thinks about research, original technology, reliability and responsible engineering.'],
      '/notes':['Field Notes — QORVEX','Original perspectives from QORVEX on technology, intelligence, engineering and the future.'],
      '/careers':['Careers — QORVEX','Learn about the principles and working culture that guide QORVEX.'],
      '/contact':['Contact — QORVEX','Corporate enquiries and contact information for QORVEX.']
    };
    const fallback=path.startsWith('/notes/')?['Field Notes — QORVEX','Read perspectives from QORVEX on technology, intelligence, and engineering.']:['Page not found — QORVEX',''];
    const [title,description]=meta[path]??fallback;
    document.title=title;
    let tag=document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if(!tag){tag=document.createElement('meta');tag.name='description';document.head.appendChild(tag);}
    tag.content=description;
  },[path]);
  return <NavigationContext.Provider value={navigate}>
    <div className="q3-site">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader path={path}/>
      <main id="main-content" key={path} className="page-enter" tabIndex={-1}>{children}</main>
      <SiteFooter/>
    </div>
  </NavigationContext.Provider>;
}
