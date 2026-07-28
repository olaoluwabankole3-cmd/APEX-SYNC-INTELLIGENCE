/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import { 
  ArrowRight, Cpu, LayoutGrid, Server, Code, Layers, 
  Terminal, Database, Users, TrendingUp, Network, Globe, Shield, Check
} from 'lucide-react';
import { PageId } from '../types';
import { ECOSYSTEM_PRODUCTS, FUTURE_PRODUCTS_LIST } from '../data';
import InteractiveShowcase from './InteractiveShowcase';

interface EcosystemViewProps {
  onPageChange: (page: PageId) => void;
}

export default function EcosystemView({ onPageChange }: EcosystemViewProps) {
  const currentProduct = ECOSYSTEM_PRODUCTS.find(p => p.id === 'executive-intelligence');

  // Map product icons
  const getProductIcon = (id: string) => {
    switch (id) {
      case 'apex-core':
        return Database;
      case 'apex-one':
        return Terminal;
      case 'apex-connect':
        return Users;
      case 'apex-insights':
        return TrendingUp;
      case 'apex-ai':
        return Cpu;
      case 'apex-flow':
        return Network;
      case 'apex-network':
        return Globe;
      default:
        return Layers;
    }
  };

  return (
    <div id="ecosystem-view" className="w-full pt-20">
      {/* Hero Header */}
      <section id="ecosystem-hero" className="py-20 relative overflow-hidden border-b border-carbon-gray">
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-apex-gold/5 rounded-full blur-[100px] pointer-events-none animate-ambient-glow" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
            THE PLATFORM SUITE
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ivory-white mb-6">
            The Apex Sync Ecosystem <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-apex-gold to-champagne-gold">
              Connected Intelligence Networks.
            </span>
          </h1>
          <p className="font-sans text-lg text-platinum-gray leading-relaxed max-w-2xl mx-auto">
            Apex Sync is built around a growing, cohesive family of platforms—not isolated applications. Every new initiative strengthens and shares organizational memory.
          </p>
        </div>
      </section>

      {/* Flagship Section with Mounted Simulator */}
      <section id="flagship-product-section" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="px-2.5 py-1 rounded bg-apex-gold/10 border border-apex-gold/30 text-[10px] font-mono text-apex-gold uppercase tracking-wider inline-block mb-4">
              ACTIVE FLAGSHIP DEVELOPMENTS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ivory-white mb-4">
              {currentProduct?.name}
            </h2>
            <p className="font-sans text-sm text-platinum-gray italic mb-6 leading-relaxed">
              {currentProduct?.tagline}
            </p>
            <p className="font-sans text-sm text-steel-gray leading-relaxed mb-6">
              {currentProduct?.longDescription}
            </p>

            <div className="border-t border-carbon-gray/50 pt-6">
              <h4 className="font-mono text-[10px] text-apex-gold uppercase tracking-wider mb-3">
                CORE CAPABILITIES:
              </h4>
              <ul className="flex flex-col gap-2.5">
                {currentProduct?.capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-platinum-gray leading-relaxed">
                    <span className="text-apex-gold font-bold mt-0.5">•</span>
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Mounted Interactive Dashboard Simulator */}
            <div className="mb-6">
              <span className="font-mono text-xs text-steel-gray uppercase tracking-widest block mb-3">
                INTELLIGENT CONSOLE RUNTIME PREVIEW:
              </span>
              <InteractiveShowcase />
            </div>
            <p className="font-mono text-[10px] text-smoke-gray leading-relaxed text-center">
              *Simulation of sovereign secure engine analyzing context metrics. Real weights run inside isolated cloud run sandboxes.
            </p>
          </div>
        </div>
      </section>

      {/* Future Roadmap Pipeline Stack - Custom-built for APEX FUTURE PRODUCTS */}
      <section id="future-roadmap-section" className="bg-obsidian border-y border-carbon-gray py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
              FUTURE PRODUCTS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ivory-white mb-4">
              The Sovereign Product Roadmap
            </h2>
            <p className="font-sans text-base text-steel-gray leading-relaxed">
              These are core ecosystem products, not isolated services. They are designed to plug directly into the shared APEX CORE foundation, avoiding costly structural duplication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FUTURE_PRODUCTS_LIST.map((product) => {
              const IconComp = getProductIcon(product.id);
              return (
                <div
                  key={product.id}
                  className="bg-apex-black border border-carbon-gray rounded-sm p-6 hover:border-apex-gold/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-apex-gold/1 rounded-full blur-[30px] pointer-events-none group-hover:bg-apex-gold/3 transition-opacity" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-9 h-9 rounded bg-carbon-gray/20 border border-carbon-gray/40 flex items-center justify-center">
                        <IconComp size={16} className="text-apex-gold" />
                      </div>
                      <span className="font-mono text-[8px] px-2.5 py-0.5 rounded bg-carbon-gray/10 border border-carbon-gray/30 text-smoke-gray uppercase tracking-widest">
                        Ecosystem Product
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-lg text-ivory-white mb-1">
                      {product.name}
                    </h3>
                    <p className="font-mono text-[10px] text-apex-gold mb-4 uppercase tracking-wider">
                      {product.tagline}
                    </p>
                    <p className="font-sans text-xs text-steel-gray leading-relaxed mb-6">
                      {product.description}
                    </p>
                  </div>

                  {product.examples && (
                    <div className="border-t border-carbon-gray/30 pt-4 mt-2">
                      <h5 className="font-mono text-[8px] text-smoke-gray uppercase tracking-widest mb-2.5">
                        PLATFORM INSTANCES:
                      </h5>
                      <div className="grid grid-cols-2 gap-2">
                        {product.examples.map((ex, idy) => (
                          <div key={idy} className="flex items-center gap-1.5 font-mono text-[9px] text-platinum-gray">
                            <span className="w-1 h-1 bg-apex-gold rounded-full" />
                            {ex.replace(' Network', '')}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {!product.examples && (
                    <div className="border-t border-carbon-gray/30 pt-4 mt-2 flex items-center justify-between">
                      <span className="font-mono text-[8px] text-smoke-gray uppercase">PRE-ENGINEERED</span>
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architectural Philosophy Section */}
      <section id="ecosystem-philosophy" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
              ARCHITECTURE PRINCIPLE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ivory-white mb-6">
              The Knowledge Flywheel
            </h2>
            <p className="font-sans text-sm text-platinum-gray leading-relaxed mb-4">
              At Apex Sync, research feeding into core algorithms creates proprietary intelligence. This intelligence shapes our sovereign platforms, which support client actions and create feedback loops, driving deeper research.
            </p>
            <p className="font-sans text-sm text-platinum-gray leading-relaxed">
              This continuous, closed-loop flywheel ensures that your business assets never rot—they build defensive depth month after month.
            </p>
          </div>
          <div className="lg:col-span-6 border-l-0 lg:border-l border-carbon-gray pl-0 lg:pl-12 pt-10 lg:pt-0 flex flex-col gap-6">
            <div className="flex gap-4">
              <span className="font-mono text-lg font-bold text-apex-gold">01</span>
              <div>
                <h4 className="font-display font-semibold text-sm text-ivory-white mb-1">Research & Discovery</h4>
                <p className="font-sans text-xs text-steel-gray leading-relaxed">Continuous testing of RAG correlation frameworks and memory topologies in our private human-AI collaboration labs.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="font-mono text-lg font-bold text-apex-gold">02</span>
              <div>
                <h4 className="font-display font-semibold text-sm text-ivory-white mb-1">Durable Model Fine-Tuning</h4>
                <p className="font-sans text-xs text-steel-gray leading-relaxed">Translating verified algorithms into active platform weights hosted on secure, isolated sandbox cloud infrastructure.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="font-mono text-lg font-bold text-apex-gold">03</span>
              <div>
                <h4 className="font-display font-semibold text-sm text-ivory-white mb-1">Context Synchronization</h4>
                <p className="font-sans text-xs text-steel-gray leading-relaxed">Synchronizing information across calendars, financial briefs, and meeting briefs to continuously refine execution pathways.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
