import Link from 'next/link';
import { Mail, MessageCircle, HelpCircle } from 'lucide-react';

export default function SupportPage() {
  const supportEmail = "rehamshipl666@gmail.com";

  return (
    <main className="min-h-screen bg-[#7ae582] font-mono px-4 pb-20 pt-24 md:pt-32">
      
      {/* NAVIGATION BAR - Consistent with other VibeType pages */}
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
          <div className="absolute -inset-2 bg-yellow-300 transform rotate-1"></div>
          <div className="relative bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h1 className="text-4xl md:text-7xl font-black uppercase italic leading-none">
              Support <br /> & Help
            </h1>
            <p className="mt-4 font-black text-sm md:text-lg text-black uppercase tracking-widest bg-pink-400 inline-block px-2">
              Get in touch // v1.0 // {supportEmail}
            </p>
          </div>
        </header>

        {/* MODERN ZINE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Direct Email Card - Large Spanning */}
          <section className="md:col-span-2 bg-white border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-rotate-1 transition-transform">
            <div className="flex items-start gap-4">
              <div className="bg-pink-500 p-3 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Mail className="text-white w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-black uppercase mb-4 italic underline decoration-8 decoration-yellow-300">
                  Direct Contact
                </h2>
                <p className="text-xl font-bold leading-tight mb-6">
                  Got questions, bugs, or just want to say hi? Send an email directly to the developer. We aim to respond as fast as a React render.
                </p>
                <a 
                  href={`mailto:${supportEmail}`}
                  className="inline-block bg-black text-white text-xl font-black px-8 py-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(122,229,130,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  SEND EMAIL NOW
                </a>
              </div>
            </div>
          </section>

          {/* Response Time Card */}
          <section className="bg-pink-400 border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-white">
            <div className="bg-white p-2 border-2 border-black inline-block mb-4">
              <HelpCircle className="text-black w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black uppercase mb-4 italic">
              01. Response Time
            </h2>
            <p className="text-lg font-bold leading-tight">
              I usually check my inbox twice a day. Expect a response within 24 to 48 hours for most queries.
            </p>
          </section>

          {/* Feature Requests Card */}
          <section className="bg-cyan-300 border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <div className="bg-white p-2 border-2 border-black inline-block mb-4">
              <MessageCircle className="text-black w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black uppercase mb-4 italic text-black">
              02. Feedback
            </h2>
            <p className="text-lg font-bold leading-tight text-black">
              Want a specific text effect? Or found a weird bug in the SVG generation? Your feedback helps Vibe Type grow! 
            </p>
          </section>

          {/* Developer Note (Zine Style) */}
          <section className="md:col-span-2 bg-yellow-300 border-4 border-black p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] text-center">
            <p className="text-sm font-black uppercase tracking-tighter">
              MADE BY REHAM ELSAYED • BUILT WITH NEXT.JS • DESIGNED TO BE BOLD • ALL RIGHTS RESERVED
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
