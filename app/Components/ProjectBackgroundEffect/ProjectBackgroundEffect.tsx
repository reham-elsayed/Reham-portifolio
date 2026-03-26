import React from 'react';

export default function ProjectBackgroundEffect() {
  return (
    <div 
      className="absolute inset-0 pointer-events-none mix-blend-hard-light z-0 grain-effect"
      style={{
        backgroundImage: 'url(/static.webp)',
        backgroundPosition: '50%',
        opacity: 0.02, /* Reduced from 0.05 from the home page for less noise */
      }}
    />
  );
}
