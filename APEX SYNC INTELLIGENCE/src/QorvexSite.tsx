import { useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronRight,
  Compass, Crosshair, Layers3, Menu, Network, ShieldCheck, X
} from 'lucide-react';

const links = [
  { label: 'Company', href: '#company' },
  { label: 'CORTEX', href: '#cortex' },
  { label: 'Innovation', href: '#innovation' },
  { label: 'Careers', href: '#careers' },
];

const principles = [
  { id: '01', icon: Compass, title: 'Quest', text: 'We pursue new possibilities, challenge assumptions, and examine problems worth solving.' },
  { id: '02', icon: Crosshair, title: 'Vision', text: 'We look beyond current constraints to understand what technology could make possible.' },
  { id: '03', icon: Layers3, title: 'Execution', text: 'We turn ideas into engineered, tested, useful systems through disciplined delivery.' },
  { id: '04', icon: ShieldCheck, title: 'Impact', text: 'We measure progress by meaningful value, not by novelty or complexity alone.' },
];

function ArrowLink({ href, children, subtle = false }: { href: string; children: React.ReactNode; subtle?: boolean }) {
  return (
    <a className={subtle ? 'text-link' : 'action-link'} href={href}>
      {children}<ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
    </a>
  );
}

export default function QorvexSite() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="q-site" id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="site-topline"><span>QORVEX / TECHNOLOGY & INNOVATION</span><span>INDEPENDENT BY DESIGN</span></div>
      <header className="site-header">
        <a href="#top" className="brand-lockup" aria-label="QORVEX home" onClick={() => setMenuOpen(false)}>
          <img src="/qorvex-wordmark.svg" alt="QORVEX" width="172" height="36" />
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {links.map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Contact <ArrowUpRight size={14} /></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-spot" aria-hidden="true" />
          <div className="hero-content page-width">
            <div className="hero-copy">
              <p className="eyebrow"><span className="signal-dot" /> THE FUTURE IS BUILT, NOT AWAITED.</p>
              <h1 id="hero-title">BUILD WHAT<br /><em>COMES NEXT.</em></h1>
              <p className="hero-description">An independent technology and innovation company creating intelligent solutions for complex problems.</p>
              <div className="hero-actions">
                <ArrowLink href="#company">Explore QORVEX</ArrowLink>
                <a className="secondary-link" href="#cortex">Discover CORTEX <ArrowRight size={17} aria-hidden="true" /></a>
              </div>
            </div>
            <div className="hero-art" aria-label="QORVEX geometric Q brand emblem">
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
              <div className="art-plane" />
              <div className="art-plate">
                <img src="/qorvex-emblem.svg" alt="" width="340" height="290" />
              </div>
              <div className="art-corner corner-tl" /><div className="art-corner corner-br" />
              <span className="art-coordinate">Q / V / E</span>
            </div>
          </div>
          <div className="hero-bottom page-width">
            <span>QUEST <span className="sep">/</span> VISION <span className="sep">/</span> EXECUTION</span>
            <a href="#company" aria-label="Scroll to company section"><ArrowDownRight size={22} strokeWidth={1.3} /></a>
            <span>EST. ON POSSIBILITY</span>
          </div>
        </section>

        <section className="statement section-pad" id="company" aria-labelledby="company-title">
          <div className="page-width statement-layout">
            <p className="section-kicker">01 / THE COMPANY</p>
            <div>
              <h2 id="company-title" className="statement-headline">We believe progress belongs to those who <span>build it.</span></h2>
              <div className="statement-row">
                <p>QORVEX explores new possibilities, identifies meaningful problems, and engineers technology designed to create lasting value. We combine ambitious thinking with precise execution.</p>
                <ArrowLink href="#principles" subtle>Our philosophy</ArrowLink>
              </div>
            </div>
          </div>
        </section>

        <section className="cortex section-pad" id="cortex" aria-labelledby="cortex-title">
          <div className="page-width">
            <div className="section-heading"><p className="section-kicker">02 / CURRENT PRODUCT</p><span className="eyebrow muted">A QORVEX PRODUCT</span></div>
            <div className="cortex-panel">
              <div className="cortex-copy">
                <div className="product-status"><span className="status-mark" /> PRODUCT IN DEVELOPMENT</div>
                <p className="overline">ENTERPRISE INTELLIGENCE OPERATING SYSTEM</p>
                <h2 id="cortex-title">CORTEX<span className="copper-dot">.</span></h2>
                <p className="cortex-lead">From fragmented information to connected institutional intelligence.</p>
                <p className="cortex-detail">CORTEX is being designed as an intelligence layer across existing institutional systems—connecting context, surfacing risks and opportunities, and supporting better-informed decisions.</p>
                <div className="product-chips"><span>Connected intelligence</span><span>Contextual analysis</span><span>Human oversight</span></div>
                <p className="product-note">Initially focused on financial institutions. Designed to complement—not replace—core systems.</p>
              </div>
              <div className="cortex-visual" aria-hidden="true">
                <div className="diagram-header"><Network size={15} /><span>CONNECTED CONTEXT / CONCEPTUAL VIEW</span></div>
                <svg viewBox="0 0 500 370" className="network-graphic" fill="none" role="presentation">
                  <g stroke="currentColor" strokeWidth="1.1" strokeOpacity=".4">
                    <path d="M248 181 L105 80 L380 95 L248 181 L123 279 L393 276 L248 181" />
                    <path d="M105 80 L123 279 M380 95 L393 276 M105 80 L393 276 M380 95 L123 279" strokeDasharray="4 8" />
                  </g>
                  <circle cx="248" cy="181" r="67" stroke="#B97B50" strokeOpacity=".38" />
                  <circle cx="248" cy="181" r="90" stroke="#B97B50" strokeOpacity=".16" />
                  <circle cx="248" cy="181" r="37" fill="#27241F" stroke="#D9A06F" strokeWidth="1.8" />
                  <path d="M236 171 H253 V184 H236 Z M253 184 L266 196" stroke="#F5F1E8" strokeWidth="4" strokeLinecap="square" />
                  <g fill="#24231F" stroke="#A7B0B8" strokeWidth="1.5">
                    <circle cx="105" cy="80" r="25"/><circle cx="380" cy="95" r="25"/><circle cx="123" cy="279" r="25"/><circle cx="393" cy="276" r="25"/>
                  </g>
                  <g fill="#F5F1E8"><circle cx="105" cy="80" r="5"/><circle cx="380" cy="95" r="5"/><circle cx="123" cy="279" r="5"/><circle cx="393" cy="276" r="5"/></g>
                  <g fill="#A7B0B8" fontFamily="monospace" fontSize="10" letterSpacing="2">
                    <text x="48" y="38">FINANCE</text><text x="350" y="48">RISK</text><text x="68" y="330">OPERATIONS</text><text x="350" y="326">KNOWLEDGE</text>
                  </g>
                </svg>
                <div className="diagram-footer"><span>DATA</span><span>CONTEXT</span><span>INTELLIGENCE</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="principles section-pad" id="principles" aria-labelledby="principles-title">
          <div className="page-width">
            <div className="section-heading principles-heading">
              <div><p className="section-kicker">03 / OUR PHILOSOPHY</p><h2 id="principles-title">The principles behind<br /><span>what we build.</span></h2></div>
              <p>Curiosity starts the process. Disciplined engineering makes it matter.</p>
            </div>
            <div className="principle-grid">
              {principles.map(item => {
                const Icon = item.icon;
                return <article key={item.id} className="principle-card">
                  <div className="principle-top"><span>{item.id} / 04</span><Icon size={24} strokeWidth={1.35} aria-hidden="true" /></div>
                  <h3>{item.title}</h3><p>{item.text}</p>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="innovation section-pad" id="innovation" aria-labelledby="innovation-title">
          <div className="page-width innovation-layout">
            <div className="innovation-art" aria-hidden="true"><div className="innovation-square"><div className="innovation-bar a"/><div className="innovation-bar b"/><div className="innovation-bar c"/><span>Q / 04</span></div></div>
            <div className="innovation-copy">
              <p className="section-kicker">04 / HOW WE THINK</p>
              <h2 id="innovation-title">Ambition grounded in <em>engineering.</em></h2>
              <p>We don't pursue technology because it's fashionable. We research, test, build, and refine ideas that can improve the way important systems work.</p>
              <div className="innovation-points">
                <div><Check size={18}/><span>Explore problems across industries</span></div>
                <div><Check size={18}/><span>Build original technology and intellectual property</span></div>
                <div><Check size={18}/><span>Prioritize security, reliability, and useful outcomes</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="careers section-pad" id="careers" aria-labelledby="careers-title">
          <div className="page-width split-line">
            <div><p className="section-kicker">05 / PEOPLE & CULTURE</p><h2 id="careers-title">Build with purpose.</h2></div>
            <div><p>QORVEX is shaped by curiosity, craftsmanship, and a long-term view. We will share confirmed opportunities here as the company grows.</p><span className="subtle-note">No open positions are currently advertised.</span></div>
          </div>
        </section>

        <section className="contact section-pad" id="contact" aria-labelledby="contact-title">
          <div className="page-width contact-layout">
            <div><p className="section-kicker">06 / WHAT COMES NEXT</p><h2 id="contact-title">The future is not a spectator sport.</h2><p>We are building QORVEX for the long term. Official corporate contact channels will be added once verified.</p></div>
            <div className="contact-mark"><img src="/qorvex-emblem.svg" alt="" width="172" height="148" /><span>QUEST. VISION. EXECUTION.</span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-main">
          <div><a href="#top" aria-label="Back to top"><img src="/qorvex-wordmark.svg" alt="QORVEX" width="172" height="36" /></a><p>An independent technology and innovation company.</p></div>
          <div className="footer-links"><a href="#company">Company</a><a href="#cortex">CORTEX</a><a href="#innovation">Innovation</a><a href="#careers">Careers</a><a href="#contact">Contact</a></div>
        </div>
        <div className="page-width footer-bottom"><span>© {new Date().getFullYear()} QORVEX. ALL RIGHTS RESERVED.</span><span>BUILD WHAT COMES NEXT.</span><a href="#top">BACK TO TOP <ChevronRight size={13} /></a></div>
      </footer>
    </div>
  );
}
