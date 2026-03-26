"use client";
import React, { useState } from 'react';
import Logo from '../Icons/Logo';
import FullScreenMenu from './FullScreenMenu';
import { AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Top Left Logo Icon */}
            {/* mix-blend-difference helps it be visible on any background, highly popular on awwwards */}
            <div 
                className={`fixed top-6 left-6 z-50 cursor-pointer mix-blend-difference transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} 
                onClick={() => setIsOpen(true)}
            >
                <div className="scale-50 origin-top-left transition-transform duration-300 hover:scale-75">
                    <Logo />
                </div>
            </div>

            <AnimatePresence mode="wait">
                {isOpen && <FullScreenMenu onClose={() => setIsOpen(false)} />}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
