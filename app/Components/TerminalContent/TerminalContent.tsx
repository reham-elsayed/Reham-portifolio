"use client";
import React from 'react';
import WindowFrame from "../WindowCardComposites/WindowFrame/WindowFrame";
import appData from '../../../public/effectsInfo.json';
import TerminalHeader from './TerminalHeader';
import TerminalStats from './TerminalStats';
import TerminalEffectsPanel from './TerminalEffectsPanel';
import WarningBanner from './WarningBanner';

export default function EngineInspector() {
  const specs = appData.global_engine_specs;
  const effects = appData.effects_registry;

  return (
    <section className="min-h-screen py-16 px-6 bg-[#e5e2d6] relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto flex flex-col items-center gap-12">
        <TerminalHeader title={specs.title} description={specs.description} />
        
        <TerminalStats />
        
        <WindowFrame title="engine_config.sys" style={{ width: '100%', maxWidth: '900px', position: 'relative' }}>
          <TerminalEffectsPanel effects={effects} />
        </WindowFrame>

        <WarningBanner />
      </div>
    </section>
  );
}