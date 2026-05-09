import Link from "next/link";

export const TermsSection = () => {
  const steps = [
    {
      title: "01. INPUT TEXT",
      content: "Paste your reading material into the text area. The engine will automatically parse and prepare it for RSVP rendering."
    },
    {
      title: "02. SET SPEED",
      content: "Adjust the WPM (Words Per Minute) to your comfort level. 300 WPM is a great starting point for beginners."
    },
    {
      title: "03. CUSTOMIZE LOOK",
      content: "Select a font, size, and color that suits your design. All glyphs are converted to vector paths for perfect clarity."
    },
    {
      title: "04. ENABLE HIGHLIGHTING",
      content: "Toggle 'Highlight Middle Letter' for an enhanced speed-reading experience by focusing on the Optimal Recognition Point."
    },
    {
      title: "05. GENERATE",
      content: "Click 'Generate Lottie Runner'. The app will process, upload, and place the animation directly onto your Canva design."
    }
  ];

  return (
    <section className="py-20 bg-[#fdfd96] border-t-4 border-black font-mono">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header with 90s Vibe */}
        <div className="bg-black text-white p-4 inline-block mb-12 transform -rotate-2 border-2 border-black shadow-[8px_8px_0px_0px_rgba(255,105,180,1)]">
          <h2 className="text-4xl font-black uppercase tracking-tighter">
            How to Use
          </h2>
        </div>

        <div className="grid gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white border-4 border-black p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <h3 className="text-2xl font-black mb-3 text-pink-500 uppercase italic">
                {step.title}
              </h3>
              <p className="text-lg leading-relaxed font-bold text-gray-800">
                {step.content}
              </p>
            </div>
          ))}
        </div>

        {/* Support Section with Neobrutalism Button */}
        <div className="mt-16 p-8 bg-cyan-300 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4 uppercase">Need Support?</h3>
          <p className="font-bold mb-6">Got a bug or a feature request? Hit me up directly!</p>
          <Link 
            href="/VibeType/support"
            className="inline-block bg-yellow-400 border-4 border-black px-8 py-3 font-black text-xl hover:bg-white transition-colors shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
          >
            VIEW SUPPORT DETAILS
          </Link>
        </div>
      </div>
    </section>
  );
};