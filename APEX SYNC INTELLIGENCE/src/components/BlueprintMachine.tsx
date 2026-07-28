/**
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, PencilRuler, Terminal, Ship, Cpu, ChevronRight } from 'lucide-react';

interface Stage {
  id: string;
  num: string;
  title: string;
  desc: string;
  icon: any;
  subLabel: string;
}

export default function BlueprintMachine() {
  const [activeStage, setActiveStage] = useState<string>('discover');

  const stages: Stage[] = [
    {
      id: 'discover',
      num: '01',
      title: 'Discover',
      desc: 'We map your existing operations, documenting information paths, structural bottlenecks, and knowledge silos to formulate a pristine technical charter.',
      subLabel: 'OPERATIONAL SCHEMA BLUEPRINT',
      icon: Compass,
    },
    {
      id: 'design',
      num: '02',
      title: 'Design',
      desc: 'We sketch high-fidelity layout wireframes, specify precise entity relations, and mock luxury user interfaces to coordinate expectations before writing code.',
      subLabel: 'WIREFRAME STRUCTURAL SHEETS',
      icon: PencilRuler,
    },
    {
      id: 'develop',
      num: '03',
      title: 'Develop',
      desc: 'Our engineers convert plans into strict types, clean database schemas, and modular components, utilizing production-ready web structures.',
      subLabel: 'STRICT TYPES COMPILER CONSOLE',
      icon: Terminal,
    },
    {
      id: 'deploy',
      num: '04',
      title: 'Deploy',
      desc: 'We ship the completed system inside fully isolated cloud containers, launch security firewalls, and establish continuous analytics performance loops.',
      subLabel: 'PRODUCTION COGNITIVE PLATFORM',
      icon: Ship,
    }
  ];

  const currentStageIndex = stages.findIndex((s) => s.id === activeStage);

  return (
    <div className="w-full bg-obsidian border border-carbon-gray rounded-sm p-6 lg:p-10 relative overflow-hidden select-none">
      {/* Absolute faint circuit background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#151515_1px,transparent_1px),linear-gradient(to_bottom,#151515_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20 pointer-events-none" />

      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-carbon-gray/50 pb-6 mb-10 gap-6">
        <div>
          <span className="font-mono text-[9px] text-apex-gold tracking-widest uppercase block mb-1">
            // INTERACTIVE COMPILER
          </span>
          <h3 className="font-display font-bold text-xl text-ivory-white">
            The Apex Sync System Assembly Line
          </h3>
        </div>
        
        {/* Navigation Step Rails */}
        <div className="flex items-center gap-1 bg-apex-black/60 p-1 border border-carbon-gray/60 rounded">
          {stages.map((stage) => {
            const isActive = stage.id === activeStage;
            const IconComp = stage.icon;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`magnetic relative flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-all focus:outline-none focus:ring-1 focus:ring-apex-gold/50 cursor-pointer ${
                  isActive 
                    ? 'text-apex-black font-semibold' 
                    : 'text-platinum-gray hover:text-ivory-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="blueprint-pill"
                    className="absolute inset-0 bg-gradient-to-r from-apex-gold to-secondary-gold rounded"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <IconComp size={12} />
                  <span className="hidden sm:inline">{stage.title}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch min-h-[380px]">
        {/* Left Side: Explanatory Context Details */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.3 }}
              className="flex-grow"
            >
              <div className="flex items-center gap-3.5 mb-6">
                <span className="font-mono text-3xl font-extrabold text-apex-gold/30">
                  {stages[currentStageIndex]?.num}
                </span>
                <div className="h-[2px] w-8 bg-carbon-gray" />
                <span className="font-mono text-[9px] tracking-widest text-steel-gray uppercase">
                  STAGE Assembly
                </span>
              </div>

              <h4 className="font-display font-bold text-2xl text-ivory-white mb-4">
                {stages[currentStageIndex]?.title}
              </h4>

              <p className="font-sans text-xs text-platinum-gray leading-relaxed mb-6">
                {stages[currentStageIndex]?.desc}
              </p>

              <div className="bg-apex-black/40 border border-carbon-gray/30 p-4 rounded font-mono text-[9px] text-smoke-gray uppercase tracking-widest">
                SYSTEM MODULE STATE: ACTIVE <br />
                SCHEMA DEPLOYED: YES <br />
                VALIDATION: SECURE // CERTIFIED
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress controller bar */}
          <div className="mt-8 flex items-center justify-between gap-4 border-t border-carbon-gray/30 pt-6">
            <span className="font-mono text-[10px] text-steel-gray">
              PROGRESS ASSEMBLY LINE: {currentStageIndex + 1} OF 4
            </span>
            <button
              onClick={() => {
                const nextIdx = (currentStageIndex + 1) % stages.length;
                setActiveStage(stages[nextIdx]?.id || 'discover');
              }}
              className="magnetic flex items-center gap-1.5 text-xs font-mono text-apex-gold hover:text-champagne-gold uppercase font-semibold cursor-pointer"
            >
              Advance Stage <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Right Side: Animated Machine Visualizer Board */}
        <div className="lg:col-span-7 bg-apex-black/80 border border-carbon-gray rounded-sm p-4 flex items-center justify-center relative min-h-[300px] overflow-hidden">
          {/* Subtle noise layer */}
          <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

          <AnimatePresence mode="wait">
            {activeStage === 'discover' && (
              /* Discover: Blueprint board Drafting drawing itself */
              <motion.div
                key="blueprint"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="w-full h-full flex flex-col items-center justify-center p-6 relative bg-[#091523]/25 border border-blue-500/10 rounded"
              >
                {/* Drafting grid coordinate markings */}
                <div className="absolute inset-2 border border-blue-500/10 rounded pointer-events-none" />
                <div className="absolute top-2 left-1/2 -translate-x-1/2 font-mono text-[8px] text-blue-500/40">
                  X_ALIGNMENT_COORD_SYSTEM // AX_01
                </div>

                <svg className="w-56 h-56 text-blue-500/60" viewBox="0 0 100 100">
                  {/* Grid Lines */}
                  <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2" />
                  <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2" />
                  
                  {/* Drafting circle */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />

                  {/* Concentric helper orbit circle */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.25"
                    strokeDasharray="3 3"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  />

                  {/* Draft triangular block */}
                  <motion.path
                    d="M 50 18 L 82 72 L 18 72 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.75"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                  />

                  {/* Compass hand drafting element */}
                  <motion.line
                    x1="50"
                    y1="50"
                    x2="82"
                    y2="72"
                    stroke="#C9A227"
                    strokeWidth="0.5"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    style={{ transformOrigin: '50px 50px' }}
                  />
                </svg>
                <div className="mt-4 font-mono text-[9px] text-blue-500/50 uppercase tracking-widest text-center">
                  DISCOVER ENGINE: drafting geometric business graphs
                </div>
              </motion.div>
            )}

            {activeStage === 'design' && (
              /* Design: High quality UI Wireframes appearing */
              <motion.div
                key="wireframe"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="w-full h-full flex flex-col justify-between p-6 relative border border-carbon-gray/30 rounded"
              >
                <div className="flex items-center justify-between border-b border-carbon-gray/50 pb-2 mb-4 font-mono text-[8px] text-steel-gray">
                  <span>WIREFRAME_EDITOR // APP_LITE_V2</span>
                  <span>VIEW: 1280px</span>
                </div>

                <div className="grid grid-cols-12 gap-3 flex-grow">
                  {/* Wireframe sidebar */}
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="col-span-3 border border-dashed border-carbon-gray p-2 flex flex-col gap-2 rounded"
                  >
                    <div className="w-full h-3 bg-carbon-gray/20 rounded" />
                    <div className="w-full h-2.5 bg-carbon-gray/10 rounded" />
                    <div className="w-3/4 h-2.5 bg-carbon-gray/10 rounded" />
                    <div className="w-1/2 h-2.5 bg-carbon-gray/10 rounded" />
                  </motion.div>

                  {/* Wireframe main content */}
                  <div className="col-span-9 flex flex-col gap-3">
                    {/* Hero section sketch */}
                    <motion.div 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="border border-dashed border-carbon-gray p-3 rounded flex flex-col gap-2 relative overflow-hidden"
                    >
                      {/* X crossing line representing mockup placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <div className="w-full h-[1px] bg-platinum-gray rotate-12" />
                        <div className="w-full h-[1px] bg-platinum-gray -rotate-12" />
                      </div>
                      <div className="w-1/3 h-3 bg-carbon-gray/40 rounded" />
                      <div className="w-full h-2 bg-carbon-gray/10 rounded" />
                    </motion.div>

                    {/* Columns bento grid layout mock */}
                    <div className="grid grid-cols-3 gap-2 flex-grow">
                      {[0, 1, 2].map((i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="border border-dashed border-carbon-gray p-2 rounded flex flex-col justify-between"
                        >
                          <div className="w-5 h-5 rounded bg-carbon-gray/20 mb-2" />
                          <div className="w-full h-2 bg-carbon-gray/10 rounded" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 font-mono text-[9px] text-steel-gray uppercase tracking-widest text-center">
                  DESIGN PHASE: mapping UX layouts & structural skeletons
                </div>
              </motion.div>
            )}

            {activeStage === 'develop' && (
              /* Develop: Terminal code compilation lines cascading */
              <motion.div
                key="code"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="w-full h-full flex flex-col justify-between p-4 relative bg-[#0b0c0f] border border-carbon-gray rounded font-mono text-[10px] text-green-400 overflow-hidden"
              >
                <div className="flex items-center justify-between border-b border-carbon-gray/40 pb-2 mb-3 text-[9px] text-steel-gray">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/60" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <span className="w-2 h-2 rounded-full bg-green-500/60" />
                  </div>
                  <span>APEX-ENGINEER@COGNITIVE-CORE: ~</span>
                </div>

                <div className="flex-grow flex flex-col gap-1 pr-1.5 overflow-hidden text-[9px] text-green-400/80 leading-relaxed">
                  <p className="text-steel-gray">// Initializing typescript workspace compiler...</p>
                  <p><span className="text-apex-gold">import</span> {'{ CogEngine }'} <span className="text-apex-gold">from</span> <span className="text-emerald-400">"@apex/core-cognitive"</span>;</p>
                  <p><span className="text-apex-gold">const</span> activeSchema = <span className="text-sky-400">new CogEngine</span>({'{'}</p>
                  <p className="pl-4">id: <span className="text-emerald-400">"apex_sync_prod_os_v1"</span>,</p>
                  <p className="pl-4">secureSessionGraph: <span className="text-sky-400">true</span>,</p>
                  <p className="pl-4">encryption: <span className="text-emerald-400">"AES_256_GCM"</span></p>
                  <p>{'}'});</p>
                  <p className="text-steel-gray">// Fetching dynamic Spanner network nodes...</p>
                  <motion.p 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ repeat: Infinity, duration: 1.5, repeatType: 'reverse' }}
                    className="text-emerald-400"
                  >
                    STATUS: COMPILATION COMPLETE // ZERO ERRORS (0.43s)
                  </motion.p>
                  <p className="text-sky-400">Initializing Docker container injection ... [SUCCESS]</p>
                  <p className="text-apex-gold">Routing ingress gateway to port 3000... [SECURE]</p>
                </div>

                <div className="mt-4 pt-2 border-t border-carbon-gray/30 font-mono text-[9px] text-steel-gray uppercase tracking-widest text-center">
                  BUILD ENGINE: translating blueprint specs to high-performance ESM code
                </div>
              </motion.div>
            )}

            {activeStage === 'deploy' && (
              /* Deploy: Finished polished software dashboard with stats and a running chart */
              <motion.div
                key="finished"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="w-full h-full flex flex-col justify-between p-5 relative border border-apex-gold/30 rounded bg-obsidian/40 shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-carbon-gray pb-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-mono text-[9px] text-green-400 tracking-wider">SECURE LIVE PROD ENVIRONMENT</span>
                  </div>
                  <span className="font-mono text-[8px] text-smoke-gray">PORT_3000_OK</span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  {/* Metrics widgets */}
                  <div className="bg-apex-black border border-carbon-gray p-3 rounded">
                    <span className="font-mono text-[8px] text-steel-gray block uppercase">Active Users</span>
                    <span className="font-display text-base font-bold text-ivory-white">2.4M</span>
                  </div>
                  <div className="bg-apex-black border border-carbon-gray p-3 rounded">
                    <span className="font-mono text-[8px] text-steel-gray block uppercase">LLM Latency</span>
                    <span className="font-display text-base font-bold text-apex-gold">42ms</span>
                  </div>
                  <div className="bg-apex-black border border-carbon-gray p-3 rounded">
                    <span className="font-mono text-[8px] text-steel-gray block uppercase">Uptime Ratio</span>
                    <span className="font-display text-base font-bold text-emerald-400">99.997%</span>
                  </div>
                </div>

                {/* Simulated Running visual chart */}
                <div className="flex-grow bg-apex-black border border-carbon-gray rounded p-3 flex flex-col justify-between h-24">
                  <div className="flex items-center justify-between font-mono text-[8px] text-steel-gray">
                    <span>SECTOR_LOAD_BALANCE // VOLUME_STATS</span>
                    <span>INTERVAL_1m</span>
                  </div>
                  
                  {/* Dynamic SVG Sparkline */}
                  <svg className="w-full h-12 text-apex-gold" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <motion.path
                      d="M0,15 Q15,5 30,12 T60,4 T90,14 T100,2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                    />
                    {/* Shadow area gradient underneath sparkline */}
                    <path
                      d="M0,15 Q15,5 30,12 T60,4 T90,14 T100,2 L100,20 L0,20 Z"
                      fill="rgba(201, 162, 39, 0.05)"
                    />
                  </svg>
                </div>

                <div className="mt-4 font-mono text-[9px] text-apex-gold uppercase tracking-widest text-center">
                  DEPLOY STATE: operational, scalable ecosystem running securely
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
