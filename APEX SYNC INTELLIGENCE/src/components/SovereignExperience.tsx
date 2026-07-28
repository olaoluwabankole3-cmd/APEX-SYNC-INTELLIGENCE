import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Lock, 
  Compass, 
  Layers, 
  Sparkles, 
  Activity, 
  Terminal, 
  ShieldCheck, 
  Play, 
  Zap, 
  RefreshCw,
  Sliders,
  Maximize2
} from 'lucide-react';

interface Principle {
  id: string;
  title: string;
  desc: string;
  systemCode: string;
  icon: React.ComponentType<any>;
}

export default function SovereignExperience() {
  const [selectedId, setSelectedId] = useState<string>('ai-first');
  const [isStressTesting, setIsStressTesting] = useState<boolean>(false);
  const [diagnosticProgress, setDiagnosticProgress] = useState<number>(100);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'SYS_INIT // Core diagnostic protocols active.',
    'SECURITY // Sentinel network running in high-integrity state.',
    'CONTEXT_DB // Local sync connection verified at 0.002ms drift.'
  ]);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 150, y: 150 });
  const stressMultiplierRef = useRef(1.0);
  const frameRef = useRef<number>(0);

  const principles: Principle[] = [
    {
      id: 'ai-first',
      title: 'AI-First Engineering',
      desc: 'Built on sovereign context models and continuous synchronization instead of stateless prompt templates.',
      systemCode: 'SYS-COGN-01',
      icon: Cpu,
    },
    {
      id: 'security',
      title: 'Enterprise Security Mindset',
      desc: 'Sovereign execution, secure context DBs, and bank-grade fallback mechanics safeguard critical IP.',
      systemCode: 'SYS-SECU-02',
      icon: Lock,
    },
    {
      id: 'human-design',
      title: 'Human-Centered Design',
      desc: 'Aesthetic quiet confidence, restrained color usage, and editorial typography elevate professional focus.',
      systemCode: 'SYS-HUMA-03',
      icon: Compass,
    },
    {
      id: 'scale',
      title: 'Built for Scale',
      desc: 'Engineered for deep-level persistence, structured knowledge growth, and zero-fail stability under load.',
      systemCode: 'SYS-SCAL-04',
      icon: Layers,
    },
    {
      id: 'future-ready',
      title: 'Future-Ready Architecture',
      desc: 'Clean, modular code structures compiled to grow side-by-side with your company\'s expansion.',
      systemCode: 'SYS-ARCH-05',
      icon: Sparkles,
    },
  ];

  // Stress testing trigger
  const runStressTest = () => {
    if (isStressTesting) return;
    setIsStressTesting(true);
    setDiagnosticProgress(0);
    
    // Append logs
    setTerminalLogs(prev => [
      ...prev,
      `[STRESS_TEST] Initiating extreme load simulation on ${selectedId.toUpperCase()}...`,
      `[STRESS_TEST] Threat vector injection: 50,000 requests/sec target.`,
    ].slice(-6));

    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setDiagnosticProgress(Math.min(100, progress));
      if (progress >= 100) {
        clearInterval(interval);
        setIsStressTesting(false);
        setTerminalLogs(prev => [
          ...prev,
          `[STRESS_TEST] Load simulation completed. Zero data drift detected.`,
          `[STRESS_TEST] System state: 100% CONVERGED // SECURE.`
        ].slice(-6));
      }
    }, 80);
  };

  // Add random terminal logs on timer to make dashboard feel alive
  useEffect(() => {
    const logInterval = setInterval(() => {
      if (isStressTesting) return;
      const codes = ['SYNC_OK', 'MEM_REALLOC', 'SENTINEL_OK', 'HEARTBEAT_PULSE', 'BUFFER_SYNC', 'TELEMETRY_DUMP'];
      const randomCode = codes[Math.floor(Math.random() * codes.length)];
      const randomId = principles[Math.floor(Math.random() * principles.length)].systemCode;
      const timestamp = new Date().toLocaleTimeString();
      
      setTerminalLogs(prev => [
        ...prev,
        `[${timestamp}] ${randomId} // ${randomCode} // Status: Nominal`
      ].slice(-6));
    }, 4500);

    return () => clearInterval(logInterval);
  }, [isStressTesting]);

  // Adjust stress multiplier ref for physics loop
  useEffect(() => {
    if (isStressTesting) {
      let t = 0;
      const anim = () => {
        t += 0.05;
        // Pulse multiplier up and down
        stressMultiplierRef.current = 2.5 + Math.sin(t) * 1.5;
        if (isStressTesting) requestAnimationFrame(anim);
      };
      const id = requestAnimationFrame(anim);
      return () => cancelAnimationFrame(id);
    } else {
      stressMultiplierRef.current = 1.0;
    }
  }, [isStressTesting]);

  // Unified high-performance canvas physics loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    // Handle high DPI retina screens
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // AI First Node state
    const aiNodes: Array<{ x: number; y: number; vx: number; vy: number; radius: number; phase: number }> = [];
    for (let i = 0; i < 20; i++) {
      aiNodes.push({
        x: Math.random() * 300 + 50,
        y: Math.random() * 200 + 50,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2.5 + 1.5,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Security particle state
    const secParticles: Array<{ angle: number; speed: number; distance: number; size: number }> = [];
    for (let i = 0; i < 35; i++) {
      secParticles.push({
        angle: Math.random() * Math.PI * 2,
        speed: (Math.random() * 0.01 + 0.005),
        distance: Math.random() * 90 + 30,
        size: Math.random() * 1.5 + 0.8,
      });
    }

    // Scale flow particles
    const scaleParticles: Array<{ pipeIndex: number; progress: number; speed: number; size: number }> = [];
    for (let i = 0; i < 40; i++) {
      scaleParticles.push({
        pipeIndex: Math.floor(Math.random() * 3),
        progress: Math.random(),
        speed: Math.random() * 0.015 + 0.008,
        size: Math.random() * 2 + 1,
      });
    }

    // Future dendritic roots
    let futureNodes: Array<{ x: number; y: number; parentX: number; parentY: number; scale: number }> = [
      { x: 200, y: 250, parentX: 200, parentY: 250, scale: 1 }
    ];

    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      if (selectedId === 'future-ready') {
        if (futureNodes.length > 30) futureNodes = [{ x: 200, y: 250, parentX: 200, parentY: 250, scale: 1 }];
        const parent = futureNodes[Math.floor(Math.random() * futureNodes.length)];
        futureNodes.push({
          x: clickX,
          y: clickY,
          parentX: parent.x,
          parentY: parent.y,
          scale: 0,
        });
        setTerminalLogs(prev => [...prev, `[USER_EVENT] Appended system branch coordinate (${Math.round(clickX)}, ${Math.round(clickY)})`].slice(-6));
      } else if (selectedId === 'scale') {
        for (let i = 0; i < 8; i++) {
          scaleParticles.push({
            pipeIndex: Math.floor(Math.random() * 3),
            progress: 0,
            speed: Math.random() * 0.02 + 0.015,
            size: Math.random() * 3 + 1.5,
          });
        }
      } else if (selectedId === 'ai-first') {
        for (let i = 0; i < 6; i++) {
          aiNodes.push({
            x: clickX,
            y: clickY,
            vx: (Math.random() - 0.5) * 3,
            vy: (Math.random() - 0.5) * 3,
            radius: Math.random() * 3 + 2,
            phase: Math.random() * Math.PI,
          });
        }
      }
    };

    canvas.addEventListener('click', handleCanvasClick);

    // Mouse tracker
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    // Master render loop
    const render = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, w, h);
      
      frameRef.current += 1;
      const stress = stressMultiplierRef.current;

      // Draw elegant subtle grid overlay matching our engineering aesthetic
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 0.5;
      const gridSize = 25;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Render based on selected operating principle
      if (selectedId === 'ai-first') {
        // AI-First Engineering: Neural context network
        const cx = w / 2;
        const cy = h / 2;

        // Draw central "Sovereign Context Pool"
        const centerPulse = 25 + Math.sin(frameRef.current * 0.04) * 3 * stress;
        const grad = ctx.createRadialGradient(cx, cy, 2, cx, cy, centerPulse * 1.5);
        grad.addColorStop(0, 'rgba(231, 207, 132, 0.3)');
        grad.addColorStop(0.5, 'rgba(201, 162, 39, 0.08)');
        grad.addColorStop(1, 'rgba(201, 162, 39, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, centerPulse * 1.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(201, 162, 39, 0.45)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, centerPulse, 0, Math.PI * 2);
        ctx.stroke();

        // Draw node points
        aiNodes.forEach((node, i) => {
          node.phase += 0.01 * stress;
          node.x += node.vx * stress;
          node.y += node.vy * stress;

          // Boundary bounce
          if (node.x < 15 || node.x > w - 15) node.vx *= -1;
          if (node.y < 15 || node.y > h - 15) node.vy *= -1;

          // Pull to mouse slightly
          const dx = mousePos.current.x - node.x;
          const dy = mousePos.current.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            node.x += (dx / dist) * 0.4 * stress;
            node.y += (dy / dist) * 0.4 * stress;

            // Draw connection thread to mouse
            ctx.strokeStyle = `rgba(231, 207, 132, ${(1 - dist / 100) * 0.25})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mousePos.current.x, mousePos.current.y);
            ctx.stroke();
          }

          // Pull to center
          const cDx = cx - node.x;
          const cDy = cy - node.y;
          const cDist = Math.sqrt(cDx * cDx + cDy * cDy);
          if (cDist > 150) {
            node.vx += (cDx / cDist) * 0.01;
            node.vy += (cDy / cDist) * 0.01;
          }

          // Draw interconnections
          for (let j = i + 1; j < aiNodes.length; j++) {
            const nodeB = aiNodes[j];
            const connDx = nodeB.x - node.x;
            const connDy = nodeB.y - node.y;
            const connDist = Math.sqrt(connDx * connDx + connDy * connDy);
            if (connDist < 75) {
              ctx.strokeStyle = `rgba(201, 162, 39, ${(1 - connDist / 75) * 0.15})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(nodeB.x, nodeB.y);
              ctx.stroke();
            }
          }

          // Node body
          const nodeAlpha = 0.45 + Math.sin(node.phase) * 0.2;
          ctx.fillStyle = `rgba(231, 207, 132, ${nodeAlpha})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * (isStressTesting ? 1.5 : 1), 0, Math.PI * 2);
          ctx.fill();
        });

        // Label instructions
        ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.font = '9px monospace';
        ctx.fillText('// MOUSE ATTRACTS COGNITIVE PARTICLES', 15, h - 15);
        ctx.fillText('// CLICK CANVAS TO INJECT CONTEXT NODES', 15, 20);

      } else if (selectedId === 'security') {
        // Enterprise Security Mindset: Cypher concentric geometry & radar scan
        const cx = w / 2;
        const cy = h / 2;

        // Concentric rings rotating
        const angle1 = frameRef.current * 0.004 * stress;
        const angle2 = -frameRef.current * 0.007 * stress;

        ctx.strokeStyle = 'rgba(201, 162, 39, 0.12)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, 100, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(231, 207, 132, 0.2)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 12]);
        ctx.beginPath();
        ctx.arc(cx, cy, 75, angle1, angle1 + Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(201, 162, 39, 0.3)';
        ctx.lineWidth = 0.8;
        ctx.setLineDash([40, 15, 10, 15]);
        ctx.beginPath();
        ctx.arc(cx, cy, 115, angle2, angle2 + Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]); // reset

        // Draw rotating guard posts
        for (let a = 0; a < 4; a++) {
          const currentAngle = angle1 + (a * Math.PI / 2);
          const px = cx + Math.cos(currentAngle) * 75;
          const py = cy + Math.sin(currentAngle) * 75;
          ctx.fillStyle = '#E7CF84';
          ctx.beginPath();
          ctx.arc(px, py, 3, 0, Math.PI * 2);
          ctx.fill();
        }

        // Floating cryptographic orbits
        secParticles.forEach((part) => {
          part.angle += part.speed * stress;
          const px = cx + Math.cos(part.angle) * part.distance;
          const py = cy + Math.sin(part.angle) * part.distance;
          ctx.fillStyle = 'rgba(231, 207, 132, 0.6)';
          ctx.beginPath();
          ctx.arc(px, py, part.size, 0, Math.PI * 2);
          ctx.fill();
        });

        // Vertical glowing scanner sweeps up & down
        const scanY = cy + Math.sin(frameRef.current * 0.035 * stress) * 115;
        const scanGrad = ctx.createLinearGradient(cx - 120, scanY, cx + 120, scanY);
        scanGrad.addColorStop(0, 'rgba(201, 162, 39, 0)');
        scanGrad.addColorStop(0.5, 'rgba(201, 162, 39, 0.35)');
        scanGrad.addColorStop(1, 'rgba(201, 162, 39, 0)');
        ctx.strokeStyle = scanGrad;
        ctx.lineWidth = 2 * stress;
        ctx.beginPath();
        ctx.moveTo(cx - 120, scanY);
        ctx.lineTo(cx + 120, scanY);
        ctx.stroke();

        // Hex data labeling
        ctx.fillStyle = 'rgba(201, 162, 39, 0.6)';
        ctx.font = '8px monospace';
        ctx.fillText(`KEYHASH_OK: SHA256_SECURE`, cx - 55, cy - 5);
        ctx.fillText(`ENTROPY: ${(0.999 + Math.sin(frameRef.current * 0.02) * 0.0005).toFixed(5)}`, cx - 45, cy + 10);
        ctx.fillText('// RADAR GATE: COMPLIANT', 15, h - 15);

      } else if (selectedId === 'human-design') {
        // Human-Centered Design: Golden Ratio layout vectors & interactive crosshair coordinates
        const mx = mousePos.current.x;
        const my = mousePos.current.y;

        // Draw perfect alignment circles relative to viewport
        const cx = w / 2;
        const cy = h / 2;

        ctx.strokeStyle = 'rgba(201, 162, 39, 0.08)';
        ctx.lineWidth = 0.5;
        // Focal focal arcs
        ctx.beginPath();
        ctx.arc(cx, cy, 60, 0, Math.PI * 2);
        ctx.arc(cx, cy, 120, 0, Math.PI * 2);
        ctx.stroke();

        // Renders an elegant Fibonacci golden spiral pattern
        ctx.strokeStyle = 'rgba(201, 162, 39, 0.18)';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        let spiralX = cx - 50;
        let spiralY = cy + 30;
        let scale = 1.6;
        let r = 1;
        ctx.moveTo(spiralX, spiralY);
        for (let i = 0; i < 9; i++) {
          const angleStart = (i * Math.PI) / 2;
          const angleEnd = ((i + 1) * Math.PI) / 2;
          r = Math.pow(1.618, i) * scale;
          // Calculate center shifts
          const shiftX = Math.cos(angleStart) * r - Math.cos(angleEnd) * r;
          const shiftY = Math.sin(angleStart) * r - Math.sin(angleEnd) * r;
          ctx.arc(spiralX, spiralY, r, angleStart, angleEnd);
        }
        ctx.stroke();

        // Draw cursor coordinate target crosshair
        ctx.strokeStyle = 'rgba(231, 207, 132, 0.35)';
        ctx.lineWidth = 0.6;
        // Horizontal guides
        ctx.beginPath();
        ctx.moveTo(0, my);
        ctx.lineTo(w, my);
        // Vertical guides
        ctx.moveTo(mx, 0);
        ctx.lineTo(mx, h);
        ctx.stroke();

        // Concentric cursor target
        ctx.strokeStyle = 'rgba(231, 207, 132, 0.65)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(mx, my, 6, 0, Math.PI * 2);
        ctx.stroke();

        // Pixel coordinate readout badge
        ctx.fillStyle = 'rgba(10, 10, 10, 0.95)';
        ctx.fillRect(mx + 10, my - 25, 95, 18);
        ctx.strokeStyle = 'rgba(201, 162, 39, 0.4)';
        ctx.lineWidth = 0.5;
        ctx.strokeRect(mx + 10, my - 25, 95, 18);

        ctx.fillStyle = '#E7CF84';
        ctx.font = '8px monospace';
        ctx.fillText(`LOC: [X:${Math.round(mx)}px Y:${Math.round(my)}px]`, mx + 15, my - 13);

        ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.font = '9px monospace';
        ctx.fillText('// GOLDEN SPIRIT MATRIX / PHILOTAXIS SYSTEM', 15, h - 15);

      } else if (selectedId === 'scale') {
        // Built for Scale: multi-threaded continuous pipeline streams
        const pipeSpacing = w / 4;
        const pipeYStart = 30;
        const pipeHeight = h - 60;

        // Draw three processing pipelines
        for (let p = 0; p < 3; p++) {
          const px = pipeSpacing * (p + 1);

          // Pipe boundaries
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
          ctx.lineWidth = 6;
          ctx.beginPath();
          ctx.moveTo(px, pipeYStart);
          ctx.lineTo(px, pipeYStart + pipeHeight);
          ctx.stroke();

          ctx.strokeStyle = 'rgba(201, 162, 39, 0.1)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(px, pipeYStart);
          ctx.lineTo(px, pipeYStart + pipeHeight);
          ctx.stroke();

          // Flow indicators (glowing headers)
          ctx.fillStyle = 'rgba(201, 162, 39, 0.2)';
          ctx.fillRect(px - 15, pipeYStart - 12, 30, 8);
          ctx.fillStyle = '#E7CF84';
          ctx.font = '7px monospace';
          ctx.fillText(`P-${p+1}`, px - 6, pipeYStart - 6);
        }

        // Draw flowing particles inside pipelines
        scaleParticles.forEach((part) => {
          part.progress += part.speed * stress;
          if (part.progress > 1) {
            part.progress = 0;
            part.pipeIndex = Math.floor(Math.random() * 3);
          }

          const px = pipeSpacing * (part.pipeIndex + 1);
          const py = pipeYStart + part.progress * pipeHeight;

          // Side deviation motion for fluid look
          const sideDrift = Math.sin(part.progress * Math.PI * 6 + part.pipeIndex) * 3;

          const particleGrad = ctx.createRadialGradient(px + sideDrift, py, 0.1, px + sideDrift, py, part.size * 2);
          particleGrad.addColorStop(0, '#E7CF84');
          particleGrad.addColorStop(1, 'rgba(201, 162, 39, 0)');

          ctx.fillStyle = particleGrad;
          ctx.beginPath();
          ctx.arc(px + sideDrift, py, part.size * 2, 0, Math.PI * 2);
          ctx.fill();
        });

        // Live dynamic load charts next to pipelines
        ctx.strokeStyle = 'rgba(201, 162, 39, 0.25)';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(w - 75, h - 80);
        for (let i = 0; i < 20; i++) {
          const val = Math.sin(frameRef.current * 0.08 + i * 0.5) * 15 * stress + (h - 55);
          ctx.lineTo(w - 75 + i * 3, val);
        }
        ctx.stroke();

        ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.font = '9px monospace';
        ctx.fillText('// SCALE TRAFFIC ROUTER // 30K IOPS CAP', 15, h - 15);
        ctx.fillText('LIVE BUFFER LOAD', w - 75, h - 90);

      } else if (selectedId === 'future-ready') {
        // Future-Ready Architecture: Dendritic modular branch tree system
        ctx.strokeStyle = 'rgba(201, 162, 39, 0.15)';
        ctx.lineWidth = 1;

        // Draw connections
        futureNodes.forEach((node) => {
          if (node.scale < 1) node.scale += 0.05 * stress;
          
          const curX = node.parentX + (node.x - node.parentX) * node.scale;
          const curY = node.parentY + (node.y - node.parentY) * node.scale;

          ctx.strokeStyle = 'rgba(201, 162, 39, 0.25)';
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(node.parentX, node.parentY);
          ctx.lineTo(curX, curY);
          ctx.stroke();

          // Node caps
          ctx.fillStyle = '#E7CF84';
          ctx.beginPath();
          ctx.arc(curX, curY, 2.5, 0, Math.PI * 2);
          ctx.fill();

          // Outer pulse on fully grown node
          if (node.scale >= 1 && frameRef.current % 180 === 0) {
            ctx.strokeStyle = 'rgba(231, 207, 132, 0.4)';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.arc(curX, curY, 8, 0, Math.PI * 2);
            ctx.stroke();
          }
        });

        // Ambient grow code nodes from center
        if (frameRef.current % 45 === 0 && futureNodes.length < 25) {
          const parent = futureNodes[Math.floor(Math.random() * futureNodes.length)];
          const angle = Math.random() * Math.PI * 2;
          const len = Math.random() * 45 + 25;
          const targetX = Math.max(20, Math.min(w - 20, parent.x + Math.cos(angle) * len));
          const targetY = Math.max(20, Math.min(h - 50, parent.y + Math.sin(angle) * len));

          futureNodes.push({
            x: targetX,
            y: targetY,
            parentX: parent.x,
            parentY: parent.y,
            scale: 0,
          });
        }

        ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.font = '9px monospace';
        ctx.fillText('// CLICK CANVAS TO GROW COMPONENT DECORATORS', 15, h - 15);
        ctx.fillText(`ACTIVE DEPLOYED CHUNKS: ${futureNodes.length}`, 15, 20);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('click', handleCanvasClick);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [selectedId, isStressTesting]);

  return (
    <div 
      ref={containerRef} 
      className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
    >
      {/* LEFT: Structural list selectors */}
      <div className="lg:col-span-5 flex flex-col justify-between">
        <div className="flex flex-col gap-3.5">
          {principles.map((indicator, idx) => {
            const IconComp = indicator.icon;
            const isSelected = selectedId === indicator.id;
            return (
              <div
                key={indicator.id}
                onClick={() => setSelectedId(indicator.id)}
                className={`group p-5 bg-apex-black/45 border rounded-sm transition-all duration-300 cursor-pointer relative overflow-hidden select-none ${
                  isSelected 
                    ? 'border-apex-gold/50 bg-apex-black shadow-[0_0_15px_rgba(201,162,39,0.06)]' 
                    : 'border-carbon-gray/30 hover:border-carbon-gray/70'
                }`}
              >
                {/* Custom sliding background highlighter */}
                {isSelected && (
                  <motion.div 
                    layoutId="active-indicator-bg"
                    className="absolute inset-0 bg-gradient-to-r from-apex-gold/3 via-transparent to-transparent pointer-events-none"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}

                <div className="flex items-start gap-4 relative z-10">
                  <div className={`w-9 h-9 rounded flex items-center justify-center border transition-all duration-300 ${
                    isSelected 
                      ? 'bg-apex-gold/10 text-apex-gold border-apex-gold/35' 
                      : 'bg-apex-black/80 text-steel-gray border-carbon-gray/40 group-hover:text-platinum-gray group-hover:border-carbon-gray/80'
                  }`}>
                    <IconComp size={16} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-display font-semibold text-xs sm:text-sm text-ivory-white tracking-wide">
                        {indicator.title}
                      </h4>
                      <span className="font-mono text-[8px] text-smoke-gray uppercase tracking-widest shrink-0">
                        0{idx + 1} // {indicator.systemCode.split('-')[1]}
                      </span>
                    </div>
                    
                    {/* Collapsible description details */}
                    <p className={`font-sans text-[11px] sm:text-xs text-steel-gray mt-2 leading-relaxed transition-all duration-300 ${
                      isSelected ? 'text-platinum-gray max-h-[100px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden mt-0'
                    }`}>
                      {indicator.desc}
                    </p>
                  </div>
                </div>

                {/* Secure tick dot anchor */}
                <div className={`absolute right-3 bottom-3 w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isSelected ? 'bg-apex-gold scale-110 shadow-[0_0_6px_#C9A227]' : 'bg-carbon-gray/3 opacity-30'
                }`} />
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT: Live Visual Verification Simulator */}
      <div className="lg:col-span-7 flex flex-col justify-between border border-carbon-gray/50 bg-obsidian/40 rounded-sm relative overflow-hidden min-h-[460px] lg:min-h-[auto]">
        {/* Absolute laser line sweeps in hyper stress state */}
        {isStressTesting && (
          <div className="absolute inset-x-0 top-0 h-[2px] bg-apex-gold/60 animate-pulse pointer-events-none z-30" />
        )}

        {/* Top Telemetry Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-carbon-gray/50 bg-apex-black/60 relative z-10">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-apex-gold animate-ping" />
            <div className="font-mono text-[10px] tracking-wider text-ivory-white flex items-center gap-2">
              <span className="text-apex-gold font-bold">{principles.find(p => p.id === selectedId)?.systemCode}</span>
              <span className="text-smoke-gray">|</span>
              <span className="text-platinum-gray">STATUS: NOMINAL</span>
            </div>
          </div>

          <button
            onClick={runStressTest}
            disabled={isStressTesting}
            className={`font-mono text-[9px] uppercase tracking-wider flex items-center gap-1.5 px-3 py-1.5 border transition-all duration-300 focus:outline-none cursor-pointer ${
              isStressTesting 
                ? 'bg-apex-gold/10 border-apex-gold/45 text-apex-gold animate-pulse'
                : 'bg-transparent border-carbon-gray text-steel-gray hover:text-ivory-white hover:border-apex-gold/30 hover:bg-apex-gold/5'
            }`}
          >
            <Zap size={10} className={isStressTesting ? 'animate-bounce' : ''} />
            {isStressTesting ? `STRESSING [${diagnosticProgress}%]` : 'STRESS TEST'}
          </button>
        </div>

        {/* Diagnostic Canvas Engine Wrapper */}
        <div className="flex-grow relative flex items-center justify-center p-4 bg-apex-black/20 overflow-hidden select-none">
          {/* Virtual scanning backdrop */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-obsidian/30 pointer-events-none" />

          {/* Core Interactive Canvas */}
          <canvas 
            ref={canvasRef} 
            className="w-full h-full min-h-[250px] sm:min-h-[280px] relative z-10 cursor-crosshair"
          />

          {/* Dynamic HUD Diagnostic Metrics */}
          <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-1 text-right pointer-events-none">
            <span className="font-mono text-[7px] text-smoke-gray uppercase tracking-widest">
              DIAGNOSTIC TELEMETRY MATRIX
            </span>
            <span className="font-mono text-[9px] text-apex-gold font-bold">
              SYS_INTEGRITY: 100%
            </span>
            <span className="font-mono text-[8px] text-steel-gray">
              DRIFT_TOLERANCE: &lt;0.002ms
            </span>
          </div>

          {/* Virtual Overlay Compass Ring */}
          <div className="absolute w-[240px] h-[240px] border border-carbon-gray/5 rounded-full pointer-events-none flex items-center justify-center">
            <div className="absolute w-[180px] h-[180px] border border-carbon-gray/10 border-dashed rounded-full" />
          </div>
        </div>

        {/* Bottom Real-Time Scrolling Telemetry Log */}
        <div className="p-4 bg-apex-black/90 border-t border-carbon-gray/50 min-h-[95px] flex flex-col justify-between relative z-10">
          <div className="flex items-center gap-2 mb-2 text-smoke-gray border-b border-carbon-gray/10 pb-1.5">
            <Terminal size={11} className="text-apex-gold" />
            <span className="font-mono text-[8px] tracking-wider uppercase">
              SECURE CONTEXT LOG STREAM // APEX-INTEGRITY-AGENT
            </span>
          </div>
          <div className="font-mono text-[9px] text-steel-gray flex flex-col gap-1 max-h-[50px] overflow-hidden">
            {terminalLogs.map((log, i) => (
              <div key={i} className="flex items-start gap-1">
                <span className="text-apex-gold/50 select-none">&gt;</span>
                <span className="text-platinum-gray truncate">{log}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
