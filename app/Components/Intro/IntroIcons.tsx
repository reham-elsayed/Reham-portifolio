'use client';
import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const baseIcons = [
    { id: 'html', src: '/html.svg' },
    { id: 'css', src: '/css.svg' },
    { id: 'react', src: '/react1.svg' },
    { id: 'next', src: '/next.svg' },
    { id: 'tailwind', src: '/tailwind.svg' },
    { id: 'file', src: '/file.svg' },
    { id: 'github', src: '/globe.png' },
    { id: 'screen', src: '/tab.png' },
];

interface IntroIconsProps {
    counter: number;
}

interface ActiveIcon {
    instanceId: string;
    src: string;
    left: number;
    top: number;
    spawnAt: number;
    fallAt: number;
}

const IntroIcons = ({ counter }: IntroIconsProps) => {
    const [activeIcons, setActiveIcons] = useState<ActiveIcon[]>([]);

    // Pre-generate spawn and fall points to keep it stable
    const iconPlan = useMemo(() => {
        const plan: Omit<ActiveIcon, 'instanceId'>[] = [];
        for (let i = 0; i < 40; i++) {
            const base = baseIcons[i % baseIcons.length];
            const spawnAt = i * 2; // Spawn every 2 counts
            const fallAt = Math.min(95, spawnAt + 20 + Math.random() * 20); // Fall after 20-40 counts, max 95
            plan.push({
                src: base.src,
                left: 5 + Math.random() * 90,
                top: 5 + Math.random() * 80,
                spawnAt,
                fallAt
            });
        }
        return plan;
    }, []);

    useEffect(() => {
        const shouldShow = iconPlan.filter(p => counter >= p.spawnAt && counter < p.fallAt + 10); // keep a bit for animation

        const newActive = shouldShow.map((p, idx) => ({
            ...p,
            instanceId: `intro-${idx}-${p.spawnAt}`
        }));

        setActiveIcons(newActive);
    }, [counter, iconPlan]);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <AnimatePresence>
                {activeIcons.map((icon) => {
                    const isFalling = counter >= icon.fallAt;

                    return (
                        <motion.img
                            key={icon.instanceId}
                            src={icon.src}
                            alt=""
                            initial={{ opacity: 0, scale: 0, y: -20 }}
                            animate={{
                                opacity: isFalling ? 0 : 1,
                                scale: isFalling ? 0.8 : 1,
                                y: isFalling ? window.innerHeight + 100 : 0,
                                x: 0,
                                rotate: isFalling ? 20 : 0,
                                left: `${icon.left}%`,
                                top: `${icon.top}%`,
                            }}
                            exit={{ opacity: 0 }}
                            transition={{
                                type: isFalling ? 'tween' : 'spring',
                                ease: isFalling ? 'easeIn' : 'easeOut',
                                duration: isFalling ? 1.5 : 0.5
                            }}
                            style={{
                                position: 'absolute',
                                width: '6vw',
                                height: '6vw',
                                zIndex: 5,
                            }}
                        />
                    );
                })}
            </AnimatePresence>
        </div>
    );
};

export default IntroIcons;
