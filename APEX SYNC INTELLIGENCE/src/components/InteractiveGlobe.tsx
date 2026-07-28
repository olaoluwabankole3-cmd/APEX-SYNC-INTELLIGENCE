/**
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Scale, Activity, Users, DollarSign, Building2, Award } from 'lucide-react';

interface Pin {
  id: string;
  name: string;
  lat: number; // lat/long spherical coordinates
  lon: number;
  industry: string;
  desc: string;
  icon: any;
}

interface ProjectedPin extends Pin {
  projX: number;
  projY: number;
  projZ: number; // For depth sorting / opacity
  visible: boolean;
}

export default function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePin, setActivePin] = useState<ProjectedPin | null>(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [projectedPins, setProjectedPins] = useState<ProjectedPin[]>([]);

  // Five premium global pins mapped to latitude/longitude
  const pins: Pin[] = [
    {
      id: 'us',
      name: 'United States',
      lat: 37,
      lon: -122, // SF/New York
      industry: 'Advisory & Corporate Intelligence',
      desc: 'Our AI CEO context companions coordinate board slides, compliance structures, and institutional memory across multi-state real estate pipelines.',
      icon: DollarSign,
    },
    {
      id: 'uk',
      name: 'United Kingdom',
      lat: 51,
      lon: -0.1, // London
      industry: 'Enterprise Legal OS',
      desc: 'Deploying high-security Matter-State synchronization platforms to automate document drafts and reasoning validation under strict UK compliance.',
      icon: Scale,
    },
    {
      id: 'nigeria',
      name: 'Nigeria',
      lat: 6.5,
      lon: 3.4, // Lagos
      industry: 'Professional Services scale',
      desc: 'Connected operational workflows engineered to dismantle administrative bottlenecks, eliminating communication delays for advisory teams.',
      icon: Award,
    },
    {
      id: 'canada',
      name: 'Canada',
      lat: 43.6,
      lon: -79.3, // Toronto
      industry: 'Real Estate & Healthcare',
      desc: 'Syncing multi-format records, property transactions, and portfolio metrics into secure, cloud-hosted ledger structures.',
      icon: Building2,
    },
    {
      id: 'australia',
      name: 'Australia',
      lat: -33.8,
      lon: 151.2, // Sydney
      industry: 'Healthcare Compliance System',
      desc: 'Sovereign clinical systems designed to maintain patient histories, automate clinic scheduling, and guard healthcare record pipelines.',
      icon: Activity,
    }
  ];

  // Sovereign network connections
  const connections = [
    { from: 'us', to: 'uk' },
    { from: 'uk', to: 'nigeria' },
    { from: 'nigeria', to: 'australia' },
    { from: 'australia', to: 'canada' },
    { from: 'canada', to: 'us' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let autoAngle = 0;
    
    // Hardcode logical canvas resolution to 400x400 to make percentage positioning completely bulletproof
    canvas.width = 400;
    canvas.height = 400;

    // IntersectionObserver to sync globe rotation with page scroll
    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewScrollRatio = -rect.top / (window.innerHeight + rect.height);
      autoAngle += viewScrollRatio * 0.05;
    };
    window.addEventListener('scroll', onScroll);

    // Dynamic math projection to map 3D spherical coordinates (Lat/Lon) to a 2D viewport
    const projectPin = (pin: Pin, currentAngle: number, radius: number, cx: number, cy: number): ProjectedPin => {
      const radLat = (pin.lat * Math.PI) / 180;
      const radLon = ((pin.lon + currentAngle * (180 / Math.PI)) * Math.PI) / 180;

      const x = radius * Math.cos(radLat) * Math.sin(radLon);
      const y = -radius * Math.sin(radLat);
      const z = radius * Math.cos(radLat) * Math.cos(radLon);

      return {
        ...pin,
        projX: cx + x,
        projY: cy + y,
        projZ: z,
        visible: z > -40, // threshold to hide pins rotating past the outer edge
      };
    };

    // Render loop
    const render = (time: number) => {
      ctx.clearRect(0, 0, 400, 400);
      const cx = 200;
      const cy = 200;
      const radius = 145;

      // Continuous autonomous rotation
      autoAngle += 0.0035;
      setRotationAngle(autoAngle);

      // Draw faint background grid lines (Latitude / Longitude) to form wireframe globe
      ctx.strokeStyle = 'rgba(201, 162, 39, 0.05)';
      ctx.lineWidth = 0.5;

      // Parallels (Latitudes)
      for (let lat = -60; lat <= 60; lat += 20) {
        const radLat = (lat * Math.PI) / 180;
        const r = radius * Math.cos(radLat);
        const y = -radius * Math.sin(radLat);

        ctx.beginPath();
        for (let a = 0; a <= 360; a += 5) {
          const radA = (a * Math.PI) / 180;
          const px = cx + r * Math.sin(radA);
          ctx.lineTo(px, cy + y);
        }
        ctx.stroke();
      }

      // Meridians (Longitudes)
      for (let lon = 0; lon < 360; lon += 30) {
        ctx.beginPath();
        for (let lat = -90; lat <= 90; lat += 5) {
          const radLat = (lat * Math.PI) / 180;
          const radLon = ((lon + autoAngle * (180 / Math.PI)) * Math.PI) / 180;
          const px = cx + radius * Math.cos(radLat) * Math.sin(radLon);
          const py = cy - radius * Math.sin(radLat);
          ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // Draw connection lines on the sphere
      connections.forEach((conn) => {
        const pinA = pins.find(p => p.id === conn.from);
        const pinB = pins.find(p => p.id === conn.to);
        if (!pinA || !pinB) return;

        ctx.beginPath();
        let first = true;

        for (let i = 0; i <= 20; i++) {
          const t = i / 20;
          const lat = pinA.lat + (pinB.lat - pinA.lat) * t;
          
          let lonA = pinA.lon;
          let lonB = pinB.lon;
          if (Math.abs(lonB - lonA) > 180) {
            if (lonB > lonA) lonA += 360;
            else lonB += 360;
          }
          const lon = lonA + (lonB - lonA) * t;

          const radLat = (lat * Math.PI) / 180;
          const radLon = ((lon + autoAngle * (180 / Math.PI)) * Math.PI) / 180;

          const x = radius * Math.cos(radLat) * Math.sin(radLon);
          const y = -radius * Math.sin(radLat);
          const px = cx + x;
          const py = cy + y;

          if (first) {
            ctx.moveTo(px, py);
            first = false;
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.strokeStyle = 'rgba(201, 162, 39, 0.12)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Moving data packet animation along the path
        const pulseT = (time * 0.0006) % 1;
        const pLat = pinA.lat + (pinB.lat - pinA.lat) * pulseT;
        let pLonA = pinA.lon;
        let pLonB = pinB.lon;
        if (Math.abs(pLonB - pLonA) > 180) {
          if (pLonB > pLonA) pLonA += 360;
          else pLonB += 360;
        }
        const pLon = pLonA + (pLonB - pLonA) * pulseT;

        const radLat = (pLat * Math.PI) / 180;
        const radLon = ((pLon + autoAngle * (180 / Math.PI)) * Math.PI) / 180;

        const x = radius * Math.cos(radLat) * Math.sin(radLon);
        const y = -radius * Math.sin(radLat);
        const z = radius * Math.cos(radLat) * Math.cos(radLon);

        if (z > 0) {
          ctx.fillStyle = 'rgba(231, 207, 132, 0.75)';
          ctx.beginPath();
          ctx.arc(cx + x, cy + y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Project pins and sort by Z index
      const currentProjected = pins.map((p) => projectPin(p, autoAngle, radius, cx, cy));
      setProjectedPins(currentProjected);

      // Draw active pin highlights on the canvas directly
      if (activePin) {
        const match = currentProjected.find(p => p.id === activePin.id);
        if (match && match.projZ > 0) {
          ctx.strokeStyle = 'rgba(201, 162, 39, 0.55)';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.arc(match.projX, match.projY, 13, 0, Math.PI * 2);
          ctx.stroke();

          ctx.fillStyle = 'rgba(201, 162, 39, 0.1)';
          ctx.beginPath();
          ctx.arc(match.projX, match.projY, 8 + Math.sin(time * 0.008) * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw outer glowing edge around the sphere
      const gradient = ctx.createRadialGradient(cx, cy, radius * 0.8, cx, cy, radius * 1.05);
      gradient.addColorStop(0, 'rgba(10, 10, 10, 0)');
      gradient.addColorStop(0.8, 'rgba(201, 162, 39, 0.02)');
      gradient.addColorStop(1, 'rgba(201, 162, 39, 0.1)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.05, 0, Math.PI * 2);
      ctx.fill();

      // Outer gold circle ring
      ctx.strokeStyle = 'rgba(201, 162, 39, 0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', onScroll);
    };
  }, [activePin]);

  return (
    <div 
      ref={containerRef} 
      className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
    >
      {/* 3D Canvas Globe rendering container */}
      <div className="lg:col-span-6 flex items-center justify-center relative min-h-[360px] sm:min-h-[440px]">
        {/* Subtle target alignment rings */}
        <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] border border-carbon-gray/12 rounded-full pointer-events-none" />
        <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] border border-carbon-gray/5 rounded-full pointer-events-none" />

        {/* Dedicated relative aspect-square wrapper that locks canvas and pins together */}
        <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">
          <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full z-10 block pointer-events-none"
          />

          {/* 2D Projected floating pin elements mapped absolutely over the canvas */}
          {projectedPins.map((pin) => {
            if (!pin.visible) return null;
            
            // Calculate Z-index opacity multiplier (front faces are opaque, back faces fade out)
            const normZ = (pin.projZ + 150) / 300; // range 0 to 1
            const opacity = Math.max(0.12, normZ);
            const isFront = pin.projZ > 0;

            // Map logical (0 to 400) space to percentages (0% to 100%)
            const leftPct = (pin.projX / 400) * 100;
            const topPct = (pin.projY / 400) * 100;

            const isActive = activePin?.id === pin.id;

            return (
              <div
                key={pin.id}
                style={{
                  left: `${leftPct}%`,
                  top: `${topPct}%`,
                  transform: `translate(-50%, -50%) scale(${isFront ? (isActive ? 1.15 : 1.0) : 0.65})`,
                  opacity: opacity,
                  zIndex: isFront ? 30 : 5,
                }}
                className={`absolute pointer-events-auto cursor-pointer transition-all duration-300 ${
                  isFront ? 'hover:scale-110' : 'pointer-events-none'
                }`}
                onMouseEnter={() => isFront && setActivePin(pin)}
                onMouseLeave={() => isFront && setActivePin(null)}
                onClick={() => isFront && setActivePin(pin)}
              >
                {/* Outer pulsing ping indicator */}
                {isFront && (
                  <span className="absolute -inset-2.5 rounded-full bg-apex-gold/20 animate-ping" />
                )}
                
                {/* Core gold beacon */}
                <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  isFront 
                    ? isActive 
                      ? 'bg-ivory-white border-apex-gold shadow-[0_0_12px_rgba(201,162,39,0.6)]'
                      : 'bg-apex-gold border-ivory-white text-apex-black group-hover:bg-champagne-gold' 
                    : 'bg-carbon-gray/50 border-steel-gray/30'
                }`}>
                  <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isActive ? 'bg-apex-gold' : 'bg-apex-black'}`} />
                </div>

                {/* Taglet Label */}
                {isFront && (
                  <div className={`absolute left-5 top-1/2 -translate-y-1/2 px-2.5 py-0.5 rounded shadow text-[9px] font-mono tracking-wider transition-all duration-300 whitespace-nowrap uppercase ${
                    isActive 
                      ? 'bg-apex-gold text-apex-black border border-ivory-white font-bold' 
                      : 'bg-obsidian/90 border border-carbon-gray text-ivory-white'
                  }`}>
                    {pin.name}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Narrative context card detailing the sector */}
      <div className="lg:col-span-6 flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 bg-obsidian border border-carbon-gray px-3.5 py-1.5 rounded-full mb-6 w-fit">
          <Compass size={12} className="text-apex-gold animate-spin-slow" />
          <span className="font-mono text-[9px] tracking-widest text-platinum-gray uppercase">
            GEOGRAPHIC DEPLOYMENT GRAPH
          </span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-bold text-ivory-white mb-6">
          Sovereign Operations
        </h3>

        <AnimatePresence mode="wait">
          {activePin ? (
            <motion.div
              key={activePin.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="p-8 bg-obsidian border border-apex-gold/30 rounded-sm shadow-xl relative overflow-hidden"
            >
              {/* Decorative side accent lines to avoid complex nested cards */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-apex-gold to-secondary-gold" />
              
              <div className="flex items-center gap-3.5 mb-4 border-b border-carbon-gray/20 pb-4">
                <div className="w-9 h-9 rounded bg-apex-gold/10 border border-apex-gold/25 flex items-center justify-center shrink-0">
                  {(() => {
                    const IconComp = activePin.icon;
                    return <IconComp size={16} className="text-apex-gold" />;
                  })()}
                </div>
                <div>
                  <h4 className="font-display font-semibold text-base text-ivory-white">
                    {activePin.name} Hub
                  </h4>
                  <span className="font-mono text-[9px] text-apex-gold uppercase tracking-widest block mt-0.5">
                    {activePin.industry}
                  </span>
                </div>
              </div>
              <p className="font-sans text-xs sm:text-sm text-platinum-gray leading-relaxed">
                {activePin.desc}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="default-instruct"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="p-8 bg-obsidian/30 border border-carbon-gray/20 rounded-sm italic text-steel-gray flex flex-col justify-center gap-4 relative overflow-hidden"
            >
              <p className="font-sans text-xs sm:text-sm leading-relaxed text-platinum-gray">
                "We do not serve everyone with a generic webpage. Our active platforms operate natively inside the high-integrity operational frameworks of legal, financial, and real estate centers."
              </p>
              <span className="font-mono text-[9px] text-apex-gold uppercase tracking-widest block not-italic">
                // Hover over or click any glowing active golden pin on the sphere to inspect local operations.
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
