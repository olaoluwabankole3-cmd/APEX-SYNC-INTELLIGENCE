/**
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Cpu, Layers, Network, Code2, Sparkles, HelpCircle } from 'lucide-react';

interface Node {
  id: string;
  label: string;
  x: number; // percentage based coords
  y: number;
  icon: any;
  badge: string;
  desc: string;
}

export default function ConnectedTechNodes() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const nodes: Node[] = [
    {
      id: 'central',
      label: 'Apex Sync',
      x: 50,
      y: 50,
      icon: Cpu,
      badge: 'Sovereign Core',
      desc: 'The centralized cognitive intelligence hub orchestrating connected operations.',
    },
    {
      id: 'ai',
      label: 'AI Systems',
      x: 22,
      y: 20,
      icon: Brain,
      badge: 'Cognitive',
      desc: 'Autonomous context-preserving assistants, agentic workers, and decision models.',
    },
    {
      id: 'automation',
      label: 'Automation',
      x: 18,
      y: 75,
      icon: Network,
      badge: 'Workflow',
      desc: 'Connected operational workflows that eliminate repetitive sync tasks and manual handoffs.',
    },
    {
      id: 'web',
      label: 'Web Platforms',
      x: 80,
      y: 22,
      icon: Sparkles,
      badge: 'Stage',
      desc: 'Premium visual-luxury web portals designed to build absolute enterprise trust.',
    },
    {
      id: 'enterprise',
      label: 'Enterprise OS',
      x: 82,
      y: 78,
      icon: Layers,
      badge: 'Systems',
      desc: 'Industry-specific digital operating systems such as Apex Legal OS.',
    },
    {
      id: 'engineering',
      label: 'Product Engineering',
      x: 50,
      y: 15,
      icon: Code2,
      badge: 'Delivery',
      desc: 'Compiling secure, high-integrity cloud-native applications from concept to production.',
    }
  ];

  // Subtle interactive parallax drift based on mouse coordinates over the container
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouseOffset({ x: x * 20, y: y * 20 });
    };

    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);
    return () => container?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const centralNode = nodes[0];
  const orbitNodes = nodes.slice(1);

  return (
    <div id="connected-tech-nodes-container" className="w-full">
      {/* 1. MOBILE RESPONSIVE BENTO CARDS (Visible on screens < lg) */}
      <div className="lg:hidden w-full flex flex-col gap-6">
        {/* Central Core Feature Card */}
        <div className="p-6 bg-gradient-to-r from-apex-gold/10 via-secondary-gold/5 to-transparent border border-apex-gold/30 rounded-sm">
          <div className="flex items-center gap-3.5 mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-apex-gold to-secondary-gold text-apex-black flex items-center justify-center border border-champagne-gold">
              <Cpu size={20} className="animate-spin-slow" />
            </div>
            <div>
              <span className="font-mono text-[8px] text-apex-gold uppercase tracking-widest block">
                {centralNode.badge}
              </span>
              <h3 className="font-display font-extrabold text-base text-ivory-white">
                {centralNode.label}
              </h3>
            </div>
          </div>
          <p className="font-sans text-xs text-platinum-gray leading-relaxed">
            {centralNode.desc}
          </p>
        </div>

        {/* Orbiting Capability Nodes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {orbitNodes.map((node) => {
            const IconComp = node.icon;
            const isActive = activeNode === node.id;
            return (
              <div
                key={node.id}
                onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                className={`p-5 rounded-sm border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-apex-black border-apex-gold shadow-[0_0_15px_rgba(201,162,39,0.15)]'
                    : 'bg-obsidian/40 border-carbon-gray/50 hover:border-carbon-gray'
                }`}
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                      isActive ? 'bg-apex-gold/10 text-apex-gold border-apex-gold/30' : 'bg-apex-black text-steel-gray border-carbon-gray'
                    }`}>
                      <IconComp size={15} />
                    </div>
                    <span className="font-display text-xs font-bold tracking-wider text-ivory-white uppercase">
                      {node.label}
                    </span>
                  </div>
                  <span className="font-mono text-[8px] text-smoke-gray uppercase tracking-widest">
                    {node.badge}
                  </span>
                </div>
                <p className="font-sans text-[11px] text-steel-gray leading-relaxed">
                  {node.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. CINEMATIC DESKTOP INTERACTIVE SYSTEM (Visible on screens >= lg) */}
      <div 
        ref={containerRef} 
        className="hidden lg:flex relative w-full h-[600px] bg-obsidian/40 border border-carbon-gray/30 rounded-sm overflow-hidden items-center justify-center select-none"
      >
        {/* Schematic Circuit grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#151515_1px,transparent_1px),linear-gradient(to_bottom,#151515_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30 pointer-events-none" />

        {/* Background glowing focal vector */}
        <div className="absolute w-[450px] h-[450px] bg-apex-gold/3 rounded-full blur-[100px] pointer-events-none" />

        {/* SVG Connections Layout */}
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C9A227" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#E7CF84" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#C9A227" stopOpacity="0.15" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Drawing wires from orbiting nodes to the central hub */}
          {orbitNodes.map((node) => {
            // Adjust coordinate with matched scale for the 1000x1000 viewBox
            const startX = node.x * 10;
            const startY = node.y * 10;
            const endX = centralNode.x * 10;
            const endY = centralNode.y * 10;

            const isActive = activeNode === node.id || activeNode === 'central';

            return (
              <g key={`wire-${node.id}`}>
                {/* Static support line */}
                <line
                  x1={startX}
                  y1={startY}
                  x2={endX}
                  y2={endY}
                  stroke={isActive ? 'url(#lineGrad)' : '#2A2A2A'}
                  strokeWidth={isActive ? 3 : 1.5}
                  className="transition-colors duration-500"
                />
                
                {/* Animated energy pulse traveling from orbital to central node */}
                <circle r="4" fill="#E7CF84" filter="url(#glow)">
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    path={`M ${startX} ${startY} L ${endX} ${endY}`}
                    keyPoints="0;1"
                    keyTimes="0;1"
                    calcMode="linear"
                  />
                </circle>
              </g>
            );
          })}
        </svg>

        {/* Interactive Node Anchors */}
        {nodes.map((node) => {
          const IconComp = node.icon;
          const isCentral = node.id === 'central';
          const isActive = activeNode === node.id;
          
          // Calculate interactive translation coordinate
          const driftX = isCentral ? mouseOffset.x * 0.4 : mouseOffset.x * (0.6 + (node.x / 100));
          const driftY = isCentral ? mouseOffset.y * 0.4 : mouseOffset.y * (0.6 + (node.y / 100));

          return (
            <div
              key={node.id}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: `translate(-50%, -50%) translate(${driftX}px, ${driftY}px)`,
              }}
              className="absolute z-20 transition-all duration-100 cursor-pointer magnetic"
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Glowing outer aura */}
              <div 
                className={`absolute -inset-4 rounded-full filter blur-md transition-opacity duration-300 ${
                  isActive 
                    ? 'bg-apex-gold/15 opacity-100' 
                    : 'bg-transparent opacity-0'
                }`} 
              />

              {/* Central Circle Core */}
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  isCentral
                    ? 'bg-gradient-to-r from-apex-gold to-secondary-gold text-apex-black border-champagne-gold scale-125'
                    : isActive
                    ? 'bg-obsidian text-apex-gold border-apex-gold shadow-[0_0_15px_rgba(201,162,39,0.35)] scale-110'
                    : 'bg-apex-black text-steel-gray border-carbon-gray'
                }`}
              >
                <IconComp size={isCentral ? 22 : 18} className={isCentral ? 'animate-spin-slow' : ''} />
              </div>

              {/* Node Label tag */}
              <div className={`absolute left-1/2 -bottom-7 -translate-x-1/2 whitespace-nowrap text-center transition-all duration-300 ${
                isActive ? 'scale-105' : 'scale-100'
              }`}>
                <span className={`font-display text-[10px] font-bold tracking-widest uppercase block ${
                  isCentral ? 'text-apex-gold' : isActive ? 'text-ivory-white' : 'text-platinum-gray'
                }`}>
                  {node.label}
                </span>
                <span className="font-mono text-[8px] text-smoke-gray uppercase tracking-widest block">
                  {node.badge}
                </span>
              </div>
            </div>
          );
        })}

        {/* Floating Description Details Panel */}
        <div className="absolute bottom-6 left-6 right-6 lg:left-1/2 lg:right-auto lg:-translate-x-1/2 lg:w-[480px] z-30">
          <AnimatePresence mode="wait">
            {activeNode ? (
              <motion.div
                key={activeNode}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-apex-black/90 border border-apex-gold/30 p-5 rounded backdrop-blur-md shadow-xl flex items-start gap-4"
              >
                {(() => {
                  const node = nodes.find((n) => n.id === activeNode);
                  if (!node) return null;
                  const IconComp = node.icon;
                  return (
                    <>
                      <div className="w-10 h-10 rounded bg-apex-gold/10 border border-apex-gold/20 flex items-center justify-center flex-shrink-0">
                        <IconComp size={18} className="text-apex-gold" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between gap-4 mb-1">
                          <h4 className="font-display font-bold text-sm text-ivory-white uppercase tracking-wider">
                            {node.label}
                          </h4>
                          <span className="font-mono text-[8px] bg-apex-gold/10 border border-apex-gold/20 text-apex-gold px-2 py-0.5 rounded-full uppercase">
                            {node.badge}
                          </span>
                        </div>
                        <p className="font-sans text-[11px] text-platinum-gray leading-relaxed">
                          {node.desc}
                        </p>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            ) : (
              <motion.div
                key="default-prompt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-apex-black/40 border border-carbon-gray/30 p-4 rounded backdrop-blur-sm text-center"
              >
                <p className="font-mono text-[10px] text-steel-gray uppercase tracking-widest">
                  // HOVER OR BIT NODES TO SYNCHRONIZE CIRCUIT SYSTEM
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
