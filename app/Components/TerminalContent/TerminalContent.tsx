"use client";
import React, { useState } from 'react';
import WindowFrame from "../WindowCardComposites/WindowFrame/WindowFrame";
import appData from '../../../public/effectsInfo.json';

// Inline simple SVG icons to replace lucide-react dependencies
const TerminalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <polyline points="4 17 10 11 4 5"></polyline>
    <line x1="12" y1="19" x2="20" y2="19"></line>
  </svg>
);

const CpuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
    <rect x="9" y="9" width="6" height="6"></rect>
    <line x1="9" y1="1" x2="9" y2="4"></line>
    <line x1="15" y1="1" x2="15" y2="4"></line>
    <line x1="9" y1="20" x2="9" y2="23"></line>
    <line x1="15" y1="20" x2="15" y2="23"></line>
    <line x1="20" y1="9" x2="23" y2="9"></line>
    <line x1="20" y1="14" x2="23" y2="14"></line>
    <line x1="1" y1="9" x2="4" y2="9"></line>
    <line x1="1" y1="14" x2="4" y2="14"></line>
  </svg>
);

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const ActivityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

export default function EngineInspector() {
  const specs = appData.global_engine_specs;
  const effects = appData.effects_registry;
  const [activeParam, setActiveParam] = useState<number | null>(null);

  // Replaced generic colors with app's global.css variables
  return (
    <section className="min-h-screen py-16 px-6 bg-[#e5e2d6] relative overflow-hidden">
      {/* Grid Background Pattern */}
      {/* <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(0deg, #292f33 1px, transparent 1px),
            linear-gradient(90deg, #292f33 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      /> */}

      {/* Scan Line Effect */}
      {/* <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #292f33 2px, #292f33 4px)'
        }}
      /> */}

      <div className="relative max-w-6xl mx-auto flex flex-col items-center gap-12">
        {/* Header Section */}
        <div className="text-center">
          {/* Retro Badge */}
          <div className="inline-flex items-center gap-3 bg-[#FE41A0] text-black border-4 border-[#292f33] px-6 py-2 mb-6 shadow-[4px_4px_0px_0px_#292f33]">
            <TerminalIcon />
            <span className="font-mono uppercase tracking-widest font-bold">System Core v3.0</span>
          </div>

          <h2 className="text-6xl md:text-7xl uppercase tracking-tighter mb-4 text-[#292f33] border-8 border-[#292f33] bg-[#ddab45] px-8 py-4 inline-block shadow-[8px_8px_0px_0px_#292f33] transform -rotate-1">
            {specs.title}
          </h2>
          
          <p className="text-xl md:text-2xl mt-8 bg-white text-[#292f33] border-4 border-[#292f33] px-6 py-4 inline-block shadow-[4px_4px_0px_0px_#292f33] max-w-3xl">
            {specs.description}
          </p>
        </div>

        {/* Stats Bar */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: CpuIcon, label: 'CPU LOAD', value: '42%', color: '#18DD3D' },
            { icon: ZapIcon, label: 'POWER', value: 'MAX', color: '#ddab45' },
            { icon: ActivityIcon, label: 'STATUS', value: 'ONLINE', color: '#FE41A0' }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="bg-[#292f33] border-4 border-[#292f33] p-4 flex items-center gap-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)]"
            >
              <div 
                className="w-12 h-12 border-3 border-[#292f33] flex items-center justify-center"
                style={{ backgroundColor: stat.color }}
              >
                <stat.icon />
              </div>
              <div>
                <div className="font-mono text-xs text-white/60 uppercase">{stat.label}</div>
                <div className="font-mono text-xl text-white">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Window */}
        <WindowFrame title="engine_config.sys" style={{ width: '100%', maxWidth: '900px', position: 'relative' }}>
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
                      <div className="mt-2 ml-6 border-4 border-[#292f33] bg-white p-6 shadow-[4px_4px_0px_#292f33]">
                        <div className="font-mono text-sm space-y-4">
                          <div className="flex items-center gap-2 mb-4 border-b-2 border-dashed border-[#292f33]/20 pb-2">
                            <span className="font-bold text-[#4f52be]">CONFIGURABLE SETTINGS:</span>
                          </div>
                          {effect.settings?.map((setting, sIdx) => (
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
        </WindowFrame>

        {/* Bottom Warning Banner */}
        <div className="w-full bg-[#ba4f5e] border-4 border-[#292f33] px-6 py-4 shadow-[6px_6px_0px_#292f33] mb-12">
          <div className="flex items-center justify-center gap-4">
            <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-[#292f33]"></div>
            <span className="font-mono uppercase font-bold tracking-widest text-[#e5e2d6] text-sm md:text-base">
              Pro-Level Typography Engines Active
            </span>
            <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-[#292f33]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}