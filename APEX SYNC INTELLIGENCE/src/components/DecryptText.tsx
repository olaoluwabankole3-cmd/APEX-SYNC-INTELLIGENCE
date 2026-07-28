/**
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';

interface DecryptTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const GLYPHS = '01#X$%&+=-_?*^<>[]@{}';

export default function DecryptText({ text, className = '', delay = 0, speed = 30 }: DecryptTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let timer: NodeJS.Timeout;
    let iteration = 0;
    const targetLength = text.length;

    const startAnimation = () => {
      timer = setInterval(() => {
        const decrypted = text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('');

        setDisplayText(decrypted);

        if (iteration >= targetLength) {
          clearInterval(timer);
        }
        
        // Advance iteration slightly slower than update speed to give a pleasant cycling effect
        iteration += 1 / 3;
      }, speed);
    };

    const delayTimeout = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(delayTimeout);
      clearInterval(timer);
    };
  }, [hasAnimated, text, speed, delay]);

  return (
    <span ref={containerRef} className={`${className} inline-block font-mono tracking-wide`}>
      {displayText || text}
    </span>
  );
}
