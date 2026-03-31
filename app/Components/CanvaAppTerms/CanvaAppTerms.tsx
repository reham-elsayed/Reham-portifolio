export const TermsSection = () => {
  const terms = [
    {
      title: "01. USAGE RIGHTS",
      content: "Feel free to use the generated SVG text effects for both personal and commercial Canva projects. You own your creations!"
    },
    {
      title: "02. DATA PRIVACY",
      content: "We don't store your data. All text-to-SVG generation happens locally in your Canva editor. No tracking, no logs."
    },
    {
      title: "03. LIMITATIONS",
      content: "The app is provided 'as-is'. While we aim for pixel-perfect effects, we are not liable for any design errors during export."
    }
  ];

  return (
    <section className="py-20 bg-[#fdfd96] border-t-4 border-black font-mono">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header with 90s Vibe */}
        <div className="bg-black text-white p-4 inline-block mb-12 transform -rotate-2 border-2 border-black shadow-[8px_8px_0px_0px_rgba(255,105,180,1)]">
          <h2 className="text-4xl font-black uppercase tracking-tighter">
            Terms of Service
          </h2>
        </div>

        <div className="grid gap-8">
          {terms.map((term, index) => (
            <div 
              key={index} 
              className="bg-white border-4 border-black p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <h3 className="text-2xl font-black mb-3 text-pink-500 uppercase italic">
                {term.title}
              </h3>
              <p className="text-lg leading-relaxed font-bold text-gray-800">
                {term.content}
              </p>
            </div>
          ))}
        </div>

        {/* Support Section with Neobrutalism Button */}
        <div className="mt-16 p-8 bg-cyan-300 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4 uppercase">Need Support?</h3>
          <p className="font-bold mb-6">Got a bug or a feature request? Hit me up directly!</p>
          <a 
            href="mailto:rehamshipl666@gmail.com"
            className="inline-block bg-yellow-400 border-4 border-black px-8 py-3 font-black text-xl hover:bg-white transition-colors shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
          >
            SEND AN EMAIL
          </a>
        </div>
      </div>
    </section>
  );
};