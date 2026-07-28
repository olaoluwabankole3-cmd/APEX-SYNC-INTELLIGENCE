/**
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Sparkles, Orbit, Landmark, Cpu } from 'lucide-react';

export default function CircuitZoomOut() {
  const [zoomScale, setZoomScale] = useState(100); // 100 = full website layout, 1 = silicon microchip
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync zoomScale with scroll position inside this final segment
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const handleScroll = () => {
            const rect = entry.target.getBoundingClientRect();
            const sectionHeight = rect.height;
            const scrollPos = -rect.top; // scroll progress inside section
            
            // Map scroll ratio: 0 (at top of section) to 1 (scrolled past)
            // Scale should decrease from 100 to 10 as we scroll down
            let ratio = (scrollPos + window.innerHeight / 2) / sectionHeight;
            ratio = Math.max(0, Math.min(1, ratio));
            
            // Inverse ease mapping
            const targetScale = 100 - ratio * 85; // shrinks down to 15%
            setZoomScale(targetScale);
          };
          
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full bg-apex-black py-28 border-t border-carbon-gray/40 overflow-hidden flex flex-col items-center justify-center select-none"
    >
      {/* Absolute faint stardust background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-35" />

      <div className="max-w-4xl mx-auto px-6 w-full text-center relative z-10 flex flex-col items-center">
        
        <div className="inline-flex items-center gap-2 bg-obsidian border border-carbon-gray px-3.5 py-1.5 rounded-full mb-6">
          <Cpu size={12} className="text-apex-gold animate-pulse" />
          <span className="font-mono text-[9px] tracking-widest text-platinum-gray uppercase">
            REVELATION // INTEGRATED CORE COGNITION
          </span>
        </div>

        <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ivory-white mb-6">
          Everything is Connected.
        </h3>

        <p className="font-sans text-xs sm:text-sm text-platinum-gray max-w-2xl mx-auto mb-10 leading-relaxed">
          The apps, the data stores, the AI modules, the financial integrations we construct are not isolated files. They operate seamlessly as sub-components inside a single, unified, sovereign digital ecosystem.
        </p>

        {/* Dynamic Zooming Canvas Wrapper */}
        <div 
          className="relative w-full max-w-xl h-[380px] bg-obsidian border border-carbon-gray rounded p-4 flex items-center justify-center overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Inner Schematic blueprint lines representing the macro circuit board */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none text-apex-gold/15" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Horizontal Bus wires */}
            <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="0.15" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.2" />
            <line x1="0" y1="80" x2="100" y2="80" stroke="currentColor" strokeWidth="0.15" />

            {/* Vertical Bus wires */}
            <line x1="20" y1="0" x2="20" y2="100" stroke="currentColor" strokeWidth="0.15" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.2" />
            <line x1="80" y1="0" x2="80" y2="100" stroke="currentColor" strokeWidth="0.15" />

            {/* Circuit pathway curves branching from central chip */}
            <path d="M 10 20 L 30 20 L 40 40 L 40 50" fill="none" stroke="currentColor" strokeWidth="0.25" strokeDasharray="1 1" />
            <path d="M 90 20 L 70 20 L 60 40 L 60 50" fill="none" stroke="currentColor" strokeWidth="0.25" strokeDasharray="1 1" />
            <path d="M 10 80 L 30 80 L 40 60 L 40 50" fill="none" stroke="currentColor" strokeWidth="0.25" strokeDasharray="1 1" />
            <path d="M 90 80 L 70 80 L 60 60 L 60 50" fill="none" stroke="currentColor" strokeWidth="0.25" strokeDasharray="1 1" />

            {/* Outer perimeter pins */}
            <circle cx="20" cy="20" r="1" fill="#C9A227" className="animate-ping" />
            <circle cx="80" cy="20" r="1" fill="#C9A227" />
            <circle cx="20" cy="80" r="1" fill="#C9A227" />
            <circle cx="80" cy="80" r="1" fill="#C9A227" className="animate-ping" />
          </svg>

          {/* Central Silicon microchip graphic (Visible when zoomed out) */}
          <div 
            className="absolute transition-all duration-300 flex flex-col items-center justify-center pointer-events-none"
            style={{
              opacity: zoomScale < 45 ? (45 - zoomScale) / 35 : 0,
              transform: `scale(${1 - (zoomScale / 110)})`,
            }}
          >
            {/* Glowing gold processor */}
            <div className="w-28 h-28 bg-gradient-to-tr from-apex-black to-obsidian border-2 border-apex-gold rounded shadow-[0_0_30px_rgba(201,162,39,0.5)] flex flex-col items-center justify-center p-2">
              <div className="relative w-12 h-12 flex items-center justify-center mb-1.5">
                <img 
                  src="https://lh3.googleusercontent.com/d/1IDBwdJa-WOG5uKA-WTJsKTrau1dzkgnb" 
                  alt="Apex Sync CPU Logo" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(201,162,39,0.65)] brightness-110 contrast-105 animate-pulse"
                />
              </div>
              <span className="font-display font-black text-[9px] tracking-widest text-ivory-white text-center">
                APEX SYNC
              </span>
              <span className="font-mono text-[6px] text-apex-gold">
                COGNITIVE v1
              </span>
            </div>
            
            {/* Explanatory subtitle */}
            <span className="mt-3 font-mono text-[7px] text-apex-gold uppercase tracking-widest">
              Sovereign Intelligence CPU Core
            </span>
          </div>

          {/* Website Canvas Interface Mockup (Shrinks down dynamically) */}
          <div
            style={{
              transform: `scale(${zoomScale / 100})`,
              opacity: zoomScale > 15 ? (zoomScale - 15) / 85 : 0,
            }}
            className="w-[90%] max-w-sm aspect-video bg-gradient-to-b from-obsidian to-apex-black border border-carbon-gray rounded shadow-2xl relative flex flex-col justify-between p-3 overflow-hidden select-none"
          >
            {/* Header elements in mini-site */}
            <div className="flex items-center justify-between border-b border-carbon-gray/30 pb-1.5">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-apex-gold rounded-sm" />
                <span className="font-display text-[7px] font-bold text-ivory-white tracking-widest">APEX SYNC</span>
              </div>
              <div className="flex gap-1.5 font-mono text-[4.5px] text-platinum-gray">
                <span>SERVICES</span>
                <span>SYSTEMS</span>
                <span>JOURNAL</span>
              </div>
            </div>

            {/* Inner dynamic content representational boxes */}
            <div className="flex-grow flex flex-col justify-center gap-2 py-2">
              <div className="h-2 bg-gradient-to-r from-apex-gold to-secondary-gold rounded w-3/4 mx-auto" />
              <div className="h-1 bg-carbon-gray/55 rounded w-1/2 mx-auto" />
              <div className="grid grid-cols-3 gap-1.5 mt-1">
                <div className="h-5 bg-carbon-gray/20 rounded border border-carbon-gray/10" />
                <div className="h-5 bg-carbon-gray/20 rounded border border-carbon-gray/10" />
                <div className="h-5 bg-carbon-gray/20 rounded border border-carbon-gray/10" />
              </div>
            </div>

            {/* Mini Footer */}
            <div className="flex items-center justify-between border-t border-carbon-gray/20 pt-1 text-smoke-gray font-mono text-[4px]">
              <span>EST. 2025</span>
              <span>ALL RIGHTS RESERVED</span>
            </div>
          </div>
        </div>

        {/* Dynamic Zoom Scale Scroll controller info */}
        <div className="mt-8 flex flex-col items-center gap-3 w-full max-w-xs">
          <div className="flex justify-between items-center w-full font-mono text-[10px] text-steel-gray">
            <span>ZOOM VIEW: {Math.round(zoomScale)}%</span>
            <span>{zoomScale < 45 ? 'SILICON MICROCHIP VIEW' : 'MACRO SYSTEM VIEW'}</span>
          </div>
          
          <div className="flex items-center gap-3 w-full">
            <span className="font-mono text-[9px] text-smoke-gray">MICRO</span>
            <input 
              type="range" 
              min="15" 
              max="100" 
              value={zoomScale} 
              onChange={(e) => setZoomScale(Number(e.target.value))}
              className="flex-grow h-[2px] bg-carbon-gray accent-apex-gold cursor-ew-resize focus:outline-none"
            />
            <span className="font-mono text-[9px] text-smoke-gray">MACRO</span>
          </div>

          <p className="font-sans text-[10px] text-smoke-gray italic mt-2">
            *Scroll down the page or slide the range bar to travel through the silicon zoom revelation.
          </p>
        </div>

      </div>
    </div>
  );
}
