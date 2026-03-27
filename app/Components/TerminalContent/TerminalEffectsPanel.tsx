"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface TerminalEffectsPanelProps {
  effects: any[];
}

export default function TerminalEffectsPanel({ effects }: TerminalEffectsPanelProps) {
  const [activeParam, setActiveParam] = useState<number | null>(null);

  return (
    <div className="bg-[#0101FE] p-8 md:p-10 border-t-2 border-[#292f33]">
      {/* CRT Effect Overlay */}
      <div className="relative">
        <div className="flex flex-col gap-6">
          
          {/* Loop through actual documented effects from JSON */}
          {effects.map((effect, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer"
              onClick={() => setActiveParam(activeParam === idx ? null : idx)}
            >
              {/* Parameter Line */}
              <div className={`
                border-4 border-[#292f33] p-4 transition-all
                ${activeParam === idx 
                  ? 'bg-[#ddab45] shadow-[6px_6px_0px_#292f33] translate-x-2 -translate-y-2' 
                  : 'bg-[#e5e2d6] shadow-[4px_4px_0px_#292f33] hover:translate-x-1 hover:-translate-y-1'
                }
              `}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-3 h-3 bg-[#18DD3D] border-2 border-[#292f33]"></span>
                      <span className="font-mono font-bold uppercase tracking-wide text-sm md:text-base text-[#292f33]">
                        {effect.display_name} Mode ({effect.id})
                      </span>
                    </div>
                    <div className={`
                      font-mono text-xs md:text-sm
                      ${activeParam === idx ? 'text-[#292f33]' : 'text-[#292f33]/80'}
                    `}>
                      {effect.short_desc}
                    </div>
                  </div>
                  <div className="font-mono text-2xl select-none text-[#292f33]">
                    {activeParam === idx ? '▼' : '▶'}
                  </div>
                </div>
              </div>

              {/* Expanded Info for specific effect parameters */}
              {activeParam === idx && (
                <div className="mt-2 ml-6 border-4 border-[#292f33] bg-white p-6 shadow-[4px_4px_0px_#292f33] flex flex-col md:flex-row gap-6">
                  {/* Config Settings Area */}
                  <div className="flex-1 font-mono text-sm space-y-4">
                    <div className="flex items-center gap-2 mb-4 border-b-2 border-dashed border-[#292f33]/20 pb-2">
                      <span className="font-bold text-[#4f52be]">CONFIGURABLE SETTINGS:</span>
                    </div>
                    {effect.settings?.map((setting: any, sIdx: number) => (
                      <div key={sIdx} className="flex flex-col gap-1">
                        <div className="flex gap-2">
                          <span className="text-[#FE41A0] font-bold">let</span>
                          <span className="text-[#292f33] font-bold">{setting.name}</span>
                        </div>
                        <div className="text-[#292f33]/60 pl-8 italic">
                          // {setting.detail}
                        </div>
                      </div>
                    ))}
                    
                    <div className="mt-4 pt-4 border-t-2 border-[#292f33]/10 flex gap-4 text-xs font-bold uppercase text-[#292f33]/50">
                      <div className="flex gap-2">
                         <span>Vibe:</span>
                         <span className="text-[#18DD3D]">{effect.vibe}</span>
                      </div>
                    </div>
                  </div>

                  {/* Image Preview Card */}
                  <div className="w-full md:w-[280px] lg:w-[320px] flex-shrink-0 md:self-start">
                    <div className="border-4 border-[#292f33] shadow-[4px_4px_0px_#292f33] bg-[#e5e2d6] p-2 flex flex-col">
                      <div className="relative w-full aspect-[4/3] bg-black/5 border-2 border-[#292f33] overflow-hidden group-hover:bg-[#292f33]/5 transition-colors">
                        <Image 
                          src={`/fontSamples/${idx + 1}.png`} 
                          alt={`${effect.display_name} render preview`}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 320px"
                        />
                      </div>
                      <div className="mt-2 text-center font-mono text-[10px] md:text-xs uppercase font-bold text-[#292f33] bg-white border-2 border-[#292f33] py-1.5 flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-[#18DD3D] rounded-full animate-pulse"></span>
                        PREVIEW_RENDER.png
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Bar */}
        <div className="mt-8 pt-6 border-t-4 border-white/20">
          <div className="bg-[#292f33] border-4 border-[#e5e2d6] p-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-[#18DD3D] border-2 border-[#e5e2d6] animate-pulse"></div>
              <span className="font-mono text-[#18DD3D] uppercase text-sm font-bold">
                System Status: All Engines Ready
              </span>
            </div>
            <div className="font-mono text-white/60 text-sm">
              ENGINE_VER: v3.0.1 | 7 EFFECTS LOADED
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
