/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle, Cpu, Network, Shield, Sparkles, 
  Database, Briefcase, Wrench, Globe, Building, GraduationCap, 
  TrendingUp, Terminal, Code, Settings, Users, ArrowDown, ChevronRight
} from 'lucide-react';
import { PageId } from '../types';
import { CORPORATE_DIVISIONS, SPECIALIZED_SOLUTIONS } from '../data';

interface ServicesViewProps {
  onPageChange: (page: PageId) => void;
}

export default function ServicesView({ onPageChange }: ServicesViewProps) {
  const [activeDivisionId, setActiveDivisionId] = useState(CORPORATE_DIVISIONS[0].id);

  const activeDivision = CORPORATE_DIVISIONS.find(div => div.id === activeDivisionId) || CORPORATE_DIVISIONS[0];

  const steps = [
    { num: '01', title: 'Discover', desc: 'Understand your organization\'s current context, specific workflows, and operational knowledge blocks.' },
    { num: '02', title: 'Analyze', desc: 'Identify clear high-ROI opportunities where intelligent memory or decision systems generate permanent defensive value.' },
    { num: '03', title: 'Design', desc: 'Craft high-fidelity, polished user interfaces and custom cognitive system memory topologies.' },
    { num: '04', title: 'Build', desc: 'Engineer robust, secure, production-grade systems in modular code with extensive coverage.' },
    { num: '05', title: 'Validate', desc: 'Stress-test context alignment, safety guardrails, compliance logs, and responsiveness under load.' },
    { num: '06', title: 'Evolve', desc: 'Iterate, update, and fine-tune models to adapt automatically as your organizational scale grows.' },
  ];

  // Map division icons
  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'ai-enterprise-intelligence':
        return Cpu;
      case 'enterprise-operating-systems':
        return Terminal;
      case 'digital-platforms':
        return Code;
      case 'automation-integration':
        return Network;
      case 'customer-experience-solutions':
        return Users;
      case 'strategic-advisory':
        return Compass;
      default:
        return Sparkles;
    }
  };

  const Compass = Briefcase; // fallback

  return (
    <div id="services-view" className="w-full pt-20">
      {/* Hero Header */}
      <section id="services-hero" className="py-20 relative overflow-hidden border-b border-carbon-gray">
        <div className="absolute top-1/4 left-1/3 w-[320px] h-[320px] bg-apex-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
            CAPABILITIES & EXPERTISE
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ivory-white mb-6">
            Intelligent Solutions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-apex-gold to-champagne-gold">
              Built for Scale & Sovereignty.
            </span>
          </h1>
          <p className="font-sans text-lg text-platinum-gray leading-relaxed max-w-2xl mx-auto">
            Apex Sync operates across six specialized divisions, creating permanent, high-fidelity corporate cognitive assets designed around absolute reliability, security, and elite design.
          </p>
        </div>
      </section>

      {/* Corporate Division Explorer */}
      <section id="division-explorer" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
            01 // STRUCTURE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ivory-white mb-4">
            Six Corporate Divisions
          </h2>
          <p className="font-sans text-base text-steel-gray">
            Explore our deep organizational capabilities, custom-engineered products, and focused delivery categories.
          </p>
          
          {/* Visual division flow chart representation */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 font-mono text-[10px] text-smoke-gray uppercase tracking-wider bg-obsidian border border-carbon-gray/50 py-3.5 px-6 rounded-sm max-w-2xl mx-auto">
            {CORPORATE_DIVISIONS.map((div, idx) => (
              <span key={div.id} className="flex items-center gap-2">
                <span className={`transition-colors duration-300 ${activeDivisionId === div.id ? 'text-apex-gold font-bold' : ''}`}>
                  {div.num}
                </span>
                {idx < CORPORATE_DIVISIONS.length - 1 && <span className="text-carbon-gray/60">→</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Dynamic Division Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Vertical Navigation Bar */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            <span className="font-mono text-[9px] text-smoke-gray uppercase tracking-widest mb-1.5 px-3">
              SELECT DIVISION
            </span>
            {CORPORATE_DIVISIONS.map((division) => {
              const DivIcon = getDivisionIcon(division.id);
              const isActive = division.id === activeDivisionId;
              return (
                <button
                  key={division.id}
                  onClick={() => setActiveDivisionId(division.id)}
                  className={`flex items-center justify-between p-4.5 rounded-sm border transition-all duration-300 text-left focus:outline-none cursor-pointer group ${
                    isActive 
                      ? 'bg-obsidian border-apex-gold text-ivory-white' 
                      : 'bg-transparent border-carbon-gray/30 text-platinum-gray hover:border-carbon-gray hover:bg-carbon-gray/10'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`font-mono text-xs ${isActive ? 'text-apex-gold' : 'text-smoke-gray'}`}>
                      {division.num}
                    </span>
                    <div>
                      <h4 className="font-display font-semibold text-sm leading-tight">
                        {division.title}
                      </h4>
                    </div>
                  </div>
                  <DivIcon 
                    size={15} 
                    className={`transition-colors duration-300 ${isActive ? 'text-apex-gold animate-pulse' : 'text-smoke-gray group-hover:text-platinum-gray'}`} 
                  />
                </button>
              );
            })}
          </div>

          {/* Division Details Dashboard */}
          <div className="lg:col-span-8 bg-obsidian border border-carbon-gray p-8 rounded-sm relative min-h-[500px]">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-apex-gold/3 rounded-full blur-[60px] pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDivisionId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="font-mono text-[10px] text-apex-gold uppercase tracking-wider bg-apex-gold/10 px-2.5 py-1 border border-apex-gold/20 rounded-sm">
                      DIVISION {activeDivision.num}
                    </span>
                    <span className="font-mono text-[10px] text-smoke-gray">APEX_SYNC_DIV_SEC</span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ivory-white mb-2">
                    {activeDivision.title}
                  </h2>
                  <p className="font-sans text-sm text-apex-gold italic mb-8 leading-relaxed">
                    {activeDivision.tagline}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activeDivision.subCategories.map((sub, idx) => (
                      <div 
                        key={idx} 
                        className="p-5 bg-apex-black border border-carbon-gray/50 rounded-sm hover:border-carbon-gray transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <h3 className="font-display font-semibold text-sm text-ivory-white mb-2 pb-2 border-b border-carbon-gray/30 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-apex-gold rounded-full" />
                            {sub.title}
                          </h3>
                          {sub.purpose && (
                            <p className="font-sans text-xs text-platinum-gray leading-relaxed mb-4">
                              {sub.purpose}
                            </p>
                          )}
                        </div>

                        <div className="mt-4 flex flex-col gap-3">
                          {/* Render lists dynamically based on what fields exist */}
                          {sub.capabilities && (
                            <div>
                              <span className="font-mono text-[8px] text-smoke-gray uppercase tracking-widest block mb-1.5">Capabilities</span>
                              <div className="flex flex-wrap gap-1.5">
                                {sub.capabilities.map((cap, i) => (
                                  <span key={i} className="font-mono text-[8.5px] px-2 py-0.5 border border-carbon-gray/80 text-steel-gray bg-carbon-gray/10 uppercase rounded-sm">
                                    {cap}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {sub.perfectFor && (
                            <div>
                              <span className="font-mono text-[8px] text-apex-gold uppercase tracking-widest block mb-1">Perfect For</span>
                              <div className="flex flex-wrap gap-1.5">
                                {sub.perfectFor.map((pf, i) => (
                                  <span key={i} className="font-sans text-[9px] font-semibold px-2 py-0.5 bg-apex-gold/10 text-apex-gold border border-apex-gold/25 rounded-sm">
                                    {pf}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {sub.industries && (
                            <div>
                              <span className="font-mono text-[8px] text-smoke-gray uppercase tracking-widest block mb-1">Target Industries</span>
                              <div className="flex flex-wrap gap-1.5">
                                {sub.industries.map((ind, i) => (
                                  <span key={i} className="font-mono text-[8.5px] px-2 py-0.5 border border-carbon-gray/80 text-steel-gray bg-carbon-gray/10 uppercase rounded-sm">
                                    {ind}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {sub.modules && (
                            <div>
                              <span className="font-mono text-[8px] text-apex-gold uppercase tracking-widest block mb-1.5">Sovereign Modules Grid</span>
                              <div className="grid grid-cols-3 gap-1">
                                {sub.modules.map((mod, i) => (
                                  <div key={i} className="border border-carbon-gray/40 bg-apex-black/50 p-1.5 rounded-sm text-center font-mono text-[8px] text-smoke-gray uppercase tracking-tighter truncate hover:border-apex-gold/30 hover:text-ivory-white transition-colors duration-150">
                                    {mod}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {sub.examples && (
                            <div>
                              <span className="font-mono text-[8px] text-smoke-gray uppercase tracking-widest block mb-1">Operations Matrix</span>
                              <div className="flex flex-wrap gap-1.5">
                                {sub.examples.map((ex, i) => (
                                  <span key={i} className="font-mono text-[8.5px] px-2 py-0.5 border border-carbon-gray/50 text-platinum-gray bg-carbon-gray/10 uppercase rounded-sm">
                                    {ex}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {sub.displays && (
                            <div>
                              <span className="font-mono text-[8px] text-smoke-gray uppercase tracking-widest block mb-1">Telemetry Displays</span>
                              <div className="flex flex-wrap gap-1.5">
                                {sub.displays.map((disp, i) => (
                                  <span key={i} className="font-mono text-[8.5px] px-2 py-0.5 border border-carbon-gray text-emerald-400/80 bg-carbon-gray/5 uppercase rounded-sm">
                                    {disp}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {sub.features && (
                            <div>
                              <span className="font-mono text-[8px] text-smoke-gray uppercase tracking-widest block mb-1">Integrated Features</span>
                              <div className="flex flex-wrap gap-1.5">
                                {sub.features.map((feat, i) => (
                                  <span key={i} className="font-mono text-[8.5px] px-2 py-0.5 border border-carbon-gray/80 text-steel-gray bg-carbon-gray/10 uppercase rounded-sm">
                                    {feat}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {sub.deliverables && (
                            <div>
                              <span className="font-mono text-[8px] text-smoke-gray uppercase tracking-widest block mb-1">Strategic Deliverables</span>
                              <div className="flex flex-wrap gap-1.5">
                                {sub.deliverables.map((del, i) => (
                                  <span key={i} className="font-mono text-[8.5px] px-2 py-0.5 border border-apex-gold/20 text-apex-gold bg-apex-gold/5 uppercase rounded-sm">
                                    {del}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {sub.includes && (
                            <div>
                              <span className="font-mono text-[8px] text-smoke-gray uppercase tracking-widest block mb-1">Design Scope</span>
                              <div className="flex flex-wrap gap-1.5">
                                {sub.includes.map((inc, i) => (
                                  <span key={i} className="font-mono text-[8.5px] px-2 py-0.5 border border-carbon-gray/80 text-steel-gray bg-carbon-gray/10 uppercase rounded-sm">
                                    {inc}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {sub.topics && (
                            <div>
                              <span className="font-mono text-[8px] text-smoke-gray uppercase tracking-widest block mb-1">Workshop Curriculums</span>
                              <div className="flex flex-wrap gap-1.5">
                                {sub.topics.map((top, i) => (
                                  <span key={i} className="font-mono text-[8.5px] px-2 py-0.5 border border-carbon-gray text-platinum-gray bg-carbon-gray/10 uppercase rounded-sm">
                                    {top}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 pt-6 border-t border-carbon-gray/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 font-mono text-[10px] text-smoke-gray">
                    <CheckCircle size={12} className="text-apex-gold" />
                    <span>GUARANTEED ZERO-LEAK SOVEREIGNTY IN DIVISION {activeDivision.num}</span>
                  </div>
                  <button
                    onClick={() => onPageChange('contact')}
                    className="font-mono text-[10px] text-apex-gold hover:text-ivory-white transition-colors duration-200 uppercase tracking-widest flex items-center gap-1.5 cursor-pointer focus:outline-none"
                  >
                    Initiate Division Connection <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Specialised Industry Solutions Section */}
      <section id="specialised-solutions" className="bg-obsidian border-y border-carbon-gray py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
              02 // DEDICATED PRODUCTS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ivory-white mb-4">
              Specialised Industry Solutions
            </h2>
            <p className="font-sans text-base text-steel-gray">
              Pre-engineered industry kernels ready for localized training, container encapsulation, and custom organizational deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPECIALIZED_SOLUTIONS.map((solution) => (
              <div 
                key={solution.id}
                className="bg-apex-black border border-carbon-gray rounded-sm p-6 flex flex-col justify-between hover:border-apex-gold/30 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-apex-gold/2 rounded-full blur-[35px] pointer-events-none transition-opacity duration-300 group-hover:bg-apex-gold/4" />
                
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    {solution.id === 'legal' && <Shield size={14} className="text-apex-gold" />}
                    {solution.id === 'finance' && <Database size={14} className="text-apex-gold" />}
                    {solution.id === 'healthcare' && <Cpu size={14} className="text-apex-gold" />}
                    {solution.id === 'university' && <GraduationCap size={14} className="text-apex-gold" />}
                    {solution.id === 'manufacturing' && <Building size={14} className="text-apex-gold" />}
                    {solution.id === 'semiconductor' && <TrendingUp size={14} className="text-apex-gold" />}
                    
                    <span className="font-mono text-[9px] uppercase tracking-widest text-smoke-gray">
                      {solution.id}_KERNEL
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-lg text-ivory-white mb-4">
                    {solution.title}
                  </h3>

                  <ul className="flex flex-col gap-2 mb-6">
                    {solution.features.map((feat, i) => (
                      <li key={i} className="font-sans text-xs text-steel-gray flex items-center gap-2">
                        <span className="w-1 h-1 bg-apex-gold/60 rounded-full" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-carbon-gray/30 pt-4 flex items-center justify-between text-mono">
                  <span className="font-mono text-[9px] text-smoke-gray uppercase">DEPLOYABLE NOW</span>
                  <button 
                    onClick={() => onPageChange('contact')}
                    className="font-mono text-[10px] text-apex-gold hover:text-ivory-white transition-colors duration-200 cursor-pointer focus:outline-none flex items-center gap-1 group-hover:translate-x-1"
                  >
                    Details <ChevronRight size={10} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Methodical Process Section */}
      <section id="process-timeline" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
            03 // METHODOLOGY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ivory-white mb-4">
            Our 6-Step Partnership Process
          </h2>
          <p className="font-sans text-base text-steel-gray leading-relaxed">
            We do not believe in fragmented code dumps. We work sequentially as a synchronized product team to translate your business constraints into permanent high-fidelity assets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-obsidian border border-carbon-gray rounded-sm p-6 relative hover:border-apex-gold/30 transition-all duration-300 group"
            >
              <div className="absolute top-4 right-4 font-mono text-4xl font-bold text-carbon-gray/20 select-none group-hover:text-apex-gold/15 transition-colors duration-300">
                {step.num}
              </div>
              <h3 className="font-display text-lg font-semibold text-ivory-white mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-xs text-steel-gray leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Block */}
      <section id="services-cta" className="py-24 max-w-4xl mx-auto px-6 text-center border-t border-carbon-gray/30">
        <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
          COMMENCEMENT
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ivory-white mb-6">
          Ready to Secure Your Institutional Memory?
        </h2>
        <p className="font-sans text-base text-platinum-gray leading-relaxed mb-8 max-w-2xl mx-auto">
          We invite you to schedule an engineering briefing. Our product designers and systems architects are ready to review your infrastructure security posture and detail implementation roadmaps.
        </p>
        <button
          onClick={() => onPageChange('contact')}
          className="bg-gradient-to-r from-apex-gold to-secondary-gold text-apex-black font-sans font-semibold text-sm px-10 py-4 rounded-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 cursor-pointer focus:outline-none uppercase tracking-wider font-mono"
        >
          Schedule an Engineering Briefing
        </button>
      </section>
    </div>
  );
}
