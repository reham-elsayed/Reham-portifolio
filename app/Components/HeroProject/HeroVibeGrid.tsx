"use client";
import React, { useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import WindowFrame from "../WindowCardComposites/WindowFrame/WindowFrame";
import heroData from '../../../public/heroData.json';
import ProjectBackgroundEffect from "../ProjectBackgroundEffect/ProjectBackgroundEffect";

export default function HeroVibeGrid() {
  const scrollRef = useRef(null); // The "Boundaries" for the drag

  const windowVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: (i: number) => ({
      opacity: 1, scale: 1, y: 0,
      transition: { delay: i * 0.15, type: "spring", stiffness: 100, damping: 15 }
    })
  };

  return (
    <section className="relative h-screen w-full bg-[#e5e2d6] overflow-hidden flex items-center justify-center">
      
    

      {/* The Anchor Container - EXACT same size/logic as your working version */}
      <div ref={scrollRef} className="relative w-full h-full max-w-7xl">
        
        {/* CARD 1: MAIN TAGLINE - EXACT LEFT 5% / TOP 20% */}
        <motion.div 
          drag
          dragConstraints={scrollRef} // Keeps it inside the max-w-7xl
          dragMomentum={false}
          custom={0} initial="hidden" animate="visible" variants={windowVariants}
          className="absolute z-30 cursor-grab active:cursor-grabbing" 
          style={{ left: '5%', top: '20%' }}
        >
          <WindowFrame title={heroData.tagline_card.role} style={{ width: '480px' }}>
            <div className="p-8 bg-white border-t-2 border-black flex flex-col gap-5 select-none">
              <h1 className="text-5xl font-black uppercase tracking-tighter leading-[0.85] text-black">
                {heroData.tagline_card.headline}
              </h1>
              <p className="text-lg font-bold text-black/80">
                {heroData.tagline_card.content.split('**').map((part, i) => 
                  i % 2 === 1 ? <span key={i} className="bg-[#F4F04E] border border-black px-1 shadow-[2px_2px_0px_#000]">{part}</span> : part
                )}
              </p>
              <button className="mt-2 bg-black text-white font-black py-4 px-8 uppercase tracking-widest hover:bg-[#4F52BE] transition-all active:scale-95 shadow-[4px_4px_0px_#000]">
                Open in Canva
              </button>
            </div>
          </WindowFrame>
        </motion.div>

        {/* CARD 2: EXTRUDE - EXACT RIGHT 30% / TOP 10% */}
        <motion.div 
          drag
          dragConstraints={scrollRef}
          dragMomentum={false}
          custom={1} initial="hidden" animate="visible" variants={windowVariants}
          className="absolute z-10 cursor-grab active:cursor-grabbing" 
          style={{ right: '30%', top: '10%' }}
        >
          <WindowFrame title={heroData.extrude_preview.role} style={{ width: '360px' }}>
            <div className="p-6 bg-white border-t-2 border-black select-none">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-black uppercase text-black">{heroData.extrude_preview.headline}</h3>
                <span className="text-3xl">{heroData.extrude_preview.icon}</span>
              </div>
              <div className="aspect-video bg-[#0101FE] border-2 border-black" />
            </div>
          </WindowFrame>
        </motion.div>

        {/* CARD 3: INFLATED - EXACT RIGHT 40% / BOTTOM 30% */}
        <motion.div 
          drag
          dragConstraints={scrollRef}
          dragMomentum={false}
          custom={2} initial="hidden" animate="visible" variants={windowVariants}
          className="absolute z-40 cursor-grab active:cursor-grabbing" 
          style={{ right: '40%', bottom: '30%' }}
        >
          <WindowFrame title={heroData.inflated_preview.role} style={{ width: '320px' }}>
            <div className="p-6 bg-white border-t-2 border-black select-none">
               <h3 className="text-lg font-black uppercase mb-2">{heroData.inflated_preview.headline}</h3>
               <div className="p-3 bg-[#F4F04E] border-2 border-black shadow-[3px_3px_0px_#000] text-xs font-mono font-bold">
                 {heroData.inflated_preview.content.replace(/\*\*/g, '')}
               </div>
            </div>
          </WindowFrame>
        </motion.div>

      </div>
    </section>
  );
}