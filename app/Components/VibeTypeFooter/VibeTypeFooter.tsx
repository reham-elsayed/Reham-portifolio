import Link from "next/link";

export const VibeFooter = () => {
  return (
    <footer className="bg-black text-white py-10 border-t-8 border-yellow-300 font-mono">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-2xl font-black italic tracking-tighter">TEXT EFFECTS BY REHAM</p>
        
        <div className="flex gap-8 font-bold text-lg">
          <Link href="/VibeType/privacy-policy" className="hover:text-yellow-300 transition-colors underline decoration-2">PRIVACY</Link>
          <Link href="/VibeType/terms" className="hover:text-pink-400 transition-colors underline decoration-2">TERMS</Link>
          <Link href="mailto:rehamshipl666@gmail.com" className="hover:text-cyan-300 transition-colors underline decoration-2">SUPPORT</Link>
        </div>
      </div>
    </footer>
  );
};