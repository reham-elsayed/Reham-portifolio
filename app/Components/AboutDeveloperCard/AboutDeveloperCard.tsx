"use client";
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import WindowFrame from "../WindowCardComposites/WindowFrame/WindowFrame";
import aboutData from '../../../public/about.json';
import TextChangeColorSize from '../TextChaingeColorSize/TextChangeColorSize';

export default function AboutDeveloperCard() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });
    const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress:backgroundScroll } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const background = useTransform(backgroundScroll, [0.5, 0.7],
        ["#e5e2d6", "#2c3236"])
    // --- REFINED ANIMATION VALUES ---

    // Card 1: Slides slightly left and stays as a base
    const y1 = useTransform(scrollYProgress, [0, 0.4], ["0%", "-10%"]);
    const x1 = useTransform(scrollYProgress, [0, 0.4], ["0%", "-15%"]);
    const scale1 = useTransform(scrollYProgress, [0.4, 0.8], [1, 0.9]);
    const rotate1 = useTransform(scrollYProgress, [0, 0.4], [0, -4]);

    // Card 2: Comes from bottom-right to slightly right of center
    const y2 = useTransform(scrollYProgress, [0.2, 0.6], ["150%", "5%"]);
    const x2 = useTransform(scrollYProgress, [0.2, 0.6], ["20%", "10%"]);
    const rotate2 = useTransform(scrollYProgress, [0.2, 0.6], [15, 2]);

    // Card 3: Comes from bottom-left to overlap the middle
    const y3 = useTransform(scrollYProgress, [0.5, 0.9], ["150%", "15%"]);
    const x3 = useTransform(scrollYProgress, [0.5, 0.9], ["-20%", "-5%"]);
    const rotate3 = useTransform(scrollYProgress, [0.5, 0.9], [-15, -2]);

    const IntroCard = ({ data, style, zIndex }: { data: any, style: any, zIndex: number }) => (
        <motion.div
            style={{ ...style, zIndex }}
            className="absolute flex items-center justify-center pointer-events-none w-full z-50"
        >
            <div className="pointer-events-auto w-[90vw] max-w-[550px]">
                <WindowFrame title={data.role} style={{ position: 'relative', width: '100%' }}>
                    <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 bg-white border-t-2 border-black">
                        <div className="flex items-start justify-between">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-[0.9] max-w-[70%]">
                                {data.headline}
                            </h3>
                            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl grayscale hover:grayscale-0 transition-all duration-300">
                                {data.icon}
                            </span>
                        </div>
                        
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-relaxed text-black">
                            {data.content.split('**').map((part, i) => 
                                i % 2 === 1 ? (
                                    <strong key={i} className="bg-[#F4F04E] border-2 border-black px-1.5 py-0.5 mx-0.5 shadow-[2px_2px_0px_#000]">
                                        {part}
                                    </strong>
                                ) : part
                            )}
                        </p>

                        <div className="mt-2 sm:mt-4 flex items-center justify-between pt-4 border-t-4 border-black">
                            <div className="flex gap-1.5 sm:gap-2">
                                {[1, 2, 3].map(dot => (
                                    <div 
                                        key={dot} 
                                        className={`w-3 h-3 sm:w-4 sm:h-4 border-2 border-black shadow-[1px_1px_0px_#000] ${data.id >= dot ? 'bg-[#F4F04E]' : 'bg-transparent'}`} 
                                    />
                                ))}
                            </div>
                            <span className="text-[10px] sm:text-xs font-mono font-black uppercase tracking-widest">
                                DEV_LOG_ID: 00{data.id}
                            </span>
                        </div>
                    </div>
                </WindowFrame>
            </div>
        </motion.div>
    );

    return (
     <motion.section
                ref={ref}
                style={{ backgroundColor: background }}
                className='relative '>
                <TextChangeColorSize text="About Me"colorStart="rgb(79, 82, 190)" colorEnd="rgb(41, 47, 51)" />
          <div ref={containerRef} className="relative h-[400vh]">
            {/* Sticky container ensures windows stay visible while you scroll the 400vh height */}
            <div className="sticky top-0 h-[120vh] w-full flex items-center justify-center overflow-hidden  my-20 ">
                <div className="relative w-full h-full  flex items-center justify-center">
                    <IntroCard 
                        data={aboutData[0]} 
                        style={{ y: y1, x: x1, scale: scale1, rotate: rotate1 }} 
                        zIndex={20}
                    />
                    <IntroCard 
                        data={aboutData[1]} 
                        style={{ y: y2, x: x2, rotate: rotate2 }} 
                        zIndex={30}
                    />
                    <IntroCard 
                        data={aboutData[2]} 
                        style={{ y: y3, x: x3, rotate: rotate3 }} 
                        zIndex={40}
                    />
                </div>
            </div>
            </div>
        </motion.section>
     
    );
}