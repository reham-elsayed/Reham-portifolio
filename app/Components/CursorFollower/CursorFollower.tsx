'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const CursorFollower = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the cursor movement
    const springConfig = { damping: 25, stiffness: 200 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleMouseMove = (e: MouseEvent) => {
            // Update position
            mouseX.set(e.clientX - 64); // Center the image (assuming roughly 128px width)
            mouseY.set(e.clientY - 64);

            // Show cursor and reset timeout
            setIsVisible(true);
            clearTimeout(timeoutId);

            // Hide after 2 seconds of inactivity
            timeoutId = setTimeout(() => {
                setIsVisible(false);
            }, 500);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(timeoutId);
        };
    }, [mouseX, mouseY]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    style={{
                        position: 'fixed',
                        left: x,
                        top: y,
                        zIndex: 9999, // Ensure it's on top
                        pointerEvents: 'none', // Don't block clicks
                    }}
                    initial={{ scale: 0.5, translateY: '100%' }}
                    animate={{ scale: 1, translateY: 0 }}
                    exit={{ scale: 0.5, translateY: '100%' }}
                    transition={{ duration: 0.2 }}
                >
                    <Image
                        src="/react1.svg"
                        alt="Computer Cursor"
                        width={128}
                        height={128}
                        className="w-32 h-32 object-contain"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CursorFollower;
