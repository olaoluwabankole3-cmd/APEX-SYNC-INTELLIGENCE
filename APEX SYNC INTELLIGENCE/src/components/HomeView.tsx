/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Shield, Database, Cpu, Brain, Sparkles, Terminal,
  Lock, Compass, Layers, Scale, Activity, Users, DollarSign,
  Building2, Award, Briefcase, ChevronRight, CheckCircle, HelpCircle,
  Network, Code2, Search, Settings, FileText, Calendar, User
} from 'lucide-react';
import { PageId } from '../types';
import { JOURNAL_ARTICLES } from '../data';
import ConnectedTechNodes from './ConnectedTechNodes';
import InteractiveGlobe from './InteractiveGlobe';
import AICognitiveEngine from './AICognitiveEngine';
import BlueprintMachine from './BlueprintMachine';
import CircuitZoomOut from './CircuitZoomOut';
import DecryptText from './DecryptText';
import SovereignExperience from './SovereignExperience';

interface HomeViewProps {
  onPageChange: (page: PageId) => void;
}

export default function HomeView({ onPageChange }: HomeViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [introStep, setIntroStep] = useState(0);

  useEffect(() => {
    // Cinematic Apple Keynote sequence
    const t1 = setTimeout(() => setIntroStep(1), 500);  // Grid lines appear
    const t2 = setTimeout(() => setIntroStep(2), 1200); // Logo materializes
    const t3 = setTimeout(() => setIntroStep(3), 1900); // Golden streak traveling line across
    const t4 = setTimeout(() => setIntroStep(4), 2600); // Central spark illuminates, Headline decrypts

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const handleNavClick = (page: PageId) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // What We Build Cards
  const buildOfferings = [
    {
      title: 'Intelligent Platforms',
      desc: 'Custom software built around business operations.',
      badge: 'CORE SYSTEMS',
      icon: Layers,
    },
    {
      title: 'AI Systems',
      desc: 'Assistants, agents, automation, and intelligent workflows.',
      badge: 'COGNITIVE ARCHITECTURE',
      icon: Brain,
    },
    {
      title: 'Digital Operating Systems',
      desc: 'Industry-specific platforms such as Apex Legal OS.',
      badge: 'ENTERPRISE IP',
      icon: Scale,
    },
    {
      title: 'Enterprise Websites',
      desc: 'Premium corporate experiences designed to convert and build trust.',
      badge: 'DIGITAL STAGE',
      icon: GlobeIcon,
    },
    {
      title: 'Automation',
      desc: 'Replace repetitive work with connected workflows.',
      badge: 'WORKFLOW ENGINE',
      icon: Network,
    },
    {
      title: 'Product Engineering',
      desc: 'From idea to production-ready software.',
      badge: 'FULL-STACK DELIVERY',
      icon: Code2,
    },
  ];

  // Industries
  const industries = [
    {
      name: 'Legal',
      desc: 'Technology that secures client data, accelerates contract reviews, and synchronizes matter lifecycle files.',
      icon: Scale,
    },
    {
      name: 'Healthcare',
      desc: 'Safe, context-aware platforms that streamline operations, handle patient records with compliance, and assist clinical workflows.',
      icon: Activity,
    },
    {
      name: 'Advisory',
      desc: 'Dynamic tools designed for advisors to synthesize research, organize strategic client files, and align corporate intelligence.',
      icon: Users,
    },
    {
      name: 'Finance',
      desc: 'Enterprise-grade infrastructure built around secure analysis pipelines, transaction logic, and regulatory monitoring.',
      icon: DollarSign,
    },
    {
      name: 'Real Estate',
      desc: 'Custom platforms to synchronize property lifecycles, deal structures, and portfolio metrics.',
      icon: Building2,
    },
    {
      name: 'Professional Services',
      desc: 'Connected operating networks that eliminate administrative friction and allow experts to deliver maximum value.',
      icon: Award,
    },
  ];

  // Proprietary Products
  const products = [
    {
      title: 'Apex Legal OS',
      status: 'Coming Soon',
      desc: 'A compliance-guarded digital operating system designed for forward-thinking law firms to manage client lifecycle intelligence, document reasoning, and Matter-State sync.',
      icon: Scale,
    },
    {
      title: 'AI CEO Assistant',
      status: 'In Development',
      desc: 'An automated strategic context companion that syncs across multi-format briefings, board slides, and finances to assist enterprise leadership teams.',
      icon: Brain,
    },
    {
      title: 'Future Industry Platforms',
      status: 'Vision Preview',
      desc: 'Category-defining, domain-specific systems engineered to dismantle operational alignment lag and protect institutional IP.',
      icon: Sparkles,
    },
  ];

  // Why Apex Sync (Philosophy)
  const philosophies = [
    {
      title: 'We Don\'t Sell Websites',
      subtitle: 'We build business infrastructure.',
      desc: 'Web portals shouldn\'t be isolated digital brochures; they are endpoints that connect directly to your core operations, data structures, and intelligence graphs.',
      icon: Network,
    },
    {
      title: 'AI Should Support People',
      subtitle: 'Technology should remove repetitive work—not replace expertise.',
      desc: 'We automate administrative friction, reporting noise, and alignment syncs so your human experts can focus exclusively on high-leverage strategic decisions.',
      icon: HeartHandshakeIcon,
    },
    {
      title: 'Built to Grow',
      subtitle: 'Every solution is designed with future expansion in mind.',
      desc: 'We compile clean, robust, and highly modular code systems that grow organically as your organizational scale and data dependencies expand over the next decade.',
      icon: Layers,
    },
  ];

  // Insights Categories
  const insightCategories = ['All', 'AI', 'Law', 'Digital Transformation', 'Product Engineering', 'Automation', 'Company Updates'];

  const filteredArticles = activeCategory === 'All' 
    ? JOURNAL_ARTICLES 
    : JOURNAL_ARTICLES.filter(art => {
        if (activeCategory === 'AI') return art.category === 'Research' || art.category === 'Artificial Intelligence';
        if (activeCategory === 'Law') return art.category === 'Research' && art.title.toLowerCase().includes('legal');
        if (activeCategory === 'Digital Transformation') return art.category === 'Leadership';
        if (activeCategory === 'Product Engineering') return art.category === 'Engineering';
        if (activeCategory === 'Automation') return art.category === 'Research';
        return art.category.toLowerCase().includes(activeCategory.toLowerCase());
      });

  // Process
  const steps = [
    { num: '01', title: 'Discover', desc: 'We map your current operational reality, identifying knowledge leaks, process constraints, and intelligence opportunities.' },
    { num: '02', title: 'Design', desc: 'We architect custom cognitive memory models, detailed data pipelines, and premium, visual-luxury user interfaces.' },
    { num: '03', title: 'Build', desc: 'Our senior engineering team translates approved designs into robust, bank-grade, production-ready software systems.' },
    { num: '04', title: 'Scale', desc: 'We deploy, integrate with existing services, monitor compliance guardrails, and continuously optimize for growth.' },
  ];

  return (
    <div id="home-view" className="w-full">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section id="hero-section" className="relative min-h-[95vh] flex items-center justify-center pt-28 overflow-hidden bg-apex-black">
        {/* Soft Ambient Gold glows */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-apex-gold/5 rounded-full blur-[110px] animate-ambient-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-secondary-gold/5 rounded-full blur-[130px] animate-ambient-glow" style={{ animationDelay: '-6s' }} />

        {/* Technical Subtle Background Grid (Fades in at step 1) */}
        <div 
          className={`absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4.5rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_75%,transparent_100%)] transition-opacity duration-1000 pointer-events-none ${
            introStep >= 1 ? 'opacity-30' : 'opacity-0'
          }`} 
        />

        {/* Cinematic sequence containers */}
        {introStep < 4 ? (
          <div className="flex flex-col items-center justify-center relative w-full h-[400px] z-20">
            {/* Drifting Gold Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute w-2 h-2 rounded-full bg-apex-gold/20 top-1/4 left-1/3 animate-ping" />
              <div className="absolute w-1 h-1 rounded-full bg-champagne-gold/30 top-1/2 left-2/3 animate-pulse" />
              <div className="absolute w-1.5 h-1.5 rounded-full bg-secondary-gold/25 top-2/3 left-1/4 animate-ping" style={{ animationDelay: '1s' }} />
            </div>

            {/* Central Apex Logo materializing (step 2) */}
            <AnimatePresence>
              {introStep >= 2 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.0 }}
                  className="relative w-36 h-36 flex items-center justify-center mb-8"
                >
                  <span className="absolute inset-0 bg-gradient-to-tr from-apex-gold to-champagne-gold rounded opacity-15 blur-2xl" />
                  
                  <motion.img 
                    src="https://lh3.googleusercontent.com/d/1IDBwdJa-WOG5uKA-WTJsKTrau1dzkgnb" 
                    alt="Apex Sync Logo" 
                    referrerPolicy="no-referrer"
                    className="w-28 h-28 object-contain filter drop-shadow-[0_0_24px_rgba(201,162,39,0.7)] brightness-110 contrast-105"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Glowing streak traveling wire across (step 3) */}
            {introStep === 3 && (
              <motion.div 
                initial={{ left: '-10%' }}
                animate={{ left: '110%' }}
                transition={{ duration: 0.8, ease: 'linear' }}
                className="absolute h-[1.5px] bg-gradient-to-r from-transparent via-champagne-gold to-transparent w-40 blur-[0.5px] shadow-[0_0_12px_#E7CF84]"
              />
            )}

            {/* Skip Option */}
            <button 
              onClick={() => setIntroStep(4)} 
              className="absolute bottom-4 font-mono text-[9px] text-smoke-gray hover:text-apex-gold tracking-widest uppercase cursor-pointer"
            >
              // Skip Sequence
            </button>
          </div>
        ) : (
          /* MAIN HERO TEXT CONTENT FADING IN ONCE LOGO ILLUMINATED (step 4) */
          <div className="max-w-5xl mx-auto px-6 text-center z-10">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-obsidian border border-carbon-gray px-3.5 py-1.5 rounded-full mb-8 magnetic"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-apex-gold animate-ping" />
              <span className="font-mono text-[9px] tracking-[0.25em] text-platinum-gray uppercase">
                BEYOND APP DEVELOPMENT // SOVEREIGN CONTEXT OS
              </span>
            </motion.div>

            {/* Primary Display Title with DecryptText animation */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ivory-white mb-6 leading-[1.08]">
              <DecryptText text="Engineering the Intelligence" speed={25} /> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-apex-gold via-secondary-gold to-champagne-gold">
                Behind Tomorrow's Businesses.
              </span>
            </h1>

            {/* Supporting Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-sans text-base sm:text-lg text-platinum-gray max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Apex Sync designs AI-powered software, automation platforms, and digital operating systems that help ambitious organizations scale with intelligence.
            </motion.p>

            {/* Action Call */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={() => handleNavClick('services')}
                className="magnetic w-full sm:w-auto bg-gradient-to-r from-apex-gold to-secondary-gold text-apex-black font-sans font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded-sm hover:shadow-xl hover:shadow-apex-gold/15 transition-all duration-300 cursor-pointer focus:outline-none"
              >
                Explore Our Work
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="magnetic w-full sm:w-auto bg-transparent hover:bg-obsidian border border-carbon-gray text-ivory-white font-sans font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded-sm transition-all duration-300 cursor-pointer focus:outline-none"
              >
                Book a Strategy Session
              </button>
            </motion.div>
          </div>
        )}
      </section>

      {/* 2. TRUST SECTION / CREDIBILITY INDICATORS */}
      <section id="trust-section" className="bg-obsidian border-y border-carbon-gray/80 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
              GOVERNANCE & ENGINEERING STANDARDS
            </span>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ivory-white">
              Sovereign Operating Principles
            </h2>
            <div className="w-12 h-[1px] bg-apex-gold mx-auto mt-4" />
          </div>

          <SovereignExperience />
        </div>
      </section>

      {/* 3. WHAT WE BUILD */}
      <section id="what-we-build" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
              CAPABILITIES // PORTFOLIO RANGE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ivory-white">
              What We Build
            </h2>
          </div>
          <div className="lg:col-span-5 border-l-0 lg:border-l border-carbon-gray pl-0 lg:pl-6 pt-4 lg:pt-0">
            <p className="font-sans text-sm text-platinum-gray italic leading-relaxed">
              "Most agencies build websites. Some agencies build apps. Apex Sync builds intelligent systems that become part of how businesses operate."
            </p>
          </div>
        </div>

        {/* Dynamic Connected Technology Nodes visual showcase */}
        <ConnectedTechNodes />
      </section>

      {/* 4. INDUSTRIES */}
      <section id="industries" className="bg-obsidian border-t border-carbon-gray py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
              TARGET SECTORS & DOMAINS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ivory-white mb-4">
              Sectors of Operation
            </h2>
            <p className="font-sans text-sm text-platinum-gray max-w-xl mx-auto leading-relaxed">
              We do not build generic, one-size-fits-all software. We customize intelligent systems specifically for the operational guardrails of specialized sectors.
            </p>
          </div>

          {/* Interactive Rotating 3D wireframe Globe Pin Showcase */}
          <InteractiveGlobe />
        </div>
      </section>

      {/* 5. PROPRIETARY PRODUCTS */}
      <section id="proprietary-products" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
            APEX INTELLECTUAL PROPERTY // SOFTWARE IP
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ivory-white mb-4">
            Our Proprietary Products
          </h2>
          <p className="font-sans text-sm text-platinum-gray max-w-xl mx-auto leading-relaxed">
            Apex Sync engineers category-defining proprietary software assets that establish permanent cognitive infrastructure for targeted operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((prod, idx) => {
            const IconComp = prod.icon;
            return (
              <div 
                key={idx}
                className="bg-obsidian border border-carbon-gray/80 rounded-sm p-8 flex flex-col justify-between hover:border-apex-gold/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0">
                  <span className={`text-[8px] font-mono font-bold tracking-wider px-3 py-1 uppercase rounded-bl-sm ${
                    prod.status.includes('Soon') 
                      ? 'bg-carbon-gray/80 text-platinum-gray border-l border-b border-carbon-gray'
                      : prod.status.includes('Development')
                      ? 'bg-apex-gold/10 text-apex-gold border-l border-b border-apex-gold/25'
                      : 'bg-emerald-500/10 text-emerald-400 border-l border-b border-emerald-500/25'
                  }`}>
                    {prod.status}
                  </span>
                </div>

                <div>
                  <div className="w-10 h-10 rounded bg-apex-gold/5 flex items-center justify-center mb-6 border border-apex-gold/15">
                    <IconComp size={18} className="text-apex-gold" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ivory-white mb-3">
                    {prod.title}
                  </h3>
                  <p className="font-sans text-xs text-platinum-gray leading-relaxed mb-6">
                    {prod.desc}
                  </p>
                </div>

                <div className="border-t border-carbon-gray/40 pt-5 mt-4">
                  <button
                    onClick={() => handleNavClick('ecosystem')}
                    className="flex items-center gap-1 text-[10px] font-mono tracking-widest text-steel-gray hover:text-apex-gold transition-colors focus:outline-none"
                  >
                    VIEW PRODUCT MODULES <ChevronRight size={10} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. WHY APEX SYNC // PHILOSOPHY */}
      <section id="philosophy" className="bg-obsidian border-y border-carbon-gray py-24 relative overflow-hidden">
        {/* Abstract vector line design elements */}
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-apex-gold/2 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
                THE PRINCIPLE MOAT
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ivory-white mb-6">
                Why Apex Sync? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-apex-gold to-champagne-gold">
                  Our Core Philosophy.
                </span>
              </h2>
              <p className="font-sans text-sm text-platinum-gray leading-relaxed mb-6">
                We believe tomorrow's business leaders shouldn't rely on generic digital agencies or stateless APIs. Our entire organization is engineered to solve complexity through permanent intellectual assets.
              </p>
              <button
                onClick={() => handleNavClick('about')}
                className="flex items-center gap-2 text-xs font-mono tracking-widest text-apex-gold hover:text-champagne-gold transition-colors focus:outline-none"
              >
                READ THE ABOUT NARRATIVE <ChevronRight size={12} />
              </button>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              {philosophies.map((ph, idx) => {
                const IconComp = ph.icon;
                return (
                  <div 
                    key={idx}
                    className="p-6 bg-apex-black/50 border border-carbon-gray/50 rounded-sm hover:border-apex-gold/20 transition-all duration-300 flex items-start gap-5"
                  >
                    <div className="w-10 h-10 rounded bg-apex-gold/5 border border-apex-gold/15 flex items-center justify-center flex-shrink-0">
                      <IconComp size={18} className="text-apex-gold" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-ivory-white mb-1">
                        {ph.title}
                      </h3>
                      <p className="font-sans text-[11px] text-apex-gold tracking-wide mb-2 italic">
                        {ph.subtitle}
                      </p>
                      <p className="font-sans text-xs text-steel-gray leading-relaxed">
                        {ph.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. INSIGHTS */}
      <section id="insights-highlights" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
              JOURNAL INSIGHTS & INTELLECT
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ivory-white">
              The Knowledge Journal
            </h2>
          </div>
          <button
            onClick={() => handleNavClick('journal')}
            className="font-mono text-xs text-apex-gold hover:text-champagne-gold transition-colors flex items-center gap-2 cursor-pointer focus:outline-none uppercase tracking-widest"
          >
            EXPLORE THE FULL JOURNAL <ArrowRight size={14} />
          </button>
        </div>

        {/* Category filtering tags */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-carbon-gray/20">
          <span className="font-mono text-[10px] text-smoke-gray uppercase mr-3">Categories:</span>
          {insightCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 font-mono text-[10px] uppercase rounded-full transition-all focus:outline-none cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-apex-gold text-apex-black border-apex-gold font-bold'
                  : 'bg-transparent text-steel-gray border-carbon-gray/55 hover:text-ivory-white hover:border-carbon-gray'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.slice(0, 3).map((article) => (
            <div
              key={article.id}
              onClick={() => handleNavClick('journal')}
              className="bg-obsidian border border-carbon-gray rounded-sm p-6 cursor-pointer hover:border-apex-gold/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded bg-carbon-gray/50 border border-carbon-gray text-[10px] font-mono text-apex-gold">
                    {article.category}
                  </span>
                  <span className="font-mono text-[10px] text-steel-gray">{article.date}</span>
                </div>
                <h3 className="font-display font-semibold text-base text-ivory-white mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="font-sans text-xs text-platinum-gray line-clamp-3 leading-relaxed">
                  {article.subtitle}
                </p>
              </div>
              <span className="font-mono text-[10px] text-steel-gray mt-6 block">
                {article.readTime} // READ INSIGHT →
              </span>
            </div>
          ))}

          {filteredArticles.length === 0 && (
            <div className="col-span-3 text-center py-12 border border-dashed border-carbon-gray rounded bg-obsidian/30">
              <span className="font-mono text-xs text-steel-gray uppercase">No recent articles found in this category.</span>
            </div>
          )}
        </div>
      </section>

      {/* 8. PROCESS SECTION */}
      <section id="partnership-process" className="bg-obsidian border-y border-carbon-gray py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
              METHODICAL PARTNERSHIP PATHWAY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ivory-white mb-4">
              Our Process
            </h2>
            <p className="font-sans text-sm text-platinum-gray leading-relaxed max-w-xl mx-auto">
              We do not commit isolated code drops. We run a highly coordinated, sequential delivery journey designed to eliminate compliance and operational risk.
            </p>
          </div>

          {/* Interactive blueprint stage visualizer machine */}
          <BlueprintMachine />
        </div>
      </section>

      {/* REVELATION CLIMAX: CIRCUIT ZOOM OUT */}
      <CircuitZoomOut />

      {/* 9. PREMIUM CALL TO ACTION */}
      <section id="premium-cta" className="py-24 max-w-4xl mx-auto px-6 text-center">
        <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
          COMMENCEMENT // GET IN TOUCH
        </span>
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ivory-white mb-6">
          Let's Build What's Next.
        </h2>
        <div className="w-16 h-[1px] bg-apex-gold mx-auto mb-10" />
        
        <p className="font-sans text-base sm:text-lg text-platinum-gray max-w-2xl mx-auto mb-12 leading-relaxed">
          Most agencies build websites. Some agencies build apps. <br />
          <strong>Apex Sync builds intelligent systems that become part of how businesses operate.</strong>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full sm:w-auto bg-gradient-to-r from-apex-gold to-secondary-gold text-apex-black font-sans font-semibold text-xs tracking-wider uppercase px-10 py-4 rounded-sm hover:shadow-xl hover:shadow-apex-gold/10 transition-all duration-300 cursor-pointer focus:outline-none"
          >
            Start Your Project
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full sm:w-auto bg-transparent hover:bg-obsidian border border-carbon-gray text-ivory-white font-sans font-semibold text-xs tracking-wider uppercase px-10 py-4 rounded-sm transition-all duration-300 cursor-pointer focus:outline-none"
          >
            Book a Strategy Session
          </button>
        </div>
      </section>

    </div>
  );
}

// Inline fallback icons specifically structured to keep imports perfectly valid without errors
function GlobeIcon({ size, className }: { size?: number; className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size || 16} 
      height={size || 16} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
      <path d="M2 12h20"/>
    </svg>
  );
}

function HeartHandshakeIcon({ size, className }: { size?: number; className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size || 16} 
      height={size || 16} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a1.5 1.5 0 0 1 2 .12l1.91 1.91a2 2 0 0 1 0 2.82v0a2 2 0 0 1-2.82 0l-1.92-1.91"/>
    </svg>
  );
}

