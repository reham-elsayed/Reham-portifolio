import React from 'react';
import { TerminalIcon } from './Icons';

interface TerminalHeaderProps {
  title: string;
  description: string;
}

export default function TerminalHeader({ title, description }: TerminalHeaderProps) {
  return (
    <div className="text-center">
      {/* Retro Badge */}
      <div className="inline-flex items-center gap-3 bg-[#FE41A0] text-black border-4 border-[#292f33] px-6 py-2 mb-6 shadow-[4px_4px_0px_0px_#292f33]">
        <TerminalIcon />
        <span className="font-mono uppercase tracking-widest font-bold">System Core v3.0</span>
      </div>

      <h2 className="text-6xl md:text-7xl uppercase tracking-tighter mb-4 text-[#292f33] border-8 border-[#292f33] bg-[#ddab45] px-8 py-4 inline-block shadow-[8px_8px_0px_0px_#292f33] transform -rotate-1">
        {title}
      </h2>
      
      <p className="text-xl md:text-2xl mt-8 bg-white text-[#292f33] border-4 border-[#292f33] px-6 py-4 inline-block shadow-[4px_4px_0px_0px_#292f33] max-w-3xl">
        {description}
      </p>
    </div>
  );
}
