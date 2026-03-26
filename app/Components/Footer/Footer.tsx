'use client';
import React, { useRef, useEffect, useState } from 'react'
import SVGComp from '../SVGComp/SVGComp'
import CircularText from '../CircularText/CircularText'
import FloatingIcons from '../FloatingIcons/FloatingIcons'

const Footer = () => {
    const footerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        // Aesthetic touch: Real-time clock for the "Dashboard" feel
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
        }, 1000);
        
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (footerRef.current) observer.observe(footerRef.current);
        return () => {
            clearInterval(timer);
            if (footerRef.current) observer.unobserve(footerRef.current);
        };
    }, []);

    return (
        <div ref={footerRef} className="relative h-[120vh] bg-transparent">
            {/* sticky/fixed container to allow the reveal effect */}
            <div className='h-screen w-full sticky top-0 bg-[#1A1D1F] text-white overflow-hidden p-8 md:p-12 flex flex-col justify-between'>
                
                {/* TOP SECTION: The Status Bar (Modern Trend) */}
                <div className='flex justify-between items-start border-b border-white/10 pb-8'>
                    <div className='flex flex-col gap-1'>
                        <span className='text-[10px] uppercase tracking-widest opacity-40 font-black'>Current Status</span>
                        <div className='flex items-center gap-2'>
                            <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                            <span className='font-mono text-xs uppercase'>Available for Remote Roles</span>
                        </div>
                    </div>
                    <div className='hidden md:flex flex-col items-end gap-1'>
                        <span className='text-[10px] uppercase tracking-widest opacity-40 font-black'>Local Time (EGY)</span>
                        <span className='font-mono text-xs'>{currentTime} — UTC+02</span>
                    </div>
                    <div className='flex flex-col items-end gap-1'>
                        <span className='text-[10px] uppercase tracking-widest opacity-40 font-black'>Portfolio Version</span>
                        <span className='font-mono text-xs'>2026 // V3.0</span>
                    </div>
                </div>

                {/* MIDDLE SECTION: Core Info Grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-8 md:gap-12 items-center py-6 md:py-10'>
                    
                    {/* Column 1: Tech Stack */}
                    <div className='lg:col-span-4 flex flex-col gap-6'>
                        <div className='space-y-4 text-center md:text-left'>
                            <h4 className='text-[10px] opacity-40 uppercase tracking-[0.4em] font-black'>Built With</h4>
                            <img 
                                src="https://skillicons.dev/icons?i=typescript,next,tailwind,threejs,framer,git" 
                                alt="Stack" 
                                className="h-6 md:h-8 mx-auto md:mx-0 w-fit object-contain grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className='space-y-1 text-center md:text-left'>
                             <h4 className='text-[10px] opacity-40 uppercase tracking-[0.4em] font-black'>Get In Touch</h4>
                             <a href="mailto:rehamshipl445@gmail.com" className='text-lg md:text-xl lg:text-2xl font-bold hover:text-[#4F52BE] transition-all underline decoration-1 underline-offset-8'>rehamshipl445@gmail.com</a>
                        </div>
                    </div>

                    {/* Column 2: Large Visual Component */}
                    <div className='lg:col-span-4 flex justify-center items-center py-10 md:py-0'>
                        <div className='relative scale-75 md:scale-90 lg:scale-110'>
                            <CircularText text="REHAM SHIPL • FRONTEND DEVELOPER • " />
                            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24'>
                                <SVGComp />
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Navigation */}
                    <div className='lg:col-span-4 flex flex-col gap-8 items-center md:items-end'>
                        <div className='flex flex-col items-center md:items-end gap-3 text-center md:text-right'>
                            <h4 className='text-[10px] opacity-40 uppercase tracking-[0.4em] font-black'>Socials</h4>
                            <div className='flex gap-6 font-bold text-sm uppercase'>
                                <a href="https://www.linkedin.com/in/reham-elsayed-shibl" target="_blank" rel="noopener noreferrer" className='hover:text-[#4F52BE] hover:-translate-y-1 transition-all'>LinkedIn</a>
                                <a href="https://github.com/reham-elsayed" target="_blank" rel="noopener noreferrer" className='hover:text-[#4F52BE] hover:-translate-y-1 transition-all'>GitHub</a>
                                <a href="#" className='hover:text-[#4F52BE] hover:-translate-y-1 transition-all'>Resume</a>
                            </div>
                        </div>
                        <div className='flex flex-col items-center md:items-end gap-3 text-center md:text-right'>
                            <h4 className='text-[10px] opacity-40 uppercase tracking-[0.4em] font-black'>Sitemap</h4>
                            <div className='flex gap-6 font-bold text-sm uppercase'>
                                <a href="#work" className='opacity-60 hover:opacity-100 transition-all'>Work</a>
                                <a href="#about" className='opacity-60 hover:opacity-100 transition-all'>About</a>
                                <a href="#notes" className='opacity-60 hover:opacity-100 transition-all'>Notes</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION: The Big Name Branding */}
                <div className='w-full overflow-hidden flex flex-col items-center'>
                    <h2 className='text-[clamp(4rem,18vw,25rem)] font-black leading-[0.75] tracking-tighter text-white/5 select-none'>
                        REHAM SHIPL
                    </h2>
                    <div className='w-full flex justify-between pt-4 border-t border-white/5 text-[10px] font-mono opacity-30'>
                        <span>© 2026 ALL RIGHTS RESERVED</span>
                        <span>DEVELOPED WITH ⚡ IN EGYPT</span>
                    </div>
                </div>

            </div>
            
            <FloatingIcons isVisible={isVisible} />
        </div>
    )
}

export default Footer;