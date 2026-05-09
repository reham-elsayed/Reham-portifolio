import React from 'react';
import { Timer, Layers, CheckCircle2 } from 'lucide-react';

const designSpecs = [
  { 
    icon: Timer, 
    label: 'READING SPEED', 
    value: '1000 WPM', 
    color: '#18DD3D', 
    desc: 'Variable speed control' 
  },
  { 
    icon: Layers, 
    label: 'VECTOR ACCURACY', 
    value: '100%', 
    color: '#ddab45', 
    desc: 'Path-based glyph rendering' 
  },
  { 
    icon: CheckCircle2, 
    label: 'LANG SUPPORT', 
    value: 'AR/EN', 
    color: '#FE41A0', 
    desc: 'Full BIDI & Arabic logic' 
  }
];


export default function TerminalStats() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
      {designSpecs.map((stat, idx) => (
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
  );
}
