/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onPageChange: (page: PageId) => void;
  onLogoClick?: () => void;
}

export default function Header({ currentPage, onPageChange, onLogoClick }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: PageId }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Company', id: 'about' },
    { label: 'Ecosystem', id: 'ecosystem' },
    { label: 'Services', id: 'services' },
    { label: 'Journal', id: 'journal' },
    { label: 'Careers', id: 'careers' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onPageChange(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-apex-black/90 backdrop-blur-md border-b border-carbon-gray py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          id="logo-button"
          onClick={() => {
            handleNavClick('home');
            onLogoClick?.();
          }}
          className="magnetic flex items-center gap-3 cursor-pointer group focus:outline-none"
        >
          <div className="relative w-11 h-11 flex items-center justify-center">
            <img 
              src="https://lh3.googleusercontent.com/d/1IDBwdJa-WOG5uKA-WTJsKTrau1dzkgnb" 
              alt="Apex Sync Logo" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(201,162,39,0.65)] brightness-110 contrast-105 transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="font-display font-bold text-lg tracking-wider text-ivory-white">
              APEX <span className="text-apex-gold">SYNC</span>
            </span>
            <span className="font-mono text-[9px] tracking-[0.2em] text-steel-gray">
              INTELLIGENCE
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                id={`nav-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`magnetic relative px-4 py-2 font-sans font-medium text-sm transition-colors cursor-pointer rounded-md focus:outline-none focus:ring-1 focus:ring-apex-gold/50 ${
                  isActive ? 'text-apex-gold font-semibold' : 'text-platinum-gray hover:text-ivory-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="header-active-pill"
                    className="absolute inset-0 bg-carbon-gray/40 rounded-md -z-10 border border-carbon-gray/60"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:block">
          <button
            id="header-cta"
            onClick={() => handleNavClick('contact')}
            className="magnetic flex items-center gap-2 bg-gradient-to-r from-apex-gold to-secondary-gold hover:from-secondary-gold hover:to-champagne-gold text-apex-black font-sans font-semibold text-xs px-5 py-2.5 rounded-sm hover:shadow-lg hover:shadow-apex-gold/10 transition-all duration-300 cursor-pointer focus:outline-none"
          >
            Get in Touch
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-trigger"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-platinum-gray hover:text-ivory-white cursor-pointer focus:outline-none"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-full left-0 w-full h-[100vh] bg-apex-black/98 backdrop-blur-lg z-40 border-t border-carbon-gray px-6 py-10 flex flex-col justify-start lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, idx) => {
                const isActive = currentPage === item.id;
                return (
                  <motion.button
                    id={`mobile-nav-${item.id}`}
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left font-display text-2xl font-medium tracking-tight py-2 border-b border-carbon-gray/20 focus:outline-none ${
                      isActive ? 'text-apex-gold' : 'text-platinum-gray hover:text-ivory-white'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}

              <motion.button
                id="mobile-cta"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                onClick={() => handleNavClick('contact')}
                className="mt-8 flex items-center justify-between bg-gradient-to-r from-apex-gold to-secondary-gold text-apex-black font-sans font-semibold text-sm px-6 py-4 rounded-sm hover:shadow-lg focus:outline-none"
              >
                Start a Conversation
                <ArrowRight size={18} />
              </motion.button>
            </div>
            <div className="mt-auto pb-20 text-center">
              <p className="font-mono text-xs text-smoke-gray">
                Apex Sync &copy; 2026. All rights reserved.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
