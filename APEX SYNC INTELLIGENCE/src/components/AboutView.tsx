/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import { Shield, Sparkles, Brain, Code, Target, Heart } from 'lucide-react';
import { PageId } from '../types';

interface AboutViewProps {
  onPageChange: (page: PageId) => void;
}

export default function AboutView({ onPageChange }: AboutViewProps) {
  return (
    <div id="about-view" className="w-full pt-20">
      {/* Hero Header */}
      <section id="about-hero" className="py-20 relative overflow-hidden border-b border-carbon-gray">
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-apex-gold/5 rounded-full blur-[100px]" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block animate-pulse">
            COMPANY IDENTITY
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ivory-white mb-6">
            We Engineer Intelligence <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-apex-gold to-champagne-gold">
              To Expand Human Potential.
            </span>
          </h1>
          <p className="font-sans text-lg text-platinum-gray leading-relaxed max-w-2xl mx-auto">
            Apex Sync is an Intelligence Engineering company focused on designing intelligent software, enterprise platforms, and digital infrastructure that help teams operate with greater clarity and trust.
          </p>
        </div>
      </section>

      {/* Brand Story Deep Dive */}
      <section id="brand-story-section" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 sticky top-28">
            <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
              THE STORY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ivory-white mb-6">
              The World Has Changed. <br />
              <span className="text-steel-gray">The Problem Is Complexity.</span>
            </h2>
            <div className="h-[1px] w-24 bg-apex-gold mb-6" />
            <p className="font-sans text-base text-platinum-gray leading-relaxed mb-6">
              For decades, software helped businesses become efficient. We built tools for accounting, files, and chats.
            </p>
            <p className="font-sans text-base text-steel-gray leading-relaxed">
              But today's challenge is different. We are overwhelmed by information volume. Knowledge fragments, context disappears, and lessons are forgotten. We exist to solve that disconnected intelligence.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-10 border-l-0 lg:border-l border-carbon-gray pl-0 lg:pl-12 pt-10 lg:pt-0">
            <div>
              <h3 className="font-display text-lg font-semibold text-ivory-white mb-4">
                Our Perspective on Artificial Intelligence
              </h3>
              <p className="font-sans text-sm text-platinum-gray leading-relaxed mb-4">
                Much of today's AI is designed around a single stateless interaction: Ask. Receive. Repeat. While useful, this treats every conversation as if it begins from zero.
              </p>
              <p className="font-sans text-sm text-platinum-gray leading-relaxed">
                We believe intelligence should be continuous. Every interaction should build understanding. Every conversation should contribute to long-term memory.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-ivory-white mb-4">
                More Than Just a Single Product
              </h3>
              <p className="font-sans text-sm text-platinum-gray leading-relaxed mb-4">
                The Executive AI currently under development is only the first product inside the expanding Apex Sync ecosystem.
              </p>
              <p className="font-sans text-sm text-platinum-gray leading-relaxed">
                Our long-term roadmap extends into Enterprise Productivity, Sovereign Developer APIs, secure cloud systems, and cooperative human-AI research initiatives.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-ivory-white mb-4">
                The Legacy We Want to Leave
              </h3>
              <p className="font-sans text-sm text-platinum-gray leading-relaxed mb-4">
                We measure success not by the volume of products we release, but by the weight of problems we solve.
              </p>
              <p className="font-sans text-sm text-platinum-gray leading-relaxed">
                We want to be remembered because our technology quietly improved how people work every day, preserving context so organizational intelligence compounds over generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Company Values / Principles */}
      <section id="values-section" className="bg-obsidian border-y border-carbon-gray py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
              OUR BELIEFS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ivory-white mb-4">
              The Principles That Guide Us
            </h2>
            <p className="font-sans text-base text-platinum-gray leading-relaxed">
              Every system we engineer, line of code we write, and strategic partnership we build is guided by these core directives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-apex-black border border-carbon-gray rounded-sm">
              <div className="w-12 h-12 rounded bg-apex-gold/10 flex items-center justify-center mb-6 border border-apex-gold/20">
                <Shield size={22} className="text-apex-gold" />
              </div>
              <h3 className="font-display font-semibold text-lg text-ivory-white mb-3">
                Uncompromising Trust
              </h3>
              <p className="font-sans text-sm text-steel-gray leading-relaxed">
                Security is built into every layer—not added later. We ensure extreme data sovereignty and bank-grade privacy controls so your proprietary intelligence remains yours.
              </p>
            </div>

            <div className="p-8 bg-apex-black border border-carbon-gray rounded-sm">
              <div className="w-12 h-12 rounded bg-apex-gold/10 flex items-center justify-center mb-6 border border-apex-gold/20">
                <Code size={22} className="text-apex-gold" />
              </div>
              <h3 className="font-display font-semibold text-lg text-ivory-white mb-3">
                Disciplined Craftsmanship
              </h3>
              <p className="font-sans text-sm text-steel-gray leading-relaxed">
                We prioritize premium visual restraint, meticulous spacing, and production-quality code. We avoid flashing visual noise to focus purely on elegant, dependable performance.
              </p>
            </div>

            <div className="p-8 bg-apex-black border border-carbon-gray rounded-sm">
              <div className="w-12 h-12 rounded bg-apex-gold/10 flex items-center justify-center mb-6 border border-apex-gold/20">
                <Target size={22} className="text-apex-gold" />
              </div>
              <h3 className="font-display font-semibold text-lg text-ivory-white mb-3">
                Human Augmentation
              </h3>
              <p className="font-sans text-sm text-steel-gray leading-relaxed">
                Our objective is not to replace human intelligence, but to expand it. We build cooperative software that respects your attention, helping you spend less time managing complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Hook */}
      <section id="about-culture" className="py-24 max-w-4xl mx-auto px-6 text-center">
        <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
          JOIN US
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ivory-white mb-6">
          Do the Best Work of Your Career.
        </h2>
        <p className="font-sans text-base text-platinum-gray leading-relaxed mb-8">
          We are slowly and intentionally building an elite team of researchers, backend systems engineers, and product designers who care about the fine-grained details.
        </p>
        <button
          onClick={() => onPageChange('careers')}
          className="bg-gradient-to-r from-apex-gold to-secondary-gold text-apex-black font-sans font-semibold text-xs px-8 py-3.5 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer focus:outline-none"
        >
          View Open Opportunities
        </button>
      </section>
    </div>
  );
}
