import Link from 'next/link';

export default function PrivacyPage() {
  return (
    // Added min-h-screen and better top padding to avoid menu conflict
    <main className="min-h-screen bg-[#B298DC] font-mono px-4 pb-20 pt-24 md:pt-32">
      
      {/* 1. FIXED NAVIGATION BAR - Avoids Menu Conflict */}
      <nav className="max-w-5xl mx-auto mb-12">
        <Link 
          href="/VibeType" 
          className="group inline-flex items-center gap-2 bg-yellow-300 border-4 border-black px-6 py-2 font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          RETURN TO VIBE TYPE
        </Link>
      </nav>

      {/* 2. MAIN CONTENT CONTAINER */}
      <div className="max-w-5xl mx-auto">
        
        {/* Header with Offset Style */}
        <header className="relative mb-20">
          <div className="absolute -inset-2 bg-black transform -rotate-1"></div>
          <div className="relative bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(255,105,180,1)]">
            <h1 className="text-4xl md:text-7xl font-black uppercase italic leading-none">
              Privacy <br /> Policy
            </h1>
            <p className="mt-4 font-black text-sm md:text-lg text-gray-500 uppercase tracking-widest">
              Last Updated: March 2026 // No Tracking. No Logs.
            </p>
          </div>
        </header>

        {/* 3. MODERN GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Section 01 - Large spanning */}
          <section className="md:col-span-2 bg-white border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4">
              <span className="text-4xl font-black text-pink-500">01</span>
              <div>
                <h2 className="text-2xl font-black uppercase mb-4 underline decoration-4 decoration-cyan-300">Data Collection</h2>
                <p className="text-lg font-bold leading-snug">
                  Text Effects is a "Privacy-First" tool. We do not collect, store, or share any personal data or the text you input into our SVG generator.
                </p>
              </div>
            </div>
          </section>

          {/* Section 02 - Left Side */}
          <section className="bg-green-300 border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
             <span className="text-4xl font-black text-white stroke-black">02</span>
             <h2 className="text-2xl font-black uppercase mt-2 mb-4 italic">Processing</h2>
             <p className="text-lg font-bold leading-tight text-black/80">
              Everything happens **locally** in your browser via the Canva SDK. No design data ever reaches our servers.
             </p>
          </section>

          {/* Section 03 - Right Side */}
          <section className="bg-cyan-300 border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
             <span className="text-4xl font-black">03</span>
             <h2 className="text-2xl font-black uppercase mt-2 mb-4 italic">Cookies</h2>
             <p className="text-lg font-bold leading-tight">
              We don't use cookies to track you. We’re interested in your design skills, not your browser history.
             </p>
          </section>

        
        
        </div>
      </div>
    </main>
  );
}