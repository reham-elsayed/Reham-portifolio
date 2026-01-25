'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type BaseIcon = {
  id: string; // base id
  src: string;
};

const baseIcons: BaseIcon[] = [
  { id: 'html', src: '/html.svg' },
  { id: 'css', src: '/css.svg' },
  { id: 'react', src: '/react1.svg' },
  { id: 'next', src: '/next.svg' },
  { id: 'tailwind', src: '/tailwind.svg' },
  { id: 'file', src: '/file.svg' },
  { id: 'github', src: '/globe.png' },
  { id: 'screen', src: '/tab.png' },
];

type Icon = {
  id: string;
  src: string;
  leftPct: number; // percent from left
  topPct: number; // percent from top
  size: number; // px
};

type IconState = Icon & {
  left: number;
  top: number;
  status: 'idle' | 'visible' | 'falling';
};

interface FloatingIconsProps {
  isVisible: boolean;
}

export default function FloatingIcons({ isVisible }: FloatingIconsProps) {
  const [icons, setIcons] = useState<IconState[]>([]);

  useEffect(() => {
    if (!isVisible) return; // Don't generate if not visible initially
    if (icons.length > 0) return; // Don't regenerate if already done

    // Generate random icons on client-side only to avoid hydration mismatch
    const generateIcons = (count: number): Icon[] => {
      const generated: Icon[] = [];
      for (let i = 0; i < count; i++) {
        const base = baseIcons[Math.floor(Math.random() * baseIcons.length)];
        generated.push({
          id: `${base.id}-${i}`,
          src: base.src,
          leftPct: Math.floor(Math.random() * 90) + 5, // 5% to 95%
          topPct: Math.floor(Math.random() * 90) + 5, // 5% to 95%
          size: 150,
        });
      }
      return generated;
    };

    const initialIcons = generateIcons(30);

    // Calculate pixel positions immediately
    const calculatedIcons: IconState[] = initialIcons.map((ic) => ({
      ...ic,
      left: Math.round((window.innerWidth * ic.leftPct) / 100),
      top: Math.round((window.innerHeight * ic.topPct) / 100),
      status: 'idle',
    }));

    setIcons(calculatedIcons);

    const handleResize = () => {
      setIcons((prev) =>
        prev.map((i) => ({
          ...i,
          left: Math.round((window.innerWidth * i.leftPct) / 100),
          top: Math.round((window.innerHeight * i.topPct) / 100),
        }))
      );
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isVisible]);

  const handleEnter = (id: string) => {
    setIcons((prev) => prev.map((i) => (i.id === id ? { ...i, status: 'visible' } : i)));
  };

  const handleLeave = (id: string) => {
    setIcons((prev) => prev.map((i) => (i.id === id ? { ...i, status: 'falling' } : i)));
  };

  const handleAnimationComplete = (id: string) => {
    setIcons((prev) => prev.map((i) => (i.id === id && i.status === 'falling' ? { ...i, status: 'idle' } : i)));
  };

  if (!isVisible) return null;

  return (
    <>
      {icons.map((i) => {
        const fallTarget = typeof window !== 'undefined' ? window.innerHeight + 100 : i.top + 300;

        return (
          <React.Fragment key={i.id}>
            {/* Trigger Zone (Invisible) */}
            <div
              style={{
                position: 'fixed',
                left: i.left,
                top: i.top,
                width: i.size,
                height: i.size,
                zIndex: 10000,
                cursor: 'pointer',
                // border: '1px solid red', // Uncomment for debugging position
              }}
              onMouseEnter={() => handleEnter(i.id)}
              onMouseLeave={() => handleLeave(i.id)}
            />

            {/* Visual Icon */}
            <motion.img
              src={i.src}
              alt={i.id}
              style={{
                position: 'fixed',
                left: i.left,
                top: i.top,
                width: i.size,
                height: i.size,
                zIndex: 9999,
                pointerEvents: 'none', // Ignore pointer events so trigger works
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                top: i.status === 'falling' ? fallTarget : i.top,
                opacity: i.status === 'visible' ? 1 : i.status === 'falling' ? 0 : 0,
                rotate: i.status === 'falling' ? 45 : 0,
                scale: i.status === 'visible' ? 1.1 : 0.8,
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
                opacity: { duration: 0.5 }
              }}
              onAnimationComplete={() => handleAnimationComplete(i.id)}
              aria-hidden={true}
            />
          </React.Fragment>
        );
      })}
    </>
  );
}


