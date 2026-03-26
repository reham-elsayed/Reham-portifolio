"use client";
import React from 'react';
import WindowFrame from "../WindowCardComposites/WindowFrame/WindowFrame";
import appData from '../../../public/effectsInfo.json';

// Helper to map IDs to icons/emojis as requested
const getEffectIcon = (id: string) => {
  const icons: Record<string, string> = {
    "horizontal-lines": "〰️",
    "editorial-tech": "📰",
    "extrude": "🕹️",
    "inflated-text": "🎈",
    "fade-lines": "📉",
    "text-pexel": "👾",
    "word-buzzle": "🔍"
  };
  return icons[id] || "✨";
};

export default function EffectsGrid() {
  return (
    <section className="py-24 px-10 bg-[#e5e2d6] border-t-4 border-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-black uppercase tracking-tighter mb-16 text-black">
          Available Engines
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {appData.effects_registry.map((effect) => (
            <WindowFrame 
              key={effect.id} 
              title={`fx.${effect.id}`}
              style={{ height: '100%', position: 'relative' }}
            >
              <div className="p-8 bg-white border-t-2 border-black h-full flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/40">
                      Vibe: {effect.vibe}
                    </span>
                    <h3 className="text-3xl font-black uppercase text-black">
                      {effect.display_name}
                    </h3>
                  </div>
                  <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all">
                    {getEffectIcon(effect.id)}
                  </span>
                </div>

                <p className="text-sm font-bold text-black/70 leading-relaxed flex-grow">
                  {effect.short_desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-black/5">
                  {effect.key_features.map((feature, fIdx) => (
                    <span 
                      key={fIdx} 
                      className="text-[9px] font-black uppercase tracking-tighter border border-black px-2 py-1 bg-black/5"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </WindowFrame>
          ))}
        </div>
      </div>
    </section>
  );
}