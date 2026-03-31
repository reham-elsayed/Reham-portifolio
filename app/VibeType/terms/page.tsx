import Link from 'next/link';

export default function TermsPage() {
  const data = {
    appName: "Text Effects",
    developer: "Reham Elsayed",
    lastUpdated: "March 2026",
    sections: [
      {
        id: "usage",
        title: "01. USAGE RIGHTS",
        content: "You are free to use the generated SVG text effects for both personal and commercial Canva projects. No attribution required, but we love it if you do!",
        color: "bg-yellow-300"
      },
      {
        id: "data",
        title: "02. DATA & PRIVACY",
        content: "We don't store your text or designs. Everything happens in your browser (Client-side). Your creativity stays yours.",
        color: "bg-pink-400"
      },
      {
        id: "liability",
        title: "03. NO BUGS? NO PROMISES",
        content: "While we strive for perfection in every SVG path, the app is provided 'as-is'. We aren't responsible for any design mishaps.",
        color: "bg-cyan-300"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#fdfd96] font-mono px-4 pb-20 pt-24 md:pt-32">
      
      {/* NAVIGATION BAR - Consistent with Privacy Page */}
      <nav className="max-w-5xl mx-auto mb-12">
        <Link 
          href="/VibeType" 
          className="group inline-flex items-center gap-2 bg-black text-white border-4 border-black px-6 py-2 font-black shadow-[4px_4px_0px_0px_rgba(255,105,180,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          RETURN TO VIBE TYPE
        </Link>
      </nav>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <header className="relative mb-20">
          <div className="absolute -inset-2 bg-pink-500 transform rotate-1"></div>
          <div className="relative bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h1 className="text-4xl md:text-7xl font-black uppercase italic leading-none">
              Terms of <br /> Service
            </h1>
            <p className="mt-4 font-black text-sm md:text-lg text-black uppercase tracking-widest bg-yellow-300 inline-block px-2">
              App: {data.appName} // v1.0 // {data.lastUpdated}
            </p>
          </div>
        </header>

        {/* MODERN ZINE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Usage Rights - Spanning 2 columns for impact */}
          <section className="md:col-span-2 bg-white border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-rotate-1 transition-transform">
            <h2 className="text-3xl font-black uppercase mb-6 italic underline decoration-8 decoration-pink-500">
              {data.sections[0].title}
            </h2>
            <p className="text-xl font-bold leading-tight">
              {data.sections[0].content}
            </p>
          </section>

          {/* Data & Privacy Card */}
          <section className="bg-pink-400 border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-white">
            <h2 className="text-2xl font-black uppercase mb-4 italic">
              {data.sections[1].title}
            </h2>
            <p className="text-lg font-bold leading-tight">
              {data.sections[1].content}
            </p>
          </section>

          {/* Liability Card */}
          <section className="bg-cyan-300 border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-2xl font-black uppercase mb-4 italic">
              {data.sections[2].title}
            </h2>
            <p className="text-lg font-bold leading-tight">
              {data.sections[2].content}
            </p>
          </section>

        
        </div>
      </div>
    </main>
  );
}