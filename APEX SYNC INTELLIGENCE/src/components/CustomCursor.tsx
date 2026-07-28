/**
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface Spark {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const sparkIdRef = useRef(0);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    // Disable custom cursor on touch devices for accessibility and performance
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsHidden(true);
      return;
    }

    setIsHidden(false);

    // Track position
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    
    // QuickTo values for buttery smooth sub-pixel tracking
    const xDotTo = gsap.quickTo(dotRef.current, 'x', { duration: 0.1, ease: 'power3.out' });
    const yDotTo = gsap.quickTo(dotRef.current, 'y', { duration: 0.1, ease: 'power3.out' });
    
    const xRingTo = gsap.quickTo(ringRef.current, 'x', { duration: 0.35, ease: 'power2.out' });
    const yRingTo = gsap.quickTo(ringRef.current, 'y', { duration: 0.35, ease: 'power2.out' });

    const onMouseMove = (e: MouseEvent) => {
      if (!dotRef.current || !ringRef.current) return;
      pos.x = e.clientX;
      pos.y = e.clientY;

      xDotTo(pos.x);
      yDotTo(pos.y);

      // Check if hovering over a magnetic element
      const target = e.target as HTMLElement;
      const magneticEl = target.closest('.magnetic');

      if (magneticEl) {
        const rect = magneticEl.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Snap ring to target element center, expand it slightly
        xRingTo(centerX);
        yRingTo(centerY);
        
        gsap.to(ringRef.current, {
          width: rect.width + 12,
          height: rect.height + 12,
          borderRadius: window.getComputedStyle(magneticEl).borderRadius || '4px',
          borderColor: '#E7CF84',
          backgroundColor: 'rgba(201, 162, 39, 0.04)',
          duration: 0.3,
          overwrite: 'auto'
        });

        // Scale dot down slightly
        gsap.to(dotRef.current, {
          scale: 0.5,
          duration: 0.2,
          overwrite: 'auto'
        });
      } else {
        // Return ring to normal state
        xRingTo(pos.x);
        yRingTo(pos.y);

        gsap.to(ringRef.current, {
          width: 28,
          height: 28,
          borderRadius: '50%',
          borderColor: '#C9A227',
          backgroundColor: 'transparent',
          duration: 0.3,
          overwrite: 'auto'
        });

        gsap.to(dotRef.current, {
          scale: 1,
          duration: 0.2,
          overwrite: 'auto'
        });
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      if (!dotRef.current || !ringRef.current) return;
      // Scale down dot and ring on click
      gsap.to(dotRef.current, { scale: 0.7, duration: 0.1 });
      gsap.to(ringRef.current, { scale: 0.8, duration: 0.15 });

      // Generate spark particles
      const newSparks: Spark[] = [];
      const numSparks = 8 + Math.floor(Math.random() * 6);
      
      for (let i = 0; i < numSparks; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 4;
        newSparks.push({
          id: sparkIdRef.current++,
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 2 + Math.random() * 3,
        });
      }
      
      setSparks((prev) => [...prev, ...newSparks]);
    };

    const onMouseUp = () => {
      if (!dotRef.current || !ringRef.current) return;
      gsap.to(dotRef.current, { scale: 1, duration: 0.15 });
      gsap.to(ringRef.current, { scale: 1, duration: 0.2 });
    };

    const onMouseLeave = () => {
      if (!dotRef.current || !ringRef.current) return;
      gsap.to([dotRef.current, ringRef.current], { opacity: 0, duration: 0.2 });
    };

    const onMouseEnter = () => {
      if (!dotRef.current || !ringRef.current) return;
      gsap.to([dotRef.current, ringRef.current], { opacity: 1, duration: 0.2 });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  // Update particles with physics simulation
  useEffect(() => {
    let active = true;
    let frameId: number;

    const updatePhysics = () => {
      if (!active) return;
      
      setSparks((prev) => {
        if (prev.length === 0) return prev;
        const next = prev
          .map((spark) => ({
            ...spark,
            x: spark.x + spark.vx,
            y: spark.y + spark.vy,
            vx: spark.vx * 0.94, // friction
            vy: spark.vy * 0.94 + 0.1, // gravity
            size: spark.size - 0.08, // shrinking
          }))
          .filter((spark) => spark.size > 0.2);

        return next;
      });

      frameId = requestAnimationFrame(updatePhysics);
    };

    frameId = requestAnimationFrame(updatePhysics);

    return () => {
      active = false;
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className={`fixed inset-0 pointer-events-none z-[9999] overflow-hidden ${isHidden ? 'hidden' : ''}`}>
      {/* Golden ring trail */}
      <div
        ref={ringRef}
        style={{ width: 28, height: 28 }}
        className="absolute -top-3.5 -left-3.5 border border-apex-gold/80 rounded-full transition-opacity duration-300"
      />

      {/* Central bright golden core */}
      <div
        ref={dotRef}
        style={{ width: 6, height: 6 }}
        className="absolute -top-0.75 -left-0.75 bg-champagne-gold rounded-full shadow-[0_0_8px_rgba(231,207,132,0.8)]"
      />

      {/* Sparks physics particles */}
      {sparks.map((spark) => (
        <div
          key={spark.id}
          style={{
            left: spark.x,
            top: spark.y,
            width: spark.size,
            height: spark.size,
            backgroundColor: '#E7CF84',
            boxShadow: '0 0 6px #C9A227',
          }}
          className="absolute rounded-full"
        />
      ))}
    </div>
  );
}
