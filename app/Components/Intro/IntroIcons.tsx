'use client';
import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ── Icon list ─────────────────────────────────────────────────────────────────
const BASE_ICONS = [
    '/html.svg',
    '/css.svg',
    '/react1.svg',
    '/next.svg',
    '/tailwind.svg',
    '/file.svg',
    '/globe.png',
    '/tab.png',
];

// ── Seeded pseudo-random (no Math.random() so values never change) ────────────
function seededRand(seed: number) {
    const x = Math.sin(seed + 1) * 10000;
    return x - Math.floor(x);
}

// Build a stable plan once at module level — never regenerates
const ICON_PLAN = Array.from({ length: 24 }, (_, i) => ({
    id: `icon-${i}`,
    src: BASE_ICONS[i % BASE_ICONS.length],
    left: 5 + seededRand(i * 3)     * 86,   // 5 % … 91 %
    top:  5 + seededRand(i * 3 + 1) * 75,   // 5 % … 80 %
    size: 4 + seededRand(i * 3 + 2) * 4,    // 4 vw … 8 vw
    spawnAt: i * 3,                          // one icon every 3 counts
}));

interface IntroIconsProps {
    counter: number;
}

const IntroIcons = ({ counter }: IntroIconsProps) => {
    const dropping = counter >= 95;

    // Which icons should currently be visible (spawned but world not dropping yet)
    const visible = useMemo(
        () => ICON_PLAN.filter((p) => counter >= p.spawnAt),
        [counter]
    );

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <AnimatePresence>
                {visible.map((icon, arrayIdx) => (
                    <motion.img
                        key={icon.id}           // ← stable key → no unmount flicker
                        src={icon.src}
                        alt=""
                        // ── initial: spawns scaled-down from centre ───────────
                        initial={{ opacity: 0, scale: 0 }}
                        // ── animate: settle in then optionally drop ───────────
                        animate={
                            dropping
                                ? {
                                      opacity: 0,
                                      scale: 0.6,
                                      y: '110vh',
                                      rotate: seededRand(arrayIdx) * 30 - 15,
                                  }
                                : { opacity: 1, scale: 1, y: 0, rotate: 0 }
                        }
                        transition={
                            dropping
                                ? {
                                      duration: 0.8 + seededRand(arrayIdx + 99) * 0.6,
                                      ease: [0.55, 0, 1, 0.45],   // ease-in gravity feel
                                      delay: seededRand(arrayIdx + 50) * 0.25,
                                  }
                                : {
                                      type: 'spring',
                                      stiffness: 200,
                                      damping: 18,
                                      delay: 0.04 * (icon.spawnAt / 3), // stagger entry
                                  }
                        }
                        style={{
                            position: 'absolute',
                            left: `${icon.left}%`,
                            top:  `${icon.top}%`,
                            width:  `${icon.size}vw`,
                            height: `${icon.size}vw`,
                            zIndex: `50`,
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default IntroIcons;
