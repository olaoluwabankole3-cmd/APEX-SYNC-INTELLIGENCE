/**
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Sparkles, Brain, Cpu, Network } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
  angle: number;
  speed: number;
}

export default function AICognitiveEngine() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [convergenceRatio, setConvergenceRatio] = useState(0); // 0 = chaotic, 1 = perfectly organized
  const convergenceRatioRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 1800;
    
    // Set up responsive dimensions
    const resizeCanvas = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      canvas.width = rect?.width || window.innerWidth;
      canvas.height = 500;
      generateTargets();
    };

    // Calculate target coordinates to form the "APEX SYNC" emblem (Double triangle pyramid + typographic alignment)
    const targets: { x: number; y: number }[] = [];
    const generateTargets = () => {
      targets.length = 0;
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      
      // Let's draw a beautiful complex geometric sigil: Outer triangle + Inner core + Ground line
      // Apex Triangle (top point, bottom left, bottom right)
      const size = 110;
      const topX = cx;
      const topY = cy - size * 0.8;
      const leftX = cx - size * 1.1;
      const leftY = cy + size * 0.6;
      const rightX = cx + size * 1.1;
      const rightY = cy + size * 0.6;

      // Draw outlines by interpolating lines
      const interpolateLine = (x1: number, y1: number, x2: number, y2: number, pts: number) => {
        for (let i = 0; i <= pts; i++) {
          const t = i / pts;
          targets.push({
            x: x1 + (x2 - x1) * t,
            y: y1 + (y2 - y1) * t,
          });
        }
      };

      // Outer triangular frame (representing high achievement/Apex)
      interpolateLine(topX, topY, leftX, leftY, 200);
      interpolateLine(leftX, leftY, rightX, rightY, 200);
      interpolateLine(rightX, rightY, topX, topY, 200);

      // Inner inverted triangle (representing synchronization/Sync)
      const innerSize = size * 0.55;
      const iTopX = cx;
      const iTopY = cy + innerSize * 0.8;
      const iLeftX = cx - innerSize * 1.1;
      const iLeftY = cy - innerSize * 0.6;
      const iRightX = cx + innerSize * 1.1;
      const iRightY = cy - innerSize * 0.6;

      interpolateLine(iTopX, iTopY, iLeftX, iLeftY, 150);
      interpolateLine(iLeftX, iLeftY, iRightX, iRightY, 150);
      interpolateLine(iRightX, iRightY, iTopX, iTopY, 150);

      // Add a central glowing dense core (The AI node)
      const numCorePts = 200;
      for (let i = 0; i < numCorePts; i++) {
        const r = Math.random() * 12;
        const theta = Math.random() * Math.PI * 2;
        targets.push({
          x: cx + Math.cos(theta) * r,
          y: cy + Math.sin(theta) * r,
        });
      }

      // Sync circular orbit aura
      const auraPts = 350;
      const auraRadius = size * 1.4;
      for (let i = 0; i < auraPts; i++) {
        const angle = (i / auraPts) * Math.PI * 2;
        targets.push({
          x: cx + Math.cos(angle) * auraRadius,
          y: cy + Math.sin(angle) * auraRadius * 0.5, // flat ellipse profile
        });
      }

      // Scatter any remaining particles inside the sigil shape to create volumetric volume
      while (targets.length < particleCount) {
        // Uniform point in a circle
        const r = Math.random() * size;
        const theta = Math.random() * Math.PI * 2;
        targets.push({
          x: cx + Math.cos(theta) * r,
          y: cy + Math.sin(theta) * r,
        });
      }
    };

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      for (let i = 0; i < particleCount; i++) {
        const target = targets[i] || { x: cx, y: cy };
        const angle = Math.random() * Math.PI * 2;
        const dist = 100 + Math.random() * 400;

        particles.push({
          x: cx + Math.cos(angle) * dist,
          y: cy + Math.sin(angle) * dist,
          originX: cx + Math.cos(angle) * dist,
          originY: cy + Math.sin(angle) * dist,
          targetX: target.x,
          targetY: target.y,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          alpha: 0.15 + Math.random() * 0.75,
          color: Math.random() > 0.4 ? '#C9A227' : '#E7CF84', // Gold spectrum
          size: 0.7 + Math.random() * 1.6,
          angle: Math.random() * Math.PI * 2,
          speed: 0.02 + Math.random() * 0.03,
        });
      }
    };

    resizeCanvas();
    initParticles();

    // IntersectionObserver to sync the convergence of particles to current scroll position
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Track scroll inside section
          const onScroll = () => {
            const rect = entry.target.getBoundingClientRect();
            const sectionHeight = rect.height;
            const scrollPos = -rect.top; // how far we have scrolled into this section
            
            // Map scroll ratio to 0-1, centered perfectly in viewport
            let ratio = (scrollPos + window.innerHeight / 2) / sectionHeight;
            ratio = Math.max(0, Math.min(1, ratio));
            
            // Apply easing using GSAP on a virtual target to ensure true smooth animation
            const tweenTarget = { val: convergenceRatioRef.current };
            gsap.to(tweenTarget, {
              val: ratio,
              duration: 0.8,
              ease: 'power2.out',
              overwrite: 'auto',
              onUpdate: function() {
                setConvergenceRatio(tweenTarget.val);
                convergenceRatioRef.current = tweenTarget.val;
              }
            });
          };
          window.addEventListener('scroll', onScroll);
          return () => window.removeEventListener('scroll', onScroll);
        }
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Animation Loop
    const render = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const currentConvergence = convergenceRatioRef.current;

      // Draw faint connections inside targeted emblem if convergence is high
      if (currentConvergence > 0.65) {
        ctx.strokeStyle = `rgba(201, 162, 39, ${(currentConvergence - 0.65) * 0.12})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        
        // Connect random close target nodes to draw a visual circuit blueprint
        for (let i = 0; i < 60; i++) {
          const p1Idx = Math.floor(i * (particleCount / 60));
          const p2Idx = (p1Idx + 11) % particleCount;
          const p1 = particles[p1Idx];
          const p2 = particles[p2Idx];
          if (p1 && p2) {
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
          }
        }
        ctx.stroke();
      }

      // Update and draw each particle
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        if (!p) continue;

        // Drift background noise vectors
        p.angle += p.speed;
        const driftX = Math.cos(p.angle) * 1.4;
        const driftY = Math.sin(p.angle) * 1.4;

        // Interpolate between chaotic drift state and perfectly aligned lockup
        const currentTargetX = p.targetX;
        const currentTargetY = p.targetY;

        // Current transition
        const easeVal = currentConvergence;
        
        // Target interpolation
        const destX = gsap.utils.interpolate(p.originX + driftX * 12, currentTargetX, easeVal);
        const destY = gsap.utils.interpolate(p.originY + driftY * 12, currentTargetY, easeVal);

        // Smooth velocity adjustment
        p.x += (destX - p.x) * 0.08;
        p.y += (destY - p.y) * 0.08;

        // Subtle glow
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * (0.6 + 0.4 * Math.sin(time * 0.003 + p.angle));
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full bg-apex-black py-24 border-y border-carbon-gray/50 overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Absolute background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        <div className="lg:col-span-5 text-left">
          <div className="inline-flex items-center gap-2 bg-obsidian border border-carbon-gray px-3.5 py-1.5 rounded-full mb-6">
            <Brain size={12} className="text-apex-gold animate-pulse" />
            <span className="font-mono text-[9px] tracking-widest text-platinum-gray uppercase">
              COGNITIVE CONVERGENCE CONSOLE
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ivory-white mb-6">
            Sovereign <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-apex-gold via-secondary-gold to-champagne-gold">
              Cognitive Context.
            </span>
          </h2>

          <p className="font-sans text-sm text-platinum-gray leading-relaxed mb-6">
            Most agencies connect basic stateless APIs. Apex Sync builds deep cognitive context structures. We map chaotic enterprise intelligence into highly structured semantic patterns.
          </p>

          <div className="border-l-2 border-apex-gold pl-4 py-1.5 mb-8 bg-obsidian/40 rounded-r">
            <p className="font-mono text-[11px] text-apex-gold uppercase tracking-wider mb-1">
              Active Neural Convergence:
            </p>
            <div className="flex items-center gap-3">
              <div className="flex-grow bg-carbon-gray h-1.5 rounded-full overflow-hidden w-40">
                <div 
                  className="bg-gradient-to-r from-apex-gold to-secondary-gold h-full transition-all duration-300"
                  style={{ width: `${Math.round(convergenceRatio * 100)}%` }}
                />
              </div>
              <span className="font-mono text-xs text-ivory-white font-semibold">
                {Math.round(convergenceRatio * 100)}%
              </span>
            </div>
          </div>

          <p className="font-sans text-xs text-steel-gray leading-relaxed">
            <span className="text-ivory-white font-semibold">Scroll down this section</span> to observe the chaotic particle stardust synchronize into the unified Apex Sync Sigil.
          </p>
        </div>

        {/* High performance Canvas Container */}
        <div className="lg:col-span-7 relative flex items-center justify-center">
          {/* Subtle surrounding light ring */}
          <div className="absolute w-[360px] h-[360px] border border-apex-gold/5 rounded-full animate-pulse pointer-events-none" />
          <div className="absolute w-[440px] h-[440px] border border-carbon-gray/10 rounded-full pointer-events-none" />

          <canvas 
            ref={canvasRef} 
            className="w-full cursor-grab active:cursor-grabbing max-w-2xl bg-transparent relative z-10"
          />
        </div>

      </div>
    </div>
  );
}
