/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PageId } from '../types';

interface FooterProps {
  onPageChange: (page: PageId) => void;
  onOpenLegalModal: (type: 'privacy' | 'terms' | 'cookies') => void;
}

export default function Footer({ onPageChange, onOpenLegalModal }: FooterProps) {
  const handleNavClick = (page: PageId) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-obsidian border-t border-carbon-gray relative overflow-hidden z-10">
      {/* Absolute faint background details */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-apex-gold/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo & Vision Block */}
          <div className="col-span-2 lg:col-span-2">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 mb-6 group cursor-pointer text-left focus:outline-none"
            >
              <div className="relative w-11 h-11 flex items-center justify-center">
                <img 
                  src="https://lh3.googleusercontent.com/d/1IDBwdJa-WOG5uKA-WTJsKTrau1dzkgnb" 
                  alt="Apex Sync Logo" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(201,162,39,0.65)] brightness-110 contrast-105 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-lg tracking-wider text-ivory-white">
                  APEX <span className="text-apex-gold">SYNC</span>
                </span>
                <span className="font-mono text-[9px] tracking-[0.2em] text-steel-gray">
                  INTELLIGENCE
                </span>
              </div>
            </button>
            <p className="font-sans text-sm text-platinum-gray max-w-sm mb-6 leading-relaxed">
              An Intelligence Engineering company focused on designing intelligent software, enterprise platforms, and digital infrastructure that expand human capability.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-steel-gray hover:text-apex-gold transition-colors focus:outline-none"
              >
                LINKEDIN
              </a>
              <span className="text-smoke-gray">/</span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-steel-gray hover:text-apex-gold transition-colors focus:outline-none"
              >
                GITHUB
              </a>
              <span className="text-smoke-gray">/</span>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-steel-gray hover:text-apex-gold transition-colors focus:outline-none"
              >
                X (TWITTER)
              </a>
            </div>
          </div>

          {/* Column 1: Company */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-xs tracking-wider text-apex-gold uppercase mb-2">
              Company
            </h4>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left text-sm text-steel-gray hover:text-ivory-white transition-colors cursor-pointer focus:outline-none"
            >
              About Apex Sync
            </button>
            <button
              onClick={() => handleNavClick('careers')}
              className="text-left text-sm text-steel-gray hover:text-ivory-white transition-colors cursor-pointer focus:outline-none"
            >
              Careers
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left text-sm text-steel-gray hover:text-ivory-white transition-colors cursor-pointer focus:outline-none"
            >
              Contact
            </button>
          </div>

          {/* Column 2: Ecosystem */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-xs tracking-wider text-apex-gold uppercase mb-2">
              Ecosystem
            </h4>
            <button
              onClick={() => handleNavClick('ecosystem')}
              className="text-left text-sm text-steel-gray hover:text-ivory-white transition-colors cursor-pointer focus:outline-none"
            >
              Overview
            </button>
            <button
              onClick={() => handleNavClick('ecosystem')}
              className="text-left text-sm text-steel-gray hover:text-ivory-white transition-colors cursor-pointer focus:outline-none"
            >
              Executive Intelligence
            </button>
            <span className="text-xs font-mono text-smoke-gray italic tracking-wider">
              Future Products (Soon)
            </span>
          </div>

          {/* Column 3: Services & Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-xs tracking-wider text-apex-gold uppercase mb-2">
              Capabilities
            </h4>
            <button
              onClick={() => handleNavClick('services')}
              className="text-left text-sm text-steel-gray hover:text-ivory-white transition-colors cursor-pointer focus:outline-none"
            >
              Intelligent Systems
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="text-left text-sm text-steel-gray hover:text-ivory-white transition-colors cursor-pointer focus:outline-none"
            >
              Enterprise AI
            </button>
            <button
              onClick={() => handleNavClick('journal')}
              className="text-left text-sm text-steel-gray hover:text-ivory-white transition-colors cursor-pointer focus:outline-none"
            >
              Research Journal
            </button>
          </div>
        </div>

        {/* Divider line with soft gold fade */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-carbon-gray to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-mono text-xs text-smoke-gray">
            Apex Sync &copy; 2026. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => onOpenLegalModal('privacy')}
              className="font-mono text-[10px] text-smoke-gray hover:text-steel-gray transition-colors cursor-pointer focus:outline-none uppercase"
            >
              PRIVACY POLICY
            </button>
            <button
              onClick={() => onOpenLegalModal('terms')}
              className="font-mono text-[10px] text-smoke-gray hover:text-steel-gray transition-colors cursor-pointer focus:outline-none uppercase"
            >
              TERMS OF SERVICE
            </button>
            <button
              onClick={() => onOpenLegalModal('cookies')}
              className="font-mono text-[10px] text-smoke-gray hover:text-steel-gray transition-colors cursor-pointer focus:outline-none uppercase"
            >
              COOKIE SETTINGS
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
