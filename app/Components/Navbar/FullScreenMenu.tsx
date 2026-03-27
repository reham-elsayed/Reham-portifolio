"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const menuVariants: Variants = {
    initial: {
        y: "-100%",
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "50%",
    },
    animate: {
        y: "0%",
        borderBottomLeftRadius: "0%",
        borderBottomRightRadius: "0%",
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1], // smooth, awwwards-style bezier curve
        }
    },
    exit: {
        y: "-100%",
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "50%",
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
        }
    }
};

const linkVariants: Variants = {
    initial: { y: "120%", opacity: 0, rotateZ: 5 },
    animate: (i: number) => ({
        y: "0%",
        opacity: 1,
        rotateZ: 0,
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.1 * i + 0.2, // stagger effect
        }
    })
};

type Props = {
    onClose: () => void;
};

const FullScreenMenu = ({ onClose }: Props) => {
    return (
        <motion.div 
            className="fixed inset-0 z-[100] bg-[#1a1a1a] text-white flex flex-col justify-center items-center overflow-hidden"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {/* Big X close icon */}
            <button 
                onClick={onClose}
                className="absolute top-8 right-8 md:top-12 md:right-12 text-white hover:rotate-90 transition-transform duration-500 ease-in-out"
                aria-label="Close menu"
            >
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            <nav className="flex flex-col gap-6 text-center">
                <div className="overflow-hidden p-2">
                    <motion.div custom={1} variants={linkVariants} initial="initial" animate="animate" exit="initial" className="origin-bottom-left">
                        <Link 
                            href="/" 
                            onClick={onClose} 
                            className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter hover:text-[#ff3b3b] hover:italic transition-all duration-300"
                        >
                            Home
                        </Link>
                    </motion.div>
                </div>
                <div className="overflow-hidden p-2">
                    <motion.div custom={2} variants={linkVariants} initial="initial" animate="animate" exit="initial" className="origin-bottom-left">
                        <Link 
                            href="/VibeType" 
                            onClick={onClose} 
                            className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter hover:text-[#ff3b3b] hover:italic transition-all duration-300"
                        >
                            VibeType
                        </Link>
                    </motion.div>
                </div>
            </nav>
            
            {/* Optional footer info for the menu to make it look premium */}
            <motion.div 
                className="absolute bottom-10 left-0 w-full flex justify-between px-10 text-sm tracking-widest uppercase text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
            >
                <span>Reham Portfolio</span>
                <span>{new Date().getFullYear()}</span>
            </motion.div>
        </motion.div>
    );
};

export default FullScreenMenu;
