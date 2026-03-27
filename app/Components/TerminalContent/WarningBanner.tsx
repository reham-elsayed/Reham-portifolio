import React from 'react';

export default function WarningBanner() {
  return (
    <div className="w-full bg-[#ba4f5e] border-4 border-[#292f33] px-6 py-4 shadow-[6px_6px_0px_#292f33] mb-12">
      <div className="flex items-center justify-center gap-4">
        <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-[#292f33]"></div>
        <span className="font-mono uppercase font-bold tracking-widest text-[#e5e2d6] text-sm md:text-base">
          Pro-Level Typography Engines Active
        </span>
        <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-[#292f33]"></div>
      </div>
    </div>
  );
}
