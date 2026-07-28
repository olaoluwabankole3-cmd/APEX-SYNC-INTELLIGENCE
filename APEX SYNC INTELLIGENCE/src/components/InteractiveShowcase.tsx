/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Database, Sparkles, Send, Check, Play, Brain, RefreshCw } from 'lucide-react';

interface ScenarioPreset {
  id: string;
  label: string;
  query: string;
  response: string;
  nodesAffected: string[];
}

const PRESETS: ScenarioPreset[] = [
  {
    id: 'scaling-resolutions',
    label: 'Analyze Q2 Strategy Alignment',
    query: 'Analyze Q2 Strategy alignment and historical resolutions regarding global scaling.',
    response: 'ANALYSIS COMPLETED: I have correlated the Q2 Strategic Mandate with past executive resolutions from October 2025 and March 2026.\n\n- Key Correlation: The March 2026 Board Resolution #41 explicitly protects sovereign data hosting on local infrastructure before scaling.\n- Identified Conflict: The current Q2 draft schedules EU deployment before our sovereign cloud instance setup completes.\n- Recommendation: Delay active client signups in EU-West by 14 days to align with sovereignty compliance setup.',
    nodesAffected: ['Strategic Mandate', 'Board Resolution #41', 'Sovereign Cloud Hub', 'EU Compliance']
  },
  {
    id: 'infra-sovereignty',
    label: 'Retrieve Sovereign Safety Logs',
    query: 'Retrieve memory logs concerning board decisions on infrastructure sovereign safety.',
    response: 'RECONSTRUCTING MEMORY CHAINS: Found 3 related executive decisions in core storage.\n\n1. Oct 12, 2025: Approved migration from public public-cloud vector indexes to private, fully encrypted local server hosting.\n2. Jan 08, 2026: Mandated AES-256 state database level encryption for all customer memory graphs.\n3. Current Posture: Fully aligned. Zero external model calls are made without sandbox proxy checks.',
    nodesAffected: ['Encryption Protocol', 'Private Cloud Base', 'Sandbox Proxy', 'Audit Logs']
  },
  {
    id: 'risk-correlation',
    label: 'Correlate Meeting Briefs & Risk',
    query: 'Correlate context between meeting briefs and our current risk posture.',
    response: 'RISK CORRELATION ENGINE ACTIVE: Correlating 14 recent meeting briefs with Risk Index v3.1.\n\n- Exposure Point: 3 meetings discussed proprietary integration with third-party APIs. This introduces telemetry leak risk.\n- Remediation: Enforce standard Apex Sync Lazy-Initialization API Gateways. All third-party secrets must bypass client-side browsers and route through safe secure backend proxy.\n- Integrity check: Restoring context health to 99.8%.',
    nodesAffected: ['Risk Index v3.1', 'API Telemetry Gateway', 'Proxy Proxy', 'Context Integrity']
  }
];

export default function InteractiveShowcase() {
  const [activeQuery, setActiveQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const [activeNodes, setActiveNodes] = useState<string[]>([]);
  const [selectedPresetId, setSelectedPresetId] = useState<string | null>(null);
  const consoleEndRef = useRef<HTMLDivElement>(null);

  // Stats counters
  const [syncCount, setSyncCount] = useState(142380);
  const [integrityScore, setIntegrityScore] = useState(99.4);

  useEffect(() => {
    // Subtle passive counter increments to make console look live
    const interval = setInterval(() => {
      setSyncCount(prev => prev + Math.floor(Math.random() * 4));
      setIntegrityScore(prev => {
        const delta = (Math.random() - 0.4) * 0.05;
        const next = prev + delta;
        return next > 99.9 ? 99.9 : next < 99.2 ? 99.2 : parseFloat(next.toFixed(2));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [outputLines]);

  const runPreset = (preset: ScenarioPreset) => {
    if (isProcessing) return;
    setSelectedPresetId(preset.id);
    setActiveQuery(preset.query);
    setIsProcessing(true);
    setActiveNodes(preset.nodesAffected);
    setOutputLines(['Initializing Apex Memory Graph Connection...', 'Scanning context clusters for: "' + preset.query + '"...']);

    let step = 0;
    const interval = setInterval(() => {
      if (step === 0) {
        setOutputLines(prev => [...prev, '⚡ Connecting nodes: ' + preset.nodesAffected.join(' ➔ ')]);
        step++;
      } else if (step === 1) {
        setOutputLines(prev => [...prev, '⚙️ Correlating telemetry databases and board briefs...']);
        step++;
      } else if (step === 2) {
        setOutputLines(prev => [...prev, '\n--- EXECUTIVE BRIEF RECONSTRUCTED ---\n' + preset.response]);
        setIsProcessing(false);
        setSelectedPresetId(null);
        clearInterval(interval);
      }
    }, 1200);
  };

  const handleCustomSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!activeQuery.trim() || isProcessing) return;

    setIsProcessing(true);
    const mockNodes = ['General Context', 'Dynamic Node', 'Local Memory'];
    setActiveNodes(mockNodes);
    setOutputLines(['Connecting Sandbox Core...', 'Searching global memory index for: "' + activeQuery + '"...']);

    let step = 0;
    const interval = setInterval(() => {
      if (step === 0) {
        setOutputLines(prev => [...prev, '⚡ Routing query through private intelligence model...']);
        step++;
      } else if (step === 1) {
        setOutputLines(prev => [...prev, '⚠️ No exact historical template found. Dynamic correlation is active...']);
        step++;
      } else if (step === 2) {
        setOutputLines(prev => [
          ...prev,
          '\n--- DYNAMIC INTELLIGENCE REPORT ---\n' +
          `I have received your custom prompt concerning: "${activeQuery}".\n\n` +
          'To ensure absolute institutional memory preservation, I have indexed this inquiry in your sovereign storage.\n\n' +
          '✔ Context Saved: This interaction is locked in your private memory base.\n' +
          '✔ Suggested Action: Align with standard Apex Sync security directives. Our custom advisory engine is ready to assist.'
        ]);
        setIsProcessing(false);
        clearInterval(interval);
      }
    }, 1200);
  };

  return (
    <div id="interactive-ei-showcase" className="w-full bg-graphite border border-carbon-gray rounded-lg overflow-hidden shadow-2xl relative">
      {/* Top Bar */}
      <div className="bg-obsidian border-b border-carbon-gray px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
            <span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
          </div>
          <span className="h-4 w-[1px] bg-carbon-gray mx-2" />
          <span className="font-mono text-xs text-steel-gray tracking-wider flex items-center gap-1.5">
            <Terminal size={12} className="text-apex-gold animate-pulse" />
            EI-V1 // COGNITIVE_GRAPH_SYSTEM
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-mono text-[10px] text-emerald-400 font-semibold uppercase tracking-widest">
            ● SOVEREIGN SECURE
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        {/* Left Side: Memory Interactive Graph */}
        <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-carbon-gray p-6 flex flex-col justify-between bg-obsidian/40 relative">
          <div>
            <h4 className="font-display font-medium text-sm text-ivory-white mb-2 flex items-center gap-2">
              <Brain size={16} className="text-apex-gold" />
              Dynamic Memory Network
            </h4>
            <p className="font-sans text-xs text-platinum-gray leading-relaxed mb-6">
              Visualizes real-time knowledge synthesis. Highlights turn gold when synchronized by the executive companion.
            </p>

            {/* Render Abstract Network Node Map */}
            <div className="relative h-[240px] bg-apex-black/60 border border-carbon-gray/50 rounded p-4 overflow-hidden flex items-center justify-center">
              {/* Dynamic SVG background lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="20%" y1="20%" x2="50%" y2="50%" stroke={activeNodes.includes('Strategic Mandate') ? '#C9A227' : '#383838'} strokeWidth="1.5" className="transition-colors duration-500" />
                <line x1="80%" y1="20%" x2="50%" y2="50%" stroke={activeNodes.includes('Board Resolution #41') ? '#C9A227' : '#383838'} strokeWidth="1.5" className="transition-colors duration-500" />
                <line x1="20%" y1="80%" x2="50%" y2="50%" stroke={activeNodes.includes('Sovereign Cloud Hub') ? '#C9A227' : '#383838'} strokeWidth="1.5" className="transition-colors duration-500" />
                <line x1="80%" y1="80%" x2="50%" y2="50%" stroke={activeNodes.includes('EU Compliance') ? '#C9A227' : '#383838'} strokeWidth="1.5" className="transition-colors duration-500" />
              </svg>

              {/* Node Indicators */}
              <div className="absolute top-[15%] left-[10%] flex flex-col items-center">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all duration-500 ${
                  activeNodes.includes('Strategic Mandate') ? 'bg-apex-gold/25 border-apex-gold scale-110 shadow-lg shadow-apex-gold/20' : 'bg-carbon-gray/20 border-carbon-gray'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${activeNodes.includes('Strategic Mandate') ? 'bg-apex-gold' : 'bg-smoke-gray'}`} />
                </div>
                <span className="font-mono text-[9px] text-steel-gray mt-1">Strategic Mandate</span>
              </div>

              <div className="absolute top-[15%] right-[10%] flex flex-col items-center">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all duration-500 ${
                  activeNodes.includes('Board Resolution #41') ? 'bg-apex-gold/25 border-apex-gold scale-110 shadow-lg shadow-apex-gold/20' : 'bg-carbon-gray/20 border-carbon-gray'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${activeNodes.includes('Board Resolution #41') ? 'bg-apex-gold' : 'bg-smoke-gray'}`} />
                </div>
                <span className="font-mono text-[9px] text-steel-gray mt-1">Board Res #41</span>
              </div>

              {/* Central Core */}
              <div className="z-10 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-apex-black border-2 border-apex-gold/80 flex items-center justify-center shadow-lg shadow-apex-gold/10 animate-pulse">
                  <Database size={24} className="text-apex-gold" />
                </div>
                <span className="font-mono text-[10px] text-ivory-white font-semibold mt-2">SOVEREIGN CORE</span>
              </div>

              <div className="absolute bottom-[15%] left-[10%] flex flex-col items-center">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all duration-500 ${
                  activeNodes.includes('Sovereign Cloud Hub') ? 'bg-apex-gold/25 border-apex-gold scale-110 shadow-lg shadow-apex-gold/20' : 'bg-carbon-gray/20 border-carbon-gray'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${activeNodes.includes('Sovereign Cloud Hub') ? 'bg-apex-gold' : 'bg-smoke-gray'}`} />
                </div>
                <span className="font-mono text-[9px] text-steel-gray mt-1">Sovereign cloud</span>
              </div>

              <div className="absolute bottom-[15%] right-[10%] flex flex-col items-center">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all duration-500 ${
                  activeNodes.includes('EU Compliance') ? 'bg-apex-gold/25 border-apex-gold scale-110 shadow-lg shadow-apex-gold/20' : 'bg-carbon-gray/20 border-carbon-gray'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${activeNodes.includes('EU Compliance') ? 'bg-apex-gold' : 'bg-smoke-gray'}`} />
                </div>
                <span className="font-mono text-[9px] text-steel-gray mt-1">EU Compliance</span>
              </div>
            </div>
          </div>

          {/* Realtime Telemetry Stats */}
          <div className="border-t border-carbon-gray/40 pt-4 mt-6">
            <h5 className="font-mono text-[10px] text-apex-gold uppercase tracking-wider mb-3">
              LIVE COGNITIVE METRICS
            </h5>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-apex-black/40 p-2.5 rounded border border-carbon-gray/30">
                <span className="block font-mono text-[10px] text-steel-gray uppercase">
                  SYNCHRONIZED NODES
                </span>
                <span className="font-mono text-base font-semibold text-ivory-white tracking-tight">
                  {syncCount.toLocaleString()}
                </span>
              </div>
              <div className="bg-apex-black/40 p-2.5 rounded border border-carbon-gray/30">
                <span className="block font-mono text-[10px] text-steel-gray uppercase">
                  INTEGRITY SCORE
                </span>
                <span className="font-mono text-base font-semibold text-apex-gold tracking-tight">
                  {integrityScore}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Query Terminal */}
        <div className="lg:col-span-7 p-6 flex flex-col justify-between bg-apex-black/80">
          <div>
            <h4 className="font-display font-medium text-sm text-ivory-white mb-3">
              Preset Scenarios (Select to Sync)
            </h4>
            <div className="flex flex-col gap-2.5 mb-6">
              {PRESETS.map((preset) => {
                const isSelected = selectedPresetId === preset.id;
                return (
                  <button
                    id={`preset-${preset.id}`}
                    key={preset.id}
                    onClick={() => runPreset(preset)}
                    disabled={isProcessing}
                    className={`text-left px-4 py-3 rounded border text-xs font-sans transition-all flex items-center justify-between cursor-pointer focus:outline-none ${
                      isSelected
                        ? 'bg-apex-gold/10 border-apex-gold text-ivory-white shadow shadow-apex-gold/15'
                        : 'bg-graphite/40 border-carbon-gray/60 text-platinum-gray hover:bg-graphite/80 hover:text-ivory-white'
                    }`}
                  >
                    <span className="font-medium tracking-wide flex items-center gap-2">
                      <Sparkles size={14} className={isSelected ? 'text-apex-gold animate-spin' : 'text-smoke-gray'} />
                      {preset.label}
                    </span>
                    <Play size={10} className="text-steel-gray group-hover:text-apex-gold" />
                  </button>
                );
              })}
            </div>

            {/* Console Screen Output */}
            <div className="h-[220px] bg-obsidian border border-carbon-gray/70 rounded p-4 font-mono text-xs overflow-y-auto leading-relaxed relative flex flex-col text-platinum-gray">
              {outputLines.length === 0 ? (
                <div className="text-steel-gray flex flex-col items-center justify-center h-full gap-2">
                  <Terminal size={24} className="text-carbon-gray" />
                  <span>Interactive memory stream is idle.</span>
                  <span className="text-[10px]">Select a Q2 Strategic scenario preset above or type below.</span>
                </div>
              ) : (
                outputLines.map((line, idx) => (
                  <pre key={idx} className="whitespace-pre-wrap font-mono text-left select-text selection:bg-apex-gold/30">
                    {line}
                  </pre>
                ))
              )}
              {isProcessing && (
                <div className="flex items-center gap-2 text-apex-gold mt-2">
                  <RefreshCw size={12} className="animate-spin" />
                  <span className="font-mono text-[10px]">THE SYNCHRONIZATION PULSE ACTIVE...</span>
                </div>
              )}
              <div ref={consoleEndRef} />
            </div>
          </div>

          {/* Custom Query Form */}
          <form id="ei-query-form" onSubmit={handleCustomSubmit} className="mt-6 flex gap-3">
            <input
              id="ei-query-input"
              type="text"
              value={activeQuery}
              onChange={(e) => setActiveQuery(e.target.value)}
              placeholder="Ask Executive Intelligence console (e.g. Map Q4 telemetry risk...)"
              disabled={isProcessing}
              className="flex-grow bg-graphite/60 border border-carbon-gray rounded px-4 py-3 font-mono text-xs text-ivory-white focus:outline-none focus:ring-1 focus:ring-apex-gold focus:border-apex-gold transition-all"
            />
            <button
              id="ei-query-submit"
              type="submit"
              disabled={isProcessing || !activeQuery.trim()}
              className="bg-apex-gold hover:bg-secondary-gold disabled:bg-carbon-gray disabled:text-smoke-gray text-apex-black px-4 rounded flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
